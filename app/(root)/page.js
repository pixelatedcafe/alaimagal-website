import React from 'react'
import HeroSection from '../_components/HeroSection'
import SignatureCreations from '../_components/SignatureCreations'
import About from '../_components/About'
import Gallery from '../_components/Gallery'
import Clients from '../_components/Clients'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import Main from '../_components/Main'

 export const metadata = {
  title: "Alaimagal Hotel",
  icons: {
    icon: '/favicon.ico', // or .png/.svg
  },
} 


const page = () => {

  return (
    <div className=''>
      {/* <Navbar />
      <HeroSection />
      <SignatureCreations />
      <About />
      <Gallery />
      <Clients />
      <Footer /> */}
      <Main />
      
    </div>
  )
}

export default page