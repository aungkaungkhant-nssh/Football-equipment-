import React from 'react'
import CheckOutState from '../../components/CheckOutState'
import { Link } from 'react-router-dom'
import Add from '../../assets/images/add.jpg'
import { useNavigate } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'
const OrderConfirm = () => {
    const navigate = useNavigate()
  return (
    <section>
         <div className='px-4'>
            <BreadCrumb items={[
              {name:"Home",path:"/"},
              {name:"Cart",path:"/carts"},
              {name:"Delivery_Payment",path:"/delivery_payment"},
              {name:"Order_Confirm",path:"/order_confirm"},
            ]}/>
        </div>
        <CheckOutState />
        <div className='max-w-screen-lg  lg:mx-auto mx-5 my-5'>
            {/* title */}
            <div className='flex flex-col md:flex-row items-center w-full justify-between mb-8'>
                <h3 className='text-lg md:text-xl font-light text-gray-500'>Order Confirmation</h3>
                <div className='flex items-center mt-4 '>
                    <h3 className='text-sm md:text-lg text-gray-900 font-bold'><span className='text-xs font-thin mr-2'>Order Total :{' '} </span>KS 10000</h3>    
                    <button className='ml-5 bg-amber-500 py-1 px-3 rounded text-gray-100 shadow-lg text-sm'  onClick={()=>navigate("/order_complete")}>Order Complete</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full items-start justify-between bg-gray-50 rounded  shadow-[1px_1px_3px_0px_rgba(0,0,0,0.75)] p-5'>
                <div className='w-[100%]' >
                    <div className='w-[90%]'>
                         <h3 className='border border-gray-50 border-b-gray-300 py-3 mb-3 '>Your Information</h3>
           
                        <div className='mb-4'>
                            <h3 className=''>Aung Kaung Khant</h3>
                            <p className='text-xs mt-2 text-neutral-500'>akkgit0909@gmail.com</p>
                        </div>
                        <div className='border border-gray-50 border-b-gray-300  py-3 mb-3 w-full flex justify-between items-center'>
                             <h3 className=''>Payment</h3>
                             <Link to="" className='text-sm text-cyan-500 font-thin'><i className="fa-solid fa-pen text-amber-500 text-xs md:text-sm"></i></Link>
                        </div> 
                       
                        <div>
                            <span className='text-xs bg-amber-500 p-1 text-gray-100 rounded'>Cash On Delivery</span>
                        </div>
                    </div>
                      
                </div>
                <div className='w-[100%] mt-5 md:mt-0'>
                    <div className='w-[90%]'>
                         <div className='border  border-gray-50 border-b-gray-300  py-3 mb-3 w-full flex justify-between items-center'>
                             <h3 className=''>Delivery Address</h3>
                             <Link to="" className='text-sm text-cyan-500 font-thin'><i className="fa-solid fa-pen text-amber-500 text-xs md:text-sm"></i></Link>
                        </div>
           
                        <div>
                            <h3 className='mb-4'>Aung Kaung Khant</h3>
                            <div className='mt-2 text-sm text-neutral-500 font-thin'>
                                <span className=' mr-3'><i className="fa-solid fa-phone"></i></span>
                                <span>09261804445</span>
                            </div>
                            <div className='mt-2 text-sm text-neutral-500 font-thin'>
                                <span className=' mr-3'><i className="fa-solid fa-location-dot"></i></span>
                                <span>Kayin State</span>
                            </div>
                            <div className='mt-2 text-sm text-neutral-500 font-thin'>
                                <span className='mr-3'><i className="fa-solid fa-city"></i></span>
                                <span className='text-sm text-neutral-500 mr-2'>Hpa An ,</span>
                                <span className='text-sm text-neutral-500 mr-2'>Myaing Ka Lay TownShip</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10 w-full'>
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">QTY</div>
                                </th>
                               
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Price</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Other</div>
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <Link to="/">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={Add} width="50" height="50" alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800 text-xs md:text-sm">
                                                <h3 className=''>adidas X sprotal..</h3>
                                                <p className='text-gray-400 font-thin my-1'>Color : <span>Yellow</span></p>
                                                <p className='text-gray-400 font-thin my-1'>Size : <span>12 </span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left text-xs md:text-sm">2</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-amber-500 text-xs md:text-sm">$2,890.66</div>
                                </td>
                                <td className='p-2'>
                                    <button><i className="fa-solid fa-pen text-amber-500 text-xs md:text-sm"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <Link to="/">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={Add} width="50" height="50" alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800 text-xs md:text-sm">
                                                <h3 className=''>adidas X sprotal..</h3>
                                                <p className='text-gray-400 font-thin my-1'>Color : <span>Yellow</span></p>
                                                <p className='text-gray-400 font-thin my-1'>Size : <span>12 </span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left text-xs md:text-sm">2</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-amber-500 text-xs md:text-sm">$2,890.66</div>
                                </td>
                                <td className='p-2'>
                                    <button><i className="fa-solid fa-pen text-amber-500 text-xs md:text-sm"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <Link to="/">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={Add} width="50" height="50" alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800 text-xs md:text-sm">
                                                <h3 className=''>adidas X sprotal..</h3>
                                                <p className='text-gray-400 font-thin my-1'>Color : <span>Yellow</span></p>
                                                <p className='text-gray-400 font-thin my-1'>Size : <span>12 </span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left text-xs md:text-sm">2</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-amber-500 text-xs md:text-sm">$2,890.66</div>
                                </td>
                                <td className='p-2'>
                                    <button><i className="fa-solid fa-pen text-amber-500 text-xs md:text-sm"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex justify-end my-5 mx-6'>
                        <div className='w-[50%] text-gray-500 font-thin text-base'>
                            <div className='flex border border-white border-b-gray-300 py-4 justify-between'>
                                <h4 className='text-xs md:text-sm'>Initial value</h4>
                                <h3 className='text-xs md:text-sm'>1000 $</h3>
                            </div>
                            <div className='flex border border-white border-b-gray-300 py-4 justify-between'>
                                <h4 className='text-xs md:text-sm'>Discount</h4>
                                <h3 className='text-xs md:text-sm'>100 $</h3>
                            </div>
                            <div className='flex  py-4 justify-between'>
                                <h4 className='text-amber-500 font-bold'>Total : </h4>
                                <h3 className='text-amber-500 font-bold '>1000 $</h3>
                            </div>
                        </div>
                     </div>
                     <div className='flex justify-end'>
                        <button className='ml-5 bg-amber-500 py-1 px-3 rounded text-gray-100 shadow-lg text-sm' onClick={()=>navigate("/order_complete")}>Order Complete</button>
                     </div>
            </div>
        </div>
      
    </section>
  )
}

export default OrderConfirm