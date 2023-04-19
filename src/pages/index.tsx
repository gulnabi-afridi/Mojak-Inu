import React from 'react'
import Hero from '@/components/Hero/Hero'
import Separator from '@/components/shared/Separator/Separator'
import About from '@/components/About/About'
import HowToBuy from '@/components/HowToBuy/HowToBuy'
import Tokenomics from '@/components/Tokenomics/Tokenomics'
import RoadMap from '@/components/RoadMap/RoadMap'
import Contact from '@/components/Contact/Contact'

function Home() {
  return (
   <React.Fragment>
    <Hero/>
     <Separator/>
    <About/>
     <Separator/>
    <HowToBuy/>
     <Separator/>
    <Tokenomics/>
    <Separator/>
    <RoadMap/>
    <Separator/>
    <Contact/>   

   </React.Fragment>
  )
}

export default Home