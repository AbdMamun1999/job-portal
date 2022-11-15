const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const managerSchema = mongoose.Schema({
  detailsInfo: {
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
