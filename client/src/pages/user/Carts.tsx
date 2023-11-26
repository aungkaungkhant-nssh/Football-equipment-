import React, { useState } from 'react'
import Add from '../../assets/images/add.jpg'
import { Link,useNavigate } from 'react-router-dom'
import BreadCrumb from './BreadCrumb';
import useCart from '../../hook/useCart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { cartItemQtyDecrease, cartItemQtyIncrease, removeByIdCart } from '../../features/products/cartSlice';
import useAuth from '../../hook/useAuth';
import {loadStripe} from '@stripe/stripe-js';
import Axios from '../../Axios';
import AnimatePlus from '../../components/Loading/AnimatePlus';
import { addToWishList } from '../../features/products/wishListSlice';
import discountPrice from '../../helper/discountPrice';
import { thousandSeparator } from '../../helper/format';
const stripeProimse= loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
const Carts = () => {
  const navigate = useNavigate();
  const {carts} = useCart();
  const dispatch:AppDispatch= useDispatch();
  const {user} = useAuth();
  const [checkOutLoading,setCheckOutLoading]  = useState<boolean>(false)
  return (
    <section className='px-4 h-screen'>
         <BreadCrumb items={[{name:"Home",path:"/"},{name:"Cart",path:"/carts"}]}/>

         <section className='mt-10 max-w-screen-md mx-auto '>
         {
          carts.length === 0 ? (
            <div className='text-center'>
                No Cart Items Not found
            </div>
          ):(
            <>
              <div className='flex md:justify-between md:items-center mb-5 flex-col md:flex-row'>
                  <div className='hidden md:block'>
                    <Link to="/products" className='text-sm uppercase bg-gray-100 border-gray-200 border rounded-full py-3 px-4 text-gray-500 shadow-inner hover:bg-amber-500 hover:text-gray-100 transition all duration-300'>Continue shopping</Link>
                  </div>
                  <div>
                    <h3 className='uppercase text-neutral-900 text-2xl md:text-2xl font-thin tracking-wider text-center'>my shopping cart</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                      <div className='block md:hidden mt-5'>
                        <Link to="/products" className='text-xs uppercase bg-gray-100 border-gray-200 border rounded-full py-3 px-4 text-gray-500 shadow-inner hover:bg-amber-500 hover:text-gray-100 transition all duration-300'>Continue shopping</Link>
                      </div>
                      <button className='mt-5 md:mt-0 md:text-sm text-xs bg-white border border-gray-300 text-gray-700 text-sm uppercase px-4 py-2 rounded-full hover:bg-amber-500 hover:text-gray-100 transition all duration-300'>Checkout</button>
                  </div>
              </div>
              <div className='mt-10 px-3'>
                {
                  carts.map((cart)=>(
                    <div key={cart._id} className='flex justify-around items-start border border-white border-b-gray-200 py-3'>
                        <div className='w-[25%] md:w-[10%] mr-3'>
                          <img src={cart.images[0].imageUrl} alt="" className='w-[300px]' />
                        </div>
                        <div className='flex  w-[75%] flex-col md:flex-row'>
                          <div className='basis-[50%]'>
                              <h3 className=' inline-block text-sm md:text-base text-neutral-900 font-bold mb-2'>{cart.name}</h3>
                              <p className='text-sm'>Size : 
                              <span className='text-gray-500 '>{cart.size}</span>
                                  
                              </p>
                          </div>
                          <div className='basis-[50%]'>
                              <h3 className='mb-2 text-sm mt-3 md:text-lg md:mt-0 text-amber-500'>{+cart.price * cart.qty} KS</h3>
                              <button className='mr-5 hidden md:inline' onClick={()=>dispatch(addToWishList(cart))}>
                                <i className="fa-regular fa-heart text-gray-400 text-lg hover:text-amber-500 transition all duration-300"></i>
                              </button>
                              <button className='hidden md:inline' onClick={()=>dispatch(removeByIdCart(cart._id))}>
                                <i className="fa-regular fa-trash-can text-gray-400 text-lg hover:text-amber-500 trasition all duration-300"></i>
                              </button>
                          </div>
                          
                        </div>
                        <div className='flex items-center justify-center w-[15%] mr-3'>
                            <div  onClick={()=>dispatch(cartItemQtyDecrease(cart._id))}  className='border bg-gray-50  hover:border-gray-400 rounded-full px-2 cursor-pointer'>
                                <span className='text-xl'>-</span>
                            </div>
                            <div className='mx-3 text-sm md:text-base '>{cart.qty}</div>
                            <div onClick={()=>dispatch(cartItemQtyIncrease(cart._id))} className='border bg-gray-50 hover:border-gray-400 rounded-full px-2 cursor-pointer'>
                                <span className='text-xl'>+</span>
                            </div>
                        </div>
                    </div>
                  ))
                }
                    
                
              </div>
              <div className='flex justify-end my-5 mx-6'>
                <div className='w-[50%] text-gray-500 font-thin text-base'>
                    <div className='flex border border-white border-b-gray-300 py-4 justify-between'>
                          <h4 className=''>Initial value</h4>
                          <h3>{thousandSeparator(carts.reduce((acc,cart:any)=>acc+(cart.qty* cart.price),0))}</h3>
                    </div>
                    <div className='flex border border-white border-b-gray-300 py-4 justify-between'>
                          <h4>Discount</h4>
                          <h3>0 KS</h3>
                    </div>
                    <div className='flex  py-4 justify-between'>
                          <h4 className='text-amber-500'>Total : </h4>
                          <h3 className='text-amber-500'>{thousandSeparator(carts.reduce((acc,cart:any)=>acc+(cart.qty* cart.price),0))}  KS</h3>
                    </div>
                </div>
              
              </div>
              <div className='flex justify-between items-center  mt-5 '>
                  <div className=''>
                    <Link to="/products" className='text-sm uppercase bg-gray-100 border-gray-200 border rounded-full py-3 px-4 text-gray-500 shadow-inner hover:bg-amber-500 hover:text-gray-100 transition all duration-300'>Continue shopping</Link>
                  </div>
                  <div>
                    <button onClick={async()=>{
                    
                      if(user){
                        try{
                          setCheckOutLoading(true)
                          const stripe =await stripeProimse
                          //call the backend to create checkout session...
                          const checkOutSession =  await Axios.post(`/api/checkout/create-checkout-session`,{items:carts,email:user?.email},{
                            headers:{
                              Authorization:`Bearer ${user.token}`
                            }
                          })
                          const result = await stripe?.redirectToCheckout({
                            sessionId:checkOutSession.data.id
                          })
                          setCheckOutLoading(false)
                          if(result?.error)alert(result.error.message)
                        }catch(err){
                          console.log(err)
                        }
                       
                      }else{
                        navigate("/login")
                      }
                     
                    }} className='uppercase bg-amber-500 rounded-full px-4 py-3 text-white text-sm hover:bg-amber-600 transition all duration-300'>
                      {
                        checkOutLoading ? (
                          <AnimatePlus bgColor='bg-white' />
                        ):(
                          "Checkout"
                        )
                      }
                    </button>
                  </div>
              </div>
            </>
          )
         }
         </section>
    
    </section>
  
  )
}

export default Carts