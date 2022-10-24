const { postApplyService } = require("../services/apply.service");

exports.postApply = async (req, res) => {
  try {
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
