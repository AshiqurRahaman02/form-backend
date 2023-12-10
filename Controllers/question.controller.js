

const { Question1Model } = require("../models/question1.model");
const { Question2Model } = require("../models/question2.model");
const { Question3Model } = require("../models/question3.model");

const postQuestions1 = async (req, res) => {
	try {
		const question1 = new Question1Model(req.body);
		await question1.save();
		res.status(200).json({ isError: false, q1:question1 });
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
}

const postQuestions2 = async (req, res) => {
	try {
		const question2 = new Question2Model(req.body);
		await question2.save();
		res.status(200).json({ isError: false, q2:question2 });
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
}

const postQuestions3 = async (req, res) => {
	try {
		const question3 = new Question3Model(req.body);
		await question3.save();
		res.status(200).json({ isError: false, q3:question3 });
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
}

module.exports = {postQuestions1, postQuestions2, postQuestions3}