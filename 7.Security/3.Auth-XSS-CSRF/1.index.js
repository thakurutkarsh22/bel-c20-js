// 1.  known standards for the authentication Oauth, openid connect, MFA, JWT, etc.
// 2. JWT we create we should NOT STRE in localstorage.
// 3. XSS attack that happens
// 4. CSRF attack that happens



// 1. Authentication and Authorization
// 1.1 where to store the JWT ? localStorage or httpOnly cookies ?

// localstorage / sessionStorage
/**
 * 1. JS can read: YES
 * 2. XSS - HIGH
 * 3. SUMMARY : never use for auth tokens
 * 
 * 4. localstorage.getItem('token')
 * 
 */

// Cookies (Plain cookies)

/**
 * 1. JS can read: YES
 * 2. XSS - YES
 * 3. SUMMARY : never use for auth tokens
 * 
 * 4. document.cookie
 * 
 */

// HTTPOnly Cookies (Secure cookies)

/**
 * 1. JS can read: NO
 * 2. XSS - NO (BLOCKED BY THE BROWSER)
 * 3. CSRF - this is needed to work the HTTP only cookies
 * 4. SUMMARY : use for auth tokens
 */


/**
 * 
 * fetch("https:vulnerable.com", {
 *   method: "POST",
 *   body: localstorage.get("token");
 * });
 * 
 * 
 */


// Why HTTPOnly cookies are needed ?

/**
 * 
 * 
 * server.post("/login", (req, res) => {
 * 
 * 
 * // we check if the user is valid 
 * 
 * 
 * const jwtToken = jwt.sign({ userId: user.id }, "secret");
 * 
 * // this line is not good 
 * res.cookie("token", jwtToken, { httpOnly: true,  }); 
 * 
 * 
 * res.json({
 *  success: true,
 *  message: "Login successful",
 *  data: user,
 *  token: jwtToen
 * })
 * 
 * })
 * 
 * 
 * 
 */



// 2. XSS (Cross Site Scripting)

/**
 * 
 * the attacker will try to trick your browser to run its malicious javascript in the context of your site.
 * 
 * 
 */

/**
 * TYPES OF XSS ATTACKS
 * 1. Reflected XSS - can be blocked by HTTPOnly cookies
 * 2. DOM-based XSS
 * 3. Stored XSS
 * 
 * 
 * 
 * 
 * Reflected XSS - attacker will try to trick you with URL parameter
 * 
 * clickHere
 * http://localhost:8089/search?q=<script>console.log(localStorage.getItem("token"));</script>
 * 
 * 
 * 
 * 
 * const express = require("express");
const app = express();
app.get("/search", (req, res) => {
  const q = req.query.q || "";
  // Vulnerable: reflects user input directly into HTML
  res.send(`
    <h2>Search Results</h2>
    <p>You searched for: ${q}</p>
  `);
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * DOM based
 * 
 * <html>
 * 
 * <script>
 *  const token = localStorage.getItem("token");
 *  const token = document.cookie.get("token");
 *  fetch(token);
 * </script>
 * 
 * <body>
 *  <p>Hello, World!</p>
 * 
 * </body>
 * 
 * 
 * </html>
 * 
 * 
 * 
 * 
 * Stored XSS - attacker will try to trick you with the database and store the malicious scrupt there 
 * and than all the users of the webiste will get the malicious script in their browser 
 * dangerous attack it affects all the user of that business
 * 
 * 
 * 
 * 
 */

/**
 * XSS video live: 
 * https://www.reddit.com/r/programming/comments/a2way5/this_is_why_you_sanitize_user_input_chat_hacked/?rdt=62919
 * at 3:18 see the script added by someone 
 * 
 * 
 * 
 */

// 3. CSRF (Cross Site Request Forgery)

/**
 * 
 * 1. login to bank.com -> browser stores your session cookie in plain sight (this is a bad bank)
 * 2. while we are  logged in we visit cutecat.com (attacker site) 
 * 3. behind the scenes cutecat.com will send a request to bank.com to transfer 1000 to the attacker
 *      <form> </form>
 * 
 * 4. the browser will send the session cookie to bank.com and bank.com will transfer 1000 to the attacker
 * 
 */



