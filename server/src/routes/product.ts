import express from 'express'
import { createProduct, getProducts,getProduct, destroyProduct, updateProduct, selectedProductDelete } from '../controllers/productController'
import { body } from 'express-validator'
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
    body("colors")
        .notEmpty()
        .isArray({min:1})
        .withMessage("Color field is required")
    ]
}

router.post("/",
productValidations()
,createProduct)
router.get("/",getProducts)
router.get("/:id",getProduct)
router.delete("/:id",destroyProduct )
router.post("/deleteSelectedItems",selectedProductDelete)
router.put("/:id",
productValidations()
,updateProduct)
export default router