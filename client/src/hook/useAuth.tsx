import React from "react";
import { useAppSelector } from '../app/hook'

const useAuth = () => {
  return   useAppSelector((state)=>state.auth)

}

export default useAuth