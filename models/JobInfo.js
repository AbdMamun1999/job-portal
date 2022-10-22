const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const jobInfoSchema = mongoose.Schema({
  designation: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    lowercase: true,
    minLength: [5, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  },
  companyName: {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
  },
  details: {
    type: Array,
  },
});

const JobInfo = mongoose.model("JobInfo", jobInfoSchema);

module.exports = JobInfo;
