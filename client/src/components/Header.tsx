import React, { useState,useRef,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartSidebar from './CartSidebar'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { fetchLatestCategories } from '../features/categories/categorySlice'
import useCategory from '../hook/useCategory'
import useCart from '../hook/useCart'
import useAuth from '../hook/useAuth'
import { userLogout } from '../features/Auth/authSlice'
import { useLocation } from 'react-router-dom'
import useUi from '../hook/useUi'
import MobileSideNav from './MobileSideNav'
import { setMobileSideNav } from '../features/ui/uiSlice'
import useProduct from '../hook/useProduct'
import { searchProductByName, setSearchProduct, setSelectedCategoryId } from '../features/products/productSlice'
import useWishList from '../hook/useWishList'
const Header = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isDropDownOpen,setIsDropDownOpen] = useState<boolean>(false)
  const [isCartOpen,setIsCartOpen] = useState<boolean>(false);
  const [userActionBox,setUserActionBox] = useState<boolean>(false)
  const dispatch:AppDispatch = useDispatch();
  const {categories} = useCategory();
  const {carts} = useCart();
  const {user} = useAuth();
  const location = useLocation();
  const {mobileSideNav} = useUi();
  const {searchProduct} = useProduct();
  const navigate= useNavigate();
  const {wishLists} =  useWishList()


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
   
      if (ref.current  && !ref.current.contains(event.target as Node)) {
 
        setIsDropDownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [])

  useEffect(()=>{
    dispatch(fetchLatestCategories())
  },[])
  return (
      <nav  >
        <div className='bg-gray-900  py-4  w-full'>
   
            <div className='py-4 w-full'>
                <div className='px-8 flex justify-between items-center'>
                
                    <div className='block lg:hidden w-[20%] lg:w-[0%] cursor-pointer' onClick={()=>dispatch(setMobileSideNav(""))}>
                        <i className="fa-solid fa-bars text-gray-100 text-2xl"></i>
                    </div>
                    <h2 className='text-2xl grow md:text-3xl mr-10 font-bold text-gray-100 w-[75%] lg:w-[0%] text-center lg:text-left '>Bounce & Back</h2>

                    <div className=' hidden grow  lg:block  '>
                        <div className='flex justify-center'>
                          <input value={searchProduct} onChange={(e)=>dispatch(setSearchProduct(e.target.value))} type="text" placeholder='Search Product Here...' className='py-3 px-3 rounded-l-lg focus:outline-none text-gray-900' style={{width:"60%"}}/>
                          <button className='bg-amber-500 px-4 py-3 rounded-r-lg text-white' onClick={()=>{
                            if(!location.pathname.includes("/products")){
                              return navigate("/products")
                            }
                            else{
                              dispatch(searchProductByName(searchProduct))
                            }
                          
                         
                          }}><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        
                    </div> 
                    <div className='grow w-[20%]  lg:w-[0%]'>
                      <div className='flex justify-end items-center '>
                        
                      
                       <div className='border-r-[2px]  mx-5  hidden xl:block pr-10'>
                        { 
                            !user ? (
                              <Link to="/login" className='flex  items-center mx-0 md:mx-2  cursor-pointer  '>
                                <i className="fa-regular fa-user text-2xl mr-0 md:mr-3 text-gray-100 font-bolder"></i>
                                <h3 className='font-bolder text-gray-100 text-lg '>Log in My Account</h3>
                            </Link>
                            ):(
                              <div className='relative cursor-pointer' onClick={()=>setUserActionBox(!userActionBox)}>
                                  <div>
                                      <p className='text-sm mb-1 text-slate-50'>Hello {user.name}</p>
                                      <div className='flex items-center text-gray-100'>
                                          <h3 className='font-extrabold text-lg mr-3'>My account</h3>
                                          <i className="fa-solid fa-chevron-down"></i>
                                      </div>
                                      
                                  </div>
                                  {
                                    userActionBox && (
                                      <div  className="absolute mt-5 shadow-md -right-5  z-[1000] float-left m-0   list-none  rounded-md border-none bg-white text-black w-[250px] ">
                                        <div className='bg-gray-100 py-3 px-2 flex justify-between'>
                                          <h3 className='font-bold'>Hi, { user.name && user.name.length > 8 ? user.name?.substring(0,7)+"..." : user.name}</h3>
                                          <button className='underline font-bold' onClick={()=>dispatch(userLogout(""))}>Sign Out</button>
                                        </div>
                                        <ul className=' px-3 py-2'>
                                          <li className='my-3 flex items-center  cursor-pointer hover:text-amber-500 duration-300' onClick={()=>navigate("/my_details")}>
                                            <i className="fa-solid fa-user mr-3 text-lg font-thin "></i>
                                            <span className='text-lg font-thin '>My Details</span>
                                        
                                          </li>
                                          
                                        </ul>
                                      </div>
                                    )
                                  }
                                
                              </div>
                            
                            )
                          }
                       </div>
                       
                       
                        <Link to="/favorite" className='lex text-gray-100  items-center mx-0 md:mx-2   cursor-pointer relative '>
                             
                            {
                                wishLists.length > 0 && (
                                  <div className='bg-red-500 absolute -top-3 -right-3 px-2 rounded-full'>
                                    {wishLists.length}
                                </div>
                                )
                              }

                          <i className="fa-regular fa-heart  text-3xl text-lg md:text-3xl"></i>
                        </Link>
                        {/* <div className='flex text-gray-100  items-center mx-0 md:mx-2   cursor-pointer relative' onClick={()=>setIsCartOpen(!isCartOpen)}>
                          
                          
                        </div> */}
                        <div className='flex text-gray-100  items-center ml-6 md:mx-2   cursor-pointer relative' onClick={()=>setIsCartOpen(!isCartOpen)}>
                          {
                            carts.length > 0 && (
                              <div className='bg-red-500 absolute -top-3 -right-4 px-2 rounded-full'>
                                {carts.length}
                            </div>
                            )
                          }

                          <i className="fa-solid fa-cart-shopping text-3xl text-lg md:text-3xl"></i>
                          
                        </div>
                        
                      </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className='px-8  bg-slate-700 py-5 text-gray-100 items-center hidden md:flex'>
            <div className='md:basis-5/12 lg:basis-4/12 xl:basis-3/12 relative w-full'>
              <div className='flex justify-between  cursor-pointer items-center' ref={ref} onClick={()=>setIsDropDownOpen(!isDropDownOpen)}>
                    <div>
                      <i className="fa-solid fa-braille text-xl"></i>
                      <span className='ml-4 text-lg'>Shop Categories</span>
                    </div>
                
                  <div>
                      <i className="fa-solid fa-chevron-down"></i>
                  </div>
              </div>
              {
                isDropDownOpen && (
                  <div className='absolute right-0 mt-5 bg-gray-900 left-0 rounded z-50' >
                      <div>
                          <ul className='divide-y'>
                            {
                              categories.map((category)=>(
                                <li className='p-3 ' key={category._id}><Link to="/">{category.name}</Link></li>
                              ))
                            }
                          </ul>
                      </div>
                 </div>
                )
              }
            </div>
            <div className='md:basis-7/12 lg:basis-8/12 ml-3 xl:basis-9/12'>
                <ul className='flex'>
                  <li className='uppercase mx-3 text-base'>
                    <Link to='/' className={`${location.pathname==="/" && 'text-amber-500'}`}>Home</Link>
                  </li>
                
                  <li className='uppercase mx-3 text-base'>
                    <Link to="/products"  className={`${location.pathname==="/products" && 'text-amber-500'}`}>Our Store</Link>
                  </li>
                  {
                    user && (
                      <li className='uppercase mx-3 text-base'>
                        <Link to="/orders"  className={`${location.pathname==="/orders" && 'text-amber-500'}`}>Order</Link>
                     </li>
                    )
                  }
               
                  <li className='uppercase text-base'>
                    <Link to="/contact"  className={`${location.pathname==="/contact" && 'text-amber-500'}`}>Contact</Link>
                  </li>
                </ul>
            </div>
        </div>
        <CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
         <MobileSideNav mobileSideNav={mobileSideNav} user={user} searchProduct= {searchProduct} onChange={(e:any)=>dispatch(setSearchProduct(e.target.value))} />
      </nav>
    
  )
}

export default Header