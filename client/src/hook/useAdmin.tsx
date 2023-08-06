import React from "react";
import { useAppSelector } from '../app/hook'

const useAdmin = () => {
  return   useAppSelector((state)=>state.adminAuth)

}

export default useAdmin