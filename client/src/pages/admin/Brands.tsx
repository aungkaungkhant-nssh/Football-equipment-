import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store';
import { BrandType, deleteBrand, deleteSelectedItems, fetchLatestBrands, resetBrand,setSelectedBrandRows } from '../../features/brands/brandSlice';
import useBrand from '../../hook/useBrand';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import SelectedRowsItemDelete from '../../components/SelectedRowsItemDelete';
import Tooltip from '../../components/Tooltip/Tooltip';
import AnimatePlus from '../../components/Loading/AnimatePlus';
import tableTheme from '../../helper/tableTheme';
import useDarkSide from '../../hook/useUi';
const Brands = () => {
    const dispatch:AppDispatch = useDispatch();
    const {brands,loading,success,selectedBrandRows} = useBrand();

    const [data,setData] = useState(brands);
    const [searchName,setSearchName] = useState("")
    const navigate = useNavigate();
    const {theme} = useDarkSide();
    tableTheme(theme)

    useEffect(()=>{
            dispatch(fetchLatestBrands())
          
    },[navigate])
    useEffect(()=>{
        setData(brands)
    },[brands])

    useEffect(()=>{
        if(success){
            toast.success('Delete Brand Success');
            dispatch(resetBrand(""))
            navigate("/admin/brands")
        }
    },[brands])

    const columns = [
        {
            name:"Logo",
            cell:(row:any)=>
                <div>
                    <img src={row?.logo?.imageUrl} alt="" className='w-[120px]' />
                </div>
        },
        {
            name: 'Name',
            selector:(row:any)=> row.name,
            sortable:true
        },
        
        {
            name: 'Action',
            cell:(row:any)=>
            <div className='flex'>
                <Tooltip tooltipsText='Edit Brand' position='top'>
                     <button 
                        onClick={()=>navigate(`/admin/brand/${row._id}`)}
                        className='border group border-gray-300 rounded text-center px-2 py-1  hover:bg-amber-400 hover:border-amber-400 mr-2  transition all duration-500'
                    >
                        <i className="fa-solid fa-pen text-lg cursor-pointer text-gray-500 group-hover:text-white  transition all duration-500"></i>
                    </button>

                </Tooltip>
                <Tooltip tooltipsText='Delete Brand' position='top'>
                     <button 
                         className='border group border-gray-300 rounded text-center px-2 py-1  hover:bg-red-400 hover:border-red-400  transition all duration-500'
                        onClick={()=>{
                        const deleteSure:boolean =confirm("Are you Sure want to delete?")
                        if(deleteSure){
                            dispatch(deleteBrand(row._id))
                        }
                        
                    }}>
                        <i className="fa-regular fa-trash-can text-gray-500 text-lg cursor-pointer group-hover:text-white  transition all duration-500"></i>
                    </button>
                </Tooltip>
                    
            </div>
        },
    ];
   
    useMemo(()=>{
        return setData(brands.filter((b)=>b.name && b.name.toLowerCase().includes(searchName.toLowerCase()) ))
    },[searchName]) 
    const subHeaderComponentMemo:any =useMemo (()=>{
        return (
            <>
                <div className='w-[100%] flex justify-between items-center mb-5  pb-5 border border-transparent  dark:border-b-gray-500 border-b-gray-300' style={{padding:"0px !important"}}>
                    <div className='flex justify-between items-center  px-4'>
                        <h3 className='text-xl font-bold dark:text-gray-100'>Brand Lists</h3>
                    
                    
                    </div>
                    <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                        <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                        <input type="text" placeholder='Search...'  className='focus:outline-none bg-transparent' value={searchName} onChange={(e)=>setSearchName(e.target.value)}/>
                    </div> 
                    <Tooltip position='top' tooltipsText='Add Brand'>
                        <button onClick={()=>navigate("/admin/addbrand")}  className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                                    <i className="fa-solid fa-circle-plus text-2xl"></i>
                        </button>
                    </Tooltip>
                 
                
                </div>
                
            </>
          
              
        )
    },[searchName])
  return (
    <div className='my-10'>
        <div className='bg-white p-5 rounded shadow dark:bg-gray-900'>
         
            <div className=' px-4'>
                {
                    loading ? (
                        <AnimatePlus bgColor='bg-amber-500' />
                    )
                    :  
                   (
                        <>
                            {
                                selectedBrandRows.length > 0 && (
                                    <SelectedRowsItemDelete
                                        selectedRows={selectedBrandRows}
                                        setSelectedRows={()=>dispatch(setSelectedBrandRows([]))}
                                        deleteSelected={()=>{
                                           dispatch(deleteSelectedItems(selectedBrandRows.map((s:BrandType)=>s._id)))
                                           dispatch(setSelectedBrandRows([]))
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
                                   
                                   dispatch(setSelectedBrandRows(selectedRows))
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

        </div>
    </div>
  )
}

export default Brands