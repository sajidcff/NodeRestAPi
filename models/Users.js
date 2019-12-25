var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_id: String,
  primary_phone: String,
  secondary_phone: String,
  user_name: String,
  user_address: String,
  ifsc_code: String,
  acc_number: String,
  rep_name: String,
  rep_phone: String,  
});

module.exports = mongoose.model('User', UserSchema);
