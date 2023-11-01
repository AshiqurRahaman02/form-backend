const express = require("express");

const { Q3Model } = require("../models/q3.model");

const q3Router = express.Router();

q3Router.post("/create", async (req, res) => {
	try {
		const q3 = new Q3Model(req.body);
		await q3.save();
		res.status(200).json({ isError: false, q3 });
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
});

module.exports = {
	q3Router,
};
