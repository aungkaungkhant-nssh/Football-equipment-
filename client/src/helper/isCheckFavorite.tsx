import { ProductType } from "../features/products/productSlice";

const isCheckFavorite = (wishLists:ProductType[],productId:string)=>{
    return wishLists.find((w)=>w._id === productId);
}

export default isCheckFavorite;