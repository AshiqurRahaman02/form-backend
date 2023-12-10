const express = require("express");
const {postQuestions2} = require("../Controllers/question.controller")


const q2Router = express.Router();

q2Router.post("/create", postQuestions2);

module.exports = {
	q2Router,
};
