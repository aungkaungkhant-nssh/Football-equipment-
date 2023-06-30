import React from 'react'
import Add from '../../assets/images/add.jpg'
import { Link,useNavigate } from 'react-router-dom'
import BreadCrumb from './BreadCrumb';
const Carts = () => {
  const navigate = useNavigate();
  return (
    <section className='px-4'>
         <BreadCrumb items={[{name:"Home",path:"/"},{name:"Cart",path:"/carts"}]}/>
         <section className='mt-10 max-w-screen-md mx-auto ' >
   
              <div className='flex  justify-between items-center mb-5 flex-col md:flex-row'>
                  <div className='hidden md:block'>
                    <Link to="/products" className='text-xs uppercase bg-gray-100 border-gray-200 border rounded-full py-2 px-4 text-gray-500 shadow-inner hover:bg-amber-500 hover:text-gray-100 transition all duration-300'>Continue shopping</Link>
                  </div>
                  <div>
                    <h3 className='uppercase text-neutral-900 text-2xl md:text-2xl font-thin tracking-wider'>my shopping cart</h3>
                  </div>
                  <div>
                      <button className='mt-5 md:mt-0 bg-white border border-gray-300 text-gray-700 text-xs uppercase px-4 py-2 rounded-full hover:bg-amber-500 hover:text-gray-100 transition all duration-300'>Checkout</button>
                  </div>
              </div>
              <div className='mt-10 px-3'>
                    <div className='flex justify-around items-start border border-white border-b-gray-200 py-3'>
                      <div className='w-[25%] md:w-[10%] mr-3'>
                        <img src={Add} alt="" className='w-[300px]' />
                      </div>
                      <div className='flex  w-[75%] flex-col md:flex-row'>
                        <div className='basis-[50%]'>
                            <h3 className=' inline-block text-sm md:text-base text-neutral-900 font-bold mb-2'>adidas X Speedportal+SG</h3>
                            <p className='text-sm'>Size : <span className='text-gray-500 '>12</span></p>
                        </div>
                        <div className='basis-[50%]'>
                            <h3 className='mb-2 text-sm mt-3 md:text-lg md:mt-0 text-amber-500'>1000 $</h3>
                            <button className='mr-5 hidden md:inline'>
                              <i className="fa-regular fa-heart text-gray-400 text-lg hover:text-amber-500 transition all duration-300"></i>
                            </button>
                            <button className='hidden md:inline'>
                              <i className="fa-regular fa-trash-can text-gray-400 text-lg hover:text-amber-500 trasition all duration-300"></i>
                            </button>
                        </div>
                        
                      </div>
                      <div className='flex items-center justify-center w-[15%] mr-3'>
                            <div className='border bg-gray-50  hover:border-gray-400 rounded-full px-2 cursor-pointer'>
                                <span className='text-xl'>-</span>
                            </div>
                            <div className='mx-3 text-sm md:text-base '>1</div>
                            <div className='border bg-gray-50 hover:border-gray-400 rounded-full px-2 cursor-pointer'>
                                <span className='text-xl'>+</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around items-start border border-white border-b-gray-200 py-3'>
                      <div className='w-[25%] md:w-[10%] mr-3'>
                        <img src={Add} alt="" className='w-[300px]' />
                      </div>
                      <div className='flex  w-[75%] flex-col md:flex-row'>
                        <div className='basis-[50%]'>
                            <h3 className=' inline-block text-sm md:text-base text-neutral-900 font-bold mb-2'>adidas X Speedportal+SG</h3>
                            <p className='text-sm'>Size : <span className='text-gray-500 '>12</span></p>
                        </div>
                        <div className='basis-[50%]'>
                            <h3 className='mb-2 text-sm mt-3 md:text-lg md:mt-0 text-amber-500'>1000 $</h3>
                            <button className='mr-5 hidden md:inline'>
                              <i className="fa-regular fa-heart text-gray-400 text-lg hover:text-amber-500 transition all duration-300"></i>
                            </button>
                            <button className='hidden md:inline'>
                              <i className="fa-regular fa-trash-can text-gray-400 text-lg hover:text-amber-500 trasition all duration-300"></i>
                            </button>
                        </div>
                        
                      </div>
                      <div className='flex items-center justify-center w-[15%] mr-3'>
                            <div className='border bg-gray-50  hover:border-gray-400 rounded-full px-2 cursor-pointer'>
                                <span className='text-xl'>-</span>
                            </div>
                            <div className='mx-3 text-sm md:text-base '>1</div>
                            <div className='border bg-gray-50 hover:border-gray-400 rounded-full px-2 cursor-pointer'>
                                <span className='text-xl'>+</span>
                            </div>
                        </div>
                    </div>
              </div>
              <div className='flex justify-end my-5 mx-6'>
                <div className='w-[50%] text-gray-500 font-thin text-base'>
                    <div className='flex border border-white border-b-gray-300 py-4 justify-between'>
                          <h4 className=''>Initial value</h4>
                          <h3>1000 $</h3>
                    </div>
                    <div className='flex border border-white border-b-gray-300 py-4 justify-between'>
                          <h4>Discount</h4>
                          <h3>100 $</h3>
                    </div>
                    <div className='flex  py-4 justify-between'>
                          <h4 className='text-amber-500'>Total : </h4>
                          <h3 className='text-amber-500'>1000 $</h3>
                    </div>
                </div>
              
              </div>
              <div className='flex justify-end md:justify-between mt-5 mx-6'>
                  <div className='hidden md:block'>
                    <Link to="/products" className='text-xs uppercase bg-gray-100 border-gray-200 border rounded-full py-2 px-4 text-gray-500 shadow-inner hover:bg-amber-500 hover:text-gray-100 transition all duration-300'>Continue shopping</Link>
                  </div>
                  <div>
                    <button onClick={()=>navigate("/delivery_payment")} className='uppercase bg-amber-500 rounded-full px-4 py-2 text-white text-xs hover:bg-amber-600 transition all duration-300'>Order placement</button>
                  </div>
              </div>
         </section>
    
    </section>
  
  )
}

export default Carts