import { createAsyncThunk, createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { CustomerType } from "../customers/customerSlice";
import orderService from "./orderService";
import { RootState } from "../../app/store";
import { ProductType } from "../products/productSlice";

export type OrderType = {
    _id?:string,
    customerId:string,
    phone:string,
    totalAmount:string,
    city:string,
    town:string,
    postalCode:string
    name:string,
    email:string,
    orderData:ProductType[],
    createdAt:string,
    updatedAt:string,
    product:any
}
type OrderInitType = {
    loading:boolean,
    orders:OrderType[],
    errorMessages:[],
    success:boolean,
    selectedOrderRows:OrderType[] ,
    
}
const initialState : OrderInitType = {
    loading:false,
    orders:[],
    errorMessages:[],
    success:false,
    selectedOrderRows:[]
}

export const orderSlice =  createSlice({
    name:"orders",
    initialState,
    reducers:{
        resetOrder:(state,action:PayloadAction<string>)=>{
            state.loading = false;
            state.orders = state.orders
            state.success = false
            state.errorMessages = []
        },
        setSelectedOrderRows:(state,action:PayloadAction<OrderType[]>)=>{
            
            state.selectedOrderRows = action.payload
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchLatestOrders.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(fetchLatestOrders.fulfilled,(state,action)=>{
 
            state.loading = false;
            state.orders = action.payload
        })
        builder.addCase(deleteOrder.pending,(state)=>{
            state.loading = true
        })
        .addCase(deleteOrder.fulfilled,(state,action)=>{
            state.loading = false
            const filterOrder= state.orders.filter((b)=> b._id !== action.payload._id)
            state.orders = filterOrder
            state.success = true
        })

        builder.addCase(deleteSelectedItems.pending,(state)=>{
            state.loading = true
        })
        .addCase(deleteSelectedItems.fulfilled,(state,action)=>{
            state.loading = false;
            const orderId = new Set(action.payload.map((a:OrderType)=>a._id))
            state.orders =  state.orders.filter((b)=> !orderId.has(b._id))
        })   

        builder.addCase(fetchLatestOrdersByCustomerId.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchLatestOrdersByCustomerId.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.loading = false;
            state.orders = action.payload;
        })
    }
})

export const fetchLatestOrders = createAsyncThunk("orders/fetchLatestOrders",async(data,{getState})=>{
    const {auth:{admin}} = getState() as RootState;
    return await orderService.fetchLatestOrders(admin?.token)
})
export const deleteOrder= createAsyncThunk("orders/deleteOrder",async(id:unknown,{getState})=>{
    const {auth:{admin}} = getState() as RootState;
    if(typeof id==="string"){
        return orderService.deleteOrder(id,admin?.token)
    }
 
})

export const deleteSelectedItems = createAsyncThunk("orders/deleteSelectedItems",async(data:unknown,{getState})=>{
    const {auth:{admin}} = getState() as RootState;
    if(Array.isArray(data)){
        return orderService.selectedOrdersDelete(data,admin?.token)
    }
})

export const fetchLatestOrdersByCustomerId = createAsyncThunk("orders/fetchLatesOrdersByCustomerId",async(data,{getState})=>{
    const {auth:{user}} = getState() as RootState;
    console.log(user)
    return await orderService.fetchLatestOrdersByCustomerId(user?.token)
})

export const {setSelectedOrderRows,resetOrder} = orderSlice.actions
export default orderSlice.reducer