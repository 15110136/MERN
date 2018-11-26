var mongoose = require('mongoose');
var timestamp = require('mongoose-timestamp');

var ProductSchema = new mongoose.Schema({
  productName: String
});
ProductSchema.plugin(timestamp);
module.exports = mongoose.model('Product', ProductSchema);