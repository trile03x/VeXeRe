const express = require("express");
const { register, login,uploadAvt } = require("../controllers/users-controller")
const {uploadImg}=require("../middleware/upload-img/upload-avt");
const { authenticate } = require("../middleware/authenticate");
const userRouter = express.Router();
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/upload-avt",authenticate,uploadImg('avatar'),uploadAvt);
module.exports = {
    userRouter,
}   