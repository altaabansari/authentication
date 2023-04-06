const express = require("express");
const controller = require("../controller/userController");
const router = express.Router();
router.post("/create-user", controller.createUser);
router.post("/login-user", controller.loginUser);
router.get("/create-cookie", controller.storeCookie);
router.get("/get-cookie", controller.getCookie);
router.get("/get-all-user", controller.getAllUser);
module.exports = router;
