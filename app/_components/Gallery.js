'use client';
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  // State to manage the currently displayed main image
  const [mainImage, setMainImage] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  
  // Mobile carousel states
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Array of gallery card items with their respective images
  const galleryItems = [
    { id: 1, src: '/gallery_parotta.png', alt: 'Parotta Combos', cardSrc: '/gallery_parotta_card.png' },
    { id: 2, src: '/gallery_cup_rice.png', alt: 'Cup Rice Combos', cardSrc: '/gallery_cup_rice_card.png' },
    { id: 3, src: '/gallery_idiyapam.png', alt: 'Idiyappam Combos', cardSrc: '/gallery_idiyapam_card.png' },
  ];

  // Mobile carousel items
  const mobileGalleryItems = [
    { id: 1, src: '/gallery_non_veg_mobile.png', alt: 'Non Veg Meals' },
    { id: 2, src: '/gallery_cup_rice_mobile.png', alt: 'Cup Rice Meals' },
    { id: 3, src: '/gallery_idiyappam_mobile.png', alt: 'Idiyappam Meals' },
    { id: 4, src: '/gallery_idly_mobile.png', alt: 'Idly Meals' },
    { id: 5, src: '/gallery_parotta_mobile.png', alt: 'Parotta Meals' },
  ];

  // Handler for clicking a gallery card
  const handleCardClick = (item) => {
    setMainImage({ src: item.src, alt: item.alt });
    setSelectedCardId(item.id);
  };

  // Mobile carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mobileGalleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mobileGalleryItems.length) % mobileGalleryItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='gallery' className="">
      {/* Desktop Gallery Container */}
      <div className='hidden md:block w-full max-md:min-h-screen py-12 px-4 md:px-8'>
          <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-extrabold text-5xl md:text-6xl">
              Alaimagal Hotels Culinary Gallery
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 font-light italic">
              Savor the flavors of our exquisite dishes, crafted with love and tradition
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Dynamic Main Image or Placeholder Text */}
            <div className="w-full md:w-7/12 flex flex-col gap-8 justify-center items-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group bg-white">
                {mainImage ? (
                  <div className="relative">
                    <img
                      src={mainImage.src}
                      alt={mainImage.alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <p className="text-white text-xl font-bold mb-2">{mainImage.alt}</p>
                        <div className="w-12 h-0.5 bg-amber-400"></div>
                      </div>
                    </div>
                    {/* Decorative corner accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400 opacity-70"></div>
                  </div>
                ) : (
                  <div className="h-[325px] flex flex-col justify-center items-center p-8 text-center bg-gradient-to-br from-amber-50 to-orange-50">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-800 to-amber-500 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#] mb-4">
                      Discover Our Culinary Delights
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      From flaky parottas to aromatic cup rice and delicate idiyappam, our dishes are crafted with authentic flavors and fresh ingredients. <br/> Click a dish to explore!
                    </p>
                    <div className="mt-6 flex space-x-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src='/gallery_main.png'
                  alt="Main Hotel Dish"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <p className="text-white text-xl font-bold">Best Selling</p>
                    </div>
                    <div className="w-16 h-0.5 bg-yellow-400 mt-2"></div>
                  </div>
                </div>
                {/* Crown icon for best selling */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center opacity-90">
                  <svg className="w-4 h-4 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Gallery Cards Section */}
            <div className="w-full md:w-5/12 flex flex-col gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className={`relative w-full rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                    selectedCardId === item.id
                      ? 'shadow-2xl ring-4 ring-amber-400 ring-opacity-60 scale-105'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                  onClick={() => handleCardClick(item)}
                >
                  <img
                    src={item.cardSrc}
                    alt={item.alt}
                    className="w-full object-cover"
                  />
                  
                  {/* Selected card indicator */}
                  {selectedCardId === item.id && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-3 h-3 text-amber-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                    selectedCardId === item.id
                      ? 'bg-amber-400/20'
                      : 'bg-black/30 opacity-0 hover:opacity-100'
                  }`}>
                  </div>

                  {/* Glowing border animation for selected card */}
                  {selectedCardId === item.id && (
                    <div className="absolute inset-0 rounded-xl border-2 border-amber-300 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Gallery Section with Carousel */}
       {/* Mobile Gallery Section with Carousel */}
<div className='md:hidden w-full py-8'>
  <div className="text-center mb-8 px-4">
    <h1 className="font-extrabold text-2xl sm:text-3xl leading-tight text-gray-800">
      Alaimagal Hotels Culinary Gallery
    </h1>
    <p className="mt-4 text-sm sm:text-base text-gray-600 font-light italic px-2">
      Savor the flavors of our exquisite dishes, crafted with love and tradition
    </p>
    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
  </div>

  {/* Mobile Carousel Container */}
  <div className="relative px-8">
    {/* Carousel Wrapper with Peek View */}
    <div 
      className="relative overflow-visible pt-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Track */}
      <div className="relative flex items-center justify-center h-[600px]">
        {mobileGalleryItems.map((item, index) => {
          const isActive = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + mobileGalleryItems.length) % mobileGalleryItems.length;
          const isNext = index === (currentSlide + 1) % mobileGalleryItems.length;
          const isVisible = isActive || isPrev || isNext;

          if (!isVisible) return null;

          return (
            <div
              key={item.id}
              className={`absolute transition-all duration-500 ease-in-out ${
                isActive
                  ? 'z-30 scale-100 opacity-100 transform translate-x-0'
                  : isPrev
                  ? 'z-20 scale-90 opacity-60 transform -translate-x-16'
                  : isNext
                  ? 'z-20 scale-90 opacity-60 transform translate-x-16'
                  : 'z-10 scale-75 opacity-30'
              }`}
              style={{
                width: isActive ? '100%' : '85%',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-800 to-emerald-900">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-auto object-cover"
                />
                {/* Slide overlay with title - only show on active slide */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                    <h3 className="text-white text-lg font-bold mb-1">{item.alt}</h3>
                    <div className="w-12 h-0.5 bg-amber-400"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Invisible touch area for better swipe detection */}
      <div className="absolute top-0 left-0 h-80 w-full"></div>
    </div>

    {/* Dot Indicators */}
    <div className="flex justify-center space-x-2 mt-6">
      {mobileGalleryItems.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'bg-amber-400 scale-125 shadow-lg'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
        />
      ))}
    </div>

    {/* Swipe Instruction */}
    <div className="text-center mt-4">
      <p className="text-sm text-gray-500 italic">
        ← Swipe to explore more dishes →
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Gallery;