const express = require("express");
const cors = require("cors");
require("dotenv").config();

const internshipRoutes = require("./routes/internshipRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/internship", internshipRoutes);
app.get("/health", (req, res) => {
  res.status(200).send("Backend is awake 🚀");
});


module.exports = app;
