import express from "express";
import {
  getHomePage,
  postCreateUser,
  createUserForm,
  getUpdatePage,
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

export default router;
