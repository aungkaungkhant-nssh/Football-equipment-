import React from 'react'
import { useAppSelector } from '../app/hook'

const useBrand = () => {
  return   useAppSelector((state)=>state.brand)

}

export default useBrand