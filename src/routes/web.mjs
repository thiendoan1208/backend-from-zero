import express from "express";
import { getHomePage, getABC } from "../controllers/homeController.mjs";

const router = express.Router();

// Routes

// Home Page
router.get("/", getHomePage);

router.get("/abc", getABC);

export default router;
