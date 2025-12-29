
// import React, { useState, useEffect } from 'react';

// export default function WeddingHeroSection() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 100);
    
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black">
//       {/* Background Image Layer with Parallax */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
//         }}
//       >
//         {/* Main Background Image - Now Fully Visible */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400')`,
//             filter: 'brightness(0.85) contrast(1.1)',
//             backgroundPosition: 'center center',
//           }}
//         />
        
//         {/* Very Light Gradient Overlay - Minimal opacity for clear image */}
//         <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 via-red-500/35 to-pink-700/40 animate-gradient-shift" />
        
//         {/* Radial Gradient for Depth - Very subtle */}
//         <div 
//           className="absolute inset-0 opacity-20"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
//           }}
//         />
        
//         {/* Minimal Texture Overlay */}
//         <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply" />
//       </div>

//       {/* Enhanced Floating Particles */}
//       <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full animate-float-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 120 - 20}%`,
//               width: `${2 + Math.random() * 6}px`,
//               height: `${2 + Math.random() * 6}px`,
//               background: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.4})`,
//               animationDelay: `${Math.random() * 8}s`,
//               animationDuration: `${8 + Math.random() * 12}s`,
//               boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
//             }}
//           />
//         ))}
//       </div>

//       {/* Sparkle Effects */}
//       <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={`sparkle-${i}`}
//             className="absolute animate-sparkle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           >
//             <svg width="8" height="8" viewBox="0 0 8 8" fill="white" opacity="0">
//               <path d="M4 0 L4.5 3.5 L8 4 L4.5 4.5 L4 8 L3.5 4.5 L0 4 L3.5 3.5 Z" />
//             </svg>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Bar with Glass Effect */}
//       <nav className={`absolute top-0 left-0 right-0 z-30 px-4 md:px-8 py-5 transition-all duration-1000 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
//       } ${scrollY > 50 ? 'bg-black/20 backdrop-blur-md' : ''}`}>
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo Section - PASTE YOUR LOGO HERE */}
//           <div className="flex items-center cursor-pointer">

//             <img 
//     src="images/E365_Celebrations_Logo.png" 
//     alt="Mary's Bridal Logo" 
//     className="h-24 md:h-32 w-auto drop-shadow-lg transition-all duration-500"
//   />
            
//             <div className="text-white" style={{ display: 'none' }}> {/* Change to 'none' when using your logo */}
//               <div className="flex flex-col items-center">
//                 <div className="mb-2 relative">
//                   <svg width="55" height="55" viewBox="0 0 55 55" fill="none" className="drop-shadow-lg">
//                     {/* Outer Ring with Glow */}
//                     <circle cx="27.5" cy="17" r="8" stroke="white" strokeWidth="2.5" fill="none" className="animate-ring-pulse" />
                    
//                     {/* Inner Gem */}
//                     <circle cx="27.5" cy="17" r="5" fill="white" opacity="0.4" className="animate-gem-shine" />
                    
//                     {/* Ring Band */}
//                     <path d="M19 24 L36 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    
//                     {/* Ring Base */}
//                     <path d="M27.5 24 L27.5 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    
//                     {/* Top Diamond Sparkle */}
//                     <circle cx="27.5" cy="13" r="2.5" fill="white" className="animate-sparkle-pulse">
//                       <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
//                     </circle>
                    
//                     {/* Glow Effect */}
//                     <circle cx="27.5" cy="17" r="10" fill="white" opacity="0.1" className="animate-pulse" />
//                   </svg>
//                 </div>
//                 <h1 className="text-2xl font-extrabold tracking-[0.35em] mb-1 drop-shadow-lg">MARY'S</h1>
//                 <p className="text-[11px] tracking-[0.45em] font-light opacity-90">BRIDAL</p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Links with Enhanced Hover */}
//           <div className="hidden lg:flex items-center space-x-12 text-white text-[15px] font-medium">
//             {['About us', 'Collections', 'Accessories', 'Shoes', 'Services', 'Contact us'].map((item, index) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="relative group cursor-pointer"
//                 style={{
//                   animation: `fadeInDown 0.6s ease-out ${index * 0.1}s both`
//                 }}
//               >
//                 <span className="relative z-10 transition-all duration-300 group-hover:text-white drop-shadow-md">
//                   {item}
//                 </span>
//                 <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out shadow-lg shadow-white/50" />
//                 <span className="absolute inset-0 bg-white/10 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="lg:hidden text-white p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm">
//             <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="4" y1="15" x2="26" y2="15" />
//               <line x1="4" y1="8" x2="26" y2="8" />
//               <line x1="4" y1="22" x2="26" y2="22" />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-20">
//         <div className="text-center max-w-7xl mx-auto">
//           {/* Main Heading with Premium Typography */}
//           <div className="relative">
//             <h1 
//               className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 md:mb-10 leading-[0.95] tracking-tight transition-all duration-1500 ease-out ${
//                 isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
//               }`}
//               style={{
//                 textShadow: '6px 6px 25px rgba(0,0,0,0.6), 0 0 50px rgba(255,255,255,0.15), 0 0 100px rgba(255,182,193,0.3)',
//                 fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                 fontWeight: 900,
//                 letterSpacing: '-0.02em',
//                 WebkitTextStroke: '1px rgba(255,255,255,0.1)',
//               }}
//             >
//               It’s Our Moment
//             </h1>
            
//             {/* Decorative Line */}
//             <div className={`mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mb-10 transition-all duration-1500 delay-300 ${
//               isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
//             }`} />
//           </div>

//           {/* Subheading with Elegant Animation */}
//           <p 
//             className={`text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-10 md:mb-14 font-light px-4 transition-all duration-1500 delay-500 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//             }`}
//             style={{
//               textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
//               letterSpacing: '0.03em',
//               lineHeight: '1.6',
//             }}
//           >
//             You'll be the most beautiful couple on your special day!
//           </p>

//           {/* CTA Buttons with Premium Effects */}
//           <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pb-24 md:pb-32 px-4 transition-all duration-1500 delay-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//           }`}>
//             <button className="group relative w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-white text-gray-900 font-bold rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.25em] text-xs md:text-sm shadow-2xl hover:shadow-white/30 transform hover:scale-105 md:hover:scale-110 hover:-translate-y-2 active:scale-105">
//               <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-800">Collections</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-pink-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
//               </div>
//             </button>
            
//             <button className="group relative w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-transparent text-white font-bold rounded-xl md:rounded-2xl border-2 md:border-3 border-white overflow-hidden transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.25em] text-xs md:text-sm flex items-center justify-center gap-3 md:gap-4 hover:bg-white/15 hover:border-white/90 transform hover:scale-105 md:hover:scale-110 hover:-translate-y-2 active:scale-105 shadow-2xl hover:shadow-white/20">
//               <svg 
//                 width="20" 
//                 height="20" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 className="transform group-hover:scale-125 transition-transform duration-300 md:w-6 md:h-6"
//               >
//                 <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" className="group-hover:animate-ping-slow" />
//                 <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
//                 <polygon points="9 7 17 12 9 17" fill="currentColor" className="group-hover:animate-pulse" />
//               </svg>
//               <span className="relative z-10">Play Video</span>
//               <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Animated Wave Bottom */}
//       <div className="absolute bottom-0 left-0 right-0 z-15">
//         <svg 
//           viewBox="0 0 1440 220" 
//           fill="none" 
//           xmlns="http://www.w3.org/2000/svg" 
//           className="w-full"
//           preserveAspectRatio="none"
//         >
//           {/* Bottom light wave */}
//           <path 
//             d="M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z" 
//             fill="#f5f5f5"
//             opacity="0.95"
//           >
//             <animate
//               attributeName="d"
//               dur="12s"
//               repeatCount="indefinite"
//               values="M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z;
//                       M0,120 C320,60 640,60 960,120 C1200,180 1320,180 1440,120 L1440,220 L0,220 Z;
//                       M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z"
//             />
//           </path>
          
//           {/* Middle decorative wave */}
//           <path 
//             d="M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z" 
//             fill="#9ca3af"
//             opacity="0.3"
//           >
//             <animate
//               attributeName="d"
//               dur="9s"
//               repeatCount="indefinite"
//               values="M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z;
//                       M0,135 C320,75 640,75 960,135 C1200,195 1320,195 1440,135 L1440,220 L0,220 Z;
//                       M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z"
//             />
//           </path>
          
//           {/* Top dark wave */}
//           <path 
//             d="M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z" 
//             fill="#1f2937"
//             opacity="0.9"
//           >
//             <animate
//               attributeName="d"
//               dur="10s"
//               repeatCount="indefinite"
//               values="M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z;
//                       M0,150 C320,90 640,90 960,150 C1200,210 1320,210 1440,150 L1440,220 L0,220 Z;
//                       M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z"
//             />
//           </path>
//         </svg>
//       </div>

//       {/* Premium CSS Animations */}
//       <style jsx>{`
//         @keyframes float-particle {
//           0% {
//             transform: translateY(0) translateX(0) rotate(0deg);
//             opacity: 0;
//           }
//           15% {
//             opacity: 1;
//           }
//           85% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-120vh) translateX(100px) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         @keyframes sparkle {
//           0%, 100% {
//             opacity: 0;
//             transform: scale(0) rotate(0deg);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1) rotate(180deg);
//           }
//         }

//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         @keyframes ring-pulse {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.05);
//             opacity: 0.8;
//           }
//         }

//         @keyframes gem-shine {
//           0%, 100% {
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }

//         @keyframes sparkle-pulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.3);
//           }
//         }

//         @keyframes gradient-shift {
//           0%, 100% {
//             opacity: 0.85;
//           }
//           50% {
//             opacity: 0.75;
//           }
//         }

//         @keyframes ping-slow {
//           75%, 100% {
//             transform: scale(1.5);
//             opacity: 0;
//           }
//         }

//         .animate-float-particle {
//           animation: float-particle linear infinite;
//         }

//         .animate-sparkle {
//           animation: sparkle 3s ease-in-out infinite;
//         }

//         .animate-shimmer {
//           animation: shimmer 2s linear infinite;
//         }

//         .animate-ring-pulse {
//           animation: ring-pulse 3s ease-in-out infinite;
//         }

//         .animate-gem-shine {
//           animation: gem-shine 2s ease-in-out infinite;
//         }

//         .animate-sparkle-pulse {
//           animation: sparkle-pulse 2s ease-in-out infinite;
//         }

//         .animate-gradient-shift {
//           animation: gradient-shift 5s ease-in-out infinite;
//         }

//         .animate-ping-slow {
//           animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }

//         .border-3 {
//           border-width: 3px;
//         }
//       `}</style>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';

// export default function WeddingHeroSection() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 100);
    
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black">
//       {/* Background Image Layer with Parallax */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
//         }}
//       >
//         {/* Main Background Image - Now Fully Visible */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400')`,
//             filter: 'brightness(0.85) contrast(1.1)',
//             backgroundPosition: 'center center',
//           }}
//         />
        
//         {/* Very Light Gradient Overlay - Minimal opacity for clear image */}
//         <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 via-red-500/35 to-pink-700/40 animate-gradient-shift" />
        
//         {/* Radial Gradient for Depth - Very subtle */}
//         <div 
//           className="absolute inset-0 opacity-20"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
//           }}
//         />
        
//         {/* Minimal Texture Overlay */}
//         <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply" />
//       </div>

//       {/* Enhanced Floating Particles */}
//       <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full animate-float-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 120 - 20}%`,
//               width: `${2 + Math.random() * 6}px`,
//               height: `${2 + Math.random() * 6}px`,
//               background: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.4})`,
//               animationDelay: `${Math.random() * 8}s`,
//               animationDuration: `${8 + Math.random() * 12}s`,
//               boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
//             }}
//           />
//         ))}
//       </div>

//       {/* Sparkle Effects */}
//       <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={`sparkle-${i}`}
//             className="absolute animate-sparkle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           >
//             <svg width="8" height="8" viewBox="0 0 8 8" fill="white" opacity="0">
//               <path d="M4 0 L4.5 3.5 L8 4 L4.5 4.5 L4 8 L3.5 4.5 L0 4 L3.5 3.5 Z" />
//             </svg>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Bar with Glass Effect */}
//       <nav className={`absolute top-0 left-0 right-0 z-30 px-4 md:px-8 py-5 transition-all duration-1000 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
//       } ${scrollY > 50 ? 'bg-black/20 backdrop-blur-md' : ''}`}>
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo Section - PASTE YOUR LOGO HERE */}
//           <div className="flex items-center cursor-pointer">
            
//             <img 
//               src="images/E365_Celebrations_Logo.png" 
//               alt="Mary's Bridal Logo" 
//               className="h-24 md:h-32 w-auto drop-shadow-lg transition-all duration-500"
//             />
            
//             {/* 
//               OPTION 2: Default SVG Logo (Currently Active)
//               This will show until you add your own logo above
//             */}
//             <div className="text-white" style={{ display: 'none' }}> {/* Change to 'none' when using your logo */}
//               <div className="flex flex-col items-center">
//                 <div className="mb-2 relative">
//                   <svg width="55" height="55" viewBox="0 0 55 55" fill="none" className="drop-shadow-lg">
//                     {/* Outer Ring with Glow */}
//                     <circle cx="27.5" cy="17" r="8" stroke="white" strokeWidth="2.5" fill="none" className="animate-ring-pulse" />
                    
//                     {/* Inner Gem */}
//                     <circle cx="27.5" cy="17" r="5" fill="white" opacity="0.4" className="animate-gem-shine" />
                    
//                     {/* Ring Band */}
//                     <path d="M19 24 L36 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    
//                     {/* Ring Base */}
//                     <path d="M27.5 24 L27.5 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    
//                     {/* Top Diamond Sparkle */}
//                     <circle cx="27.5" cy="13" r="2.5" fill="white" className="animate-sparkle-pulse">
//                       <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
//                     </circle>
                    
//                     {/* Glow Effect */}
//                     <circle cx="27.5" cy="17" r="10" fill="white" opacity="0.1" className="animate-pulse" />
//                   </svg>
//                 </div>
//                 <h1 className="text-2xl font-extrabold tracking-[0.35em] mb-1 drop-shadow-lg">MARY'S</h1>
//                 <p className="text-[11px] tracking-[0.45em] font-light opacity-90">BRIDAL</p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Links with Enhanced Hover */}
//           <div className="hidden lg:flex items-center space-x-12 text-white text-[15px] font-medium">
//             {['About us', 'Collections', 'Accessories', 'Shoes', 'Services', 'Contact us'].map((item, index) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="relative group cursor-pointer"
//                 style={{
//                   animation: `fadeInDown 0.6s ease-out ${index * 0.1}s both`
//                 }}
//               >
//                 <span className="relative z-10 transition-all duration-300 group-hover:text-white drop-shadow-md">
//                   {item}
//                 </span>
//                 <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out shadow-lg shadow-white/50" />
//                 <span className="absolute inset-0 bg-white/10 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="lg:hidden text-white p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm">
//             <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="4" y1="15" x2="26" y2="15" />
//               <line x1="4" y1="8" x2="26" y2="8" />
//               <line x1="4" y1="22" x2="26" y2="22" />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-20">
//         <div className="text-center max-w-7xl mx-auto">
//           {/* Main Heading with Premium Typography */}
//           <div className="relative">
//             <h1 
//               className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 md:mb-10 leading-[0.95] tracking-tight transition-all duration-1500 ease-out ${
//                 isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
//               }`}
//               style={{
//                 textShadow: '6px 6px 25px rgba(0,0,0,0.6), 0 0 50px rgba(255,255,255,0.15), 0 0 100px rgba(255,182,193,0.3)',
//                 fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                 fontWeight: 900,
//                 letterSpacing: '-0.02em',
//                 WebkitTextStroke: '1px rgba(255,255,255,0.1)',
//               }}
//             >
//               It's Our Moment
//             </h1>
            
//             {/* Decorative Line */}
//             <div className={`mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mb-10 transition-all duration-1500 delay-300 ${
//               isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
//             }`} />
//           </div>

//           {/* Subheading with Elegant Animation */}
//           <p 
//             className={`text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-10 md:mb-14 font-light px-4 transition-all duration-1500 delay-500 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//             }`}
//             style={{
//               textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
//               letterSpacing: '0.03em',
//               lineHeight: '1.6',
//             }}
//           >
//             You'll be the most beautiful couple on your special day!
//           </p>
//         </div>
//       </div>

//       {/* Enhanced Animated Wave Bottom with Gold */}
//       <div className="absolute bottom-0 left-0 right-0 z-15">
//         <svg 
//           viewBox="0 0 1440 220" 
//           fill="none" 
//           xmlns="http://www.w3.org/2000/svg" 
//           className="w-full"
//           preserveAspectRatio="none"
//         >
//           {/* Bottom light wave */}
//           <path 
//             d="M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z" 
//             fill="#f5f5f5"
//             opacity="0.95"
//           >
//             <animate
//               attributeName="d"
//               dur="12s"
//               repeatCount="indefinite"
//               values="M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z;
//                       M0,120 C320,60 640,60 960,120 C1200,180 1320,180 1440,120 L1440,220 L0,220 Z;
//                       M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z"
//             />
//           </path>
          
//           {/* Gold decorative wave */}
//           <path 
//             d="M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z" 
//             fill="#FFD700"
//             opacity="0.4"
//           >
//             <animate
//               attributeName="d"
//               dur="10s"
//               repeatCount="indefinite"
//               values="M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z;
//                       M0,128 C320,68 640,68 960,128 C1200,188 1320,188 1440,128 L1440,220 L0,220 Z;
//                       M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z"
//             />
//           </path>
          
//           {/* Middle gray decorative wave */}
//           <path 
//             d="M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z" 
//             fill="#9ca3af"
//             opacity="0.3"
//           >
//             <animate
//               attributeName="d"
//               dur="9s"
//               repeatCount="indefinite"
//               values="M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z;
//                       M0,135 C320,75 640,75 960,135 C1200,195 1320,195 1440,135 L1440,220 L0,220 Z;
//                       M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z"
//             />
//           </path>
          
//           {/* Top dark wave */}
//           <path 
//             d="M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z" 
//             fill="#1f2937"
//             opacity="0.9"
//           >
//             <animate
//               attributeName="d"
//               dur="10s"
//               repeatCount="indefinite"
//               values="M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z;
//                       M0,150 C320,90 640,90 960,150 C1200,210 1320,210 1440,150 L1440,220 L0,220 Z;
//                       M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z"
//             />
//           </path>
//         </svg>
//       </div>

//       {/* Premium CSS Animations */}
//       <style jsx>{`
//         @keyframes float-particle {
//           0% {
//             transform: translateY(0) translateX(0) rotate(0deg);
//             opacity: 0;
//           }
//           15% {
//             opacity: 1;
//           }
//           85% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-120vh) translateX(100px) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         @keyframes sparkle {
//           0%, 100% {
//             opacity: 0;
//             transform: scale(0) rotate(0deg);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1) rotate(180deg);
//           }
//         }

//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         @keyframes ring-pulse {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.05);
//             opacity: 0.8;
//           }
//         }

//         @keyframes gem-shine {
//           0%, 100% {
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }

//         @keyframes sparkle-pulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.3);
//           }
//         }

//         @keyframes gradient-shift {
//           0%, 100% {
//             opacity: 0.85;
//           }
//           50% {
//             opacity: 0.75;
//           }
//         }

//         @keyframes ping-slow {
//           75%, 100% {
//             transform: scale(1.5);
//             opacity: 0;
//           }
//         }

//         .animate-float-particle {
//           animation: float-particle linear infinite;
//         }

//         .animate-sparkle {
//           animation: sparkle 3s ease-in-out infinite;
//         }

//         .animate-shimmer {
//           animation: shimmer 2s linear infinite;
//         }

//         .animate-ring-pulse {
//           animation: ring-pulse 3s ease-in-out infinite;
//         }

//         .animate-gem-shine {
//           animation: gem-shine 2s ease-in-out infinite;
//         }

//         .animate-sparkle-pulse {
//           animation: sparkle-pulse 2s ease-in-out infinite;
//         }

//         .animate-gradient-shift {
//           animation: gradient-shift 5s ease-in-out infinite;
//         }

//         .animate-ping-slow {
//           animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }

//         .border-3 {
//           border-width: 3px;
//         }
//       `}</style>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';

// export default function WeddingHeroSection() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 100);
    
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black">
//       {/* Background Image Layer with Parallax */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
//         }}
//       >
//         {/* Main Background Image - Now Fully Visible */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400')`,
//             filter: 'brightness(0.85) contrast(1.1)',
//             backgroundPosition: 'center center',
//           }}
//         />
        
//         {/* Very Light Gradient Overlay - Minimal opacity for clear image */}
//         <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 via-red-500/35 to-pink-700/40 animate-gradient-shift" />
        
//         {/* Radial Gradient for Depth - Very subtle */}
//         <div 
//           className="absolute inset-0 opacity-20"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
//           }}
//         />
        
//         {/* Minimal Texture Overlay */}
//         <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply" />
//       </div>

//       {/* Enhanced Floating Particles */}
//       <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full animate-float-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 120 - 20}%`,
//               width: `${2 + Math.random() * 6}px`,
//               height: `${2 + Math.random() * 6}px`,
//               background: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.4})`,
//               animationDelay: `${Math.random() * 8}s`,
//               animationDuration: `${8 + Math.random() * 12}s`,
//               boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
//             }}
//           />
//         ))}
//       </div>

//       {/* Sparkle Effects */}
//       <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={`sparkle-${i}`}
//             className="absolute animate-sparkle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           >
//             <svg width="8" height="8" viewBox="0 0 8 8" fill="white" opacity="0">
//               <path d="M4 0 L4.5 3.5 L8 4 L4.5 4.5 L4 8 L3.5 4.5 L0 4 L3.5 3.5 Z" />
//             </svg>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Bar with Glass Effect */}
//       <nav className={`absolute top-0 left-0 right-0 z-30 px-4 md:px-8 py-5 transition-all duration-1200 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
//       } ${scrollY > 50 ? 'bg-black/20 backdrop-blur-md' : ''}`}
//       style={{
//         transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//       }}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo Section - PASTE YOUR LOGO HERE */}
//           <div className="flex items-center cursor-pointer">
//             {/* 
//               OPTION 1: Use Your Logo Image
//               Replace the src with your logo path/URL
//               Adjust width/height as needed
//             */}
//               <img 
//               src="images/E365_Celebrations_Logo.png" 
//               alt="Mary's Bridal Logo" 
//               className="h-24 md:h-32 w-auto drop-shadow-lg transition-all duration-500"
//             />
            
//             <div className="text-white" style={{ display: 'none' }}> {/* Change to 'none' when using your logo */}
//               <div className="flex flex-col items-center">
//                 <div className="mb-2 relative">
//                   <svg width="55" height="55" viewBox="0 0 55 55" fill="none" className="drop-shadow-lg">
//                     {/* Outer Ring with Glow */}
//                     <circle cx="27.5" cy="17" r="8" stroke="white" strokeWidth="2.5" fill="none" className="animate-ring-pulse" />
                    
//                     {/* Inner Gem */}
//                     <circle cx="27.5" cy="17" r="5" fill="white" opacity="0.4" className="animate-gem-shine" />
                    
//                     {/* Ring Band */}
//                     <path d="M19 24 L36 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    
//                     {/* Ring Base */}
//                     <path d="M27.5 24 L27.5 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    
//                     {/* Top Diamond Sparkle */}
//                     <circle cx="27.5" cy="13" r="2.5" fill="white" className="animate-sparkle-pulse">
//                       <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
//                     </circle>
                    
//                     {/* Glow Effect */}
//                     <circle cx="27.5" cy="17" r="10" fill="white" opacity="0.1" className="animate-pulse" />
//                   </svg>
//                 </div>
//                 <h1 className="text-2xl font-extrabold tracking-[0.35em] mb-1 drop-shadow-lg">MARY'S</h1>
//                 <p className="text-[11px] tracking-[0.45em] font-light opacity-90">BRIDAL</p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Links with Enhanced Hover */}
//           <div className="hidden lg:flex items-center space-x-12 text-white text-[15px] font-medium">
//             {['About us', 'Collections', 'Accessories', 'Shoes', 'Services', 'Contact us'].map((item, index) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="relative group cursor-pointer"
//                 style={{
//                   animation: `fadeInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`
//                 }}
//               >
//                 <span className="relative z-10 transition-all duration-500 ease-out group-hover:text-white drop-shadow-md">
//                   {item}
//                 </span>
//                 <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-white/50" />
//                 <span className="absolute inset-0 bg-white/10 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="lg:hidden text-white p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm">
//             <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="4" y1="15" x2="26" y2="15" />
//               <line x1="4" y1="8" x2="26" y2="8" />
//               <line x1="4" y1="22" x2="26" y2="22" />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-20">
//         <div className="text-center max-w-7xl mx-auto">
//           {/* Main Heading with Premium Typography */}
//           <div className="relative">
//             <h1 
//               className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 md:mb-10 leading-[0.95] tracking-tight transition-all duration-2000 ease-out ${
//                 isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
//               }`}
//               style={{
//                 textShadow: '6px 6px 25px rgba(0,0,0,0.6), 0 0 50px rgba(255,255,255,0.15), 0 0 100px rgba(255,182,193,0.3)',
//                 fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                 fontWeight: 900,
//                 letterSpacing: '-0.02em',
//                 WebkitTextStroke: '1px rgba(255,255,255,0.1)',
//                 transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//               }}
//             >
//               It's Our Moment
//             </h1>
            
//             {/* Decorative Line */}
//             <div className={`mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mb-10 transition-all duration-2000 delay-300 ease-out ${
//               isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
//             }`} 
//             style={{
//               transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//             }}
//             />
//           </div>

//           {/* Subheading with Elegant Animation */}
//           <p 
//             className={`text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-10 md:mb-14 font-light px-4 transition-all duration-2000 delay-500 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//             }`}
//             style={{
//               textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
//               letterSpacing: '0.03em',
//               lineHeight: '1.6',
//               transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//             }}
//           >
//             You'll be the most beautiful couple on your special day!
//           </p>
//         </div>
//       </div>

//       {/* Enhanced Animated Wave Bottom with Gold */}
//       <div className="absolute bottom-0 left-0 right-0 z-15">
//         <svg 
//           viewBox="0 0 1440 220" 
//           fill="none" 
//           xmlns="http://www.w3.org/2000/svg" 
//           className="w-full"
//           preserveAspectRatio="none"
//         >
//           {/* Bottom light wave */}
//           <path 
//             d="M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z" 
//             fill="#f5f5f5"
//             opacity="0.95"
//           >
//             <animate
//               attributeName="d"
//               dur="12s"
//               repeatCount="indefinite"
//               values="M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z;
//                       M0,120 C320,60 640,60 960,120 C1200,180 1320,180 1440,120 L1440,220 L0,220 Z;
//                       M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z"
//             />
//           </path>
          
//           {/* Gold decorative wave */}
//           <path 
//             d="M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z" 
//             fill="#FFD700"
//             opacity="0.4"
//           >
//             <animate
//               attributeName="d"
//               dur="10s"
//               repeatCount="indefinite"
//               values="M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z;
//                       M0,128 C320,68 640,68 960,128 C1200,188 1320,188 1440,128 L1440,220 L0,220 Z;
//                       M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z"
//             />
//           </path>
          
//           {/* Middle gray decorative wave */}
//           <path 
//             d="M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z" 
//             fill="#9ca3af"
//             opacity="0.3"
//           >
//             <animate
//               attributeName="d"
//               dur="9s"
//               repeatCount="indefinite"
//               values="M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z;
//                       M0,135 C320,75 640,75 960,135 C1200,195 1320,195 1440,135 L1440,220 L0,220 Z;
//                       M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z"
//             />
//           </path>
          
//           {/* Top dark wave */}
//           <path 
//             d="M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z" 
//             fill="#1f2937"
//             opacity="0.9"
//           >
//             <animate
//               attributeName="d"
//               dur="10s"
//               repeatCount="indefinite"
//               values="M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z;
//                       M0,150 C320,90 640,90 960,150 C1200,210 1320,210 1440,150 L1440,220 L0,220 Z;
//                       M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z"
//             />
//           </path>
//         </svg>
//       </div>

//       {/* Premium CSS Animations - Ultra Smooth */}
//       <style jsx>{`
//         @keyframes float-particle {
//           0% {
//             transform: translateY(0) translateX(0) rotate(0deg);
//             opacity: 0;
//           }
//           10% {
//             opacity: 0.6;
//           }
//           50% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 0.6;
//           }
//           100% {
//             transform: translateY(-120vh) translateX(100px) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         @keyframes sparkle {
//           0%, 100% {
//             opacity: 0;
//             transform: scale(0) rotate(0deg);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.2) rotate(180deg);
//           }
//         }

//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%) skewX(-15deg);
//           }
//           100% {
//             transform: translateX(200%) skewX(-15deg);
//           }
//         }

//         @keyframes ring-pulse {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.08);
//             opacity: 0.85;
//           }
//         }

//         @keyframes gem-shine {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.9;
//           }
//         }

//         @keyframes sparkle-pulse {
//           0%, 100% {
//             transform: scale(1);
//             filter: brightness(1);
//           }
//           50% {
//             transform: scale(1.4);
//             filter: brightness(1.5);
//           }
//         }

//         @keyframes gradient-shift {
//           0%, 100% {
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 0.35;
//           }
//         }

//         @keyframes ping-slow {
//           0% {
//             transform: scale(1);
//             opacity: 0.8;
//           }
//           75% {
//             transform: scale(1.8);
//             opacity: 0;
//           }
//           100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }

//         @keyframes smooth-fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px) scale(0.98);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .animate-float-particle {
//           animation: float-particle linear infinite;
//           will-change: transform, opacity;
//         }

//         .animate-sparkle {
//           animation: sparkle 4s ease-in-out infinite;
//           will-change: transform, opacity;
//         }

//         .animate-shimmer {
//           animation: shimmer 3s ease-in-out infinite;
//           will-change: transform;
//         }

//         .animate-ring-pulse {
//           animation: ring-pulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
//           will-change: transform, opacity;
//         }

//         .animate-gem-shine {
//           animation: gem-shine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
//           will-change: opacity;
//         }

//         .animate-sparkle-pulse {
//           animation: sparkle-pulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
//           will-change: transform, filter;
//         }

//         .animate-gradient-shift {
//           animation: gradient-shift 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
//           will-change: opacity;
//         }

//         .animate-ping-slow {
//           animation: ping-slow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
//           will-change: transform, opacity;
//         }

//         .border-3 {
//           border-width: 3px;
//         }

//         /* Smooth scrolling */
//         * {
//           scroll-behavior: smooth;
//         }

//         /* Hardware acceleration for smooth animations */
//         .animate-float-particle,
//         .animate-sparkle,
//         .animate-ring-pulse,
//         .animate-gem-shine,
//         .animate-sparkle-pulse {
//           transform: translateZ(0);
//           backface-visibility: hidden;
//           perspective: 1000px;
//         }
//       `}</style>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';

export default function WeddingHeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image Layer with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      >
        {/* Main Background Image - Now Fully Visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400')`,
            filter: 'brightness(0.85) contrast(1.1)',
            backgroundPosition: 'center center',
          }}
        />
        
        {/* Very Light Gradient Overlay - Minimal opacity for clear image */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 via-red-500/35 to-pink-700/40 animate-gradient-shift" />
        
        {/* Radial Gradient for Depth - Very subtle */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}
        />
        
        {/* Minimal Texture Overlay */}
        <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply" />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 120 - 20}%`,
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              background: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.4})`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="white" opacity="0">
              <path d="M4 0 L4.5 3.5 L8 4 L4.5 4.5 L4 8 L3.5 4.5 L0 4 L3.5 3.5 Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Navigation Bar with Glass Effect */}
      <nav className={`absolute top-0 left-0 right-0 z-30 px-4 md:px-8 py-5 transition-all duration-1200 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      } ${scrollY > 50 ? 'bg-black/20 backdrop-blur-md' : ''}`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section - PASTE YOUR LOGO HERE */}
          <div className="flex items-center cursor-pointer">
            {/* 
              OPTION 1: Use Your Logo Image
              Replace the src with your logo path/URL
              Adjust width/height as needed
            */}
            <img 
              src="images/E365_Celebrations_Logo.png" 
              alt="Mary's Bridal Logo" 
              className="h-24 md:h-32 w-auto drop-shadow-lg transition-all duration-500"
              // Uncomment the line below to use this option
              // style={{ display: 'block' }}
            />
            
            {/* 
              OPTION 2: Default SVG Logo (Currently Active)
              This will show until you add your own logo above
            */}
            <div className="text-white" style={{ display: 'none' }}> {/* Change to 'none' when using your logo */}
              <div className="flex flex-col items-center">
                <div className="mb-2 relative">
                  <svg width="55" height="55" viewBox="0 0 55 55" fill="none" className="drop-shadow-lg">
                    {/* Outer Ring with Glow */}
                    <circle cx="27.5" cy="17" r="8" stroke="white" strokeWidth="2.5" fill="none" className="animate-ring-pulse" />
                    
                    {/* Inner Gem */}
                    <circle cx="27.5" cy="17" r="5" fill="white" opacity="0.4" className="animate-gem-shine" />
                    
                    {/* Ring Band */}
                    <path d="M19 24 L36 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    
                    {/* Ring Base */}
                    <path d="M27.5 24 L27.5 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    
                    {/* Top Diamond Sparkle */}
                    <circle cx="27.5" cy="13" r="2.5" fill="white" className="animate-sparkle-pulse">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Glow Effect */}
                    <circle cx="27.5" cy="17" r="10" fill="white" opacity="0.1" className="animate-pulse" />
                  </svg>
                </div>
                <h1 className="text-2xl font-extrabold tracking-[0.35em] mb-1 drop-shadow-lg">MARY'S</h1>
                <p className="text-[11px] tracking-[0.45em] font-light opacity-90">BRIDAL</p>
              </div>
            </div>
          </div>

          {/* Navigation Links with Enhanced Hover */}
          <div className="hidden lg:flex items-center space-x-12 text-white text-[15px] font-medium">
            {['About us', 'Collections', 'Accessories', 'Shoes', 'Services', 'Contact us'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative group cursor-pointer"
                style={{
                  animation: `fadeInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`
                }}
              >
                <span className="relative z-10 transition-all duration-500 ease-out group-hover:text-white drop-shadow-md">
                  {item}
                </span>
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-white/50" />
                <span className="absolute inset-0 bg-white/10 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm">
            <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="15" x2="26" y2="15" />
              <line x1="4" y1="8" x2="26" y2="8" />
              <line x1="4" y1="22" x2="26" y2="22" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center max-w-7xl mx-auto">
          {/* Main Heading with Premium Typography */}
          <div className="relative">
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 md:mb-10 leading-[0.95] tracking-tight transition-all duration-2000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
              }`}
              style={{
                textShadow: '6px 6px 25px rgba(0,0,0,0.6), 0 0 50px rgba(255,255,255,0.15), 0 0 100px rgba(255,182,193,0.3)',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              It's Our Moment
            </h1>
            
            {/* Decorative Line */}
            <div className={`mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mb-10 transition-all duration-2000 delay-300 ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} 
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            />
          </div>

          {/* Subheading with Elegant Animation */}
          <p 
            className={`text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-10 md:mb-14 font-light px-4 transition-all duration-2000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{
              textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
              letterSpacing: '0.03em',
              lineHeight: '1.6',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            You'll be the most beautiful couple on your special day!
          </p>
        </div>
      </div>

      {/* Enhanced Animated Wave Bottom with Gold */}
      <div className="absolute bottom-0 left-0 right-0 z-15">
        <svg 
          viewBox="0 0 1440 220" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full"
          preserveAspectRatio="none"
        >
          {/* Bottom light wave */}
          <path 
            d="M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z" 
            fill="#f5f5f5"
            opacity="0.95"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z;
                      M0,120 C320,60 640,60 960,120 C1200,180 1320,180 1440,120 L1440,220 L0,220 Z;
                      M0,100 C320,160 640,160 960,100 C1200,60 1320,60 1440,100 L1440,220 L0,220 Z"
            />
          </path>
          
          {/* Gold decorative wave */}
          <path 
            d="M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z" 
            fill="#FFD700"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z;
                      M0,128 C320,68 640,68 960,128 C1200,188 1320,188 1440,128 L1440,220 L0,220 Z;
                      M0,108 C320,168 640,168 960,108 C1200,68 1320,68 1440,108 L1440,220 L0,220 Z"
            />
          </path>
          
          {/* Middle gray decorative wave */}
          <path 
            d="M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z" 
            fill="#9ca3af"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              values="M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z;
                      M0,135 C320,75 640,75 960,135 C1200,195 1320,195 1440,135 L1440,220 L0,220 Z;
                      M0,115 C320,175 640,175 960,115 C1200,75 1320,75 1440,115 L1440,220 L0,220 Z"
            />
          </path>
          
          {/* Top dark wave */}
          <path 
            d="M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z" 
            fill="#1f2937"
            opacity="0.9"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z;
                      M0,150 C320,90 640,90 960,150 C1200,210 1320,210 1440,150 L1440,220 L0,220 Z;
                      M0,130 C320,190 640,190 960,130 C1200,90 1320,90 1440,130 L1440,220 L0,220 Z"
            />
          </path>
        </svg>
      </div>

      {/* Premium CSS Animations - Ultra Smooth */}
      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes ring-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.85;
          }
        }

        @keyframes gem-shine {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes sparkle-pulse {
          0%, 100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.4);
            filter: brightness(1.5);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.35;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75% {
            transform: scale(1.8);
            opacity: 0;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes smooth-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
          will-change: transform, opacity;
        }

        .animate-sparkle {
          animation: sparkle 4s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
          will-change: transform;
        }

        .animate-ring-pulse {
          animation: ring-pulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, opacity;
        }

        .animate-gem-shine {
          animation: gem-shine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: opacity;
        }

        .animate-sparkle-pulse {
          animation: sparkle-pulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, filter;
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: opacity;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, opacity;
        }

        .border-3 {
          border-width: 3px;
        }

        /* Smooth scrolling */
        * {
          scroll-behavior: smooth;
        }

        /* Hardware acceleration for smooth animations */
        .animate-float-particle,
        .animate-sparkle,
        .animate-ring-pulse,
        .animate-gem-shine,
        .animate-sparkle-pulse {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>

    {/* Service Section with Ornate Frames */}
    <section className="relative min-h-screen py-20 overflow-hidden" style={{ backgroundColor: '#323A40' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive celebration services to make your special day absolutely perfect
          </p>
        </div>

        {/* Services Grid with Ornate Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Service 1 - Wedding Photography */}
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative p-4 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-lg transform transition-all duration-500 hover:scale-105">
              {/* Ornate Frame Border */}
              <div className="absolute inset-0 border-8 border-yellow-600 rounded-lg" 
                   style={{
                     borderImage: 'linear-gradient(45deg, #D4AF37, #FFD700, #D4AF37) 1',
                     boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.3)'
                   }}>
              </div>
              
              {/* Ornate Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500 opacity-80">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 text-yellow-500 opacity-80 transform -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
                  alt="Wedding Photography"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                  📸
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Wedding Photography</h3>
                  <p className="text-gray-200 text-sm mb-4">Capture your special moments with professional photography that lasts forever.</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 - Event Planning */}
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative p-4 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-lg transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 border-8 border-yellow-600 rounded-lg" 
                   style={{
                     borderImage: 'linear-gradient(45deg, #D4AF37, #FFD700, #D4AF37) 1',
                     boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.3)'
                   }}>
              </div>
              
              <div className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500 opacity-80">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 text-yellow-500 opacity-80 transform -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800"
                  alt="Event Planning"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                  🎉
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Event Planning</h3>
                  <p className="text-gray-200 text-sm mb-4">From intimate gatherings to grand celebrations, we plan every detail to perfection.</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 - Catering Services */}
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative p-4 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-lg transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 border-8 border-yellow-600 rounded-lg" 
                   style={{
                     borderImage: 'linear-gradient(45deg, #D4AF37, #FFD700, #D4AF37) 1',
                     boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.3)'
                   }}>
              </div>
              
              <div className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500 opacity-80">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 text-yellow-500 opacity-80 transform -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800"
                  alt="Catering Services"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                  🍽️
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Catering Services</h3>
                  <p className="text-gray-200 text-sm mb-4">Delight your guests with exquisite cuisine crafted by our expert chefs.</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 - Decoration & Design */}
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative p-4 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-lg transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 border-8 border-yellow-600 rounded-lg" 
                   style={{
                     borderImage: 'linear-gradient(45deg, #D4AF37, #FFD700, #D4AF37) 1',
                     boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.3)'
                   }}>
              </div>
              
              <div className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500 opacity-80">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 text-yellow-500 opacity-80 transform -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800"
                  alt="Decoration & Design"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                  ✨
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Decoration & Design</h3>
                  <p className="text-gray-200 text-sm mb-4">Transform your venue into a magical space with stunning decoration.</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5 - Entertainment */}
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative p-4 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-lg transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 border-8 border-yellow-600 rounded-lg" 
                   style={{
                     borderImage: 'linear-gradient(45deg, #D4AF37, #FFD700, #D4AF37) 1',
                     boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.3)'
                   }}>
              </div>
              
              <div className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500 opacity-80">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 text-yellow-500 opacity-80 transform -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800"
                  alt="Entertainment"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                  🎵
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Entertainment</h3>
                  <p className="text-gray-200 text-sm mb-4">Keep your guests entertained with live bands, DJs and performers.</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 6 - Videography */}
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative p-4 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-lg transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 border-8 border-yellow-600 rounded-lg" 
                   style={{
                     borderImage: 'linear-gradient(45deg, #D4AF37, #FFD700, #D4AF37) 1',
                     boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.3)'
                   }}>
              </div>
              
              <div className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500 opacity-80">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 text-yellow-500 opacity-80 transform -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 text-yellow-500 opacity-80 transform rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L30,0 C30,0 20,10 20,20 L0,20 Z" />
                  <circle cx="25" cy="5" r="3" />
                </svg>
              </div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800"
                  alt="Videography"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                  🎬
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Videography</h3>
                  <p className="text-gray-200 text-sm mb-4">Relive your special day with cinematic videos capturing every emotion.</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  </>
  );
}
