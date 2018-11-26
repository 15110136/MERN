var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var timestamp = require('mongoose-timestamp');

var UserSchema = new Schema({
  provider: {
    type: String,
    required: true
  },
  admin: {
    username: {
      type: String
    },
    password: {
      type: String
    }
  },
  facebook: {
    email: {
      type: String
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    avatar: {
      type: String
    }
  },
  google: {
    email: {
      type: String
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    avatar: {
      type: String
    }
  }
});
UserSchema.plugin(timestamp);

UserSchema.methods.comparePassword = function (pass, cb) {
  bcrypt.compare(pass, admin.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
module.exports = mongoose.model('User', UserSchema);