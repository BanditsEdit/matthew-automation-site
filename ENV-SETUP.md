# Environment setup for Google Calendar booking

## Local (development)

**Easiest and most reliable:** use a file path so the key is never truncated or mangled by env.

1. Put your downloaded service account JSON key file somewhere (e.g. `matthew-automation-site/keys/gcal-service-account.json`). Add `keys/` to `.gitignore` so it’s not committed.
2. In **`.env.local`** set:
   - `GOOGLE_CALENDAR_ID=your-email@gmail.com`
   - `GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/that-file.json`  
     On Mac/Linux you can use an absolute path, or a path relative to the project root when you run `npm run dev` from `matthew-automation-site`.
3. Restart the dev server: `npm run dev`.

**If you prefer env vars:**
- **Option B:** Set `GOOGLE_SERVICE_ACCOUNT_JSON_BASE64=` and paste the base64-encoded JSON (one line). Encode with: `cat your-key.json | base64 | tr -d '\n'`.
- **Option C:** Set `GOOGLE_SERVICE_ACCOUNT_JSON=` with the **entire** JSON on **one line** (minify the key file). If you see “Too few bytes to parse DER”, the value was truncated; use the file path or base64 instead.

## Deployed (Vercel)

1. In Vercel: your project → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `GOOGLE_CALENDAR_ID`  
     **Value:** `mattodojukan@gmail.com`
   - **Name:** `GOOGLE_SERVICE_ACCOUNT_JSON`  
     **Value:** paste the entire contents of your service account JSON (one line).
3. Redeploy the project so the new variables are applied.

## Getting the service account JSON

1. [Google Cloud Console](https://console.cloud.google.com/) → your project.
2. **APIs & Services** → **Credentials** → open your service account → **Keys**.
3. **Add key** → **Create new key** → **JSON** → download.
4. Share your Google Calendar with the service account email (e.g. `xxx@xxx.iam.gserviceaccount.com`) with **Make changes to events**.

See **docs/deploy-and-godaddy-domain.md** for the full steps.

---

## Booking confirmation emails

Google doesn’t send invite emails when events are created with a **service account** (no attendees are added). To send a confirmation to the person who booked (and optionally to yourself), use [Resend](https://resend.com).

1. Sign up at [resend.com](https://resend.com) and create an API key.
2. Add to **`.env.local`** (and to Vercel env vars when deploying):
   - **`RESEND_API_KEY`** – your Resend API key (e.g. `re_xxxx…`).
   - **`RESEND_FROM`** (optional) – sender shown in the email.  
     **Important:** If you set a custom address (e.g. `you@yourdomain.com`), you must **verify that domain** in the [Resend Dashboard](https://resend.com/domains). Until it’s verified, Resend returns an error and no email is sent.  
     For testing, omit it or use `Matthew Odojukan <onboarding@resend.dev>` (Resend’s test sender; no verification needed).
   - **`BOOKING_NOTIFY_EMAIL`** (optional) – your email. When set, you get an email each time someone books.
3. Restart the dev server (or redeploy). After a booking, the guest gets a confirmation email and, if set, you get a “New booking” email.
