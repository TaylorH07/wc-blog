const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const router = require('express').Router();

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIntex: true
})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log());

app.use("/api/auth", auth);

app.listen("2121", () => {
    console.log("Backend is running.");
});

module.exports = router 