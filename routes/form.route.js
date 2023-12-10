const express = require("express");

const {createForm, getForm} = require("../Controllers/form.controller")

const formRouter = express.Router();

formRouter.post("/create", createForm);
formRouter.get("/get/:id", getForm);

module.exports = {
	formRouter,
};
