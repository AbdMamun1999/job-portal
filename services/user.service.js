const User = require("../models/User");

exports.signupService = async (data) => {
  const result = await User.create(data);
  return result;
};

exports.findUserByEmailService = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

exports.getAllUsersService = async () => {
  const users = await User.find();
  return users;
};

/* exports.updateUserByIdService = async (id, data) => {
  const result = await User.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );

 
  return result;
}; */
