const {
  postApplyService,
  getApplyByIdService,
} = require("../services/apply.service");
const { getJobByIdService } = require("../services/job.service");

exports.postApply = async (req, res) => {
  try {
    const { id } = req.params;

    /* const appliedJob = await getApplyByIdService(id);
    if (appliedJob.id.includes(req?.user?.email)) {
      console.log(true);
    } */

    /* if (appliedJob?.email === req?.user?.email) {
      return res
        .status(500)
        .json({
          status: "Failed",
          error: "You'vd already applied for this job.",
        });
    } */

    const job = await getJobByIdService(id);

    const isDeadLine = new Date() > job?.dateLines;

    if (!isDeadLine) {
      return res.json({
        status: "failed",
        expried: "Time is expired",
      });
    }

    const result = await postApplyService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully post a apply",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
