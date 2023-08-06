import express from 'express'
import { signIn } from '../controllers/adminController';
import { body } from 'express-validator';
const router = express.Router();

router.post("/signIn",
    body("email")
        .notEmpty()
        .withMessage("Email is required"),
    body("password")
        .notEmpty()
        .withMessage("Password is required")
,signIn);

export default router