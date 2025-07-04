import React from 'react'
import HeroSection from '../_components/HeroSection'
import SignatureCreations from '../_components/SignatureCreations'
import About from '../_components/About'
import Gallery from '../_components/Gallery'
import Clients from '../_components/Clients'

const page = () => {
  return (
    <div className=''>
      <HeroSection />
      {/* <SignatureCreations /> */}
      <About />
      <Gallery />
      <Clients />
      
    </div>
  )
}

export default page