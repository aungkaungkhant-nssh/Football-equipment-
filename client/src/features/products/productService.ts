
import { ProductType } from './productSlice'
import Axios from '../../Axios'
const API_URL = "/api/admin/product"



const fetchLatestProducts = async()=>{
    try{
        const res = await Axios.get(`${API_URL}`);
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
        return res.data
    }catch(err:any){
        return err.response
    }
}
const productService = {
    fetchLatestProducts,
    addProduct,
    destroyProduct,
    fetchProduct,
    updateProduct,
    selectedProductsDelete
}

export default productService