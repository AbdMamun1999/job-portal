const express = require("express");
const userController = require("../controllers/user.controller");
const verifiedToken = require("../middlewares/verifiedToken");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/me", verifiedToken, userController.getMe),
router.get("/alluser", userController.getAllUser);

module.exports = router;
