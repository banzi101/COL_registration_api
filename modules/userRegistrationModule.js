const mongoose = require("mongoose");

const userRegistrationSchema = new mongoose.Schema({
  userRegistrationId: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("UserRegistration", userRegistrationSchema);
