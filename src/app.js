const express = require("express");
const cors = require("cors");
require("dotenv").config();

const internshipRoutes = require("./routes/internshipRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/internship", internshipRoutes);

module.exports = app;
