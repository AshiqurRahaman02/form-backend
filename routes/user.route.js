const express = require("express");

const userRouter = express.Router();
const {userLogin, userRegister} = require("../Controllers/user.controller")

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

module.exports = {
	userRouter,
};
