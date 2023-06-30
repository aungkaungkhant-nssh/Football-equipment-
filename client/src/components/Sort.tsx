import React, { ReactElement } from 'react'

type propsType  = {
    isSortOpen:boolean,
    setIsSortOpen:(isSortOpen:boolean)=>void
}

const Sort = ({isSortOpen,setIsSortOpen}:propsType):ReactElement => {
  return (
    <div className='relative block lg:hidden  '>
        <div className={`drawer   fixed top-0 right-0 w-screen  h-screen z-50 transform  ease-in-out transition-all duration-300 ${isSortOpen ? 'translate-x-0' : 'translate-x-[1000px]'} bg-gray-100`}>
            <div className='bg-white px-6 py-4 flex items-center justify-between'>
              <h3 className='text-2xl'>Sort</h3>
              <button onClick={()=>setIsSortOpen(!isSortOpen)}>
                <i className="fa-solid fa-xmark text-3xl text-gray-500"></i>
              </button>
            </div>
            <div className='px-6 py-4'>
                <div className='mb-3 border border-transparent border-b-gray-300 py-5'>
                  <p className='font-bolder'>New Arrivals</p>
                </div>
              
                <div className='mb-3 border border-transparent border-b-gray-300 py-5'>
                  <p className='font-bolder'>Price High To Low</p>
                </div>
                <div className='mb-3 border border-transparent border-b-gray-300 py-5'>
                  <p className='font-bolder'>Price Low To High</p>
                </div>
                <div className='mb-3 border border-transparent border-b-gray-300 py-5'>
                  <p className='font-bolder'>Discount</p>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Sort