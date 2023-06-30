import React from 'react'
import { Link } from 'react-router-dom'
const AddBrand = () => {
  return (
    <div className='h-screen'>
        <div className='bg-white p-5 rounded shadow'>
             <div className='flex justify-between items-center  px-4 mb-3'>
                <h3 className='text-xl font-bold'>Add Brand</h3>
                
                <Link to="/admin/brands" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                    <i className="fa-solid fa-list-ul text-xl"></i>
                </Link>
            </div>
            <hr />
            <div className='px-4 w-[90%] mx-auto mt-5'>
                <form action="">
                    <div className='w-full'>
                        <label htmlFor="brandName" className='block mb-2'>Name </label>
                        <input type="text"  id="brandName" placeholder='Enter brand name' className='border border-gray-200 px-3 p-2  w-full focus:outline-amber-200 text-gray-500'/>
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

export default AddBrand