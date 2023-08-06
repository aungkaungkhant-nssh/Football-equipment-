import { useEffect, useState,useMemo } from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store';
import { fetchLatestCategories, resetCategory, CategoryType, deleteCategory, deleteSelectedItems, setSelectedCategoryRows } from '../../features/categories/categorySlice';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useCategory from '../../hook/useCategory';
import DataTable from 'react-data-table-component';
import SelectedRowsItemDelete from '../../components/SelectedRowsItemDelete';
import Tooltip from '../../components/Tooltip/Tooltip';

const Categories = () => {
    const dispatch:AppDispatch = useDispatch();
    const {categories,loading,success} = useCategory();
    const [data,setData] = useState(categories);
    const [searchName,setSearchName] = useState("")
    const navigate = useNavigate();
    const [selectedRows,setSelectedRows] = useState<CategoryType []>([])
    
    useEffect(()=>{
        dispatch(fetchLatestCategories())
    },[navigate])
    useEffect(()=>{
        setData(categories)
    },[categories])
    useEffect(()=>{
        if(success){
            toast.success('Delete category success', {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(resetCategory(""))
            navigate("/admin/categories")
        }
    },[categories])
    const columns = [
        {
            name: 'Name',
            selector:(row:any)=> row.name,
            sortable:true
        },
        {
            name: 'Action',
            cell:(row:any)=>
            <div className='flex'>
                <Tooltip position='top' tooltipsText='Edit Category'>
                    <button 
                        onClick={()=>navigate(`/admin/categories/${row._id}`)}
                        className='border group border-gray-300 rounded text-center px-2 py-1  hover:bg-amber-400 hover:border-amber-400 mr-2  transition all duration-500'
                    >
                        <i className="fa-solid fa-pen text-lg cursor-pointer text-gray-500 group-hover:text-white"></i>
                    </button>
                </Tooltip>
                <Tooltip position='top' tooltipsText='Delete Category'>
                    <button 
                         className='border group border-gray-300 rounded text-center px-2 py-1  hover:bg-red-400 hover:border-red-400  transition all duration-500'
                        onClick={()=>{
                        const deleteSure:boolean =confirm("Are you Sure want to delete?")
                        if(deleteSure){
                            dispatch(deleteCategory(row._id))
                        }
                    }}>
                        <i className="fa-regular fa-trash-can text-gray-500 text-lg cursor-pointer group-hover:text-white"></i>
                    </button>
                </Tooltip>
                
            </div>
        },
    ];
    useMemo(()=>{
        return setData(categories.filter((b)=>b.name && b.name.toLowerCase().includes(searchName.toLowerCase()) ))
    },[searchName]) 
    const subHeaderComponentMemo:any =useMemo (()=>{
        return (
            <>
                <div className='w-[100%] flex justify-between items-center mb-5 border border-white border-b-gray-300 pb-5' style={{padding:"0px !important"}}>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-xl font-bold'>Category Lists</h3>
                    </div>
                    <div className="border broder-gray-100 rounded py-2 px-4 rounded-full flex items-center text-gray-500 font-thin ">
                        <i className="fa-solid fa-magnifying-glass mr-3  "></i>
                        <input type="text" placeholder='Search...'  className='focus:outline-none' value={searchName} onChange={(e)=>setSearchName(e.target.value)}/>
                    </div> 
                    <Tooltip position='top' tooltipsText='Add Category'>
                        <button onClick={()=>navigate("/admin/addCategory" )} className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                                <i className="fa-solid fa-circle-plus text-2xl"></i>
                        </button>
                    </Tooltip>
                
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
                    :(
                        <>
                            {
                                selectedRows.length > 0 && (
                                    <SelectedRowsItemDelete
                                        selectedRows={selectedRows}
                                        setSelectedRows={()=>dispatch(setSelectedCategoryRows([]))}
                                        deleteSelected={()=>{
                                            dispatch(deleteSelectedItems(selectedRows.map((s)=>s._id)))
                                            dispatch(setSelectedCategoryRows([]))
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
                                    setSelectedRows(selectedRows)
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

export default Categories