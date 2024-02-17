import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
} from "../Controllers/doctorController.js";

const router = express.Router();

router.get("/:id", getSingleDoctor); // Fetch a single Doctor
router.get("/", getAllDoctors);      // Fetch all Doctors
router.delete("/:id", deleteDoctor); // Delete a Doctor
router.put("/:id", updateDoctor);    // Update a user


export default router;
