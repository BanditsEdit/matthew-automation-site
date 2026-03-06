#!/usr/bin/env node
/**
 * Restore keys/gcal-service-account.json from base64.
 * Usage: GOOGLE_SERVICE_ACCOUNT_JSON_BASE64="<paste base64>" node scripts/write-credentials-from-base64.js
 * Or add GOOGLE_SERVICE_ACCOUNT_JSON_BASE64=... to .env.local and run from project root.
 */
const fs = require("fs");
const path = require("path");

const envPath = path.join(__dirname, "..", ".env.local");
let b64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 || process.env.BASE64_CREDENTIALS;
if (!b64 && fs.existsSync(envPath)) {
  const env = fs.readFileSync(envPath, "utf8");
  const m = env.match(/GOOGLE_SERVICE_ACCOUNT_JSON_BASE64=(.+)/);
  if (m) b64 = m[1].trim().replace(/^["']|["']$/g, "");
}
if (!b64) {
  console.error("Set GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 or BASE64_CREDENTIALS in env or .env.local");
  process.exit(1);
}

const clean = b64.replace(/\s/g, "");
const json = Buffer.from(clean, "base64").toString("utf8");
const keysDir = path.join(__dirname, "..", "keys");
const outPath = path.join(keysDir, "gcal-service-account.json");

if (!fs.existsSync(keysDir)) fs.mkdirSync(keysDir, { recursive: true });
fs.writeFileSync(outPath, json, "utf8");
console.log("Wrote", outPath);
try {
  JSON.parse(json);
  console.log("JSON is valid.");
} catch (e) {
  console.error("Warning: decoded content is not valid JSON.", e.message);
  process.exit(1);
}
