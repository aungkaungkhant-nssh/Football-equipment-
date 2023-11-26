import React from 'react'
import { OrderType } from '../features/orders/orderSlice'
import { getDayMonthAndYear } from '../helper/dateFun';
type propType = {
    order:OrderType,
  
}

const OrderList = ({order}:propType) => {

  return (
    <div className='border-gray-200 border rounded mb-3' key={order._id}>
        <div className='bg-gray-100 flex justify-between p-3 rounded'>
    
                <div className='mr-8 '>
                    <h3 className='text-base md:text-base font-bold mb-2'>Order_Date</h3>
                    <span className='text-amber-500 text-xs md:text-base font-thin'>{getDayMonthAndYear(order.createdAt)}</span>
                </div>
                <div>
                    <h3 className='text-base md:text-base font-bold mb-2'>Total Amount</h3>
                    <span className='text-amber-500 text-xs md:text-base font-thin'>{order.totalAmount} (MMK)</span>
                </div>
        
                <div className='flex-1'> 
                    <h6 className='text-base md:text-base  font-bold mb-2 text-right'><span className='hidden md:inline'>OrderId -</span>  #{order._id?.substring(0,10)}.... </h6>
                    <h3 className='text-amber-500 text-xs md:text-base font-thin text-right'>{order.orderData.length} Items</h3>
                </div>
        </div>
        <div className='my-3 flex flex-wrap'>
                {
                    order.orderData.map((od:any,index:number)=>(
                        <div className='relative'>
                            <div className='absolute top-1 right-2 bg-amber-500 w-[28px] h-[28px] text-center rounded-full'>
                                    {order.product[index].quantity}
                            </div>
                            <img className='w-[120px] m-2' src={od.images[0].imageUrl} alt="" />
                        </div>
                 
                    ))
                }
        

            
        </div>
  </div>
  )
}

export default OrderList