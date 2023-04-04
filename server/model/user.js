const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email field can't be empty !!!"],
  },
  password: {
    type: String,
    min: [6, "Password must have 6 character !!!"],
  },
});
let userModal = new mongoose.model("user", userSchema);
module.exports = userModal;
