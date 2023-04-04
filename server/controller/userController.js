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
exports.loginUser = async (req, res) => {};
exports.storeCookie = async (req, res) => {
  res.cookie("test1", true);
  res.cookie("test2", false, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: true,
  });
  res.send("you got cookie");
};
exports.getCookie = async (req, res) => {
  let cookie = req.cookies;

  res.send(cookie);
};
