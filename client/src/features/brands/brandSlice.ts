import { createAsyncThunk, createSlice ,PayloadAction} from "@reduxjs/toolkit";
import brandService from "./brandService";
import { RootState } from "../../app/store";

export type BrandType = {
    _id?:string,
    name:string,
    logo:string
}

type BrandInitType = {
    loading:boolean,
    brands:BrandType[],
    errorMessages:[],
    success:boolean,
    selectedBrandRows:BrandType[] 
}

const initialState : BrandInitType = {
    loading:false,
    brands:[],
    errorMessages:[],
    success:false,
    selectedBrandRows:[]
}

export const brandSlice = createSlice({
    name:"brands",
    initialState,
    reducers:{
        resetBrand:(state,action:PayloadAction<string>)=>{
            state.loading = false;
            state.brands = state.brands
            state.success = false
            state.errorMessages = []
        },
        setSelectedBrandRows:(state,action:PayloadAction<BrandType[]>)=>{
            
            state.selectedBrandRows = action.payload
        },
        setLoading:(state,action:PayloadAction<boolean>)=>{
            state.loading = action.payload
        }
    
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchLatestBrands.pending,(state)=>{
            state.loading = true;
        
        })
        .addCase(fetchLatestBrands.fulfilled,(state,action)=>{

            state.loading = false
            state.brands = action.payload
        })
        builder.addCase(fetchBrand.pending,(state)=>{
            state.loading = true
          
        })
        builder.addCase(fetchBrand.fulfilled,(state,action:PayloadAction<BrandType>)=>{
            state.loading  = false
            if(!state.brands.find((b:any)=>b._id === action.payload._id)){
                state.brands =  [...state.brands,action.payload]
            }
        })
        builder.addCase(addBrand.pending,(state)=>{
            state.loading = true
        })
        .addCase(addBrand.fulfilled,(state,action)=>{
            state.loading = false
            if("errors" in action.payload){
                state.errorMessages = action.payload.errors
            }else{
                state.brands = [...state.brands,action.payload]
                
                state.success = true
            }
        })

        builder.addCase(updateBrand.pending,(state)=>{
            state.loading = true;
        })
        .addCase(updateBrand.fulfilled,(state,action)=>{
            state.loading = false;
            if("errors" in action.payload){
                state.errorMessages = action.payload.errors
            }else{
                state.brands = state.brands.map((b)=>{
                    if(b._id === action.payload._id){
                        b = action.payload
                    }
                    return b
                })
                state.success = true
            }
        })

        builder.addCase(deleteBrand.pending,(state)=>{
            state.loading = true;
        })
        .addCase(deleteBrand.fulfilled,(state,action)=>{
            state.loading = false;
            const filterBrand= state.brands.filter((b)=> b._id !== action.payload._id)
            state.brands = filterBrand
            state.success = true
        
        })

        builder.addCase(deleteSelectedItems.pending,(state)=>{
            state.loading = true
        })
        .addCase(deleteSelectedItems.fulfilled,(state,action)=>{
            state.loading = false;
            const brandsId = new Set(action.payload.map((a:BrandType)=>a._id))
            state.brands =  state.brands.filter((b)=> !brandsId.has(b._id))
        })        
    }
})

export const addBrand = createAsyncThunk("brands/addBrand",async(data:BrandType,{getState})=>{
        const  {adminAuth:{admin}} = getState() as RootState;
        return await brandService.addBrand(data,admin?.token)
})
export const fetchLatestBrands = createAsyncThunk("brands/fetchLatestBrands",async(data,{getState})=>{
 
    return await brandService.fetchLatestBrands()
})
export const fetchBrand = createAsyncThunk("brands/fetchBrand",async(id:string)=>{
    return await brandService.fetchBrand(id)
})
export const updateBrand = createAsyncThunk("brands/updateBrand",async(data:BrandType,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    return brandService.updateBrand(data,admin?.token)
})
export const deleteBrand= createAsyncThunk("brands/deleteBrand",async(id:unknown,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    if(typeof id==="string"){
        return brandService.deleteBrand(id,admin?.token)
    }
 
})
export const deleteSelectedItems =createAsyncThunk ("brands/deleteSelectedItems",async(data:unknown,{getState})=>{
    const {adminAuth:{admin}} = getState() as RootState;
    if(Array.isArray(data)){
        return brandService.selectedBrandsDelete(data,admin?.token)
    }
    
})
export const {resetBrand,setSelectedBrandRows,setLoading} = brandSlice.actions;
export default brandSlice.reducer