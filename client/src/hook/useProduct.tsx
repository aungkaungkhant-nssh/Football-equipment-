import React from 'react'
import { useAppSelector } from '../app/hook'
const useProduct = () => {
    return   useAppSelector((state)=>state.product)
}

export default useProduct