import express from "express";
import { authenticate, restrict } from "./../auth/verifyToken.js";
import {
  getAllUsers,
  getAllDoctors,
  getAllBookings,
} from "../Controllers/adminController.js";

const router = express.Router();

router.route("/users").get(authenticate, restrict(["admin"]), getAllUsers);
router.route("/doctors").get(authenticate, restrict(["admin"]), getAllDoctors);
router
  .route("/bookings")
  .get(authenticate, restrict(["admin"]), getAllBookings);

export default router;
