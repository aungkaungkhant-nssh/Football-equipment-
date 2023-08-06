import React, { useEffect, useState,useMemo, ChangeEvent, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useProduct from '../../hook/useProduct'
import { AppDispatch } from '../../app/store'
import { useDispatch } from 'react-redux'
import { destroyProduct, fetchLatestProducts, resetProduct, setSelectedProductRows,deleteSelectedItems, filteredByCategory, setDisplayItems, filteredByBrand, setCurrentPage, lastAdded} from '../../features/products/productSlice'
import Loading from '../../components/Loading'
import { toast } from 'react-toastify'
import useCategory from '../../hook/useCategory'
import { fetchLatestCategories } from '../../features/categories/categorySlice'
import ReactPaginate from 'react-paginate'
import { fetchLatestBrands } from '../../features/brands/brandSlice'
import useBrand from '../../hook/useBrand'
import Tooltip from '../../components/Tooltip/Tooltip'
const Products = () => {
   const {products,loading,success,pageCount,limit,displayItems,currentPage} = useProduct();
   const {categories} = useCategory();
    const {brands}  = useBrand()
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [searchName,setSearchName] = useState("")
    const [moreButton,setMoreButton] = useState<string | undefined>("")

    useEffect(()=>{
            dispatch(fetchLatestProducts())
            dispatch(fetchLatestCategories())
            dispatch(fetchLatestBrands())
    },[navigate]);
    const startIndex = currentPage * limit;
    const endIndex = startIndex + limit;

    useEffect(()=>{
        dispatch(setDisplayItems(products.slice(startIndex,endIndex)))
    },[currentPage,products])
   useEffect(()=>{
    if(success){    
        toast.success('Delete Product success', {
            position: toast.POSITION.TOP_RIGHT
        });
        dispatch(resetProduct(""))
        navigate("/admin/products")
    }
   
   },[products])
  
  
  return (
    <div className='my-10'>
        {/* header */}
        <div className=' bg-white  p-5  rounded shadow' >
            <div className='px-4'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-bold'>Product Lists</h3>
                    <div>
                         <input type="text" value={searchName} onChange={(e)=>{
                            setSearchName(e.target.value)
                            const filtered = products.filter((p)=>p.name.toLowerCase().includes(e.target.value.toLowerCase()))
                            setDisplayItems(filtered.slice(0,0+limit))
                            dispatch(setCurrentPage(0))
                         }} placeholder='search' className='border border-gray-300 px-3 py-2 rounded text-lg focus:outline-amber-500' />
                    </div>
                    <div>
                        <select onChange={(e)=>dispatch(filteredByCategory(e.target.value))} className='px-3 py-2 focus:outline-amber-500 bg-transparent border border-gray-300 rounded text-gray-500'>
                            <option value="">Catgegory</option>
                             {
                                 categories.length > 0 && categories.map((cat)=>(
                                    <option value={cat._id} key={cat._id}>{cat.name}</option>
                                ))
                             }
                        </select>
                    </div>
                    <div>
                        <select onChange={(e)=>dispatch(filteredByBrand(e.target.value))} className='px-3 py-2 focus:outline-amber-500 bg-transparent border border-gray-300 rounded text-gray-500'>
                            <option value="">Brand</option>
                             {
                                brands.length > 0 && brands.map((brand)=>(
                                    <option value={brand._id} key={brand._id}>{brand.name}</option>
                                ))
                             }
                        </select>
                    </div>
                    <button onClick={()=>dispatch(lastAdded(""))} className='cursor-pointer border border-gray-300 rounded  py-1 w-[150px] px-2 py-1 flex items-center justify-between'>
                        <span className='mr-1 text-gray-500'>Last added</span>
                        <i className="fa-solid fa-up-down text-gray-500"></i>
                    </button>
                    <Tooltip tooltipsText='Add Product' position='top'>
                        <button onClick={()=>navigate("/admin/addproduct")} className='bg-amber-100 shadow-lg rounded-full px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white transition duration-300'>
                                    <i className="fa-solid fa-circle-plus text-2xl"></i>
                        </button>
                    </Tooltip>
                    
                </div>
              
            </div>

        </div>
        {/* product lists */}
        <div className='bg-white p-5 rounded shadow mt-1'>
            <div className='flex flex-wrap justify-center'>
                {
                    loading ? 
                    <Loading bgColor='bg-amber-500' />
                    :displayItems.length===0 ? 
                    <span>Not products not found</span>
                    :displayItems.map((p)=>(
                        (
                            <div className='border border-gray-300 w-[20%] m-2 cursor-pointer rounded-lg relative' key={p._id}>
                                <img src={p.images[0]} alt="" className='w-[100%] h-[220px] mb-2' />
                                <div className='mt-4 px-3 mb-2'>
                                    <div className='flex justify-between mb-2'>
                                        <p className='text-lg font-bold'>{p.name}</p>
                                        <p className='text-lg text-amber-500 font-bold'>{p.price} KS</p>
                                    </div>
                                    <p className='text-gray-400 font-thin my-3'>
                                        10000 Sold
                                    </p>
                                    
                                    <p className='text-gray-400 my-3'>
                                        Availables Sizes : <span className='font-bold text-gray-900'>{p.sizes.map((s,i)=>p.sizes.length-1=== i ? s : `${s},`)}</span>
                                    </p>
                                    <p className='text-gray-400 my-3 flex items-center'>
                                        <span className='mr-1'>Availables Colors : </span>  {
                                        p.colors.map((c,i)=>(
                                            <span className={`mr-1 w-[15px] h-[15px] ${c} rounded flex justify-center items-center cursor-pointer`}></span>
                                        ))
                                        }
                                    </p>
                                    <div className='flex justify-between mb-3 items-center'>
                                        <div className='bg-amber-500 rounded-full px-3 py-1 text-white'>
                                            <i className="fa-solid fa-star mr-2"></i>
                                            <span className=''>4.5</span>
                                        </div>
                                        <div>
                                            <p className='text-gray-400'>Stock : <span className='font-bold text-gray-900'>{p.stock}</span></p>
                                        </div>
                                    </div>
                                    <button onClick={()=>{
                                        moreButton === p._id ? setMoreButton("") : setMoreButton(p._id)
                             
                                    }} className='absolute top-3 right-5 text-amber-500 text-2xl'>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </button>
                                    {
                                        moreButton=== p._id && (
                                           <div className='bg-white absolute top-10 right-5 w-[120px] px-3 py-2 rounded-md'>
                                                <button className='block my-2 text-base group'
                                                    onClick={()=>{
                                                        navigate(`/admin/products/${p._id}`)
                                                    }}
                                                    
                                                >
                                                    <i className="fa-solid fa-pen text-gray-500 text-base cursor-pointer group-hover:text-amber-500 "></i>
                                                    <span className='ml-3 group-hover:text-amber-500'>Edit</span>
                                                </button>
                                                <hr />
                                                <button className='block my-2 text-base group'
                                                  onClick={()=>{
                                                    const deleteSure:boolean =confirm("Are you Sure want to delete?")
                                                    if(deleteSure){
                                                        dispatch(destroyProduct(p._id))
                                                    }
                                                    }}
                                                >
                                                    <i className="fa-regular fa-trash-can text-gray-500 text-base cursor-pointer group-hover:text-red-500  "></i>
                                                    <span className='ml-3 group-hover:text-red-500'>Delete</span>
                                                </button>
                                                
                                           </div>
                                        )
                                       
                                        
                                    }
                                 
                                    {/* <div className='px-4 flex justify-between mb-3'>
                                        <button className='mr-3 border group border-gray-300 rounded text-center px-2 py-1  hover:bg-amber-400 hover:border-amber-400 mr-2   transition all duration-500'
                                           
                                            <i className="fa-regular fa-pen-to-square  transition all duration-500"></i>
                                        </button>
                                        <button 
                                            className='border group border-gray-300 rounded text-center px-2 py-1  hover:bg-red-400  transition all duration-500'
                                            onClick={()=>{
                                            const deleteSure:boolean =confirm("Are you Sure want to delete?")
                                            if(deleteSure){
                                                dispatch(destroyProduct(p._id))
                                            }
                                    
                                            }}
                                        >
                                            <i className="fa-regular fa-trash-can text-gray-500 text-xl cursor-pointer group-hover:text-white  transition all duration-500"></i>
                                        </button>
                                    </div>  */}
                                </div>
                            
                            </div>
                        )
                    ))
                }
             
           
                
            </div>
            <ReactPaginate
                breakLabel={<span className='mr-4'>...</span>}
                nextLabel={
                    <span className="w-10 h-10 flex items-center justify-center  rounded-md">
                        <i className='fa-solid fa-chevron-right text-xl text-gray-400'></i>
                    </span>
                }
                previousLabel={
                    <span className='w-10 h-10 flex items-center justify-center  rounded-md mr-3'>
                        <i className='fa-solid fa-chevron-left text-xl text-gray-400'></i>
                    </span>
                
                }
                onPageChange={(selectedPage)=>dispatch(setCurrentPage(selectedPage.selected))}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                containerClassName="flex items-center justify-center mt-8 mb-4"
                pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
                activeClassName="bg-amber-100 text-amber-500"
        />
        </div>
    </div>
  )
}

export default Products