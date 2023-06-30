import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <section  className='my-4 px-4 max-w-screen-md mx-auto'>
    <div className='bg-white shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] px-8 py-8 rounded'>
      <div className='text-center  border border-white border-b-gray-200 pb-5'>
        <h3 className='uppercase text-3xl font-thin'>Create Account</h3>
      </div>
      <div className='flex justify-between mt-8 md:items-center flex-col md:flex-row '>
          <div className='basis-full md:basis-1/2 mb-4 md:mb-0 mr-0 md:mr-5'>
              <label htmlFor="" className='block mb-2 font-thin'>First Name *</label>
              <input type="text" placeholder='Enter your first Name' className='w-[100%]  border border-gray-400 rounded-full px-4 py-2 text-sm' />
          </div>
          <div className='basis-full md:basis-1/2'>
              <label htmlFor="" className='block mb-2 font-thin'>Last Name *</label>
              <input type="text" placeholder='Enter your last name'   className='w-[100%]  border border-gray-400 rounded-full px-4 py-2 text-sm'/>
          </div>
      </div>
      <div className='flex justify-between mt-8 md:items-center flex-col md:flex-row '>
          <div className='basis-full md:basis-1/2 mb-4 md:mb-0 mr-0 md:mr-5'>
              <label htmlFor="" className='block mb-2 font-thin'>Email *</label>
              <input type="text" placeholder='Enter your email' className='w-[100%]  border border-gray-400 rounded-full px-4 py-2 text-sm' />
          </div>
          <div className='basis-full md:basis-1/2'>
              <label htmlFor="" className='block mb-2 font-thin'>Telephone *</label>
              <input type="text" placeholder='Enter your telephone'   className='w-[100%]  border border-gray-400 rounded-full px-4 py-2 text-sm'/>
          </div>
      </div>
      <div className='flex justify-between mt-8 md:items-center flex-col md:flex-row '>
          <div className='basis-full md:basis-1/2 mb-4 md:mb-0 mr-0 md:mr-5'>
              <label htmlFor="" className='block mb-2 font-thin'>Password *</label>
              <input type="text" placeholder='Enter your password' className='w-[100%]  border border-gray-400 rounded-full px-4 py-2 text-sm' />
          </div>
          <div className='basis-full md:basis-1/2'>
              <label htmlFor="" className='block mb-2 font-thin'>Confirm password *</label>
              <input type="text" placeholder='Confirm your password'   className='w-[100%]  border border-gray-400 rounded-full px-4 py-2 text-sm'/>
          </div>
      </div>
      <div className='my-4'>
          <Link to="" className='text-sm text-neutral-400 hover:text-amber-500 font-thin transition all  duration-300'>Forgot Password ?</Link>
      </div>
      <div className='flex flex-col justify-between md:items-center'>
        <button className='bg-amber-500 text-sm text-gray-100 rounded w-[100%] md:w-[60%] rounded-full py-2 hover:bg-amber-600 transition all duration-300 uppercase'>Create Account</button>
     
    
        <h4 className='font-bold my-5 text-center'>Already have an account?</h4>
        <Link to="/login" className='text-sm bg-amber-500 text-gray-100 rounded w-[100%] md:w-[60%]  rounded-full py-2 hover:bg-amber-600 transition all duration-300 uppercase text-center'>Sign in</Link>
      </div>
    </div>
  
  </section>
  )
}

export default Register