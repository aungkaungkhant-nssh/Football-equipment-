import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const adminInfo:string | null = localStorage.getItem("adminInfo")
export type AdminType = {
    _id?:string,
    name?:string,
    email:string,
    password?:string,
    token?:string
}

export type AdminInitType   = {
    loading:boolean,
    admin:AdminType | null,
    errormessages:[],
    success:boolean,
}


const initialState:AdminInitType = {
    loading:false,
    admin: adminInfo ? JSON.parse(adminInfo) : null,
    errormessages:[],
    success:false

}
export const authSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        adminLogout:(state,action)=>{
            state.admin = null;
            localStorage.removeItem("adminInfo")
        },
        resetAdminAuth:(state,action)=>{
            state.loading =false;
            state.admin = state.admin;
            state.errormessages = [];
            state.success = false
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(adminLogin.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(adminLogin.fulfilled,(state,{payload})=>{
    
            state.loading  = false;
            if("errors" in payload){
                state.errormessages = payload.errors
            }else{
                const data = {...payload.admin,token:payload.token}
                state.admin = data
                state.success = true
                localStorage.setItem("adminInfo",JSON.stringify(data))
            }
        })
    }
})

export const adminLogin = createAsyncThunk("admin/adminLogin",async(data:AdminType)=>{
    return await authService.adminLogin(data)
})
export const {adminLogout,resetAdminAuth} = authSlice.actions;
export default authSlice.reducer