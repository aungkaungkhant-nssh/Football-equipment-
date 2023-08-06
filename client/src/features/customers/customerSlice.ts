import { RootState } from "../../app/store";
import customerService from "./customerService";
import { createAsyncThunk, createSlice ,PayloadAction} from "@reduxjs/toolkit";

export type CustomerType = {
    _id?:string,
    name:string,
    email:string,
    password:string,
    confirmPassword?:string
}

type CustomerInitType = {
    loading:boolean,
    customers:CustomerType[],
    errorMessages:[],
    success:boolean,
    selectedCustomerRows:CustomerType[]
}

const initialState : CustomerInitType = {
    loading:false,
    customers:[],
    errorMessages:[],
    success:false,
    selectedCustomerRows:[]
}

export const customerSlice= createSlice({
    name:"customers",
    initialState,
    reducers:{
        resetCustomer:(state,action:PayloadAction<string>)=>{
            state.loading = false;
            state.customers = state.customers
            state.success = false
            state.errorMessages = []
        },
        setSelectedCustomerRows:(state,action:PayloadAction<any>)=>{
           
            state.selectedCustomerRows = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addCustomer.pending,(state)=>{
            state.loading = true
        })
        .addCase(addCustomer.fulfilled,(state,action)=>{
            
            state.loading = false
            if("errors" in action.payload){
                state.errorMessages = action.payload.errors
            }else{
                state.customers = [...state.customers,action.payload]
                state.success = true
            }
        })
        builder.addCase(fetchLatestCustomers.pending,(state)=>{
            state.loading  = true;
        })
        .addCase(fetchLatestCustomers.fulfilled,(state,action)=>{
            state.loading = false;
            state.customers  = action.payload
        })
        builder.addCase(deleteCustomer.pending,(state)=>{
            state.loading = true;
        })
        .addCase(deleteCustomer.fulfilled,(state,action)=>{
            state.loading = false;
            const filterBrand= state.customers.filter((b)=> b._id !== action.payload._id)
            state.customers = filterBrand
            state.success = true
        
        })
        builder.addCase(deleteSelectedItems.pending,(state)=>{
            state.loading = true
        })
        .addCase(deleteSelectedItems.fulfilled,(state,action)=>{
            state.loading = false;
            console.log(action.payload)
            const customersId = new Set(action.payload.map((a:CustomerType)=>a._id))
            state.customers =  state.customers.filter((b)=> !customersId.has(b._id))
        })  
    }
})

export const addCustomer = createAsyncThunk("customers/addCustomer",async(data:CustomerType)=>{

    return await customerService.addCustomer(data)
})
export const fetchLatestCustomers =  createAsyncThunk("customers/fetchLatestCustomer",async()=>{
    return await customerService.fetchLatestCustomers()
})
export const deleteCustomer = createAsyncThunk("customers/deleteCustomer",async(id:string,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState
    return await customerService.deleteCustomer(id,admin?.token)
})
export const deleteSelectedItems =createAsyncThunk ("brands/deleteSelectedItems",async(data:unknown,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState
    if(Array.isArray(data)){
        return await customerService.selectedCustomersDelete(data,admin?.token)
    }
    
})
export const {resetCustomer,setSelectedCustomerRows} = customerSlice.actions;
export default customerSlice.reducer