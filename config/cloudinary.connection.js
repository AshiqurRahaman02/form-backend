const cloudinary = require("cloudinary");
require("dotenv").config();

const cloudinaryConnection = cloudinary.config({
	cloud_name: process.env.cloudName,
	api_key: process.env.apiKey,
	api_secret: process.env.apiSecret,
});

module.exports = { cloudinaryConnection };
