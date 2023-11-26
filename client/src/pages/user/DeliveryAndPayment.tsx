import React, { useEffect } from 'react'
import CheckOutState from '../../components/CheckOutState'
import { useNavigate } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'
import useAuth from '../../hook/useAuth'
import {loadStripe} from '@stripe/stripe-js'
import Axios from '../../Axios'
import useCart from '../../hook/useCart'

const DeliveryAndPayment = () => {
  const {carts} = useCart();
  const {user} = useAuth();
  const navigate = useNavigate();


  return (
    <section>
        <div className='px-4'>
            <BreadCrumb items={[
              {name:"Home",path:"/"},
              {name:"Cart",path:"/carts"},
              {name:"Delivery_Payment",path:"/delivery_payment"},
            ]}/>
        </div>
        <div>
            
          <CheckOutState />
          <div className='max-w-screen-lg  md:mx-auto mx-5 flex flex-col md:flex-row justify-center mt-10  border border-gray-200 shadow-inner '>
              {/* shipping and payment */}
              <div className=' w-[100%] lg:w-[60%] rounded   px-5 py-5'>
                <h3 className='text-base font-bold mb-2'>Delivery Information</h3>
                <div className='flex flex-col md:flex-row justify-between mb-3'>
                    <div className='mt-3 w-[100%] md:w-[50%] mr-10'>
                        <label htmlFor="" className='block text-sm text-gray-500 mb-0'>Full Name </label>
                        <input type="text" placeholder='Enter your full name' className='w-full text-sm border border-gray-200 py-2 px-3 rounded mt-2 focus:bg-amber-50 text-gray-500' />
                    </div>
                    <div className='mt-3  w-[100%] md:w-[50%] '>
                        <label htmlFor="" className='block text-sm text-gray-500 mb-0'>Region </label>
                        <input type="text" placeholder='Enter your Region' className='w-full text-sm border border-gray-200 py-2 px-3 rounded mt-2 focus:bg-amber-50 text-gray-500' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between mb-3'>
                    <div className='mt-3 w-[100%] md:w-[50%] mr-10'>
                        <label htmlFor="" className='block text-sm text-gray-500 mb-0'>Phone Number </label>
                        <input type="text" placeholder='Enter your phone number' className='w-full text-sm border border-gray-200 py-2 px-3 rounded mt-2 focus:bg-amber-50 text-gray-500' />
                    </div>
                    <div className='mt-3 w-[100%] md:w-[50%]'>
                        <label htmlFor="" className='block text-sm text-gray-500 mb-0'>City </label>
                        <input type="text" placeholder='Enter your Region' className='w-full text-sm border border-gray-200 py-2 px-3 rounded mt-2 focus:bg-amber-50 text-gray-500' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='mt-3w-[100%] md:w-[50%] mr-10'>
                        <label htmlFor="" className='block text-sm text-gray-500 mb-0'>Town Ship </label>
                        <input type="text" placeholder='Enter your town ship' className='w-full text-sm border border-gray-200 py-2 px-3 rounded mt-2 focus:bg-amber-50 text-gray-500' />
                    </div>
                    <div className='mt-3 w-[100%] md:w-[50%]'>
                        <label htmlFor="" className='block text-sm text-gray-500 mb-0'>Address</label>
                        <input type="text" placeholder='Enter your Address' className='w-full text-sm border border-gray-200 py-2 px-3 rounded mt-2 focus:bg-amber-50 text-gray-500' />
                    </div>
                </div>
                <div className='flex justify-end my-5'>
                    <button className='bg-amber-500 px-4 py-2 rounded text-gray-100 w-[150px] hover:bg-amber-600 transition all duration-300'>Save</button>
                </div>
              
              </div>
              
              <div className=' w-[100%] lg:w-[40%] rounded  px-5 py-5 relative shadow border border-white border-t-gray-200 md:border-t-white'>
                
                <h3 className='my-3 font-bold text-base'>Order Summary</h3>
                <div className='flex  justify-between items-center my-3'> 
                  <h5 className='text-gray-500 font-thin'>Items Total (1 Items)</h5>
                  <h4  className='text-gray-500'>Ks 10000</h4>
                </div>
                <div className='flex  justify-between items-center my-3'> 
                  <h5 className='text-gray-500 font-thin'>Delivery Fee</h5>
                  <h4  className='text-gray-500'>Ks 10000</h4>
                </div>
                <hr />
                <div className='flex  justify-between items-center my-3'> 
                  <h5 className='text-gray-900 font-thin'>Total</h5>
                  <h4  className='text-gray-900'>Ks 10000</h4>
                </div>
                <h3 className='my-5 font-bold text-base'>Payment Details</h3>
                <div className='flex'>
                  <button role='link' className='bg-amber-500' >Payment</button>
                    {/* <div className='flex items-center mr-8'>
                        <input type="radio" name="payment" className='border border-gray-800 focus:ring-red-200 bg-amber-500'/>
                        <label htmlFor="" className='ml-2 block text-gray-800 font-thin'>Cash on Delivery</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="radio" name="payment" className='border border-gray-800 focus:ring-red-200 bg-amber-500'/>
                        <label htmlFor="" className='ml-2 block text-gray-800 font-thin'>Credit Card</label>
                    </div> */}
                </div>
                <button className='bg-gray-300 text-center py-2 px-3  rounded text-white w-full mt-6' onClick={()=>navigate("/order_confirm")}>Order Confirm</button>
              </div>
          </div>
    
        </div>
    </section>

  )
}
// pk_test_51NhulAFtJsNegd4lYEUQFNeR1luPY9kiMXZs0xMkZBWtPYY90w44YFPpv8HQoubyn6Qz3K8qat9AaZ1wnQhOJS0P00H8dEyZOH
// sk_test_51NhulAFtJsNegd4lgMeV7TOY9qmc26rOrgLBbc0pbKta8dSK9G4TLC5N1CxirPXHQwENkCnss2UgTB4wvIBjnlPs00bxZb7Aa0
export default DeliveryAndPayment