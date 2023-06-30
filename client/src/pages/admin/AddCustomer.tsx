import React from 'react'
import {Link} from 'react-router-dom'
const AddCustomer = () => {
  return (
    <div>
        <div className='bg-white p-5 pb-8 rounded shadow'>
            <div className='flex justify-between items-center  px-4 mb-5'>
                <h3 className='text-xl font-bold'>Add Customer</h3>
                
                <Link to="/admin/customers" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                    <i className="fa-solid fa-list-ul text-xl"></i>
                </Link>
            </div>
            <hr /> 
            <div className='px-4 w-[90%] mx-auto mt-5'>
                <form action="">
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Name </label>
                        <input type="text"  id="name" placeholder='Enter customer name' className='border border-gray-200 px-3 py-4 text-lg  w-full focus:outline-amber-200 text-gray-500'/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Email </label>
                        <input type="email"  id="name" placeholder='Enter customer email' className='border border-gray-200 px-3 py-4 text-lg  w-full focus:outline-amber-200 text-gray-500'/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Phone </label>
                        <input type="text"  id="name" placeholder='Enter customer phone' className='border border-gray-200 px-3 py-4 text-lg  w-full focus:outline-amber-200 text-gray-500'/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Password</label>
                        <input type="text"  id="name" placeholder='Enter customer password' className='border border-gray-200 px-3 py-4 text-lg  w-full focus:outline-amber-200 text-gray-500'/>
                    </div>
                    <div className='w-full my-6'>
                        <label htmlFor="name" className='block text-lg mb-3'>Confirm Password </label>
                        <input type="text"  id="name" placeholder='Confirm Password' className='border border-gray-200 px-3 py-4 text-lg  w-full focus:outline-amber-200 text-gray-500'/>
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

export default AddCustomer