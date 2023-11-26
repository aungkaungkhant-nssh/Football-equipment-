import React from 'react'
import Modal from 'react-modal';
import OrderList from './OrderList';
import { OrderType } from '../features/orders/orderSlice';

interface propType{
    modalOpen:boolean,
    order:OrderType,
    setModalOpen:(modalOpen:boolean)=>void
}

const OrderProduct = ({modalOpen,setModalOpen,order}:propType) => {
  return (
    
    <Modal isOpen={modalOpen}
    onRequestClose={
      ()=>{
          setModalOpen(false)
      }
    }
      style={{
          overlay:{
              zIndex:99999
          }
      }}
    >
  
      <button style={{
          position:"fixed",
          top:10,
          right:20
          
      }}
      onClick={()=>setModalOpen(false)}
      >
          <div className='group bg-amber-100 shadow-lg rounded-full w-[50px] h-[50px] text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300 flex items-center justify-center'>
              <div className='bg-amber-500 w-[60%] rounded-full h-[60%] flex items-center justify-center p-2 group-hover:bg-white'>
                   <i className="fa-solid fa-xmark text-white group-hover:text-amber-500"></i>
              </div>
           
          </div>
          
      </button>
        <OrderList order={order}/>
        

    </Modal>
  )
}

export default OrderProduct