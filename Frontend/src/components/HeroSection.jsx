import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ background video pool
  const backgroundVideos = [
    "videos/video4.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
  ];

  const [bgVideo, setBgVideo] = useState("");

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const randomVideo =
      backgroundVideos[Math.floor(Math.random() * backgroundVideos.length)];

    // ✅ cache busting
    setBgVideo(`${randomVideo}?v=${Date.now()}`);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <section className="relative min-h-screen w-full overflow-hidden bg-[#C41E3A]">
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* Base red color */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#B91C3C] via-[#DC143C] to-[#E11D48]" />

          {/* ✅ BACKGROUND VIDEO */}
          <div
            className={`absolute inset-0 transition-all ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ transitionDuration: '1500ms' }}
          >
            <video
              key={bgVideo}
              src={bgVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover object-center"
              style={{
                filter: 'grayscale(20%) sepia(30%)',
                mixBlendMode: 'multiply',
                opacity: 0.7
              }}
            />
          </div>

          {/* Red overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/70 via-[#DC143C]/50 to-[#E11D48]/60" />

          {/* Subtle radial vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(180, 20, 60, 0.4) 100%)'
            }}
          />
        </div>

       {/* Header/Navigation */}
       <header className="relative z-20 flex items-center justify-between px-6 lg:px-12 xl:px-16 py-5">
         {/* Logo with entrance animation */}
         <div 
           className={`cursor-pointer group transform transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}
         >
           {/* Company Logo Image */}
           <img 
             src="images/E365_Celebrations_Logo.png" 
             alt="Company Logo" 
             className="h-24 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
             style={{ 
               filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))'
             }}
           />
         </div>

         {/* Desktop Navigation with staggered animation */}
         <nav 
           className="hidden md:flex items-center space-x-6 lg:space-x-10"
         >
           {['About us', 'Collections', 'Accessories', 'Shoes', 'Services', 'Contact us'].map((item, index) => (
             <a
               key={item}
               href={`#${item.toLowerCase().replace(' ', '-')}`}
               className={`text-white text-sm font-medium transition-all duration-500 relative group py-1 transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
               style={{ 
                 transitionDelay: `${200 + index * 80}ms`,
                 fontFamily: "'Playfair Display', serif"
               }}
             >
               <span className="relative z-10 group-hover:text-white/90">{item}</span>
               <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-white transition-all ease-out group-hover:w-full" style={{ transitionDuration: '400ms' }} />
               <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </a>
           ))}
         </nav>

         {/* Mobile Menu Button */}
         <button 
           className={`md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
         >
           <Menu className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} />
         </button>
       </header>

       {/* Mobile Menu with slide animation */}
       <div 
         className={`md:hidden absolute top-20 left-0 right-0 bg-[#9F1239]/98 backdrop-blur-md z-30 transition-all ease-out transform ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
         style={{ transitionDuration: '400ms' }}
       >
         <nav className="flex flex-col p-4 space-y-1">
           {['About us', 'Collections', 'Accessories', 'Shoes', 'Services', 'Contact us'].map((item, index) => (
             <a
               key={item}
               href={`#${item.toLowerCase().replace(' ', '-')}`}
               className="text-white text-base font-medium hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg"
               style={{ transitionDelay: `${index * 50}ms` }}
               onClick={() => setMobileMenuOpen(false)}
             >
               {item}
             </a>
           ))}
         </nav>
       </div>

       {/* Main Content - Centered vertically and horizontally */}
       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
         {/* Main Heading with dramatic entrance */}
         <h1 
           className={`text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[150px] font-bold leading-[0.95] transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-12 opacity-0 blur-sm'}`}
           style={{ 
             fontFamily: "'Playfair Display', Georgia, serif",
             textShadow: '3px 6px 20px rgba(0,0,0,0.25)',
             letterSpacing: '-0.02em',
             transitionDelay: '300ms'
           }}
         >
           It's Our Moment
         </h1>

         {/* Subtext with fade-in */}
         <p 
           className={`text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl mt-5 sm:mt-8 max-w-2xl transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
           style={{ 
             fontFamily: "'Playfair Display', Georgia, serif", 
             fontStyle: 'italic',
             textShadow: '2px 3px 10px rgba(0,0,0,0.2)',
             transitionDelay: '500ms'
           }}
         >
           You'll be the most beautiful couple on your special day!
         </p>
       </div>

       {/* Decorative Wave at Bottom */}
       <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
         <svg 
           viewBox="0 0 1440 180" 
           className="w-full h-auto"
           preserveAspectRatio="none"
           style={{ marginBottom: '-2px' }}
         >
           {/* Animated dark curve line */}
           <path
             d="M-100,130 Q150,80 400,120 Q650,160 900,100 Q1150,40 1300,90 Q1400,120 1550,80"
             fill="none"
             stroke="#2D2D2D"
             strokeWidth="3.5"
             strokeLinecap="round"
             className={`transition-all ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
             style={{
               strokeDasharray: 2500,
               strokeDashoffset: isLoaded ? 0 : 2500,
               transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s, opacity 0.5s ease 0.8s',
               transitionDuration: '2000ms'
             }}
           />
           {/* White fill wave */}
           <path
             d="M-100,150 Q150,100 400,140 Q650,180 900,120 Q1150,60 1300,110 Q1400,140 1550,100 L1550,200 L-100,200 Z"
             fill="white"
             className={`transition-all ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
             style={{ transitionDelay: '1s', transitionDuration: '1500ms' }}
           />
         </svg>
       </div>

       {/* Floating Decorative Particles */}
       <div className={`absolute top-[20%] left-[8%] w-2 h-2 bg-white/20 rounded-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ animation: 'float-slow 8s ease-in-out infinite' }} />
       <div className={`absolute top-[30%] right-[15%] w-3 h-3 bg-white/15 rounded-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ animation: 'float-medium 6s ease-in-out infinite', animationDelay: '1s' }} />
       <div className={`absolute bottom-[35%] left-[25%] w-1.5 h-1.5 bg-white/25 rounded-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ animation: 'float-fast 4s ease-in-out infinite', animationDelay: '0.5s' }} />
       <div className={`absolute top-[45%] right-[8%] w-2 h-2 bg-white/18 rounded-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ animation: 'float-slow 7s ease-in-out infinite', animationDelay: '2s' }} />
      </section>
    </>
  );
};

export default HeroSection;


