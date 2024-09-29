import React from 'react'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'
import SelectGoal from '../component/SelectGoal'
import CollegeBaanner from '../component/CollegeBanner'
import CareerConfusion from '../component/CareerConfusion'
import Footer from '../component/Footer'
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Slider></Slider>
    <SelectGoal></SelectGoal>
    
    <CollegeBaanner></CollegeBaanner>
    <CareerConfusion></CareerConfusion>
    <Footer></Footer>
   
    
    </>
  )
}

export default Home