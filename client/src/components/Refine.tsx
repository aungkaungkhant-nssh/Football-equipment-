import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { setRefineSideNav } from '../features/ui/uiSlice';
import { BrandType } from '../features/brands/brandSlice';
import { CategoryType } from '../features/categories/categorySlice';
import { ProductType, chooseProductColor, chooseProductSize, filteredByBrand, filteredByCategory, setChooseColor, setChooseSize } from '../features/products/productSlice';

import renderSizes from '../helper/renderSizes';


type propsType = {
    isRefineOpen:boolean,
    brands:BrandType[],
    categories:CategoryType[],
    products:ProductType[],
    selectedBrandId:string,
    selectedCategoryId:string,
    chooseSize:string | undefined,
    chooseColor:string | undefined

}
const Refine = ({isRefineOpen,brands,categories,products,selectedBrandId,selectedCategoryId,chooseSize,chooseColor}:propsType) => {
    const [showBrands,setShowBrands] = useState<boolean>(false);
    const [showCategory,setShowCategory] = useState<boolean>(false);
    const [showSizes,setShowSizes] = useState<boolean>(false);
    const [showColors,setShowColors] = useState<boolean>(false)
    const dispatch:AppDispatch = useDispatch();

    const handleChooseProduct = (choose:string,action:string | undefined)=>{
            dispatch(setRefineSideNav(""));
            if(choose==="filterByCategory" && action) dispatch(filteredByCategory(action))
            if(choose === "filterByBrand" && action) dispatch(filteredByBrand(action))
            if(choose ==="filterBySize" && action) {
                if(chooseSize===action) return dispatch(setChooseSize(""))
                dispatch(setChooseSize(action))
                dispatch(chooseProductSize(action))
            }
    }
  return (
    <div className='relative block lg:hidden  '>
        <div className={`drawer overflow-y-scroll   fixed top-0 right-0 w-screen  h-screen z-50 transform  ease-in-out transition-all duration-300 ${isRefineOpen ? 'translate-x-0' : 'translate-x-[1000px]'} bg-gray-100`}>
            <div className='sticky top-0 left-0 right-0 bg-white px-6 py-4 flex items-center justify-between'>
                <h3 className='text-2xl'>Refine</h3>
                <button onClick={()=>dispatch(setRefineSideNav(""))}>
                    <i className="fa-solid fa-xmark text-3xl text-gray-500"></i>
                </button>
            </div>
            <div className='px-6 py-4'>
                <div className='mb-3 border border-transparent border-b-gray-300 py-4'>
                    <div className='flex items-center justify-between mb-4' onClick={()=>setShowBrands(!showBrands)}>
                        <p className='font-bolder'>Brand</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={showBrands ? 'block': 'hidden'} >
                            <ul className='bg-white px-4 py-3 rounded'>
                                {
                                    brands.map((brand)=>(
                                        <li key={brand._id} className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3' onClick={()=>handleChooseProduct("filterByBrand",brand._id)}>
                                            <span className={`ml-2 text-sm font-thin ${selectedBrandId === brand._id ? "text-amber-500" : "text-neutral-500 "}`}>{brand.name}</span>
                                            <span className='text-xs text-neutral-500 font-thin'>  (
                                               {products.filter((p)=>p.brand[0]._id == brand._id).length}
                                            )</span>
                                        </li>
                                    ))
                                }
                              
                            </ul>
                     </div>
                </div>
            
                <div className='mb-3 border border-transparent border-b-gray-300 py-4'>
                    <div className='flex items-center justify-between mb-4' onClick={()=>setShowCategory(!showCategory)}>
                        <p className='font-bolder'>Categories</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={showCategory ? 'block': 'hidden'} >
                            <ul className='bg-white px-4 py-3 rounded'>
                                {
                                    categories.map((cat)=>(
                                        <li key={cat._id} className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3' onClick={()=>handleChooseProduct("filterByCategory",cat._id)}>
                                            <span  className={`ml-2 text-sm font-thin ${selectedCategoryId === cat._id ? "text-amber-500" : "text-neutral-500 "}`}>{cat.name}</span>
                                            <span className={`text-xs  font-thin  ${selectedCategoryId === cat._id ? "text-amber-500" : "text-neutral-500 "}`}>({
                                                products.filter((p)=> p.category[0]._id === cat._id).length
                                            })</span>
                                        </li>
                                    ))
                                }
                              
                            </ul>
                     </div>
                </div>
                <div className='mb-3 border border-transparent border-b-gray-300 py-4'>
                    <div className='flex items-center justify-between mb-4' onClick={()=>setShowSizes(!showSizes)}>
                        <p className='font-bolder'>Sizes</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={showSizes ? 'block': 'hidden'} >
                            <ul className='bg-white px-4 py-3 rounded'>
                            {
                                    renderSizes(products,selectedCategoryId,"sizes").map((size:string,i:number)=>(
                                        <li key={i} className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                             <span  className={`ml-2 text-sm font-thin text-neutral-500`}>{size}</span>
                                             <input type="checkbox"
                                                checked={chooseSize===size ? true : false}
                                                value={size}
                                                onChange={(e)=>{
                                                    
                                                    if(chooseSize===size)  return dispatch(setChooseSize(""))
                                                     dispatch(setChooseSize(e.target.value))
                                                     dispatch(chooseProductSize(e.target.value))
                                                     dispatch(setRefineSideNav(""))
                                                }}
                                              />
                                        </li>
                                    ))
                                }
                              
                            </ul>
                     </div>
                </div>
                <div className='mb-3'>
                    <div className='flex items-center justify-between mb-4' onClick={()=>setShowColors(!showColors)}>
                        <p className='font-bolder'>Colors</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={showColors ? 'block': 'hidden'} >
                            <ul className='bg-white px-4 py-3 rounded'>
                                {
                                    renderSizes(products,selectedCategoryId,"colors").map((color:string,i:number)=>(
                                        <li key={i} className='flex items-center justify-between cursor-pointer mb-3 border border-white border-b-gray-300 py-3'>
                                             <span  className={`ml-2 text-sm font-thin text-neutral-500`}>{color}</span>
                                             <input type="checkbox"
                                                checked={chooseColor===color ? true : false}
                                                value={color}
                                                onChange={(e)=>{
                                                    if(chooseColor===color)  return dispatch(setChooseColor(""))
                                                     dispatch(setChooseColor(e.target.value))
                                                     dispatch(chooseProductColor(e.target.value))
                                                     dispatch(setRefineSideNav(""))
                                                }}
                                              />
                                        </li>
                                    ))
                                }
                               
                              
                            </ul>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Refine