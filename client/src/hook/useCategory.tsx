import React from 'react'
import { useAppSelector } from '../app/hook'

const useCategory = () => {
 return  useAppSelector((state)=>state.category)
 
}

export default useCategory