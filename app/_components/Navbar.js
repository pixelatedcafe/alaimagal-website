'use client';

import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active section
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  // Handle scroll event for navbar transparency and active section
  useEffect(() => {
    // Function to check initial scroll position and update state
    const checkInitialScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Set initial active section
      const sections = ['home', 'menu', 'about', 'gallery', 'review', 'contact'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Check scroll position on initial load
    checkInitialScroll();

    // Handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine the active section based on scroll position
      const sections = ['home', 'menu', 'about', 'gallery', 'review', 'contact'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Common nav links JSX for desktop (main navbar)
  const navLinks = (
    <ul className="flex pl-6 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-24 3xl:pl-28 font-semibold 
                   space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20 3xl:space-x-24 
                   text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl">
      {['home', 'menu', 'about', 'gallery', 'review', 'contact'].map((section) => (
        <li key={section} className="relative group">
          <a
            className={`${ 
              activeSection === section ? '' : ''
            } 
            transition-all duration-200`}
            href={`#${section}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
          <span
            className={`absolute left-0 bottom-0 h-[2px] sm:h-[3px] md:h-[4px] bg-white transition-all duration-300 ${
              activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          ></span>
        </li>
      ))}
    </ul>
  );

  // Common nav links for desktop (scrolled navbar)
  const scrolledNavLinks = (
    <ul className="flex font-semibold space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12 2xl:space-x-16 3xl:space-x-20 
                   text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl">
      {['home', 'menu', 'about', 'gallery', 'review', 'contact'].map((section) => (
        <li key={section} className="relative group">
          <a
            className={`${activeSection === section ? 'f' : ''} transition-all duration-200`}
            href={`#${section}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
          <span
            className={`absolute left-0 bottom-0 h-[2px] sm:h-[3px] md:h-[4px] bg-[#03552A] transition-all duration-300 ${
              activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          ></span>
        </li>
      ))}
    </ul>
  );

  // Mobile nav links (unchanged)
  const mobileNavLinks = (
    <ul className="flex flex-col space-y-6 text-xl font-semibold">
      {['home', 'menu', 'about', 'gallery', 'review', 'contact'].map((section) => (
        <li key={section} className="relative group">
          <a
            className={`${
              activeSection === section ? 'font-extrabold text-2xl' : ''
            } hover:font-extrabold hover:text-2xl`}
            href={`#${section}`}
            onClick={handleLinkClick}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
          {/* <span
            className={`absolute left-0 bottom-0 h-[4px] bg-white transition-all duration-300 ${
              activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          ></span> */}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        {/* Main Navbar Section */}
        <div
          className={`fixed w-full z-40 transition-opacity duration-300 ${
            scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <section className="w-full flex">
            {/* Logo */}
            <div className="w-3/4 flex justify-center items-center">
              <img src="/logo-main.png" alt="Alaimagal Hotel Logo" 
                   className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[320px] xl:w-[350px] 2xl:w-[350px] 3xl:w-[420px] 
                            py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-8 3xl:py-10" />
            </div>

            {/* Visit Us */}
            <div className="w-1/4 flex justify-center items-start py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-8 3xl:py-10">
              <button className="bg-[#03552A] text-white 
                               px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-10 
                               py-1.5 sm:py-2 md:py-2 lg:py-2 xl:py- 2xl:py-2 3xl:py-4 
                               text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-xl 
                               rounded-md transition duration-300 hover:bg-[#024a24]">
                Visit Us
              </button>
            </div>
          </section>

          <section>
            {/* Navigation Links */}
            <nav className="w-3/4 flex">{navLinks}</nav>
          </section>
        </div>

        {/* After Scroll Navbar Section */}
        <div
          className={`bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 
                     py-1 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 2xl:py-2 3xl:py-3 
                     flex justify-between items-center fixed w-full z-40 transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div>
            <img src="/logo-nav-1.png" alt="Alaimagal Hotel Logo" 
                 className="w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 2xl:w-20 3xl:w-24" />
          </div>
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 3xl:gap-16 items-center">
            <nav>{scrolledNavLinks}</nav>
            <button className="bg-[#03552A] text-white 
                             px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-10 
                             py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3 2xl:py-2 3xl:py-4 
                             text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-xl 
                             rounded-md transition duration-300 hover:bg-[#024a24]">
              Visit Us
            </button>
          </div>
          <div>
            <img src="/logo-nav-2.png" alt="Alaimagal Hotel Logo" 
                 className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-48 3xl:w-56" />
          </div>
        </div>
      </div>

      {/* Mobile Navbar Section - Unchanged */}
      <div className={`md:hidden w-full fixed z-40 bg-none ${
          scrolled ? 'bg-white' : 'bg-transparent'
        }`}>
        <div className={`flex items-center justify-between px-4 ${scrolled ? 'py-2': 'py-4'}`}>
          <div className="flex items-center">
            <img src="/logo-main.png" alt="Alaimagal Hotel Logo" className="w-44 bg-none" />
          </div>

          {/* Hambuger Menu */}
          <div className={`${scrolled ? '': 'text-white' }  text-4xl`}>
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Slider */}
        <div
          className={`fixed top-0 right-0 h-screen w-48 bg-white z-50 transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } `}
        >
          <div className="flex flex-col p-6 pt-20 h-full">
            {mobileNavLinks}
            <button
              className="mt-8 bg-[#03552A] text-white px-6 py-2 rounded-md font-semibold text-lg transition duration-300"
              onClick={handleLinkClick}
            >
              Visit Us
            </button>
             <div className=" pt-60  text-[11px] flex flex-col items-center justify-center ">
            <p>Alaimagal Hotels © 2025</p>
            <p className='text-center'>
              Plated Digitally by{' '} <br/>
              <a
                className="font-semibold"
                target="_blank"
                href="https://www.thepixelatedcafe.com"
                rel="noopener noreferrer"
              >
                The Pixelated Café
              </a>
            </p>
      </div>
          </div>

         
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={toggleMobileMenu}
          ></div>
        )}
        
      </div>
      
      
    </div>
  );
};

export default Navbar;