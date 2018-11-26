var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

//load the user model
var User = require('../models/User');
var settings = require('../config/settings');

module.exports = (passport) => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(new JwtStrategy(opts,function(jwt_payload, done){
    User.findOne({productName:jwt_payload.productName},(err,user)=>{
      if(err){
        return done(err,false);
      }
      if(user){
        done(null,user);
      }else{
        done(null,false);
      }
    });
  }));
}