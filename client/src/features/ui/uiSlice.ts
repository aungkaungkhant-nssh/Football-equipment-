import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";


interface uiState {
    theme: string ,
    mobileSideNav:boolean,
    sortSideNav:boolean,
    refineSideNav:boolean,
}

const initialState :uiState = {
    theme:localStorage.theme,
    mobileSideNav:false,
    sortSideNav:false,
    refineSideNav:false
}

export const uiSlice = createSlice({
    name: 'ui',
   
    initialState,
    reducers:{
        toggleMode:(state,action:PayloadAction<string>)=>{
            const root = window.document.documentElement;
            root.classList.remove(action.payload)
            root.classList.add(state.theme)

            localStorage.setItem("theme",state.theme)
        },
        setTheme:(state,action:PayloadAction<string | any>)=>{
            state.theme = action.payload
        },
        setMobileSideNav:(state,action:PayloadAction<string>)=>{
            state.mobileSideNav = !state.mobileSideNav
        },
        setSortSideNav:(state,action:PayloadAction<string>)=>{
            state.sortSideNav = !state.sortSideNav
        },
        setRefineSideNav:(state,action)=>{
            state.refineSideNav = !state.refineSideNav
        }
    }
  })

export const {toggleMode,setTheme,setMobileSideNav,setSortSideNav,setRefineSideNav} = uiSlice.actions;
export default uiSlice.reducer