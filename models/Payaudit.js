var mongoose = require('mongoose');

var PayauditSchema = new mongoose.Schema({
  user_id: String,
  pay_millisec: Number,
  pay_transtype: String,
  pay_reason: String,
  pay_amount: Number,
});

module.exports = mongoose.model('Payaudit', PayauditSchema);
