import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Add from '../../assets/images/add.jpg'
import BreadCrumb from './BreadCrumb'
const Order = () => {
  const navigate = useNavigate();
  return (
    <section className='mx-2 md:mx-5 '>
            <BreadCrumb items={[
              {name:"Home",path:"/"},
              {name:"Orders",path:"/orders"},
            ]}/>
           <table className="table-auto w-full my-5">
                        <thead className="w-full text-xs font-semibold uppercase text-gray-900 bg-gray-100 rounded">
                            <tr>
                                <th className="p-4 whitespace-nowrap">
                                    <div className="font-semibold text-center">Order Id</div>
                                </th>
                                <th className="p-4 whitespace-nowrap hidden md:block">
                                    <div className="font-semibold text-center">Products</div>
                                </th>
                               
                                <th className="p-4 whitespace-nowrap">
                                    <div className="font-semibold text-center">Status</div>
                                </th>
                                <th className="p-4 whitespace-nowrap">
                                    <div className="font-semibold text-center">Total Price</div>
                                </th>
                                <th className="p-4 whitespace-nowrap">
                                    <div className="font-semibold text-center">Details</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-3 whitespace-nowrap font-bold text-center">
                                  <span >#1213123123</span>
                                    
                                </td>
                                <td className='p-3 hidden md:block'>  
                                  <div className="flex justify-center">
                                      <img src={Add} alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                      <img src={Add} alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                   
                                      <div  className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4 bg-amber-500 flex justify-center items-center">
                                        <p className='text-gray-100'>+2</p>
                                      </div>
                                  </div>
                                </td>
                                <td className='p-3 text-center'>
                                  <span className="bg-amber-200 text-amber-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className='p-3 text-center'>
                                    <span className='text-amber-500 font-medium text-sm'>KS 200000</span>
                                </td>
                                <td className='p-3 text-center'>
                                    <span className='text-amber-500 font-medium text-base cursor-pointer'><i className="fa-regular fa-eye"></i></span>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 whitespace-nowrap font-bold text-center">
                                  <span >#1213123123</span>
                                    
                                </td>
                                <td className='p-3 hidden md:block'>  
                                  <div className="flex justify-center">
                                      <img src={Add} alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                      <img src={Add} alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                   
                                      <div  className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4 bg-amber-500 flex justify-center items-center">
                                        <p className='text-gray-100'>+2</p>
                                      </div>
                                  </div>
                                </td>
                                <td className='p-3 text-center'>
                                  <span className="bg-amber-200 text-amber-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className='p-3 text-center'>
                                    <span className='text-amber-500 font-medium text-sm'>KS 200000</span>
                                </td>
                                <td className='p-3 text-center'>
                                    <span className='text-amber-500 font-medium text-base cursor-pointer'><i className="fa-regular fa-eye"></i></span>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 whitespace-nowrap font-bold text-center">
                                  <span >#1213123123</span>
                                    
                                </td>
                                <td className='p-3 hidden md:block'>  
                                  <div className="flex justify-center">
                                      <img src={Add} alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                      <img src={Add} alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                   
                                      <div  className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4 bg-amber-500 flex justify-center items-center">
                                        <p className='text-gray-100'>+2</p>
                                      </div>
                                  </div>
                                </td>
                                <td className='p-3 text-center'>
                                  <span className="bg-amber-200 text-amber-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className='p-3 text-center'>
                                    <span className='text-amber-500 font-medium text-sm'>KS 200000</span>
                                </td>
                                <td className='p-3 text-center'>
                                    <span className='text-amber-500 font-medium text-base cursor-pointer'><i className="fa-regular fa-eye"></i></span>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 whitespace-nowrap font-bold text-center">
                                  <span >#1213123123</span>
                                    
                                </td>
                                <td className='p-3 hidden md:block'>  
                                  <div className="flex justify-center">
                                      <img src={Add} alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                      <img src={Add} alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                   
                                      <div  className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4 bg-amber-500 flex justify-center items-center">
                                        <p className='text-gray-100'>+2</p>
                                      </div>
                                  </div>
                                </td>
                                <td className='p-3 text-center'>
                                  <span className="bg-amber-200 text-amber-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className='p-3 text-center'>
                                    <span className='text-amber-500 font-medium text-sm'>KS 200000</span>
                                </td>
                                <td className='p-3 text-center'>
                                    <span className='text-amber-500 font-medium text-base cursor-pointer' onClick={()=>navigate('/order_details/1')}><i className="fa-regular fa-eye"></i></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
    </section>
  )
}

export default Order