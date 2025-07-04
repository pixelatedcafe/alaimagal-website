'use client'
import React from 'react'
import { BiSolidFoodMenu } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div className=''>
      <div className='hidden md:block'>
        <div className='relative w-full flex'>
        <section className='w-3/4'>
          <div className="bg-[url('/hero-bg-1.png')]  w-full h-screen bg-cover bg-center rounded-br-[120]">
            <div className='pl-24'>
              {/* Hero Title */}
              <h1 className='text-5xl pt-[200] text-white font-extrabold py-12'>Authentic Non-Veg Delights.<br/> A Taste of Tradition.</h1>
              <h4 className='text-white text-3xl'>Rooted in heritage, perfected with passion <br/> 
                Alaimagal serves hearty South Indian non-veg <br/> meals with a warm, premium touch.</h4>

              {/* Hero Buttons */}
              <div className='flex space-x-8 py-14'>
                <button className='bg-white font-semibold text-xl flex items-center gap-1 px-7 py-2 rounded-lg'>
                  View Menu <span className='text-3xl'><BiSolidFoodMenu /></span>
                </button>
                <button className='border-2 text-xl font-semibold border-white text-white rounded-lg py-2 px-8'>
                  Visit Us
                </button>
              </div>

              {/* Zomato Section */}
              <div className='flex items-center gap-2'>
                <h1 className='text-white text-xl'>
                  Dine-In Available | Order Online on   
                </h1>
                <a href='https://www.zomato.com/coimbatore/alaimagal-hotels-2-gandhipuram/order' target='_blank' className='cusrsor-pointer'><img src='/zomatonew.png' alt='Zomato Logo' className='w-[100px]' /></a>
              
              </div>

              

            </div> 
          </div>
      </section>

      <section className="w-1/4">
        <div className="bg-[url('/hero-bg-2.png')] w-[350] h-full bg-cover bg-right">
          
        </div>
        
      </section>
      </div>

      <div className='absolute top-32 right-0'>
        <img src='/hero-image.png' alt='' className='w-[780px] py-8' />
      </div>
      </div>
      
      <div className='md:hidden'>
        <div className='bg-[url("/hero-bg-1.png")] p-2 w-full h-screen bg-cover bg-center'>
          <div className=''>
            {/* Hero Title */}
            <h1 className='text-3xl pt-24 text-white font-extrabold '>Authentic Non-Veg Delights.<br/> A Taste of Tradition.</h1>
            <div className=''>
              <img src='/hero-image-mobile.png' alt='' className='w-96' />
            </div>


            <h4 className='text-white text-xl'>Rooted in heritage, perfected with passion 
              Alaimagal serves hearty South Indian non-veg meals with a warm, premium touch.</h4>

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
            <div className='flex items-center gap-2'>
              <h1 className='text-white text-lg'>
                Dine-In Available | Order Online on   
              </h1>
              <a href='https://www.zomato.com/coimbatore/alaimagal-hotels-2-gandhipuram/order' target='_blank' className='cusrsor-pointer'><img src='/zomatonew.png' alt='Zomato Logo' className='w-[100px]' /></a>
            
            </div>
          </div> 
        </div>

      </div>

      
    </div>
  )
}

export default HeroSection