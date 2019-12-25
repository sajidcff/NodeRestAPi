var mongoose = require('mongoose');

var StateSchema = new mongoose.Schema({
  state_id: Number,
  state_name: String,
});

module.exports = mongoose.model('State', StateSchema);
