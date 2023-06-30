import React from 'react'
import Add from '../assets/images/add.jpg'
import { Link,useNavigate } from 'react-router-dom'
type propType = {
    isCartOpen:boolean
    setIsCartOpen:(isCartOpen:boolean)=>void
}
const CartSidebar = ({isCartOpen,setIsCartOpen}:propType) => {
  const navigate =useNavigate()
  const goToCartPage  = ()=>{
    setIsCartOpen(false)
    navigate("/carts")
  }
  return (
    <div className=''>
        <div className={`fixed top-0 right-0 w-screen md:w-[30%] bottom-0  z-[1000] transform  ease-in-out transition-all duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-[10000px]'} bg-gray-100 shadow-2xl`}>
            <div className='bg-white px-6 py-4 flex items-center justify-between'>
              <h3 className='text-2xl'>Cart</h3>
              <button onClick={()=>setIsCartOpen(!isCartOpen)}>
                <i className="fa-solid fa-xmark text-2xl text-gray-500"></i>
              </button>
            </div>
            <div className='px-4  h-[72%] overflow-y-scroll'>
                <div className='border border-gray-100 border-b-gray-300 py-5'>
                    <div className='flex justify-between'>
                        <div className='basis-[28%] mr-3'>
                            <img src={Add} alt="" className='w-full' />
                        </div>
                        <div>
                            <h3 className='font-bolder mb-2'>adidas X Speedportal+SG</h3>
                            <p className='text-sm text-neutral-500 mb-2'><span>Size : </span>12</p>
                            <div className='flex justify-between'>
                                <p className='text-sm text-neutral-500 '>1000 $</p>
                                <div className='flex'>
                                    <div className='border bg-gray-50  hover:border-gray-400 rounded-full px-4 cursor-pointer'>
                                        <span className='text-2xl'>-</span>
                                    </div>
                                    <div className='mx-3'>1</div>
                                    <div className='border bg-gray-50 hover:border-gray-400 rounded-full px-4 cursor-pointer'>
                                        <span className='text-2xl'>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='cursor-pointer'>
                                <i className="fa-solid fa-xmark text-xl text-gray-500 hover:text-amber-500"></i>
                            </button>
                        </div>
                    </div>
                </div>
               
                <div className='border border-gray-100 border-b-gray-300 py-5'>
                    <div className='flex justify-between'>
                        <div className='basis-[28%] mr-3'>
                            <img src={Add} alt="" className='w-full' />
                        </div>
                        <div>
                            <h3 className='font-bolder mb-2'>adidas X Speedportal+SG</h3>
                            <p className='text-sm text-neutral-500 mb-2'><span>Size : </span>12</p>
                            <div className='flex justify-between'>
                                <p className='text-sm text-neutral-500 '>1000 $</p>
                                <div className='flex'>
                                    <div className='border bg-gray-50  hover:border-gray-400 rounded-full px-4 cursor-pointer'>
                                        <span className='text-2xl'>-</span>
                                    </div>
                                    <div className='mx-3'>1</div>
                                    <div className='border bg-gray-50 hover:border-gray-400 rounded-full px-4 cursor-pointer'>
                                        <span className='text-2xl'>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='cursor-pointer'>
                                <i className="fa-solid fa-xmark text-xl text-gray-500 hover:text-amber-500"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-100 border-b-gray-300 py-5'>
                    <div className='flex justify-between'>
                        <div className='basis-[28%] mr-3'>
                            <img src={Add} alt="" className='w-full' />
                        </div>
                        <div>
                            <h3 className='font-bolder mb-2'>adidas X Speedportal+SG</h3>
                            <p className='text-sm text-neutral-500 mb-2'><span>Size : </span>12</p>
                            <div className='flex justify-between'>
                                <p className='text-sm text-neutral-500 '>1000 $</p>
                                <div className='flex'>
                                    <div className='border bg-gray-50  hover:border-gray-400 rounded-full px-4 cursor-pointer'>
                                        <span className='text-2xl'>-</span>
                                    </div>
                                    <div className='mx-3'>1</div>
                                    <div className='border bg-gray-50 hover:border-gray-400 rounded-full px-4 cursor-pointer'>
                                        <span className='text-2xl'>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='cursor-pointer'>
                                <i className="fa-solid fa-xmark text-xl text-gray-500 hover:text-amber-500"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-100 border-b-gray-300 py-5'>
                    <div className='flex justify-between'>
                        <div className='basis-[28%] mr-3'>
                            <img src={Add} alt="" className='w-full' />
                        </div>
                        <div>
                            <h3 className='font-bolder mb-2'>adidas X Speedportal+SG</h3>
                            <p className='text-sm text-neutral-500 mb-2'><span>Size : </span>12</p>
                            <div className='flex justify-between'>
                                <p className='text-sm text-neutral-500 '>1000 $</p>
                                <div className='flex'>
                                    <div className='border bg-gray-50  hover:border-gray-400 rounded-full px-4 cursor-pointer'>
                                        <span className='text-2xl'>-</span>
                                    </div>
                                    <div className='mx-3'>1</div>
                                    <div className='border bg-gray-50 hover:border-gray-400 rounded-full px-4 cursor-pointer'>
                                        <span className='text-2xl'>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='cursor-pointer'>
                                <i className="fa-solid fa-xmark text-xl text-gray-500 hover:text-amber-500"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed  right-0 bottom-0 left-0'>
                <div className='flex justify-between px-4 mb-0 bg-white py-6'>
                    <h3>Total</h3>
                    <h3>1000 $</h3>
                </div>
                <div className='flex justify-center'>
                    <div className='basis-3/6 bg-gray-900 text-gray-50 py-4 text-center cursor-pointer hover:bg-gray-800 transition duration-300' onClick={goToCartPage}>
                        <span>View Cart</span>
                    </div>
                    <div className='basis-3/6 bg-amber-500 text-center py-4 cursor-pointer
                    hover:bg-amber-400 transition duration-300'>
                        <span className='text-gray-50'>Complete Order</span>
                    </div>   
                </div>
             
            </div>
        </div>
    </div>
    
  )
}

export default CartSidebar