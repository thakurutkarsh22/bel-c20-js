// ---------- Rate limiting demo: THE SERVER ----------
// Run it:  node server.js

const express = require("express");
const app = express();

let count = 0;       // how many requests in the current window
const LIMIT = 5;     // allow only 5 requests...

// ...every 10 seconds. Reset the counter back to 0.
setInterval(() => {
  count = 0;
}, 10000);

app.get("/", (req, res) => {
  count++;

  // Too many requests? Block with status 429.
  if (count > LIMIT) {
    return res.status(429).send("⛔ Too many requests! Slow down.");
  }

  res.send("✅ Request served");
});

app.listen(8090, () => {
  console.log("Server running on http://localhost:8090");
  console.log("Limit: 5 requests every 10 seconds.");
  console.log("Now run the attacker:  node attacker.js");
});


/***
 * 
 * Rate limiting algo 
 * 1. token bucket
 * 2. sliding window
 * 3. fixed window
 * 4. sliding window log
 * 5. sliding window counter
 * 6. leaky bucket
 * 7. token bucket with queue
 * 8. token bucket with queue and wait
 * 9. token bucket with queue and wait and retry
 * 10. token bucket with queue and wait and retry and backoff
 * 11. token bucket with queue and wait and retry and backoff and timeout
 * 
 * 
 */
