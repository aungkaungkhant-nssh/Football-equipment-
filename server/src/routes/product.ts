import express from 'express'
import { createProduct, getProducts,getProduct, destroyProduct, updateProduct, selectedProductDelete, createReview } from '../controllers/productController'
import { body } from 'express-validator'
import { adminOnly, protect } from '../middleware/authHandler'
const router = express.Router()

function productValidations(){
    return [
        body("name")
        .notEmpty()
        .withMessage("Name field is required"),
    body("images")
        .notEmpty()
        .isArray({min:1})
        .withMessage("Images field is required"),
    body("price")
        .notEmpty()
        .withMessage("Price field is required"),
    body("description")
         .notEmpty()
         .withMessage("Description field is required"),
    body("brand")
        .notEmpty()
        .isArray({min:1})
        .withMessage("Brand field is required"),
    body("category")
        .notEmpty()
        .isArray({min:1})
        .withMessage("Category field is required"),
    body("sizes")
        .notEmpty()
        .isArray({min:1})
        .withMessage("Size field is required"),
  
    ]
}

router.post("/",
productValidations(),
adminOnly
,createProduct)
router.get("/",getProducts)
router.get("/:id",getProduct)
router.delete("/:id",adminOnly,destroyProduct )
router.post("/deleteSelectedItems",adminOnly,selectedProductDelete)
router.put("/:id",
productValidations(),
adminOnly
,updateProduct)

router.post("/:id/reviews",protect,
    body("comment")
        .notEmpty()
        .withMessage("Comment field is required"),
    body("rating")
        .notEmpty()
        .withMessage("Rating field is required")
,createReview)
export default router