const {
  createJobService,
  getAllJobsService,
} = require("../services/job.service");

exports.createJob = async (req, res) => {
  try {
    const result = await createJobService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully created the job",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    // let filters = { ...req.query };

    

    const jobs = await getAllJobsService();

    res.send(jobs);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
