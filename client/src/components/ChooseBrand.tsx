import React, { useEffect } from 'react'
import Adidas from '../assets/images/adidas.jpg'
import Mikasa from '../assets/images/mikasa.jpg'
import Nike from '../assets/images/nike.jpg'
import Puma from '../assets/images/puma.jpg'
import Rebook from '../assets/images/rebook.jpg'
import  Rider from '../assets/images/rider.jpg'
import { AppDispatch } from '../app/store'
import { useDispatch } from 'react-redux'

import { fetchLatestBrands } from '../features/brands/brandSlice'
import useBrand from '../hook/useBrand'
const ChooseBrand = () => {
  const dispatch:AppDispatch = useDispatch();
  const {brands} = useBrand();
  useEffect(()=>{
    dispatch(fetchLatestBrands())
  },[])
  return (
    <section className='md:w-10/12 md:mx-auto px-4' style={{marginBottom:"80px"}}>
        <div className=' mb-6 w-full flex items-center justify-between'>
            <h3 className='text-xl tracking-wider uppercase font-thin '>Choose Brand</h3>
            <div className='bg-gray-300 h-0.5 basis-5/12 md:basis-7/12 lg:basis-8/12 xl:basis-9/12'></div>
        
        </div>
        <div className='mt-5'>
            
           <div className='mt-8'>
                <div className='p-4 overflow-x-scroll whitespace-nowrap '>
                    {
                        brands.map((brand)=>(
                            <div className='w-32 md:w-40  px-3 md:px-4 inline-block cursor-pointer' >
                                <img src={brand.logo.imageUrl} alt=""  />
                            </div>
                        ))
                    }
                    
                </div>
                
           </div>
        </div>
    </section>
  )
}

export default ChooseBrand