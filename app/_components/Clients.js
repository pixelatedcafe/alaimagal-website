'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Clients = () => {
  const reviews = [
   {
      name: "Thiru",
      review: "Best restaurants in coimbatore. Nice food and service",
      rating: 5,
    },

    {
      name: "Dhiva",
      review: "Kari dosa was excellent and service also superb. Must try",
      rating: 5,
    },
    
    {
      name: "Alagesan",
      review: "Great value for money. The portions were generous and tasty.",
      rating: 4,
    },
    {
      name: "Srijith SS",
      review: "The food was absolutely amazing! I can't wait to come back.",
      rating: 5,
    },
    {
      name: "Barath Tamil",
      review: "A delightful dining experience with excellent service.",
      rating: 5,
    },
    {
      name: "Roshini N",
      review: "The ambiance was perfect for a family dinner. Highly recommend!",
      rating: 5,
    },
    {
      name: "Santhosh Sandy",
      review: "Reminds me of my grandmother's cooking. Perfect spice levels!",
      rating: 4,
    },
    {
      name: "Kishore Dudde Srinivasan",
      review: "Exceptional traditional flavors! The spices were perfectly balanced.",
      rating: 5,
    },
    {
      name: "Sairam K",
      review: "Authentic Tamil cuisine at its finest. The service was impeccable.",
      rating: 5,
    },
    {
      name: "Vikrant Vikaasa ",
      review: "Loved the homely atmosphere and the traditional cooking methods.",
      rating: 4,
    },
    {
      name: "Sankar K G",
      review: "Outstanding food quality and reasonable prices. Highly recommended!",
      rating: 5,
    },
    {
      name: "Harish Kumar",
      review: "The ambiance reminded me of home cooking. Absolutely delicious!",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      review: "Best Tamil food in the city. The flavors are authentic and rich.",
      rating: 4,
    },
    {
      name: "Priya Menon",
      review: "Wonderful experience! The staff was friendly and food was amazing.",
      rating: 5,
    },
    {
      name: "Arun Krishnan",
      review: "Traditional recipes prepared with love. Highly recommended!",
      rating: 5,
    },
    {
      name: "Hari",
      review: "Great vegetarian options too! The variety is impressive.",
      rating: 4,
    }
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const reviewsPerPage = 8;

  // Auto-cycle through reviews every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Calculate pagination
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentPageReviews = reviews.slice(startIndex, endIndex);

  // Handle review selection and update page if needed
  const handleReviewSelect = (globalIndex) => {
    setCurrentReviewIndex(globalIndex);
    const newPage = Math.floor(globalIndex / reviewsPerPage);
    setCurrentPage(newPage);
  };

  // Swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleSwipe(1);
    }
    if (isRightSwipe) {
      handleSwipe(-1);
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  // Animation variants for the featured card
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // Custom direction for animation based on swipe
  const [swipeDirection, setSwipeDirection] = useState(0);

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    setCurrentReviewIndex((prevIndex) => {
      if (direction > 0) {
        return (prevIndex + 1) % reviews.length;
      } else {
        return (prevIndex - 1 + reviews.length) % reviews.length;
      }
    });
  };

  return (
    <div id='review' className="relative bg-gradient-to-br from-green-50 via-white to-green-100 font-sans overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 tracking-wide">
            Client Reviews
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Review Section */}
        <div className="max-w-6xl py-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
            {/* Featured Review Card */}
            <div className="lg:col-span-3 relative">
              <div className="relative w-full h-[250px] overflow-hidden">
                <AnimatePresence initial={false} custom={swipeDirection}>
                  <motion.div
                    key={currentReviewIndex}
                    custom={swipeDirection}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute w-full bg-gradient-to-br from-green-700 to-green-800 text-white p-6 sm:p-8 rounded-3xl shadow-2xl cursor-pointer h-full flex flex-col justify-between"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    {/* Decorative Quote Mark */}
                    <div className="absolute top-4 left-4 text-4xl sm:text-6xl text-green-300 opacity-50 font-serif">"</div>

                    <div className="relative z-10 pt-6 sm:pt-8 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-100 mb-2">
                              {reviews[currentReviewIndex].name}
                            </h3>
                            <div className="text-xl sm:text-2xl text-yellow-300 mb-4">
                              {renderStars(reviews[currentReviewIndex].rating)}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-green-50 italic line-clamp-4">
                          {reviews[currentReviewIndex].review}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 right-4 w-12 sm:w-16 h-12 sm:h-16 border-2 border-green-400 rounded-full opacity-20"></div>
                    <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 border-2 border-green-300 rounded-full opacity-30"></div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Review Grid and Pagination (Hidden on Mobile) */}
            <div className="lg:col-span-2 flex-col gap-4 sm:gap-6 hidden lg:flex">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {currentPageReviews.map((review, pageIndex) => {
                  const globalIndex = startIndex + pageIndex;
                  const firstName = review.name.split(' ')[0];
                  return (
                    <div
                      key={globalIndex}
                      className={`aspect-square p-3 rounded-xl text-center cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col justify-center ${
                        globalIndex === currentReviewIndex
                          ? 'bg-gradient-to-br from-green-400 to-green-500 text-white shadow-lg shadow-green-300/50'
                          : 'bg-white hover:bg-green-50 shadow-md hover:shadow-lg'
                      }`}
                      onClick={() => handleReviewSelect(globalIndex)}
                    >
                      <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                        <div
                          className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            globalIndex === currentReviewIndex
                              ? 'bg-white text-green-600'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {firstName.charAt(0)}
                        </div>
                        <div>
                          <h3
                            className={`text-xs sm:text-sm font-semibold truncate max-w-full ${
                              globalIndex === currentReviewIndex ? 'text-white' : 'text-green-800'
                            }`}
                          >
                            {firstName}
                          </h3>
                          <div
                            className={`text-xs sm:text-sm ${
                              globalIndex === currentReviewIndex ? 'text-yellow-200' : 'text-yellow-500'
                            }`}
                          >
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className={`p-2 rounded-full transition-colors ${
                      currentPage === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                        currentPage === i
                          ? 'bg-green-500 text-white'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  < button
                    onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                    disabled={currentPage === totalPages - 1}
                    className={`p-2 rounded-full transition-colors ${
                      currentPage === totalPages - 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;