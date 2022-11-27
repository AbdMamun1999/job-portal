const express = require("express");
const userController = require("../controllers/user.controller");
const fileUploader = require("../middlewares/file.uploader");
const imageUploader = require("../middlewares/image.uploader");
const verifiedToken = require("../middlewares/verifiedToken");

const router = express.Router();

router.post("/signup", imageUploader.single("avatar"), userController.signup);
router.post("/login", userController.login);
router.get("/me", verifiedToken, userController.getMe),
  router.get("/alluser", userController.getAllUser);
/* router.post(
  "/resume/:id",
    fileUploader.single("doc"),
  userController.updateUserbyId
); */

/* router.post(
  "/updated-profile-image/:id",
  imageUploader.single("avatar"),
  userController.updateUserImagebyId
); */

module.exports = router;
