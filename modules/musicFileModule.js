const mongoose = require("mongoose");

const musicFileSchema = new mongoose.Schema({
  registrationItemId: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MusicFile", musicFileSchema);
