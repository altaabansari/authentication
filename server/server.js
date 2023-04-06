const express = require("express");
require("./database/connection");
const cors = require("cors");
require("dotenv").config();
const authentication = require("./middleware/authMiddleWare");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const userRoute = require("./routes/userRoute");
let port = process.env.port || 1212;
let path = "/api/v1/authentication";
app.use(path, authentication.requireAuth, userRoute);
app.use((err, req, res, next) => {
  res.status(400).send({ success: false, message: err.message });
});
app.listen(port, () => {
  console.log("app is up and running on the port " + port);
});
