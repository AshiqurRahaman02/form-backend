const express = require("express");

const { FormModel } = require("../models/form.model");
const { Question1Model } = require("../models/question1.model");
const { Question2Model } = require("../models/question2.model");
const { Question3Model } = require("../models/question3.model");

const {createForm, getForm} = require("../Controllers/form.controller")

const formRouter = express.Router();

formRouter.post("/create", createForm);
formRouter.get("/get/:id", getForm);

module.exports = {
	formRouter,
};
