import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
  getDoctorProfile,
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor); // Fetch a single Doctor
router.get("/", getAllDoctors); // Fetch all Doctors
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor); // Delete a Doctor
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor); // Update a doctor
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile); // get profile

export default router;
