import Axios from "../../Axios";
import { AdminType } from "./authSlice";

const API_URL = "/api/admin/auth";

const adminLogin = async(data:AdminType)=>{
    try{
        const res = await Axios.post(`${API_URL}/signIn`,data);
        return res.data
    }catch(err:any){
        return err.response.data
    }
}

export default  {
    adminLogin
}