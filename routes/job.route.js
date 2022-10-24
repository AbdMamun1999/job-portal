const express = require("express");
const jobInfoController = require("../controllers/job.controller");
const applyController = require("../controllers/apply.controller");
const verifiedToken = require("../middlewares/verifiedToken");

const router = express.Router();

router
  .route("/")
  .post(verifiedToken, jobInfoController.createJob)
  .get(jobInfoController.getAllJobs);

router.route("/:id").get(jobInfoController.getJobByid);
router.route("/:id/apply").post(applyController.postApply);

module.exports = router;
