import React, { Dispatch, SetStateAction } from 'react'
import { BrandType } from '../features/brands/brandSlice'

interface PropType   {
    selectedRows:any,
    setSelectedRows:Dispatch<SetStateAction<any>>,
    deleteSelected:()=>void
}
const SelectedRowsItemDelete = ({selectedRows,setSelectedRows,deleteSelected}:PropType) => {
  return (
    <div   className='fixed z-[9999999999] top-4 w-[20%] right-[40%] rounded-full  shadow  bg-amber-100  px-5  transition duration-300 '>
        <div className='relative flex justify-between  items-center w-[100%]'>
            <h3 className='text-lg text-amber-500'> 
            {
                `${selectedRows.length} items are selected `
            }
            </h3>
            <button className=' text-white px-3 py-2 rounded text-xl' onClick={deleteSelected}>
                <i className="text-red-500 fa-regular fa-trash-can  text-lg cursor-pointer"></i>
            
            </button>
            <button className='absolute -top-2 -right-5' onClick={setSelectedRows}>
                <i className="fa-solid fa-circle-xmark text-gray-500 text-xl" ></i>
            </button>
        </div>
     </div>
  )
}

export default SelectedRowsItemDelete