import React from 'react'
import { useAppSelector } from '../app/hook'

const useOrder = () => {
  return   useAppSelector((state)=>state.order)

}

export default useOrder