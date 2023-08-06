import {  PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from './productService'
import { CategoryType } from "../categories/categorySlice";
import { BrandType } from "../brands/brandSlice";
import { RootState } from "../../app/store";

export type ProductType ={
    _id?:string,
    name:string,

    images:Array<string> ,
    price:string,
    description:string,
    brand: Array<BrandType> ,
    category:Array<CategoryType> ,
    sizes:Array<string>,
    colors:Array<string>,
    stock:number

}

type ProductInitType = {
    loading:boolean,
    products:ProductType[],
    errorMessages:[],
    success:boolean,
    selectedProductRows:ProductType[],
    pageCount:number,
    limit:number,
    displayItems:ProductType[],
    currentPage:number,
    selectedCategoryId:string,
    selectedBrandId:string
}

const initialState : ProductInitType= {
    loading:false,
    products:[],
    errorMessages:[],
    success:false,
    selectedProductRows:[],
    pageCount:0,
    limit:10,
    displayItems:[],
    currentPage:0,
    selectedCategoryId:"",
    selectedBrandId:""
}

export const productSlice =  createSlice({
    name:"products",
    initialState,
    reducers:{ 
        resetProduct:(state,action:PayloadAction<string>)=>{
            state.loading = false;
            state.products = state.products
            state.success = false
            state.errorMessages = []
            state.selectedBrandId = ""
            state.selectedCategoryId  = ""
        },
        setLoading:(state,action:PayloadAction<boolean>)=>{
            state.loading = action.payload
        },
        setSelectedProductRows:(state,action:PayloadAction<any>)=>{
            state.selectedProductRows = action.payload
        },
        setDisplayItems:(state,action:PayloadAction<any>)=>{
            state.displayItems = action.payload
        },
        filteredByCategory:(state,action:PayloadAction<any>)=>{
            if(!action.payload){
                state.displayItems = state.products.slice(0,0+state.limit)
                state.pageCount = Math.ceil(state.products.length / state.limit)
                return
            }
            const categoryId = action.payload;
            state.selectedCategoryId  = categoryId;
            let  filteredCategories = state.products.filter((p:ProductType)=> p.category[0]._id === categoryId);
            if(state.selectedBrandId && filteredCategories.length>0) filteredCategories = filteredCategories.filter((p:ProductType)=> p.brand[0]._id === state.selectedBrandId)
            state.displayItems = filteredCategories.slice(0,0+state.limit)
            state.pageCount = Math.ceil(filteredCategories.length / state.limit)
        },
        filteredByBrand :(state,action:PayloadAction<any>)=>{
            if(!action.payload){
                state.displayItems = state.products.slice(0,0+state.limit)
                state.pageCount = Math.ceil(state.products.length / state.limit)
                return
            }
            const brandId = action.payload;
            state.selectedBrandId = brandId
            let filteredBrands =   state.products.filter((p:ProductType)=> p.brand[0]._id === brandId);
            if(state.selectedCategoryId && filteredBrands.length>0) filteredBrands = filteredBrands.filter((p:ProductType)=> p.category[0]._id === state.selectedCategoryId)
            state.displayItems = filteredBrands.slice(0,0+state.limit)
            state.pageCount = Math.ceil(filteredBrands.length / state.limit)
        },
        setCurrentPage:(state,action:PayloadAction<any>)=>{
            state.currentPage = action.payload
        },
        lastAdded:(state,action:PayloadAction<any>)=>{
            state.products = state.products.reverse()
            state.pageCount = Math.ceil(state.products.length / state.limit)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchLatestProducts.pending,(state)=>{
            state.loading = true
        }).addCase(fetchLatestProducts.fulfilled,(state,action)=>{
            state.loading = false
            state.products = action.payload
            state.pageCount = Math.ceil(action.payload.length / state.limit)
        })
        

        builder.addCase(addProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
    
            state.loading = false
            if("errors" in action.payload){
                state.errorMessages = action.payload.errors
            }else{
                state.products = [...state.products,action.payload]
                state.success = true
            }
        })

        builder.addCase(destroyProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(destroyProduct.fulfilled,(state,action)=>{
            state.loading = false;
            const filterProduct= state.products.filter((b)=> b._id !== action.payload._id)
            state.products = filterProduct
            state.success = true
            
        })
        builder.addCase(fetchProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading  = false
            if(!state.products.find((b:any)=>b._id === action.payload._id)){
                state.products =  [...state.products,action.payload]
            } 
           
        })
        builder.addCase(updateProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(updateProduct.fulfilled,(state,action)=>{
            state.loading = false;
            if("errors" in action.payload){
                state.errorMessages = action.payload.errors
            }else{
                state.products = state.products.map((p)=>{
                    if(p._id === action.payload._id){
                        p = action.payload
                    }
                    return p
                })
                state.success = true
            }
        })
        builder.addCase(deleteSelectedItems.pending,(state)=>{
            state.loading = true
        })
        .addCase(deleteSelectedItems.fulfilled,(state,action)=>{
            state.loading = false;
            const categoryId = new Set(action.payload.map((a:CategoryType)=>a._id))
            state.products =  state.products.filter((b)=> !categoryId.has(b._id))
        }) 

    }
})
export const fetchLatestProducts = createAsyncThunk("products/fetchLatestProducts",async()=>{
    return    await productService.fetchLatestProducts();
})

export const addProduct  = createAsyncThunk("products/addProduct",async(data:ProductType,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    return  await  productService.addProduct(data,admin?.token);
})
export const destroyProduct = createAsyncThunk("products/destoryProduct",async(id:unknown,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    if(typeof id==="string"){
        return await productService.destroyProduct(id,admin?.token)
    }
})
export const fetchProduct = createAsyncThunk("products/fetchProduct",async(id:string)=>{
    return await productService.fetchProduct(id)
})
export const updateProduct =createAsyncThunk("products/updateProduct",async(data:ProductType,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    return await productService.updateProduct(data,admin?.token)
})
export const deleteSelectedItems =createAsyncThunk ("brands/deleteSelectedItems",async(data:unknown,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    if(Array.isArray(data)){
        return productService.selectedProductsDelete(data,admin?.token)
    }
    
})
export const {lastAdded,resetProduct,setLoading,setSelectedProductRows,filteredByCategory,setDisplayItems,filteredByBrand,setCurrentPage} = productSlice.actions
export default productSlice.reducer