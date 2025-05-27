import express from "express";
import {
  getHomePage,
  getABC,
  postCreateUser,
} from "../controllers/homeController.mjs";

const router = express.Router();

// Routes
// Home Page
router.get("/", getHomePage);
router.get("/abc", getABC);

// Create user
router.post("/create-user", postCreateUser);

export default router;
