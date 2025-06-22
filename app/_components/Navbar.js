import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full z-40'>
        <section className='w-full flex '>
            {/* Logo */}
            <div className='w-3/4 flex justify-center items-center'>
                <img src='/logo-main.png' alt='Alaimagal Hotel Logo' className='w-[350] py-8' />
            </div>
            
            {/* Visit Us */}
            <div className='w-1/4 flex justify-center items-start py-8'>
                <button className='bg-[#03552A] text-white px-8 py-2 rounded-md transition duration-300'>
                    Visit Us
                </button>
            </div>
        </section>

       <section className=''>
        {/* Navigation Links */}
        <nav className='w-3/4 flex'>
            <ul className='flex pl-24 font-semibold space-x-20 text-white text-xl'>
            <li className='relative group '>
                <a className='hover:font-extrabold hover:text-2xl' href='#home'>Home</a>
                <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all  duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group'>
                <a className='hover:font-extrabold' href='#about'>Menu</a>
                <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group'>
                <a href='#rooms'>Gallery</a>
                <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group'>
                <a href='#services'>Review</a>
                <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group'>
                <a href='#about'>About</a>
                <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group'>
                <a href='#contact'>Contact</a>
                <span className='absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            </ul>
        </nav>
        </section>
    </div>

  )
}

export default Navbar