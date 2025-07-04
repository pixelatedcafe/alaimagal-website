import React from 'react'

const MobileNav = () => {
  return (
    <div className="md:hidden flex justify-between  bg-none">
            {/* Mobile Navbar Section */}
            <div>
                <div className="flex items-center ">
                    <img src="/logo-main.png" alt="Alaimagal Hotel Logo" className="w-44 bg-transparent" />
                </div>
            </div>
    
            <div>
                <div className='text-black'>
                    <HiMenuAlt3 />
                </div>
            </div>
            
          </div>
  )
}

export default MobileNav