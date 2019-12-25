var mongoose = require('mongoose');

var PaymentSchema = new mongoose.Schema({
  user_id: String,
  balance: Number,
  bidding_balance: Number,
  booking_left: Number,
});

module.exports = mongoose.model('Payment', PaymentSchema);
