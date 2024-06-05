import nodemailer from "nodemailer";
import dotEnv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/UserSchema.js";
const router = express.Router();
dotEnv.config();

// POST route for form submission
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.send({ status: "User not exists." });
    }
    const token = jwt.sign({ id: user._id }, "JWT_secret_key", {
      expiresIn: "1d",
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASS,
      },
    });
    const mailOptions = {
      from: {
        name: "Abdul Wahab",
        user: process.env.USER,
      },
      to: "awminhas619@gmail.com",
      subject: "Sending Email for Reset Password",
      text: `http://localhost:5173/reset-password/${user._id}/${token}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ message: "Failed to send email" });
      } else {
        res.status(200).json({ message: "Success" });
      }
    });
  });
});

router.post("/reset-password/:id/:token", (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, "JWT_secret_key", (err, decoded) => {
    if (err) {
      return res.json({ message: "Error with token" });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          User.findOneAndUpdate({ _id: id }, { password: hash })
            .then((u) => res.send({ message: "Success" }))
            .catch((err) => res.send({ message: err }));
        })
        .catch((err) => res.send({ message: err }));
    }
  });
});

export default router;
