import React, { useState,useRef,useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartSidebar from './CartSidebar'

const Header = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isDropDownOpen,setIsDropDownOpen] = useState<boolean>(false)
  const [isCartOpen,setIsCartOpen] = useState<boolean>(false)
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
  return (
      <nav >
        <div className='bg-gray-900 text-gray-100 py-4'>
            <div className='border border-slate-800 border-b-zinc-50 pb-4' >
                <div className='flex justify-between px-4 flex-col md:flex-row'>
                    <h3 className='tracking-wider text-center mb-2 md:mb-0'>Free Shipping Over $100 & Free Returns</h3>
                    <h3 className='tracking-wider text-center'>HotLine:+959261704445</h3>
                </div>
            </div>
            <div className='py-4'>
                <div className='px-4 flex justify-between items-center'>
                    <h2 className='text-2xl md:text-3xl mr-10 font-bold'>Bounce & Back</h2>

                    <div className='flex-1 mx-7 hidden  lg:block'>
                        <div className='flex'>
                          <input type="text" placeholder='Search Product Here...' className='py-3 px-3 rounded-l-lg focus:outline-none text-gray-900' style={{width:"100%"}} />
                          <button className='bg-amber-500 px-4 py-3 rounded-r-lg'><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        
                    </div>
                  
                    <div className='flex  md:flex-1 '>
                      <Link to="/compare_products">
                        <div className='flex items-center mx-0 md:mx-2 cursor-pointer w-7 md:w-32' >
                            <i className="fa-solid fa-rotate text-lg md:text-3xl mr-0 md:mr-3"></i>
                            <h3 className='font-thin hidden md:block'>Compare Products</h3>
                        </div>
                      </Link>
                    
                      <Link to="/favorite" className='flex  items-center mx-0 md:mx-2 cursor-pointer  w-7 md:w-32'>
                            <i className="fa-regular fa-heart text-lg md:text-3xl mr-0 md:mr-3"></i>
                            <h3 className='font-thin hidden md:block'>Favourite wishlist</h3>
                      </Link>
                      <Link to="/login" className='flex  items-center mx-0 md:mx-2  cursor-pointer  w-7 md:w-32'>
                         <i className="fa-regular fa-user text-lg md:text-3xl  mr-0 md:mr-3"></i>
                        <h3 className='font-thin hidden md:block'>Log in My Account</h3>
                      </Link>
                      <div className='flex  items-center mx-0 md:mx-2   cursor-pointer' onClick={()=>setIsCartOpen(!isCartOpen)}>
                        <i className="fa-solid fa-cart-shopping text-3xl text-lg md:text-3xl"></i>
                        
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-4  bg-slate-700 py-5 text-gray-100 items-center hidden md:flex'>
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
                            <li className='p-3 '><Link to="/">Category 1</Link></li>
                            <li className='p-3 '><Link to="/">Category 2</Link></li>
                            <li className='p-3 '> <Link to="/">Category 3</Link></li>
                          </ul>
                      </div>
                 </div>
                )
              }
            </div>
            <div className='md:basis-7/12 lg:basis-8/12 ml-3 xl:basis-9/12'>
                <ul className='flex'>
                  <li className='uppercase mx-3 text-sm'>
                    <Link to='/'>Home</Link>
                  </li>
                
                  <li className='uppercase mx-3 text-sm'>
                    <Link to="/products">Our Store</Link>
                  </li>
                  <li className='uppercase mx-3 text-sm'>
                    <Link to="/orders">Order</Link>
                  </li>
                  <li className='uppercase text-sm'>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
            </div>
        </div>
        <CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </nav>
    
  )
}

export default Header