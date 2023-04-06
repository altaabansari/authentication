const express = require("express");
require("./database/connection");
const cors = require("cors");
require("dotenv").config();
const authentication = require("./middleware/authMiddleWare");
const cookieParser = require("cookie-parser");
const app = express();
const ejs = require("ejs");
app.use(express.json());
// app.use(cors({ credentials: true, origin: true }));

app.set("view engine", "ejs");
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cookieParser());
const userRoute = require("./routes/userRoute");
let port = process.env.port || 1212;
let path = "/api/v1/authentication";
app.use(path, userRoute);
app.use((err, req, res, next) => {
  res.status(400).send({ success: false, message: err.message });
});
app.get("/test", (req, res) => {
  res.render("login");
});
app.listen(port, () => {
  console.log("app is up and running on the port " + port);
});
