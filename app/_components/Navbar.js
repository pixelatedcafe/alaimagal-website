'use client';

import React, { useState, useEffect } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=''>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        {/* Main Navbar Section */}
        <div className={`fixed w-full z-40 transition-opacity duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
            <nav className="w-3/4 flex">
              <ul className="flex pl-24 font-semibold space-x-20 text-white text-xl">
                <li className="relative group">
                  <a className="hover:font-extrabold hover:text-2xl" href="#home">
                    Home
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a className="hover:font-extrabold" href="#about">
                    Menu
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#rooms">Gallery</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#services">Review</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#about">About</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#contact">Contact</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            </nav>
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
            <nav>
              <ul className="flex font-semibold space-x-16 text-xl">
                <li className="relative group">
                  <a href="#home">Home</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#about">Menu</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#rooms">Gallery</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#services">Review</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#about">About</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <a href="#contact">Contact</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            </nav>

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
      <div className="md:hidden w-full fixed z-40 bg-none ">

          <div className='flex items-center justify-between px-4 py-4 '>
            
            <div className="flex items-center ">
                <img src="/logo-main.png" alt="Alaimagal Hotel Logo" className="w-44 bg-none" />
              </div>
          

          
            <div className='text-white  text-4xl'>
                  <HiMenuAlt3 />
                </div>
        </div>
        
        
      </div>
    </div>
    
  );
};

export default Navbar;