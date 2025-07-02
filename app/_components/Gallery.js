import React from 'react'

const Gallery = () => {
  return (
    <div className='w-full flex'>
        <div className='w-7/12 flex flex-col justify-center items-center'>

            <div className='flex flex-col justify-center'>
                <h1 className='font-extrabold text-4xl'> Alaimagal Hotels Gallery
                </h1>
            </div>

            <div>
                <img src='/gallery_main.png' alt='Gallery Image Main' className='' />

            </div>

        </div>

        <div className='w-5/12'>

            <div className='flex flex-col justify-between items-center py-8'>
                <img src='/gallery_1.png' alt='Gallery Image 1' className='w-[300px] h-[300px] object-cover rounded-lg' />
                <img src='/gallery_2.png' alt='Gallery Image 2' className='w-[300px] h-[300px] object-cover rounded-lg' />
                <img src='/gallery_3.png' alt='Gallery Image 3' className='w-[300px] h-[300px] object-cover rounded-lg' />
            </div>

        </div>
    </div>
  )
}

export default Gallery