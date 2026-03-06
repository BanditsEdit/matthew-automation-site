import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { resolve } from "path";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CALENDAR_SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
].join(" ");

/**
 * Normalize PEM: ensure correct line endings and 64-char base64 lines so node-forge can parse.
 * Handles keys that were stored as one long line or with wrong newlines.
 */
function normalizePem(pem: string): string {
  const trimmed = pem.trim().replace(/\r/g, "").replace(/\\n/g, "\n");
  const begin = "-----BEGIN PRIVATE KEY-----";
  const end = "-----END PRIVATE KEY-----";
  if (!trimmed.includes(begin) || !trimmed.includes(end)) {
    throw new Error("Invalid PEM: missing BEGIN or END line. Use GOOGLE_APPLICATION_CREDENTIALS (file path) or GOOGLE_SERVICE_ACCOUNT_JSON_BASE64.");
  }
  const base64 = trimmed
    .replace(begin, "")
    .replace(end, "")
    .replace(/\s/g, "");
  if (base64.length < 100) {
    throw new Error("Private key looks truncated. Put the full JSON in a file and set GOOGLE_APPLICATION_CREDENTIALS to that path, or use GOOGLE_SERVICE_ACCOUNT_JSON_BASE64.");
  }
  const lines: string[] = [];
  for (let i = 0; i < base64.length; i += 64) {
    lines.push(base64.slice(i, i + 64));
  }
  return `${begin}\n${lines.join("\n")}\n${end}\n`;
}

/**
 * Create a signed JWT for Google OAuth2 using node-forge (pure JS).
 * This avoids Node's OpenSSL for the private key, which causes
 * "error:1E08010C:DECODER routines::unsupported" on some platforms.
 */
function createSignedJWT(
  clientEmail: string,
  privateKeyPem: string
): string {
  const forge = require("node-forge");
  const normalizedPem = normalizePem(privateKeyPem);

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    sub: clientEmail,
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
    scope: CALENDAR_SCOPES,
  };

  const base64url = (input: string | object) => {
    const str = typeof input === "string" ? input : JSON.stringify(input);
    return Buffer.from(str, "utf8")
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  };

  const signingInput = `${base64url(header)}.${base64url(payload)}`;

  const privateKey = forge.pki.privateKeyFromPem(normalizedPem);
  const md = forge.md.sha256.create();
  md.update(signingInput, "utf8");
  const signature = privateKey.sign(md);
  const signatureBase64 = Buffer.from(signature, "binary")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return `${signingInput}.${signatureBase64}`;
}

/**
 * Get an access token using the JWT bearer grant (no OpenSSL key decoding in Node).
 */
async function getAccessToken(clientEmail: string, privateKeyPem: string): Promise<string> {
  const jwt = createSignedJWT(clientEmail, privateKeyPem);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Google token error: ${res.status} ${err}`);
  }
  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("No access_token in Google response");
  return data.access_token;
}

/**
 * Create a calendar event with Meet link via REST API.
 */
async function createCalendarEvent(
  accessToken: string,
  calendarId: string,
  event: {
    summary: string;
    description: string;
    start: { dateTime: string; timeZone: string };
    end: { dateTime: string; timeZone: string };
    attendees?: { email: string }[];
    conferenceData?: {
      createRequest: {
        requestId: string;
        conferenceSolutionKey: { type: string };
      };
    };
  }
) {
  const hasConference = !!event.conferenceData;
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events${hasConference ? "?conferenceDataVersion=1" : ""}`;
  const res = await fetch(
    url,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Calendar API error: ${res.status} ${err}`);
  }
  return (await res.json()) as {
    id?: string;
    htmlLink?: string;
    hangoutLink?: string;
    conferenceData?: {
      entryPoints?: { uri?: string }[];
    };
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { startDateTime, endDateTime, name, email } = body as {
      startDateTime?: string;
      endDateTime?: string;
      name?: string;
      email?: string;
    };

    if (!startDateTime || !endDateTime || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields: startDateTime, endDateTime, name, email" },
        { status: 400 }
      );
    }

    const calendarId =
      process.env.GOOGLE_CALENDAR_ID || "primary";

    let serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const credsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    const base64Json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64;

    if (credsPath) {
      const absolutePath = resolve(process.cwd(), credsPath);
      try {
        serviceAccountJson = await readFile(absolutePath, "utf8");
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        return NextResponse.json(
          { error: "Failed to read GOOGLE_APPLICATION_CREDENTIALS file", message: msg },
          { status: 503 }
        );
      }
    } else if (base64Json) {
      try {
        serviceAccountJson = Buffer.from(base64Json, "base64").toString("utf8");
      } catch {
        return NextResponse.json(
          { error: "Invalid GOOGLE_SERVICE_ACCOUNT_JSON_BASE64: not valid base64" },
          { status: 503 }
        );
      }
    }

    if (!serviceAccountJson) {
      return NextResponse.json(
        {
          error: "Booking not configured",
          message:
            "Set GOOGLE_APPLICATION_CREDENTIALS (path to JSON file), GOOGLE_SERVICE_ACCOUNT_JSON, or GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 (and GOOGLE_CALENDAR_ID) in your environment.",
        },
        { status: 503 }
      );
    }

    const credentials = JSON.parse(serviceAccountJson) as {
      client_email?: string;
      private_key?: string;
    };

    if (!credentials.client_email || !credentials.private_key) {
      return NextResponse.json(
        { error: "Invalid credentials: missing client_email or private_key" },
        { status: 503 }
      );
    }

    const privateKeyPem = (credentials.private_key as string)
      .trim()
      .replace(/\r/g, "")
      .replace(/\\n/g, "\n");

    const accessToken = await getAccessToken(credentials.client_email, privateKeyPem);

    // Service accounts can't add attendees without Domain-Wide Delegation. Create event; add Meet when the calendar supports it (e.g. Workspace).
    const baseEvent = {
      summary: `Meeting with ${name}`,
      description: `Scheduled via website. Guest: ${name} (${email}).`,
      start: { dateTime: startDateTime, timeZone: "UTC" },
      end: { dateTime: endDateTime, timeZone: "UTC" },
    };

    const eventWithMeet = {
      ...baseEvent,
      conferenceData: {
        createRequest: {
          requestId: `book-${Date.now()}-${Math.random().toString(36).slice(2)}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    let created: Awaited<ReturnType<typeof createCalendarEvent>>;
    try {
      created = await createCalendarEvent(accessToken, calendarId, eventWithMeet);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (/Invalid conference type value/i.test(msg)) {
        created = await createCalendarEvent(accessToken, calendarId, baseEvent);
      } else {
        throw e;
      }
    }

    const meetLink =
      created.hangoutLink ?? created.conferenceData?.entryPoints?.[0]?.uri ?? null;

    // Send confirmation emails if Resend is configured (Google doesn't email when using a service account without attendees).
    // Resend returns { data, error } and does NOT throw – we must check response.error.
    const resendKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = (process.env.RESEND_FROM ?? "Matthew Odojukan <onboarding@resend.dev>").trim();
    let emailError: string | null = null;

    if (resendKey) {
      const formatDt = (s: string) =>
        new Date(s).toLocaleString("en-GB", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: "Europe/London",
        });
      const guestHtml = `
        <p>Hi ${name},</p>
        <p>Your meeting with Matthew Odojukan has been confirmed.</p>
        <p><strong>When:</strong> ${formatDt(startDateTime)} – ${formatDt(endDateTime)}</p>
        ${created.htmlLink ? `<p><a href="${created.htmlLink}">Add to your calendar</a></p>` : ""}
        ${meetLink ? `<p><strong>Join by video:</strong> <a href="${meetLink}">${meetLink}</a></p>` : "<p>Matthew will share a video link if needed.</p>"}
        <p>— Matthew Odojukan</p>
      `;

      const resend = new Resend(resendKey);
      const guestResult = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: `Meeting confirmed – ${formatDt(startDateTime)}`,
        html: guestHtml,
      });

      if (guestResult.error) {
        emailError = guestResult.error.message ?? JSON.stringify(guestResult.error);
        console.error("[book] Resend guest email failed:", guestResult.error);
      }

      const notifyEmail = process.env.BOOKING_NOTIFY_EMAIL?.trim();
      if (notifyEmail) {
        const notifyResult = await resend.emails.send({
          from: fromEmail,
          to: [notifyEmail],
          subject: `New booking: ${name} – ${formatDt(startDateTime)}`,
          html: `<p>New booking from ${name} (${email}).</p><p>${formatDt(startDateTime)} – ${formatDt(endDateTime)}</p>${created.htmlLink ? `<p><a href="${created.htmlLink}">View in Calendar</a></p>` : ""}`,
        });
        if (notifyResult.error) {
          console.error("[book] Resend owner notify email failed:", notifyResult.error);
          if (!emailError) emailError = notifyResult.error.message ?? JSON.stringify(notifyResult.error);
        }
      }
    }

    return NextResponse.json({
      success: true,
      eventId: created.id,
      htmlLink: created.htmlLink,
      meetLink,
      emailSent: !emailError,
      ...(emailError && { emailError }),
      message: meetLink
        ? "Event created with Google Meet link. Share the link with your guest."
        : "Event created on your calendar. Add a video link in Google Calendar if needed.",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[book] Error:", message);
    const isTruncatedKey = /too few bytes|parse DER|truncated/i.test(message);
    return NextResponse.json(
      {
        error: "Failed to create booking",
        message,
        ...(isTruncatedKey && {
          hint: "Private key may be truncated in .env. Use GOOGLE_APPLICATION_CREDENTIALS with the path to your JSON key file (e.g. /path/to/key.json), or use GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 with base64-encoded JSON.",
        }),
      },
      { status: 500 }
    );
  }
}
