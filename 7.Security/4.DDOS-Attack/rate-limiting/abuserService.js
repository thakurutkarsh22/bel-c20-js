// ---------- Rate limiting demo: THE ATTACKER ----------
// Sends 10 fast requests to the server.
// Run it:  node attacker.js   (make sure server.js is running first)

const http = require("http");

for (let i = 1; i <= 10; i++) {
  http.get("http://localhost:8090", (res) => {
    let body = "";
    res.on("data", (chunk) => (body += chunk));
    res.on("end", () => {
      console.log(`Request ${i}: [${res.statusCode}] ${body}`);
    });
  });
}
