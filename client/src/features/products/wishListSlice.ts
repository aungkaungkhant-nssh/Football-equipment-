import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./productSlice";
import { toast } from 'react-hot-toast';

const wishListsItems:string | null = localStorage.getItem("wishLists")

type wishListType = {
    loading:boolean,
    wishLists:ProductType[]
}

const initialState : wishListType = {
    loading:false,
    wishLists:wishListsItems ? JSON.parse(wishListsItems):[]
}

export const wishListSlice = createSlice({
    name:"wishLists",
    initialState,
    reducers:{
        addToWishList:(state,action)=>{
            console.log(action.payload)
            const existWishList =  state.wishLists.find((w)=>w._id===action.payload._id);
            if(!existWishList){
                state.wishLists = [...state.wishLists,action.payload]
                localStorage.setItem("wishLists",JSON.stringify([...state.wishLists]))
                toast.success("Add To WishList")
            }else{
                state.wishLists = state.wishLists.filter((w) => w._id !== action.payload._id);
                localStorage.setItem("wishLists",JSON.stringify([...state.wishLists]));
                toast.success("Remove To WishList")
            }
         
        },
        removeAllWishList:(state,action)=>{
            state.wishLists = []
            localStorage.removeItem("wishLists")
        },
        removeByIdWishList:(state,action)=>{
            const filterItems = state.wishLists.filter((w)=>(w._id !== action.payload))
            state.wishLists = filterItems;
            localStorage.setItem("wishLists",JSON.stringify(filterItems))
        }
    }
})
export const {addToWishList,removeAllWishList,removeByIdWishList} = wishListSlice.actions;
export default wishListSlice.reducer