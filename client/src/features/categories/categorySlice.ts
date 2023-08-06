import { createAsyncThunk, createSlice ,PayloadAction} from "@reduxjs/toolkit";

import categoryService from "./categoryService";
import { RootState } from "../../app/store";

export type CategoryType = {
    _id?:string,
    name:string
}

type BrandInitType = {
    loading:boolean,
    categories:CategoryType[],
    errorMessages:[],
    success:boolean,
    selectedCategoryRows:CategoryType[]
}

const initialState : BrandInitType = {
    loading:false,
    categories:[],
    errorMessages:[],
    success:false,
    selectedCategoryRows:[]
}

export const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        resetCategory:(state,action:PayloadAction<string>)=>{
            state.loading = false;
            state.categories = state.categories
            state.success = false
            state.errorMessages = []
        },
        setSelectedCategoryRows:(state,action:PayloadAction<any>)=>{
           
            state.selectedCategoryRows = action.payload
        }
    
    
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchLatestCategories.pending,(state)=>{
            state.loading = true;
        
        })
        .addCase(fetchLatestCategories.fulfilled,(state,action)=>{

            state.loading = false
            state.categories = action.payload
        })
        builder.addCase(fetchCategory.pending,(state)=>{
            state.loading = true
          
        })
        builder.addCase(fetchCategory.fulfilled,(state,action:PayloadAction<CategoryType>)=>{
            state.loading  = false
            if(!state.categories.find((b:any)=>b._id === action.payload._id)){
                state.categories =  [...state.categories,action.payload]
            }
        })
        builder.addCase(addCategory.pending,(state)=>{
            state.loading = true
        })
        .addCase(addCategory.fulfilled,(state,action)=>{
            state.loading = false
            if("errors" in action.payload){
                state.errorMessages = action.payload.errors
            }else{
                state.categories = [...state.categories,action.payload]
                state.success = true
            }
        })

        builder.addCase(updateCategory.pending,(state)=>{
            state.loading = false;
        })
        .addCase(updateCategory.fulfilled,(state,action)=>{
            state.loading = true;
            
            if("errors" in action.payload){
                state.errorMessages = action.payload.errors
            }else{
                state.categories = state.categories.map((b)=>{
                    if(b._id === action.payload._id){
                        b.name = action.payload.name
                        return b
                    }
                    return b
            })
                state.success = true
            }
        })

        builder.addCase(deleteCategory.pending,(state)=>{
            state.loading = true;
        })
        .addCase(deleteCategory.fulfilled,(state,action)=>{
            state.loading = false;
            const filterCategory= state.categories.filter((b)=> b._id !== action.payload._id)
            state.categories = filterCategory
            state.success = true

        })

        builder.addCase(deleteSelectedItems.pending,(state)=>{
            state.loading = true
        })
        .addCase(deleteSelectedItems.fulfilled,(state,action)=>{
            state.loading = false;
            const categoryId = new Set(action.payload.map((a:CategoryType)=>a._id))
            state.categories =  state.categories.filter((b)=> !categoryId.has(b._id))
        })   
    }
})

export const addCategory = createAsyncThunk("categories/addCategory",async(data:CategoryType,{getState})=>{
        const {adminAuth:{admin}} = getState() as RootState;
        return await categoryService.addCategory(data,admin?.token)
})
export const fetchLatestCategories = createAsyncThunk("categories/fetchLatestCategories",async(data)=>{

    return await categoryService.fetchLatestCategories()
})
export const fetchCategory = createAsyncThunk("brands/fetchBrand",async(id:string)=>{
    return await categoryService.fetchCategory(id)
})
export const updateCategory = createAsyncThunk("categories/updateCategory",async(data:CategoryType,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    return await categoryService.updateCategory(data,admin?.token)
})
export const deleteCategory= createAsyncThunk("categories/deleteCategory",async(id:unknown,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    if(typeof id==="string"){
        return categoryService.deleteCategory(id,admin?.token)
    }
 
})
export const deleteSelectedItems =createAsyncThunk ("brands/deleteSelectedItems",async(data:unknown)=>{
    if(Array.isArray(data)){
        return categoryService.selectedCategoriesDelete(data)
    }
    
})
export const {resetCategory,setSelectedCategoryRows} = categorySlice.actions;
export default categorySlice.reducer