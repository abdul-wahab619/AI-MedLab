import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  // get token from headers
  const authToken = req.headers.authorization;

  // check token is exists
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    const token = authToken.split(" ")[1]; // Remove "Bearer " from the token string

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify and decode the token

    req.userId = decoded.id; // Attach decoded user information to the request id
    req.role = decoded.role;

    next(); // next must be call middleware function
  } catch (error) {
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
