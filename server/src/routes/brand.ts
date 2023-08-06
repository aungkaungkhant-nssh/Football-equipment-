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
    body("logo")
    .notEmpty()
    .withMessage("Logo field is required")
,createBrand);
router.get("/",getBrands);
router.post("/deleteSelectedItems",selectedBrandsDelete)
router.delete("/:id",destroyBrand)
router.get("/:id",getBrand);
router.put("/:id",
     body("name")
    .notEmpty()
    .withMessage("Name field is required"),
    body("logo")
    .notEmpty()
    .withMessage("Logo field is required")
,updateBrand)

export default router