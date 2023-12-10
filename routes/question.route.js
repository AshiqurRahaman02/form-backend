const express = require("express");
const {postQuestions1, postQuestions2, postQuestions3} = require("../Controllers/question.controller")

const questionRouter = express.Router();

questionRouter.post("/question1/create", postQuestions1);
questionRouter.post("/question2/create", postQuestions2);
questionRouter.post("/question3/create", postQuestions3);

module.exports = {
	questionRouter,
};
