// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, phoneNumber, topic, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Your email to receive contact requests
    subject: `Contact Form Submission from ${firstName} ${lastName}`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Topic: ${topic}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Message sent successfully");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
