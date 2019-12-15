var mongoose = require('mongoose');

var AuctionSchema = new mongoose.Schema({
  _id: String,
  car_id: String,
  owner_type: String,
  fuel_type: String,
  kms: Number,
  make: String,
  model: String,
  variant: String, 
  year: String,
  start_time: Number,
  end_time: Number,
  fair_mkt_value: Number,
  highest_bid: Number,
  car_reg_num: String,
  insurance_type: String,
  centre_city: String,
  auc_list_img: Array,
});

module.exports = mongoose.model('Auction', AuctionSchema);
