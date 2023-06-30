import React,{useRef,useEffect} from 'react'
import Add from '../../assets/images/add.jpg'
import Add2 from '../../assets/images/add2.jpg'
import Zoom from 'react-img-zoom'
import BreadCrumb from './BreadCrumb'
const ProductDetails = () => {

     
  return (
    <section className='px-4 ' >
         <BreadCrumb items={[
                {name:"Home",path:"/"},
                {name:"Products",path:"/products"},
                {name:"Details",path:"/product_details/1"}
         ]} />
         <div className='mx-4'>
            <div className='flex flex-wrap mb-8 mt-8'>
                <div className='basis-full md:basis-2/4'>
                    <div className='flex '>
                        {/* all products images container */}
                        <div className='max-h-[340px] overflow-y-scroll  cursor-pointer  basis-2/12 '>
                                <div className='border-2 border-gray-200 w-[90%]'>
                                    <img src={Add} alt=""  />
                                </div>
                                <div  className='border-2 border-gray-200 w-[90%]'>
                                    <img src={Add} alt="" />
                                </div>
                                <div  className='border-2 border-gray-200 w-[90%]'>
                                    <img src={Add} alt=""  />
                                </div>
                                <div  className='border-2 border-gray-200 w-[90%]'>
                                    <img src={Add} alt=""  />
                                </div>
                        </div>
                        {/* single product image container */}
                        <div className='mx-5  md:mx-10 basis-9/12'>
                            <div className="hidden lg:block">
                                <Zoom 
                                    img={Add}
                                    zoomScale={1.8}
                                    width={350}
                                    height={350}
                                />
                            </div>
                            <div className='block lg:hidden'>
                                <img src={Add} alt="" style={{width:"300px",height:"250px"}} />
                            </div>
                        
                        </div>
                    </div>
                </div>
                
                <div className='basis-full md:basis-2/4 mt-8 md:mt-0'>
                        <div>
                            <h3 className='uppercase  text-amber-500 mb-4'>Adidas</h3>
                            <h4 className='font-extrabold tracking-wider mb-3'>adidas X Speedportal+SG</h4>
                            <hr />
                            <div className='my-4'>
                                <div className='flex'>
                                    <span className='mr-7 text-slate-500'>100 $ </span>
                                    <div className='flex items-center'>
                                        <div className='bg-green-600 w-2 h-2 rounded-full'></div>
                                        <p className='mx-2 text-neutral-500 font-thin text-sm'>Available</p>
                                    </div>
                                </div>
                            
                                <div>
                                    <div className='flex items-center'>
                                        <div className='my-4 text-amber-400'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                        </div>
                                        <p className='mx-2 text-neutral-500 font-thin'>(2 Reviews)</p>
                                    </div>
                                    <div>
                                        <div className='cursor-pointer text-neutral-500'>
                                            <p>Write Review</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='mt-3'>
                                <h3 className='mb-3'>Size</h3>
                                <div>
                                    <div className='flex items-center flex-wrap'>
                                        <div className='border border-gray-300 rounded-full px-3 py-1 mx-1 cursor-pointer group hover:bg-gray-50'>
                                            <span className='text-gray-600 group-hover:text-amber-950'>35-1/2</span>
                                        </div>
                                        <div className='border border-gray-300 rounded-full px-3 py-1 mx-1 cursor-pointer group hover:bg-gray-50'>
                                            <span className='text-gray-600 group-hover:text-amber-950'>38</span>
                                        </div>
                                        <div className='border border-gray-300 rounded-full px-3 py-1 mx-1 cursor-pointer group hover:bg-gray-50'>
                                            <span className='text-gray-600 group-hover:text-amber-950'>40</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
            <hr />
            <div className='my-8'>
                <h3 className='text-xl mb-3 font-bold tracking-wider'>Description</h3>
                <div className='bg-gray-150 px-4'>
                    <p className='tracking-wide text-neutral-500 leading-6 font-thin text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quaerat, nostrum possimus molestiae quam corporis, eaque incidunt ex debitis maxime officia hic quidem quis sunt iusto, illum deleniti perferendis temporibus corrupti numquam distinctio! A ducimus repudiandae dignissimos iusto laudantium architecto eum, doloribus ipsum nam adipisci nulla modi perspiciatis eveniet fuga!</p>
                </div>
            </div>
            <hr />
            <div className='my-8'>
                <h3 className='text-xl mb-5 font-bold tracking-wider'>Reviews</h3>
                <div className='px-4'>
                    <div className='bg-gray-150  mb-4'>
                        <h3 className='text-lg font-medium mb-3'>Customer Reviews</h3>
                        <div className='flex items-center'>
                            <div className='text-amber-400'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                            </div>
                            <p className='text-neutral-500 ml-3 text-sm'>Based 2 Reviews</p>
                        </div>
                    
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h3 className='text-lg font-medium mb-3'>Write a  Review</h3>  
                        <div className='w-full'>
                            <form action="">
                                <div>
                                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Reviews..."></textarea>
                                </div>  
                                <div className='flex justify-end my-5'>
                                    <button  className='bg-amber-500 px-4 py-2 rounded-full text-gray-100 hover:bg-slate-700 transition duration-300'>Submit Reviews</button>
                                </div>  

                            </form>    
                        </div>  
                    </div>
                </div>
            
            </div>
         </div>
      
    </section>
  )
}

export default ProductDetails