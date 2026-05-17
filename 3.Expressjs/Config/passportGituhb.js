const UserModel = require('../Models/User.Model');
const GitHubStrategy = require('passport-github2').Strategy;
const bcrypt = require('bcrypt');


const options = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
    scope: ['user:email']
}


// accessToken -> token to call GitHub APIs on behalf of the user
// refreshToken -> token to get a new accessToken when it expires
// profile      -> github user profile (id, username, displayName, emails, photos, ...)
// done         -> next-like callback to pass user/error back to passport
const strategy = new GitHubStrategy(options, async (accessToken, refreshToken, profile, done) => {
    try {
        // github may or may not return an email depending on the user's privacy settings
        const email = (profile.emails && profile.emails[0] && profile.emails[0].value)
            || `${profile.username}@users.noreply.github.com`;

        // 1. check if a user with this email already exists in our database
        let user = await UserModel.findOne({ email });

        if (user) {
            // user already exists - just hand them back to passport
            return done(null, user);
        }

        // 2. user does not exist -> create a new one from the github profile
        // our User schema has required fields (password, gender) that github does not provide,
        // so we generate a random hashed password and default gender to 'others'.
        const randomPassword = await bcrypt.hash(`${profile.id}-${Date.now()}`, 10);

        user = new UserModel({
            name: profile.displayName || profile.username,
            username: profile.username,
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

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await UserModel.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
}
