var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/User");
var bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  var {
    username,
    password,
    provider
  } = req.body;
  if (!username || !password || !provider) {
    return res.json({
      success: false,
      msg: "Please pass username and password or provider"
    });
  } else {
    User.findOne({
      'admin.username': username
    }, async (err, user) => {
      if (err) return next(err);
      if (user) {
        return res.json({
          success: false,
          msg: 'Username already exists.',
          user
        });
      } else {
        if (provider === 'admin') {
          var newUser = await new User();
          newUser.admin.username = username;
          newUser.admin.password = password;
          const salt = await bcrypt.genSalt(10);
          const passwordHash = await bcrypt.hash(newUser.admin.password, salt);
          newUser.admin.password = passwordHash;
          console.log(newUser);
          await newUser.save();
          return res.json({
            success: true,
            msg: 'Successfully',
            newUser
          });
        }
      }
    });
  }
});

router.get('/', (req, res) => {
  User.find((err, user) => {
    console.log(user);
    return res.json(user);
  });
});

router.post('/login', (req, res) => {
  var {
    email,
    id,
    name,
    avatar,
    provider
  } = req.body;
  if (!provider || !email || !id || !name || !avatar) {
    return res.json({
      success: false,
      msg: "Please check username and password"
    });
  } else {
    //provider is facebook
    if (provider === 'facebook') {
      User.findOne({
        'facebook.email': email
      }, async (err, user) => {
        if (err) throw err;
        if (!user) {
          let newUser = await new User();
          newUser.provider = provider;
          newUser.facebook.email = email;
          newUser.facebook.id = id;
          newUser.facebook.name = name;
          newUser.facebook.avatar = avatar;

          await newUser.save();
          var token = await jwt.sign(newUser.toJSON(), settings.secret);
          //return the infomation
          res.json({
            success: true,
            token: 'JWT ' + token
          });
        } else {
          //if user is found and password isright create a token
          var token = await jwt.sign(user.toJSON(), settings.secret);
          //return the infomation
          res.json({
            success: true,
            token: 'JWT ' + token
          });
        }
      });
    };

    //provider is google
    if (provider === 'google') {
      User.findOne({
        'google.email': email
      }, async (err, user) => {
        if (err) throw err;
        if (!user) {
          let newUser = await new User();
          newUser.provider = provider;
          newUser.google.email = email;
          newUser.google.id = id;
          newUser.google.name = name;
          newUser.google.avatar = avatar;

          await newUser.save();
          var token = await jwt.sign(newUser.toJSON(), settings.secret);
          //return the infomation
          res.json({
            success: true,
            token: 'JWT ' + token
          });
        } else {
          //if user is found and password isright create a token
          var token = await jwt.sign(user.toJSON(), settings.secret);
          //return the infomation
          res.json({
            success: true,
            token: 'JWT ' + token
          });
        }
      });
    };
  }

});
module.exports = router;