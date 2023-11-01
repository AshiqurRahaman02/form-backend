const express = require("express");

const { Q2Model } = require("../models/q2.model");

const q2Router = express.Router();

q2Router.post("/create", async (req, res) => {
	try {
		const q2 = new Q2Model(req.body);
		await q2.save();
		res.status(200).json({ isError: false, q2 });
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
});

module.exports = {
	q2Router,
};
