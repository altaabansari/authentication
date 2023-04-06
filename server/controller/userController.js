const User = require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwtSalt, { expiresIn: 24 * 60 * 60 });
};
exports.createUser = async (req, res, next) => {
  try {
    let user = await User.create({ ...req.body });
    let token = createToken(user._id);
    console.log(token);
    res.cookie("jwtadded", token, {
      // maxAge: 1000 * 60 * 60 * 24,
      // httpOnly: true,
      // secure: true,
    });
    res.status(201).send(user);
  } catch (error) {
    // next(Error(error));
    res.send(error);
  }
};
exports.loginUser = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let user = await User.login(email, password);
    let token = createToken(user._id);

    res.cookie("loginUserWithJwtAdded", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
};
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
exports.getAllUser = async (req, res) => {
  let user = await User.find({});

  res.send(user);
};
