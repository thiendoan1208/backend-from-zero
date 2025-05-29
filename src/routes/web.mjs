import express from "express";
import {
  getHomePage,
  postCreateUser,
  createUserForm,
  getUpdatePage,
  updateUser,
  deleteUser,
  confirmDeleteUser,
} from "../controllers/homeController.mjs";

const router = express.Router();

// Routes
// Home Page
router.get("/", getHomePage);

// Create user
router.get("/create", createUserForm);
router.post("/create-user", postCreateUser);

// edit user
router.get("/edit-user/:id", getUpdatePage);
router.post("/update-user", updateUser);

// delete user
router.post("/delete-user/:id", deleteUser);
router.post("/delete", confirmDeleteUser);

export default router;
