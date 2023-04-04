const User = require("../model/user");
exports.createUser = async (req, res, next) => {
  try {
    let user = await User.create({ ...req.body });
    res.status(201).send(user);
  } catch (error) {
    // next(Error(error));
    res.send(error);
  }
};
