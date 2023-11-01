const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

const imageRouter = express.Router();

function uploadImageToCloudinary(file) {
	return new Promise((resolve, reject) => {
		cloudinary.v2.uploader.upload(file.tempFilePath, (error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
}

imageRouter.post("/upload", async (req, res) => {
	try {
		const { image } = req.files;
		console.log(image)
		const imageResult = await uploadImageToCloudinary(image);

		res.status(200).json({ isError: false, imageResult });
	} catch (error) {
		res.status(500).json({ error: "Error fetching the form" });
	}
});

module.exports = {
	imageRouter,
};
