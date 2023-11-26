import React, { ReactNode } from 'react'
import useAuth from '../hook/useAuth'
import { Navigate } from 'react-router-dom';
type PropsType = {
  children:ReactNode
}
const ProtectedUserAuthRoutes = ({children}:PropsType) => {
  const {user} = useAuth();
  
  return user ? <>{children}</> : <Navigate  to="/login" />
 
}


export default ProtectedUserAuthRoutes