const mongoose = require("mongoose");

const registrationItemSchema = new mongoose.Schema({
  registrationItemId: {
    type: String,
    required: true,
  },
  sectionCode: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  sectionType: {
    type: String,
    required: true,
  },
  registrationId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RegistrationItem", registrationItemSchema);
