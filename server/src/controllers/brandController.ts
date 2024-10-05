import { RequestHandler, Response ,Request} from "express"
import Brand from "../model/Brand"
import {validationResult} from 'express-validator'
import Product from "../model/Product"
// @desc    createBrand
// @route   POST /api/brand
// @access  protected
export const createBrand:RequestHandler = async(req,res)=>{
    const {name,logo} = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json(errors)
 
    
    try{
        let brand =  new Brand({name,logo})
        brand =await brand.save()
        res.status(201).json(brand)
    }catch(err){
        res.status(500).json(err)
    }
}

// @desc    getAllBrands
// @route   GET /api/brands
// @access  protected
export const getBrands = async(req:Request,res:Response)=>{
   
    try{
        let brands = await Brand.find().sort({ _id: -1 });
        res.status(200).json(brands)
    }catch(err){
        res.status(500).json({message:"Something went wrong"})
    }
}

// @desc    getOneBrand
// @route   GET /api/brand
// @access  protected
export const getBrand : RequestHandler = async(req,res)=>{
    try{
        let brand = await Brand.findById(req.params.id);
        res.status(200).json(brand)
    }catch(err){
        res.status(500).json({message:"Something went wrong"})
    }
}

// @desc    deleteBrand
// @route   DELETE /api/brand
// @access  protected
export const destroyBrand :RequestHandler = async(req,res)=>{
    try{
        let brand =  await Brand.findOneAndDelete({_id:req.params.id});
        await Product.deleteMany({brand:{$eq:req.params.id}})
        res.status(200).json(brand)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

// @desc    updateBrand
// @route   Update /api/brand
// @access  protected
export const updateBrand:RequestHandler = async(req,res)=>{
    const {id} = req.params
    const {name,logo} = req.body;
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        let brand = await Brand.findOneAndUpdate({_id:id} , logo.public_id && logo.imageUrl  ? {name,logo} : {name})    
        brand = await Brand.findById(id);  
        res.status(200).json(brand)  
    }catch(err){
        res.status(500).json("Somethinbg went wrong")
    }
}

// @desc selectedBrandDelete
// @route Delete /api/brand
// @access protected
export const selectedBrandsDelete:RequestHandler =  async (req,res)=>{
    try{
        let deleteBrands = await Brand.find({_id:{$in:req.body}})
        await Brand.deleteMany({_id:{$in:req.body}})
        res.status(200).json(deleteBrands)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

