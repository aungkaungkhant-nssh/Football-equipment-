import express from 'express'
import {body} from 'express-validator'
import { createBrand,getBrands,getBrand,destroyBrand,updateBrand, selectedBrandsDelete } from '../controllers/brandController';
import { adminOnly } from '../middleware/authHandler';
const router = express.Router();


router.post("/",
    adminOnly,
    body("name")
    .notEmpty()
    .withMessage("Name field is required"),
    body("logo.public_id")
    .notEmpty()
    .withMessage("Logo field is required"),
    adminOnly
,createBrand);
router.get("/",getBrands);
router.post("/deleteSelectedItems",adminOnly,selectedBrandsDelete)
router.delete("/:id",adminOnly,destroyBrand)
router.get("/:id",getBrand);
router.put("/:id",
    adminOnly,
     body("name")
    .notEmpty()
    .withMessage("Name field is required"),
    body("logo")
    .notEmpty()
    .withMessage("Logo field is required"),
    adminOnly
,updateBrand)

export default router