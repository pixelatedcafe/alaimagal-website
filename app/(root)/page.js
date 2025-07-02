import React from 'react'
import HeroSection from '../_components/HeroSection'
import SignatureCreations from '../_components/SignatureCreations'
import About from '../_components/About'
import Gallery from '../_components/Gallery'

const page = () => {
  return (
    <div className=''>
      <HeroSection />
      <SignatureCreations />
      <About />
      <Gallery />
    </div>
  )
}

export default page