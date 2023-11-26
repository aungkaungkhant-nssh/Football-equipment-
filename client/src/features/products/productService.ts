
import { ImageType, ProductType, ReviewType } from './productSlice'
import Axios from '../../Axios'
const API_URL = "/api/admin/product"
import cloudinary from '../../helper/cloudinary'

const fetchLatestProducts = async(query:any)=>{
    let categoryId=""
    let brandId=""
    if(query){
        categoryId = query.categoryId
        brandId = query.brandId
    }
    
    try{
        const res = await Axios.get(`${API_URL}?categoryId=${categoryId}&brandId=${brandId}`);
       
        return res.data
    }catch(err:any){
        return err.response
    }
}   
const addProduct = async(data:ProductType,adminToken:string | undefined)=>{
    try{
        const res = await Axios.post(API_URL,data,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
       
       
        return res.data
    }catch(err:any){
        return err.response.data
    }
}
const destroyProduct = async(id:string,adminToken:string | undefined)=>{
    try{
        const res = await Axios.delete(`${API_URL}/${id}`,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
  
        res.data.images.forEach((image:ImageType)=>{
           cloudinary.destroy(image)
        })
        
        return res.data
    }catch(err:any){
        return err.response.data
    }
}
const fetchProduct = async(id:string)=>{
    try{
        const res = await Axios.get(`${API_URL}/${id}`)
        return res.data
    }catch(err:any){
        return err.response.data
    }
}
const updateProduct = async(data:ProductType,adminToken:string | undefined)=>{
    try{
        const res = await Axios.put(`${API_URL}/${data._id}`,data,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
        return res.data
    }catch(err:any){
        return err.response.data
    }
}
const selectedProductsDelete = async(data:string[],adminToken:string | undefined)=>{
    try{
        const res = await Axios.post(`${API_URL}/deleteSelectedItems`,data,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
        return res.data;
    }catch(err:any){
        return err.response
    }
}
const createProductReview = async(data:ReviewType,userToken:string | undefined)=>{
    try{
        const res = await Axios.post(`${API_URL}/${data.id}/reviews`,data,{
            headers:{
                Authorization:`Bearer ${userToken}`
            }
        })
        return res.data;
    }catch(err:any){
        return  err.response.data
    }
}
const productService = {
    fetchLatestProducts,
    addProduct,
    destroyProduct,
    fetchProduct,
    updateProduct,
    selectedProductsDelete,
    createProductReview
}

export default productService