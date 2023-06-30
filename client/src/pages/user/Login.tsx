import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section  className='my-4 px-4 max-w-screen-md mx-auto'>
      <div className='bg-white shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] px-8 py-8 rounded'>
        <div className='text-center  border border-white border-b-gray-200 pb-5'>
          <h3 className='uppercase text-3xl font-thin'>Account Login</h3>
        </div>
        <div className='flex justify-between mt-8 md:items-center flex-col md:flex-row '>
            <div className='basis-full md:basis-1/2 mb-4 md:mb-0 mr-0 md:mr-5'>
                <label htmlFor="" className='block mb-2 font-thin'>Email *</label>
                <input type="text" placeholder='Enter your email' className='w-[100%]  border border-gray-400 rounded-full px-4 py-2 text-sm' />
            </div>
            <div className='basis-full md:basis-1/2'>
                <label htmlFor="" className='block mb-2 font-thin'>Password *</label>
                <input type="text" placeholder='Enter your password'   className='w-[100%]  border border-gray-400 rounded-full px-4 py-2 text-sm'/>
            </div>
        </div>
        <div className='my-4'>
            <Link to="" className='text-sm text-neutral-400 hover:text-amber-500 font-thin transition all  duration-300'>Forgot Password ?</Link>
        </div>
        <div className='flex flex-col justify-between md:items-center'>
          <button className='bg-amber-500 text-sm text-gray-100 rounded w-[100%] md:w-[60%] rounded-full py-2 hover:bg-amber-600 transition all duration-300'>Sign in</button>
          <h6 className='my-5 text-center'>or</h6>
          <button className='bg-sky-700 text-gray-100 rounded w-[100%] md:w-[60%]  rounded-full py-2 hover:bg-sky-600 transition all duration-300'>
            <i className="fa-brands fa-facebook mr-3"></i>
            <span className='text-sm'>Login With FaceBook</span>
          </button>
          <button className='border-gray-500 border rounded-full w-[100%] md:w-[60%]  mt-4 py-2 hover:bg-gray-100 transition all duration-500'>
            <i className="fa-brands fa-google mr-3 text-sm"></i>
            <span className='text-sm'>Login With Google</span>
          </button>
          <h4 className='font-bold my-5 text-center'>Do you want new account?</h4>
          <Link to ="/register" className='text-sm bg-amber-500 text-gray-100 rounded w-[100%] md:w-[60%]  rounded-full py-2 hover:bg-amber-600 transition all duration-300 uppercase text-center'>Create a new account</Link>
        </div>
      </div>
    
    </section>
  )
}

export default Login