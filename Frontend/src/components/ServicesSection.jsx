import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'WEDDING',
      image: 'images/picture.jpg',
      description: 'Searching for the best places for your event? Give us a try. Let our professionals help you find the best venue of your preferences.',
      delay: '200ms'
    },
    {
      id: 2,
      title: 'PRIVATE PARTIES',
      image: 'https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Searching for a decorator to hand you the flower designs you have always dreamt of? Let us help you decorate aesthetic wedding.',
      delay: '400ms'
    },
    {
      id: 3,
      title: 'DESTINATION EVENTS',
      image: 'https://plus.unsplash.com/premium_photo-1668442052924-8eae206272f0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Great food is the essence of any event planning. Let\'s collaborate and welcome your guests with delicious finger-licking foods!',
      delay: '600ms'
    },
    {
      id: 4,
      title: 'RICE CEREMONY',
      image: 'images/picture-1.jpg',
      description: 'Capture every precious moment with our professional photography and videography services. We preserve your memories beautifully.',
      delay: '800ms'
    },
    {
      id: 5,
      title: 'BIRTHDAY CELEBRATIONS',
      image: 'images/picture-2.jpg',
      description: 'Keep your guests entertained with our top-notch DJ services and entertainment options. Make your event unforgettable!',
      delay: '1000ms'
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .envelope-container {
          perspective: 1500px;
        }

        .decorative-ornament {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0 10 Q25 0 50 10 T100 10' fill='none' stroke='%23ddd' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%23C41E3A'/%3E%3Cpath d='M40 10 Q45 5 50 10 Q55 5 60 10' fill='none' stroke='%23C41E3A' stroke-width='0.5'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }

        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes envelope-shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-1deg); }
          75% { transform: rotate(1deg); }
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-20 sm:py-24 lg:py-32 overflow-hidden"
      >
        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C41E3A 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                transitionDelay: '200ms',
                letterSpacing: '-0.01em'
              }}
            >
              What We Do
            </h2>

            {/* Decorative ornament */}
            <div 
              className={`decorative-ornament h-8 w-48 mx-auto mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ transitionDelay: '400ms' }}
            />

            <p 
              className={`text-gray-700 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                transitionDelay: '600ms'
              }}
            >
              We are not only a wedding planner in Kolkata – we offer more than that. 360-degree event management with additional services!
            </p>
          </div>

          {/* Envelope Cards Grid */}
          <div className="space-y-12 lg:space-y-16">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={service.id}
                  className={`envelope-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                  style={{ transitionDelay: service.delay }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                <div className="relative h-[600px]">
                  {/* Envelope Body (stays in place) */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
                    style={{
                      animation: hoveredCard === service.id ? 'envelope-shake 0.5s ease-in-out' : 'none'
                    }}
                  >
                    {/* Main Envelope Container */}
                    <div className="relative h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
                      {/* Envelope background texture */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-rose-50/30" />
                      
                      {/* Subtle texture overlay */}
                      <div className="absolute inset-0 opacity-[0.03]">
                        <div style={{
                          backgroundImage: `repeating-linear-gradient(0deg, #C41E3A, #C41E3A 1px, transparent 1px, transparent 20px)`,
                        }} className="w-full h-full" />
                      </div>

                      {/* Envelope seal/stamp area */}
                      <div className="absolute top-8 right-8 w-20 h-20 border-2 border-[#C41E3A]/20 rounded-full flex items-center justify-center">
                        <div className="text-[#C41E3A] text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                          E365
                        </div>
                      </div>

                      {/* Decorative address lines */}
                      <div className="absolute bottom-16 left-12 right-12 space-y-3 opacity-30">
                        <div className="h-0.5 bg-gray-400 w-3/4" />
                        <div className="h-0.5 bg-gray-400 w-full" />
                        <div className="h-0.5 bg-gray-400 w-2/3" />
                      </div>

                      {/* Service category label - fades out when hovering */}
                      <div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity ease-in-out"
                        style={{ 
                          opacity: hoveredCard === service.id ? 0 : 1,
                          transitionDuration: '600ms'
                        }}
                      >
                        <div className="text-gray-800 text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {service.title}
                        </div>
                        <div className="h-0.5 w-16 bg-[#C41E3A] mx-auto mb-3" />
                        <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Hover to Open
                        </p>
                      </div>

                      {/* Corner decorations */}
                      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C41E3A]/20" />
                      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C41E3A]/20" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C41E3A]/20" />
                      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C41E3A]/20" />

                      {/* Shadow that appears inside envelope when opening */}
                      <div 
                        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent transition-opacity ease-in-out"
                        style={{ 
                          opacity: hoveredCard === service.id ? 1 : 0,
                          transitionDuration: '900ms'
                        }}
                      />
                    </div>

                    {/* Envelope Flap (Opens upward with 3D rotation) */}
                    <div 
                      className="absolute left-0 right-0 z-20 transition-all ease-in-out"
                      style={{
                        top: '0px',
                        transformOrigin: 'top center',
                        transform: hoveredCard === service.id 
                          ? 'rotateX(-180deg) translateZ(2px)' 
                          : 'rotateX(0deg)',
                        transformStyle: 'preserve-3d',
                        transitionDuration: '900ms'
                      }}
                    >
                      <svg viewBox="0 0 300 100" className="w-full" style={{ 
                        filter: hoveredCard === service.id 
                          ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.2))' 
                          : 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                        transition: 'filter 0.9s ease-in-out'
                      }}>
                        {/* Main flap triangle */}
                        <path
                          d="M 5 5 L 150 95 L 295 5 Z"
                          fill="white"
                          stroke="#d1d5db"
                          strokeWidth="2"
                        />
                        {/* Flap inner shading - darkens when open */}
                        <path
                          d="M 20 15 L 150 85 L 280 15"
                          fill="none"
                          stroke="#C41E3A"
                          strokeWidth="0.8"
                          opacity={hoveredCard === service.id ? "0.4" : "0.2"}
                          style={{ transition: 'opacity 0.9s ease-in-out' }}
                        />
                        {/* Seal center */}
                        <circle 
                          cx="150" 
                          cy="50" 
                          r="8" 
                          fill="#C41E3A" 
                          opacity={hoveredCard === service.id ? "0.3" : "0.15"}
                          style={{ transition: 'opacity 0.9s ease-in-out' }}
                        />
                        {/* Wax seal detail */}
                        <path
                          d="M 145 45 Q 150 48 155 45 Q 150 42 145 45 Z"
                          fill="#C41E3A"
                          opacity={hoveredCard === service.id ? "0.5" : "0.2"}
                          style={{ transition: 'opacity 0.9s ease-in-out' }}
                        />
                      </svg>
                    </div>

                    {/* Back side of flap (visible when flap opens) */}
                    <div 
                      className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
                      style={{
                        top: '0px',
                        opacity: hoveredCard === service.id ? 1 : 0,
                        transitionDuration: '800ms'
                      }}
                    >
                      <svg viewBox="0 0 300 100" className="w-full">
                        <path
                          d="M 5 5 L 150 95 L 295 5 Z"
                          fill="#f3f4f6"
                          stroke="#d1d5db"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content Card (Slides OUT from inside envelope) */}
                  <div 
                    className="absolute left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-all"
                    style={{
                      bottom: hoveredCard === service.id ? '120px' : '80px',
                      height: '520px',
                      opacity: hoveredCard === service.id ? 1 : 0,
                      transform: hoveredCard === service.id 
                        ? 'translateY(0) scale(1)' 
                        : 'translateY(40px) scale(0.9)',
                      zIndex: hoveredCard === service.id ? 25 : 5,
                      boxShadow: hoveredCard === service.id 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0,0,0,0.05)' 
                        : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      pointerEvents: hoveredCard === service.id ? 'auto' : 'none',
                      transitionDelay: hoveredCard === service.id ? '0.4s' : '0s',
                      transitionDuration: '900ms',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform ease-in-out"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)',
                          transitionDuration: '1000ms'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      
                      {/* Floating service badge */}
                      <div 
                        className="absolute top-6 left-6 bg-[#C41E3A] text-white px-5 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all ease-out"
                        style={{
                          transform: hoveredCard === service.id ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)',
                          transitionDelay: hoveredCard === service.id ? '0.6s' : '0s',
                          transitionDuration: '600ms'
                        }}
                      >
                        Services
                      </div>

                      {/* Title overlay on image */}
                      <div 
                        className="absolute bottom-6 left-6 right-6 transition-all ease-out"
                        style={{
                          opacity: hoveredCard === service.id ? 1 : 0,
                          transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
                          transitionDelay: hoveredCard === service.id ? '0.7s' : '0s',
                          transitionDuration: '600ms'
                        }}
                      >
                        <h3 
                          className="text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-lg"
                          style={{ 
                            fontFamily: "'Playfair Display', Georgia, serif"
                          }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 bg-white">
                      {/* Decorative divider */}
                      <div 
                        className="flex items-center gap-2 mb-5 transition-all ease-out"
                        style={{
                          opacity: hoveredCard === service.id ? 1 : 0,
                          transform: hoveredCard === service.id ? 'translateX(0)' : 'translateX(-20px)',
                          transitionDelay: hoveredCard === service.id ? '0.8s' : '0s',
                          transitionDuration: '600ms'
                        }}
                      >
                        <div className="h-0.5 w-12 bg-[#C41E3A]" />
                        <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#C41E3A]/50 to-transparent" />
                      </div>

                      {/* Description */}
                      <p 
                        className="text-gray-700 text-base leading-relaxed mb-6 transition-all ease-out"
                        style={{ 
                          fontFamily: "'Playfair Display', Georgia, serif",
                          opacity: hoveredCard === service.id ? 1 : 0,
                          transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
                          transitionDelay: hoveredCard === service.id ? '0.9s' : '0s',
                          transitionDuration: '600ms'
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Read More Button */}
                      <button 
                        className="group relative overflow-hidden bg-transparent border-2 border-[#C41E3A] text-[#C41E3A] px-8 py-3.5 font-bold text-sm tracking-widest uppercase transition-all ease-out hover:text-white rounded-lg shadow-md hover:shadow-xl"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          opacity: hoveredCard === service.id ? 1 : 0,
                          transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
                          transitionDelay: hoveredCard === service.id ? '1s' : '0s',
                          transitionDuration: '600ms'
                        }}
                      >
                        <span className="relative z-10">READ MORE</span>
                        <span className="absolute inset-0 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                      </button>
                    </div>

                    {/* Bottom decorative corner */}
                    <div 
                      className="absolute bottom-4 right-4 opacity-10 transition-all ease-in-out"
                      style={{
                        transform: hoveredCard === service.id ? 'rotate(0deg)' : 'rotate(-90deg)',
                        transitionDelay: hoveredCard === service.id ? '1.1s' : '0s',
                        transitionDuration: '700ms'
                      }}
                    >
                      <svg width="60" height="60" viewBox="0 0 60 60">
                        <path d="M0,60 Q0,30 30,30 Q0,30 0,0" fill="none" stroke="#C41E3A" strokeWidth="2"/>
                        <circle cx="30" cy="30" r="3" fill="#C41E3A"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>

            {/* Bottom Row - 2 Cards Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
              {services.slice(3, 5).map((service, index) => (
                <div
                  key={service.id}
                  className={`envelope-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                  style={{ transitionDelay: service.delay }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-[600px]">
                    {/* Envelope Body (stays in place) */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
                      style={{
                        animation: hoveredCard === service.id ? 'envelope-shake 0.5s ease-in-out' : 'none'
                      }}
                    >
                      {/* Main Envelope Container */}
                      <div className="relative h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
                        {/* Envelope background texture */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-rose-50/30" />
                        
                        {/* Subtle texture overlay */}
                        <div className="absolute inset-0 opacity-[0.03]">
                          <div style={{
                            backgroundImage: `repeating-linear-gradient(0deg, #C41E3A, #C41E3A 1px, transparent 1px, transparent 20px)`,
                          }} className="w-full h-full" />
                        </div>

                        {/* Envelope seal/stamp area */}
                        <div className="absolute top-8 right-8 w-20 h-20 border-2 border-[#C41E3A]/20 rounded-full flex items-center justify-center">
                          <div className="text-[#C41E3A] text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                            E365
                          </div>
                        </div>

                        {/* Decorative address lines */}
                        <div className="absolute bottom-16 left-12 right-12 space-y-3 opacity-30">
                          <div className="h-0.5 bg-gray-400 w-3/4" />
                          <div className="h-0.5 bg-gray-400 w-full" />
                          <div className="h-0.5 bg-gray-400 w-2/3" />
                        </div>

                        {/* Service category label - fades out when hovering */}
                        <div 
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity ease-in-out"
                          style={{ 
                            opacity: hoveredCard === service.id ? 0 : 1,
                            transitionDuration: '600ms'
                          }}
                        >
                          <div className="text-gray-800 text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {service.title}
                          </div>
                          <div className="h-0.5 w-16 bg-[#C41E3A] mx-auto mb-3" />
                          <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Hover to Open
                          </p>
                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C41E3A]/20" />
                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C41E3A]/20" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C41E3A]/20" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C41E3A]/20" />

                        {/* Shadow that appears inside envelope when opening */}
                        <div 
                          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent transition-opacity ease-in-out"
                          style={{ 
                            opacity: hoveredCard === service.id ? 1 : 0,
                            transitionDuration: '900ms'
                          }}
                        />
                      </div>

                      {/* Envelope Flap (Opens upward with 3D rotation) */}
                      <div 
                        className="absolute left-0 right-0 z-20 transition-all ease-in-out"
                        style={{
                          top: '0px',
                          transformOrigin: 'top center',
                          transform: hoveredCard === service.id 
                            ? 'rotateX(-180deg) translateZ(2px)' 
                            : 'rotateX(0deg)',
                          transformStyle: 'preserve-3d',
                          transitionDuration: '900ms'
                        }}
                      >
                        <svg viewBox="0 0 300 100" className="w-full" style={{ 
                          filter: hoveredCard === service.id 
                            ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.2))' 
                            : 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                          transition: 'filter 0.9s ease-in-out'
                        }}>
                          {/* Main flap triangle */}
                          <path
                            d="M 5 5 L 150 95 L 295 5 Z"
                            fill="white"
                            stroke="#d1d5db"
                            strokeWidth="2"
                          />
                          {/* Flap inner shading - darkens when open */}
                          <path
                            d="M 20 15 L 150 85 L 280 15"
                            fill="none"
                            stroke="#C41E3A"
                            strokeWidth="0.8"
                            opacity={hoveredCard === service.id ? "0.4" : "0.2"}
                            style={{ transition: 'opacity 0.9s ease-in-out' }}
                          />
                          {/* Seal center */}
                          <circle 
                            cx="150" 
                            cy="50" 
                            r="8" 
                            fill="#C41E3A" 
                            opacity={hoveredCard === service.id ? "0.3" : "0.15"}
                            style={{ transition: 'opacity 0.9s ease-in-out' }}
                          />
                          {/* Wax seal detail */}
                          <path
                            d="M 145 45 Q 150 48 155 45 Q 150 42 145 45 Z"
                            fill="#C41E3A"
                            opacity={hoveredCard === service.id ? "0.5" : "0.2"}
                            style={{ transition: 'opacity 0.9s ease-in-out' }}
                          />
                        </svg>
                      </div>

                      {/* Back side of flap (visible when flap opens) */}
                      <div 
                        className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
                        style={{
                          top: '0px',
                          opacity: hoveredCard === service.id ? 1 : 0,
                          transitionDuration: '800ms'
                        }}
                      >
                        <svg viewBox="0 0 300 100" className="w-full">
                          <path
                            d="M 5 5 L 150 95 L 295 5 Z"
                            fill="#f3f4f6"
                            stroke="#d1d5db"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content Card (Slides OUT from inside envelope) */}
                    <div 
                      className="absolute left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-all"
                      style={{
                        bottom: hoveredCard === service.id ? '120px' : '80px',
                        height: '520px',
                        opacity: hoveredCard === service.id ? 1 : 0,
                        transform: hoveredCard === service.id 
                          ? 'translateY(0) scale(1)' 
                          : 'translateY(40px) scale(0.9)',
                        zIndex: hoveredCard === service.id ? 25 : 5,
                        boxShadow: hoveredCard === service.id 
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0,0,0,0.05)' 
                          : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        pointerEvents: hoveredCard === service.id ? 'auto' : 'none',
                        transitionDelay: hoveredCard === service.id ? '0.4s' : '0s',
                        transitionDuration: '900ms',
                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform ease-in-out"
                          style={{
                            backgroundImage: `url(${service.image})`,
                            transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)',
                            transitionDuration: '1000ms'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        
                        {/* Floating service badge */}
                        <div 
                          className="absolute top-6 left-6 bg-[#C41E3A] text-white px-5 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all ease-out"
                          style={{
                            transform: hoveredCard === service.id ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)',
                            transitionDelay: hoveredCard === service.id ? '0.6s' : '0s',
                            transitionDuration: '600ms'
                          }}
                        >
                          Services
                        </div>

                        {/* Title overlay on image */}
                        <div 
                          className="absolute bottom-6 left-6 right-6 transition-all ease-out"
                          style={{
                            opacity: hoveredCard === service.id ? 1 : 0,
                            transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
                            transitionDelay: hoveredCard === service.id ? '0.7s' : '0s',
                            transitionDuration: '600ms'
                          }}
                        >
                          <h3 
                            className="text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-lg"
                            style={{ 
                              fontFamily: "'Playfair Display', Georgia, serif"
                            }}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 bg-white">
                        {/* Decorative divider */}
                        <div 
                          className="flex items-center gap-2 mb-5 transition-all ease-out"
                          style={{
                            opacity: hoveredCard === service.id ? 1 : 0,
                            transform: hoveredCard === service.id ? 'translateX(0)' : 'translateX(-20px)',
                            transitionDelay: hoveredCard === service.id ? '0.8s' : '0s',
                            transitionDuration: '600ms'
                          }}
                        >
                          <div className="h-0.5 w-12 bg-[#C41E3A]" />
                          <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
                          <div className="h-0.5 flex-1 bg-gradient-to-r from-[#C41E3A]/50 to-transparent" />
                        </div>

                        {/* Description */}
                        <p 
                          className="text-gray-700 text-base leading-relaxed mb-6 transition-all ease-out"
                          style={{ 
                            fontFamily: "'Playfair Display', Georgia, serif",
                            opacity: hoveredCard === service.id ? 1 : 0,
                            transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
                            transitionDelay: hoveredCard === service.id ? '0.9s' : '0s',
                            transitionDuration: '600ms'
                          }}
                        >
                          {service.description}
                        </p>

                        {/* Read More Button */}
                        <button 
                          className="group relative overflow-hidden bg-transparent border-2 border-[#C41E3A] text-[#C41E3A] px-8 py-3.5 font-bold text-sm tracking-widest uppercase transition-all ease-out hover:text-white rounded-lg shadow-md hover:shadow-xl"
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            opacity: hoveredCard === service.id ? 1 : 0,
                            transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
                            transitionDelay: hoveredCard === service.id ? '1s' : '0s',
                            transitionDuration: '600ms'
                          }}
                        >
                          <span className="relative z-10">READ MORE</span>
                          <span className="absolute inset-0 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </button>
                      </div>

                      {/* Bottom decorative corner */}
                      <div 
                        className="absolute bottom-4 right-4 opacity-10 transition-all ease-in-out"
                        style={{
                          transform: hoveredCard === service.id ? 'rotate(0deg)' : 'rotate(-90deg)',
                          transitionDelay: hoveredCard === service.id ? '1.1s' : '0s',
                          transitionDuration: '700ms'
                        }}
                      >
                        <svg width="60" height="60" viewBox="0 0 60 60">
                          <path d="M0,60 Q0,30 30,30 Q0,30 0,0" fill="none" stroke="#C41E3A" strokeWidth="2"/>
                          <circle cx="30" cy="30" r="3" fill="#C41E3A"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className={`absolute top-20 left-[5%] w-3 h-3 bg-[#C41E3A]/10 rounded-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-32 right-[8%] w-2 h-2 bg-[#C41E3A]/15 rounded-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      </section>
    </>
  );
};

export default ServicesSection;




// import React, { useState, useEffect, useRef } from 'react';

// const ServicesSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const services = [
//     {
//       id: 1,
//       title: 'VENUE BOOKING',
//       image: 'images/picture.jpg',
//       description: 'Searching for the best places for your event? Give us a try. Let our professionals help you find the best venue of your preferences.',
//       delay: '200ms'
//     },
//     {
//       id: 2,
//       title: 'DECORATION & FLORIST',
//       image: 'https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       description: 'Searching for a decorator to hand you the flower designs you have always dreamt of? Let us help you decorate aesthetic wedding.',
//       delay: '400ms'
//     },
//     {
//       id: 3,
//       title: 'CATERING AND FOODING',
//       image: 'https://plus.unsplash.com/premium_photo-1668442052924-8eae206272f0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       description: 'Great food is the essence of any event planning. Let\'s collaborate and welcome your guests with delicious finger-licking foods!',
//       delay: '600ms'
//     },
//     {
//       id: 4,
//       title: 'PHOTOGRAPHY & VIDEOGRAPHY',
//       image: 'images/picture-1.jpg',
//       description: 'Capture every precious moment with our professional photography and videography services. We preserve your memories beautifully.',
//       delay: '800ms'
//     },
//     {
//       id: 5,
//       title: 'ENTERTAINMENT & DJ',
//       image: 'images/picture-2.jpg',
//       description: 'Keep your guests entertained with our top-notch DJ services and entertainment options. Make your event unforgettable!',
//       delay: '1000ms'
//     }
//   ];

//   // Special envelope component for first card only
//   const TraditionalEnvelope = ({ service, isHovered }) => (
//     <div 
//       className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
//       style={{
//         animation: isHovered ? 'envelope-shake 0.5s ease-in-out' : 'none'
//       }}
//     >
//       {/* Main Envelope Container - Traditional Indian Design */}
//       <div className="relative h-full rounded-lg shadow-xl overflow-hidden border-4 border-[#8B4513]" 
//         style={{
//           background: 'linear-gradient(135deg, #E67E22 0%, #D35400 50%, #CA6F1E 100%)',
//         }}
//       >
//         {/* Textured overlay pattern - Bengali art inspired */}
//         <div className="absolute inset-0 opacity-20">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="traditional-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
//                 {/* Small decorative dots */}
//                 <circle cx="5" cy="5" r="1.5" fill="#C41E3A"/>
//                 <circle cx="55" cy="5" r="1.5" fill="#C41E3A"/>
//                 <circle cx="5" cy="55" r="1.5" fill="#C41E3A"/>
//                 <circle cx="55" cy="55" r="1.5" fill="#C41E3A"/>
//                 {/* Diagonal line pattern */}
//                 <line x1="0" y1="30" x2="60" y2="30" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#traditional-pattern)"/>
//           </svg>
//         </div>

//         {/* Decorative border pattern - inspired by traditional motifs */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Top scalloped border */}
//           <svg className="absolute top-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,20 Q20,0 40,20 T80,20 T120,20 T160,20 T200,20 T240,20 T280,20 T320,20 T360,20 T400,20 L400,40 L0,40 Z" 
//               fill="#C41E3A" opacity="0.6"/>
//             <path d="M0,24 Q20,8 40,24 T80,24 T120,24 T160,24 T200,24 T240,24 T280,24 T320,24 T360,24 T400,24" 
//               fill="none" stroke="#8B4513" strokeWidth="1.5"/>
//           </svg>

//           {/* Bottom scalloped border */}
//           <svg className="absolute bottom-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,0 L400,0 L400,20 Q380,40 360,20 T320,20 T280,20 T240,20 T200,20 T160,20 T120,20 T80,20 T40,20 T0,20 Z" 
//               fill="#C41E3A" opacity="0.6"/>
//             <path d="M0,16 Q20,32 40,16 T80,16 T120,16 T160,16 T200,16 T240,16 T280,16 T320,16 T360,16 T400,16" 
//               fill="none" stroke="#8B4513" strokeWidth="1.5"/>
//           </svg>

//           {/* Left decorative border */}
//           <div className="absolute left-0 top-12 bottom-12 w-8 bg-gradient-to-r from-[#C41E3A]/40 to-transparent" />
          
//           {/* Right decorative border */}
//           <div className="absolute right-0 top-12 bottom-12 w-8 bg-gradient-to-l from-[#C41E3A]/40 to-transparent" />
//         </div>

//         {/* Central decorative medallion - inspired by traditional art */}
//         <div className="absolute top-8 right-8 w-24 h-24 flex items-center justify-center">
//           <svg width="96" height="96" viewBox="0 0 96 96">
//             {/* Outer decorative circle */}
//             <circle cx="48" cy="48" r="44" fill="none" stroke="#8B4513" strokeWidth="2" opacity="0.6"/>
//             <circle cx="48" cy="48" r="40" fill="none" stroke="#C41E3A" strokeWidth="1.5" opacity="0.4"/>
            
//             {/* Inner pattern - flower-like motif */}
//             <circle cx="48" cy="48" r="32" fill="#D35400" opacity="0.3"/>
            
//             {/* Petal shapes */}
//             <path d="M48,20 Q56,28 48,36 Q40,28 48,20 Z" fill="#C41E3A" opacity="0.5"/>
//             <path d="M76,48 Q68,56 60,48 Q68,40 76,48 Z" fill="#C41E3A" opacity="0.5"/>
//             <path d="M48,76 Q40,68 48,60 Q56,68 48,76 Z" fill="#C41E3A" opacity="0.5"/>
//             <path d="M20,48 Q28,40 36,48 Q28,56 20,48 Z" fill="#C41E3A" opacity="0.5"/>
            
//             {/* Small decorative dots around */}
//             <circle cx="48" cy="16" r="2" fill="#8B4513"/>
//             <circle cx="80" cy="48" r="2" fill="#8B4513"/>
//             <circle cx="48" cy="80" r="2" fill="#8B4513"/>
//             <circle cx="16" cy="48" r="2" fill="#8B4513"/>
            
//             {/* Center text */}
//             <text x="48" y="52" textAnchor="middle" fill="#8B4513" fontSize="12" fontWeight="bold" fontFamily="'Playfair Display', serif">E365</text>
//           </svg>
//         </div>

//         {/* Decorative corner flourishes */}
//         <svg className="absolute top-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,0 40,0" fill="none" stroke="#C41E3A" strokeWidth="3" opacity="0.6"/>
//           <path d="M5,40 Q5,5 40,5" fill="none" stroke="#8B4513" strokeWidth="2" opacity="0.5"/>
//           <circle cx="10" cy="10" r="3" fill="#C41E3A" opacity="0.6"/>
//         </svg>
        
//         <svg className="absolute bottom-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,80 40,80" fill="none" stroke="#C41E3A" strokeWidth="3" opacity="0.6"/>
//           <path d="M5,40 Q5,75 40,75" fill="none" stroke="#8B4513" strokeWidth="2" opacity="0.5"/>
//           <circle cx="10" cy="70" r="3" fill="#C41E3A" opacity="0.6"/>
//         </svg>
        
//         <svg className="absolute top-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,0 40,0" fill="none" stroke="#C41E3A" strokeWidth="3" opacity="0.6"/>
//           <path d="M75,40 Q75,5 40,5" fill="none" stroke="#8B4513" strokeWidth="2" opacity="0.5"/>
//           <circle cx="70" cy="10" r="3" fill="#C41E3A" opacity="0.6"/>
//         </svg>
        
//         <svg className="absolute bottom-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,80 40,80" fill="none" stroke="#C41E3A" strokeWidth="3" opacity="0.6"/>
//           <path d="M75,40 Q75,75 40,75" fill="none" stroke="#8B4513" strokeWidth="2" opacity="0.5"/>
//           <circle cx="70" cy="70" r="3" fill="#C41E3A" opacity="0.6"/>
//         </svg>

//         {/* Traditional line pattern in center */}
//         <div className="absolute bottom-20 left-16 right-16 space-y-4 opacity-40">
//           <svg width="100%" height="4">
//             <line x1="0" y1="2" x2="100%" y2="2" stroke="#8B4513" strokeWidth="2"/>
//             <circle cx="50%" cy="2" r="3" fill="#C41E3A"/>
//           </svg>
//           <svg width="100%" height="4">
//             <line x1="0" y1="2" x2="100%" y2="2" stroke="#8B4513" strokeWidth="2"/>
//             <circle cx="30%" cy="2" r="2" fill="#C41E3A"/>
//             <circle cx="70%" cy="2" r="2" fill="#C41E3A"/>
//           </svg>
//           <svg width="100%" height="4">
//             <line x1="0" y1="2" x2="100%" y2="2" stroke="#8B4513" strokeWidth="2"/>
//             <circle cx="50%" cy="2" r="3" fill="#C41E3A"/>
//           </svg>
//         </div>

//         {/* Traditional Wedding Illustration - Always visible, centered */}
//         <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
//           <div 
//             className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-2xl border-4 transition-all ease-in-out"
//             style={{
//               borderColor: '#8B4513',
//               transform: isHovered ? 'scale(0.85) translateY(-20px)' : 'scale(1)',
//               opacity: isHovered ? 0.3 : 1,
//               transitionDuration: '900ms',
//               transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
//             }}
//           >
//             {/* The actual illustration/painting */}
//             <img 
//               src="images/picf.jpeg"
//               alt="Traditional Wedding"
//               className="absolute inset-0 w-full h-full object-cover transition-all ease-in-out"
//               style={{
//                 transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//                 transitionDuration: '1200ms'
//               }}
//             />
            
//             {/* Decorative frame overlay */}
//             <div 
//               className="absolute inset-0 border-8 border-[#C41E3A]/20 pointer-events-none transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0.5 : 1,
//                 transitionDuration: '800ms'
//               }}
//             />
            
//             {/* Corner embellishments */}
//             <div 
//               className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#8B4513] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#8B4513] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#8B4513] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#8B4513] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//           </div>
//         </div>

//         {/* Service category label - fades out when hovering */}
//         <div 
//           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-opacity ease-in-out z-10"
//           style={{ 
//             opacity: isHovered ? 0 : 1,
//             transitionDuration: '600ms'
//           }}
//         >
//           <div className="text-white text-2xl font-bold mb-2 drop-shadow-lg px-6 py-2 bg-gradient-to-r from-transparent via-black/40 to-transparent rounded-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
//             {service.title}
//           </div>
//           <div className="h-0.5 w-16 bg-white mx-auto mb-3 shadow-lg" />
//           <p className="text-white/90 text-sm uppercase tracking-widest drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
//             Hover to Open
//           </p>
//         </div>

//         {/* Shadow that appears inside envelope when opening */}
//         <div 
//           className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent transition-opacity ease-in-out"
//           style={{ 
//             opacity: isHovered ? 1 : 0,
//             transitionDuration: '900ms'
//           }}
//         />
//       </div>

//       {/* Envelope Flap (Opens upward with 3D rotation) - Traditional style */}
//       <div 
//         className="absolute left-0 right-0 z-20 transition-all ease-in-out"
//         style={{
//           top: '0px',
//           transformOrigin: 'top center',
//           transform: isHovered 
//             ? 'rotateX(-180deg) translateZ(2px)' 
//             : 'rotateX(0deg)',
//           transformStyle: 'preserve-3d',
//           transitionDuration: '900ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full" style={{ 
//           filter: isHovered 
//             ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.3))' 
//             : 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
//           transition: 'filter 0.9s ease-in-out'
//         }}>
//           {/* Main flap triangle - orange gradient */}
//           <defs>
//             <linearGradient id="flap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#E67E22', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#D35400', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-gradient)"
//             stroke="#8B4513"
//             strokeWidth="3"
//           />
//           {/* Decorative pattern on flap */}
//           <path
//             d="M 20 15 L 150 85 L 280 15"
//             fill="none"
//             stroke="#C41E3A"
//             strokeWidth="1.5"
//             opacity={isHovered ? "0.5" : "0.3"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           {/* Small decorative dots on flap */}
//           <circle cx="75" cy="30" r="2" fill="#8B4513" opacity="0.4"/>
//           <circle cx="150" cy="50" r="2" fill="#8B4513" opacity="0.4"/>
//           <circle cx="225" cy="30" r="2" fill="#8B4513" opacity="0.4"/>
          
//           {/* Wax seal - more elaborate */}
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="12" 
//             fill="#C41E3A" 
//             opacity={isHovered ? "0.8" : "0.6"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="8" 
//             fill="none"
//             stroke="#8B4513" 
//             strokeWidth="1"
//             opacity={isHovered ? "0.6" : "0.4"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//         </svg>
//       </div>

//       {/* Back side of flap (visible when flap opens) - Traditional style */}
//       <div 
//         className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
//         style={{
//           top: '0px',
//           opacity: isHovered ? 1 : 0,
//           transitionDuration: '800ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full">
//           <defs>
//             <linearGradient id="flap-back-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#CA6F1E', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#A04000', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-back-gradient)"
//             stroke="#8B4513"
//             strokeWidth="3"
//           />
//         </svg>
//       </div>
//     </div>
//   );

//   // Decoration envelope component for second card - Vibrant colors
//   const DecorationEnvelope = ({ service, isHovered }) => (
//     <div 
//       className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
//       style={{
//         animation: isHovered ? 'envelope-shake 0.5s ease-in-out' : 'none'
//       }}
//     >
//       {/* Main Envelope Container - Vibrant Decoration Design */}
//       <div className="relative h-full rounded-lg shadow-xl overflow-hidden border-4 border-[#D4AF37]" 
//         style={{
//           background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
//         }}
//       >
//         {/* Textured overlay pattern - Festive inspired */}
//         <div className="absolute inset-0 opacity-15">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="decoration-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
//                 {/* Decorative flowers */}
//                 <circle cx="5" cy="5" r="2" fill="#FF1493"/>
//                 <circle cx="55" cy="5" r="2" fill="#00CED1"/>
//                 <circle cx="5" cy="55" r="2" fill="#32CD32"/>
//                 <circle cx="55" cy="55" r="2" fill="#FF4500"/>
//                 {/* Wave pattern */}
//                 <path d="M0,30 Q15,20 30,30 T60,30" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#decoration-pattern)"/>
//           </svg>
//         </div>

//         {/* Decorative border pattern - Festive motifs */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Top decorative border with floral elements */}
//           <svg className="absolute top-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,20 Q20,5 40,20 T80,20 T120,20 T160,20 T200,20 T240,20 T280,20 T320,20 T360,20 T400,20 L400,40 L0,40 Z" 
//               fill="#FF1493" opacity="0.7"/>
//             <path d="M0,24 Q20,10 40,24 T80,24 T120,24 T160,24 T200,24 T240,24 T280,24 T320,24 T360,24 T400,24" 
//               fill="none" stroke="#D4AF37" strokeWidth="2"/>
//           </svg>

//           {/* Bottom decorative border */}
//           <svg className="absolute bottom-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,0 L400,0 L400,20 Q380,35 360,20 T320,20 T280,20 T240,20 T200,20 T160,20 T120,20 T80,20 T40,20 T0,20 Z" 
//               fill="#00CED1" opacity="0.7"/>
//             <path d="M0,16 Q20,30 40,16 T80,16 T120,16 T160,16 T200,16 T240,16 T280,16 T320,16 T360,16 T400,16" 
//               fill="none" stroke="#D4AF37" strokeWidth="2"/>
//           </svg>

//           {/* Left decorative border */}
//           <div className="absolute left-0 top-12 bottom-12 w-8 bg-gradient-to-r from-[#FF1493]/40 to-transparent" />
          
//           {/* Right decorative border */}
//           <div className="absolute right-0 top-12 bottom-12 w-8 bg-gradient-to-l from-[#00CED1]/40 to-transparent" />
//         </div>

//         {/* Central decorative medallion */}
//         <div className="absolute top-8 right-8 w-24 h-24 flex items-center justify-center">
//           <svg width="96" height="96" viewBox="0 0 96 96">
//             {/* Outer decorative circle */}
//             <circle cx="48" cy="48" r="44" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.7"/>
//             <circle cx="48" cy="48" r="40" fill="none" stroke="#FF1493" strokeWidth="1.5" opacity="0.5"/>
            
//             {/* Inner pattern - flower-like motif */}
//             <circle cx="48" cy="48" r="32" fill="#FFD700" opacity="0.4"/>
            
//             {/* Colorful petal shapes */}
//             <path d="M48,20 Q56,28 48,36 Q40,28 48,20 Z" fill="#FF1493" opacity="0.6"/>
//             <path d="M76,48 Q68,56 60,48 Q68,40 76,48 Z" fill="#00CED1" opacity="0.6"/>
//             <path d="M48,76 Q40,68 48,60 Q56,68 48,76 Z" fill="#32CD32" opacity="0.6"/>
//             <path d="M20,48 Q28,40 36,48 Q28,56 20,48 Z" fill="#FF4500" opacity="0.6"/>
            
//             {/* Small decorative dots around */}
//             <circle cx="48" cy="16" r="2" fill="#D4AF37"/>
//             <circle cx="80" cy="48" r="2" fill="#D4AF37"/>
//             <circle cx="48" cy="80" r="2" fill="#D4AF37"/>
//             <circle cx="16" cy="48" r="2" fill="#D4AF37"/>
            
//             {/* Center text */}
//             <text x="48" y="52" textAnchor="middle" fill="#D4AF37" fontSize="12" fontWeight="bold" fontFamily="'Playfair Display', serif">E365</text>
//           </svg>
//         </div>

//         {/* Decorative corner flourishes - Colorful */}
//         <svg className="absolute top-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,0 40,0" fill="none" stroke="#FF1493" strokeWidth="3" opacity="0.7"/>
//           <path d="M5,40 Q5,5 40,5" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6"/>
//           <circle cx="10" cy="10" r="3" fill="#00CED1" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute bottom-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,80 40,80" fill="none" stroke="#32CD32" strokeWidth="3" opacity="0.7"/>
//           <path d="M5,40 Q5,75 40,75" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6"/>
//           <circle cx="10" cy="70" r="3" fill="#FF4500" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute top-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,0 40,0" fill="none" stroke="#00CED1" strokeWidth="3" opacity="0.7"/>
//           <path d="M75,40 Q75,5 40,5" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6"/>
//           <circle cx="70" cy="10" r="3" fill="#FF1493" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute bottom-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,80 40,80" fill="none" stroke="#FF4500" strokeWidth="3" opacity="0.7"/>
//           <path d="M75,40 Q75,75 40,75" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6"/>
//           <circle cx="70" cy="70" r="3" fill="#32CD32" opacity="0.7"/>
//         </svg>

//         {/* Traditional Decoration Illustration - Dancing women */}
//         <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
//           <div 
//             className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-2xl border-4 transition-all ease-in-out"
//             style={{
//               borderColor: '#D4AF37',
//               transform: isHovered ? 'scale(0.85) translateY(-20px)' : 'scale(1)',
//               opacity: isHovered ? 0.3 : 1,
//               transitionDuration: '900ms',
//               transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
//             }}
//           >
//             {/* The actual illustration/painting */}
//             <img 
//               src="images/decoration-illustration.png"
//               alt="Traditional Decoration"
//               className="absolute inset-0 w-full h-full object-cover transition-all ease-in-out"
//               style={{
//                 transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//                 transitionDuration: '1200ms'
//               }}
//             />
            
//             {/* Decorative frame overlay */}
//             <div 
//               className="absolute inset-0 border-8 border-[#FF1493]/20 pointer-events-none transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0.5 : 1,
//                 transitionDuration: '800ms'
//               }}
//             />
            
//             {/* Corner embellishments with vibrant colors */}
//             <div 
//               className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#D4AF37] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#D4AF37] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#D4AF37] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#D4AF37] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//           </div>
//         </div>

//         {/* Service category label - fades out when hovering */}
//         <div 
//           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-opacity ease-in-out z-10"
//           style={{ 
//             opacity: isHovered ? 0 : 1,
//             transitionDuration: '600ms'
//           }}
//         >
//           <div className="text-white text-2xl font-bold mb-2 drop-shadow-lg px-6 py-2 bg-gradient-to-r from-transparent via-black/40 to-transparent rounded-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
//             {service.title}
//           </div>
//           <div className="h-0.5 w-16 bg-white mx-auto mb-3 shadow-lg" />
//           <p className="text-white/90 text-sm uppercase tracking-widest drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
//             Hover to Open
//           </p>
//         </div>

//         {/* Shadow that appears inside envelope when opening */}
//         <div 
//           className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent transition-opacity ease-in-out"
//           style={{ 
//             opacity: isHovered ? 1 : 0,
//             transitionDuration: '900ms'
//           }}
//         />
//       </div>

//       {/* Envelope Flap (Opens upward with 3D rotation) - Vibrant style */}
//       <div 
//         className="absolute left-0 right-0 z-20 transition-all ease-in-out"
//         style={{
//           top: '0px',
//           transformOrigin: 'top center',
//           transform: isHovered 
//             ? 'rotateX(-180deg) translateZ(2px)' 
//             : 'rotateX(0deg)',
//           transformStyle: 'preserve-3d',
//           transitionDuration: '900ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full" style={{ 
//           filter: isHovered 
//             ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.3))' 
//             : 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
//           transition: 'filter 0.9s ease-in-out'
//         }}>
//           {/* Main flap triangle - golden gradient */}
//           <defs>
//             <linearGradient id="flap-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#FFD700', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#FFA500', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-gradient-2)"
//             stroke="#D4AF37"
//             strokeWidth="3"
//           />
//           {/* Decorative pattern on flap */}
//           <path
//             d="M 20 15 L 150 85 L 280 15"
//             fill="none"
//             stroke="#FF1493"
//             strokeWidth="1.5"
//             opacity={isHovered ? "0.6" : "0.4"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           {/* Small decorative dots on flap - colorful */}
//           <circle cx="75" cy="30" r="2" fill="#00CED1" opacity="0.5"/>
//           <circle cx="150" cy="50" r="2" fill="#FF4500" opacity="0.5"/>
//           <circle cx="225" cy="30" r="2" fill="#32CD32" opacity="0.5"/>
          
//           {/* Wax seal - vibrant */}
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="12" 
//             fill="#FF1493" 
//             opacity={isHovered ? "0.9" : "0.7"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="8" 
//             fill="none"
//             stroke="#D4AF37" 
//             strokeWidth="1"
//             opacity={isHovered ? "0.7" : "0.5"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//         </svg>
//       </div>

//       {/* Back side of flap (visible when flap opens) - Vibrant style */}
//       <div 
//         className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
//         style={{
//           top: '0px',
//           opacity: isHovered ? 1 : 0,
//           transitionDuration: '800ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full">
//           <defs>
//             <linearGradient id="flap-back-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#FF8C00', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#FF6347', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-back-gradient-2)"
//             stroke="#D4AF37"
//             strokeWidth="3"
//           />
//         </svg>
//       </div>
//     </div>
//   );
//    // Catering envelope component for third card - Purple/Violet theme
//   const CateringEnvelope = ({ service, isHovered }) => (
//     <div 
//       className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
//       style={{
//         animation: isHovered ? 'envelope-shake 0.5s ease-in-out' : 'none'
//       }}
//     >
//       {/* Main Envelope Container - Purple Festive Design */}
//       <div className="relative h-full rounded-lg shadow-xl overflow-hidden border-4 border-[#9B59B6]" 
//         style={{
//           background: 'linear-gradient(135deg, #8E44AD 0%, #9B59B6 50%, #A569BD 100%)',
//         }}
//       >
//         {/* Textured overlay pattern - Floral inspired */}
//         <div className="absolute inset-0 opacity-15">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="catering-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
//                 {/* Floral elements */}
//                 <circle cx="5" cy="5" r="2" fill="#FF6B9D"/>
//                 <circle cx="55" cy="5" r="2" fill="#FFA500"/>
//                 <circle cx="5" cy="55" r="2" fill="#FFD700"/>
//                 <circle cx="55" cy="55" r="2" fill="#FF1493"/>
//                 {/* Leaf pattern */}
//                 <path d="M30,0 Q35,15 30,30 Q25,15 30,0" fill="#2ECC71" opacity="0.5"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#catering-pattern)"/>
//           </svg>
//         </div>

//         {/* Decorative border pattern - Floral motifs */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Top decorative border with leaves */}
//           <svg className="absolute top-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,20 Q20,5 40,20 T80,20 T120,20 T160,20 T200,20 T240,20 T280,20 T320,20 T360,20 T400,20 L400,40 L0,40 Z" 
//               fill="#FF6B9D" opacity="0.7"/>
//             <path d="M0,24 Q20,10 40,24 T80,24 T120,24 T160,24 T200,24 T240,24 T280,24 T320,24 T360,24 T400,24" 
//               fill="none" stroke="#9B59B6" strokeWidth="2"/>
//           </svg>

//           {/* Bottom decorative border */}
//           <svg className="absolute bottom-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,0 L400,0 L400,20 Q380,35 360,20 T320,20 T280,20 T240,20 T200,20 T160,20 T120,20 T80,20 T40,20 T0,20 Z" 
//               fill="#FFA500" opacity="0.7"/>
//             <path d="M0,16 Q20,30 40,16 T80,16 T120,16 T160,16 T200,16 T240,16 T280,16 T320,16 T360,16 T400,16" 
//               fill="none" stroke="#9B59B6" strokeWidth="2"/>
//           </svg>

//           {/* Left decorative border */}
//           <div className="absolute left-0 top-12 bottom-12 w-8 bg-gradient-to-r from-[#FF6B9D]/40 to-transparent" />
          
//           {/* Right decorative border */}
//           <div className="absolute right-0 top-12 bottom-12 w-8 bg-gradient-to-l from-[#FFA500]/40 to-transparent" />
//         </div>

//         {/* Central decorative medallion */}
//         <div className="absolute top-8 right-8 w-24 h-24 flex items-center justify-center">
//           <svg width="96" height="96" viewBox="0 0 96 96">
//             {/* Outer decorative circle */}
//             <circle cx="48" cy="48" r="44" fill="none" stroke="#9B59B6" strokeWidth="2" opacity="0.7"/>
//             <circle cx="48" cy="48" r="40" fill="none" stroke="#FF6B9D" strokeWidth="1.5" opacity="0.5"/>
            
//             {/* Inner pattern - flower-like motif */}
//             <circle cx="48" cy="48" r="32" fill="#8E44AD" opacity="0.4"/>
            
//             {/* Colorful petal shapes */}
//             <path d="M48,20 Q56,28 48,36 Q40,28 48,20 Z" fill="#FF6B9D" opacity="0.6"/>
//             <path d="M76,48 Q68,56 60,48 Q68,40 76,48 Z" fill="#FFA500" opacity="0.6"/>
//             <path d="M48,76 Q40,68 48,60 Q56,68 48,76 Z" fill="#FFD700" opacity="0.6"/>
//             <path d="M20,48 Q28,40 36,48 Q28,56 20,48 Z" fill="#2ECC71" opacity="0.6"/>
            
//             {/* Small decorative dots around */}
//             <circle cx="48" cy="16" r="2" fill="#9B59B6"/>
//             <circle cx="80" cy="48" r="2" fill="#9B59B6"/>
//             <circle cx="48" cy="80" r="2" fill="#9B59B6"/>
//             <circle cx="16" cy="48" r="2" fill="#9B59B6"/>
            
//             {/* Center text */}
//             <text x="48" y="52" textAnchor="middle" fill="#9B59B6" fontSize="12" fontWeight="bold" fontFamily="'Playfair Display', serif">E365</text>
//           </svg>
//         </div>

//         {/* Decorative corner flourishes - Colorful */}
//         <svg className="absolute top-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,0 40,0" fill="none" stroke="#FF6B9D" strokeWidth="3" opacity="0.7"/>
//           <path d="M5,40 Q5,5 40,5" fill="none" stroke="#9B59B6" strokeWidth="2" opacity="0.6"/>
//           <circle cx="10" cy="10" r="3" fill="#FFA500" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute bottom-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,80 40,80" fill="none" stroke="#2ECC71" strokeWidth="3" opacity="0.7"/>
//           <path d="M5,40 Q5,75 40,75" fill="none" stroke="#9B59B6" strokeWidth="2" opacity="0.6"/>
//           <circle cx="10" cy="70" r="3" fill="#FFD700" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute top-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,0 40,0" fill="none" stroke="#FFA500" strokeWidth="3" opacity="0.7"/>
//           <path d="M75,40 Q75,5 40,5" fill="none" stroke="#9B59B6" strokeWidth="2" opacity="0.6"/>
//           <circle cx="70" cy="10" r="3" fill="#FF6B9D" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute bottom-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,80 40,80" fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.7"/>
//           <path d="M75,40 Q75,75 40,75" fill="none" stroke="#9B59B6" strokeWidth="2" opacity="0.6"/>
//           <circle cx="70" cy="70" r="3" fill="#2ECC71" opacity="0.7"/>
//         </svg>

//         {/* Catering & Food Illustration */}
//         <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
//           <div 
//             className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-2xl border-4 transition-all ease-in-out"
//             style={{
//               borderColor: '#9B59B6',
//               transform: isHovered ? 'scale(0.85) translateY(-20px)' : 'scale(1)',
//               opacity: isHovered ? 0.3 : 1,
//               transitionDuration: '900ms',
//               transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
//             }}
//           >
//             {/* The actual illustration/painting */}
//             <img 
//               src="images/catering-illustration.png"
//               alt="Traditional Catering"
//               className="absolute inset-0 w-full h-full object-cover transition-all ease-in-out"
//               style={{
//                 transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//                 transitionDuration: '1200ms'
//               }}
//             />
            
//             {/* Decorative frame overlay */}
//             <div 
//               className="absolute inset-0 border-8 border-[#FF6B9D]/20 pointer-events-none transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0.5 : 1,
//                 transitionDuration: '800ms'
//               }}
//             />
            
//             {/* Corner embellishments with purple theme */}
//             <div 
//               className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#9B59B6] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#9B59B6] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#9B59B6] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#9B59B6] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//           </div>
//         </div>

//         {/* Service category label - fades out when hovering */}
//         <div 
//           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-opacity ease-in-out z-10"
//           style={{ 
//             opacity: isHovered ? 0 : 1,
//             transitionDuration: '600ms'
//           }}
//         >
//           <div className="text-white text-2xl font-bold mb-2 drop-shadow-lg px-6 py-2 bg-gradient-to-r from-transparent via-black/40 to-transparent rounded-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
//             {service.title}
//           </div>
//           <div className="h-0.5 w-16 bg-white mx-auto mb-3 shadow-lg" />
//           <p className="text-white/90 text-sm uppercase tracking-widest drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
//             Hover to Open
//           </p>
//         </div>

//         {/* Shadow that appears inside envelope when opening */}
//         <div 
//           className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent transition-opacity ease-in-out"
//           style={{ 
//             opacity: isHovered ? 1 : 0,
//             transitionDuration: '900ms'
//           }}
//         />
//       </div>

//       {/* Envelope Flap (Opens upward with 3D rotation) - Purple style */}
//       <div 
//         className="absolute left-0 right-0 z-20 transition-all ease-in-out"
//         style={{
//           top: '0px',
//           transformOrigin: 'top center',
//           transform: isHovered 
//             ? 'rotateX(-180deg) translateZ(2px)' 
//             : 'rotateX(0deg)',
//           transformStyle: 'preserve-3d',
//           transitionDuration: '900ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full" style={{ 
//           filter: isHovered 
//             ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.3))' 
//             : 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
//           transition: 'filter 0.9s ease-in-out'
//         }}>
//           {/* Main flap triangle - purple gradient */}
//           <defs>
//             <linearGradient id="flap-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#8E44AD', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#9B59B6', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-gradient-3)"
//             stroke="#9B59B6"
//             strokeWidth="3"
//           />
//           {/* Decorative pattern on flap */}
//           <path
//             d="M 20 15 L 150 85 L 280 15"
//             fill="none"
//             stroke="#FF6B9D"
//             strokeWidth="1.5"
//             opacity={isHovered ? "0.6" : "0.4"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           {/* Small decorative dots on flap - colorful */}
//           <circle cx="75" cy="30" r="2" fill="#FFA500" opacity="0.5"/>
//           <circle cx="150" cy="50" r="2" fill="#FFD700" opacity="0.5"/>
//           <circle cx="225" cy="30" r="2" fill="#2ECC71" opacity="0.5"/>
          
//           {/* Wax seal - pink/purple */}
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="12" 
//             fill="#FF6B9D" 
//             opacity={isHovered ? "0.9" : "0.7"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="8" 
//             fill="none"
//             stroke="#9B59B6" 
//             strokeWidth="1"
//             opacity={isHovered ? "0.7" : "0.5"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//         </svg>
//       </div>

//       {/* Back side of flap (visible when flap opens) - Purple style */}
//       <div 
//         className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
//         style={{
//           top: '0px',
//           opacity: isHovered ? 1 : 0,
//           transitionDuration: '800ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full">
//           <defs>
//             <linearGradient id="flap-back-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#A569BD', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#8E44AD', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-back-gradient-3)"
//             stroke="#9B59B6"
//             strokeWidth="3"
//           />
//         </svg>
//       </div>
//     </div>
//   );
//   // Photography envelope component for fourth card - Teal/Green theme
//   const PhotographyEnvelope = ({ service, isHovered }) => (
//     <div 
//       className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
//       style={{
//         animation: isHovered ? 'envelope-shake 0.5s ease-in-out' : 'none'
//       }}
//     >
//       {/* Main Envelope Container - Teal/Green Design */}
//       <div className="relative h-full rounded-lg shadow-xl overflow-hidden border-4 border-[#16A085]" 
//         style={{
//           background: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 50%, #138D75 100%)',
//         }}
//       >
//         {/* Textured overlay pattern - Cultural inspired */}
//         <div className="absolute inset-0 opacity-15">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="photography-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
//                 {/* Camera-inspired elements */}
//                 <circle cx="5" cy="5" r="2" fill="#F39C12"/>
//                 <circle cx="55" cy="5" r="2" fill="#E74C3C"/>
//                 <circle cx="5" cy="55" r="2" fill="#3498DB"/>
//                 <circle cx="55" cy="55" r="2" fill="#9B59B6"/>
//                 {/* Triangle pattern */}
//                 <path d="M30,10 L35,20 L25,20 Z" fill="#F1C40F" opacity="0.5"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#photography-pattern)"/>
//           </svg>
//         </div>

//         {/* Decorative border pattern - Indian motifs */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Top decorative border */}
//           <svg className="absolute top-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,20 Q20,5 40,20 T80,20 T120,20 T160,20 T200,20 T240,20 T280,20 T320,20 T360,20 T400,20 L400,40 L0,40 Z" 
//               fill="#F39C12" opacity="0.7"/>
//             <path d="M0,24 Q20,10 40,24 T80,24 T120,24 T160,24 T200,24 T240,24 T280,24 T320,24 T360,24 T400,24" 
//               fill="none" stroke="#16A085" strokeWidth="2"/>
//           </svg>

//           {/* Bottom decorative border */}
//           <svg className="absolute bottom-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,0 L400,0 L400,20 Q380,35 360,20 T320,20 T280,20 T240,20 T200,20 T160,20 T120,20 T80,20 T40,20 T0,20 Z" 
//               fill="#E74C3C" opacity="0.7"/>
//             <path d="M0,16 Q20,30 40,16 T80,16 T120,16 T160,16 T200,16 T240,16 T280,16 T320,16 T360,16 T400,16" 
//               fill="none" stroke="#16A085" strokeWidth="2"/>
//           </svg>

//           {/* Left decorative border */}
//           <div className="absolute left-0 top-12 bottom-12 w-8 bg-gradient-to-r from-[#F39C12]/40 to-transparent" />
          
//           {/* Right decorative border */}
//           <div className="absolute right-0 top-12 bottom-12 w-8 bg-gradient-to-l from-[#E74C3C]/40 to-transparent" />
//         </div>

//         {/* Central decorative medallion */}
//         <div className="absolute top-8 right-8 w-24 h-24 flex items-center justify-center">
//           <svg width="96" height="96" viewBox="0 0 96 96">
//             {/* Outer decorative circle */}
//             <circle cx="48" cy="48" r="44" fill="none" stroke="#16A085" strokeWidth="2" opacity="0.7"/>
//             <circle cx="48" cy="48" r="40" fill="none" stroke="#F39C12" strokeWidth="1.5" opacity="0.5"/>
            
//             {/* Inner pattern - camera lens motif */}
//             <circle cx="48" cy="48" r="32" fill="#1ABC9C" opacity="0.4"/>
            
//             {/* Colorful aperture blade shapes */}
//             <path d="M48,20 Q56,28 48,36 Q40,28 48,20 Z" fill="#F39C12" opacity="0.6"/>
//             <path d="M76,48 Q68,56 60,48 Q68,40 76,48 Z" fill="#E74C3C" opacity="0.6"/>
//             <path d="M48,76 Q40,68 48,60 Q56,68 48,76 Z" fill="#3498DB" opacity="0.6"/>
//             <path d="M20,48 Q28,40 36,48 Q28,56 20,48 Z" fill="#9B59B6" opacity="0.6"/>
            
//             {/* Small decorative dots around */}
//             <circle cx="48" cy="16" r="2" fill="#16A085"/>
//             <circle cx="80" cy="48" r="2" fill="#16A085"/>
//             <circle cx="48" cy="80" r="2" fill="#16A085"/>
//             <circle cx="16" cy="48" r="2" fill="#16A085"/>
            
//             {/* Center text */}
//             <text x="48" y="52" textAnchor="middle" fill="#16A085" fontSize="12" fontWeight="bold" fontFamily="'Playfair Display', serif">E365</text>
//           </svg>
//         </div>

//         {/* Decorative corner flourishes - Colorful */}
//         <svg className="absolute top-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,0 40,0" fill="none" stroke="#F39C12" strokeWidth="3" opacity="0.7"/>
//           <path d="M5,40 Q5,5 40,5" fill="none" stroke="#16A085" strokeWidth="2" opacity="0.6"/>
//           <circle cx="10" cy="10" r="3" fill="#E74C3C" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute bottom-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,80 40,80" fill="none" stroke="#3498DB" strokeWidth="3" opacity="0.7"/>
//           <path d="M5,40 Q5,75 40,75" fill="none" stroke="#16A085" strokeWidth="2" opacity="0.6"/>
//           <circle cx="10" cy="70" r="3" fill="#9B59B6" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute top-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,0 40,0" fill="none" stroke="#E74C3C" strokeWidth="3" opacity="0.7"/>
//           <path d="M75,40 Q75,5 40,5" fill="none" stroke="#16A085" strokeWidth="2" opacity="0.6"/>
//           <circle cx="70" cy="10" r="3" fill="#F39C12" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute bottom-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,80 40,80" fill="none" stroke="#9B59B6" strokeWidth="3" opacity="0.7"/>
//           <path d="M75,40 Q75,75 40,75" fill="none" stroke="#16A085" strokeWidth="2" opacity="0.6"/>
//           <circle cx="70" cy="70" r="3" fill="#3498DB" opacity="0.7"/>
//         </svg>

//         {/* Photography & Videography Illustration - India map */}
//         <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
//           <div 
//             className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-2xl border-4 transition-all ease-in-out"
//             style={{
//               borderColor: '#16A085',
//               transform: isHovered ? 'scale(0.85) translateY(-20px)' : 'scale(1)',
//               opacity: isHovered ? 0.3 : 1,
//               transitionDuration: '900ms',
//               transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
//             }}
//           >
//             {/* The actual illustration/painting */}
//             <img 
//               src="images/photography-illustration.png"
//               alt="Photography & Videography"
//               className="absolute inset-0 w-full h-full object-cover transition-all ease-in-out"
//               style={{
//                 transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//                 transitionDuration: '1200ms'
//               }}
//             />
            
//             {/* Decorative frame overlay */}
//             <div 
//               className="absolute inset-0 border-8 border-[#F39C12]/20 pointer-events-none transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0.5 : 1,
//                 transitionDuration: '800ms'
//               }}
//             />
            
//             {/* Corner embellishments with teal theme */}
//             <div 
//               className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#16A085] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#16A085] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#16A085] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#16A085] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//           </div>
//         </div>

//         {/* Service category label - fades out when hovering */}
//         <div 
//           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-opacity ease-in-out z-10"
//           style={{ 
//             opacity: isHovered ? 0 : 1,
//             transitionDuration: '600ms'
//           }}
//         >
//           <div className="text-white text-2xl font-bold mb-2 drop-shadow-lg px-6 py-2 bg-gradient-to-r from-transparent via-black/40 to-transparent rounded-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
//             {service.title}
//           </div>
//           <div className="h-0.5 w-16 bg-white mx-auto mb-3 shadow-lg" />
//           <p className="text-white/90 text-sm uppercase tracking-widest drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
//             Hover to Open
//           </p>
//         </div>

//         {/* Shadow that appears inside envelope when opening */}
//         <div 
//           className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent transition-opacity ease-in-out"
//           style={{ 
//             opacity: isHovered ? 1 : 0,
//             transitionDuration: '900ms'
//           }}
//         />
//       </div>

//       {/* Envelope Flap (Opens upward with 3D rotation) - Teal style */}
//       <div 
//         className="absolute left-0 right-0 z-20 transition-all ease-in-out"
//         style={{
//           top: '0px',
//           transformOrigin: 'top center',
//           transform: isHovered 
//             ? 'rotateX(-180deg) translateZ(2px)' 
//             : 'rotateX(0deg)',
//           transformStyle: 'preserve-3d',
//           transitionDuration: '900ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full" style={{ 
//           filter: isHovered 
//             ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.3))' 
//             : 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
//           transition: 'filter 0.9s ease-in-out'
//         }}>
//           {/* Main flap triangle - teal gradient */}
//           <defs>
//             <linearGradient id="flap-gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#1ABC9C', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#16A085', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-gradient-4)"
//             stroke="#16A085"
//             strokeWidth="3"
//           />
//           {/* Decorative pattern on flap */}
//           <path
//             d="M 20 15 L 150 85 L 280 15"
//             fill="none"
//             stroke="#F39C12"
//             strokeWidth="1.5"
//             opacity={isHovered ? "0.6" : "0.4"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           {/* Small decorative dots on flap - colorful */}
//           <circle cx="75" cy="30" r="2" fill="#E74C3C" opacity="0.5"/>
//           <circle cx="150" cy="50" r="2" fill="#3498DB" opacity="0.5"/>
//           <circle cx="225" cy="30" r="2" fill="#9B59B6" opacity="0.5"/>
          
//           {/* Wax seal - orange/teal */}
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="12" 
//             fill="#F39C12" 
//             opacity={isHovered ? "0.9" : "0.7"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="8" 
//             fill="none"
//             stroke="#16A085" 
//             strokeWidth="1"
//             opacity={isHovered ? "0.7" : "0.5"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//         </svg>
//       </div>

//       {/* Back side of flap (visible when flap opens) - Teal style */}
//       <div 
//         className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
//         style={{
//           top: '0px',
//           opacity: isHovered ? 1 : 0,
//           transitionDuration: '800ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full">
//           <defs>
//             <linearGradient id="flap-back-gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#138D75', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#117A65', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-back-gradient-4)"
//             stroke="#16A085"
//             strokeWidth="3"
//           />
//         </svg>
//       </div>
//     </div>
//   );

//     // Entertainment envelope component for fifth card - Red/Crimson theme
//   const EntertainmentEnvelope = ({ service, isHovered }) => (
//     <div 
//       className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
//       style={{
//         animation: isHovered ? 'envelope-shake 0.5s ease-in-out' : 'none'
//       }}
//     >
//       {/* Main Envelope Container - Red/Crimson Design */}
//       <div className="relative h-full rounded-lg shadow-xl overflow-hidden border-4 border-[#C0392B]" 
//         style={{
//           background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 50%, #A93226 100%)',
//         }}
//       >
//         {/* Textured overlay pattern - Food & celebration inspired */}
//         <div className="absolute inset-0 opacity-15">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="entertainment-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
//                 {/* Musical & food elements */}
//                 <circle cx="5" cy="5" r="2" fill="#F1C40F"/>
//                 <circle cx="55" cy="5" r="2" fill="#16A085"/>
//                 <circle cx="5" cy="55" r="2" fill="#E67E22"/>
//                 <circle cx="55" cy="55" r="2" fill="#ECF0F1"/>
//                 {/* Note pattern */}
//                 <path d="M30,15 Q32,10 34,15 L34,25" stroke="#F39C12" strokeWidth="1" fill="none" opacity="0.5"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#entertainment-pattern)"/>
//           </svg>
//         </div>

//         {/* Decorative border pattern - Festive motifs */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Top decorative border with garland */}
//           <svg className="absolute top-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,20 Q20,5 40,20 T80,20 T120,20 T160,20 T200,20 T240,20 T280,20 T320,20 T360,20 T400,20 L400,40 L0,40 Z" 
//               fill="#F1C40F" opacity="0.7"/>
//             <path d="M0,24 Q20,10 40,24 T80,24 T120,24 T160,24 T200,24 T240,24 T280,24 T320,24 T360,24 T400,24" 
//               fill="none" stroke="#C0392B" strokeWidth="2"/>
//           </svg>

//           {/* Bottom decorative border */}
//           <svg className="absolute bottom-0 left-0 w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
//             <path d="M0,0 L400,0 L400,20 Q380,35 360,20 T320,20 T280,20 T240,20 T200,20 T160,20 T120,20 T80,20 T40,20 T0,20 Z" 
//               fill="#16A085" opacity="0.7"/>
//             <path d="M0,16 Q20,30 40,16 T80,16 T120,16 T160,16 T200,16 T240,16 T280,16 T320,16 T360,16 T400,16" 
//               fill="none" stroke="#C0392B" strokeWidth="2"/>
//           </svg>

//           {/* Left decorative border */}
//           <div className="absolute left-0 top-12 bottom-12 w-8 bg-gradient-to-r from-[#F1C40F]/40 to-transparent" />
          
//           {/* Right decorative border */}
//           <div className="absolute right-0 top-12 bottom-12 w-8 bg-gradient-to-l from-[#16A085]/40 to-transparent" />
//         </div>

//         {/* Central decorative medallion */}
//         <div className="absolute top-8 right-8 w-24 h-24 flex items-center justify-center">
//           <svg width="96" height="96" viewBox="0 0 96 96">
//             {/* Outer decorative circle */}
//             <circle cx="48" cy="48" r="44" fill="none" stroke="#C0392B" strokeWidth="2" opacity="0.7"/>
//             <circle cx="48" cy="48" r="40" fill="none" stroke="#F1C40F" strokeWidth="1.5" opacity="0.5"/>
            
//             {/* Inner pattern - music note motif */}
//             <circle cx="48" cy="48" r="32" fill="#E74C3C" opacity="0.4"/>
            
//             {/* Colorful musical shapes */}
//             <path d="M48,20 Q56,28 48,36 Q40,28 48,20 Z" fill="#F1C40F" opacity="0.6"/>
//             <path d="M76,48 Q68,56 60,48 Q68,40 76,48 Z" fill="#16A085" opacity="0.6"/>
//             <path d="M48,76 Q40,68 48,60 Q56,68 48,76 Z" fill="#E67E22" opacity="0.6"/>
//             <path d="M20,48 Q28,40 36,48 Q28,56 20,48 Z" fill="#ECF0F1" opacity="0.6"/>
            
//             {/* Small decorative dots around */}
//             <circle cx="48" cy="16" r="2" fill="#C0392B"/>
//             <circle cx="80" cy="48" r="2" fill="#C0392B"/>
//             <circle cx="48" cy="80" r="2" fill="#C0392B"/>
//             <circle cx="16" cy="48" r="2" fill="#C0392B"/>
            
//             {/* Center text */}
//             <text x="48" y="52" textAnchor="middle" fill="#C0392B" fontSize="12" fontWeight="bold" fontFamily="'Playfair Display', serif">E365</text>
//           </svg>
//         </div>

//         {/* Decorative corner flourishes - Colorful */}
//         <svg className="absolute top-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,0 40,0" fill="none" stroke="#F1C40F" strokeWidth="3" opacity="0.7"/>
//           <path d="M5,40 Q5,5 40,5" fill="none" stroke="#C0392B" strokeWidth="2" opacity="0.6"/>
//           <circle cx="10" cy="10" r="3" fill="#16A085" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute bottom-4 left-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M0,40 Q0,80 40,80" fill="none" stroke="#E67E22" strokeWidth="3" opacity="0.7"/>
//           <path d="M5,40 Q5,75 40,75" fill="none" stroke="#C0392B" strokeWidth="2" opacity="0.6"/>
//           <circle cx="10" cy="70" r="3" fill="#ECF0F1" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute top-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,0 40,0" fill="none" stroke="#16A085" strokeWidth="3" opacity="0.7"/>
//           <path d="M75,40 Q75,5 40,5" fill="none" stroke="#C0392B" strokeWidth="2" opacity="0.6"/>
//           <circle cx="70" cy="10" r="3" fill="#F1C40F" opacity="0.7"/>
//         </svg>
        
//         <svg className="absolute bottom-4 right-4 w-20 h-20" viewBox="0 0 80 80">
//           <path d="M80,40 Q80,80 40,80" fill="none" stroke="#ECF0F1" strokeWidth="3" opacity="0.7"/>
//           <path d="M75,40 Q75,75 40,75" fill="none" stroke="#C0392B" strokeWidth="2" opacity="0.6"/>
//           <circle cx="70" cy="70" r="3" fill="#E67E22" opacity="0.7"/>
//         </svg>

//         {/* Entertainment & DJ Illustration - Food celebration */}
//         <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
//           <div 
//             className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-2xl border-4 transition-all ease-in-out"
//             style={{
//               borderColor: '#C0392B',
//               transform: isHovered ? 'scale(0.85) translateY(-20px)' : 'scale(1)',
//               opacity: isHovered ? 0.3 : 1,
//               transitionDuration: '900ms',
//               transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
//             }}
//           >
//             {/* The actual illustration/painting */}
//             <img 
//               src="images/entertainment-illustration.png"
//               alt="Entertainment & DJ"
//               className="absolute inset-0 w-full h-full object-cover transition-all ease-in-out"
//               style={{
//                 transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//                 transitionDuration: '1200ms'
//               }}
//             />
            
//             {/* Decorative frame overlay */}
//             <div 
//               className="absolute inset-0 border-8 border-[#F1C40F]/20 pointer-events-none transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0.5 : 1,
//                 transitionDuration: '800ms'
//               }}
//             />
            
//             {/* Corner embellishments with red theme */}
//             <div 
//               className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#C0392B] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#C0392B] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, -5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#C0392B] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(-5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//             <div 
//               className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#C0392B] transition-all ease-in-out"
//               style={{
//                 opacity: isHovered ? 0 : 1,
//                 transform: isHovered ? 'translate(5px, 5px) scale(0.8)' : 'translate(0, 0) scale(1)',
//                 transitionDuration: '700ms'
//               }}
//             />
//           </div>
//         </div>

//         {/* Service category label - fades out when hovering */}
//         <div 
//           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-opacity ease-in-out z-10"
//           style={{ 
//             opacity: isHovered ? 0 : 1,
//             transitionDuration: '600ms'
//           }}
//         >
//           <div className="text-white text-2xl font-bold mb-2 drop-shadow-lg px-6 py-2 bg-gradient-to-r from-transparent via-black/40 to-transparent rounded-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
//             {service.title}
//           </div>
//           <div className="h-0.5 w-16 bg-white mx-auto mb-3 shadow-lg" />
//           <p className="text-white/90 text-sm uppercase tracking-widest drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
//             Hover to Open
//           </p>
//         </div>

//         {/* Shadow that appears inside envelope when opening */}
//         <div 
//           className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent transition-opacity ease-in-out"
//           style={{ 
//             opacity: isHovered ? 1 : 0,
//             transitionDuration: '900ms'
//           }}
//         />
//       </div>

//       {/* Envelope Flap (Opens upward with 3D rotation) - Red style */}
//       <div 
//         className="absolute left-0 right-0 z-20 transition-all ease-in-out"
//         style={{
//           top: '0px',
//           transformOrigin: 'top center',
//           transform: isHovered 
//             ? 'rotateX(-180deg) translateZ(2px)' 
//             : 'rotateX(0deg)',
//           transformStyle: 'preserve-3d',
//           transitionDuration: '900ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full" style={{ 
//           filter: isHovered 
//             ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.3))' 
//             : 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
//           transition: 'filter 0.9s ease-in-out'
//         }}>
//           {/* Main flap triangle - red gradient */}
//           <defs>
//             <linearGradient id="flap-gradient-5" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#E74C3C', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#C0392B', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-gradient-5)"
//             stroke="#C0392B"
//             strokeWidth="3"
//           />
//           {/* Decorative pattern on flap */}
//           <path
//             d="M 20 15 L 150 85 L 280 15"
//             fill="none"
//             stroke="#F1C40F"
//             strokeWidth="1.5"
//             opacity={isHovered ? "0.6" : "0.4"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           {/* Small decorative dots on flap - colorful */}
//           <circle cx="75" cy="30" r="2" fill="#16A085" opacity="0.5"/>
//           <circle cx="150" cy="50" r="2" fill="#E67E22" opacity="0.5"/>
//           <circle cx="225" cy="30" r="2" fill="#ECF0F1" opacity="0.5"/>
          
//           {/* Wax seal - yellow/red */}
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="12" 
//             fill="#F1C40F" 
//             opacity={isHovered ? "0.9" : "0.7"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="8" 
//             fill="none"
//             stroke="#C0392B" 
//             strokeWidth="1"
//             opacity={isHovered ? "0.7" : "0.5"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//         </svg>
//       </div>

//       {/* Back side of flap (visible when flap opens) - Red style */}
//       <div 
//         className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
//         style={{
//           top: '0px',
//           opacity: isHovered ? 1 : 0,
//           transitionDuration: '800ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full">
//           <defs>
//             <linearGradient id="flap-back-gradient-5" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" style={{stopColor: '#A93226', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: '#922B21', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="url(#flap-back-gradient-5)"
//             stroke="#C0392B"
//             strokeWidth="3"
//           />
//         </svg>
//       </div>
//     </div>
//   );


//   // Standard envelope component for other cards (unchanged)
//   const StandardEnvelope = ({ service, isHovered }) => (
//     <div 
//       className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
//       style={{
//         animation: isHovered ? 'envelope-shake 0.5s ease-in-out' : 'none'
//       }}
//     >
//       {/* Main Envelope Container */}
//       <div className="relative h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
//         {/* Envelope background texture */}
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-rose-50/30" />
        
//         {/* Subtle texture overlay */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div style={{
//             backgroundImage: `repeating-linear-gradient(0deg, #C41E3A, #C41E3A 1px, transparent 1px, transparent 20px)`,
//           }} className="w-full h-full" />
//         </div>

//         {/* Envelope seal/stamp area */}
//         <div className="absolute top-8 right-8 w-20 h-20 border-2 border-[#C41E3A]/20 rounded-full flex items-center justify-center">
//           <div className="text-[#C41E3A] text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
//             E365
//           </div>
//         </div>

//         {/* Decorative address lines */}
//         <div className="absolute bottom-16 left-12 right-12 space-y-3 opacity-30">
//           <div className="h-0.5 bg-gray-400 w-3/4" />
//           <div className="h-0.5 bg-gray-400 w-full" />
//           <div className="h-0.5 bg-gray-400 w-2/3" />
//         </div>

//         {/* Service category label - fades out when hovering */}
//         <div 
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity ease-in-out"
//           style={{ 
//             opacity: isHovered ? 0 : 1,
//             transitionDuration: '600ms'
//           }}
//         >
//           <div className="text-gray-800 text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
//             {service.title}
//           </div>
//           <div className="h-0.5 w-16 bg-[#C41E3A] mx-auto mb-3" />
//           <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
//             Hover to Open
//           </p>
//         </div>

//         {/* Corner decorations */}
//         <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C41E3A]/20" />
//         <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C41E3A]/20" />
//         <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C41E3A]/20" />
//         <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C41E3A]/20" />

//         {/* Shadow that appears inside envelope when opening */}
//         <div 
//           className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent transition-opacity ease-in-out"
//           style={{ 
//             opacity: isHovered ? 1 : 0,
//             transitionDuration: '900ms'
//           }}
//         />
//       </div>

//       {/* Envelope Flap (Opens upward with 3D rotation) */}
//       <div 
//         className="absolute left-0 right-0 z-20 transition-all ease-in-out"
//         style={{
//           top: '0px',
//           transformOrigin: 'top center',
//           transform: isHovered 
//             ? 'rotateX(-180deg) translateZ(2px)' 
//             : 'rotateX(0deg)',
//           transformStyle: 'preserve-3d',
//           transitionDuration: '900ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full" style={{ 
//           filter: isHovered 
//             ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.2))' 
//             : 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
//           transition: 'filter 0.9s ease-in-out'
//         }}>
//           {/* Main flap triangle */}
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="white"
//             stroke="#d1d5db"
//             strokeWidth="2"
//           />
//           {/* Flap inner shading - darkens when open */}
//           <path
//             d="M 20 15 L 150 85 L 280 15"
//             fill="none"
//             stroke="#C41E3A"
//             strokeWidth="0.8"
//             opacity={isHovered ? "0.4" : "0.2"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           {/* Seal center */}
//           <circle 
//             cx="150" 
//             cy="50" 
//             r="8" 
//             fill="#C41E3A" 
//             opacity={isHovered ? "0.3" : "0.15"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//           {/* Wax seal detail */}
//           <path
//             d="M 145 45 Q 150 48 155 45 Q 150 42 145 45 Z"
//             fill="#C41E3A"
//             opacity={isHovered ? "0.5" : "0.2"}
//             style={{ transition: 'opacity 0.9s ease-in-out' }}
//           />
//         </svg>
//       </div>

//       {/* Back side of flap (visible when flap opens) */}
//       <div 
//         className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
//         style={{
//           top: '0px',
//           opacity: isHovered ? 1 : 0,
//           transitionDuration: '800ms'
//         }}
//       >
//         <svg viewBox="0 0 300 100" className="w-full">
//           <path
//             d="M 5 5 L 150 95 L 295 5 Z"
//             fill="#f3f4f6"
//             stroke="#d1d5db"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .envelope-container {
//           perspective: 1500px;
//         }

//         .decorative-ornament {
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0 10 Q25 0 50 10 T100 10' fill='none' stroke='%23ddd' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%23C41E3A'/%3E%3Cpath d='M40 10 Q45 5 50 10 Q55 5 60 10' fill='none' stroke='%23C41E3A' stroke-width='0.5'/%3E%3C/svg%3E");
//           background-repeat: no-repeat;
//           background-position: center;
//           background-size: contain;
//         }

//         @keyframes subtle-float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }

//         @keyframes envelope-shake {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(-1deg); }
//           75% { transform: rotate(1deg); }
//         }
//       `}</style>

//       <section 
//         ref={sectionRef}
//         className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-20 sm:py-24 lg:py-32 overflow-hidden"
//       >
//         {/* Background decorative pattern */}
//         <div className="absolute inset-0 opacity-[0.02]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #C41E3A 1px, transparent 0)`,
//             backgroundSize: '50px 50px'
//           }} />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
//             <h2 
//               className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//               style={{ 
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 transitionDelay: '200ms',
//                 letterSpacing: '-0.01em'
//               }}
//             >
//               What We Do
//             </h2>

//             {/* Decorative ornament */}
//             <div 
//               className={`decorative-ornament h-8 w-48 mx-auto mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
//               style={{ transitionDelay: '400ms' }}
//             />

//             <p 
//               className={`text-gray-700 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//               style={{ 
//                 fontFamily: "'Playfair Display', Georgia, serif",
//                 fontStyle: 'italic',
//                 transitionDelay: '600ms'
//               }}
//             >
//               We are not only a wedding planner in Kolkata – we offer more than that. 360-degree event management with additional services!
//             </p>
//           </div>

//           {/* Envelope Cards Grid */}
//           <div className="space-y-12 lg:space-y-16">
//             {/* Top Row - 3 Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
//               {services.slice(0, 3).map((service, index) => (
//                 <div
//                   key={service.id}
//                   className={`envelope-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//                   style={{ transitionDelay: service.delay }}
//                   onMouseEnter={() => setHoveredCard(service.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className="relative h-[600px]">
//                     {/* Render special envelopes for first three cards, standard for others */}
//                    {service.id === 1 ? (
//   <TraditionalEnvelope service={service} isHovered={hoveredCard === service.id} />
// ) : service.id === 2 ? (
//   <DecorationEnvelope service={service} isHovered={hoveredCard === service.id} />
// ) : service.id === 3 ? (
//   <CateringEnvelope service={service} isHovered={hoveredCard === service.id} />
// ) : service.id === 4 ? (
//   <PhotographyEnvelope service={service} isHovered={hoveredCard === service.id} />
// ) : service.id === 5 ? (
//   <EntertainmentEnvelope service={service} isHovered={hoveredCard === service.id} />
// ) : (
//   <StandardEnvelope service={service} isHovered={hoveredCard === service.id} />
// )}

//                     {/* Content Card (Slides OUT from inside envelope) - UNCHANGED */}
//                     <div 
//                       className="absolute left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-all"
//                       style={{
//                         bottom: hoveredCard === service.id ? '120px' : '80px',
//                         height: '520px',
//                         opacity: hoveredCard === service.id ? 1 : 0,
//                         transform: hoveredCard === service.id 
//                           ? 'translateY(0) scale(1)' 
//                           : 'translateY(40px) scale(0.9)',
//                         zIndex: hoveredCard === service.id ? 25 : 5,
//                         boxShadow: hoveredCard === service.id 
//                           ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0,0,0,0.05)' 
//                           : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//                         pointerEvents: hoveredCard === service.id ? 'auto' : 'none',
//                         transitionDelay: hoveredCard === service.id ? '0.4s' : '0s',
//                         transitionDuration: '900ms',
//                         transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
//                       }}
//                     >
//                       {/* Image Section */}
//                       <div className="relative h-64 overflow-hidden">
//                         <div 
//                           className="absolute inset-0 bg-cover bg-center transition-transform ease-in-out"
//                           style={{
//                             backgroundImage: `url(${service.image})`,
//                             transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)',
//                             transitionDuration: '1000ms'
//                           }}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        
//                         {/* Floating service badge */}
//                         <div 
//                           className="absolute top-6 left-6 bg-[#C41E3A] text-white px-5 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all ease-out"
//                           style={{
//                             transform: hoveredCard === service.id ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)',
//                             transitionDelay: hoveredCard === service.id ? '0.6s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           Services
//                         </div>

//                         {/* Title overlay on image */}
//                         <div 
//                           className="absolute bottom-6 left-6 right-6 transition-all ease-out"
//                           style={{
//                             opacity: hoveredCard === service.id ? 1 : 0,
//                             transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                             transitionDelay: hoveredCard === service.id ? '0.7s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           <h3 
//                             className="text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-lg"
//                             style={{ 
//                               fontFamily: "'Playfair Display', Georgia, serif"
//                             }}
//                           >
//                             {service.title}
//                           </h3>
//                         </div>
//                       </div>

//                       {/* Content Section */}
//                       <div className="p-8 bg-white">
//                         {/* Decorative divider */}
//                         <div 
//                           className="flex items-center gap-2 mb-5 transition-all ease-out"
//                           style={{
//                             opacity: hoveredCard === service.id ? 1 : 0,
//                             transform: hoveredCard === service.id ? 'translateX(0)' : 'translateX(-20px)',
//                             transitionDelay: hoveredCard === service.id ? '0.8s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           <div className="h-0.5 w-12 bg-[#C41E3A]" />
//                           <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
//                           <div className="h-0.5 flex-1 bg-gradient-to-r from-[#C41E3A]/50 to-transparent" />
//                         </div>

//                         {/* Description */}
//                         <p 
//                           className="text-gray-700 text-base leading-relaxed mb-6 transition-all ease-out"
//                           style={{ 
//                             fontFamily: "'Playfair Display', Georgia, serif",
//                             opacity: hoveredCard === service.id ? 1 : 0,
//                             transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                             transitionDelay: hoveredCard === service.id ? '0.9s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           {service.description}
//                         </p>

//                         {/* Read More Button */}
//                         <button 
//                           className="group relative overflow-hidden bg-transparent border-2 border-[#C41E3A] text-[#C41E3A] px-8 py-3.5 font-bold text-sm tracking-widest uppercase transition-all ease-out hover:text-white rounded-lg shadow-md hover:shadow-xl"
//                           style={{
//                             fontFamily: "'Playfair Display', Georgia, serif",
//                             opacity: hoveredCard === service.id ? 1 : 0,
//                             transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                             transitionDelay: hoveredCard === service.id ? '1s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           <span className="relative z-10">READ MORE</span>
//                           <span className="absolute inset-0 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//                         </button>
//                       </div>

//                       {/* Bottom decorative corner */}
//                       <div 
//                         className="absolute bottom-4 right-4 opacity-10 transition-all ease-in-out"
//                         style={{
//                           transform: hoveredCard === service.id ? 'rotate(0deg)' : 'rotate(-90deg)',
//                           transitionDelay: hoveredCard === service.id ? '1.1s' : '0s',
//                           transitionDuration: '700ms'
//                         }}
//                       >
//                         <svg width="60" height="60" viewBox="0 0 60 60">
//                           <path d="M0,60 Q0,30 30,30 Q0,30 0,0" fill="none" stroke="#C41E3A" strokeWidth="2"/>
//                           <circle cx="30" cy="30" r="3" fill="#C41E3A"/>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Bottom Row - 2 Cards Centered */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
//               {services.slice(3, 5).map((service, index) => (
//                 <div
//                   key={service.id}
//                   className={`envelope-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//                   style={{ transitionDelay: service.delay }}
//                   onMouseEnter={() => setHoveredCard(service.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className="relative h-[600px]">
//                     {service.id === 4 ? (
//           <PhotographyEnvelope service={service} isHovered={hoveredCard === service.id} />
//         ) : service.id === 5 ? (
//           <EntertainmentEnvelope service={service} isHovered={hoveredCard === service.id} />
//         ) : (
//           <StandardEnvelope service={service} isHovered={hoveredCard === service.id} />
//         )}

//                     {/* Content Card (Slides OUT from inside envelope) - UNCHANGED */}
//                     <div 
//                       className="absolute left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-all"
//                       style={{
//                         bottom: hoveredCard === service.id ? '120px' : '80px',
//                         height: '520px',
//                         opacity: hoveredCard === service.id ? 1 : 0,
//                         transform: hoveredCard === service.id 
//                           ? 'translateY(0) scale(1)' 
//                           : 'translateY(40px) scale(0.9)',
//                         zIndex: hoveredCard === service.id ? 25 : 5,
//                         boxShadow: hoveredCard === service.id 
//                           ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0,0,0,0.05)' 
//                           : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//                         pointerEvents: hoveredCard === service.id ? 'auto' : 'none',
//                         transitionDelay: hoveredCard === service.id ? '0.4s' : '0s',
//                         transitionDuration: '900ms',
//                         transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
//                       }}
//                     >
//                       {/* Image Section */}
//                       <div className="relative h-64 overflow-hidden">
//                         <div 
//                           className="absolute inset-0 bg-cover bg-center transition-transform ease-in-out"
//                           style={{
//                             backgroundImage: `url(${service.image})`,
//                             transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)',
//                             transitionDuration: '1000ms'
//                           }}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        
//                         {/* Floating service badge */}
//                         <div 
//                           className="absolute top-6 left-6 bg-[#C41E3A] text-white px-5 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all ease-out"
//                           style={{
//                             transform: hoveredCard === service.id ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)',
//                             transitionDelay: hoveredCard === service.id ? '0.6s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           Services
//                         </div>

//                         {/* Title overlay on image */}
//                         <div 
//                           className="absolute bottom-6 left-6 right-6 transition-all ease-out"
//                           style={{
//                             opacity: hoveredCard === service.id ? 1 : 0,
//                             transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                             transitionDelay: hoveredCard === service.id ? '0.7s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           <h3 
//                             className="text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-lg"
//                             style={{ 
//                               fontFamily: "'Playfair Display', Georgia, serif"
//                             }}
//                           >
//                             {service.title}
//                           </h3>
//                         </div>
//                       </div>

//                       {/* Content Section */}
//                       <div className="p-8 bg-white">
//                         {/* Decorative divider */}
//                         <div 
//                           className="flex items-center gap-2 mb-5 transition-all ease-out"
//                           style={{
//                             opacity: hoveredCard === service.id ? 1 : 0,
//                             transform: hoveredCard === service.id ? 'translateX(0)' : 'translateX(-20px)',
//                             transitionDelay: hoveredCard === service.id ? '0.8s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           <div className="h-0.5 w-12 bg-[#C41E3A]" />
//                           <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
//                           <div className="h-0.5 flex-1 bg-gradient-to-r from-[#C41E3A]/50 to-transparent" />
//                         </div>

//                         {/* Description */}
//                         <p 
//                           className="text-gray-700 text-base leading-relaxed mb-6 transition-all ease-out"
//                           style={{ 
//                             fontFamily: "'Playfair Display', Georgia, serif",
//                             opacity: hoveredCard === service.id ? 1 : 0,
//                             transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                             transitionDelay: hoveredCard === service.id ? '0.9s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           {service.description}
//                         </p>

//                         {/* Read More Button */}
//                         <button 
//                           className="group relative overflow-hidden bg-transparent border-2 border-[#C41E3A] text-[#C41E3A] px-8 py-3.5 font-bold text-sm tracking-widest uppercase transition-all ease-out hover:text-white rounded-lg shadow-md hover:shadow-xl"
//                           style={{
//                             fontFamily: "'Playfair Display', Georgia, serif",
//                             opacity: hoveredCard === service.id ? 1 : 0,
//                             transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                             transitionDelay: hoveredCard === service.id ? '1s' : '0s',
//                             transitionDuration: '600ms'
//                           }}
//                         >
//                           <span className="relative z-10">READ MORE</span>
//                           <span className="absolute inset-0 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//                         </button>
//                       </div>

//                       {/* Bottom decorative corner */}
//                       <div 
//                         className="absolute bottom-4 right-4 opacity-10 transition-all ease-in-out"
//                         style={{
//                           transform: hoveredCard === service.id ? 'rotate(0deg)' : 'rotate(-90deg)',
//                           transitionDelay: hoveredCard === service.id ? '1.1s' : '0s',
//                           transitionDuration: '700ms'
//                         }}
//                       >
//                         <svg width="60" height="60" viewBox="0 0 60 60">
//                           <path d="M0,60 Q0,30 30,30 Q0,30 0,0" fill="none" stroke="#C41E3A" strokeWidth="2"/>
//                           <circle cx="30" cy="30" r="3" fill="#C41E3A"/>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Floating decorative elements */}
//         <div className={`absolute top-20 left-[5%] w-3 h-3 bg-[#C41E3A]/10 rounded-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
//         <div className={`absolute bottom-32 right-[8%] w-2 h-2 bg-[#C41E3A]/15 rounded-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
//       </section>
//     </>
//   );
// };

// export default ServicesSection;
