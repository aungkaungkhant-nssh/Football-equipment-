import React from 'react'
import Adidas from '../assets/images/adidas.jpg'
import Mikasa from '../assets/images/mikasa.jpg'
import Nike from '../assets/images/nike.jpg'
import Puma from '../assets/images/puma.jpg'
import Rebook from '../assets/images/rebook.jpg'
import  Rider from '../assets/images/rider.jpg'
const ChooseBrand = () => {
  return (
    <section className='md:w-10/12 md:mx-auto px-4' style={{marginBottom:"80px"}}>
        <div className='flex items-center'>
            <h3 className='text-xl tracking-wider uppercase font-thin   w-1/2 md:w-1/5'>Choose Brands</h3>
            <div className='bg-gray-300 h-0.5 w-1/2 md:w-4/5'></div>
        </div>
        <div className='mt-5'>
            <div className='px-4 border-b-2 inline-block py-2  mb-3'>
                <i className="fa-solid fa-magnifying-glass mr-3 text-gray-900"></i>
                <input type="text" placeholder='Search your favorite brand' className='hover:border-none hover:outline-none focus:outline-none text-gray-900' />
            </div>
           <div className='mt-8'>
                <div className='p-4 overflow-x-scroll whitespace-nowrap '>
                    <div className='w-32 md:w-40  inline-block px-3 md:px-4 ' >
                        <img src={Adidas} alt=""  />
                    </div>
                    <div className='w-32 md:w-40 inline-block px-3 md:px-4 '  >
                        <img src={Mikasa} alt=""  />
                    </div>
                    <div className='w-32 md:w-40 inline-block px-3 md:px-4 '  >
                        <img src={Nike} alt="" />
                    </div>
                    <div className='w-32 md:w-40 inline-block px-3 md:px-4 '  >
                        <img src={Puma} alt="" />
                    </div>
                    <div className='w-32 md:w-40 inline-block px-3 md:px-4  '  >
                        <img src={Rebook} alt="" />
                    </div>
                    <div className='w-32 md:w-40 inline-block px-3 md:px-4 '  >
                        <img src={Adidas} alt="" />
                    </div>
                    <div className='w-32 md:w-40 inline-block px-3 md:px-4 '  >
                        <img src={Rider} alt="" />
                    </div>
                    <div className='w-32 md:w-40 inline-block px-3 md:px-4 '  >
                        <img src={Rider} alt="" />
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <button className='bg-amber-500 px-4 py-2 rounded-full text-gray-100 hover:bg-slate-700 transition duration-300'>View All Brands</button>
                </div>
           </div>
        </div>
    </section>
  )
}

export default ChooseBrand