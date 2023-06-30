import React from 'react'
import {Link} from 'react-router-dom'
import Add from '../assets/images/add.jpg'
import BreadCrumb from './BreadCrumb'
const OrderDetails = () => {
  return (
    <section className='mx-5 '>
         <BreadCrumb items={[
              {name:"Home",path:"/"},
              {name:"Orders",path:"/orders"},
              {name:"Order_details",path:"/order_details/1"},
            ]}/>
        <h3 className='text-xl font-boldest mb-4 my-5'>Order Numbers <span className='text-amber-500 font-bold ml-2'>#12132123</span></h3>
        <div className='flex justify-between flex-col md:flex-row'>
            <div className='w-[100%] xl:w-[70%] mr-4'>
                <div className='border broder-gray-200 rounded pb-3 my-2'>
                    <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Items Summary</div>
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">QTY</div>
                                    </th>
                                  
                                    <th className="p-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Price</div>
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Total Price</div>
                                    </th>
                                  
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                                <tr>
                                    <td className="p-3 whitespace-nowrap">
                                        <Link to="/">
                                            <div className="flex items-center">
                                                {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={Add} width="50" height="50" alt="Alex Shatov" /></div> */}
                                                <h3 className=''>adidas X sprotal..</h3>
                                              
                                            </div>
                                        </Link>
                                        
                                    </td>
                                    <td className="p-3 whitespace-nowrap">
                                        <div className="text-left text-xs md:text-sm">2</div>
                                    </td>
                                    <td className="p-3 whitespace-nowrap">
                                        <div className="text-left font-medium text-amber-500 text-xs md:text-sm">KS 20000</div>
                                    </td>
                                    <td className='p-3'>
                                        <div className="text-left font-medium text-amber-500 text-xs md:text-sm">KS 202000</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 whitespace-nowrap">
                                        <Link to="/">
                                            <div className="flex items-center">
                                                {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={Add} width="50" height="50" alt="Alex Shatov" /></div> */}
                                                <h3 className=''>adidas X sprotal..</h3>
                                              
                                            </div>
                                        </Link>
                                        
                                    </td>
                                    <td className="p-3 whitespace-nowrap">
                                        <div className="text-left text-xs md:text-sm">2</div>
                                    </td>
                                    <td className="p-3 whitespace-nowrap">
                                        <div className="text-left font-medium text-amber-500 text-xs md:text-sm">KS 20000</div>
                                    </td>
                                    <td className='p-3'>
                                        <div className="text-left font-medium text-amber-500 text-xs md:text-sm">KS 202000</div>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                <div className='border border-gray-200 rounded mt-3 px-4 py-3 '>
                  <h3 className='text-lg border border-white border-b-gray-200 pb-2'>Customer Details</h3>
                  <div className='flex justify-between text-neutral-700 font-thin mt-3 border border-white border-b-gray-200 pb-3'>
                      <p>Name</p>
                      <p>Aung Kaung Khant</p>
                  </div>
                  <div className='flex justify-between text-neutral-700 font-thin mt-3 border border-white border-b-gray-200 pb-3'>
                      <p>Phone</p>
                      <p>09261804445</p>
                  </div>
                  <div className='flex justify-between text-neutral-700 font-thin mt-3  pb-3'>
                      <p>Email</p>
                      <p>akkgit0909@gmail.com</p>
                  </div>
                </div>
            </div>
           
            <div className='w-[100%] xl:w-[30%] my-2'>
              <div className=' border broder-gray-200 rounded p-3'>
                  <h4 className='text-lg border border-white border-b-gray-200 pb-3'>Order Summary</h4>
                  <div className='mt-4'>
                    <div className='flex justify-between text-neutral-700 font-thin my-2 '>
                      <p>Order Created</p>
                      <p>Sun ,May 7 2023</p>
                    </div>
                    <div className='flex justify-between text-neutral-700 font-thin my-2'>
                      <p>Order Time</p>
                      <p>12:00 AM</p>
                    </div>
                    <div className='flex justify-between text-neutral-700 font-thin my-2'>
                      <p>SubTotal</p>
                      <p>KS 12</p>
                    </div>
                    <div className='flex justify-between text-neutral-700 font-thin my-2'>
                      <p>Delivery Fee</p>
                      <p>KS 12</p>
                    </div>
                  </div>
              </div>
              <div className='border border-gray-200 rounded mt-3 p-3'>
                  <div className='flex justify-between text-neutral-700 font-thin'>
                      <p>Total</p>
                      <p>KS 12</p>
                  </div>
              </div>
              <div className=' border broder-gray-200 rounded p-3 mt-3'>
                  <h4 className='text-lg border border-white border-b-gray-200 pb-3'>Delivery Address</h4>
                  <div className='mt-4'>
                    <div className='flex justify-between text-neutral-700 font-thin my-2 '>
                      <p>Order Created</p>
                      <p>Sun ,May 7 2023</p>
                    </div>
                    <div className='flex justify-between text-neutral-700 font-thin my-2'>
                      <p>Order Time</p>
                      <p>12:00 AM</p>
                    </div>
                    <div className='flex justify-between text-neutral-700 font-thin my-2'>
                      <p>SubTotal</p>
                      <p>KS 12</p>
                    </div>
                    <div className='flex justify-between text-neutral-700 font-thin my-2'>
                      <p>Delivery Fee</p>
                      <p>KS 12</p>
                    </div>
                  </div>
              </div>
            </div>
           
        </div>
    </section>
  )
}

export default OrderDetails