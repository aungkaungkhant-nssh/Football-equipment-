import React,{ReactElement, useEffect, useState} from 'react'

import AdminNav from './AdminNav'
import AdminSideMenu from './AdminSideMenu'
type ChildrenType = {children?:ReactElement  | ReactElement []}
const AdminLayout = ({children}:ChildrenType) => {

  return (
    <section className=' m-0  bg-white dark:bg-gray-900 h-screen overflow-hidden'>
        <AdminNav />
        <div  className='h-full flex'>
            <AdminSideMenu />
            <section className='w-[82%] h-[88%] overflow-y-scroll   bg-gray-100 dark:bg-gray-800 w-full h-full py-10 px-7 overflow-y-scroll'>
                    {children}
            </section>
        </div>
       
      
    </section>
  )
}

export default AdminLayout