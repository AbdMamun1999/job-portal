const HiringManager = require("../models/HiringManager");

exports.createHiringManagerService = async (data) => {
  const result = await HiringManager.create(data);
  return result;
};

exports.getAllJobsByHiringManagerService = async (email) => {
  const jobs = await HiringManager.findOne({ email }).populate("jobs.id");
  return jobs;
};

exports.updateAhiringManagerService = async (id, data) => {
  const result = await HiringManager.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return result;
};
