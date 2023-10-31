const mongoose = require("mongoose");

const q3Schema = new mongoose.Schema({
	paragraph: String,
	mcq: [{
		question: String,
		options: [String],
		correctOption: String,
	}],
	markOnCorrectAnswer: Number,
});

const Q3Model = mongoose.model("Q3", q3Schema);

module.exports = { Q3Model };
