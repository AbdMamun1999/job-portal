const Job = require("../models/Job");

exports.createJobService = async (data) => {
  const result = await Job.create(data);
  return result;
};

exports.getAllJobsService = async (filter) => {
  const jobs = await Job.find(filter);
  return jobs;
};

exports.getJobByIdService = async (id) => {
  const job = await Job.findOne({ _id: id }).populate("postBy.id");
  return job;
};
