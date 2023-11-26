import React, { ChangeEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { setMobileSideNav } from '../features/ui/uiSlice'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CustomerType } from '../features/customers/customerSlice'
import { AuthType } from '../features/Auth/authSlice'
import { searchProductByName } from '../features/products/productSlice'

type propType = {
  mobileSideNav:boolean,
  user:AuthType | null,
  searchProduct: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

}

const MobileSideNav = ({mobileSideNav,user,searchProduct,onChange}:propType) => {
  const dispatch:AppDispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={`fixed top-0 left-0 p-4  w-[70%] bottom-0  z-[1000] transform  ease-in-out transition-all duration-300 ${mobileSideNav ? 'translate-x-0' : '-translate-x-[10000px]'} bg-gray-100 shadow-2xl`}>
        <div className='flex items-center justify-between mb-10 mt-3'>
            <div className='flex items-center'>
              <i className="fa-brands font-bold fa-slack mr-4 animate-spin text-xl"></i> 
              <h3 className='text-xl font-bolder'>Bounce & Back</h3>
            </div>

            <button onClick={()=>dispatch(setMobileSideNav(""))}>
                <i className="fa-solid fa-xmark text-xl"></i>
            </button>
        </div>

        <div className='my-5 '>
            <div className='flex items-center'>
              <input type={searchProduct} onChange={onChange}  className='border rounded-lg w-full py-2 px-3' placeholder='Search product here....'/>
              <button className='bg-amber-500 px-4 py-2 rounded-r-lg'  onClick={()=>{
                if(!location.pathname.includes("/products")){
                    return navigate("/products")
                }
                else{
                    dispatch(searchProductByName(searchProduct))
                }dispatch(setMobileSideNav(""))
                
                }}><i className="fa-solid fa-magnifying-glass text-white"></i></button>
            </div>
            <div className='my-8'>
              <ul>
                  <li>
                      <Link to="/" className={`${location.pathname==="/" ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500`}  onClick={()=>dispatch(setMobileSideNav(""))}>
                          <i className="fa-solid fa-house mr-3"></i>
                          <span>Home</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="/products" className={`${location.pathname==="/products" ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500`} onClick={()=>dispatch(setMobileSideNav(""))}>
                          <i className="fa-solid  fa-basket-shopping mr-3"></i> 
                          <span>Our Store</span>
                      </Link>
                  </li>
                  {
                    user && (
                    <li>
                        <Link to="/orders" className={`${location.pathname==="/orders" ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500`}  onClick={()=>dispatch(setMobileSideNav(""))}>
                            <i className="fa-solid fa-cart-shopping mr-3"></i>
                            <span>Orders</span>
                        </Link>
                    </li>
                    )
                  }
                 
                  <li>
                      <Link to="/contact" className={`${location.pathname==="/contact" ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500`}  onClick={()=>dispatch(setMobileSideNav(""))}>
                          <i className="fa-solid fa-map mr-3"></i>
                          <span>Contact</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="/login" className={`${location.pathname==="/login" ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500`}  onClick={()=>dispatch(setMobileSideNav(""))}>
                      <i className="fa-regular fa-user  mr-3  "></i>
                          <span>Login</span>
                      </Link>
                  </li>
              </ul>


            </div>
           
        </div>
    </div>
  )
}

export default MobileSideNav