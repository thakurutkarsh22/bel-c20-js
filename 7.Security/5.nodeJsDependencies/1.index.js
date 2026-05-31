// For any development 
/**
 * 1. Node js 
 * 
 * Our code - 5%
 * dependencies : 95%
 * 
 * 
 * Node_modules code - has the same permission/privilage to run as our code.
 * .env: JWT, SERVER_Pass, AWS_KEY,  AZURE_KEYS etc.
 * 
 * 
 * Supply chain attack: in this attacker will try to inject malicious code into our dependencies. and steal our .env file.
 */

/**
 * 2. Transitive dependencies:
 * 
 * WE install - express
 * express install - body-parser, cookie-parser, express-rate-limit, etc.
 * 
 * whe we npm i -> we are auditing 
 * npm audit -> we are auditing the dependencies.
 * 
 * 
 * npm audit is a repo that contains the vulnerabilities of the dependencies.
 * so a new vulnerabilities might not be there.
 * 
 * 
 * 
 * LIFECYCLE of A PACKAGE 
 * 1. preinstall
 * 2. install
 * 3. postinstall
 *  
 * 
 */

/**
 * 
 * 3. REAL ATTACK - postinstall attack 
 * 
 * // xyz package 
 * see the demo attacks.js file
 * 
 * 
 */


/**
 * 4. PROTECTION - npmrc file
 * 
 * 1. audit-level=high
 * 2. save-exact=true
 * 3. ignore-scripts=true
 * 4. registry="nexus.com/npm" # for private npm registry
 * 
 * 
 *  for private repo 
 * 1. download trusted packages
 * 2. npm i --foreground-scripts  
 * 
 * 3. rotate your keys 
 * 4. AWS always have a monitor and cap.
 * 
 * 
 * 
 * 
 */