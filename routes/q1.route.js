const express = require('express')

const {Q1Model} = require("../models/q1.model")

const q1Router = express.Router()

q1Router.post("/create", async (req, res) => {
    try {
        const q1 = new Q1Model(req.body);
        await q1.save();
        res.status(200).json({ isError: false, q1 });
    } catch (error) {
        res.status(500).json({ isError: true, message: error.message });
    }
})

module.exports = {
    q1Router
}