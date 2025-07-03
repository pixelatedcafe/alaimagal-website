'use client';
import React, { useState, useEffect } from 'react';

const Clients = () => {
  const reviews = [
    {
      name: "Alagesan",
      review: "At Aaimagal Hotels, we take pride in serving authentic Tamil Nadu-style non-vegetarian cuisine with age-old recipes passed down through generations.",
      rating: 5,
    },
    {
      name: "John Doe",
      review: "The food was absolutely amazing! I can't wait to come back.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "A delightful dining experience with excellent service.",
      rating: 4,
    },
    {
      name: "Alice Johnson",
      review: "The ambiance was perfect for a family dinner. Highly recommend!",
      rating: 5,
    },
    {
      name: "Bob Brown",
      review: "Great value for money. The portions were generous and tasty.",
      rating: 4,
    },
    {
      name: "Sarah Wilson",
      review: "Exceptional traditional flavors! The spices were perfectly balanced.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      review: "Authentic Tamil cuisine at its finest. The service was impeccable.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      review: "Loved the homely atmosphere and the traditional cooking methods.",
      rating: 4,
    },
    {
      name: "David Kumar",
      review: "Outstanding food quality and reasonable prices. Highly recommended!",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      review: "The ambiance reminded me of home cooking. Absolutely delicious!",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      review: "Best Tamil food in the city. The flavors are authentic and rich.",
      rating: 4,
    },
    {
      name: "Emma Johnson",
      review: "Wonderful experience! The staff was friendly and food was amazing.",
      rating: 5,
    },
    {
      name: "Arun Krishnan",
      review: "Traditional recipes prepared with love. Highly recommended!",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      review: "Great vegetarian options too! The variety is impressive.",
      rating: 4,
    },
    {
      name: "Vijay Nair",
      review: "Reminds me of my grandmother's cooking. Perfect spice levels!",
      rating: 5,
    },
    {
      name: "Jennifer Lee",
      review: "Exceptional service and mouth-watering dishes. Will visit again!",
      rating: 5,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 6

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

  // Check if current review is on current page
  const isCurrentReviewOnPage = () => {
    return currentReviewIndex >= startIndex && currentReviewIndex < endIndex;
  };

  // Function to manually cycle through reviews
  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 font-sans overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0 opacity-10"> */}
        {/* Top Left Decorative Pattern */}
        {/* <div className="absolute top-0 left-0 w-96 h-96 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full border-4 border-green-300 rounded-full opacity-30"></div>
          <div className="absolute top-8 left-8 w-80 h-80 border-2 border-green-400 rounded-full opacity-40"></div>
          <div className="absolute top-16 left-16 w-64 h-64 border-2 border-green-500 rounded-full opacity-50"></div>
        </div> */}
        
        {/* Top Right Decorative Pattern */}
        {/* <div className="absolute top-0 right-0 w-96 h-96 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full border-4 border-green-300 rounded-full opacity-30"></div>
          <div className="absolute top-8 right-8 w-80 h-80 border-2 border-green-400 rounded-full opacity-40"></div>
          <div className="absolute top-16 right-16 w-64 h-64 border-2 border-green-500 rounded-full opacity-50"></div>
        </div> */}

        {/* Bottom Decorative Elements */}
        {/* <div className="absolute bottom-0 left-1/4 w-32 h-32 border-2 border-green-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-green-500 rounded-full opacity-25"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border-2 border-green-600 rounded-full opacity-30"></div> */}
      {/* </div> */}

      {/* Main Content */}
      <div className="relative z-10 py-16 px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4 tracking-wide">
            Client Reviews
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Review Section */}
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Featured Review Card */}
            <div className="lg:col-span-2">
              <div
                className="relative bg-gradient-to-br from-green-700 to-green-800 text-white p-8 rounded-3xl shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-green-300/50"
                onClick={nextReview}
              >
                {/* Decorative Quote Mark */}
                <div className="absolute top-4 left-4 text-6xl text-green-300 opacity-50 font-serif">"</div>
                
                {/* Progress Bar */}
                {/* <div className="absolute top-0 left-0 w-full h-2 bg-green-600 rounded-t-3xl">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-t-3xl transition-all duration-300"
                    style={{ width: `${((currentReviewIndex + 1) / reviews.length) * 100}%` }}
                  ></div>
                </div> */}

                <div className="relative z-10 pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-green-100 mb-2">
                        {reviews[currentReviewIndex].name}
                      </h3>
                      <div className="text-3xl text-yellow-300 mb-4">
                        {renderStars(reviews[currentReviewIndex].rating)}
                      </div>
                    </div>
                    <div className="text-sm text-green-200 bg-green-600 px-4 py-2 rounded-full">
                      {currentReviewIndex + 1} of {reviews.length}
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-green-50 italic">
                    {reviews[currentReviewIndex].review}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-green-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 border-2 border-green-300 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Review Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
                All Reviews
              </h2>
              
              <div className="grid grid-cols-3 gap-3">
                {currentPageReviews.map((review, pageIndex) => {
                  const globalIndex = startIndex + pageIndex;
                  return (
                    <div
                      key={globalIndex}
                      className={`aspect-square p-3 rounded-xl text-center cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col justify-center ${
                        globalIndex === currentReviewIndex 
                          ? 'bg-gradient-to-br from-green-400 to-green-500 text-white shadow-lg shadow-green-300/50 transform scale-105' 
                          : 'bg-white hover:bg-green-50 shadow-md hover:shadow-lg'
                      }`}
                      onClick={() => handleReviewSelect(globalIndex)}
                    >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          globalIndex === currentReviewIndex 
                            ? 'bg-white text-green-600' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className={`text-xs font-semibold truncate max-w-full ${
                            globalIndex === currentReviewIndex ? 'text-white' : 'text-green-800'
                          }`}>
                            {review.name}
                          </h3>
                          <div className={`text-xs ${
                            globalIndex === currentReviewIndex ? 'text-yellow-200' : 'text-yellow-500'
                          }`}>
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
                <div className="flex justify-center items-center space-x-2 mt-4">
                  <button
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className={`p-2 rounded-full transition-colors ${
                      currentPage === 0 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-8 h-8 rounded-full text-sm font-semibold transition-colors ${
                        currentPage === i 
                          ? 'bg-green-500 text-white' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                    disabled={currentPage === totalPages - 1}
                    className={`p-2 rounded-full transition-colors ${
                      currentPage === totalPages - 1 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Page Info */}
              {totalPages > 1 && (
                <div className="text-center text-xs text-green-600 bg-green-50 p-2 rounded-lg">
                  Page {currentPage + 1} of {totalPages} • {reviews.length} total reviews
                </div>
              )}

              {/* Auto-cycle indicator */}
              {/* <div className="text-center text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Auto-cycling every 10 seconds
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      {/* <div 
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={nextReview}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div> */}
    </div>
  );
};

export default Clients;