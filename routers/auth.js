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
    password
  } = req.body;
  if (!username || !password) {
    return res.json({
      success: false,
      msg: "Please pass username and password"
    });
  } else {
    User.findOne({
      username: username
    }, async (err, user) => {
      if (err) return next(err);
      if (user) {
        return res.json({
          success: false,
          msg: 'Username already exists.',
          user
        });
      } else {
        var newUser = await new User({
          username: username,
          password: password
        });
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(newUser.password, salt);
        newUser.password = passwordHash;
        console.log(newUser);
        await newUser.save();
        return res.json({
          success: true,
          msg: 'Successfully',
          newUser
        });
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
    provider
  } = req.body;
  User.findOne({
    username: email
  }, function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).send({
        success: false,
        msg: 'Authentication failed. User not found.'
      });
    } else {
      if (provider === "admin") {
        //check if password matched
        user.comparePassword(password, function (err, isMatch) {
          if (isMatch && !err) {
            //if user is found and password isright create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            //return the infomation
            res.json({
              success: true,
              token: 'JWT ' + token
            });
          } else {
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }
        });
      }else{
        //if user is found and password isright create a token
        var token = jwt.sign(user.toJSON(), settings.secret);
        //return the infomation
        res.json({
          success: true,
          token: 'JWT ' + token
        });
      }
    }
  });
});
module.exports = router;