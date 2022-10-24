const { createHiringManagerService } = require("../services/hiringManager.service");

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
