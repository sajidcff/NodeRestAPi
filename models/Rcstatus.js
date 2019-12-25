var mongoose = require('mongoose');

var RcstatusSchema = new mongoose.Schema({
  user_id: String,
  rcstatus_millisec: Number,
  rc_transferred: Number,
  rc_pending: Number,
  hold_amt: Number,
  refunded_amt: Number,
});

module.exports = mongoose.model('Rcstatus', RcstatusSchema);
