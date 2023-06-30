import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Add from '../../assets/images/add.jpg'
import Add2 from '../../assets/images/add2.jpg'
import Sort from '../../components/Sort';
import Refine from '../../components/Refine';
import BreadCrumb from './BreadCrumb';
const Products = () => {
  const [showBrands,setShowBrands] = useState<boolean>(true)
  const [showGroundType,setShowGroundType] = useState<boolean>(true)
  const [showSize,setShowSize] = useState<boolean>(true)

  const [isSortOpen,setIsSortOpen] = useState<boolean>(false)
  const [isRefineOpen,setIsRefineOpen] = useState<boolean>(false)
  return (  
    <section className='px-4'>
            <BreadCrumb items={[{name:"Home",path:"/"},{name:"Products",path:"/products"}]} />
            <div className='hidden lg:flex mt-5 justify-end'>
             
                <div className=''>
                    <select  id="" className='border border-gray-300 px-4 py-2 rounded-lg'>
                        <option value="" className='px-5 py-2'>Sort</option>
                        <option value="" className='px-5 py-2'>New Arrival</option>
                        <option value="" className='px-5 py-2'> Price High To Low</option>
                        <option value="" className='px-5 py-2'>Price Low To High</option>
                        <option value="" className='px-5 py-2'>Discount</option>
                    </select>
                </div>
            </div>

            <div className=' flex lg:hidden justify-around my-10'>
                <div className='flex items-center cursor-pointer' onClick={()=>setIsRefineOpen(true)}>
                    <h3 className='mr-3 text-base text-neutral-900'>Refine</h3>
                    <div>
                        <i className='fa-solid fa-chevron-right text-gray-50 text-sm text-neutral-500'></i>
                    </div>
                </div>
                <div className='flex items-center cursor-pointer' onClick={()=>setIsSortOpen(true)}>
                    <h3 className='mr-3 text-base text-neutral-900'>Sort</h3>
                    <div>
                        <i className='fa-solid fa-chevron-right text-gray-50 text-sm text-neutral-500'></i>
                    </div>
                </div>
               
            </div>
            <div className='mt-5  flex justify-between'>
                {/* use choose box */}
                <div className='hidden lg:block basis-[23%]  '>
                    <div className='w-4/5 mb-1'>
                        <div className='bg-gray-900 rounded px-4 py-2 flex justify-between ' >
                                <span className='text-gray-50 block'>Brands</span>
                                <span className='block cursor-pointer' onClick={()=>setShowBrands(!showBrands)}><i className={`fa-solid ${showBrands ? "fa-chevron-down" : "fa-chevron-right"} text-gray-50`}></i></span>
                         </div>
                         <div className={showBrands ? 'block mx-3 mt-3': 'hidden'} style={{marginBottom:"10px"}}>
                            <ul className=''>
                                <li className='flex items-center justify-between cursor-pointer'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='border border-neutral-500' />
                                        <p className='ml-2 text-sm text-neutral-500 font-thin'>adidas</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-neutral-500 font-thin'>(44)</p>
                                    </div>
                                </li>
                            </ul>
                         </div>
                    </div>
                    <div className='w-4/5 mb-1 '>
                        <div className='bg-gray-900 rounded px-4 py-2 flex justify-between ' >
                                <span className='text-gray-50 block'>Ground Type</span>
                                <span className='block cursor-pointer' onClick={()=>setShowGroundType(!showGroundType)}><i className={`fa-solid ${showGroundType ? "fa-chevron-down" : "fa-chevron-right"} text-gray-50`}></i></span>
                         </div>
                         <div className={showGroundType ? 'block mx-3 mt-3': 'hidden'}  style={{marginBottom:"10px"}}>
                            <ul className=''>
                                <li className='flex items-center justify-between cursor-pointer'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='border border-neutral-500' />
                                        <p className='ml-2 text-sm text-neutral-500 font-thin'>adidas</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-neutral-500 font-thin'>(44)</p>
                                    </div>
                                </li>
                            </ul>
                         </div>
                    </div>
                    <div className='w-4/5 '>
                        <div className='bg-gray-900 rounded px-4 py-2 flex justify-between ' >
                                <span className='text-gray-50 block'>Size</span>
                                <span className='block cursor-pointer' onClick={()=>setShowSize(!showSize)}><i className={`fa-solid ${showGroundType ? "fa-chevron-down" : "fa-chevron-right"} text-gray-50`}></i></span>
                         </div>
                         <div className={showSize ? 'block mx-3 mt-3': 'hidden'}  style={{marginBottom:"10px"}}>
                            <ul className=''>
                                <li className='flex items-center justify-between cursor-pointer'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='border border-neutral-500' />
                                        <p className='ml-2 text-sm text-neutral-500 font-thin'>adidas</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-neutral-500 font-thin'>(44)</p>
                                    </div>
                                </li>
                            </ul>
                         </div>
                    </div>
                    <div className='w-4/5 '>
                        <div className='bg-gray-900 rounded px-4 py-2 flex justify-between ' >
                                <span className='text-gray-50 block'>Base Color</span>
                                <span className='block cursor-pointer' onClick={()=>setShowSize(!showSize)}><i className={`fa-solid ${showGroundType ? "fa-chevron-down" : "fa-chevron-right"} text-gray-50`}></i></span>
                         </div>
                         <div className={showSize ? 'block mx-3 mt-3': 'hidden'}  style={{marginBottom:"10px"}}>
                            <ul className=''>
                                <li className='flex items-center justify-between cursor-pointer'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='border border-neutral-500' />
                                        <p className='ml-2 text-sm text-neutral-500 font-thin'>adidas</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-neutral-500 font-thin'>(44)</p>
                                    </div>
                                </li>
                            </ul>
                         </div>
                    </div>
                </div>
                {/* product container */}
                <div className='md-basis-[77%] basis-full'>
                    <div className='flex flex-wrap justify-between'>
                        <div className='basis-3/6 md:basis-[30%] lg:basis-1/4 mb-10'>
                            <Link to="/product_details/1">
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
                                                        <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
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
                        <div className='basis-3/6 md:basis-[30%] lg:basis-1/4 mb-10'>
                            <Link to="/product_details/1">
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
                                                        <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
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
                        <div className='basis-3/6 md:basis-[30%] lg:basis-1/4 mb-10'>
                            <Link to="/product_details/1">
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
                                                        <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
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
                        <div className='basis-3/6 md:basis-[30%] lg:basis-1/4 mb-10'>
                            <Link to="/product_details/1">
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
                                                        <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
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
                </div>
            </div>
            <Sort isSortOpen={isSortOpen} setIsSortOpen={setIsSortOpen} />
            <Refine isRefineOpen = {isRefineOpen} setIsRefineOpen={setIsRefineOpen} />
    </section>
  )
}

export default Products