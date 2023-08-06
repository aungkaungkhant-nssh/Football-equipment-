import {RequestHandler} from "express";
import Order from "../model/Order";

export const createOrder:RequestHandler =async(req,res)=>{
    const {phoneNumber,totalAmount,address} = req.body
    try{
        let order = new Order({
            user:res.locals.customer._id,
            address,
            phoneNumber,
            totalAmount,
        })
        order = await order.save();
        res.status(201).json(order)
    }catch(err){
        
        res.status(500).json("Something went wrong")
    }
}

export const getOrders:RequestHandler = async(req,res)=>{
    try{
        let orders = await Order.aggregate([
            {
                $lookup:{
                    from:"customers",
                    localField:"user",
                    foreignField:"_id",
                    as:"customer"
                }
            },
        ]);
        res.status(200).json(orders)
    }catch(err){
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