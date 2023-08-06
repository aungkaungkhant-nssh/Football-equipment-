import { RequestHandler } from "express";
import Customer, { CustomerDocument } from "../model/Customer";
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
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
    const {email,password} =req.body
    try{
        let customer : CustomerDocument | null = await Customer.findOne({email})
        if(!customer) return res.status(401).json({errors:[{path:"email",msg:"Your email Not foud"}]})
        const passwordMatch : boolean= await bcrypt.compare(password,customer.password)
        if(!passwordMatch) return res.status(401).json({errors:[{path:"password",msg:"Password Incorrect"}]})
        let token = await customer.generateToken()
        res.status(200).json({token,customer})
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
    const {id} = req.params
    try{
        let customer = await Customer.findOneAndDelete({_id:id})
        res.status(200).json(customer)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

// @desc selectedCustomerDelete
// @route Delete /api/product
// @access protected
export const selectedCustomerDelete:RequestHandler =  async (req,res)=>{
    try{
        let deleteCustomer = await Customer.find({_id:{$in:req.body}})
        await Customer.deleteMany({_id:{$in:req.body}})
        res.status(200).json(deleteCustomer)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}


