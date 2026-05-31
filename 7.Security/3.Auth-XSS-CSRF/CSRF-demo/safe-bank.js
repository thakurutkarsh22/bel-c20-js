// ---------- CSRF demo: THE PROTECTED BANK ----------
//
// Same bank as bank.js, but WITH a CSRF token. Forged transfers are blocked.
//
// Run it:  node safe-bank.js   (stop bank.js first — same port 7001)
// Log in at http://localhost:7001, then visit the evil site (evil.js):
//   the forged transfer is rejected because it has no valid CSRF token.

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const CSRF_TOKEN = "secret-token-123"; // (real apps use a random token per user)
let balance = 1000;

const isLoggedIn = (req) => (req.headers.cookie || "").includes("session=alice");

app.get("/", (req, res) => {
  if (!isLoggedIn(req)) {
    return res.send(`<h2>🏦 MyBank (SECURE 🔒)</h2>
      <form method="POST" action="/login"><button>Log in as Alice</button></form>`);
  }

  // Put the secret token in the real form. The evil site can't read this.
  res.send(`<h2>🏦 MyBank (SECURE 🔒)</h2>
    <h3>Balance: $${balance}</h3>
    <form method="POST" action="/transfer">
      <input type="hidden" name="_csrf" value="${CSRF_TOKEN}">
      To: <input name="to" value="bob"> Amount: <input name="amount" value="50">
      <button>Transfer</button>
    </form>`);
});

app.post("/login", (req, res) => {
  // THE FIX1:  SameSite=Strict is the second layer (see README note about localhost).
  res.setHeader("Set-Cookie", "session=alice; HttpOnly; Path=/; SameSite=Strict");
  res.redirect("/");
});

app.post("/transfer", (req, res) => {
  if (!isLoggedIn(req)) return res.send("Not logged in.");

  // THE FIX2: the request must carry the matching CSRF token.
  if (req.body._csrf !== CSRF_TOKEN) {
    console.log("❌ Transfer BLOCKED — missing/invalid CSRF token.");
    return res.send("❌ CSRF check failed. Transfer blocked. <a href='/'>back</a>");
  }

  balance -= Number(req.body.amount) || 0;
  console.log(`💸 Sent $${req.body.amount} to "${req.body.to}". Balance: $${balance}`);
  res.send(`✅ Sent $${req.body.amount} to "${req.body.to}". Balance: $${balance}. <a href="/">back</a>`);
});

app.listen(7001, () => {
  console.log("🏦 SECURE bank on http://localhost:7001 — forged transfers are blocked.");
});
