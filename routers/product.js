var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product');
var passport = require('passport');
require('../config/passport')(passport);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});

// GET ALL PRODUCT

router.get('/', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  var token = getToken(req.headers);
  if (token) {
    Product.find((err, product) => {
      if (err) return next(err);
      res.json(product);
    });
  } else {
    return res.status(403).send({
      success: false,
      msg: 'Unauthorized.'
    });
  }

});

// SAVE BOOK
router.post('/', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  var token = getToken(res.headers);
  if (token) {
    Product.create(req.body, (err, product) => {
      if (err) return next(err);
      res.json(product);
    });
  } else {
    return res.status(403).send({
      success: false,
      msg: 'Unauthorized.'
    });
  }

})

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;