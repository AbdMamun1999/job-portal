const {
  getAllJobsByHiringManagerService,
  createHiringManagerService,
  updateAhiringManagerService,
} = require("../services/hiringManager.service");

exports.createHiringManager = async (req, res) => {
  try {
    const result = await createHiringManagerService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully created a hiring manager",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.getAllJobsByHiringManager = async (req, res) => {
  console.log(req.user.email);
  const jobs = await getAllJobsByHiringManagerService(req.user.email);
  console.log(jobs);
  /* try {
    const jobs = await getAllJobsByHiringManagerService(req.params.id)
  } catch (error) {
    
  } */
};

// updateAhiringManager
exports.updateAhiringManager = async (req, res) => {
  console.log(req.body)
  try {
    const { id } = req.params;
    const result = await updateAhiringManagerService(id, req.body);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};
