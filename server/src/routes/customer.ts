import express from "express";
import { signUp,signIn, destroyCustomer, getCustomers, selectedCustomerDelete } from "../controllers/customerController";
import { body } from "express-validator";
import { selectedProductDelete } from "../controllers/productController";
const router = express.Router()

router.post("/signup",
    body("name")
    .notEmpty()
    .withMessage("Name is required"),
    body("email")
    .notEmpty()
    .withMessage("Email is required"),
    body("password")
    .notEmpty()
    .withMessage("Password is required"),
    body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password field is required")
    .custom((value,{req})=>{
        if(value !== req.body.password){
            throw new Error("Password confirmation does not match with password");
            
        }
        return true
    })
,signUp)
router.post("/signin",signIn)
router.get("/",getCustomers)
router.delete("/:id",destroyCustomer)
router.post("/deleteSelectedItems",selectedCustomerDelete)

export default router