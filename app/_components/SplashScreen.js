'use client';
import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  // State to control splash screen visibility
  const [showSplash, setShowSplash] = useState(true);

  // Effect to handle timing
  useEffect(() => {
    // Hide splash screen after 5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white animate-pulse transition-opacity duration-1000"
    >
      <img
        src="/footer-logo.png"
        alt="Splash Logo"
        className= " w-64 md:w-52 h-auto object-contain"
      />
    </div>
  );
};

export default SplashScreen;