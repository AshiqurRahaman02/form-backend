const mongoose = require("mongoose");

const q2Schema = new mongoose.Schema({
	preview: String,
	correctAnswer: String,
	markOnCorrectAnswer: Number,
	options: [String],
});

const Q2Model = mongoose.model("Q2", q2Schema);

module.exports = { Q2Model };
