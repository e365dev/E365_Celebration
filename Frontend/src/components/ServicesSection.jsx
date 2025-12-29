import React, { useState, useEffect } from 'react';

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Service data with images and descriptions
  const services = [
    {
      id: 1,
      title: "Wedding Photography",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      description: "Capture your special moments with our professional wedding photography services. We create timeless memories that last forever.",
      icon: "📸"
    },
    {
      id: 2,
      title: "Event Planning",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800",
      description: "From intimate gatherings to grand celebrations, we plan every detail to perfection, ensuring your event is truly unforgettable.",
      icon: "🎉"
    },
    {
      id: 3,
      title: "Catering Services",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800",
      description: "Delight your guests with exquisite cuisine crafted by our expert chefs. We offer customized menus for every occasion.",
      icon: "🍽️"
    },
    {
      id: 4,
      title: "Decoration & Design",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800",
      description: "Transform your venue into a magical space with our stunning decoration and design services tailored to your vision.",
      icon: "✨"
    },
    {
      id: 5,
      title: "Entertainment",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800",
      description: "Keep your guests entertained with our diverse range of entertainment options, from live bands to DJs and performers.",
      icon: "🎵"
    },
    {
      id: 6,
      title: "Videography",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
      description: "Relive your special day with cinematic videos that capture every emotion and moment in stunning detail.",
      icon: "🎬"
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);

    // Auto-play carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden" style={{ backgroundColor: '#323A40' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive celebration services to make your special day absolutely perfect
          </p>
        </div>

        {/* Carousel Container */}
        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Slides */}
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="min-w-full px-4"
                >
                  {/* Service Card */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-pink-500/30 transition-all duration-500">
                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                      {/* Image Side */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="relative overflow-hidden rounded-xl shadow-2xl">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Icon Badge */}
                          <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl shadow-lg animate-bounce-slow">
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex flex-col justify-center space-y-6">
                        <div>
                          <span className="text-pink-400 font-semibold text-sm uppercase tracking-wider">
                            Service {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                            {service.title}
                          </h3>
                          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mb-6" />
                        </div>
                        
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex gap-4 pt-4">
                          <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25">
                            <span className="flex items-center gap-2">
                              Learn More
                              <svg 
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-pink-500/50 group z-10"
              aria-label="Previous slide"
            >
              <svg 
                className="w-6 h-6 text-white transform group-hover:-translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-pink-500/50 group z-10"
              aria-label="Next slide"
            >
              <svg 
                className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-12 h-3 bg-gradient-to-r from-pink-500 to-purple-500'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => goToSlide(index)}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                  currentSlide === index
                    ? 'ring-4 ring-pink-500 scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-24 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-2">
                  <span className="text-white text-xs font-semibold truncate w-full">
                    {service.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        /* Smooth transitions */
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}