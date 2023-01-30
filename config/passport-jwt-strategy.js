const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Doctor = require('../model/doctor');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Hospital_Api'
}

passport.use(new JwtStrategy(opts, function(jwtpayload, done) {
    Doctor.findOne(jwtpayload._id, function(err, doctor) {
        if (err) {
            return done(err, false);
        }
        if (doctor) {
            return done(null, doctor);
        } else {
            return done(null, false);
        }
    });
}));


module.exports = passport;