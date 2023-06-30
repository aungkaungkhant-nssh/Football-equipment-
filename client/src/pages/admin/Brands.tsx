import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
const Brands = () => {
    const [active,setActive] = useState(1)
  return (
    <div className='h-screen'>
        <div className='bg-white p-5 rounded shadow'>
            <div className='flex justify-between items-center mb-3 px-4'>
                <h3 className='text-xl font-bold'>Brand Lists</h3>
                <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                  <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                  <input type="text" placeholder='Search...'  className='focus:outline-none' />
                </div>
                <Link to="/admin/addbrand" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                  <i className="fa-solid fa-circle-plus text-2xl"></i>
                </Link>
            </div>
            <hr />
            <div className='mt-5 px-4'>
                <table className="table-auto w-full">
                    <thead className="text-sm font-semibold uppercase text-gray-400 bg-gray-100">
                        <tr className='w-full'>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left w-[50%]">Name</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left w-[50%]">Action</div>
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody className="text-base divide-y divide-gray-100">
                        <tr>
                            <td className="p-5 whitespace-nowrap">
                                <span className='text-gray-500 font-normal'>adidas</span>
                            </td>
                            <td className='p-5 whitespace-nowrap'>
                                <i className="fa-solid fa-pen text-lg cursor-pointer text-amber-500 mr-2 "></i>
                                <i className="fa-regular fa-trash-can text-red-500 text-lg cursor-pointer ml-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-5 whitespace-nowrap">
                                <span className='text-gray-500 font-normal'>nike</span>
                            </td>
                            <td className='p-5 whitespace-nowrap'>
                                <i className="fa-solid fa-pen text-lg cursor-pointer text-amber-500 mr-2 "></i>
                                <i className="fa-regular fa-trash-can text-red-500 text-lg cursor-pointer ml-2"></i>
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

export default Brands