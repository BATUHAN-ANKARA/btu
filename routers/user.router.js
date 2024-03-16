const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/register", controller.userController.register);

module.exports = {
  user: router,
};
