const express = require("express");
const controller = require("../controller/userController");
const router = express.Router();
router.post("/create-user", controller.createUser);
router.get("/create-cookie", controller.storeCookie);
router.get("/get-cookie", controller.getCookie);
module.exports = router;
