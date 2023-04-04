require("dotenv").config();
const mongoose = require("mongoose");
console.log(process.env.name);
mongoose
  .connect(process.env.mongooseConnection)
  .then((res) =>
    console.log("Database connection established successfully !!!")
  )
  .catch((er) => "Error in database connection");
