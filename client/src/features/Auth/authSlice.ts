import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import toast from 'react-hot-toast';
import { RootState } from "../../app/store";

const adminInfo:string | null = localStorage.getItem("adminInfo")
const userInfo:string | null = localStorage.getItem("userInfo")
export type AuthType = {
    _id?:string,
    name?:string,
    email:string,
    password?:string,
    confirmPassword?:string,
    token?:string,
    provider?:boolean
}

export type AuthInitType   = {
    loading:boolean,
    admin:AuthType | null,
    errormessages:[],
    success:boolean,
    successMessage:string,
    user:AuthType | null
}


const initialState:AuthInitType = {
    loading:false,
    admin: adminInfo ? JSON.parse(adminInfo) : null,
    user:userInfo ? JSON.parse(userInfo):null,
    errormessages:[],
    success:false,
    successMessage:""

}
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        adminLogout:(state,action)=>{
            state.admin = null;
            localStorage.removeItem("adminInfo")
        },
        userLogout:(state,action)=>{
            state.user = null;
            localStorage.removeItem("userInfo");
        },
        resetAdminAuth:(state,action)=>{
            state.loading =false;
            state.admin = state.admin;
            state.errormessages = [];
            state.success = false
        },
        resetUserAuth:(state,action)=>{
            state.loading = false;
            state.user = state.user;
            state.errormessages = [];
            state.success = false,
            state.successMessage = "";
        },
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(adminLogin.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(adminLogin.fulfilled,(state,{payload})=>{
    
            state.loading  = false;
            if("errors" in payload){
                state.errormessages = payload.errors;
            }else if ("errMessage" in payload){
                toast.error(payload.errMessage)
            }else{
                const data = {...payload.admin,token:payload.token}
                state.admin = data
                state.success = true
                localStorage.setItem("adminInfo",JSON.stringify(data))
            }
        })
        builder.addCase(userRegister.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(userRegister.fulfilled,(state,{payload})=>{
            state.loading = false;
           
            if("errors" in payload){
                state.errormessages = payload.errors;
            }else if ("errMessage" in payload){
                toast.error(payload.errMessage)
            }else{
                const data= {...payload.customer,token:payload.token}
                state.user = data;
                state.success = true;
                localStorage.setItem("userInfo",JSON.stringify(data))
            }
        })

        builder.addCase(userLogin.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(userLogin.fulfilled,(state,{payload})=>{
            state.loading = false;
            
            if("errors" in payload){
                state.errormessages = payload.errors;
            }else if ("errMessage" in payload){
                toast.error(payload.errMessage)
            }
            else{
                const data= {...payload.customer,token:payload.token}
                state.user=data;
                state.success = true;
                localStorage.setItem("userInfo",JSON.stringify(data))
            }
        })

        builder.addCase(userDetailsUpdate.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(userDetailsUpdate.fulfilled,(state,{payload})=>{
            state.loading = false;
            console.log(payload)
            
            if("errors" in payload){
                state.errormessages = payload.errors;
            }else if ("errMessage" in payload){
                toast.error(payload.errMessage)
            }else{
                let data={...state.user,...payload};
                state.user= data;
                state.success = true;
                state.successMessage="Details"
                localStorage.setItem("userInfo",JSON.stringify(data))
            }
        })

        builder.addCase(userPasswordUpdate.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(userPasswordUpdate.fulfilled,(state,{payload})=>{
            state.loading = false;
            
            if("errors" in payload){
                state.errormessages = payload.errors;
            }else if ("errMessage" in payload){
                toast.error(payload.errMessage)
            }else{
                state.success = true;
                state.successMessage="Password"
            }
        })

        builder.addCase(resetPassword.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(resetPassword.fulfilled,(state,{payload})=>{
            state.loading = false;
            if("errors" in payload){
                state.errormessages = payload.errors;
            }else if ("errMessage" in payload){
                toast.error(payload.errMessage)
            }else{
                state.success  = true;
                toast.success("Please check your email")
            }
        })

        builder.addCase(resetVerifyPassword.pending,(state,action)=>{
            state.loading  = true;
        })
        .addCase(resetVerifyPassword.fulfilled,(state,{payload})=>{
            state.loading = false;
            
            if("errors" in payload){
                state.errormessages = payload.errors;
            }else if ("errMessage" in payload){
                toast.error(payload.errMessage)
            }
            
            else{
                state.success = true;
                toast.success("Reset Password Successs")
            }
        })
    }
})

export const adminLogin = createAsyncThunk("auth/adminLogin",async(data:AuthType)=>{
    return await authService.adminLogin(data)
})
export const userRegister = createAsyncThunk("auth/userRegister",async(data:AuthType)=>{
    return await authService.userRegister(data)
})
export const userLogin = createAsyncThunk("auth/userLogin",async(data:AuthType)=>{
    return await authService.userLogin(data)
})

export const userDetailsUpdate = createAsyncThunk("auth/userDetailsUpdate",async(data:{name:string | undefined},{getState})=>{
    const {auth:{user}} = getState() as RootState;
    return await authService.userDetailsUpdate(data,user?.token);
})

export const userPasswordUpdate = createAsyncThunk("auth/userPasswordUpdate",async(data:{currentPassword:string | undefined,newPassword:string | undefined},{getState})=>{
    const {auth:{user}} = getState() as RootState;
    return await authService.userPasswordUpdate(data,user?.token);
})

export const resetPassword = createAsyncThunk("auth/resetPassword",async(email:string,{getState})=>{

    return await authService.resetPassword(email)
})

export const resetVerifyPassword = createAsyncThunk("auth/resetVerifyPassword",async(data:{password:string | undefined,confirmPassword:string | undefined,token:string | undefined})=>{
    return await authService.resetVerifyPassword(data)
})

export const {adminLogout,resetAdminAuth,resetUserAuth,userLogout,setUser} = authSlice.actions;
export default authSlice.reducer