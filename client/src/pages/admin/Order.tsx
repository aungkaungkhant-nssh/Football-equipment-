import React from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
const Order = () => {
  return (
    <div>
        <div className='bg-white p-5 rounded shadow'>
            <div className='flex justify-between items-center mb-3 px-4'>
                <h3 className='text-xl font-bold'>Order Lists</h3>
                <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                  <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                  <input type="text" placeholder='Search...'  className='focus:outline-none' />
                </div>
           </div>
           <hr />
          <div className='mt-5 px-4'>
            <table className="table-auto w-full mt-3">
                <thead className="text-base font-semibold uppercase text-gray-400 bg-gray-100 w-full">
                        <tr className='w-full'>
                            <th className="p-3 whitespace-nowrap">
                                <div className="font-semibold text-left w-[10%]">Order Id</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                                <div className="font-semibold text-left w-[10%]">User Name</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                                <div className="font-semibold text-left w-[10%]">Phone Number</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                              <div className='font-semibold text-left w-[10%]'>Price</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                              <div className='font-semibold text-left w-[10%]'>Address</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                               <div className='font-semibold text-left w-[10%]'>Date</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                               <div className='font-semibold text-left w-[10%]'>Status</div>
                            </th>
                            
                        </tr>
                </thead>
                <tbody className="text-base divide-y divide-gray-100">
                    <tr >
                        <td className="p-5 whitespace-nowrap">
                          <span className='text-gray-500 font-normal'>121212</span>
                            
                        </td>
                        <td className="p-5 whitespace-nowrap">
                            <span className='text-sm'>Aung Kaung Khant</span>
                        </td>
                        <td className="p-5 whitespace-nowrap">
                            <span className='text-gray-500 font-normal'>akkgit0909@gmail.com</span>
                        </td>
                        <td className='p-5'>
                            <span>KS 12000</span>
                        </td>
                        <td>
                          <span>Hpa an</span>
                        </td>
                        <td>
                            <span className='text-gray-500'>20/2/2023</span>
                        </td>
                        <td>
                            <span className='bg-green-200 rounded-full px-3 py-2 text-green-500 font-normal'>Delivered</span>
                        </td>
                      
                    </tr>
                    <tr >
                        <td className="p-5 whitespace-nowrap">
                          <span className='text-gray-500 font-normal'>121212</span>
                            
                        </td>
                        <td className="p-5 whitespace-nowrap">
                            <span className='text-sm'>Aung Kaung Khant</span>
                        </td>
                        <td className="p-5 whitespace-nowrap">
                            <span className='text-gray-500 font-normal'>akkgit0909@gmail.com</span>
                        </td>
                        <td className='p-5'>
                            <span>KS 12000</span>
                        </td>
                        <td>
                          <span>Hpa an</span>
                        </td>
                        <td>
                            <span className='text-gray-500'>20/2/2023</span>
                        </td>
                        <td>
                            <span className='bg-green-200 rounded-full px-3 py-2 text-green-500 font-normal'>Delivered</span>
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

export default Order