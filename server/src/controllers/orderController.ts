import {RequestHandler} from "express";
import Order from "../model/Order";
import env from '../util/validateEnv';
const stripe = require("stripe")(env.STRIPE_SECRET_KEY);
import { productPipeLines } from "../pipeline";
import mongoose from "mongoose";

export const getOrders:RequestHandler = async(req,res)=>{
    try{
        let orders = await Order.aggregate([
           ...productPipeLines
        ]).sort({ _id: -1 });
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

export const getOrdersByCustomerId :RequestHandler = async(req,res)=>{
    try{
        const customerId = res.locals.customer._id;
      
        let orders = await Order.aggregate([
            {
                $match:{
                    customerId:new mongoose.Types.ObjectId(customerId)
                }
            },
            ...productPipeLines
        ]).sort({ _id: -1 })
  
        res.status(200).json(orders)
    }catch(err){
        console.log("hiteh")
        res.status(500).json("Something went wrong")
    }
}

// @desc    deleteOrder
// @route   DELETE /api/brand
// @access  protected
export const deleteOrder :RequestHandler = async(req,res)=>{
    try{
        let brand =  await Order.findOneAndDelete({_id:req.params.id})
        res.status(200).json(brand)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

// @desc selectedOrderDelete
// @route Delete /api/order
// @access protected
export const selectedOrderDelete:RequestHandler =  async (req,res)=>{
    try{
        let deleteOrders = await Order.find({_id:{$in:req.body}})
        await Order.deleteMany({_id:{$in:req.body}})
        res.status(200).json(deleteOrders)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}