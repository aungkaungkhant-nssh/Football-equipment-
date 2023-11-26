import { createAsyncThunk, createSlice ,PayloadAction} from "@reduxjs/toolkit";

import dashboardService from "./dashboardService";
import { RootState } from "../../app/store";


export type DashboardType ={

}

type DashboardInitType = {
    loading:boolean,
    dashboard:any,
    errorMessages:[]
}

const initialState:DashboardInitType = {
    loading:false,
    dashboard:{},
    errorMessages:[],
}

export const dashboardSlice = createSlice({
    name:"dashboard",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(fetchLatestDashboardData.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchLatestDashboardData.fulfilled,(state,action)=>{
       
            state.loading = false;
            state.dashboard = action.payload
        })
    }
})


export const fetchLatestDashboardData = createAsyncThunk("dashboard/fetchLatestDashboardData",async(data,{getState})=>{
    const {auth:{admin}} = getState() as RootState;
    return await dashboardService.fetchLatestDashboardData(admin?.token)
})

export default dashboardSlice.reducer