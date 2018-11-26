var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyPaser = require('body-parser');
var mongoose = require('mongoose');

var product = require('./routers/product');
var auth = require('./routers/auth');
var app = express();

app.use(logger('dev'));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({
  'extended': 'false'
}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/products', product);
app.use('/api/auth', auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://Thong:dell1800545455@xuka-shard-00-00-kltqh.mongodb.net:27017,xuka-shard-00-01-kltqh.mongodb.net:27017,xuka-shard-00-02-kltqh.mongodb.net:27017/test?ssl=true&replicaSet=Xuka-shard-0&authSource=admin&retryWrites=true', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true
  })
  .then(() => console.log('connect successful'))
  .catch((err) => console.error(err));

module.exports = app;