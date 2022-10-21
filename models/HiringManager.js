const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const managerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    lowercase: true,
    minLength: [3, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Provide a valid Email"],
    trim: true,
    lowercase: true,
    unique: true,
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
  role: {
    type: String,
    required: ["true", "Please required role"],
  },
  jobs: {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    id: {
      type: ObjectId,
      required: true,
      ref: "Job",
    },
    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    location: {
      type: String,
      lowercase: true,
      message: "{VALUE} is not  acorrect division!",
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
  },
});

const HiringManager = mongoose.model("HiringManager", managerSchema);

module.exports = HiringManager;
