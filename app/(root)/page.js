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
  title: "Alaimagal Hotel Gandhipuram | Best Non-Veg Cuisine in Coimbatore",
  description:
    "Discover Alaimagal Hotel in Gandhipuram, Coimbatore – famous for its authentic non-vegetarian South Indian cuisine. Enjoy flavorful Chettinad dishes and homely hospitality in the heart of the city.",
  keywords: [
    "Alaimagal Hotel",
    "Aalaimagal",
    "non veg restaurant Coimbatore",
    "Alaimagal Hotel Coimbatore",
    "non veg restaurant Gandhipuram",
    "best Chettinad food Coimbatore",
    "non vegetarian hotel Gandhipuram",
    "South Indian non veg cuisine",
    "top restaurants in Coimbatore",
    "budget hotels with food Gandhipuram",
    "family dining Coimbatore",
    "authentic Tamil Nadu food",

  ],
  alternates: {
    canonical: "https://www.alaimagal.com", // Replace with actual URL if different
  },
};



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