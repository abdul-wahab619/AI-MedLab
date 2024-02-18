// Import necessary modules
import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  // Get token from headers
  const authToken = req.headers.authorization;

  // Check if token exists
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    // Extract token string and decode it
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach decoded user information to the request object
    req.userId = decoded.id;
    req.role = decoded.role;

    // Check if the user is a doctor and attach doctorId to the request object
    if (req.role === "doctor") {
      const doctor = await Doctor.findById(req.userId);
      if (!doctor) {
        return res
          .status(404)
          .json({ success: false, message: "Doctor not found" });
      }
      req.doctorId = doctor._id; // Attach doctorId to the request object
    }

    next(); // Call next middleware
  } catch (error) {
    // Handle token verification errors
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  let user;

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  if (patient) {
    user = patient;
  }
  if (doctor) {
    user = doctor;
  }

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized" });
  }
  next();
};
