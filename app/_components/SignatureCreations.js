'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { IoDownload, IoChevronBack, IoChevronForward } from "react-icons/io5";

const SignatureCreations = () => {
  const [currentMainSlide, setCurrentMainSlide] = useState(0);
  const [currentSideSlide, setCurrentSideSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [imageLoadedStates, setImageLoadedStates] = useState({});

  const signatureMain = [
    {
      id: 1,
      name: 'Signature Full Meals',
      description: "A royal spread of Alaimagal's finest — biryani, raita, egg, gravy, and sweets, all plated with love. The ultimate feast for kings and queens of spice.",
      image: '/main_full_meals.png',
    },
    {
      id: 2,
      name: 'Signature Chicken Biryani',
      description: "Slow-cooked seeraga samba rice layered with marinated chicken and aromatic masalas. Served with raita, this is Alaimagal's timeless masterpiece.",
      image: '/main_chicken_briyani.png',
    },
    {
      id: 3,
      name: 'Signature Chicken Fried Rice',
      description: 'Wok-fried perfection with shredded chicken, crunchy veggies, and bold flavors in every grain. A street-style favorite turned signature dish.',
      image: '/main_chicken_fried_rice.png',
    },
    {
      id: 4,
      name: 'Signature Chicken Kothu',
      description: 'Chopped parotta mingled with spicy chicken, eggs, and gravy — a sizzling, smoky showstopper straight from the tawa to your soul.',
      image: '/main_chicken_kothu.png',
    },
    {
      id: 5,
      name: 'Signature Chicken Laba',
      description: "Tender chicken cooked in a fiery, thick gravy bursting with flavor and tradition. Perfect with parotta or dosa, it's Sunday lunch vibes any day.",
      image: '/main_chicken_laba.png',
    },
    {
      id: 6,
      name: 'Signature Kari Dosa',
      description: 'Crisp dosa crowned with spicy minced mutton masala. Crispy outside, juicy inside — a match made in Alaimagal heaven.',
      image: '/main_kari_dosa.png',
    },
    {
      id: 7,
      name: 'Signature Szechuan Fried Rice',
      description: "Alaimagal's Indo-Chinese twist — fiery Szechuan sauce tossed with rice, chicken, and veggies. Bold, bright, and blazing with flavor.",
      image: '/main_szechuan_fried_rice.png',
    }
  ];

  const signatureSide = [
    {
      id: 1,
      name: 'Signature Chicken 65',
      description: "Deep-fried chunks of chicken, crisp on the outside, juicy inside, tossed in Alaimagal's secret red masala — the OG of all sides.",
      image: '/side_chicken_65.png',
    },
    {
      id: 2,
      name: 'Signature Lemon Chicken',
      description: 'Zesty, tangy, and hot — this lemon-kissed chicken brings a refreshing punch to your spice ride.',
      image: '/side_lemon_chicken.png'
    },
    {
      id: 3,
      name: 'Signature Kholikondattam',
      description: "A rustic village-style dry chicken fry — smoky, bold, and rooted in Tamil tradition. One bite, you're hooked.",
      image: '/side_kholikondattam.png',
    },
    {
      id: 4,
      name: 'Signature Pallipalayam',
      description: 'A fiery Coimbatore classic made with dry red chilies, curry leaves, and no tomatoes — pure, punchy and proud.',
      image: '/side_pallipalayam.png',
    },
    {
      id: 5,
      name: 'Signature Uppu Kari',
      description: 'Salt, spice, and slow-fried mutton — this Chettinad treasure is dry, intense, and impossible to resist.',
      image: '/side_uppu_kari.png',
    },
    {
      id: 6,
      name: 'Signature Green 65',
      description: 'A vibrant twist on the classic — mint, coriander, and green chili come together in a herb-loaded blast of flavor.',
      image: '/side_green_65.png',
    },
    {
      id: 7,
      name: 'Signature Varutha Kari',
      description: 'Dry-fried mutton with roasted masalas, layered with deep South Indian soul. Bold, beefy, and beautiful.',
      image: '/side_varutha_kari.png',
    }
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-slide functionality for mobile/tablet
  useEffect(() => {
    if (isMobile || isTablet) {
      const mainInterval = setInterval(() => {
        setCurrentMainSlide((prev) => (prev + 1) % signatureMain.length);
      }, 10000); // Changed to 10 seconds

      const sideInterval = setInterval(() => {
        setCurrentSideSlide((prev) => (prev + 1) % signatureSide.length);
      }, 10000); // Changed to 10 seconds

      return () => {
        clearInterval(mainInterval);
        clearInterval(sideInterval);
      };
    }
  }, [isMobile, isTablet, signatureMain.length, signatureSide.length]);

  // Handle image load state
  const handleImageLoad = (imageId) => {
    setImageLoadedStates(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  const nextMainSlide = () => {
    setCurrentMainSlide((prev) => (prev + 1) % signatureMain.length);
  };

  const prevMainSlide = () => {
    setCurrentMainSlide((prev) => (prev - 1 + signatureMain.length) % signatureMain.length);
  };

  const nextSideSlide = () => {
    setCurrentSideSlide((prev) => (prev + 1) % signatureSide.length);
  };

  const prevSideSlide = () => {
    setCurrentSideSlide((prev) => (prev - 1 + signatureSide.length) % signatureSide.length);
  };

  const getItemsToShow = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const renderCarousel = (items, currentSlide, nextSlide, prevSlide, isMain = true) => {
    const itemsToShow = getItemsToShow();
    const visibleItems = [];
    
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentSlide + i) % items.length;
      visibleItems.push(items[index]);
    }

    return (
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-1 top-1/2 transform -translate-y-1/2 z-20 bg-[#03552A]/80 text-white p-3 rounded-full shadow-lg hover:bg-[#024020] transition-all duration-200 hover:scale-110"
        >
          <IoChevronBack size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute -right-1 top-1/2 transform -translate-y-1/2 z-20 bg-[#03552A]/80 text-white p-3 rounded-full shadow-lg hover:bg-[#024020] transition-all duration-200 hover:scale-110"
        >
          <IoChevronForward size={20} />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)` }}
          >
            {items.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className={`flex-shrink-0 p-3 ${
                  isMobile ? 'w-full' : isTablet ? 'w-1/2' : 'w-1/3'
                }`}
              >
                <div className="flex flex-col items-center">
                  {/* Enhanced Card Design */}
                  <div className="relative w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                    {/* Image Container with Fixed Aspect Ratio */}
                    <div className="relative w-full aspect-square overflow-hidden">
                      {/* Loading Shimmer Effect */}
                      {!imageLoadedStates[`${isMain ? 'main' : 'side'}-${item.id}`] && (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      )}
                      
                      {/* Actual Image */}
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className={`w-full h-full p-3 object-cover transition-opacity duration-300 ${
                          imageLoadedStates[`${isMain ? 'main' : 'side'}-${item.id}`] ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoad(`${isMain ? 'main' : 'side'}-${item.id}`)}
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div> */}
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-4">
                      {/* Description */}
                      <p className="text-[#03552A] text-sm h-24 leading-relaxed text-justify line-clamp-4 opacity-90">
                        {item.description}
                      </p>
                      
                      {/* Decorative Element */}
                      <div className="flex justify-center mt-3">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#03552A] to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: items.length }, (_, index) => (
            <button
              key={index}
              onClick={() => isMain ? setCurrentMainSlide(index) : setCurrentSideSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-[#03552A] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderDesktopView = () => (
    <>
      {/* Main Dishes */}
      <div className='flex'>
        <div className='relative w-full'>
          <div className='overflow-x-hidden'>
            <div className='flex flex-row gap-6 animate-scroll'>
              {signatureMain.map((item, index) => (
                <div key={item.id} className='flex items-center'>
                  <div className='p-4 flex flex-col items-center min-w-[400px]'>
                    <img src={item.image} alt={item.name} className='w-full object-cover rounded-lg' />
                    <p className='text-[#03552A] text-justify'>{item.description}</p>    
                  </div>
                  {index < signatureMain.length - 1 && (
                    <img
                      src='/seperator.png'
                      alt='separator'
                      className='h-[300px]'
                    />
                  )}
                </div>
              ))}
              {signatureMain.map((item) => (
                <div key={`second-${item.id}`} className='p-4 min-w-[400px]'>
                  <img src={item.image} alt={item.name} className='w-full object-cover rounded-lg' />
                  <p className='text-[#03552A] text-justify'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='absolute w-[55px] right-0 top-4 rounded-l-4xl bg-[#03552A] h-55 flex items-center justify-center'>
            <h1 className='text-white font-bold text-2xl transform rotate-90 whitespace-nowrap'>
              Main Course
            </h1>
          </div>
        </div>
      </div>

      {/* Side Dishes */}
      <div className='flex'>
        <div className='relative w-full'>
          <div className='absolute w-[50px] z-10 left-0 top-4 rounded-r-4xl bg-[#03552A] h-55 flex items-center justify-center opacity-100'>
            <h1 className='text-white font-semibold text-2xl transform rotate-270 whitespace-nowrap'>
              Side Dishes
            </h1>
          </div>
          <div className='overflow-x-hidden'>
            <div className='flex flex-row gap-6 animate-scroll-ii'>
              {signatureSide.map((item, index) => (
                <div key={item.id} className='flex items-center'>
                  <div className='p-4 flex flex-col items-center min-w-[400px]'>
                    <img src={item.image} alt={item.name} className='w-full object-cover rounded-lg' />
                    <p className='text-[#03552A]'>{item.description}</p>
                  </div>
                  {index < signatureMain.length - 1 && (
                    <img
                      src='/seperator.png'
                      alt='separator'
                      className='h-[300px]'
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div id='menu' className=''>
      {/* Header */}
      <div className='px-4 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center py-4'>
        <div className='mb-4 md:mb-0'>
          <h1 className='text-[#03552A] font-extrabold text-2xl md:text-3xl lg:text-[40px] text-center md:text-left'>
            Our Signature Creations
          </h1>
        </div>

        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 py-4 lg:py-14'>
          <Link href="/menu.pdf" target='_blank' className="  ">
          <button className='border-2 border-[#03552A] font-semibold text-lg lg:text-xl flex items-center justify-center gap-1 px-3 py-2 rounded-lg hover:bg-[#03552A] hover:text-white transition-colors'>
            View Full Menu 
          </button>
          </Link>
          <a href="/menu.pdf" download>
            <button className='bg-[#03552A] gap-1 cursor-pointer flex text-lg lg:text-xl font-semibold border-white text-white rounded-lg py-2 px-3 hover:bg-[#024020] transition-colors justify-center items-center'>
              Download Menu <span className='text-2xl lg:text-3xl'><IoDownload /></span>
            </button>
          </a>
        </div>
      </div>

      {/* Content */}
      {isMobile || isTablet ? (
        <div className="space-y-8 px-4">
          {/* Main Dishes Carousel */}
          <div className="mb-8">
            <div className='flex justify-center items-center mb-6'>
                <img src="/main_mobile_head.png" alt="Main Course" className="w-60" />
            </div>
            
            {renderCarousel(signatureMain, currentMainSlide, nextMainSlide, prevMainSlide, true)}
          </div>

          {/* Side Dishes Carousel */}
          <div className="mb-8">
            <div className='flex justify-center items-center mb-6'>
                <img src="/side_mobile_head.png" alt="Side Dishes" className="w-60" />
            </div>
            {renderCarousel(signatureSide, currentSideSlide, nextSideSlide, prevSideSlide, false)}
          </div>
        </div>
      ) : (
        renderDesktopView()
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-ii {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-ii {
          animation: scroll-ii 30s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        
        .h-55 {
          height: 220px;
        }
        
        .rotate-270 {
          transform: rotate(-90deg);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 1023px) {
          .animate-scroll,
          .animate-scroll-ii {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default SignatureCreations