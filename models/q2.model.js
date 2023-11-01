const mongoose = require("mongoose");

const q2Schema = new mongoose.Schema({
	description: String,
	q2Image: String,
	preview: String,
	correctAnswer: String,
	markOnCorrectAnswer: Number,
	options: [],
});

const Q2Model = mongoose.model("Q2", q2Schema);

module.exports = { Q2Model };
