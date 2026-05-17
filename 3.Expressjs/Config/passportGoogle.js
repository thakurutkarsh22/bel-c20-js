const UserModel = require('../Models/User.Model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');


const options = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email']
}


// accessToken -> token to call Google APIs on behalf of the user
// refreshToken -> token to get a new accessToken when it expires
// profile      -> google user profile (id, displayName, emails, photos, ...)
// done         -> next-like callback to pass user/error back to passport
const strategy = new GoogleStrategy(options, async (accessToken, refreshToken, profile, done) => {
    try {
        // google almost always returns at least one email when scope=email is requested
        const email = (profile.emails && profile.emails[0] && profile.emails[0].value)
            || `${profile.id}@users.noreply.google.com`;

        // 1. check if a user with this email already exists in our database
        let user = await UserModel.findOne({ email });

        if (user) {
            // user already exists - just hand them back to passport
            return done(null, user);
        }

        // 2. user does not exist -> create a new one from the google profile
        // our User schema has required fields (password, gender, username) that google does not provide,
        // so we generate a random hashed password, default gender to 'others', and derive a username.
        const randomPassword = await bcrypt.hash(`${profile.id}-${Date.now()}`, 10);

        // derive a username from the email prefix (google doesn't have a "username" concept)
        // and append a short suffix from the google id to reduce collisions on common prefixes
        const emailPrefix = email.split('@')[0];
        const username = `${emailPrefix}_${profile.id.slice(-4)}`;

        user = new UserModel({
            name: profile.displayName || emailPrefix,
            username: username,
            email: email,
            gender: 'others',
            password: randomPassword,
        });

        const savedUser = await user.save();
        return done(null, savedUser);
    } catch (error) {
        return done(error, false);
    }
});


// passport needs to know how to serialize/deserialize the user
// when using session-based auth (req.login / req.user)
module.exports = (passport) => {
    passport.use(strategy);

    // NOTE: serializeUser/deserializeUser are already registered by the GitHub config.
    // Passport keeps a single global pair of these, so we don't register them again here
    // to avoid one overwriting the other. If you ever load this file standalone, uncomment below.
    //
    // passport.serializeUser((user, done) => done(null, user.id));
    // passport.deserializeUser(async (id, done) => {
    //     try { done(null, await UserModel.findById(id)); }
    //     catch (error) { done(error, null); }
    // });
}
