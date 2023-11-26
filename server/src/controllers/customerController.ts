import { RequestHandler } from "express";
import Customer, { CustomerDocument } from "../model/Customer";
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from 'uuid';
import ResetPasswordTemplate from "../util/ResetPasswordTemplate";
import sendingEmail from "../service/email/sendingEmail";
export const signUp:RequestHandler = async(req,res)=>{
    const errors = validationResult(req)
    const {name,email,password} =req.body
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        const existCustomer : CustomerDocument | null =  await Customer.findOne({email})
        if(existCustomer) return res.status(409).json({errors:[{path:"email",msg:"Email is already exist.Please choose a different one"}]})
        const salt =await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password,salt);
        let customer  = new Customer({name,email,password:passwordHash})
        customer = await customer.save()
        let token =await customer.generateToken()
        res.status(201).json({token,customer})
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

export const signIn:RequestHandler = async(req,res)=>{
    const errors = validationResult(req)
    const {email,password} =req.body;
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        let customer : CustomerDocument | null = await Customer.findOne({email,provider:false});
;
      if(!customer) return res.status(401).json({errors:[{path:"email",msg:"Your email Not foud"}]})
        const passwordMatch : boolean= await bcrypt.compare(password,customer.password)
        if(!passwordMatch) return res.status(401).json({errors:[{path:"password",msg:"Password Incorrect"}]})
        let token = await customer.generateToken();
        
      
        res.status(200).json({token,customer:{name:customer.name,email:customer.email}})
    }catch(err){
        
        res.status(500).json("Something went wrong")
    }
}
export const getCustomers:RequestHandler = async(req,res)=>{
    try{
        let customers = await Customer.find().sort("_id");
        
        res.status(200).json(customers)
    }catch(err){
        res.status(500).json({message:"Something went wrong"})
    }
}
export const destroyCustomer:RequestHandler = async(req,res)=>{
    const {id} = req.params;
    
    try{
        let customer = await Customer.findOneAndDelete({_id:id})
        res.status(200).json(customer)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

export const updateCustomer:RequestHandler = async(req,res)=>{
    const errors = validationResult(req)
    const {_id} = res.locals.customer;
    const {name} = req.body;
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        let customer :CustomerDocument | null  = await Customer.findOneAndUpdate({_id},{name});
        if(!customer) return res.status(400).json({errMessage:"Customer nout found"});
        customer = await Customer.findById(customer._id);
        res.status(200).json(customer)
    }catch(err){
        res.status(500).json("Something went wrong");
    }
}

export const updatePassword:RequestHandler = async(req,res)=>{
    const errors = validationResult(req);
    const {_id} = res.locals.customer;
    if(!errors.isEmpty()) return res.status(422).json(errors)
    const {currentPassword,newPassword} = req.body;
    try{
        let customer :CustomerDocument | null  = await Customer.findById(_id);
        if(!customer) return res.status(400).json({errMessage:"Customer nout found"});
        let passwordMatch = await bcrypt.compare(currentPassword,customer.password);
        if(!passwordMatch)  return res.status(401).json({errors:[{path:"currentPassword",msg:"Password Incorrect"}]})

        const salt =await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(newPassword,salt);
        
        customer = await Customer.findOneAndUpdate({_id},{password:passwordHash},{new:true});

        res.status(200).json({customer});



    }catch(err){
        res.status(500).json("Something went wrong");
    }
  

}

export const resetPassword:RequestHandler = async(req,res)=>{
    const {email} = req.body;
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        let customer = await Customer.findOne({email})
        if(!customer) return res.status(404).json({errors:[{path:"email",msg:"Email not found"}]})
        customer.resetToken = uuidv4();
        customer.resetTokenExpiry = new Date(Date.now() + 600000);
        customer = await customer.save();

        const template = ResetPasswordTemplate(customer);
        const isFailed =  sendingEmail(template);
        if (typeof isFailed === "boolean" && isFailed) {
            return res
                .status(400)
                .send({errMessage:"Failed to send email verification code!"});
        }
        return res.status(200).json({message:"Sending Email Success"});
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

export const verifyResetPassword:RequestHandler  = async(req,res)=>{
    const {password,token}= req.body;
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json(errors);
    try{
        let customer = await Customer.findOne({resetToken:token});
        if(!customer) return res.status(400).json({errMessage:"Token Not found"});
        if(customer.resetTokenExpiry && customer.resetTokenExpiry < new Date()) return res.status(400).json({errMessage:"Token Expired"});
        const salt =await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password,salt);
        customer.password = passwordHash;
        customer.resetToken = undefined;
        customer.resetTokenExpiry = undefined;
        await customer.save();
        res.status(200).json({message:"Reset Password success"})
    }catch(err){
        res.status(500).json("Something went wrong");
    }
 

}

export const selectedCustomerDelete:RequestHandler =  async (req,res)=>{
    try{
        let deleteCustomer = await Customer.find({_id:{$in:req.body}})
        await Customer.deleteMany({_id:{$in:req.body}})
        res.status(200).json(deleteCustomer)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}


