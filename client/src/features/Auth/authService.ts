import Axios from "../../Axios";
import { CustomerType } from "../customers/customerSlice";
import { AuthType } from "./authSlice";

const API_URL = "/api/admin/auth";

const adminLogin = async(data:AuthType)=>{
    try{
        const res = await Axios.post(`${API_URL}/signIn`,data);
        return res.data
    }catch(err:any){
        return err.response.data
    }
}
const userRegister = async(data:AuthType)=>{
    try{
        const res = await Axios.post(`/api/customer/signup`,data);
        return res.data
    }catch(err:any){
        return err.response.data
    }
}
const userLogin = async(data:AuthType)=>{
    try{
        const res = await Axios.post(`/api/customer/signin`,data);
        return res.data
    }catch(err:any){
        return err.response.data
    }
}

const userDetailsUpdate = async(data:{name:string | undefined},token:string | undefined)=>{
    try{
        const res= await Axios.put(`/api/customer/updateCustomer`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return res.data;
    }catch(err:any){
        return err.response.data;
    }
} 

const userPasswordUpdate = async(data:{currentPassword:string | undefined,newPassword:string | undefined},token:string | undefined)=>{
    try{
        const res = await Axios.put("/api/customer/updatePassword",data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return res.data;
    }catch(err:any){
        return err.response.data;
    }
}

const resetPassword = async(email:string)=>{
    try{
        const res = await Axios.post("/api/customer/email/forgot",{email});
        return res.data;
    }catch(err:any){
        return err.response.data;
    }
}
const resetVerifyPassword = async(data:{password:string | undefined,confirmPassword:string | undefined,token:string | undefined})=>{
    try{
        const res = await Axios.post("/api/customer/email/resetPassword",data)
        return res.data;
    }catch(err:any){
        console.log(err)
        return err.response.data;
    }
}
export default  {
    adminLogin,
    userRegister,
    userLogin,
    userDetailsUpdate,
    userPasswordUpdate,
    resetPassword,
    resetVerifyPassword
}