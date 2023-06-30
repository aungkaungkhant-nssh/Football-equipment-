import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Add from '../../assets/images/add.jpg'
import Add2 from '../../assets/images/add2.jpg'
const Products = () => {
    const [active,setActive] = useState(1)
  return (
    <div className='h-screen'>
        <div className='bg-white p-5 rounded shadow'>
            <div className='flex justify-between items-center mb-3 px-4'>
                <h3 className='text-xl font-bold'>Product Lists</h3>
                <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                  <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                  <input type="text" placeholder='Search...'  className='focus:outline-none' />
                </div>
                <Link to="/admin/addProduct" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                  <i className="fa-solid fa-circle-plus text-2xl"></i>
                </Link>
            </div>
            <hr />
            <div className='mt-5 px-4'>
                <table className="table-auto w-full">
                    <thead className="text-base font-semibold uppercase text-gray-400 bg-gray-100 w-full">
                        <tr className='w-full'>
                            <th className="p-3 whitespace-nowrap">
                                <div className="font-semibold text-left w-[10%]">Name</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                                <div className="font-semibold text-left w-[10%]">Cover Photo</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                                <div className="font-semibold text-left w-[10%]">Photos</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                              <div className='font-semibold text-left w-[10%]'>Price</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                              <div className='font-semibold text-left w-[10%]'>Description</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                               <div className='font-semibold text-left w-[10%]'>Brand</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                               <div className='font-semibold text-left w-[10%]'>Category</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                               <div className='font-semibold text-left w-[10%]'>Colors</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                               <div className='font-semibold text-left w-[10%]'>Sizes</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                               <div className='font-semibold text-left w-[10%]'>Actions</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-base divide-y divide-gray-100">
                    <tr>
                            <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-gray-500 text-base'>adidas X Speedportal+SG</span>
                            </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                                <img src={Add} alt="" className='w-[60px]' />
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                              <div className='flex gap-2'>
                                  <img src={Add} alt="" className='w-[40px]' />
                                  <img src={Add2} alt="" className='w-[40px]'/>
                              </div>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                              <span className='text-base text-gray-500 text-left'>Ks 10000</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap ">
                              <p className='text-base text-gray-500 text-left'>Lorem ipsum dolor...</p>
                           </td>

                           <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-base text-gray-500 text-center'>Adidas</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-base text-gray-500 text-center'>Boot</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap"> 
                                <div className='flex gap-1 justify-center'>
                                    <div className='bg-amber-500 w-[10px] h-[10px]'></div>
                                    <div className='bg-red-500 w-[10px] h-[10px]'></div>
                                    <div className='bg-green-500 w-[10px] h-[10px]'></div>
                                </div>
                           </td>
                           <td className="py-5 px-2 whitespace-nowrap text-center">
                                <ul>
                                    <li className='mb-1'>S</li>
                                    <li className='mb-1'>SM</li>
                                    <li className='mb-1'>SL</li>
                                </ul>
                           </td>
                           <td className='p-5 whitespace-nowrap text-left'>
                                <i className="fa-solid fa-pen  cursor-pointer text-amber-500 mr-3 w-[20px] text-2xl "></i>
                              
                                <i className="fa-regular fa-trash-can text-red-500 text-2xl cursor-pointer ml-3 w-[20px] "></i>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-gray-500 text-base'>adidas X Speedportal+SG</span>
                            </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                                <img src={Add} alt="" className='w-[60px]' />
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                              <div className='flex gap-2'>
                                  <img src={Add} alt="" className='w-[40px]' />
                                  <img src={Add2} alt="" className='w-[40px]'/>
                              </div>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                              <span className='text-base text-gray-500 text-left'>Ks 10000</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap ">
                              <p className='text-base text-gray-500 text-left'>Lorem ipsum dolor...</p>
                           </td>

                           <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-base text-gray-500 text-center'>Adidas</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-base text-gray-500 text-center'>Boot</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap"> 
                                <div className='flex gap-1 justify-center'>
                                    <div className='bg-amber-500 w-[10px] h-[10px]'></div>
                                    <div className='bg-red-500 w-[10px] h-[10px]'></div>
                                    <div className='bg-green-500 w-[10px] h-[10px]'></div>
                                </div>
                           </td>
                           <td className="py-5 px-2 whitespace-nowrap text-center">
                                <ul>
                                    <li className='mb-1'>S</li>
                                    <li className='mb-1'>SM</li>
                                    <li className='mb-1'>SL</li>
                                </ul>
                           </td>
                           <td className='p-5 whitespace-nowrap text-left'>
                                <i className="fa-solid fa-pen  cursor-pointer text-amber-500 mr-3 w-[20px] text-2xl "></i>
                              
                                <i className="fa-regular fa-trash-can text-red-500 text-2xl cursor-pointer ml-3 w-[20px] "></i>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-gray-500 text-base'>adidas X Speedportal+SG</span>
                            </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                                <img src={Add} alt="" className='w-[60px]' />
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                              <div className='flex gap-2'>
                                  <img src={Add} alt="" className='w-[40px]' />
                                  <img src={Add2} alt="" className='w-[40px]'/>
                              </div>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                              <span className='text-base text-gray-500 text-left'>Ks 10000</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap ">
                              <p className='text-base text-gray-500 text-left'>Lorem ipsum dolor...</p>
                           </td>

                           <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-base text-gray-500 text-center'>Adidas</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap">
                                <span className='text-base text-gray-500 text-center'>Boot</span>
                           </td>
                           <td className="py-3 px-2 whitespace-nowrap"> 
                                <div className='flex gap-1 justify-center'>
                                    <div className='bg-amber-500 w-[10px] h-[10px]'></div>
                                    <div className='bg-red-500 w-[10px] h-[10px]'></div>
                                    <div className='bg-green-500 w-[10px] h-[10px]'></div>
                                </div>
                           </td>
                           <td className="py-5 px-2 whitespace-nowrap text-center">
                                <ul>
                                    <li className='mb-1'>S</li>
                                    <li className='mb-1'>SM</li>
                                    <li className='mb-1'>SL</li>
                                </ul>
                           </td>
                           <td className='p-5 whitespace-nowrap text-left'>
                                <i className="fa-solid fa-pen  cursor-pointer text-amber-500 mr-3 w-[20px] text-2xl "></i>
                              
                                <i className="fa-regular fa-trash-can text-red-500 text-2xl cursor-pointer ml-3 w-[20px] "></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <div>
                    <ReactPaginate 
                        breakLabel={<span className='mr-4'>...</span>}
                        nextLabel={
                            <span className="w-10 h-10 flex items-center justify-center  rounded-md">
                                <i className='fa-solid fa-chevron-right text-xl text-gray-400'></i>
                            </span>
                        }
                        previousLabel={
                            <span className='w-10 h-10 flex items-center justify-center  rounded-md mr-3'>
                                <i className='fa-solid fa-chevron-left text-xl text-gray-400'></i>
                            </span>
                          
                        }
                        pageRangeDisplayed={3}
                        pageCount={15}
                        containerClassName="flex items-center justify-center mt-8 mb-4"
                        pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
                        activeClassName="bg-amber-100 text-amber-500"

                    />  
                </div>
            </div>

        </div>
    </div>
  )
}

export default Products