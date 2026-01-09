
import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

// Mobile images - 26 images for mobile "20" shape
const mobileImages = [
  { id: 1, img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", title: "Wedding 1" },
  { id: 2, img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80", title: "Wedding 2" },
  { id: 3, img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80", title: "Wedding 3" },
  { id: 4, img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80", title: "Wedding 4" },
  { id: 5, img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80", title: "Wedding 5" },
  { id: 6, img: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80", title: "Wedding 6" },
  { id: 7, img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80", title: "Wedding 7" },
  { id: 8, img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80", title: "Wedding 8" },
  { id: 9, img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", title: "Wedding 9" },
  { id: 10, img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80", title: "Wedding 10" },
  { id: 11, img: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?auto=format&fit=crop&w=800&q=80", title: "Wedding 11" },
  { id: 12, img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80", title: "Wedding 12" },
  { id: 13, img: "https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=800&q=80", title: "Wedding 13" },
  { id: 14, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", title: "Wedding 14" },
  { id: 15, img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80", title: "Wedding 15" },
  { id: 16, img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80", title: "Wedding 16" },
  { id: 17, img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=80", title: "Wedding 17" },
  { id: 18, img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80", title: "Wedding 18" },
  { id: 19, img: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=800&q=80", title: "Wedding 19" },
  { id: 20, img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80", title: "Wedding 20" },
  { id: 21, img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80", title: "Wedding 21" },
  { id: 22, img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80", title: "Wedding 22" },
  { id: 23, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", title: "Wedding 23" },
  { id: 24, img: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=800&q=80", title: "Wedding 24" },
  { id: 25, img: "https://images.unsplash.com/photo-1460364157752-926555421a7e?auto=format&fit=crop&w=800&q=80", title: "Wedding 25" },
  { id: 26, img: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=800&q=80", title: "Wedding 26" },
];

// Desktop images - 31 images for desktop "20" shape
const desktopImages = [
  { id: 1, img: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?auto=format&fit=crop&w=800&q=80", title: "Wedding 1" },
  { id: 2, img: "https://images.unsplash.com/photo-1543965170-4c01a586684e?auto=format&fit=crop&w=800&q=80", title: "Wedding 2" },
  { id: 3, img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80", title: "Wedding 3" },
  { id: 4, img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", title: "Wedding 4" },
  { id: 5, img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80", title: "Wedding 5" },
  { id: 6, img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80", title: "Wedding 6" },
  { id: 7, img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80", title: "Wedding 7" },
  { id: 8, img: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80", title: "Wedding 8" },
  { id: 9, img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80", title: "Wedding 9" },
  { id: 10, img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80", title: "Wedding 10" },
  { id: 11, img: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?auto=format&fit=crop&w=800&q=80", title: "Wedding 11" },
  { id: 12, img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80", title: "Wedding 12" },
  { id: 13, img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80", title: "Wedding 13" },
  { id: 14, img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?auto=format&fit=crop&w=800&q=80", title: "Wedding 14" },
  { id: 15, img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80", title: "Wedding 15" },
  { id: 16, img: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80", title: "Wedding 16" },
  { id: 17, img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80", title: "Wedding 17" },
  { id: 18, img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", title: "Wedding 18" },
  { id: 19, img: "https://images.unsplash.com/photo-1460364157752-926555421a7e?auto=format&fit=crop&w=800&q=80", title: "Wedding 19" },
  { id: 20, img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80", title: "Wedding 20" },
  { id: 21, img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80", title: "Wedding 21" },
  { id: 22, img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80", title: "Wedding 22" },
  { id: 23, img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80", title: "Wedding 23" },
  { id: 24, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", title: "Wedding 24" },
  { id: 25, img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80", title: "Wedding 25" },
  { id: 26, img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", title: "Wedding 26" },
  { id: 27, img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80", title: "Wedding 27" },
  { id: 28, img: "https://images.unsplash.com/photo-1543965170-4c01a586684e?auto=format&fit=crop&w=800&q=80", title: "Wedding 28" },
  { id: 29, img: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=800&q=80", title: "Wedding 29" },
  { id: 30, img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80", title: "Wedding 30" },
  { id: 31, img: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800&q=80", title: "Wedding 31" },
];

const StoriesSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageSet, setCurrentImageSet] = useState([]); // Track which image set is being used

  const openLightbox = (image, index, imageSet) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setCurrentImageSet(imageSet);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageSet([]);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : currentImageSet.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(currentImageSet[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < currentImageSet.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(currentImageSet[newIndex]);
  };

  // MOBILE: Creates "20" number shape
  const getMobilePosition = (index) => {
    const positions = [
      // "2" shape (13 boxes)
      // Top horizontal line of 2
      { col: 1, row: 1 }, { col: 2, row: 1 }, { col: 3, row: 1 }, { col: 4, row: 1 },
      // Right side going down
      { col: 4, row: 2 },
      // Middle horizontal line
      { col: 1, row: 3 }, { col: 2, row: 3 }, { col: 3, row: 3 }, { col: 4, row: 3 },
      // Bottom left going down
      { col: 1, row: 4 },
      // Bottom horizontal line
      { col: 1, row: 5 }, { col: 2, row: 5 }, { col: 3, row: 5 }, { col: 4, row: 5 },
      
      // "0" shape (15 boxes - complete oval)
      // Top horizontal line of 0
      { col: 6, row: 1 }, { col: 7, row: 1 }, { col: 8, row: 1 },
      // Left side of 0
      { col: 6, row: 2 }, { col: 6, row: 3 }, { col: 6, row: 4 },
      // Right side of 0
      { col: 8, row: 2 }, { col: 8, row: 3 }, { col: 8, row: 4 },
      // Bottom horizontal line of 0
      { col: 6, row: 5 }, { col: 7, row: 5 }, { col: 8, row: 5 },
      // Middle diagonal for visual completeness
      { col: 7, row: 2 }, { col: 7, row: 3 }, { col: 7, row: 4 },
    ];
    return positions[index];
  };

  // DESKTOP: Creates "20" number shape (larger)
  const getDesktopPosition = (index) => {
    const positions = [
      // "2" shape (13 boxes)
      // Top horizontal line of 2
      { col: 1, row: 1 }, { col: 2, row: 1 }, { col: 3, row: 1 }, { col: 4, row: 1 }, { col: 5, row: 1 },
      // Right side going down
      { col: 5, row: 2 },
      // Middle horizontal line
      { col: 1, row: 3 }, { col: 2, row: 3 }, { col: 3, row: 3 }, { col: 4, row: 3 }, { col: 5, row: 3 },
      // Bottom left going down
      { col: 1, row: 4 },
      // Bottom horizontal line
      { col: 1, row: 5 }, { col: 2, row: 5 }, { col: 3, row: 5 }, { col: 4, row: 5 }, { col: 5, row: 5 },
      
      // "0" shape (15 boxes - complete oval)
      // Top horizontal line of 0
      { col: 7, row: 1 }, { col: 8, row: 1 }, { col: 9, row: 1 }, { col: 10, row: 1 },
      // Left side of 0
      { col: 7, row: 2 }, { col: 7, row: 3 }, { col: 7, row: 4 },
      // Right side of 0
      { col: 10, row: 2 }, { col: 10, row: 3 }, { col: 10, row: 4 },
      // Bottom horizontal line of 0
      { col: 7, row: 5 }, { col: 8, row: 5 }, { col: 9, row: 5 }, { col: 10, row: 5 },
      // Middle fill for visual completeness
      { col: 8, row: 2 }, { col: 9, row: 3 }, { col: 8, row: 4 },
    ];
    return positions[index];
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FFF8F3] via-[#FFF5ED] to-[#FFF8F3] py-12 md:py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block">
          <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-[#D4A574] animate-expand-right"></div>
              
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#D4A574] animate-pulse-heart"
              >
                <path
                  d="M12 21s-7.5-4.35-9.5-8.5C.5 8.5 3 5 6.5 5
                     8.5 5 10 6.25 12 8
                     14 6.25 15.5 5 17.5 5
                     21 5 23.5 8.5 21.5 12.5
                     19.5 16.65 12 21 12 21Z"
                  fill="currentColor"
                />
              </svg>
              
              <div className="w-16 h-px bg-gradient-to-r from-[#D4A574] to-transparent animate-expand-left"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light  bg-clip-text bg-gradient-to-r text-[#8B6F5E] tracking-wide animate-gradient-text">
            Our Crafted Stories
          </h2>
          <p className="text-[#8B6F5E]/70 mt-2 text-sm md:text-base tracking-wider animate-fade-in-delay">
            Real weddings, timeless memories
          </p>
        </div>
      </div>

      {/* Mobile Grid - Forms "20" shape (8 columns, 5 rows) */}
      <div className="max-w-5xl mx-auto md:hidden">
        <div className="grid grid-cols-8 grid-rows-5 gap-2" style={{ gridAutoRows: '80px' }}>
          {mobileImages.map((image, index) => {
            const pos = getMobilePosition(index);
            if (!pos) return null;
            return (
              <div
                key={image.id}
                className="cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white"
                style={{ gridColumn: pos.col, gridRow: pos.row }}
                onClick={() => openLightbox(image, index, mobileImages)}
              >
                <img src={image.img} alt={image.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-2">
                  <span className="text-white text-xs font-semibold">View</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Grid - Forms "20" shape (10 columns, 5 rows) */}
      <div className="max-w-7xl mx-auto hidden md:block">
        <div className="grid grid-cols-10 grid-rows-5 gap-3" style={{ gridAutoRows: '120px' }}>
          {desktopImages.map((image, index) => {
            const pos = getDesktopPosition(index);
            if (!pos) return null;
            return (
              <div
                key={image.id}
                className="cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white"
                style={{ gridColumn: pos.col, gridRow: pos.row }}
                onClick={() => openLightbox(image, index, desktopImages)}
              >
                <img src={image.img} alt={image.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform scale-0 hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#8B6F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-50">
            <X size={24} />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); goToPrevious(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-50">
            <ChevronLeft size={24} />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-50">
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {currentImageSet.length}
          </div>

          <div className="relative max-w-5xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.img} alt={selectedImage.title} className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default StoriesSection;
