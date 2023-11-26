import React from 'react'
import { useDispatch } from 'react-redux';
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../app/store';
import { adminLogout } from '../features/Auth/authSlice';
const AdminSideMenu = () => {
    const location  = useLocation();
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate()
  return (
    <div className='w-[18%] h-[90%]  overflow-y-hidden  bg-white shadow flex flex-col justify-between dark:bg-gray-900 '>
        <div>
            <div className='px-5 py-5' >
                <ul>
                    <li>
                        <Link to="/admin/dashboard"  className={`${location.pathname.includes("dashboard") ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500`}>
                            <i className="fa-solid fa-table-cells-large mr-3 "></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/admin/brands"  className={`${location.pathname.includes("brands") ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500 transition all duration 300`}>
                            <i className="fa-solid fa-bandage mr-3"></i>
                            <span>Brands</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/admin/categories"  className={`${location.pathname.includes("categories") ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500 transition all duration 300`}>
                            <i className="fa-solid fa-list mr-3"></i>
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/admin/products"  className={`${location.pathname.includes("products") ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500 transition all duration 300`}>
                            <i className="fa-solid  fa-basket-shopping mr-3"></i>
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/orders"   className={`${location.pathname.includes("orders") ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500 transition all duration 300`}>
                            <i className="fa-solid fa-cart-shopping mr-3"></i>
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/admin/customers"   className={`${location.pathname.includes("customers") ? "bg-amber-100 text-amber-500" : "text-gray-600"}  px-3 py-2 rounded   cursor-pointer font-thin my-6 block text-lg hover:bg-amber-100 hover:text-amber-500 transition all duration 300`}>
                            <i className="fa-solid fa-users mr-3"></i>
                            <span>Customers</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
       
        <div className='mb-5 px-5 '>
            <button onClick={()=>{

                dispatch(adminLogout(""))
                navigate("/admin/login")

            }} className='hover:dark:text-amber-500 text-gray-600 dark:text-gray-300  font-thin p-2  duration-300 hover:bg-amber-100 hover:text-amber-500 transition all duration 300 w-full'>
                 <i className="fa-solid fa-right-from-bracket mr-3"></i>
                 <span className='text-lg'>Logout</span>
            </button>
        </div>  
    </div>
  )
}

export default AdminSideMenu