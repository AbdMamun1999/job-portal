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
    jobTitle: {
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
      required: [true, "Company name must be required"],
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    aboutCompany: {
      type: String,
      required: true,
    },
    risponsibility: {
      type: [String],
      require: [true, "Please details is required"],
    },
    qualification: {
      type: [String],
      required: true,
    },
    skill: {
      type: [String],
      require: [true, "Please skill is required"],
    },
    salary: {
      currency: {
        type: String,
        required: true,
      },
      range: {
        minimum: {
          type: Number,
          min: 0,
          validate: {
            validator: function (value) {
              const currentValue = this.target.salary.range.maximum;
              return currentValue !== undefined ? value <= currentValue : true;
            },
            message:
              "The minimum range with Value {VALUE} must be equal or smaller then Maximun",
          },
        },
        maximum: {
          type: Number,
          min: 0,
          validate: {
            validator: function (value) {
              const currentValue = this.target.salary.range.minimum;
              return currentValue !== undefined ? value <= currentValue : true;
            },
            message:
              "The minimum range with Value {VALUE} must be equal or bigger then Minimun",
          },
        },
      },
    },
    location: {
      type: String,
      required: [true, "Please job location is required"],
    },
    jobTypes: {
      type: String,
      required: true,
      trim: true,
      enum: ["full time", "part time", "internship", "contract", "temporary"],
      message: "{VALUE} is not a valid job type",
    },
    hiringPeople: {
      type: Number,
      required: true,
    },
    hireWithinDays: {
      type: String,
      required: true,
      enum: [
        "1 to 3",
        "3 to 7",
        "1 to 2 weeks",
        "2 to 4 weeks",
        "more than 4 weeks",
      ],
      message: "{VALUE} is not hiring days",
    },
    schedule: {
      type: String,
      required: true,
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
