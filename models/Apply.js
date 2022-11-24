const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const applySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  resume: {
    id: String,
    type: String,
  },
  applicant: {
    id: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  jobTitle: {
    type: String,
    require: true,
  },
  jobInfo: {
    id: {
      type: ObjectId,
      ref: "JobInfo",
      required: true,
    },
  },
});

const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;
