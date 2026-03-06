import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_EMAIL = "mattodojukan@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const selectedPackage = typeof body.selectedPackage === "string" ? body.selectedPackage.trim() : null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = (process.env.RESEND_FROM ?? "Matthew Odojukan <onboarding@resend.dev>").trim();

    if (!resendKey) {
      return NextResponse.json(
        { error: "Email is not configured. Set RESEND_API_KEY." },
        { status: 503 }
      );
    }

    const packageLine = selectedPackage
      ? `Inquiry about package: ${selectedPackage}\n\n`
      : "";
    const fullMessage = packageLine + message;

    const html = fullMessage
      .split("\n")
      .map((line) => `<p>${line || "&nbsp;"}</p>`)
      .join("");
    const subject = selectedPackage
      ? `Portfolio contact from ${name} – ${selectedPackage}`
      : `Portfolio contact from ${name}`;

    const resend = new Resend(resendKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        ${selectedPackage ? `<p><strong>Package:</strong> ${selectedPackage}</p>` : ""}
        <hr style="border: none; border-top: 1px solid #333; margin: 1rem 0;" />
        ${html}
      `,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json(
        { error: result.error.message ?? "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[contact] Error:", message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
