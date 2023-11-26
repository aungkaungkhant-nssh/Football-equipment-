import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Add from '../../assets/images/add.jpg'
import BreadCrumb from './BreadCrumb';
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import { fetchLatestOrdersByCustomerId } from '../../features/orders/orderSlice';
import useOrder from '../../hook/useOrder';
import Spinner from '../../components/Loading/Spinner';
import { getDayMonthAndYear } from '../../helper/dateFun';
import OrderList from '../../components/OrderList';
const Order = () => {

  const navigate = useNavigate();
  const dispatch:AppDispatch = useDispatch();
  const {orders,loading} = useOrder();

  useEffect(()=>{
    
    dispatch(fetchLatestOrdersByCustomerId())
  },[]);
  return (
    <section className='mx-2 md:mx-5 min-h-screen'>
            <BreadCrumb items={[
              {name:"Home",path:"/"},
              {name:"Orders",path:"/orders"},
            ]}/>
            {
              loading ? <Spinner />
              :orders.length===0?(
                <div className='flex justify-center items-center w-full mt-8'>
                  <h3 className='text-xl'>No orders Not found</h3>
                </div>
              )
              :(
                <div className=''>
                  <h3 className='my-3 text-xl font-bold my-6'>{orders.length} orders</h3>
                  {
                    orders.map((order,index)=>(
                      <OrderList order={order} key={order._id}  />
                    ))
                  }
                
                </div>
              )
            }
           
    </section>
  )
}

export default Order