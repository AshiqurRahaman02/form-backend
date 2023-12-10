const mongoose = require("mongoose");

const q1Schema = new mongoose.Schema({
	description: String,
	q1Image: String,
	categories: [],
	options: [],
	markOnCorrectAnswer: Number,
});

const Question1Model = mongoose.model("Q1", q1Schema);

module.exports = { Question1Model };
