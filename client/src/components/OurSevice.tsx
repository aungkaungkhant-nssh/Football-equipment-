import React from 'react'
import { thousandSeparator } from '../helper/format'

const OurSevice = () => {
  return (
    <div className='my-5 mb-14'>
        <div className='md:w-10/12 md:mx-auto px-4'>
            <div className='flex justify-between flex-wrap'>
                <div className='cursor-pointer w-full md:w-60 my-3 text-center py-2  rounded shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] hover:shadow-[2px_2px_5px_0px_rgba(0,0,0,0.75)]  bg-gray-50 mr-3'>
                    <i className="fa-solid fa-truck-fast text-amber-500 text-4xl my-2"></i>
                    <h3 className='text-salate-700 uppercase text-lg my-1'>FREE DELIVERY</h3>
                    <p className='text-neutral-500 text-base mt-1'>Over {thousandSeparator(500000)} Ks</p>
                </div>
                <div className='cursor-pointer w-full md:w-60 my-3  text-center  py-2 rounded  shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] hover:shadow-[2px_2px_5px_0px_rgba(0,0,0,0.75)] bg-gray-50 mr-3'>
                    <i className="fa-solid fa-user-astronaut text-amber-500 text-4xl my-2"></i>
                    <h3 className='text-salate-700 uppercase text-lg my-1'>online support</h3>
                    <p className='text-neutral-500 text-base mt-1'>Fast response</p>
                </div>
                <div className='w-full md:w-60 my-3  cursor-pointer  text-center  py-2 rounded  shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] hover:shadow-[2px_2px_5px_0px_rgba(0,0,0,0.75)] bg-gray-50 mr-3' >
                    <i className="fa-solid fa-cubes-stacked text-amber-500 text-4xl my-2"></i>
                    <h3 className='text-salate-700 uppercase text-lg my-1'>best quality</h3>
                    <p className='text-neutral-500 text-base mt-1'>Insurance</p>
                </div>
                <div className='w-full my-3 md:w-60  text-center cursor-pointer  py-2 rounded  shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] hover:shadow-[2px_2px_5px_0px_rgba(0,0,0,0.75)] bg-gray-50 mr-3'>
                    <i className="fa-regular fa-credit-card  text-amber-500 text-4xl my-2"></i>
                    <h3 className='text-salate-700 uppercase text-lg my-1'>secure payment</h3>
                    <p  className='text-neutral-500 textbasem mt-1'>Easy and secure transactions</p>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default OurSevice