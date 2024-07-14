import {  PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from './productService'
import { CategoryType } from "../categories/categorySlice";
import { BrandType } from "../brands/brandSlice";
import { RootState } from "../../app/store";
import discountPrice from "../../helper/discountPrice";

export type ImageType={
    public_id:string,
    imageUrl:string
}
export type ReviewType={
    _id?:string,
    id?:string,
    name?:string,
    comment:string,
    rating:number,
    createdAt?:string
}
export type ProductType ={
    
    _id?:string,
    name:string,

    images:Array<ImageType> ,
    price:string,
    description:string,
    brand: Array<BrandType> ,
    category:Array<CategoryType> ,
    sizes:Array<string>,
    // colors:Array<string>,
    stock:number
    discountPercent?:number
    isNew?:boolean,
    reviews?:ReviewType[],
    numReviews?:number,
    rating?:number,
    sold?:number
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
    selectedBrandId:string,
    chooseSize?:string,
    chooseColor?:string,
    searchProduct:string

}

const initialState : ProductInitType= {
    loading:false,
    products:[],
    errorMessages:[],
    success:false,
    selectedProductRows:[],
    pageCount:0,
    limit:12,
    displayItems:[],
    currentPage:0,
    selectedCategoryId:"",
    selectedBrandId:"",
    chooseSize:"",
    chooseColor:"",
    searchProduct:""
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
        setChooseColor:(state,action:PayloadAction<string>)=>{
            state.chooseColor  = action.payload;
        },  
        setChooseSize:(state,action:PayloadAction<string>)=>{
            state.chooseSize = action.payload
        },
        chooseProductSize:(state,action:PayloadAction<any>)=>{
            state.displayItems = state.products.filter((p)=>{
          
                if(state.selectedBrandId ){

                    return  state.selectedBrandId === p.brand[0]._id  && p.sizes.find((s)=>s === action.payload)
                }else {
                    return  state.selectedCategoryId === p.category[0]._id  && p.sizes.find((s)=>s === action.payload)
                }
               
            })
        },
        chooseProductColor:(state,action:PayloadAction<any>)=>{
            // state.displayItems = state.products.filter((p)=>{
            //     if(state.chooseSize){
            //        return p.colors.find((c)=>c===action.payload) && p.sizes.find((s)=>s===state.chooseSize)
            //     }
            //     return p.colors.find((c)=>c===action.payload)
            // })
           
        },
        setLoading:(state,action:PayloadAction<boolean>)=>{
            state.loading = action.payload
        },
        setSelectedProductRows:(state,action:PayloadAction<any>)=>{
            state.selectedProductRows = action.payload
        },
        setDisplayItems:(state,action:PayloadAction<any>)=>{
            state.displayItems = action.payload;
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

                if(state.selectedCategoryId){
                  state.displayItems =  state.products.filter((p:ProductType)=>p.category[0]._id === state.selectedCategoryId).slice(0,0+state.limit);
                }else{
                    state.displayItems = state.products.slice(0,0+state.limit)
                }
              
                state.pageCount = Math.ceil(state.products.length / state.limit)
                return
            }
            const brandId = action.payload;
            state.selectedBrandId = brandId
            let filteredBrands =   state.products.filter((p:ProductType)=> p.brand[0]._id === brandId)
            if(state.selectedCategoryId && filteredBrands.length>0) filteredBrands = filteredBrands.filter((p:ProductType)=> p.category[0]._id === state.selectedCategoryId)
            state.displayItems = filteredBrands.slice(0,0+state.limit)
            state.pageCount = Math.ceil(filteredBrands.length / state.limit)
        },
        filterBySort :(state,action:PayloadAction<any>)=>{
            let result:ProductType[] =[];
            if(action.payload === "price_high_To_low"){     
                result = state.displayItems.sort((p1,p2) =>{
                    return (
                        (p2.discountPercent ? discountPrice(+p2.price,p2.discountPercent) : +p2.price) 
                        -(p1.discountPercent ? discountPrice(+p1.price,p1.discountPercent) : +p1.price)
                    )
                })
            }
            if(action.payload === "price_low_To_high"){
                result = state.displayItems.sort((p1,p2) =>{
                    return (
                        (p1.discountPercent ? discountPrice(+p1.price,p1.discountPercent) : +p1.price) 
                        -(p2.discountPercent ? discountPrice(+p2.price,p2.discountPercent) : +p2.price)
                    )
                })
                
            }
            if(action.payload === "sort"){
                result = state.products.filter((a:any)=> a.category[0]._id === state.selectedCategoryId)
            }

            if(action.payload === "discount"){
                 result = state.displayItems.filter((a)=> a.discountPercent && a.discountPercent>0);
            }

            if(action.payload === "new_arrivals"){
                result = state.displayItems.filter((a:any)=> a.isNew)
            }

            if(state.selectedBrandId){
                result = result.filter((p)=> p.brand[0]._id === state.selectedBrandId)
            }
            if(state.selectedCategoryId){
                result = result.filter((p)=>p.category[0]._id === state.selectedCategoryId);
            }

            state.displayItems = result;


            state.pageCount = Math.ceil(state.products.length / state.limit)
            return 
        },
        setCurrentPage:(state,action:PayloadAction<any>)=>{
            state.currentPage = action.payload
        },
        lastAdded:(state,action:PayloadAction<any>)=>{
            state.products = state.products.reverse();
            state.pageCount = Math.ceil(state.products.length / state.limit)
        },
        setSelectedCategoryId :(state,action:PayloadAction<any>)=>{
            state.selectedCategoryId  = action.payload
        },
        setSelectedBrandId:(state,action:PayloadAction<any>)=>{
            state.selectedBrandId = action.payload
        },
        setSearchProduct:(state,action:PayloadAction<any>)=>{
        
            state.searchProduct = action.payload
        },
        searchProductByName:(state,action:PayloadAction<any>)=>{

            let result;
             result= state.products.filter((p)=>p.name.toLowerCase().includes(action.payload.toLowerCase()))
            if(state.selectedCategoryId)result = result.filter((r)=>r.category[0]._id === state.selectedCategoryId);
            if(state.selectedBrandId) result = result.filter(r=>r.category[0]._id === state.selectedBrandId);

            state.displayItems = result;
            state.searchProduct=""
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchLatestProducts.pending,(state)=>{
            state.loading = true
        }).addCase(fetchLatestProducts.fulfilled,(state,action)=>{
        
            state.loading = false
            state.products = action.payload
            let data = action.payload.filter((a:any)=>a.category[0]._id === state.selectedCategoryId)
            if(state.searchProduct) {
                data = data.filter((p:any)=>p.name.toLowerCase().includes(state.searchProduct));
                state.searchProduct = ""
            }
       
            state.displayItems = data;
            state.pageCount = Math.ceil(action.payload.length / state.limit)
        })
        
        builder.addCase(fetchLatestProductsByAdmin.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchLatestProductsByAdmin.fulfilled,(state,action)=>{
            state.loading = false;
          
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

        builder.addCase(createReview.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(createReview.fulfilled,(state,action)=>{
            state.loading = false;

            if("errors" in action.payload){
             
                state.errorMessages = action.payload.errors
            }else{
      
                state.products = state.products.map((p)=>{
                    if(p._id === action.payload._id){
                        p.reviews = action.payload.reviews
                    }
                    return p
                })
                state.success = true
            }
        })

    }
})
export const fetchLatestProducts = createAsyncThunk("products/fetchLatestProducts",async(query?:any)=>{
    return    await productService.fetchLatestProducts(query);
})

export const fetchLatestProductsByAdmin = createAsyncThunk("products/fetchLatestProductsByAdmin",async(query?:any)=>{
    return    await productService.fetchLatestProducts(query);
})

export const addProduct  = createAsyncThunk("products/addProduct",async(data:ProductType,{getState})=>{
    const {auth:{admin}} = getState() as RootState;
    return  await  productService.addProduct(data,admin?.token);
})
export const destroyProduct = createAsyncThunk("products/destoryProduct",async(id:unknown,{getState})=>{
    const {auth:{admin}} = getState() as RootState;
    if(typeof id==="string"){
         return await productService.destroyProduct(id,admin?.token)
    }
})
export const fetchProduct = createAsyncThunk("products/fetchProduct",async(id:string)=>{
    return await productService.fetchProduct(id)
})
export const updateProduct =createAsyncThunk("products/updateProduct",async(data:ProductType,{getState})=>{
    const {auth:{admin}} = getState() as RootState;
    return await productService.updateProduct(data,admin?.token)
})
export const deleteSelectedItems =createAsyncThunk ("brands/deleteSelectedItems",async(data:unknown,{getState})=>{
    const {auth:{admin}} = getState() as RootState;
    if(Array.isArray(data)){
        return productService.selectedProductsDelete(data,admin?.token)
    }
    
})

export const createReview = createAsyncThunk("product/createReivew",async(data:ReviewType,{getState})=>{
    const {auth:{user}} = getState() as RootState;
    return productService.createProductReview(data,user?.token)
})
export const {setChooseColor,setChooseSize,setSelectedCategoryId,setSelectedBrandId,chooseProductSize,chooseProductColor,lastAdded,resetProduct,setLoading,setSelectedProductRows,filteredByCategory,setDisplayItems,filteredByBrand,setCurrentPage,filterBySort,setSearchProduct,searchProductByName} = productSlice.actions
export default productSlice.reducer