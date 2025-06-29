import React from 'react'
import HeroSection from '../_components/HeroSection'
import SignatureCreations from '../_components/SignatureCreations'
import About from '../_components/About'

const page = () => {
  return (
    <div className=''>
      <HeroSection />
      <SignatureCreations />
      <About />
    </div>
  )
}

export default page