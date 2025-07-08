
import Link from 'next/link';
import React from 'react'
import { BiSolidFoodMenu } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div id='home' className=''>
      <div className='hidden md:block'>
        <div className='relative w-full flex'>
          <section className='w-3/4'>
            <div className="bg-[url('/hero-bg-1.png')] w-full max-md:min-h-screen bg-cover bg-center rounded-br-[120px]">
              <div className='pl-4 sm:pl-6 md:pl-12 lg:pl-12 xl:pl-[75px] 2xl:pl-[90px] 3xl:pl-24'>
                {/* Hero Title */}
                <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-7xl 
                               pt-20 sm:pt-24 md:pt-[150px] lg:pt-[160px] xl:pt-[170px] 2xl:pt-48 3xl:pt-56 
                               text-white font-extrabold py-4 sm:py-6 lg:py-8 xl:py-12 leading-tight'>
                  Authentic Non-Veg Delights.<br/> A Taste of Tradition.
                </h1>
                
                <h4 className='text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-4xl 
                               max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 
                               leading-relaxed'>
                  Rooted in heritage, perfected with passion <br className=''/> 
                  Alaimagal serves hearty South Indian non-veg <br className=''/> 
                  meals with a warm, premium touch.
                </h4>

                {/* Hero Buttons */}
                <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 xl:space-x-8 
                               py-6 sm:py-8 lg:py-10 xl:py-10'>
                                <Link href="/menu" className="  ">
                  <button className='bg-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 
                                   flex items-center justify-center gap-1 px-4 sm:px-5 lg:px-6 xl:px-7 2xl:px-8 
                                   py-2 sm:py-2.5 lg:py-3 xl:py-3 rounded-lg hover:bg-gray-100 transition-colors 
                                   min-w-[140px] sm:min-w-[160px] lg:min-w-[180px] cursor-pointer'>
                    View Menu <span className='text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl'><BiSolidFoodMenu /></span>
                    
                  </button>
                  </Link>
                  <Link href="https://maps.app.goo.gl/u6wbCTTGXtmzhWBz8" target="_blank" className="  ">
                    <button className='border-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 
                                    font-semibold border-white text-white rounded-lg py-2 sm:py-2.5 lg:py-3 xl:py-3 
                                    px-4 sm:px-6 lg:px-7 xl:px-8 2xl:px-9 hover:bg-white hover:text-black transition-colors 
                                    min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] cursor-pointer'>
                      Visit Us
                    </button>
                  </Link>
                </div>

                {/* Zomato Section */}
                <div className='flex flex-col items-start gap-2 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 
                               pb-8 sm:pb-12 lg:pb-16 xl:pb-20'>
                  <h1 className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl'>
                    Dine-In Available | Party Orders Taken 
                  </h1>
                  <div className='flex items-center gap-2 flex-wrap'> 
                    <h1 className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl'>
                      Order Online on
                    </h1>
                    <div className='flex items-center gap-2'>
                      <a href='https://www.zomato.com/coimbatore/alaimagal-hotels-2-gandhipuram/order' 
                         target='_blank' 
                         className='cursor-pointer hover:opacity-80 transition-opacity'>
                        <img src='/zomatonew.png' alt='Zomato Logo' 
                             className='w-16 sm:w-20 lg:w-24 xl:w-[100px] 2xl:w-[100px] 3xl:w-[140px]' />
                      </a>
                      <a href='https://www.swiggy.com/restaurants/alaimagal-hotels-2-gandhipuram-coimbatore-102205' 
                         target='_blank' 
                         className='cursor-pointer hover:opacity-80 transition-opacity'>
                        <img src='/swiggynew.png' alt='Swiggy Logo' 
                             className='w-16 sm:w-20 lg:w-24 xl:w-[100px] 2xl:w-[100px] 3xl:w-[140px]' />
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

        {/* Hero Image - Responsive positioning */}
        <div className='absolute top-20 sm:top-24 md:top-32 lg:top-36 xl:top-40 2xl:top-40 3xl:top-48 
                       right-0 sm:right-2 md:right-0 lg:right-4 xl:right-0 2xl:right-0 3xl:right-16'>
          <img src='/hero-image.png' alt='' 
               className='w-[280px] sm:w-[320px] md:w-[500px] lg:w-[500px] xl:w-[650px] 2xl:w-[780px] 3xl:w-[900px] 
                         py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8 2xl:py-10 3xl:py-12' />
        </div>
      </div>
      
      {/* Mobile View */}
      <div className='md:hidden'>
        <div className='bg-[url("/hero-bg-1.png")] px-4 p-2 w-full min-h-screen bg-cover bg-center'>
          <div className=''>
            {/* Hero Title */}
            <h1 className=' text-3xl xs:text-3xl sm:text-4xl pt-20 xs:pt-20 text-white font-extrabold leading-tight'>
              Authentic Non-Veg Delights.<br/> A Taste of Tradition.
            </h1>
            
            <div className='py-4 xs:py-5 flex justify-center'>
              <img src='/hero-image-mobile.png' alt='' 
                   className='w-80 xs:w-96 sm:w-[420px] max-w-full' />
            </div>

            <h4 className='text-white text-lg xs:text-xl sm:text-2xl py-3 leading-relaxed'>
              Rooted in heritage, perfected with passion Alaimagal serves hearty South Indian non-veg meals with a warm, premium touch.
            </h4>

            {/* Hero Buttons */}
            <div className='flex justify-center items-center xs:flex-row space-x-5 xs:space-y-0 xs:space-x-4 sm:space-x-8 py-3'>
              <button className='bg-white font-semibold text-base xs:text-lg sm:text-xl flex items-center justify-center gap-1 
                               px-6 xs:px-7 sm:px-8 py-2 xs:py-2.5 rounded-lg hover:bg-gray-100 transition-colors 
                               min-w-[140px] xs:min-w-[160px]'>
                View Menu <span className='text-xl xs:text-2xl sm:text-3xl'><BiSolidFoodMenu /></span>
              </button>
                <Link href="https://maps.app.goo.gl/u6wbCTTGXtmzhWBz8" target="_blank" className="  ">
                <button className='cursor-pointer border-2 text-base xs:text-lg sm:text-xl font-semibold border-white text-white 
                                rounded-lg py-2 xs:py-2.5 px-6 xs:px-8 sm:px-10 hover:bg-white hover:text-black 
                                transition-colors min-w-[120px] xs:min-w-[140px] cursor-pointer'>
                  Visit Us
                </button>
              </Link>
            </div>

            {/* Zomato Section */}
            <div className='flex flex-col py-4 xs:py-5 items-start gap-1'>
              <h1 className='text-white text-base xs:text-lg sm:text-xl'>
                Dine-In Available | Party Orders Taken
              </h1>
              <div className='flex items-center gap-2 py-2'>
                <h1 className='text-white text-base xs:text-lg sm:text-xl'>Order Online On</h1>
                <div className='flex items-center gap-2 py-2'>
                  <a href='https://www.zomato.com/coimbatore/alaimagal-hotels-2-gandhipuram/order' 
                     target='_blank' 
                     className='cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src='/zomatonew.png' alt='Zomato Logo' 
                         className='w-20 xs:w-24 sm:w-28' />
                  </a>
                  <a href='https://www.swiggy.com/restaurants/alaimagal-hotels-2-gandhipuram-coimbatore-102205' 
                     target='_blank' 
                     className='cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src='/swiggynew.png' alt='Swiggy Logo' 
                         className='w-20 xs:w-24 sm:w-28' />
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