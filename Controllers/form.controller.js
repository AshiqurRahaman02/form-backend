const { FormModel } = require("../models/form.model");

const createForm = async (req, res) => {
	try {
		console.log(req.body);
		const form = new FormModel(req.body);
		await form.save();
		res.status(200).json({ isError: false, form });
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
};

const getForm = async (req, res) => {
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
};

module.exports = { createForm, getForm };
