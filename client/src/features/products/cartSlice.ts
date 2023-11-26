import { createSlice } from "@reduxjs/toolkit";
import { ImageType, ProductType } from "./productSlice";
import toast from 'react-hot-toast'
import discountPrice from "../../helper/discountPrice";

type CartItemsType = {
    _id:string,
    name:string,
    images:Array<ImageType> ,
    sizes:Array<string>
    price:string,
    qty:number,
    stock:number,
    size:string,
    discountPercent?:number
}
type CartType = {
    loading:boolean,
    carts:CartItemsType[]
}
const cartListItems:string | null = localStorage.getItem("carts")
const initialState:CartType = {
    loading:false,
    carts:cartListItems ? JSON.parse(cartListItems):[]
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const existCart =  state.carts.find((c)=>c._id===action.payload._id);
            if(!existCart){
                const price = action.payload.discountPercent ? discountPrice(action.payload.price,action.payload.discountPercent) : action.payload.price;
                state.carts = [...state.carts,{...action.payload,qty:1,price}]
            }else{
                existCart.size = action.payload.size
            }
            toast.success("Add To Cart")
            localStorage.setItem("carts",JSON.stringify([...state.carts]))
        },
        removeAllCart:(state,action)=>{
            state.carts = []
            localStorage.removeItem("carts");
        },
        removeByIdCart:(state,action)=>{
            const filterItems = state.carts.filter((c)=>(c._id !== action.payload));
            state.carts = filterItems;
            localStorage.setItem("carts",JSON.stringify(filterItems))
        },
        cartItemQtyIncrease:(state,action)=>{
            let hasCartItem = state.carts.find((c)=>c._id == action.payload);
            if(hasCartItem){
                if(hasCartItem.stock <= hasCartItem.qty){
                    toast.success("Not Available")
                }else{
                    hasCartItem.qty +=1;
                    localStorage.setItem("carts",JSON.stringify([...state.carts]))
                }
            }
        },
        cartItemQtyDecrease(state,action){
            let hasCartItem = state.carts.find((c)=>c._id == action.payload);
            if(hasCartItem){
                if(hasCartItem.qty <=1){
                   return;
                }else{
                    hasCartItem.qty -=1;
                    localStorage.setItem("cartItems",JSON.stringify([...state.carts]))
                }
              
            }
        },
    }
})
export const {addToCart,removeByIdCart,cartItemQtyIncrease,cartItemQtyDecrease,removeAllCart} = cartSlice.actions;
export default cartSlice.reducer;
