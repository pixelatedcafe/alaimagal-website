'use client'
import React, { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SignatureCreations from './SignatureCreations';
import About from './About';
import Gallery from './Gallery';
import Clients from './Clients';
import Footer from './Footer';

const Main = () => {

    const [showContent, setShowContent] = useState(false);

  // Effect to show content after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000); // Match splash screen duration

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
        <SplashScreen />

      {showContent && (
        <>
          <Navbar />
          <HeroSection />
          <SignatureCreations />
          <About />
          <Gallery />
          <Clients />
          <Footer />
          </>
      )}
    </div>
  )
}

export default Main