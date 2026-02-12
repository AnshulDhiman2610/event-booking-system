const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
userId: String,
eventId: String,
tickets: Number
});

module.exports = mongoose.model("Booking", bookingSchema);