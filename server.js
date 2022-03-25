const express = require("express");
const connectDB = require("./config/db");
const {
  getQuestion,
  postQuestion,
} = require("./controllers/QuestionController");
const app = express();
require("dotenv").config();
connectDB();

app.use(express.json({ extende: false }));
app.get("/:id", getQuestion);
app.post("/", postQuestion);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
