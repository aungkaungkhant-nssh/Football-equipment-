import { RequestHandler } from "express";
import Category from "../model/Category";
import { validationResult } from "express-validator";
import Product from "../model/Product";


// @desc    createCategory
// @route   POST /api/category
// @access  protected
export const createCategory:RequestHandler = async(req,res)=>{
    const {name} = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        let category =  new Category({name})
        category =await category.save()
        res.status(200).json(category)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}


// @desc    getAllCategories
// @route   GET /api/categories
// @access  protected
export const getCategories:RequestHandler = async(req,res)=>{
    try{
        let categories = await Category.find().sort("_id");
        res.status(200).json(categories)

    }catch(err){
        res.status(200).json("Something went wrong")
    }
}



// @desc    getOneCategory
// @route   GET /api/category
// @access  protected
export const getCategory:RequestHandler = async(req,res)=>{
    try{    
        let category = await Category.findById(req.params.id);
        res.status(200).json(category)
    }catch(err){
        res.status(200).json("Something went wrong")
    }
}



// @desc    deleteCategory
// @route   DELETE /api/category
// @access  protected
export const destroyCategory:RequestHandler = async(req,res)=>{
    try{
        let category =  await Category.findOneAndDelete({_id:req.params.id})
        await Product.deleteMany({category:{$eq:req.params.id}})
        res.status(200).json(category)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}

// @desc    updateBrand
// @route   Update /api/brand
// @access  protected
export const updateCategory:RequestHandler = async(req,res)=>{
    const {id} = req.params;
    const errors = validationResult(req)
    const {name} = req.body;
    if(!errors.isEmpty()) return res.status(422).json(errors)
    try{
        let brand = await Category.findOneAndUpdate({_id:id},{name})  
        brand  = await Category.findById(id)    
        res.status(200).json(brand)  
    }catch(err){
        res.status(500).json("Somethinbg went wrong")
    }
}

// @desc selectedBrandDelete
// @route Delete /api/product
// @access protected
export const selectedCategoryDelete:RequestHandler =  async (req,res)=>{
    try{
        let deleteBrands = await Category.find({_id:{$in:req.body}})
        await Category.deleteMany({_id:{$in:req.body}})
        res.status(200).json(deleteBrands)
    }catch(err){
        res.status(500).json("Something went wrong")
    }
}
