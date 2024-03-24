const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/register", controller.userController.register);
router.post("/login", controller.userController.login);
router.put("/changePassword/:id", controller.userController.changePassword);
router.get("/getUserById/:id", controller.userController.getUserById);
router.get("/getAllUsers", controller.userController.getAllUsers);
router.get("/getUserByName/:name", controller.userController.getUserByName);
router.put("/updateUser/:id", controller.userController.updateUser);

module.exports = {
  user: router,
};
