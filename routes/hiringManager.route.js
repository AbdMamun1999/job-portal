const express = require("express");
const hiringManagerController = require("../controllers/hiringManager.controller");
const authorization = require("../middlewares/authorization");
const verifiedToken = require("../middlewares/verifiedToken");

const router = express.Router();

router.route("/").post(hiringManagerController.createHiringManager);
router
  .route("/jobs")
  .get(
    verifiedToken,
    authorization("hiring manager"),
    hiringManagerController.getAllJobsByHiringManager
  );
router.put("/:id", hiringManagerController.updateAhiringManager);

module.exports = router;
