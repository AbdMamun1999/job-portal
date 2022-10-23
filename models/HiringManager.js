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
    type: String,
    trim: true,
    lowercase: true,
    minLength: [3, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  },
  detailsInfo: {
    id: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
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
  },
});

const HiringManager = mongoose.model("HiringManager", managerSchema);

module.exports = HiringManager;
