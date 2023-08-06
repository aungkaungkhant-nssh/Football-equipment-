import React, { ReactNode } from 'react'
import useAdmin from '../hook/useAdmin'
import { Navigate } from 'react-router-dom';
type PropsType = {
  children:ReactNode
}
const ProtectedAdminAuthRoutes = ({children}:PropsType) => {
  const {admin} = useAdmin();
  
  return admin ? <>{children}</> : <Navigate  to="/admin/login" />
 
}

export default ProtectedAdminAuthRoutes