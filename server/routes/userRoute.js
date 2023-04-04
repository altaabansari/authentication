const express = require("express");
const controller = require("../controller/userController");
const router = express.Router();
router.post("/create-user", controller.createUser);
module.exports = router;
