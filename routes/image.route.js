const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

const imageRouter = express.Router();

const {uploadImage} = require("../Controllers/image.controller")

imageRouter.post("/upload", uploadImage);

module.exports = {
	imageRouter,
};
