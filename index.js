const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cloudinary = require("cloudinary");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");

let { connection } = require("./db");

const { userRouter } = require("./routes/user.route");
const { formRouter } = require("./routes/form.route");
const { q1Router } = require("./routes/q1.route");
const { q2Router } = require("./routes/q2.route");
const { q3Router } = require("./routes/q3.route");
const { imageRouter } = require("./routes/image.route");

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileupload({
		useTempFiles: true,
	})
);
app.use(bodyParser.json());

cloudinary.config({
	cloud_name: process.env.cloudName,
	api_key: process.env.apiKey,
	api_secret: process.env.apiSecret,
});

app.get("/", (req, res) => {
	res.send("Welcome to our API");
});

app.use("/user", userRouter);
app.use("/form", formRouter);
app.use("/q1", q1Router);
app.use("/q2", q2Router);
app.use("/q3", q3Router);
app.use("/image", imageRouter);

app.listen(process.env.port, async () => {
	try {
		await connection;
		console.log("Connected to Database");
	} catch (error) {
		console.log(error);
		console.log("Unable to connect to Database");
	}
	console.log(`Server is running on port ${process.env.port}`);
});
