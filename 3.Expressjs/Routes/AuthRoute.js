const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { registerUser, loginUser } = require('../Controllers/AuthController');
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);


// ----- GitHub OAuth -----

// step 1: kick off the OAuth dance - browser gets redirected to github.com
// session:false keeps us stateless (we don't need express-session because we mint a JWT below)
router.get(
    "/github",
    passport.authenticate("github", { scope: ["user:email"], session: false })
);

// step 2: github redirects the user back here with a ?code=...
// passport exchanges that code for an access token, calls our strategy verify callback
// (in Config/passportGituhb.js) which finds/creates the user and attaches it to req.user
router.get(
    "/github/callback",
    passport.authenticate("github", { session: false, failureRedirect: "/api/v1/auth/github/failure" }),
    (req, res) => {
        const user = req.user;

        // issue a JWT just like the normal login flow does
        const payload = {
            userId: user._id,
            username: user.username,
            roles: user.role
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            success: true,
            message: "GitHub login successful",
            data: user,
            token: token,
            myownMessage: "Hello from GitHub login from utkarsh"
        });
    }
);

router.get("/github/failure", (req, res) => {
    res.status(401).json({
        success: false,
        message: "GitHub authentication failed"
    });
});


// ----- Google OAuth -----

// step 1: kick off the OAuth dance - browser gets redirected to accounts.google.com
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"], session: false })
);

// step 2: google redirects the user back here with a ?code=...
// passport exchanges that code for an access token, calls our strategy verify callback
// (in Config/passportGoogle.js) which finds/creates the user and attaches it to req.user
router.get(
    "/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "/api/v1/auth/google/failure" }),
    (req, res) => {
        const user = req.user;

        // issue a JWT just like the normal login flow does
        const payload = {
            userId: user._id,
            username: user.username,
            roles: user.role
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            success: true,
            message: "Google login successful",
            data: user,
            token: token
        });
    }
);

router.get("/google/failure", (req, res) => {
    res.status(401).json({
        success: false,
        message: "Google authentication failed"
    });
});


module.exports = router;
