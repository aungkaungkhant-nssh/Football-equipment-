
import Axios from "../../Axios";
const API_URL = "/api/order"

const fetchLatestOrders = async(adminToken:string | undefined)=>{
    try{
        const res = await Axios.get(`${API_URL}`,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        });
        return res.data
    }catch(err:any){
        return err.response
    }
}
const deleteOrder =async (id:string,adminToken:string | undefined )=>{
    try{
        const res = await Axios.delete(`${API_URL}/${id}`,{
            headers:{
                Authorization:`Beaer ${adminToken}`
            }
        })
        return res.data
    }catch(err:any){
        return err.response
    }
}
const selectedOrdersDelete = async(data:string[],adminToken:string | undefined)=>{
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
const orderService = {
    fetchLatestOrders,
    deleteOrder,
    selectedOrdersDelete
}

export default orderService
