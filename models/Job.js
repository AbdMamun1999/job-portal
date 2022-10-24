const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema(
  {
    postBy: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "HiringManager",
        required: true,
      },
    },
    jobTypes: {
      type: String,
      required: [true, "Please provide a Job title"],
      trim: true,
      lowercase: true,
      minLength: [5, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    companyName: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    aboutCompany: {
      type: String,
    },
    risponsibility: {
      type: [String],
      require: [true, "Please details is required"],
    },
    qualification: {
      type: [String],
    },
    skill: {
      type: [String],
      require: [true, "Please skill is required"],
    },
    salary: {
      type: String,
      required: [true, "Please salary is required"],
    },
    location: {
      type: String,
      required: [true, "Please job location is required"],
    },
    dateLines: {
      type: Date,
      required: [true, "Please dateLine is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
