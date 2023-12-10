
require("dotenv").config();
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		let user = await UserModel.findOne({ email });

		if (user) {
			res.status(500).json({ isError: true, message: "Email already used" });
		}
		bcrypt.hash(password, 5, async (err, hash) => {
			if (err) throw err;
			const user = new UserModel({ name, email, password: hash });
			console.log(user);
			await user.save();
			res.status(201).send({
				isError: false,
				message: "Welcome to our website",
				token: jwt.sign({ userId: user._id }, process.env.jwtSecret),
				user,
			});
		});
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
}

const userLogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		let user = await UserModel.findOne({ email });

		if (!user) {
			res.status(500).json({ isError: true, message: "User not found" });
		}

		bcrypt.compare(password, user.password, (err, result) => {
			if (result) {
				res.status(200).send({
					isError: false,
					message: "Welcome Back to our website",
					token: jwt.sign({ userId: user._id }, process.env.jwtSecret),
					user,
				});
			} else {
				res.status(500).json({
					isError: true,
					message: "Please enter correct password",
				});
			}
		});
	} catch (error) {
		res.status(500).json({ isError: true, message: error.message });
	}
}

module.exports = {userLogin, userRegister}