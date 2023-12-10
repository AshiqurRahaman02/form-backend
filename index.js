const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cloudinary = require("cloudinary");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");

let { connection } = require("./config/db");
const {cloudinaryConnection} = require("./config/cloudinary.connection")

const { userRouter } = require("./routes/user.route");
const { formRouter } = require("./routes/form.route");
const { questionRouter } = require("./routes/question.route")
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

app.get("/", (req, res) => {
	res.send("Welcome to our API");
});

app.use("/user", userRouter);
app.use("/form", formRouter);
app.use("/question", questionRouter);
app.use("/image", imageRouter);

app.listen(process.env.port, async () => {
	try {
		await connection;
		await cloudinaryConnection;
		console.log("Connected to Database and Cloudinary");
	} catch (error) {
		console.log(error);
		console.log("Unable to connect to Database");
	}
	console.log(`Server is running on port ${process.env.port}`);
});
