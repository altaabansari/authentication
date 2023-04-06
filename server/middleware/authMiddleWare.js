const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports.requireAuth = (req, res, next) => {
  let cookie = req.cookies;
  console.log("middleware cookie", cookie);
  next();
  if (cookie) {
    jwt.verify(cookie, process.env.jwtSalt, (err, decodedCookie) => {
      if (err) {
        res.send("error in existing cookie");
      } else {
        console.log(decodedCookie);
        next();
      }
    });
  } else {
    res.send("Bhai Login Karle Pahele !!!");
  }
};
