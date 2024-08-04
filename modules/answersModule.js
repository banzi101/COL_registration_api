const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  registrationItemId: {
    type: String,
    required: true,
  },
  isItemStartOnStage: {
    type: Number,
    required: true,
  },
  isPropsUsed: {
    type: Number,
    required: true,
  },
  isItemNameApplicable: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Answer", answerSchema);
