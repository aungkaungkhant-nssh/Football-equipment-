import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section>
      <div className='flex justify-between bg-gray-900 py-6  px-4 mt-5 flex-wrap '>
        <div className='mb-10'>
            <h3 className='text-2xl mb-6 font-bold text-gray-100 uppercase tracking-widest'>Contact Us</h3>
            <ul>
                <li className='mb-5'>
                    <div className='flex items-center text-gray-50 hover:text-amber-500 cursor-pointer transition duration-150'>
                        <i className="fa-solid fa-location-dot mr-4"></i>
                        <p className='tracking-wider font-thin'>Hpa An, Myain KaLay</p>
                    </div>
                </li>
                <li className='mb-5'>  
                    <div className='flex items-center text-gray-50 hover:text-amber-500 cursor-pointer transition duration-150'>
                        <i className="fa-solid fa-phone mr-4"></i>
                        <p className='tracking-wider font-thin'>09261804445</p>
                    </div>
                </li>
                <li className='mb-5'>
                  <div className='flex items-center text-gray-50 hover:text-amber-500 cursor-pointer transition duration-150'>
                    <i className="fa-solid fa-envelope mr-4"></i>
                    <p className='tracking-wider font-thin'>akkgit0909@gmail.com</p>
                   </div>
                </li>
            </ul>
        </div>
        <div className='mb-10'> 
            <h3 className='text-2xl mb-6 font-bold text-gray-100 uppercase tracking-widest'>billing information</h3>
            <ul>
                <li className='text-gray-50 mb-4 tracking-wider capitalize'>payment methods</li>
                <li className='text-gray-50 capitalize tracking-wider'>Shipping methods</li>
            </ul>
        </div>
        <div className='mb-10'>
           <h3 className='text-2xl mb-6 font-bold text-gray-100 uppercase tracking-widest'> quick links</h3>
            <ul>
                <li className='text-gray-50 hover:text-amber-500 cursor-pointer transition duration-150 mb-3'>
                    <Link to="/">Home</Link>
                    
                </li>
                <li className='text-gray-50 hover:text-amber-500 cursor-pointer transition duration-150 mb-3'>
                    <Link to="/products">Our Store</Link>
                </li>
                <li className='text-gray-50 hover:text-amber-500 cursor-pointer transition duration-150 mb-3'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
      </div>
      <div className='bg-slate-700 py-5 text-gray-100 px-3 py-2'>
        <div className='text-center'>
            <p>Copyright © 2023 Bounce & Back | All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer