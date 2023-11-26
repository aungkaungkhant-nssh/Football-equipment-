import express from "express";
import { getAllDashboardData } from "../controllers/dashboardController";
import { adminOnly } from "../middleware/authHandler";

const router = express.Router();


router.get("/",adminOnly,getAllDashboardData);

export default router;