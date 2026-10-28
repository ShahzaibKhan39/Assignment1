const express = require("express");

const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/", userController.getAllUser);

userRouter.get("/:id", userController.getUserById);

userRouter.post("/", userController.createUser);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;