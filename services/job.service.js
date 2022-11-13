const Job = require("../models/Job");

exports.createJobService = async (data) => {
  const result = await Job.create(data);
  return result;
};

exports.getAllJobsService = async (query, filter) => {
  const jobs = await Job.find(query).sort(filter.sortBy);
  return jobs;
};

exports.getJobByIdService = async (id) => {
  const job = await Job.findOne({ _id: id }).populate("postBy.id");
  return job;
};

exports.getAllJobsByHiringManagerService = async (id) => {
  const job = await Job.find({ postBy: id });
};
