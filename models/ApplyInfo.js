const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const applyInfoSchema = mongoose.Schema({
  title: {
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
  applicant: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  jobInfo: {
    designation: {
      type: String,
      require: true,
    },
    id: {
      type: ObjectId,
      ref: "JobInfo",
      required: true,
    },
  },
});

const ApplyInfo = mongoose.model("ApplyInfo", applyInfoSchema);

module.exports = ApplyInfo;
