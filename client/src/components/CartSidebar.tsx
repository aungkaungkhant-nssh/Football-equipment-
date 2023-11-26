import React, { useState } from 'react'
import Add from '../assets/images/add.jpg'
import { Link,useNavigate } from 'react-router-dom'
import useCart from '../hook/useCart'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { cartItemQtyDecrease, cartItemQtyIncrease, removeByIdCart } from '../features/products/cartSlice'
import { loadStripe } from '@stripe/stripe-js';
import useAuth from '../hook/useAuth'
import Axios from '../Axios'
import AnimatePlus from './Loading/AnimatePlus'
import { thousandSeparator } from '../helper/format'
import discountPrice from '../helper/discountPrice'
const stripeProimse= loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

type propType = {
    isCartOpen:boolean
    setIsCartOpen:(isCartOpen:boolean)=>void
}
const CartSidebar = ({isCartOpen,setIsCartOpen}:propType) => {
  const navigate =useNavigate();
  const {carts} = useCart();
  const dispatch:AppDispatch =  useDispatch();
  const {user} = useAuth();
  const [checkOutLoading,setCheckOutLoading] = useState<boolean>(false);
  
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
                    {
                         carts.map((cart:any)=>(
                            <div className='border border-gray-100 border-b-gray-300 py-5' key={cart._id}>
                                <div className='flex justify-between'>
                                    <div className='basis-[28%] mr-3'>
                                        <img src={cart.images[0].imageUrl} alt="" className='w-full' />
                                    </div>
                                    <div>
                                        <h3 className='font-bolder mb-2'>{cart.name}</h3>
                                        <p className='text-base text-neutral-500 mb-2'><span>Size : </span>{cart.size}</p>
                                        <div className='flex justify-between mt-4 items-center'>
                                            <p className='text-base text-neutral-500 mr-5'>{ cart.price * cart.qty} KS</p>
                                            <div className='flex items-center'> 
                                                <div className='border bg-gray-50  hover:border-gray-400 rounded-full px-4 cursor-pointer' onClick={()=>dispatch(cartItemQtyDecrease(cart._id))}>
                                                    <span className='text-2xl'>-</span>
                                                </div>
                                                <div className='mx-3'>{cart.qty}</div>
                                                <div className='border bg-gray-50 hover:border-gray-400 rounded-full px-4 cursor-pointer' onClick={()=>dispatch(cartItemQtyIncrease(cart._id))}>
                                                    <span className='text-2xl'>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='cursor-pointer' onClick={()=>dispatch(removeByIdCart(cart._id))}>
                                            <i className="fa-solid fa-xmark text-xl text-gray-500 hover:text-amber-500"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    
                        ))
                     }
                     </div>
               
            
            <div className='fixed  right-0 bottom-0 left-0'>
                <div className='flex justify-between px-4 mb-0 bg-white py-6'>
                    <h3>Total</h3>
                    <h3>{carts.reduce((acc,cart:any)=>acc+(cart.qty* cart.price),0)} KS</h3>
                </div>
                <div className='flex justify-center'>
                    <div className='basis-3/6 bg-gray-900 text-gray-50 py-4 text-center cursor-pointer hover:bg-gray-800 transition duration-300' onClick={goToCartPage}>
                        <span>View Cart</span>
                    </div>
                    <div className='basis-3/6 bg-amber-500 text-center py-4 cursor-pointer
                    hover:bg-amber-400 transition duration-300'
                    onClick={async()=>{
                        if(!user) {
                            setIsCartOpen(false);
                            return navigate("/login?redirect=checkout")
                        }
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
                    }}
                    >
                        {
                            checkOutLoading ? (
                               <AnimatePlus bgColor='bg-white' />
                            ):(
                                <span className='text-gray-50'>Check Out</span>
                            )
                        }
                      
                    </div>   
                </div>
             
            </div>
        </div>
    </div>
    
  )
}

export default CartSidebar