const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const managerSchema = mongoose.Schema({
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
      // required: true,
    },
    id: {
      type: ObjectId,
      // required: true,
      ref: "Job",
    },
  },
});

const HiringManager = mongoose.model("HiringManager", managerSchema);

module.exports = HiringManager;
