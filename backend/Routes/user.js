import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
} from "../Controllers/userController.js";

const router = express.Router();

router.get("/:id", getSingleUser); // Fetch a single user
router.get("/", getAllUsers);      // Fetch all users
router.delete("/:id", deleteUser); // Delete a user
router.put("/:id", updateUser);    // Update a user


export default router;
