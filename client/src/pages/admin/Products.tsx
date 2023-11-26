import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useProduct from '../../hook/useProduct'
import { AppDispatch } from '../../app/store'
import { useDispatch } from 'react-redux'
import { destroyProduct,  resetProduct,  filteredByCategory, setDisplayItems, filteredByBrand, setCurrentPage, lastAdded, fetchLatestProductsByAdmin} from '../../features/products/productSlice'
import toast from 'react-hot-toast'
import useCategory from '../../hook/useCategory'
import { fetchLatestCategories } from '../../features/categories/categorySlice'
import ReactPaginate from 'react-paginate'
import { fetchLatestBrands } from '../../features/brands/brandSlice'
import useBrand from '../../hook/useBrand'
import Tooltip from '../../components/Tooltip/Tooltip'
import AnimatePlus from '../../components/Loading/AnimatePlus'

const Products = () => {
   const {products,loading,success,pageCount,limit,displayItems,currentPage} = useProduct();
   const {categories} = useCategory();
    const {brands}  = useBrand()
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [searchName,setSearchName] = useState("")
    const [moreButton,setMoreButton] = useState<string | undefined>("")

    useEffect(()=>{
            dispatch(fetchLatestProductsByAdmin(''))
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
        toast.success('Delete Product success');
        dispatch(resetProduct(""))
        navigate("/admin/products")
    }
   },[products])
   console.log(products)
  return (
    <div className='my-10'>
        {/* header */}
        <div className='bg-white dark:bg-gray-900  p-5  rounded shadow' >
            <div className='px-4'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-bold dark:text-gray-100'>Product Lists</h3>
                    <div>
                         <input type="text" value={searchName} onChange={(e)=>{
                            setSearchName(e.target.value)
                            const filtered = products.filter((p)=>p.name.toLowerCase().includes(e.target.value.toLowerCase()))
                            dispatch(setDisplayItems(filtered.slice(0,0+limit)))
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
        <div className='bg-white dark:bg-gray-900 p-5 rounded shadow mt-1'>
            <div className='flex flex-wrap justify-center'>
                {
                    loading ? 
                    <AnimatePlus bgColor='bg-amber-500' />
                    :displayItems.length===0 ? 
                    <span>Not products not found</span>
                    :displayItems.map((p)=>(
                        (
                            <div className='border border-gray-300 dark:border-gray-500 w-[22%] m-2 cursor-pointer rounded-lg relative' key={p._id}>
                                <img src={p.images[0].imageUrl} alt="" className='w-[100%] h-[250px] mb-2' />
                                <div className='mt-4 px-3 mb-2'>
                                    <div className='flex justify-between mb-2 w-[100%]'>
                                        <p className='text-base font-bold dark:text-gray-100 w-[50%]'>{p.name}</p>
                                        <p className='text-base text-amber-500 font-bold'>{p.price} KS</p>
                                    </div>
                                    <p className='text-gray-400 font-thin my-3 text-sm'>
                                        {p.sold} Sold
                                    </p>
                                    
                                    <p className='text-gray-400 my-3 text-base'>
                                        Availables Sizes : <span className='font-bold text-gray-900 uppercase dark:text-gray-100'>{p.sizes.map((s,i)=>p.sizes.length-1=== i ? s : `${s},`)}</span>
                                    </p>
                                    {/* <p className='text-gray-400 my-3 flex items-center'>
                                        <span className='mr-1'>Availables Colors : </span>  {
                                        p.colors.map((c:string,i)=>(
                                            <span key={i} className={`mr-1 w-[15px] h-[15px] rounded flex justify-center items-center cursor-pointer`} style={{backgroundColor:`${c}`}}></span>
                                        ))
                                        }
                                    </p> */}
                                    <div className='flex justify-between mb-3 items-center'>
                                        <div className='bg-amber-500 rounded-full px-3 py-1 text-white'>
                                            <i className="fa-solid fa-star mr-2"></i>
                                            <span className=''>
                                                {p.rating || 0}
                                            </span>
                                        </div>
                                        <div>
                                            <p className='text-gray-400'>Stock : <span className='font-bold text-gray-900 dark:text-gray-100'>{p.stock}</span></p>
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
                pageClassName="dark:text-amber-500 text-amber-500  block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
                activeClassName="bg-amber-100 text-amber-500 dark:text-gray-9000 "
        />
        </div>
    </div>
  )
}

export default Products