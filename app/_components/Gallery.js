'use client';
import React, { useState } from 'react';

const Gallery = () => {
  // State to manage the currently displayed main image
  const [mainImage, setMainImage] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);

  // Array of gallery card items with their respective images
  const galleryItems = [
    { id: 1, src: '/gallery_parotta.png', alt: 'Parotta Combos', cardSrc: '/gallery_parotta_card.png' },
    { id: 2, src: '/gallery_cup_rice.png', alt: 'Cup Rice Combos', cardSrc: '/gallery_cup_rice_card.png' },
    { id: 3, src: '/gallery_idiyapam.png', alt: 'Idiyappam Combos', cardSrc: '/gallery_idiyapam_card.png' },
  ];

  // Handler for clicking a gallery card
  const handleCardClick = (item) => {
    setMainImage({ src: item.src, alt: item.alt });
    setSelectedCardId(item.id);
  };

  return (
    <div id='gallery' className="w-full min-h-screen py-12 px-4 md:px-8">
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
                  {/* <div className="text-center">
                    <p className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                      selectedCardId === item.id ? 'text-amber-900' : 'text-white'
                    }`}>
                      {item.alt}
                    </p>
                    {selectedCardId === item.id && (
                      <div className="mt-2 w-8 h-0.5 bg-amber-700 mx-auto"></div>
                    )}
                  </div> */}
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
  );
};

export default Gallery;