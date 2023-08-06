import Axios from "../../Axios";
import { CustomerType } from "./customerSlice";
const API_URL = "/api/customer";

const addCustomer = async(data:CustomerType)=>{
    try{
        const res = await Axios.post(`${API_URL}/signup`,data);
        return res.data
    }catch(err:any){
        return err.response.data
    }
}
const fetchLatestCustomers = async()=>{
    try{
        const res = await Axios.get(`${API_URL}`)
        return res.data
    }catch(err:any){
        return err.response.data
    }
}
const deleteCustomer =async (id:string,adminToken:string | undefined )=>{
    try{
        const res = await Axios.delete(`${API_URL}/${id}`,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        })
        return res.data
    }catch(err:any){
        if(err.response.status ===  401 || err.response.status === 500)return console.log(err.response.data)
        return err.response
    }
}
const selectedCustomersDelete = async(data:string[],adminToken:string | undefined)=>{
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
const customerService = {
    addCustomer,
    fetchLatestCustomers,
    deleteCustomer,
    selectedCustomersDelete
}

export default customerService