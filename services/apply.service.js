const Apply = require("../models/Apply");

exports.postApplyService = async (data) => {
  const result = await Apply.create(data);
  return result;
};

exports.getApplyByIdService = async (id) => {
  const result = await Apply.findOne({ "jobInfo.id": id }).populate("applicant.id")
  return result;
};

/* exports.getAllJobsByHiringManagerService = async (id) =>{
    const result = await HiringManager.findById(id).populate()
} */