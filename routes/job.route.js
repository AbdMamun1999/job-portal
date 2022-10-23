const express = require("express");
const jobInfoController = require("../controllers/job.controller");
const verifiedToken = require("../middlewares/verifiedToken");

const router = express.Router();

router
  .route("/")
  .post(verifiedToken, jobInfoController.createJob)
  .get(jobInfoController.getAllJobs);

module.exports = router;