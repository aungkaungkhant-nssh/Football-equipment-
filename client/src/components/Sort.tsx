import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { filterBySort } from '../features/products/productSlice'
import { setSortSideNav } from '../features/ui/uiSlice'

type propsType  = {
    isSortOpen:boolean
}

const Sort = ({isSortOpen}:propsType):ReactElement => {
  const dispatch:AppDispatch = useDispatch();

  const handleSortProduct = (sortType:string)=>{
    dispatch(setSortSideNav(""))
    dispatch(filterBySort(sortType))
  }
  return (
    <div className='relative block lg:hidden  '>
        <div className={`drawer   fixed top-0 right-0 w-screen  h-screen z-50 transform  ease-in-out transition-all duration-300 ${isSortOpen ? 'translate-x-0' : 'translate-x-[1000px]'} bg-gray-100`}>
            <div className='bg-white px-6 py-4 flex items-center justify-between'>
              <h3 className='text-2xl'>Sort</h3>
              <button onClick={()=>dispatch(setSortSideNav(""))}>
                <i className="fa-solid fa-xmark text-3xl text-gray-500"></i>
              </button>
            </div>
            <div className='px-6 py-4'>
                <div className='mb-3 border border-transparent border-b-gray-300 py-5' onClick={()=>handleSortProduct("new_arrivals")}>
                  <p className='font-bolder'>New Arrivals</p>
                </div>
              
                <div className='mb-3 border border-transparent border-b-gray-300 py-5' onClick={()=>handleSortProduct("price_high_To_low")}>
                  <p className='font-bolder'>Price High To Low</p>
                </div>
                <div className='mb-3 border border-transparent border-b-gray-300 py-5' onClick={()=>handleSortProduct("price_low_To_high")}>
                  <p className='font-bolder'>Price Low To High</p>
                </div>
                <div className='mb-3 border border-transparent border-b-gray-300 py-5' onClick={()=>handleSortProduct("discount")}>
                  <p className='font-bolder'>Discount</p>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Sort