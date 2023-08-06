import React,{ReactElement, useEffect, useState} from 'react'

import AdminNav from './AdminNav'
import AdminSideMenu from './AdminSideMenu'
import useAdminAuthMiddleware from '../middleware/ProtectedAdminAuthRoutes'
import { Outlet, useNavigate } from 'react-router-dom'
import useAdmin from '../hook/useAdmin'
type ChildrenType = {children?:ReactElement  | ReactElement []}
const AdminLayout = ({children}:ChildrenType) => {
 
  return (
    <section className='m-0  bg-white dark:bg-gray-900 h-screen overflow-hidden'>
        <AdminNav />
        <div  className='h-full flex'>
            <AdminSideMenu />
            <section className='w-[82%] h-[90%] overflow-y-scroll   bg-gray-100 dark:bg-gray-800 w-full   px-7 '>
                    <Outlet />
            </section>
        </div>
       
      
    </section>
  )
}

export default AdminLayout