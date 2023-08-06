import { RequestHandler } from 'express'
import Admin, { AdminDocument } from '../model/Admin'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'

export const signIn:RequestHandler = async(req,res)=>{
    const {email,password} =req.body
    const errors = validationResult(req)
    if(!errors.isEmpty())return res.status(200).json(errors)
    try{
        let admin  = await Admin.findOne({email})
        if(!admin) return res.status(401).json({errors:[{path:"email",msg:"Email is incorrect"}]})
        const passwordMatch:boolean= await bcrypt.compare(password,admin.password)
     
        if(!passwordMatch) return res.status(401).json({errors:[{path:"password",msg:"Password is incorrect"}]})
        let token = await admin.generateToken()
        res.status(200).json({token,admin})
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

