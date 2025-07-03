import React from 'react'

const Navbartmp = () => {
  return (
    <div>
      <div className='bg-white px-24 py-1 flex justify-between items-center fixed w-full z-40'>
        <div>
           <img src='/logo-nav-1.png' alt='Alaimagal Hotel Logo' className='w-[90px]' />
        </div>
        <div className='flex gap-16 items-center'>
            <nav className=''>
                  <ul className='flex font-semibold space-x-16  text-xl'>
                  <li className='relative group '>
                      <a className='' href='#home'>Home</a>
                      <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all  duration-300 group-hover:w-full'></span>
                  </li>
                  <li className='relative group'>
                      <a className='' href='#about'>Menu</a>
                      <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full'></span>
                  </li>
                  <li className='relative group'>
                      <a href='#rooms'>Gallery</a>
                      <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full'></span>
                  </li>
                  <li className='relative group'>
                      <a href='#services'>Review</a>
                      <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full'></span>
                  </li>
                  <li className='relative group'>
                      <a href='#about'>About</a>
                      <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full'></span>
                  </li>
                  <li className='relative group'>
                      <a href='#contact'>Contact</a>
                      <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-[#03552A] transition-all duration-300 group-hover:w-full'></span>
                  </li>
                  </ul>
              </nav>

              <button className='bg-[#03552A] text-white px-8 py-2 rounded-md transition duration-300'>
                  Visit Us
              </button>

              
          </div>
        <div>
          <img src='/logo-nav-2.png' alt='Alaimagal Hotel Logo' className='w-52' />
        </div>
      </div>
    </div>
  )
}

export default Navbartmp