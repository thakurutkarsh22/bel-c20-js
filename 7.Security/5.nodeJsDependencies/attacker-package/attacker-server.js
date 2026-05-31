// 👿  THE ATTACKER'S SERVER  (DEMO ONLY — runs on your own machine)
//
// In a real attack this lives on the internet (e.g. https://attacker.com).
// Here it runs on localhost so the class can watch stolen data ARRIVE.
//
// Run this in its OWN terminal BEFORE doing the npm install:
//     node attacker-server.js

const http = require("http");

const PORT = 4444;

http
  .createServer((req, res) => {
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        console.log("\n🚨🚨🚨  STOLEN DATA RECEIVED  🚨🚨🚨");
        console.log("   (this just landed on the attacker's server)");
        console.log("--------------------------------------------------------");
        console.log(body);
        console.log("--------------------------------------------------------\n");
        res.end("ok");
      });
    } else {
      res.end("attacker server is up");
    }
  })
  .listen(PORT, () => {
    console.log(`👿  Attacker server listening on http://localhost:${PORT}`);
    console.log("    Waiting for a victim to run `npm install`...\n");
  });
