var mongoose = require('mongoose');

var TicketSchema = new mongoose.Schema({
  user_id: String,
  ticket_id: Number,
  ticket_millisec: Number,
  ticket_status: String,
});

module.exports = mongoose.model('Ticket', TicketSchema);
