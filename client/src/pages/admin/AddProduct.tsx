import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
   
     
  return (
    <div>
        <div className='bg-white p-5 pb-8 rounded shadow'>
             <div className='flex justify-between items-center  px-4 mb-5'>
                <h3 className='text-xl font-bold'>Add Product</h3>
                
                <Link to="/admin/products" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                    <i className="fa-solid fa-list-ul text-xl"></i>
                </Link>
            </div>
            <hr />
            <div className='px-4 w-[90%] mx-auto mt-5'>
                <form action="">
                    <div className='w-full my-6'>
                        <label htmlFor="brandName" className='block text-lg mb-3'>Name </label>
                        <input type="text"  id="brandName" placeholder='Enter product name' className='border border-gray-200 px-3 py-4 text-lg  w-full focus:outline-amber-200 text-gray-500'/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Cover Photo</label>
                        <input type="file"   className='border border-gray-200   w-full focus:outline-amber-200 text-gray-500 px-3 py-4 text-lg'/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Photos</label>
                        <input type="file"   className='border border-gray-200   w-full focus:outline-amber-200 text-gray-500 px-3 py-4 text-lg' />
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Price</label>
                        <input type="text" className='border border-gray-200  w-full focus:outline-amber-200 text-gray-500 px-3 py-4 text-lg' />
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Description</label>
                        <textarea name="" id="" className='border border-gray-200  w-full focus:outline-amber-200 text-gray-500 px-3 py-4 text-lg'></textarea>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Brand</label>
                        <select name="" id="" className='border border-gray-200  w-full focus:outline-amber-200 text-gray-500 px-3 py-4 text-lg'>
                            <option value="">Adidas</option>
                            <option value="">Nike</option>
                        </select>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-3'>Category</label>
                        <select name="" id="" className='border border-gray-200  w-full focus:outline-amber-200 text-gray-500 px-3 py-4 text-lg'>
                            <option value="">Boot</option>
                            <option value="">Shirt</option>
                        </select>
                    </div>
                    <div className='w-full my-6'>   
                        <label htmlFor="" className='block text-lg mb-4'>Color</label>   
                        <div className='flex gap-5'>
                            <div  className='w-[40px] h-[40px] bg-red-500 rounded'></div>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded'></div>
                        </div> 
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="" className='block text-lg mb-4'>Size</label>
                        <div className='flex gap-4'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" className='w-5 h-5'/> <label htmlFor="" className='text-lg'>S</label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" className='w-5 h-5'/> <label htmlFor="" className='text-lg'>XS</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className='w-[100%] mt-5'>
                        <button className='mt-3 bg-amber-100 text-amber-500 px-5 rounded-md py-4 shadow-lg hover:bg-amber-500 hover:text-white transition all duration-300 w-full'>
                            <i className="fa-solid fa-circle-plus mr-3 text-xl" ></i>
                            <span className='text-xl'>Add</span>
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProduct