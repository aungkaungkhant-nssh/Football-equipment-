import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'
import { CustomerType, deleteCustomer, deleteSelectedItems, fetchLatestCustomers, resetCustomer, setSelectedCustomerRows } from '../../features/customers/customerSlice';
import { AppDispatch } from '../../app/store';
import useCustomer from '../../hook/useCustomer';
import SelectedRowsItemDelete from '../../components/SelectedRowsItemDelete';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';
import Tooltip from '../../components/Tooltip/Tooltip';
import AnimatePlus from '../../components/Loading/AnimatePlus';
import tableTheme from '../../helper/tableTheme';
import useDarkSide from '../../hook/useUi';

  

const Customer = () => {
    const navigate = useNavigate();
    const dispatch:AppDispatch =   useDispatch();
    const {customers,loading,selectedCustomerRows,success} = useCustomer();
    const [data,setData] = useState(customers);
    const [searchName,setSearchName] = useState("");
    const {theme} =  useDarkSide()
    tableTheme(theme)
    useEffect(()=>{
        dispatch(fetchLatestCustomers())
    },[navigate])
    useEffect(()=>{
        setData(customers)
    },[customers])
     
    useEffect(()=>{
        if(success){
            toast.success('Delete Customer Success');
            dispatch(resetCustomer(""))
            navigate("/admin/customers")
        }
    },[customers,navigate])
    const columns = [
        {
            name: 'Name',
            selector:(row:any)=> row.name,
            sortable:true
        },
        {
            name: 'Email',
            selector:(row:any)=> row.email,
            sortable:true
        },
        {
            name: 'Action',
            cell:(row:any)=>
            <div>
                <Tooltip position='top' tooltipsText='Delete Customer'>
                    <button 
                    className='border group border-gray-300 rounded text-center px-2 py-1  hover:bg-red-400 hover:border-red-400 transition all duration-500'
                    onClick={()=>{
                        const deleteSure:boolean =confirm("Are you Sure want to delete?")
                        if(deleteSure){
                            dispatch(deleteCustomer(row._id))
                        }
                        
                    }}>
                        <i className="fa-regular fa-trash-can text-gray-500 text-xl cursor-pointer group-hover:text-white  transition all duration-500"></i>
                    </button>

                </Tooltip>
                  
            </div>
        },
    ];
    const subHeaderComponentMemo:any =useMemo (()=>{
        return (
            <>
                <div className='w-[100%] flex justify-between items-center mb-5   pb-5 border border-transparent  dark:border-b-gray-500 border-b-gray-300' style={{padding:"0px !important"}}>
                    <div className='flex justify-between items-center  px-4'>
                        <h3 className='text-xl font-bold dark:text-gray-100'>Customer Lists</h3>
                    </div>
                    <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                        <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                        <input type="text" placeholder='Search...'  className='focus:outline-none bg-transparent' value={searchName} onChange={(e)=>setSearchName(e.target.value)}/>
                    </div> 
                    <Tooltip position='top' tooltipsText='Add customer'>
                        <button onClick={()=>navigate("/admin/addCustomer" )}  className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                                    <i className="fa-solid fa-circle-plus text-2xl"></i>
                        </button>
                    </Tooltip>
                </div>
                
            </>
          
              
        )
    },[searchName])
    useMemo(()=>{
        return setData(customers.filter((b)=>b.name && b.name.toLowerCase().includes(searchName.toLowerCase()) ))
    },[searchName]) 
  return (
    <div className='my-10'>
            <div className='bg-white dark:bg-gray-900 p-5 rounded shadow'>
                
                <div>
                {
                    loading ? (
                        <AnimatePlus bgColor='bg-amber-500' />
                    )
                    :  
                   (
                        <>
                            {
                                selectedCustomerRows.length > 0 && (
                                    <SelectedRowsItemDelete
                                        selectedRows={selectedCustomerRows}
                                        setSelectedRows={()=>dispatch(setSelectedCustomerRows([]))}
                                        deleteSelected={()=>{

                                       
                                           dispatch(deleteSelectedItems(selectedCustomerRows.map((s:CustomerType)=>s._id)))
                                           dispatch(setSelectedCustomerRows([]))
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
                                theme="solarized"
                                onSelectedRowsChange={({selectedRows})=>{
                                   
                                   dispatch(setSelectedCustomerRows(selectedRows))
                                }}
                                customStyles={
                                    {
                                        headCells:{
                                            style:{
                                                fontSize:"17px",
                                                color:"#71717a",
                                                fontWeight:"bold"
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
            </div>
           
    </div>
  )
}

export default Customer