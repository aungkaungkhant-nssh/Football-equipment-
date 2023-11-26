import React from 'react'

import { useAppDispatch, useAppSelector } from '../app/hook'
import useDarkSide from '../hook/useUi'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { setTheme } from '../features/ui/uiSlice'
import { useLocation,useNavigate } from 'react-router-dom'
import useUi from '../hook/useUi'

const AdminNav = () => {
    const {colorTheme} =  useUi()
    const dispatch:AppDispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate();
    const toggleDarkMode = ()=> dispatch(setTheme(colorTheme))
  return (
    <nav className='bg-white shadow-sm w-full   dark:bg-gray-900 dark:border-gray-900 sticky top-0 right-0 left-0 z-50 '>
        <div className='flex justify-between  border border-transparent py-5 px-5'>
            <h3 className='text-2xl text-amber-500 font-bold dark:text-gray-100  w-[19%] '>
                <i className="fa-brands font-bold fa-slack mr-4 text-amber-500 dark:text-gray-100 animate-spin"></i>
                <span>Bounce & Back</span>
            </h3>
            <div className={`flex ${location.pathname.includes("add") ||  location.pathname.includes("edit") ? 'justify-between' : "justify-end"}   w-[81%]`}>
                    {
                        (location.pathname.includes("add") ||  location.pathname.includes("edit")) && (
                            <button className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300' onClick={()=>navigate(-1)}>{(location.pathname.includes("add") || location.pathname.includes("edit") )&& <i className="fa-solid fa-arrow-left"></i>}</button>
                        )   
                    }
                  
                    <div className='flex items-center'>
                        <button className='mr-3 border border-amber-500 text-amber-500 rounded-full w-[35px] h-[35px] hover:bg-amber-500 hover:text-gray-100 duration-300 transiton' onClick={toggleDarkMode}><i className={`${colorTheme!=="dark" ? 'fa-solid fa-sun': 'fa-solid fa-moon'}`}></i></button>
                        <span className='text-xs mr-3 text-gray-500 dark:text-gray-100'>Aung Kaung Khant</span>
                        <div className='flex items-center'>
                            <img src="https://avatars.githubusercontent.com/u/76769501?v=4" alt="" className='w-[40px] rounded-full cursor-pointer' />
                        </div>
                    </div>
            </div>
        </div>
    </nav>
  )
}

export default AdminNav