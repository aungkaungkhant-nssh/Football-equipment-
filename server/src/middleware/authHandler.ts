import { RequestHandler } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import env from '../util/validateEnv'
import Admin from "../model/Admin";
import Customer from "../model/Customer";

type DecodedToken =  {
    "sub": string,
    "name": string,
    "iat": number
  }

export const protect:RequestHandler = async(req,res,next)=>{
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if(!token) return res.status(401).json("Unauthorized")
    try{
        const decoded = jwt.verify(token,env.JWT_KEY)
        let customer = await Customer.findById((decoded as JwtPayload)._id);
        if(!customer) return res.status(401).json("Invalid Token");
        res.locals.customer = customer;
        next()
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}
export const  adminOnly:RequestHandler = async(req,res,next)=>{
    const authHeader = req.headers["authorization"]
    const token =  authHeader && authHeader.split(" ")[1]
    if(!token) return  res.status(401).json("Unauthorized")
    try{
        const decoded = jwt.verify(token,env.JWT_KEY);
        let admin = await Admin.findById((decoded as JwtPayload)._id);
        if(!admin) return res.status(401).json("Invalid Token");
        res.locals.admin = admin;
        next()
    }catch(err){
        res.status(401).json("Invalid Token");
    }
}