import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Sort from '../../components/Sort';
import Refine from '../../components/Refine';
import BreadCrumb from './BreadCrumb';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { ProductType, chooseProductColor, chooseProductSize, fetchLatestProducts, filteredByCategory, setChooseColor, setChooseSize, setDisplayItems, setSelectedCategoryId,setSelectedBrandId, filteredByBrand, filterBySort, searchProductByName, setSearchProduct } from '../../features/products/productSlice';
import useProduct from '../../hook/useProduct';
import { fetchLatestBrands } from '../../features/brands/brandSlice';
import useBrand from '../../hook/useBrand';
import useCategory from '../../hook/useCategory';
import renderSizes from '../../helper/renderSizes';
import Spinner from '../../components/Loading/Spinner';
import { addToWishList } from '../../features/products/wishListSlice';
import discountPrice from '../../helper/discountPrice';
import useWishList from '../../hook/useWishList';
import isCheckFavorite from '../../helper/isCheckFavorite';
import { setRefineSideNav, setSortSideNav } from '../../features/ui/uiSlice';
import useUi from '../../hook/useUi';
import { thousandSeparator } from '../../helper/format';
import Rating from '../../components/Rating';

const Products = () => {
  const [showBrands,setShowBrands] = useState<boolean>(true)
  const [showGroundType,setShowGroundType] = useState<boolean>(true)
  const [showSize,setShowSize] = useState<boolean>(true)
  const {products,searchProduct,displayItems,chooseColor,chooseSize,loading,selectedCategoryId,selectedBrandId} = useProduct();
  const {brands} = useBrand();
  const {categories} = useCategory();
  const {wishLists} = useWishList();
  const {sortSideNav,refineSideNav} = useUi();
  const navigate = useNavigate();

  const dispatch:AppDispatch = useDispatch();




  useEffect(()=>{
    dispatch(fetchLatestBrands())
    dispatch(fetchLatestProducts(""))

  },[])

  useEffect(()=>{
  
    if(categories.length>0 && !selectedCategoryId ){
        dispatch(setSelectedCategoryId(categories[0]._id || ''))
    }
  
  },[categories])

  console.log(products)
  return (  
    <section className='px-4 '>
            <BreadCrumb items={[{name:"Home",path:"/"},{name:"Products",path:"/products"}]} />
            <div className='hidden lg:flex mt-5 justify-end'>
             
                <div className=''>
                    <select onChange={(e)=>dispatch(filterBySort(e.target.value))}  id="" className='border border-gray-300 px-4 py-2 rounded-lg'>
                        <option value="sort" className='px-5 py-2'>Sort</option>
                        <option value="new_arrival" className='px-5 py-2'>New Arrival</option>
                        <option value="price_high_To_low" className='px-5 py-2'> Price High To Low</option>
                        <option value="price_low_To_high" className='px-5 py-2'>Price Low To High</option>
                        <option value="discount" className='px-5 py-2'>Discount</option>
                    </select>
                </div>
            </div>

            <div className=' flex lg:hidden justify-around my-10'>
                <div className='flex items-center cursor-pointer' onClick={()=>dispatch(setRefineSideNav(""))}>
                    <h3 className='mr-3 text-base text-neutral-900'>Refine</h3>
                    <div>
                        <i className='fa-solid fa-chevron-right text-gray-50 text-sm text-neutral-500'></i>
                    </div>
                </div>
                <div className='flex items-center cursor-pointer' onClick={()=>dispatch(setSortSideNav(""))}>
                    <h3 className='mr-3 text-base text-neutral-900'>Sort</h3>
                    <div>
                        <i className='fa-solid fa-chevron-right text-gray-50 text-sm text-neutral-500'></i>
                    </div>
                </div>
               
            </div>
            <div className='mt-5  flex  '>
                {/* use choose box */}
                <div className='hidden lg:block basis-[23%]  '>
                            <div className='w-4/5 mb-1'>
                                <div className='bg-gray-900 rounded px-4 py-2 flex justify-between ' >
                                        <span className='text-gray-50 block'>Brands</span>
                                        <span className='block cursor-pointer' onClick={()=>setShowBrands(!showBrands)}><i className={`fa-solid ${showBrands ? "fa-chevron-down" : "fa-chevron-right"} text-gray-50`}></i></span>
                                </div>
                                <div className={showBrands ? 'block mx-3 mt-3': 'hidden'} style={{marginBottom:"10px"}}>
                                    <ul className=''>
                                        {
                                            brands.map((brand)=>(
                                                
                                            <li className='flex items-center justify-between cursor-pointer mb-1' key={brand._id}>
                                                <div className='flex items-center'>
                                                    <input type="checkbox" name="brand" value={brand._id} className='border border-neutral-500' checked={selectedBrandId===brand._id && !searchProduct ? true : false} onChange={(e)=>{
                                                        if(selectedBrandId===e.target.value){
                                                            dispatch(filteredByBrand(""))
                                                            return dispatch(setSelectedBrandId(""))
                                                        }
                                                        dispatch(filteredByBrand(e.target.value))
                                                    }} />
                                                    <p className='ml-2 text-sm text-neutral-500 font-thin lowercase'>{brand.name}</p>
                                                </div>
                                                <div>
                                                    <p className='text-xs text-neutral-500 font-thin'>
                                                    (
                                                    { products.filter((p)=>p.brand[0]._id == brand._id).length}
                                                    )
                                                    </p>
                                                </div>
                                            </li>
                                            ))
                                        }
                                    
                                    </ul>
                                </div>
                            </div>
                            <div className='w-4/5 mb-1 '>
                                <div className='bg-gray-900 rounded px-4 py-2 flex justify-between ' >
                                        <span className='text-gray-50 block'>Categories</span>
                                        <span className='block cursor-pointer' onClick={()=>setShowGroundType(!showGroundType)}><i className={`fa-solid ${showGroundType ? "fa-chevron-down" : "fa-chevron-right"} text-gray-50`}></i></span>
                                </div>
                                <div className={showGroundType ? 'block mx-3 mt-3': 'hidden'}  style={{marginBottom:"10px"}}>
                                    <ul className=''>
                                        {
                                            categories.map((cat)=>(
                                            <li className='flex items-center justify-between cursor-pointer mb-1' key={cat._id}>
                                                <div className='flex items-center'>
                                                    <input type='checkbox' value={cat._id} className='border border-neutral-500' checked={selectedCategoryId 
                                                        ===cat._id ? true : false} onChange={(e)=>{
                                                            if(selectedCategoryId === cat._id) return dispatch(setSelectedCategoryId(""));
                                                            dispatch(filteredByCategory(e.target.value)) 
                                                        }}   name="category" />
                                                    <p className='ml-2 text-sm text-neutral-500 font-thin'>{cat.name}</p>
                                                </div>
                                                <div>
                                                    <p className='text-xs text-neutral-500 font-thin'>
                                                    (
                                                    {products.filter((p)=>p.category[0]._id == cat._id).length}
                                                    )
                                                    </p>
                                                </div>
                                            </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            {
                                selectedCategoryId && (
                                    <>
                                        <div className='w-4/5 '>
                                            <div className='bg-gray-900 rounded px-4 py-2 flex justify-between ' >
                                                    <span className='text-gray-50 block'>Size</span>
                                                    <span className='block cursor-pointer' onClick={()=>setShowSize(!showSize)}><i className={`fa-solid ${showGroundType ? "fa-chevron-down" : "fa-chevron-right"} text-gray-50`}></i></span>
                                            </div>
                                            <div className={showSize ? 'block mx-3 mt-3': 'hidden'}  style={{marginBottom:"10px"}}>
                                                <ul className=''>
                                                    {
                                                    renderSizes(products,selectedCategoryId,"sizes").map((size:string,i:number)=>(
                                                        <li className='flex items-center justify-between cursor-pointer mb-1' key={i}>
                                                            <div className='flex items-center'>
                                                                <input type="checkbox" className='border border-neutral-500' value={size} 
                                                                checked={size===chooseSize ? true :false}
                                                                onChange={(e)=>{
                                                                    if(chooseSize===size){
                                                                        return dispatch(setChooseSize(""))
                                                                    }
                                                                    dispatch(setChooseSize(e.target.value))
                                                                    dispatch(chooseProductSize(e.target.value))
                                                                }}/>
                                                                <p className='ml-2 text-sm text-neutral-500 font-thin'>{size}</p>
                                                            </div>
                                                            <div>
                                                            <p className='text-xs text-neutral-500 font-thin'>
                                                                (
                                                                {products.filter((p:any)=>p.sizes.find((s:any)=>s===size)).length}
                                                                )
                                                            </p>
                                                        </div>
                                                        </li>
                                                    ))
                                                    }
                                                    
                                                
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </>
                            
                                )
                            }

                  
                    
                  
                </div>
                {/* product container */}
                {
                    loading ? <div className='flex justify-center items-center w-full'>
                       <Spinner />
                    </div>
                    : 
                    displayItems.length === 0
                    ?(
                        <div className='flex justify-center items-center w-full'>
                            <h3 className='text-xl'>No Product Not found</h3>
                        </div>
                    ): 
                    (
                        <div className='md-basis-[77%] w-full '>
                            <div className='flex flex-wrap justify-center'>
                                {
                                    displayItems.length > 0 && displayItems.map((product:ProductType)=>(
                                        <div className='w-[100%] md:w-[50%] lg:w-[25%] mb-10' key={product._id}>
                                         
                                                <div className='border border-gray-200 p-2 mr-4 group cursor-pointer ' onClick={()=>navigate(`/product_details/${product._id}`)}>
                                                        <div className='relative'>
                                                            <img src={product.images[0].imageUrl} alt="" className='w-[100%]'  />
                                                            {
                                                                product.images.length > 1 && (
                                                                  <img src={product.images[1].imageUrl} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' /> 
                                                                )
                                                            }
                                                           
                                                            <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                                                <div className='flex justify-between items-center '>
                                                                    {
                                                                        product.isNew && (
                                                                            <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                                                              <p className='text-sm'>New Arrivals</p>
                                                                            </div>
                                                                        )
                                                                    }
                                                                  
                                                                    <div className='cursor-pointer' onClick={(e)=>{
                                                                        e.stopPropagation();
                                                                       dispatch(addToWishList(product))
                                                                    }}>
                                                                        {
                                                                           product._id && isCheckFavorite(wishLists,product._id) ? <i className="fa-solid fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i> :    <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                                        }
                                                                     
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         
                                                            {
                                                                product.discountPercent!==0 && product.discountPercent && product.discountPercent> 0 &&  (
                                                                    <div className='absolute z-50 bottom-0 left-0 right-0'>
                                                                        <div className='bg-gray-200 py-2 text-center'>
                                                                            <h3 className='uppercase text-slate-700'>{product.discountPercent}% off</h3>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                          
                                                        </div>
                                                    
                                                        <div className='border border-gray-50  py-3  p-3'>
                                                            <h3 className='text-xl text-slate-700 text-left'>{product.name}</h3>
        
                                                            <div className='mb-2 text-amber-400 my-2'>
                                                                <Rating rating={product.rating || 0} numReviews={0}/>
                                                            </div>
                                                            <div className='flex'>
                                                                {
                                                                    product.discountPercent ? (
                                                                        <>
                                                                            <p className='text-slate-700'>{thousandSeparator(discountPrice(+product.price,product.discountPercent))} ks</p>
                                                                            <p className='ml-7 text-neutral-400 line-through '>{product.price} Ks</p>
                                                                        </>
                                                                       
                                                                    ):(
                                                                        <p className='text-slate-700'>{thousandSeparator(+product.price)} Ks</p>
                                                                    )
                                                                }
                                                              
                                                            </div>
                                                        </div>
                                                    
                                            
                                                </div>
                                    </div>
                                    ))
                                }
                            
                            
                            </div>
                        </div>
                    )
                }
              
            </div>
            <Sort isSortOpen={sortSideNav} />
            <Refine isRefineOpen = {refineSideNav} brands={brands} categories={categories} products={products} selectedBrandId={selectedBrandId} selectedCategoryId={selectedCategoryId} chooseSize={chooseSize} chooseColor={chooseColor} />
    </section>
  )
}

export default Products