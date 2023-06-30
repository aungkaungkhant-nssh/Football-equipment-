import React from 'react'
import AdidasHeatSpawn from '../assets/images/bb-adidas-heatspawn.jpg'
import NikeLuminous from '../assets/images/bb-nike-luminous.jpg'
import PumaPursuit from '../assets/images/bb-puma-pursuit.jpg'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  return (
    <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    useKeyboardArrows={true}
  >
      <div className='relative ' >
          <img src={PumaPursuit} alt=""  style={{height:"400px"}}/>
          <div className='absolute  right-1/4 md:right-52 top-32 text-gray-100 '>
              <h3 className='text-xl md:text-4xl font-black mb-3 tracking-wide text-center'>Puma Pursuit Pack</h3>
              <p className='text-center md:text-right tracking-wide mb-4'>End your season with glory</p>
              <Link to="/" className='md:float-right px-3 bg-amber-500 py-2 rounded text-sm'>Shop Now</Link>
          </div>
     </div>
     <div className='relative' style={{height:"400px"}}>
          <img src={AdidasHeatSpawn} alt="" className='h-full'/>
          <div className='absolute  right-1/4 md:right-52 top-32 text-gray-100 '>
              <h3 className='text-xl md:text-4xl font-black mb-3 tracking-wide text-center'>Adidas Heatspawn Pack</h3>
              <p className='text-center md:text-right tracking-wide mb-4'>End your season with glory</p>
              <Link to="/" className='md:float-right px-3 bg-amber-500 py-2 rounded text-sm'>Shop Now</Link>
          </div>
     </div>
     <div className='relative' style={{height:"400px"}}>
          <img src={NikeLuminous} alt="" className='h-full'/>
          <div className='absolute  right-1/4 md:right-52 top-32 text-gray-100 '>
              <h3 className='text-xl md:text-4xl font-black mb-3 tracking-wide text-center'>Nike Luminous Pack</h3>
              <p className='text-center md:text-right tracking-wide mb-4'>End your season with glory</p>
              <Link to="/" className='md:float-right px-3 bg-amber-500 py-2 rounded text-sm'>Shop Now</Link>
          </div>
     </div>
    </Carousel>
  )
}

export default Banner