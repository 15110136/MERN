var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var timestamp = require('mongoose-timestamp');

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
UserSchema.plugin(timestamp);

UserSchema.methods.comparePassword = function (pass, cb) {
  bcrypt.compare(pass, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
module.exports = mongoose.model('User', UserSchema);