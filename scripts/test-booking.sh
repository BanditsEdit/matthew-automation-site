#!/usr/bin/env bash
# Test the /api/book endpoint (local or deployed).
# Usage: ./scripts/test-booking.sh [BASE_URL]
# Example: ./scripts/test-booking.sh                    # test http://localhost:3000
# Example: ./scripts/test-booking.sh https://yoursite.vercel.app

BASE_URL="${1:-http://localhost:3000}"
# Tomorrow at 2:00 PM and 2:30 PM (UTC) for the test slot
START=$(node -e "const d=new Date(); d.setDate(d.getDate()+1); d.setUTCHours(14,0,0,0); console.log(d.toISOString())")
END=$(node -e "const d=new Date(); d.setDate(d.getDate()+1); d.setUTCHours(14,30,0,0); console.log(d.toISOString())")

echo "Testing POST $BASE_URL/api/book"
echo "Payload: start=$START, end=$END, name=Test Booker, email=test@example.com"
echo ""

curl -s -X POST "$BASE_URL/api/book" \
  -H "Content-Type: application/json" \
  -d "{\"startDateTime\":\"$START\",\"endDateTime\":\"$END\",\"name\":\"Test Booker\",\"email\":\"test@example.com\"}" | node -e "
const chunks = [];
process.stdin.on('data', c => chunks.push(c));
process.stdin.on('end', () => {
  const body = Buffer.concat(chunks).toString();
  let json;
  try { json = JSON.parse(body); } catch { console.log('Response (non-JSON):', body); process.exit(1); }
  if (json.success) {
    console.log('SUCCESS: Booking created.');
    if (json.meetLink) console.log('Meet link:', json.meetLink);
    if (json.htmlLink) console.log('Calendar link:', json.htmlLink);
  } else {
    console.log('FAILED:', json.error || json.message || body);
    process.exit(1);
  }
});
"
