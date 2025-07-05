'use client'
import React from 'react'
import { BiSolidFoodMenu } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div id='home' className=''>
      <div className='hidden md:block'>
        <div className='relative w-full flex'>
        <section className='w-3/4'>
          <div className="bg-[url('/hero-bg-1.png')] w-full h-screen bg-cover bg-center rounded-br-[120]">
            <div className='pl-8 lg:pl-16 xl:pl-20 2xl:pl-24'>
              {/* Hero Title */}
              <h1 className='text-3xl lg:text-4xl xl:text-5xl pt-32 lg:pt-40 xl:pt-48 2xl:pt-[200px] text-white font-extrabold py-6 lg:py-8 xl:py-12 leading-tight'>
                Authentic Non-Veg Delights.<br/> A Taste of Tradition.
              </h1>
              <h4 className='text-white text-xl lg:text-2xl xl:text-3xl max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-relaxed'>
                Rooted in heritage, perfected with passion <br className='hidden xl:block'/> 
                Alaimagal serves hearty South Indian non-veg <br className='hidden xl:block'/> 
                meals with a warm, premium touch.
              </h4>

              {/* Hero Buttons */}
              <div className='flex space-x-4 lg:space-x-6 xl:space-x-8 py-8 lg:py-10 xl:py-14'>
                <button className='bg-white font-semibold text-lg lg:text-xl flex items-center gap-1 px-5 lg:px-6 xl:px-7 py-2 rounded-lg hover:bg-gray-100 transition-colors'>
                  View Menu <span className='text-2xl lg:text-3xl'><BiSolidFoodMenu /></span>
                </button>
                <button className='border-2 text-lg lg:text-xl font-semibold border-white text-white rounded-lg py-2 px-6 lg:px-7 xl:px-8 hover:bg-white hover:text-black transition-colors'>
                  Visit Us
                </button>
              </div>

              {/* Zomato Section */}
              <div className='flex flex-col items-start gap-2 max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
                <h1 className='text-white text-lg lg:text-xl'>
                  Dine-In Available | Party Orders Taken 
                </h1>
                <div className='flex items-center gap-2 flex-wrap'> 
                  <h1 className='text-white text-lg lg:text-xl'>Order Online on</h1>
                  <div className='flex items-center gap-2'>
                    <a href='https://www.zomato.com/coimbatore/alaimagal-hotels-2-gandhipuram/order' target='_blank' className='cursor-pointer hover:opacity-80 transition-opacity'>
                      <img src='/zomatonew.png' alt='Zomato Logo' className='w-20 lg:w-24 xl:w-[100px]' />
                    </a>
                    <a href='https://www.swiggy.com/restaurants/alaimagal-hotels-2-gandhipuram-coimbatore-102205' target='_blank' className='cursor-pointer hover:opacity-80 transition-opacity'>
                      <img src='/swiggynew.png' alt='Swiggy Logo' className='w-20 lg:w-24 xl:w-[100px]' />
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </section>

        <section className="w-1/4">
          <div className="bg-[url('/hero-bg-2.png')] w-full h-full bg-cover bg-right">
          </div>
        </section>
        </div>

        <div className='absolute top-20 lg:top-24 xl:top-32 right-0 lg:right-4 xl:right-0'>
          <img src='/hero-image.png' alt='' className='w-[500px] lg:w-[650px] xl:w-[780px] py-4 lg:py-6 xl:py-8' />
        </div>
      </div>
      
      <div className='md:hidden'>
        <div className='bg-[url("/hero-bg-1.png")] px-4 p-2 w-full h-screen bg-cover bg-center'>
          <div className=''>
            {/* Hero Title */}
            <h1 className='text-3xl pt-20 text-white font-extrabold '>Authentic Non-Veg Delights.<br/> A Taste of Tradition.</h1>
            <div className='py-5'>
              <img src='/hero-image-mobile.png' alt='' className='w-96' />
            </div>

            <h4 className='text-white text-xl py-3'>
              Rooted in heritage, perfected with passion Alaimagal serves hearty South Indian non-veg meals with a warm, premium touch.
            </h4>

            {/* Hero Buttons */}
            <div className='flex space-x-8 py-3'>
              <button className='bg-white font-semibold text-lg flex items-center gap-1 px-7 py-2 rounded-lg'>
                View Menu <span className='text-2xl'><BiSolidFoodMenu /></span>
              </button>
              <button className='border-2 text-lg font-semibold border-white text-white rounded-lg py-2 px-8'>
                Visit Us
              </button>
            </div>

            {/* Zomato Section */}
            <div className='flex flex-col py-5 items-start gap-1'>
              <h1 className='text-white text-lg'>
                Dine-In Available | Party Orders Taken
              </h1>
              <div className='flex items-center gap-2 py-2'>
                 <h1 className='text-white'>Order Online On</h1>
              <div className='flex items-center gap-2 py-2'>
                <a href='https://www.zomato.com/coimbatore/alaimagal-hotels-2-gandhipuram/order' target='_blank' className='cusrsor-pointer'><img src='/zomatonew.png' alt='Zomato Logo' className='w-[100px]' /></a>
              <a href='https://www.swiggy.com/restaurants/alaimagal-hotels-2-gandhipuram-coimbatore-102205' target='_blank' className='cusrsor-pointer'><img src='/swiggynew.png' alt='Swiggy Logo' className='w-[100px]' /></a>
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