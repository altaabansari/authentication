const express = require("express");
require("./database/connection");
require("dotenv").config();

const app = express();
app.use(express.json());

let port = process.env.port || 1212;

app.use((err, req, res, next) => {
  res.send(400).send({ success: false, message: err.message });
});
app.listen(port, () => {
  console.log("app is up and running on the port " + port);
});
