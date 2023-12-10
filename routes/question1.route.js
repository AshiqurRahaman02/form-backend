const express = require("express");
const {postQuestions1} = require("../Controllers/question.controller")

const q1Router = express.Router();

q1Router.post("/create", postQuestions1);

module.exports = {
	q1Router,
};
