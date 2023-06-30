import React from 'react'
import { Link } from 'react-router-dom'
const Customer = () => {
  return (
    <div>
            <div className='bg-white p-5 rounded shadow'>
                 <div className='flex justify-between items-center mb-3 px-4'>
                    <h3 className='text-xl font-bold'>Customer Lists</h3>
                    <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                    <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                    <input type="text" placeholder='Search...'  className='focus:outline-none' />
                    </div>
                    <Link to="/admin/addCustomer" className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                    <i className="fa-solid fa-circle-plus text-2xl"></i>
                    </Link>
                 </div>
                <hr />
                <div className='mt-5 px-4'>
                <table className='table-auto w-full'>
                    <thead className="text-base font-semibold uppercase text-gray-400 bg-gray-100 w-full">
                        <tr className='w-full'>
                            <th className="p-3 whitespace-nowrap">
                                <div className="font-semibold text-left w-[10%]">Name</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                                <div className="font-semibold text-left w-[10%]">Email</div>
                            </th>
                            <th className="p-3 whitespace-nowrap ">
                                <div className="font-semibold text-left w-[10%]">Phone</div>
                            </th>
                           
                            <th className="p-3 whitespace-nowrap ">
                               <div className='font-semibold text-left w-[10%]'>Actions</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-base divide-y divide-gray-100">
                    <tr >
                        <td className="p-5 whitespace-nowrap">
                          <span className='text-gray-500 font-normal'>Aung Kaung Khant</span>
                            
                        </td>
                        <td className="p-5 whitespace-nowrap">
                            <span className='text-gray-500 font-normal'>akkgit0909@gmail.com</span>
                        </td>
                        <td className="p-5 whitespace-nowrap">
                             <span className='text-gray-500 font-normal'>09261804445</span>
                        </td>
                        <td className='p-5 whitespace-nowrap text-left'>
                                <i className="fa-solid fa-pen  cursor-pointer text-amber-500 mr-3 w-[20px] text-2xl "></i>
                              
                                <i className="fa-regular fa-trash-can text-red-500 text-2xl cursor-pointer ml-3 w-[20px] "></i>
                        </td>
                      
                    </tr>
                   
                </tbody>
                </table>
            </div>
            </div>
           
    </div>
  )
}

export default Customer