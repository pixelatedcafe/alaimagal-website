import React from 'react'

const About = () => {
  return (
    <div className="bg-[url('/hero-bg-1.png')]  w-full h-screen bg-cover bg-center">
        <div className='py-7 mx-36 flex flex-col justify-center'>
            <h1 className='text-white font-extrabold text-4xl'>About Alaimagal Hotels</h1>
            <div className=' mt-4  p-5 bg-white/30 flex w-full  rounded-4xl'>
                <div className='w-7/12 px-15  text-white'>
                    <h3 className='text-3xl text-center font-extrabold'>Welcome to Alaimagal Hotels</h3>
                    <h6 className='text-xl text-center font-semibold'>A Taste of Tradition</h6>

                    <div className='flex flex-col pt-5 space-y-4 text-lg text-justify'>
                        <p>
                            At Alaimagal Hotels, we take pride in serving authentic Tamil Nadu-style non-vegetarian cuisine with age-old recipes passed down through generations. Established with a passion for rich flavors and heartfelt hospitality, our hotel stands as a humble tribute to the culinary heritage of our land.
                        </p>
                        <p>
                            Located at the heart of the community, Alaimagal Hotels is more than just a place to eat – it’s a place where tradition meets taste. Every dish we serve – from spicy mutton biryani and flavorful naatu kozhi kuzhambu to soul-satisfying fish fry – is prepared with handpicked ingredients and traditional cooking methods that bring out the true essence of Tamil cuisine.
                        </p>
                        <p>
                            We believe in warm service, generous portions, and unforgettable flavors. Whether you are here for a hearty lunch or a festive family dinner, our goal is to make you feel at home with every bite.
                        </p>
                    </div>

                    <div className='flex flex-col space-y-1 pt-5 '>
                        <h3 className='text-center text-xl font-bold'>Alaimagal Hotels</h3>
                        <p className='text-center'>where the taste of tradition lives on, every single day.</p>
                    </div>
                </div>
                
                <div className='w-5/12 justify-center items-center flex'>
                    <img src='/about-us-logo.png' alt='About Alaimagal Hotels' className='w-[380px]' />
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default About