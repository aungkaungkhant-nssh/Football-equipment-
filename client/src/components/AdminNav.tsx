import React from 'react'

import { useAppDispatch, useAppSelector } from '../app/hook'
import useDarkSide from '../hook/useDarkSide'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { setTheme } from '../features/ui/uiSlice'
import { useLocation,useNavigate } from 'react-router-dom'

const AdminNav = () => {
    const [colorTheme] =  useDarkSide()
    const dispatch:AppDispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate();
    const toggleDarkMode = ()=> dispatch(setTheme(colorTheme))
  return (
    <nav className='bg-white shadow-md w-full   dark:bg-gray-900 dark:border-gray-900 sticky top-0 right-0 left-0 z-50 '>
        <div className='flex justify-between border-b-gray-400 border border-transparent py-5 px-5'>
            <h3 className='text-2xl text-neutral-900 font-bold dark:text-gray-100 '>
                <i className="fa-brands font-bold fa-slack mr-4 text-neutral-900 dark:text-gray-100"></i>
                <span>Bounce & Back</span>
            </h3>
            <div className='flex justify-between    '>
                    <button className='text-xl text-neutral-900 dark:text-gray-100 font-bold ' onClick={()=>navigate(-1)}>{(location.pathname.includes("add") || location.pathname.includes("edit") )&& <i className="fa-solid fa-arrow-left"></i>}</button>
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