const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIntex: true
})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log());

app.listen("2121", () => {
    console.log("Backend is running.");
});