import React from 'react'
import { Link } from 'react-router-dom'
import Add from '../../assets/images/add.jpg'
import Add2 from '../../assets/images/add2.jpg'
import BreadCrumb from './BreadCrumb'
const CompareProducts = () => {
  return (
   <section className=' px-4'>
         <BreadCrumb items={[
              {name:"Home",path:"/"},
              {name:"Compare_Products",path:"/compare_products"}
            ]}/>
          <div className='flex overflow-x-scroll whitespace-nowrap my-5'>
          <div className='basis-3/6 md:basis-[30%] lg:basis-[20%] mb-10'>
            <Link to="product_details/1">
                <div className='border border-gray-200 p-2 mr-4 group cursor-pointer ' >
                        <div className='inline-block relative'>
                            <img src={Add} alt=""  />
                            <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                            <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                <div className='flex justify-between items-center '>
                                    <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                    <p className='text-sm'>New Arrivals</p>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <i className="fa-solid fa-xmark text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                    <div className=' '>
                                        <div className='my-4 cursor-pointer'>
                                            <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className='absolute z-50 bottom-0 left-0 right-0'>
                                <div className='bg-gray-200 py-2 text-center'>
                                    <h3 className='uppercase text-slate-700'>13% off</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className='border border-gray-50  py-3  p-3'>
                            <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                            <h2 className='text-neutral-500 text-xs my-2 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                            <div className='mb-2 text-amber-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className='flex'>
                                <p className='text-slate-700'>$10</p>
                                <p className='ml-7 text-neutral-400 line-through '>12$</p>
                            </div>
                        </div>
                    
            
                </div>
            </Link>
          </div>
          <div className='basis-3/6 md:basis-[30%] lg:basis-[20%] mb-10'>
            <Link to="product_details/1">
                <div className='border border-gray-200 p-2 mr-4 group cursor-pointer ' >
                        <div className='inline-block relative'>
                            <img src={Add} alt=""  />
                            <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                            <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                <div className='flex justify-between items-center '>
                                    <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                    <p className='text-sm'>New Arrivals</p>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <i className="fa-solid fa-xmark text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                    <div className=' '>
                                        <div className='my-4 cursor-pointer'>
                                            <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className='absolute z-50 bottom-0 left-0 right-0'>
                                <div className='bg-gray-200 py-2 text-center'>
                                    <h3 className='uppercase text-slate-700'>13% off</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className='border border-gray-50  py-3  p-3'>
                            <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                            <h2 className='text-neutral-500 text-xs my-2 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                            <div className='mb-2 text-amber-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className='flex'>
                                <p className='text-slate-700'>$10</p>
                                <p className='ml-7 text-neutral-400 line-through '>12$</p>
                            </div>
                        </div>
                    
            
                </div>
            </Link>
          </div>
          <div className='basis-3/6 md:basis-[30%] lg:basis-[20%] mb-10'>
            <Link to="product_details/1">
                <div className='border border-gray-200 p-2 mr-4 group cursor-pointer ' >
                        <div className='inline-block relative'>
                            <img src={Add} alt=""  />
                            <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                            <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                <div className='flex justify-between items-center '>
                                    <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                    <p className='text-sm'>New Arrivals</p>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <i className="fa-solid fa-xmark text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                    <div className=' '>
                                        <div className='my-4 cursor-pointer'>
                                            <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className='absolute z-50 bottom-0 left-0 right-0'>
                                <div className='bg-gray-200 py-2 text-center'>
                                    <h3 className='uppercase text-slate-700'>13% off</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className='border border-gray-50  py-3  p-3'>
                            <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                            <h2 className='text-neutral-500 text-xs my-2 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                            <div className='mb-2 text-amber-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className='flex'>
                                <p className='text-slate-700'>$10</p>
                                <p className='ml-7 text-neutral-400 line-through '>12$</p>
                            </div>
                        </div>
                    
            
                </div>
            </Link>
          </div>
          <div className='basis-3/6 md:basis-[30%] lg:basis-[20%] mb-10'>
            <Link to="product_details/1">
                <div className='border border-gray-200 p-2 mr-4 group cursor-pointer ' >
                        <div className='inline-block relative'>
                            <img src={Add} alt=""  />
                            <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                            <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                <div className='flex justify-between items-center '>
                                    <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                    <p className='text-sm'>New Arrivals</p>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <i className="fa-solid fa-xmark text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                    <div className=' '>
                                        <div className='my-4 cursor-pointer'>
                                            <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className='absolute z-50 bottom-0 left-0 right-0'>
                                <div className='bg-gray-200 py-2 text-center'>
                                    <h3 className='uppercase text-slate-700'>13% off</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className='border border-gray-50  py-3  p-3'>
                            <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                            <h2 className='text-neutral-500 text-xs my-2 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                            <div className='mb-2 text-amber-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className='flex'>
                                <p className='text-slate-700'>$10</p>
                                <p className='ml-7 text-neutral-400 line-through '>12$</p>
                            </div>
                        </div>
                    
            
                </div>
            </Link>
          </div>
          <div className='basis-3/6 md:basis-[30%] lg:basis-[20%] mb-10'>
            <Link to="product_details/1">
                <div className='border border-gray-200 p-2 mr-4 group cursor-pointer ' >
                        <div className='inline-block relative'>
                            <img src={Add} alt=""  />
                            <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                            <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                <div className='flex justify-between items-center '>
                                    <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                    <p className='text-sm'>New Arrivals</p>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <i className="fa-solid fa-xmark text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                    <div className=' '>
                                        <div className='my-4 cursor-pointer'>
                                            <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className='absolute z-50 bottom-0 left-0 right-0'>
                                <div className='bg-gray-200 py-2 text-center'>
                                    <h3 className='uppercase text-slate-700'>13% off</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className='border border-gray-50  py-3  p-3'>
                            <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                            <h2 className='text-neutral-500 text-xs my-2 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                            <div className='mb-2 text-amber-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className='flex'>
                                <p className='text-slate-700'>$10</p>
                                <p className='ml-7 text-neutral-400 line-through '>12$</p>
                            </div>
                        </div>
                    
            
                </div>
            </Link>
          </div>
      </div>
   </section>
  )
}

export default CompareProducts