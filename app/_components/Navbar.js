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
    <ul className="flex pl-24 font-semibold space-x-20 text-white text-xl">
      {['home', 'menu', 'about', 'gallery', 'review', 'contact'].map((section) => (
        <li key={section} className="relative group">
          <a
            className={`${
              activeSection === section ? 'font-extrabold text-2xl' : ''
            } hover:font-extrabold hover:text-2xl`}
            href={`#${section}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
          <span
            className={`absolute left-0 bottom-0 h-[4px] bg-white transition-all duration-300 ${
              activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          ></span>
        </li>
      ))}
    </ul>
  );

  // Common nav links for desktop (scrolled navbar)
  const scrolledNavLinks = (
    <ul className="flex font-semibold space-x-16 text-xl">
      {['home', 'menu', 'about', 'gallery', 'review', 'contact'].map((section) => (
        <li key={section} className="relative group">
          <a
            className={`${activeSection === section ? 'font-extrabold' : ''} hover:font-extrabold`}
            href={`#${section}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
          <span
            className={`absolute left-0 bottom-0 h-[4px] bg-[#03552A] transition-all duration-300 ${
              activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          ></span>
        </li>
      ))}
    </ul>
  );

  // Mobile nav links
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
              <img src="/logo-main.png" alt="Alaimagal Hotel Logo" className="w-[350px] py-8" />
            </div>

            {/* Visit Us */}
            <div className="w-1/4 flex justify-center items-start py-8">
              <button className="bg-[#03552A] text-white px-8 py-2 rounded-md transition duration-300">
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
          className={`bg-white px-24 py-1 flex justify-between items-center fixed w-full z-40 transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div>
            <img src="/logo-nav-1.png" alt="Alaimagal Hotel Logo" className="w-20" />
          </div>
          <div className="flex gap-16 items-center">
            <nav>{scrolledNavLinks}</nav>
            <button className="bg-[#03552A] text-white px-8 py-2 rounded-md transition duration-300">
              Visit Us
            </button>
          </div>
          <div>
            <img src="/logo-nav-2.png" alt="Alaimagal Hotel Logo" className="w-52" />
          </div>
        </div>
      </div>

      {/* Mobile Navbar Section */}
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