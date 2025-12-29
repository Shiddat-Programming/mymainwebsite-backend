const express = require("express");
const router = express.Router();

const {
  applyInternship,
} = require("../controllers/internshipController");

router.post("/apply", applyInternship);

module.exports = router;
