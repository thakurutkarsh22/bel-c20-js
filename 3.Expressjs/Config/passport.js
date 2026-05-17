const UserModel = require('../Models/User.Model');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}


// done -> would be kindd of next like a middleware.
const stratergy = new JwtStrategy(options, async (payload, done) => {
    try {
        // payload -> { userId: '123', username: 'john', roles: 'admin' }
        // play with data and find the user from database. 
        const user = await UserModel.findById(payload.userId);
        if(user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
});

module.exports = (passport) => {
    passport.use(stratergy);
}