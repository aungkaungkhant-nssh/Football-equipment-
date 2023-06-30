import React from 'react'
import Banner from '../../components/Banner'
import OurSevice from '../../components/OurSevice'
import ChooseBrand from '../../components/ChooseBrand'
import NewArrival from '../../components/NewArrival'
import BestSeller from '../../components/BestSeller'

const Home = () => {
  return (
    <section >
        <Banner />
        <OurSevice /> 
        <ChooseBrand />
        <NewArrival />
        <BestSeller />
    </section>
    
    
  )
}

export default Home