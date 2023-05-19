const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { JWT_ACCESS_SECRET } = process.env;
const User = require('../Models/User');

var opts = {};
opts.secretOrKey = JWT_ACCESS_SECRET;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

const strategy = new JwtStrategy(opts, async function(jwtPayload, done) {
    let userId = jwtPayload.sub;

    try {
        let user = await User.findById(userId);

        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }   
    } catch (error) {
        return done(error, false);
    }
})

// app.js will pass the global passport object here, and this function will configure it 
module.exports = (passport) => {
    passport.use(strategy);
}