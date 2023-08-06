import React, { useEffect, useMemo, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { OrderType, deleteOrder, deleteSelectedItems, fetchLatestOrders, resetOrder, setSelectedOrderRows } from '../../features/orders/orderSlice'
import useOrder from '../../hook/useOrder'
import Loading from '../../components/Loading'
import SelectedRowsItemDelete from '../../components/SelectedRowsItemDelete'
import DataTable from 'react-data-table-component'
import { toast } from 'react-toastify'
import { resetProduct } from '../../features/products/productSlice'
import Tooltip from '../../components/Tooltip/Tooltip'

const Order = () => {
    const navigate = useNavigate()
    const dispatch:AppDispatch  = useDispatch()
    const [data,setData] = useState<OrderType []>([])
    const {orders,loading,selectedOrderRows,success} = useOrder() ;
    const [searchName,setSearchName] = useState<string>("")
    useEffect(()=>{
        dispatch(fetchLatestOrders())
    },[navigate])
    useEffect(()=>{
        setData(orders)
    },[orders])
      
    useEffect(()=>{
        if(success){
            toast.success('Delete Order Success', {
                position: toast.POSITION.TOP_RIGHT
            });
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
            selector:(row:any)=> row.customer[0].name,
            sortable:true
        },
        {
            name: 'Phone',
            selector:(row:any)=> row.phoneNumber,
            sortable:true
        },
        {
            name: 'Address',
            selector:(row:any)=> row.address,
            sortable:true
        },
        {
            name: 'Total Amount',
            selector:(row:any)=> row.totalAmount,
            sortable:true
        },
        {
            name: 'Date',
            selector:(row:any)=> "9/3/2023",
            sortable:true
        },
        {
            name:"Status",
            cell:(row:any)=><span className={`${row.status === 1 ?  'bg-green-200' : 'bg-red-200'} rounded-full px-3 py-2 ${row.status === 1 ?  'text-green-500' : 'text-red-500' } font-normal`}>{row.status===1 ? "ငွေရှင်းပြီး" : "ငွေမရှင်းရသေး"}</span>
        },
        {
            name: '',
            cell:(row:any)=>
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
        },
    ];
    useMemo(()=>{
        return setData(orders.filter((b)=>{
          return  b.customer[0].name && b.customer[0].name.toLowerCase().includes(searchName.toLowerCase())
            || b.phoneNumber && b.phoneNumber.toLowerCase().includes(searchName.toLowerCase())
            || b.address && b.address.toLowerCase().includes(searchName.toLowerCase())
        } ))
    },[searchName]) 
    console.log(orders) 
    const subHeaderComponentMemo:any =useMemo (()=>{
        return (
            <>
                <div className='w-[100%] flex justify-between items-center mb-5 border border-white border-b-gray-300 pb-5' style={{padding:"0px !important"}}>
                    <div className='flex justify-between items-center  px-4'>
                        <h3 className='text-xl font-bold'>Order Lists</h3>
                    
                    
                    </div>
                    <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                    <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                    <input type="text" placeholder='Search...'  className='focus:outline-none' value={searchName} onChange={(e)=>setSearchName(e.target.value)}/>
                    </div> 
                 
                
                </div>
                
            </>
          
              
        )
    },[searchName])
  return (
    <div className='my-10'>
        <div className='bg-white p-5 rounded shadow'>
            
          <div>
          {
                    loading ? (
                        <Loading bgColor='bg-amber-500' />
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
                                customStyles={
                                {
                                    headCells:{
                                        style:{
                                            fontSize:"16px",
                                            color:"#020617"
                                        }
                                    },
                                    cells:{
                                        style:{
                                            fontSize:"16px",
                                            padding:"15px",
                                            color:"#71717a"
                                        }
                                    }
                                }}
                                
                            />
                        </>
                    )
                }
            
          </div>
         
        </div>
   
    </div>
  )
}

export default Order