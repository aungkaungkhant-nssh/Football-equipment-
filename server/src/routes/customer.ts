import express from "express";
import { signUp,signIn, destroyCustomer, getCustomers, selectedCustomerDelete, updateCustomer, updatePassword, resetPassword, verifyResetPassword } from "../controllers/customerController";
import { body } from "express-validator";
import { adminOnly, protect } from "../middleware/authHandler";
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
router.post("/signin",
    body("email")
    .notEmpty()
    .withMessage("Email is required"),
    body("password")
    .notEmpty()
    .withMessage("Password is required")
,signIn)
router.get("/",adminOnly,getCustomers)
router.delete("/:id",adminOnly,destroyCustomer)
router.post("/deleteSelectedItems",adminOnly,selectedCustomerDelete);
router.put("/updateCustomer",
protect,
body("name")
    .notEmpty()
    .withMessage("Name field is required"),

updateCustomer);

router.put("/updatePassword",protect,
body("currentPassword")
    .notEmpty()
    .withMessage("CurrrentPassword field is required"),
body("newPassword")
    .notEmpty()
    .withMessage("New Password field is required"),
updatePassword
)



router.post("/email/forgot",
    body("email")
        .notEmpty()
        .withMessage("Email field is required"),
    resetPassword
)

router.post("/email/resetPassword",
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
        }),
        body("token")
            .notEmpty()
            .withMessage("Token is required"),

        verifyResetPassword
)
export default router