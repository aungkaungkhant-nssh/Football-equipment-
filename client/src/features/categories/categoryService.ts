import Axios from "../../Axios";
import { CategoryType } from "./categorySlice";
const API_URL = "/api/admin/category"
const fetchLatestCategories = async()=>{
    try{
        const res = await Axios.get(`${API_URL}`);
        return res.data
    }catch(err:any){
        return err.response
    }
}
const addCategory = async(data:CategoryType,adminToken:string | undefined)=>{
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
const updateCategory = async(data:CategoryType,adminToken:string | undefined)=>{
    
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
const deleteCategory =async (id:string,adminToken:string | undefined )=>{
    try{
        const res = await Axios.delete(`${API_URL}/${id}`,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
        return res.data
    }catch(err:any){
        return err.response
    }
}
const fetchCategory = async(id:string)=>{
    try{
        const res = await Axios.get(`${API_URL}/${id}`)
        return res.data  
    }catch(err:any){
        return err.response
    }
}
const selectedCategoriesDelete = async(data:string[])=>{
    try{
        const res = await Axios.post(`${API_URL}/deleteSelectedItems`,data)
        return res.data
    }catch(err:any){
        return err.response
    }
}
const categoryService = {
    fetchLatestCategories,
    addCategory,
    deleteCategory,
    updateCategory,
    fetchCategory,
    selectedCategoriesDelete
}
export default categoryService