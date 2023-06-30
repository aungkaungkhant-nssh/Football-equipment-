import React, { useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../app/hook'
import { toggleMode } from '../features/ui/uiSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'

const useDarkSide = () => {

  const {theme} = useAppSelector((state)=>state.ui)

  const colorTheme = theme === "dark"  ? "light" : "dark"
  const dispatch: AppDispatch = useDispatch()
  useEffect(()=>{
        dispatch(toggleMode(colorTheme))
  },[theme,colorTheme])
  return [colorTheme]
}

export default useDarkSide