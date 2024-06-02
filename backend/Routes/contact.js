import nodemailer from "nodemailer";
import express from "express";

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "reese.kling7@ethereal.email",
    pass: "KmHgg2Kgg1aXS1CtWJ",
  },
});

// POST route for form submission
router.post("/contact", async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    // Send email using the transporter
    let info = await transporter.sendMail({
      from: '"Abdul Wahab Main 👻" <abdulwahab@gmail.com>',
      to: "awminhas619@gmail.com", 
      subject: subject,
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    // Send response with email info and success message
    res.status(200).json({ info, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

export default router;
