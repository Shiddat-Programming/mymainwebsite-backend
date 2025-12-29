const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,      // smtp.hostinger.com
  port: process.env.EMAIL_PORT,      // 465
  secure: true,                      // SSL
  auth: {
    user: process.env.EMAIL_USER,    // hr@witxtechnologies.com
    pass: process.env.EMAIL_PASS     // email password
  }
});

module.exports = transporter;
