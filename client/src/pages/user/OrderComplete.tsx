import React, { useEffect } from 'react'
import useCart from '../../hook/useCart'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { removeAllCart } from '../../features/products/cartSlice';
import { useNavigate } from 'react-router-dom';
const OrderComplete = () => {
  const {carts} = useCart();
  const dispatch:AppDispatch =  useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(carts) dispatch(removeAllCart(""))
  },[])
  return (
   <section>
        
         <div className='flex flex-col items-center justify-center mt-8'>
              <div>
               <i className="fa-regular fa-circle-check text-7xl md:text-9xl text-amber-500"></i>
               
              </div>
              <h3 className='mt-5 text-xl font-bold'>Your Order is Complete</h3>
              <p className='my-4  font-thin text-neutral-400'>You will be receiving a notification with order details</p>
              <button className='bg-amber-500 rounded text-white py-1 px-3 hover:bg-amber-600 transition all duration-300' onClick={()=>navigate("/products")}>Continue To Shopping</button>
         </div>
   </section>
  )
}

export default OrderComplete