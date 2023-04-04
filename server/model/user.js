const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email field can't be empty !!!"],
    unique: true,
    validate: [validator.isEmail, "Type valid email !!!"],
  },
  password: {
    type: String,
    minlength: [6, "Password must have 6 character !!!"],
  },
});
userSchema.pre("save", async function (next) {
  let salt = await bcrypt.genSalt();
  this.password = bcrypt.hash(this.password, salt);
  next();
});

// userSchema.statics.login = async function () {};

let userModal = new mongoose.model("user", userSchema);
module.exports = userModal;
