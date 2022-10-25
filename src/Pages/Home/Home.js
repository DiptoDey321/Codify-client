import React from 'react'
import FunFacts from './Fun-Facts/FunFacts'
import HeroSection from './Hero-section/HeroSection'
import Selfdevelopment from './Self-development/Selfdevelopment'
import Testimonial from './Testimonial/Testimonial'
import WebInfo from './web-info/WebInfo'

function Home() {
  return (
    <div className=''>
        <HeroSection></HeroSection>
        <WebInfo></WebInfo>
        <FunFacts></FunFacts>
        <Selfdevelopment></Selfdevelopment>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home