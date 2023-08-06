import React from 'react'
import { useLocation } from 'react-router-dom'
const CheckOutState = () => {
    const location = useLocation();
  return (
    <div className='flex  py-5  w-screen justify-center items-center'>
        <div className='text-center w-[20%]'>
            <div className='flex items-center'>
                <div className='border border-gray-400 w-[100%] ' />
                <div className='rounded-full bg-gray-100 flex items-center justify-center  p-2 md:p-4'>
                        <h3 className='text-sm md:text-lg tracking-widest font-bold'>01</h3>
                </div>
                <div className='border border-gray-400 w-[100%] ' />   
            </div>
            <h3 className='text-base text-neutral-500 font-thin mt-2 text-xs'>Welcome</h3>
            
        </div>
        <div className='text-center  w-[30%]'>
            <div className='flex items-center'>
                <div className='border border-gray-400 w-[100%] ' />
                <div className={`rounded-full ${location.pathname === "/delivery_payment" ? "bg-amber-500 text-gray-100" : "bg-gray-100 text-gray-900"}  border border-amber-100 shadow-inner p-2 flex items-center justify-center p-2 md:p-4`}>
                        <h3 className='text-sm md:text-lg tracking-widest font-bold'>02</h3>
                </div>
                <div className='border border-gray-400 w-[100%] ' />   
            </div>
            <h3 className='text-base text-neutral-500 font-thin  text-xs mt-2'>Delivery & Payment</h3>
            
        </div>
        <div className='text-center  w-[30%]'>
            <div className='flex items-center'>
                <div className='border border-gray-400 w-full' />
                <div className={`rounded-full ${location.pathname === "/order_confirm" ? "bg-amber-500 text-gray-100" : "bg-gray-100 text-gray-900"}  border border-amber-100 shadow-inner p-2 flex items-center justify-center p-2 md:p-4`}>
                        <h3 className='text-sm md:text-lg tracking-widest font-bold'>03</h3>
                </div>
                <div className='border border-gray-400 w-full' />   
            </div>
            <h3 className='text-base text-neutral-500 font-thin mt-2 text-xs'>Order Confirmation</h3>
            
        </div>
        <div className='text-center  w-[20%]'>
            <div className='flex items-center'>
                <div className='border border-gray-400 w-full' />
                <div className={`rounded-full ${location.pathname === "/order_complete" ? "bg-amber-500 text-gray-100" : "bg-gray-100 text-gray-900"}  border border-amber-100 shadow-inner p-2 flex items-center justify-center p-2 md:p-4`}>
                        <h3 className='text-sm md:text-lg tracking-widest font-bold'>04</h3>
                </div>
                <div className='border border-gray-400 w-full' />   
            </div>
            <h3 className='text-base text-neutral-500 font-thin mt-2 text-xs'>Complete</h3>
            
        </div>
     
        
      
    </div>
  )
}

export default CheckOutState