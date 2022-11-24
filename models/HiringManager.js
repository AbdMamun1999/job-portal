const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const managerSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
  },
  companyName: {
    type: String,
    required: [true, "Please,Company Name required"],
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
  imageURL: {
    type: String,
    validate: [validator.isURL, "Please provide a valid url"],
  },
  detailsInfo: {
    id: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
  },
  allJob: [
    {
      id: {
        type: ObjectId,
        ref: "Job",
      },
    },
  ],
});

const HiringManager = mongoose.model("HiringManager", managerSchema);

module.exports = HiringManager;
