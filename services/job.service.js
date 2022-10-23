const Job = require("../models/Job");

exports.createJobService = async (data) => {
  const result = await Job.create(data);
  return result;
};

exports.getAllJobsService = async (filter) => {
  const jobs = await Job.find(filter);
  return jobs;
};
