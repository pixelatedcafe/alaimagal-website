'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active section
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state
  const [showContactPopup, setShowContactPopup] = useState(false); // Track contact popup state

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
      const sections = ['home', 'menu', 'about', 'combos', 'review'];
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
      const sections = ['home', 'menu', 'about', 'combos', 'review'];
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

  // Handle contact click
  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactPopup(true);
  };

  // Close contact popup
  const closeContactPopup = () => {
    setShowContactPopup(false);
  };

  // Contact Popup Component
  const ContactPopup = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* Backdrop with blur effect */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    
    {/* Popup container */}
    <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl p-8 max-w-sm w-full mx-4 border border-gray-700/50 shadow-2xl">
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
      
      {/* Close button */}
      <button
        onClick={closeContactPopup}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-all duration-200 hover:scale-110 z-10"
      >
        <HiX />
      </button>
      
      {/* Popup content */}
      <div className="text-center relative z-10">
        {/* Title with glow effect */}
        <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h3>
        
        <div className="space-y-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919626066228" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl hover:from-green-600/30 hover:to-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
              </svg>
            </div>
            <span className="text-white font-medium group-hover:text-green-300 transition-colors duration-300">WhatsApp</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919626066228" // Replace with actual phone number
            className="group flex items-center p-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl hover:from-blue-600/30 hover:to-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <span className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">Phone</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@alaimagal.com" // Replace with actual email
            className="group flex items-center p-4 bg-gradient-to-r from-purple-600/20 to-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:from-purple-600/30 hover:to-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <span className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">Email</span>
          </a>
        </div>
      </div>

      {/* Subtle animated glow around the popup */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl -z-10 animate-pulse"></div>
    </div>
  </div>
);  

  // Common nav links JSX for desktop (main navbar)
  const navLinks = (
    <ul className="flex pl-6 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-24 3xl:pl-28 font-semibold 
                   space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20 3xl:space-x-24 
                   text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl">
      {['home', 'menu', 'about', 'combos', 'review'].map((section) => (
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
      <li className="relative group">
        <a
          className="transition-all duration-200 cursor-pointer"
          onClick={handleContactClick}
        >
          Contact
        </a>
        <span className="absolute left-0 bottom-0 h-[2px] sm:h-[3px] md:h-[4px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
      </li>
    </ul>
  );

  // Common nav links for desktop (scrolled navbar)
  const scrolledNavLinks = (
    <ul className="flex font-semibold space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12 2xl:space-x-16 3xl:space-x-20 
                   text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl">
      {['home', 'menu', 'about', 'combos', 'review'].map((section) => (
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
      <li className="relative group">
        <a
          className="transition-all duration-200 cursor-pointer"
          onClick={handleContactClick}
        >
          Contact
        </a>
        <span className="absolute left-0 bottom-0 h-[2px] sm:h-[3px] md:h-[4px] bg-[#03552A] transition-all duration-300 w-0 group-hover:w-full"></span>
      </li>
    </ul>
  );

  // Mobile nav links
const mobileNavLinks = (
  <ul className="flex flex-col space-y-6 text-xl font-semibold">
    {['home', 'menu', 'about', 'combos', 'review'].map((section) => (
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
      </li>
    ))}
    <li className="relative group">
      <a
        className="hover:font-extrabold hover:text-2xl cursor-pointer"
        onClick={(e) => {
          handleContactClick(e); // Pass the event to handleContactClick
          handleLinkClick(); // Close the mobile menu
        }}
      >
        Contact
      </a>
    </li>
  </ul>
);

  return (
    <div className="">
      {/* Contact Popup */}
      {showContactPopup && <ContactPopup />}
      
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
            <Link href="https://maps.app.goo.gl/u6wbCTTGXtmzhWBz8" target="_blank" className="">
              <button className="bg-[#03552A] text-white 
                               px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-10 
                               py-1.5 sm:py-2 md:py-2 lg:py-2 xl:py- 2xl:py-2 3xl:py-4 
                               text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-xl 
                               rounded-md transition duration-300 hover:bg-[#024a24] cursor-pointer">
                Visit Us
              </button>
              </Link>
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
                     py-1 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 2xl:py-2 3xl:py-3  shadow-md
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
              <Link href="https://maps.app.goo.gl/u6wbCTTGXtmzhWBz8" target="_blank" className="">
              <button className="bg-[#03552A] text-white 
                              px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-10 
                              py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3 2xl:py-2 3xl:py-4 
                              text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-xl 
                              rounded-md transition duration-300 hover:bg-[#024a24] cursor-pointer">
                Visit Us
              </button>
            </Link>
          </div>
          <div>
            <img src="/logo-nav-2.png" alt="Alaimagal Hotel Logo" 
                 className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-48 3xl:w-56" />
          </div>
        </div>
      </div>

      {/* Mobile Navbar Section */}
      <div className={`md:hidden w-full fixed z-40 bg-none ${
          scrolled ? 'bg-white' : 'bg-transparent'
        }`}>
        <div className={`flex items-center justify-between px-4 ${scrolled ? 'py-2': 'py-4'}`}>
          <div className="flex items-center">
            <img src="/logo-main.png" alt="Alaimagal Hotel Logo" className="w-55 bg-none" />
          </div>

          {/* Hambuger Menu */}
          <div className={`${scrolled ? '': 'text-white' }  text-4xl`}>
            <button onClick={toggleMobileMenu} className=''>
              {isMobileMenuOpen ? <HiX className='z-80' /> : <HiMenuAlt3 />}
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
            <Link href="https://maps.app.goo.gl/u6wbCTTGXtmzhWBz8" target="_blank" className="">
            <button
              className="mt-8 bg-[#03552A] text-white px-6 py-2 rounded-md font-semibold text-lg transition duration-300"
              onClick={handleLinkClick}
            >
              Visit Us
            </button>
            </Link>
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