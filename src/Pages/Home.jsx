import React from 'react'
import Navber from '../Components/Navber/Navber'
import Banner from '../Components/Banner/Banner'
import Counter from '../Components/Counter/Counter'
import Feature from '../Components/Feature/Feature'
import Plan from '../Components/Plan/Plan'
import Network from '../Components/Network/Network'
import Review from '../Components/Review/Review'


const Home = () => {
  return (
   <>
    <Banner/>
    <Counter/>
    <Feature/>
    <Plan/>
    <Network/>
    <Review/>
   </>
  )
}

export default Home