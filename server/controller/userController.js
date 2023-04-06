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
      maxAge: 1000 * 60 * 60 * 24,
      // httpOnly: true,
      // secure: true,
      // domain: "localhost",
      sameSite: "none",
      secure: true,
    });
    console.log(req.cookies);
    res.status(201).send(user);
  } catch (error) {
    // next(Error(error));
    res.status(401).send(error);
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
exports.getLogin = async (req, res) => {
  res.render("login");
};
exports.getRegister = async (req, res) => {
  res.render("register");
};
exports.storeCookie = async (req, res) => {
  let token1 = createToken({
    name: "altaf",
    class: "bsc",
    contact: 86868688686,
  });
  res.cookie("test1", token1);
  // res.cookie("test2", token1, {
  //   maxAge: 1000 * 60 * 60 * 24,
  //   httpOnly: true,
  //   secure: true,
  // });
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
