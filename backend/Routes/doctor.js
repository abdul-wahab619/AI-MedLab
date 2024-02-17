import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", getSingleDoctor); // Fetch a single Doctor
router.get("/", getAllDoctors); // Fetch all Doctors
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor); // Delete a Doctor
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor); // Update a user

export default router;
