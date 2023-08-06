import React from 'react'
import { useAppSelector } from '../app/hook'

const useCustomer = () => {
  return   useAppSelector((state)=>state.customer)

}

export default useCustomer