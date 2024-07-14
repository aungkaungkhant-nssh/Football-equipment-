import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../features/products/productSlice';
import discountPrice from '../helper/discountPrice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { addToWishList } from '../features/products/wishListSlice';
import isCheckFavorite from '../helper/isCheckFavorite';
import useWishList from '../hook/useWishList';
import Rating from './Rating';
type PropsType = {
    products:ProductType[]
}
const NewArrival = ({products}:PropsType) => {
  const newArrivalItems:ProductType[] = products.filter((p)=>p.isNew);
  const dispatch:AppDispatch = useDispatch();
  const {wishLists} = useWishList();
  const navigate = useNavigate();
  return (
    <section className='md:w-10/12 md:mx-auto px-4 mb-5 relative '>
        <div className=' mb-6 w-full flex items-center justify-between'>
            <h3 className='text-xl tracking-wider uppercase font-thin '>New Arrivals</h3>
            <div className='bg-gray-300 h-0.5 basis-5/12 md:basis-7/12 lg:basis-8/12 xl:basis-9/12'></div>
        </div>
        <div className=' py-4'>
          
            <div className='flex w-full ' >
                <Swiper
                       breakpoints={{
                        280:{
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                          },
                      }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={2}
                        navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
             
                        onSlideChange={() => console.log('slide change')}
                >
                    
                {
                    newArrivalItems.length>0 && newArrivalItems.map((item)=>(
                        <SwiperSlide key={item._id}>
                            
                                <div className='border border-gray-200 p-2 mr-4 group cursor-pointer' onClick={()=>navigate(`/product_details/${item._id}`)}>
                                    
                                        <div className='inline-block relative w-full'>
                                            <img src={item.images[0].imageUrl} alt="" className='w-full' />
                                            {
                                                item.images.length > 1 && (
                                                    <img src={item.images[1].imageUrl} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                                                )
                                            }
                                           
                                            <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                                <div className='flex justify-between items-center '>
                                                    <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                                    <p className='text-sm'>New Arrivals</p>
                                                    </div>
                                                    <div className='cursor-pointer' onClick={(e)=>{
                                                        e.stopPropagation();
                                                        dispatch(addToWishList(item))
                                                    }}>
                                                       {
                                                        item._id && isCheckFavorite(wishLists,item._id)? <i className="fa-solid fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i> :<i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                       }  
                                                    </div>
                                                </div>
                                            </div>
                                          
                                            {
                                              item.discountPercent!=0 && (
                                                    <div className='absolute z-50 bottom-0 left-0 right-0'>
                                                        <div className='bg-gray-200 py-2 text-center'>
                                                            <h3 className='uppercase text-slate-700'>{item.discountPercent}% off</h3>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    
                                        <div className='border border-gray-50  py-3  p-3'>
                                            <h3 className='text-xl text-slate-700 text-left'>{item.brand[0].name}</h3>
                                            <h2 className='text-neutral-500 text-sm my-3 uppercase tracking-wider'>{item.name}</h2>
                                            <div className='my-4 text-amber-400'>
                                                <Rating rating={item.rating || 0} numReviews={0}/>
                                            </div>  
                                            <div className='flex'>
                                                 {
                                                    item.discountPercent ? (
                                                        <>
                                                            <p className='text-slate-700'>{discountPrice(+item.price,item.discountPercent)} ks</p>
                                                            <p className='ml-7 text-neutral-400 line-through '>{item.price} Ks</p>
                                                        </>
                                                        
                                                    ):(
                                                        <p className='text-slate-700'>{item.price} Ks</p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                </div>
                      
                         </SwiperSlide>
                    ))
                }
                 

                </Swiper>
               
            </div>
           
          
        
           
        </div>
    </section>
  )
}

export default NewArrival