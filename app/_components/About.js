import React from 'react';

const About = () => {
  return (
    <div id='about' className="bg-[url('/hero-bg-1.png')] w-full bg-cover bg-center">
      <div className="py-7 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col justify-center">
        <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
          About Alaimagal Hotels
        </h1>
        <div className="mt-4 p-4 sm:p-5 md:p-6 lg:p-8 bg-white/20 flex flex-col md:flex-row w-full rounded-4xl">
          <div className="w-full md:w-7/12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-15 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold">Welcome to Alaimagal Hotels</h3>
            <h6 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-center font-semibold">A Taste of Tradition</h6>

            <div className="flex md:hidden w-full md:w-5/12 justify-center items-center mt-4 md:mt-0">
            <img
              src="/about-us-logo.png"
              alt="About Alaimagal Hotels"
              className="w-[250px] xs:w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] xl:w-[380px] max-w-full h-auto"
            />
          </div>

            <div className="flex flex-col pt-5 space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
              <p>
                At Alaimagal Hotels, we take pride in serving authentic Tamil Nadu-style non-vegetarian cuisine with age-old recipes passed down through generations. Established with a passion for rich flavors and heartfelt hospitality, our hotel stands as a humble tribute to the culinary heritage of our land.
              </p>
              <p>
                Located at the heart of the community, Alaimagal Hotels is more than just a place to eat – it's a place where tradition meets taste. Every dish we serve – from spicy mutton biryani and flavorful naatu kozhi kuzhambu to soul-satisfying fish fry – is prepared with handpicked ingredients and traditional cooking methods that bring out the true essence of Tamil cuisine.
              </p>
              <p>
                We believe in warm service, generous portions, and unforgettable flavors. Whether you are here for a hearty lunch or a festive family dinner, our goal is to make you feel at home with every bite.
              </p>
            </div>

            <div className="flex flex-col space-y-1 pt-5">
              <h3 className="text-center text-lg sm:text-xl md:text-xl lg:text-2xl font-bold">Alaimagal Hotels</h3>
              <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">where the taste of tradition lives on, every single day.</p>
            </div>
          </div>

          <div className="hidden md:flex w-full md:w-5/12 justify-center items-center mt-4 md:mt-0">
            <img
              src="/about-us-logo.png"
              alt="About Alaimagal Hotels"
              className="w-[150px] xs:w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] xl:w-[380px] max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;