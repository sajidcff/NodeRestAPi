var mongoose = require('mongoose');

var BidsSchema = new mongoose.Schema({
  auction_id: String,
  user_id: String,
  bid_millisec: Number,
  bid_price: Number,
  bid_type: String,
  bid_step: Number,
});

module.exports = mongoose.model('Bids', BidsSchema);
