import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  getUserProfile,
  getMyAppointments,
} from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(["patient"]), getSingleUser); // Fetch a single user
router.get("/", authenticate, restrict(["admin"]), getAllUsers); // Fetch all users
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser); // Delete a user
router.put("/:id", authenticate, restrict(["patient"]), updateUser); // Update a user
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile); // get userProfile
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["patient"]),
  getMyAppointments
); // get myappointments

export default router;
