var mongoose = require('mongoose');

var ReasonSchema = new mongoose.Schema({
  reason_id: Number,
  reason: String,
});

module.exports = mongoose.model('Reason', ReasonSchema);
