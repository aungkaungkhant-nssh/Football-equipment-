import React, { useEffect, useMemo, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { OrderType, deleteOrder, deleteSelectedItems, fetchLatestOrders, resetOrder, setSelectedOrderRows } from '../../features/orders/orderSlice'
import useOrder from '../../hook/useOrder'
import SelectedRowsItemDelete from '../../components/SelectedRowsItemDelete'
import DataTable from 'react-data-table-component'
import toast from 'react-hot-toast'

import Tooltip from '../../components/Tooltip/Tooltip'
import AnimatePlus from '../../components/Loading/AnimatePlus'
import tableTheme from '../../helper/tableTheme'
import useDarkSide from '../../hook/useUi'
import OrderList from '../../components/OrderList'
import OrderProduct from '../../components/OrderProduct'

const Order = () => {
    const navigate = useNavigate()
    const dispatch:AppDispatch  = useDispatch()
    const [data,setData] = useState<OrderType []>([])
    const {orders,loading,selectedOrderRows,success} = useOrder() ;
    const [searchName,setSearchName] = useState<string>("");
    const {theme} = useDarkSide();
    const [modalOpen,setModalOpen] = useState(false);
    const [order,setOrder] = useState<OrderType>();

    tableTheme(theme)
    useEffect(()=>{
        dispatch(fetchLatestOrders())
    },[navigate])
    useEffect(()=>{
        setData(orders)
    },[orders])
      
    useEffect(()=>{
        if(success){
            toast.success('Delete Order Success');
            dispatch(resetOrder(""))
            navigate("/admin/orders")
        }
    },[orders])
    const columns = [
        {
            name: 'Id',
            selector:(row:any)=> row._id,
            sortable:true
        },
        {
            name: 'Name',
            selector:(row:any)=> row.name,
            sortable:true
        },
        {
            name: 'Phone',
            selector:(row:any)=> row.phone,
            sortable:true
        },
        {
            name: 'City',
            selector:(row:any)=> row.city,
            sortable:true
        },
        {
            name: 'Town',
            selector:(row:any)=> row.town,
            sortable:true
        },
        {
            name: 'Total Amount',
            selector:(row:any)=> `${row.totalAmount} (MMK)`,
            sortable:true
        },
        {
            name: 'Date',
            selector:(row:any)=> "9/3/2023",
            sortable:true
        },
        {
            name: '',
            cell:(row:any)=>
            <>
                <div className='relative tooltip-container'>
                        <Tooltip position='top' tooltipsText='Delete Order'>
                            <button 
                                className='border  border-gray-300 rounded text-center px-2 py-1  hover:bg-red-400 hover:border-red-400 transition all duration-300 '
                                onClick={()=>{
                                const deleteSure:boolean =confirm("Are you Sure want to delete?")
                                if(deleteSure){
                                    dispatch(deleteOrder(row._id))
                                }
                            }}>
                                <i className="fa-regular fa-trash-can text-gray-500 text-lg cursor-pointer group-hover:text-white transition all duration-300 "></i>
                            </button> 
                        </Tooltip>
                    
                </div>
                <div className='relative tooltip-container  ml-5'>
                        <Tooltip position='top' tooltipsText='Order Products'>
                            <button 
                                className='border  border-gray-300 rounded text-center px-2 py-1  hover:bg-amber-400 hover:border-amber-400 transition all duration-300 '
                                onClick={()=>{
                                setModalOpen(true);
                                setOrder(orders.find((order:OrderType)=> order._id === row._id))
                           
                            }}>
                                <i className="fa-solid fa-circle-info text-gray-500 text-lg cursor-pointer group-hover:text-white transition all duration-300 "></i>
                            </button> 
                        </Tooltip>
                    
                </div>
            </>
           
        },
        
    ];
    useMemo(()=>{
        return setData(orders.filter((b:OrderType)=>{
          return  b.name && b.name.toLowerCase().includes(searchName.toLowerCase())
            || b.phone && b.phone.toLowerCase().includes(searchName.toLowerCase())
            || b.city && b.city.toLowerCase().includes(searchName.toLowerCase())
        } ))
    },[searchName]) 
    console.log(orders) 
    const subHeaderComponentMemo:any =useMemo (()=>{
        return (
            <>
                <div className='w-[100%] flex justify-between items-center mb-5  pb-5 border border-transparent  dark:border-b-gray-500 border-b-gray-300' style={{padding:"0px !important"}}>
                    <div className='flex justify-between items-center  px-4'>
                        <h3 className='text-xl font-bold dark:text-gray-100'>Order Lists</h3>
                    
                    
                    </div>
                    <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                    <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                    <input type="text" placeholder='Search...'  className='focus:outline-none bg-transparent' value={searchName} onChange={(e)=>setSearchName(e.target.value)}/>
                    </div> 
                 
                
                </div>
                
            </>
          
              
        )
    },[searchName])
  return (
    <div className='my-10'>
        <div className='bg-white p-5 rounded shadow dark:bg-gray-900'>
          <div>
          {
                    loading ? (
                        <AnimatePlus bgColor='bg-amber-500' />
                    )
                    :  
                   (
                        <>
                            {
                                selectedOrderRows.length > 0 && (
                                    <SelectedRowsItemDelete
                                        selectedRows={selectedOrderRows}
                                        setSelectedRows={()=>dispatch(setSelectedOrderRows([]))}
                                        deleteSelected={()=>{
                                           dispatch(deleteSelectedItems(selectedOrderRows.map((s:OrderType)=>s._id)))
                                           dispatch(setSelectedOrderRows([]))
                                        }}
                                    />
                                )
                            }
                         
                             <DataTable
                                subHeader
                                highlightOnHover={true}
                                pointerOnHover
                                subHeaderComponent={subHeaderComponentMemo}
                                selectableRows
                                pagination
                                columns={columns}
                                data={data}
                                onSelectedRowsChange={({selectedRows})=>{
                                   
                                   dispatch(setSelectedOrderRows(selectedRows))
                                }}
                                theme='solarized'
                                customStyles={
                                {
                                    headCells:{
                                        style:{
                                            fontSize:"16px",
                                            color:"#71717a"
                                        }
                                    },
                                    cells:{
                                        style:{
                                            fontSize:"16px",
                                            padding:"15px",
                                            color:"#71717a"
                                        }
                                    },
                                    
                                }}
                                
                            />
                        </>
                    )
                }
            
          </div>
           {
                order && (
                    <OrderProduct order={order} modalOpen={modalOpen} setModalOpen={setModalOpen} />
                )
           }     
         
        </div>
   
    </div>
  )
}

export default Order