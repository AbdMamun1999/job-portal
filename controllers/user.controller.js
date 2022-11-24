const cloudinary = require("../middlewares/cloudinary");

const {
  signupService,
  findUserByEmailService,
  getAllUsersService,
} = require("../services/user.service");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
    const result = signupService(req.body);

    res.status(200).json({
      status: "success",
      message: "successfully signup",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    const user = await findUserByEmailService(email);

    if (!user) {
      return res.status(401).json({
        status: "Fail",
        error: "No user found.Please create an account",
      });
    }
    const isPasswordValid = user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Email Or Password is not correct",
      });
    }

    if (user.status != "active") {
      return res.status(401).json({
        status: "fail",
        error: "Your account is not active yet",
      });
    }

    const token = await generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully looged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await findUserByEmailService(req.user?.email);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      data: {
        user: others,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.updateUserImagebyId = async (req, res) => {
  try {
    const { id } = req.params;
    const cloudinaryResult = await cloudinary.uploader.upload(req.file.path);
    console.log(cloudinaryResult);
    const image = {
      imageURL: cloudinaryResult.secure_url,
      public_id: cloudinaryResult.public_id,
    };

    const result = await updateUserByIdService(id, image);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
