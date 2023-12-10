const express = require("express");

const {postQuestions3} = require("../Controllers/question.controller")

const q3Router = express.Router();

q3Router.post("/create", postQuestions3);

module.exports = {
	q3Router,
};
