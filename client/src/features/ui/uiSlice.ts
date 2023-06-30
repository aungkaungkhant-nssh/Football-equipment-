import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";


interface uiState {
    theme: string 
}

const initialState :uiState = {
    theme:localStorage.theme
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
        }
    }
  })

export const {toggleMode,setTheme} = uiSlice.actions;
export default uiSlice.reducer