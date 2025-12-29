const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT), // 587
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  // 🔥 IMPORTANT FOR CLOUD
  pool: true,              // reuse same connection
  maxConnections: 1,       // free tier safe
  maxMessages: 5,

  connectionTimeout: 60 * 1000, // 60 sec
  greetingTimeout: 30 * 1000,
  socketTimeout: 60 * 1000,

  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
