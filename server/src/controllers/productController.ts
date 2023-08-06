import { RequestHandler } from "express";
import Product from "../model/Product";
import { validationResult } from "express-validator";
import mongoose from "mongoose";


// @desc    createProduct
// @route   POST /api/product
// @access  protected

export const createProduct :RequestHandler = async(req,res)=>{
    const {name,images,price,description,brand,category,sizes,colors,stock}= req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        let product = new Product({
            name,
            images,
            price,
            description,
            brand:brand[0]._id,
            category:category[0]._id,
            sizes,
            colors,
            stock:stock || 1
        })
        product = await product.save()
        res.status(201).json(product)
    }catch(err){
        res.status(500).json(err)
    }
}

// @desc getProducts
// @route GET /api/product
// @access protected

export const getProducts:RequestHandler = async(req,res)=>{
    try{
        let products = await Product.aggregate([
            {
                $lookup:{
                    from:"categories",
                    localField:"category",
                    foreignField:"_id",
                    as:"category"
                }
            },
            {
                $lookup:{
                    from:"brands",
                    localField:"brand",
                    foreignField:"_id",
                    as:"brand"
                }
            },
        ])
        res.status(200).json(products)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}


// @desc getProducts
// @route GET /api/product
// @access protected

export const getProduct:RequestHandler = async (req,res)=>{
   
    try{
        let product = await Product.aggregate([
            {
                $match:{_id:new mongoose.Types.ObjectId(req.params.id)}
            },
           
            {
                $lookup:{
                    from:"categories",
                    localField:"category",
                    foreignField:"_id",
                    as:"category"
                }
            },
            {
                $lookup:{
                    from:"brands",
                    localField:"brand",
                    foreignField:"_id",
                    as:"brand"
                }
            },
        ])
        res.status(200).json(product[0])
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

// @desc updateProduct
// @route UPDATE /api/product
// @access protected
export const updateProduct:RequestHandler = async (req,res)=>{
    const {id} = req.params
    const {brand,category} = req.body
    const errors  = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        let product:any = await Product.findOneAndUpdate({_id:id},{...req.body,brand:brand[0]._id,category:category[0]._id})
        if(!product) res.status(404).json("Product not found")
        product = await Product.aggregate([
            {
                $match:{_id:new mongoose.Types.ObjectId(id)}
            },
           
            {
                $lookup:{
                    from:"categories",
                    localField:"category",
                    foreignField:"_id",
                    as:"category"
                }
            },
            {
                $lookup:{
                    from:"brands",
                    localField:"brand",
                    foreignField:"_id",
                    as:"brand"
                }
            },
        ])
        res.status(200).json(product[0])
    }catch(err){
        console.log(err)
        res.status(500).json("Something went wrong")
    }
}

// @desc deleteProduct
// @route Delete /api/product
// @access protected

export const destroyProduct:RequestHandler = async (req,res)=>{
    try{
        let product = await Product.findOneAndDelete({_id:req.params.id})
        res.status(200).json(product)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}


// @desc selectedProductDelete
// @route Delete /api/product
// @access protected
export const selectedProductDelete:RequestHandler =  async (req,res)=>{
    try{
        let deleteProduct = await Product.find({_id:{$in:req.body}})
        await Product.deleteMany({_id:{$in:req.body}})
        res.status(200).json(deleteProduct)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}




