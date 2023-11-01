const express = require("express");

const { FormModel } = require("../models/form.model");
const { Q1Model } = require("../models/q1.model");
const { Q2Model } = require("../models/q2.model");
const { Q3Model } = require("../models/q3.model");

const formRouter = express.Router();

formRouter.post("/create", async (req, res) => {
	try {
		console.log(req.body);
		const form = new FormModel(req.body);
		await form.save();
		res.status(200).json({ isError: false, form });
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
});

formRouter.get("/get/:id", async (req, res) => {
	try {
		const form = await FormModel.findById(req.params.id)
			.populate("q1")
			.populate("q2")
			.populate("q3")
			.exec();

		if (!form) {
			return res
				.status(404)
				.json({ isError: true, error: "Form not found" });
		}

		res.status(200).json({ isError: false, form });
	} catch (error) {
		res.status(500).json({ error: "Error fetching the form" });
	}
});

module.exports = {
	formRouter,
};
