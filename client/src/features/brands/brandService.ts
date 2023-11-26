import { BrandType } from "./brandSlice";
import Axios from "../../Axios";
import cloudinary from "../../helper/cloudinary";

const API_URL = "/api/admin/brand"




const addBrand = async(data:BrandType,adminToken:string | undefined)=>{
    try{
        const res = await Axios.post(API_URL,data,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
        return res.data
    }catch(err:any){
        if(err.response.status ===  401 || err.response.status === 500)return console.log(err.response.data)
        return err.response.data
    }
}
const fetchLatestBrands = async()=>{
    
    try{
        const res = await Axios.get(`${API_URL}`);
        return res.data
    }catch(err:any){
        return err.response
    }
}
const fetchBrand = async(id:string)=>{
    try{
        const res = await Axios.get(`${API_URL}/${id}`)
        return res.data  
    }catch(err:any){
        return err.response
    }
}
const updateBrand = async(data:BrandType,adminToken:string | undefined)=>{
    try{
        const res = await Axios.put(`${API_URL}/${data._id}`,data,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
        return res.data
    }catch(err:any){
        if(err.response.status ===  401 || err.response.status === 500)return console.log(err.response.data)
        return err.response.data
    }
}
const deleteBrand =async (id:string,adminToken:string | undefined)=>{
    try{
        const res = await Axios.delete(`${API_URL}/${id}`,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
        cloudinary.destroy(res.data.logo)
        return res.data
    }catch(err:any){
        return err.response
    }
}
const selectedBrandsDelete = async(data:string[],adminToken:string | undefined)=>{
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
const brandService = {
    addBrand,
    fetchLatestBrands,
    fetchBrand,
    updateBrand,
    deleteBrand,
    selectedBrandsDelete
}

export default brandService