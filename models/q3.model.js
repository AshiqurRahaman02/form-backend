const mongoose = require("mongoose");

const q3Schema = new mongoose.Schema({
	description: String,
	paragraph: String,
	q3Image: String,
	mcq: [],
	markOnCorrectAnswer: Number,
});

const Q3Model = mongoose.model("Q3", q3Schema);

module.exports = { Q3Model };
