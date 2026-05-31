// ---------- CSRF demo: THE VULNERABLE BANK ----------
//
// This bank has NO CSRF protection. The evil site can forge transfers.
//
// Run it:  node bank.js
// Open http://localhost:7001, log in, then visit the evil site (evil.js).
//
// For the protected version, see ./safe-bank.js

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

let balance = 1000;

// Are we logged in? (super simplified: just check for our cookie)
const isLoggedIn = (req) => (req.headers.cookie || "").includes("session=alice");

app.get("/", (req, res) => {
  if (!isLoggedIn(req)) {
    return res.send(`<h2>🏦 MyBank (VULNERABLE ⚠️)</h2>
      <form method="POST" action="/login"><button>Log in as Alice</button></form>`);
  }

  res.send(`<h2>🏦 MyBank (VULNERABLE ⚠️)</h2>
    <h3>Balance: $${balance}</h3>
    <form method="POST" action="/transfer">
      To: <input name="to" value="bob"> Amount: <input name="amount" value="50">
      <button>Transfer</button>
    </form>`);
});

app.post("/login", (req, res) => {
    // we were stupid here 
  res.setHeader("Set-Cookie", "session=alice; HttpOnly; Path=/");
  res.redirect("/");
});

app.post("/transfer", (req, res) => {
  if (!isLoggedIn(req)) return res.send("Not logged in.");

  // No CSRF check at all -> any request with the cookie works, even a forged one.
  balance -= Number(req.body.amount) || 0;
  console.log(`💸 Sent $${req.body.amount} to "${req.body.to}". Balance: $${balance}`);
  res.send(`✅ Sent $${req.body.amount} to "${req.body.to}". Balance: $${balance}. <a href="/">back</a>`);
});

app.listen(7001, () => {
  console.log("🏦 VULNERABLE bank on http://localhost:7001 — try the evil site!");
});
