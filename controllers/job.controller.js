const {
  createJobService,
  getAllJobsService,
  getJobByIdService,
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
    let filters = { ...req.query };

    if (req.query.salary) {
    }

    const jobs = await getAllJobsService(filters);

    res.send(jobs);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.getJobByid = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await getJobByIdService(id);

    if (!job) {
      res.status(400).json({
        status: "failed",
        error: "Could'n find a job with this id",
      });
    }

    res.status(200).json({
      status: "Success",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};
