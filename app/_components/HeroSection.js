'use client'
import React from 'react'
import { BiSolidFoodMenu } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div id='home' className=''>
      <div className='hidden md:block'>
        <div className='relative w-full min-h-screen flex'>
          {/* Main Content Section */}
          <section className='w-3/4 relative'>
            <div className="bg-[url('/hero-bg-1.png')] w-full min-h-screen bg-cover bg-center rounded-br-[120px]">
              <div className='pl-6 lg:pl-12 xl:pl-24 2xl:pl-32 pt-32 lg:pt-40 xl:pt-48 2xl:pt-56 pb-8'>
                {/* Hero Title */}
                <h1 className='text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-extrabold py-6 lg:py-8 xl:py-12 leading-tight'>
                  Authentic Non-Veg Delights.<br/> A Taste of Tradition.
                </h1>
                <h4 className='text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed max-w-2xl'>
                  Rooted in heritage, perfected with passion <br/> 
                  Alaimagal serves hearty South Indian non-veg <br/> 
                  meals with a warm, premium touch.
                </h4>

                {/* Hero Buttons */}
                <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 xl:space-x-8 py-8 lg:py-10 xl:py-14'>
                  <button className='bg-white font-semibold text-lg xl:text-xl flex items-center justify-center gap-2 px-6 lg:px-7 py-3 rounded-lg hover:bg-gray-100 transition-colors'>
                    View Menu <span className='text-2xl xl:text-3xl'><BiSolidFoodMenu /></span>
                  </button>
                  <button className='border-2 text-lg xl:text-xl font-semibold border-white text-white rounded-lg py-3 px-6 lg:px-8 hover:bg-white hover:text-black transition-colors'>
                    Visit Us
                  </button>
                </div>

                {/* Zomato Section */}
                <div className='flex flex-col items-start gap-3 lg:gap-4 max-w-2xl'>
                  <h1 className='text-white text-lg lg:text-xl'>
                    Dine-In Available | Party Orders Taken 
                  </h1>
                  <div className='flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4'> 
                    <h1 className='text-white text-lg lg:text-xl'>Order Online on</h1>
                    <div className='flex items-center gap-3 lg:gap-4'>
                      <a 
                        href='https://www.zomato.com/coimbatore/alaimagal-hotels-2-gandhipuram/order' 
                        target='_blank' 
                        className='cursor-pointer hover:scale-105 transition-transform'
                      >
                        <img src='/zomatonew.png' alt='Zomato Logo' className='w-20 lg:w-24 xl:w-28' />
                      </a>
                      <a 
                        href='https://www.swiggy.com/restaurants/alaimagal-hotels-2-gandhipuram-coimbatore-102205' 
                        target='_blank' 
                        className='cursor-pointer hover:scale-105 transition-transform'
                      >
                        <img src='/swiggynew.png' alt='Swiggy Logo' className='w-20 lg:w-24 xl:w-28' />
                      </a>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </section>

          {/* Right Background Section */}
          <section className="w-1/4 relative">
            <div className="bg-[url('/hero-bg-2.png')] w-full h-full min-h-screen bg-cover bg-right">
            </div>
          </section>

          {/* Hero Image - Responsive Positioning */}
          <div className='absolute top-16 lg:top-24 xl:top-32 2xl:top-40 right-0 lg:right-4 xl:right-8 2xl:right-16 z-10'>
            <img 
              src='/hero-image.png' 
              alt='' 
              className='w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[780px] py-4 lg:py-6 xl:py-8 max-w-none' 
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Version */}
      <div className='md:hidden'>
        <div className='bg-[url("/hero-bg-1.png")] px-4 py-2 w-full min-h-screen bg-cover bg-center'>
          <div className=''>
            {/* Hero Title */}
            <h1 className='text-2xl sm:text-3xl pt-16 sm:pt-20 text-white font-extrabold leading-tight'>
              Authentic Non-Veg Delights.<br/> A Taste of Tradition.
            </h1>
            
            <div className='py-5 flex justify-center'>
              <img src='/hero-image-mobile.png' alt='' className='w-80 sm:w-96 max-w-full' />
            </div>

            <h4 className='text-white text-lg sm:text-xl py-3 leading-relaxed'>
              Rooted in heritage, perfected with passion Alaimagal serves hearty South Indian non-veg meals with a warm, premium touch.
            </h4>

            {/* Hero Buttons */}
            <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 py-3'>
              <button className='bg-white font-semibold text-lg flex items-center justify-center gap-2 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors'>
                View Menu <span className='text-2xl'><BiSolidFoodMenu /></span>
              </button>
              <button className='border-2 text-lg font-semibold border-white text-white rounded-lg py-3 px-6 hover:bg-white hover:text-black transition-colors'>
                Visit Us
              </button>
            </div>

            {/* Zomato Section */}
            <div className='flex flex-col py-5 items-start gap-2'>
              <h1 className='text-white text-lg'>
                Dine-In Available | Party Orders Taken
              </h1>
              <div className='flex flex-col gap-2'>
                <h1 className='text-white text-base'>Order Online On</h1>
                <div className='flex items-center gap-3'>
                  <a 
                    href='https://www.zomato.com/coimbatore/alaimagal-hotels-2-gandhipuram/order' 
                    target='_blank' 
                    className='cursor-pointer hover:scale-105 transition-transform'
                  >
                    <img src='/zomatonew.png' alt='Zomato Logo' className='w-20 sm:w-24' />
                  </a>
                  <a 
                    href='https://www.swiggy.com/restaurants/alaimagal-hotels-2-gandhipuram-coimbatore-102205' 
                    target='_blank' 
                    className='cursor-pointer hover:scale-105 transition-transform'
                  >
                    <img src='/swiggynew.png' alt='Swiggy Logo' className='w-20 sm:w-24' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection