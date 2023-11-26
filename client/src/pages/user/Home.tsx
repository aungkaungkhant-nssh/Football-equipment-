import React, { useEffect } from 'react'
import Banner from '../../components/Banner'
import OurSevice from '../../components/OurSevice'
import ChooseBrand from '../../components/ChooseBrand'
import NewArrival from '../../components/NewArrival'

import useProduct from '../../hook/useProduct'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { fetchLatestProducts } from '../../features/products/productSlice'

const Home = () => {
  const dispatch:AppDispatch = useDispatch();
  const {products} = useProduct();
  useEffect(()=>{
    dispatch(fetchLatestProducts(""))
  },[])

  return (
    <section >
        <Banner />
        <OurSevice /> 
        <ChooseBrand />
        <NewArrival products={products} />
   
    </section>
    
    
  )
}

export default Home