import express from 'express'
import { createCategory,getCategories,getCategory ,destroyCategory, updateCategory, selectedCategoryDelete} from '../controllers/categoryController';
import { body } from 'express-validator';
import { adminOnly } from '../middleware/authHandler';
const router = express.Router();

router.post("/",adminOnly,
    body("name")
    .notEmpty()
    .withMessage("Name field is required")
,createCategory);
router.get("/",getCategories);
router.post("/deleteSelectedItems",adminOnly,selectedCategoryDelete)
router.get("/:id",getCategory);
router.delete("/:id",adminOnly,destroyCategory)
router.put("/:id",adminOnly,
     body("name")
    .notEmpty()
    .withMessage("Name field is required")
,updateCategory)
export default router