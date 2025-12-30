

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
//       image: 'images/venue.jpg',
//       description: 'Searching for the best places for your event? Give us a try. Let our professionals help you find the best venue of your preferences.',
//       delay: '200ms'
//     },
//     {
//       id: 2,
//       title: 'DECORATION & FLORIST',
//       image: 'images/decoration.jpg',
//       description: 'Searching for a decorator to hand you the flower designs you have always dreamt of? Let us help you decorate aesthetic wedding venues, engagements, parties',
//       delay: '400ms'
//     },
//     {
//       id: 3,
//       title: 'CATERING AND FOODING',
//       image: 'images/catering.jpg',
//       description: 'Great food is the essence of any event planning. Let\'s collaborate and welcome your guests with delicious finger-licking foods!',
//       delay: '600ms'
//     }
//   ];

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
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`envelope-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//                 style={{ transitionDelay: service.delay }}
//                 onMouseEnter={() => setHoveredCard(service.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div className="relative h-[600px]">
//                   {/* Closed Envelope (Always stays closed) */}
//                   <div 
//                     className="absolute inset-0 transition-all duration-500"
//                     style={{
//                       animation: hoveredCard === service.id ? 'subtle-float 2s ease-in-out infinite' : 'none'
//                     }}
//                   >
//                     {/* Envelope Body */}
//                     <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
//                       {/* Envelope background texture */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-rose-50/30" />
                      
//                       {/* Subtle texture overlay */}
//                       <div className="absolute inset-0 opacity-[0.03]">
//                         <div style={{
//                           backgroundImage: `repeating-linear-gradient(0deg, #C41E3A, #C41E3A 1px, transparent 1px, transparent 20px)`,
//                         }} className="w-full h-full" />
//                       </div>

//                       {/* Envelope seal/stamp area */}
//                       <div className="absolute top-8 right-8 w-20 h-20 border-2 border-[#C41E3A]/20 rounded-full flex items-center justify-center">
//                         <div className="text-[#C41E3A] text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           E365
//                         </div>
//                       </div>

//                       {/* Decorative address lines */}
//                       <div className="absolute bottom-16 left-12 right-12 space-y-3 opacity-30">
//                         <div className="h-0.5 bg-gray-400 w-3/4" />
//                         <div className="h-0.5 bg-gray-400 w-full" />
//                         <div className="h-0.5 bg-gray-400 w-2/3" />
//                       </div>

//                       {/* Service category label */}
//                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                         <div className="text-gray-800 text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           {service.title}
//                         </div>
//                         <div className="h-0.5 w-16 bg-[#C41E3A] mx-auto mb-3" />
//                         <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           {hoveredCard === service.id ? 'Opening...' : 'Hover to View'}
//                         </p>
//                       </div>

//                       {/* Corner decorations */}
//                       <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C41E3A]/20" />
//                       <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C41E3A]/20" />
//                       <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C41E3A]/20" />
//                       <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C41E3A]/20" />
//                     </div>

//                     {/* Envelope Flap (Triangular - stays closed) */}
//                     <div className="absolute left-0 right-0 top-0 z-20">
//                       <svg viewBox="0 0 300 100" className="w-full" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}>
//                         {/* Closed flap triangle */}
//                         <path
//                           d="M 5 5 L 150 95 L 295 5 Z"
//                           fill="white"
//                           stroke="#d1d5db"
//                           strokeWidth="2"
//                         />
//                         {/* Flap inner detail */}
//                         <path
//                           d="M 20 15 L 150 85 L 280 15"
//                           fill="none"
//                           stroke="#C41E3A"
//                           strokeWidth="0.8"
//                           opacity="0.2"
//                         />
//                         {/* Seal center */}
//                         <circle cx="150" cy="50" r="8" fill="#C41E3A" opacity="0.15" />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Content Card (Slides OUT from envelope) */}
//                   <div 
//                     className="absolute left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-700 ease-out"
//                     style={{
//                       top: hoveredCard === service.id ? '-280px' : '100px',
//                       height: '520px',
//                       opacity: hoveredCard === service.id ? 1 : 0,
//                       transform: hoveredCard === service.id ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
//                       zIndex: 30,
//                       boxShadow: hoveredCard === service.id 
//                         ? '0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0,0,0,0.05)' 
//                         : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//                       pointerEvents: hoveredCard === service.id ? 'auto' : 'none'
//                     }}
//                   >
//                     {/* Image Section */}
//                     <div className="relative h-64 overflow-hidden">
//                       <div 
//                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
//                         style={{
//                           backgroundImage: `url(${service.image})`,
//                           transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)'
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      
//                       {/* Floating service badge */}
//                       <div 
//                         className="absolute top-6 left-6 bg-[#C41E3A] text-white px-5 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all duration-500"
//                         style={{
//                           transform: hoveredCard === service.id ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)'
//                         }}
//                       >
//                         Services
//                       </div>

//                       {/* Title overlay on image */}
//                       <div className="absolute bottom-6 left-6 right-6">
//                         <h3 
//                           className="text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-lg"
//                           style={{ 
//                             fontFamily: "'Playfair Display', Georgia, serif"
//                           }}
//                         >
//                           {service.title}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-8 bg-white">
//                       {/* Decorative divider */}
//                       <div className="flex items-center gap-2 mb-5">
//                         <div className="h-0.5 w-12 bg-[#C41E3A]" />
//                         <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
//                         <div className="h-0.5 flex-1 bg-gradient-to-r from-[#C41E3A]/50 to-transparent" />
//                       </div>

//                       {/* Description */}
//                       <p 
//                         className="text-gray-700 text-base leading-relaxed mb-6"
//                         style={{ 
//                           fontFamily: "'Playfair Display', Georgia, serif"
//                         }}
//                       >
//                         {service.description}
//                       </p>

//                       {/* Read More Button */}
//                       <button 
//                         className="group relative overflow-hidden bg-transparent border-2 border-[#C41E3A] text-[#C41E3A] px-8 py-3.5 font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:text-white rounded-lg shadow-md hover:shadow-xl"
//                         style={{
//                           fontFamily: "'Playfair Display', Georgia, serif"
//                         }}
//                       >
//                         <span className="relative z-10">READ MORE</span>
//                         <span className="absolute inset-0 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//                       </button>
//                     </div>

//                     {/* Bottom decorative corner */}
//                     <div className="absolute bottom-4 right-4 opacity-10">
//                       <svg width="60" height="60" viewBox="0 0 60 60">
//                         <path d="M0,60 Q0,30 30,30 Q0,30 0,0" fill="none" stroke="#C41E3A" strokeWidth="2"/>
//                         <circle cx="30" cy="30" r="3" fill="#C41E3A"/>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
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
//       image: 'images/venue.jpg',
//       description: 'Searching for the best places for your event? Give us a try. Let our professionals help you find the best venue of your preferences.',
//       delay: '200ms'
//     },
//     {
//       id: 2,
//       title: 'DECORATION & FLORIST',
//       image: 'images/decoration.jpg',
//       description: 'Searching for a decorator to hand you the flower designs you have always dreamt of? Let us help you decorate aesthetic wedding venues',
//       delay: '400ms'
//     },
//     {
//       id: 3,
//       title: 'CATERING AND FOODING',
//       image: 'images/catering.jpg',
//       description: 'Great food is the essence of any event planning. Let\'s collaborate and welcome your guests with delicious finger-licking foods!',
//       delay: '600ms'
//     }
//   ];

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
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`envelope-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//                 style={{ transitionDelay: service.delay }}
//                 onMouseEnter={() => setHoveredCard(service.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div className="relative h-[600px]">
//                   {/* Envelope Body (stays in place) */}
//                   <div 
//                     className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
//                     style={{
//                       animation: hoveredCard === service.id ? 'envelope-shake 0.5s ease-in-out' : 'none'
//                     }}
//                   >
//                     {/* Main Envelope Container */}
//                     <div className="relative h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
//                       {/* Envelope background texture */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-rose-50/30" />
                      
//                       {/* Subtle texture overlay */}
//                       <div className="absolute inset-0 opacity-[0.03]">
//                         <div style={{
//                           backgroundImage: `repeating-linear-gradient(0deg, #C41E3A, #C41E3A 1px, transparent 1px, transparent 20px)`,
//                         }} className="w-full h-full" />
//                       </div>

//                       {/* Envelope seal/stamp area */}
//                       <div className="absolute top-8 right-8 w-20 h-20 border-2 border-[#C41E3A]/20 rounded-full flex items-center justify-center">
//                         <div className="text-[#C41E3A] text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           E365
//                         </div>
//                       </div>

//                       {/* Decorative address lines */}
//                       <div className="absolute bottom-16 left-12 right-12 space-y-3 opacity-30">
//                         <div className="h-0.5 bg-gray-400 w-3/4" />
//                         <div className="h-0.5 bg-gray-400 w-full" />
//                         <div className="h-0.5 bg-gray-400 w-2/3" />
//                       </div>

//                       {/* Service category label - fades out when hovering */}
//                       <div 
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-500"
//                         style={{ opacity: hoveredCard === service.id ? 0 : 1 }}
//                       >
//                         <div className="text-gray-800 text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           {service.title}
//                         </div>
//                         <div className="h-0.5 w-16 bg-[#C41E3A] mx-auto mb-3" />
//                         <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           Hover to Open
//                         </p>
//                       </div>

//                       {/* Corner decorations */}
//                       <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C41E3A]/20" />
//                       <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C41E3A]/20" />
//                       <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C41E3A]/20" />
//                       <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C41E3A]/20" />

//                       {/* Shadow that appears inside envelope when opening */}
//                       <div 
//                         className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent transition-opacity duration-700"
//                         style={{ opacity: hoveredCard === service.id ? 1 : 0 }}
//                       />
//                     </div>

//                     {/* Envelope Flap (Opens upward with 3D rotation) */}
//                     <div 
//                       className="absolute left-0 right-0 z-20 transition-all duration-700 ease-out"
//                       style={{
//                         top: '0px',
//                         transformOrigin: 'top center',
//                         transform: hoveredCard === service.id 
//                           ? 'rotateX(-180deg) translateZ(2px)' 
//                           : 'rotateX(0deg)',
//                         transformStyle: 'preserve-3d'
//                       }}
//                     >
//                       <svg viewBox="0 0 300 100" className="w-full" style={{ 
//                         filter: hoveredCard === service.id 
//                           ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.2))' 
//                           : 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
//                         transition: 'filter 0.7s ease-out'
//                       }}>
//                         {/* Main flap triangle */}
//                         <path
//                           d="M 5 5 L 150 95 L 295 5 Z"
//                           fill="white"
//                           stroke="#d1d5db"
//                           strokeWidth="2"
//                         />
//                         {/* Flap inner shading - darkens when open */}
//                         <path
//                           d="M 20 15 L 150 85 L 280 15"
//                           fill="none"
//                           stroke="#C41E3A"
//                           strokeWidth="0.8"
//                           opacity={hoveredCard === service.id ? "0.4" : "0.2"}
//                           style={{ transition: 'opacity 0.7s ease-out' }}
//                         />
//                         {/* Seal center */}
//                         <circle 
//                           cx="150" 
//                           cy="50" 
//                           r="8" 
//                           fill="#C41E3A" 
//                           opacity={hoveredCard === service.id ? "0.3" : "0.15"}
//                           style={{ transition: 'opacity 0.7s ease-out' }}
//                         />
//                         {/* Wax seal detail */}
//                         <path
//                           d="M 145 45 Q 150 48 155 45 Q 150 42 145 45 Z"
//                           fill="#C41E3A"
//                           opacity={hoveredCard === service.id ? "0.5" : "0.2"}
//                           style={{ transition: 'opacity 0.7s ease-out' }}
//                         />
//                       </svg>
//                     </div>

//                     {/* Back side of flap (visible when flap opens) */}
//                     <div 
//                       className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity duration-500"
//                       style={{
//                         top: '0px',
//                         opacity: hoveredCard === service.id ? 1 : 0
//                       }}
//                     >
//                       <svg viewBox="0 0 300 100" className="w-full">
//                         <path
//                           d="M 5 5 L 150 95 L 295 5 Z"
//                           fill="#f3f4f6"
//                           stroke="#d1d5db"
//                           strokeWidth="2"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Content Card (Slides OUT from inside envelope) */}
//                   <div 
//                     className="absolute left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-700 ease-out"
//                     style={{
//                       bottom: hoveredCard === service.id ? '120px' : '80px',
//                       height: '520px',
//                       opacity: hoveredCard === service.id ? 1 : 0,
//                       transform: hoveredCard === service.id 
//                         ? 'translateY(0) scale(1)' 
//                         : 'translateY(40px) scale(0.9)',
//                       zIndex: hoveredCard === service.id ? 25 : 5,
//                       boxShadow: hoveredCard === service.id 
//                         ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0,0,0,0.05)' 
//                         : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//                       pointerEvents: hoveredCard === service.id ? 'auto' : 'none',
//                       transitionDelay: hoveredCard === service.id ? '0.3s' : '0s'
//                     }}
//                   >
//                     {/* Image Section */}
//                     <div className="relative h-64 overflow-hidden">
//                       <div 
//                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
//                         style={{
//                           backgroundImage: `url(${service.image})`,
//                           transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)'
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      
//                       {/* Floating service badge */}
//                       <div 
//                         className="absolute top-6 left-6 bg-[#C41E3A] text-white px-5 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all duration-500"
//                         style={{
//                           transform: hoveredCard === service.id ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)',
//                           transitionDelay: hoveredCard === service.id ? '0.5s' : '0s'
//                         }}
//                       >
//                         Services
//                       </div>

//                       {/* Title overlay on image */}
//                       <div 
//                         className="absolute bottom-6 left-6 right-6 transition-all duration-500"
//                         style={{
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                           transitionDelay: hoveredCard === service.id ? '0.6s' : '0s'
//                         }}
//                       >
//                         <h3 
//                           className="text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-lg"
//                           style={{ 
//                             fontFamily: "'Playfair Display', Georgia, serif"
//                           }}
//                         >
//                           {service.title}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-8 bg-white">
//                       {/* Decorative divider */}
//                       <div 
//                         className="flex items-center gap-2 mb-5 transition-all duration-500"
//                         style={{
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transform: hoveredCard === service.id ? 'translateX(0)' : 'translateX(-20px)',
//                           transitionDelay: hoveredCard === service.id ? '0.7s' : '0s'
//                         }}
//                       >
//                         <div className="h-0.5 w-12 bg-[#C41E3A]" />
//                         <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
//                         <div className="h-0.5 flex-1 bg-gradient-to-r from-[#C41E3A]/50 to-transparent" />
//                       </div>

//                       {/* Description */}
//                       <p 
//                         className="text-gray-700 text-base leading-relaxed mb-6 transition-all duration-500"
//                         style={{ 
//                           fontFamily: "'Playfair Display', Georgia, serif",
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                           transitionDelay: hoveredCard === service.id ? '0.8s' : '0s'
//                         }}
//                       >
//                         {service.description}
//                       </p>

//                       {/* Read More Button */}
//                       <button 
//                         className="group relative overflow-hidden bg-transparent border-2 border-[#C41E3A] text-[#C41E3A] px-8 py-3.5 font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:text-white rounded-lg shadow-md hover:shadow-xl"
//                         style={{
//                           fontFamily: "'Playfair Display', Georgia, serif",
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                           transitionDelay: hoveredCard === service.id ? '0.9s' : '0s'
//                         }}
//                       >
//                         <span className="relative z-10">READ MORE</span>
//                         <span className="absolute inset-0 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//                       </button>
//                     </div>

//                     {/* Bottom decorative corner */}
//                     <div 
//                       className="absolute bottom-4 right-4 opacity-10 transition-all duration-500"
//                       style={{
//                         transform: hoveredCard === service.id ? 'rotate(0deg)' : 'rotate(-90deg)',
//                         transitionDelay: hoveredCard === service.id ? '1s' : '0s'
//                       }}
//                     >
//                       <svg width="60" height="60" viewBox="0 0 60 60">
//                         <path d="M0,60 Q0,30 30,30 Q0,30 0,0" fill="none" stroke="#C41E3A" strokeWidth="2"/>
//                         <circle cx="30" cy="30" r="3" fill="#C41E3A"/>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
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
//       image: 'images/venue.jpg',
//       description: 'Searching for the best places for your event? Give us a try. Let our professionals help you find the best venue of your preferences.',
//       delay: '200ms'
//     },
//     {
//       id: 2,
//       title: 'DECORATION & FLORIST',
//       image: 'images/decoration.jpg',
//       description: 'Searching for a decorator to hand you the flower designs you have always dreamt of? Let us help you decorate aesthetic wedding venues',
//       delay: '400ms'
//     },
//     {
//       id: 3,
//       title: 'CATERING AND FOODING',
//       image: 'images/catering.jpg',
//       description: 'Great food is the essence of any event planning. Let\'s collaborate and welcome your guests with delicious finger-licking foods!',
//       delay: '600ms'
//     }
//   ];

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
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`envelope-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//                 style={{ transitionDelay: service.delay }}
//                 onMouseEnter={() => setHoveredCard(service.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div className="relative h-[600px]">
//                   {/* Envelope Body (stays in place) */}
//                   <div 
//                     className="absolute bottom-0 left-0 right-0 h-[500px] transition-all duration-500"
//                     style={{
//                       animation: hoveredCard === service.id ? 'envelope-shake 0.5s ease-in-out' : 'none'
//                     }}
//                   >
//                     {/* Main Envelope Container */}
//                     <div className="relative h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
//                       {/* Envelope background texture */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-rose-50/30" />
                      
//                       {/* Subtle texture overlay */}
//                       <div className="absolute inset-0 opacity-[0.03]">
//                         <div style={{
//                           backgroundImage: `repeating-linear-gradient(0deg, #C41E3A, #C41E3A 1px, transparent 1px, transparent 20px)`,
//                         }} className="w-full h-full" />
//                       </div>

//                       {/* Envelope seal/stamp area */}
//                       <div className="absolute top-8 right-8 w-20 h-20 border-2 border-[#C41E3A]/20 rounded-full flex items-center justify-center">
//                         <div className="text-[#C41E3A] text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           E365
//                         </div>
//                       </div>

//                       {/* Decorative address lines */}
//                       <div className="absolute bottom-16 left-12 right-12 space-y-3 opacity-30">
//                         <div className="h-0.5 bg-gray-400 w-3/4" />
//                         <div className="h-0.5 bg-gray-400 w-full" />
//                         <div className="h-0.5 bg-gray-400 w-2/3" />
//                       </div>

//                       {/* Service category label - fades out when hovering */}
//                       <div 
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity ease-in-out"
//                         style={{ 
//                           opacity: hoveredCard === service.id ? 0 : 1,
//                           transitionDuration: '600ms'
//                         }}
//                       >
//                         <div className="text-gray-800 text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           {service.title}
//                         </div>
//                         <div className="h-0.5 w-16 bg-[#C41E3A] mx-auto mb-3" />
//                         <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
//                           Hover to Open
//                         </p>
//                       </div>

//                       {/* Corner decorations */}
//                       <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C41E3A]/20" />
//                       <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C41E3A]/20" />
//                       <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C41E3A]/20" />
//                       <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C41E3A]/20" />

//                       {/* Shadow that appears inside envelope when opening */}
//                       <div 
//                         className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent transition-opacity ease-in-out"
//                         style={{ 
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transitionDuration: '900ms'
//                         }}
//                       />
//                     </div>

//                     {/* Envelope Flap (Opens upward with 3D rotation) */}
//                     <div 
//                       className="absolute left-0 right-0 z-20 transition-all ease-in-out"
//                       style={{
//                         top: '0px',
//                         transformOrigin: 'top center',
//                         transform: hoveredCard === service.id 
//                           ? 'rotateX(-180deg) translateZ(2px)' 
//                           : 'rotateX(0deg)',
//                         transformStyle: 'preserve-3d',
//                         transitionDuration: '900ms'
//                       }}
//                     >
//                       <svg viewBox="0 0 300 100" className="w-full" style={{ 
//                         filter: hoveredCard === service.id 
//                           ? 'drop-shadow(0 -4px 12px rgba(0,0,0,0.2))' 
//                           : 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
//                         transition: 'filter 0.9s ease-in-out'
//                       }}>
//                         {/* Main flap triangle */}
//                         <path
//                           d="M 5 5 L 150 95 L 295 5 Z"
//                           fill="white"
//                           stroke="#d1d5db"
//                           strokeWidth="2"
//                         />
//                         {/* Flap inner shading - darkens when open */}
//                         <path
//                           d="M 20 15 L 150 85 L 280 15"
//                           fill="none"
//                           stroke="#C41E3A"
//                           strokeWidth="0.8"
//                           opacity={hoveredCard === service.id ? "0.4" : "0.2"}
//                           style={{ transition: 'opacity 0.9s ease-in-out' }}
//                         />
//                         {/* Seal center */}
//                         <circle 
//                           cx="150" 
//                           cy="50" 
//                           r="8" 
//                           fill="#C41E3A" 
//                           opacity={hoveredCard === service.id ? "0.3" : "0.15"}
//                           style={{ transition: 'opacity 0.9s ease-in-out' }}
//                         />
//                         {/* Wax seal detail */}
//                         <path
//                           d="M 145 45 Q 150 48 155 45 Q 150 42 145 45 Z"
//                           fill="#C41E3A"
//                           opacity={hoveredCard === service.id ? "0.5" : "0.2"}
//                           style={{ transition: 'opacity 0.9s ease-in-out' }}
//                         />
//                       </svg>
//                     </div>

//                     {/* Back side of flap (visible when flap opens) */}
//                     <div 
//                       className="absolute left-0 right-0 z-10 pointer-events-none transition-opacity ease-in-out"
//                       style={{
//                         top: '0px',
//                         opacity: hoveredCard === service.id ? 1 : 0,
//                         transitionDuration: '800ms'
//                       }}
//                     >
//                       <svg viewBox="0 0 300 100" className="w-full">
//                         <path
//                           d="M 5 5 L 150 95 L 295 5 Z"
//                           fill="#f3f4f6"
//                           stroke="#d1d5db"
//                           strokeWidth="2"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Content Card (Slides OUT from inside envelope) */}
//                   <div 
//                     className="absolute left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-all"
//                     style={{
//                       bottom: hoveredCard === service.id ? '120px' : '80px',
//                       height: '520px',
//                       opacity: hoveredCard === service.id ? 1 : 0,
//                       transform: hoveredCard === service.id 
//                         ? 'translateY(0) scale(1)' 
//                         : 'translateY(40px) scale(0.9)',
//                       zIndex: hoveredCard === service.id ? 25 : 5,
//                       boxShadow: hoveredCard === service.id 
//                         ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0,0,0,0.05)' 
//                         : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//                       pointerEvents: hoveredCard === service.id ? 'auto' : 'none',
//                       transitionDelay: hoveredCard === service.id ? '0.4s' : '0s',
//                       transitionDuration: '900ms',
//                       transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
//                     }}
//                   >
//                     {/* Image Section */}
//                     <div className="relative h-64 overflow-hidden">
//                       <div 
//                         className="absolute inset-0 bg-cover bg-center transition-transform ease-in-out"
//                         style={{
//                           backgroundImage: `url(${service.image})`,
//                           transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)',
//                           transitionDuration: '1000ms'
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      
//                       {/* Floating service badge */}
//                       <div 
//                         className="absolute top-6 left-6 bg-[#C41E3A] text-white px-5 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all ease-out"
//                         style={{
//                           transform: hoveredCard === service.id ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)',
//                           transitionDelay: hoveredCard === service.id ? '0.6s' : '0s',
//                           transitionDuration: '600ms'
//                         }}
//                       >
//                         Services
//                       </div>

//                       {/* Title overlay on image */}
//                       <div 
//                         className="absolute bottom-6 left-6 right-6 transition-all ease-out"
//                         style={{
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                           transitionDelay: hoveredCard === service.id ? '0.7s' : '0s',
//                           transitionDuration: '600ms'
//                         }}
//                       >
//                         <h3 
//                           className="text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-lg"
//                           style={{ 
//                             fontFamily: "'Playfair Display', Georgia, serif"
//                           }}
//                         >
//                           {service.title}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-8 bg-white">
//                       {/* Decorative divider */}
//                       <div 
//                         className="flex items-center gap-2 mb-5 transition-all ease-out"
//                         style={{
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transform: hoveredCard === service.id ? 'translateX(0)' : 'translateX(-20px)',
//                           transitionDelay: hoveredCard === service.id ? '0.8s' : '0s',
//                           transitionDuration: '600ms'
//                         }}
//                       >
//                         <div className="h-0.5 w-12 bg-[#C41E3A]" />
//                         <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
//                         <div className="h-0.5 flex-1 bg-gradient-to-r from-[#C41E3A]/50 to-transparent" />
//                       </div>

//                       {/* Description */}
//                       <p 
//                         className="text-gray-700 text-base leading-relaxed mb-6 transition-all ease-out"
//                         style={{ 
//                           fontFamily: "'Playfair Display', Georgia, serif",
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                           transitionDelay: hoveredCard === service.id ? '0.9s' : '0s',
//                           transitionDuration: '600ms'
//                         }}
//                       >
//                         {service.description}
//                       </p>

//                       {/* Read More Button */}
//                       <button 
//                         className="group relative overflow-hidden bg-transparent border-2 border-[#C41E3A] text-[#C41E3A] px-8 py-3.5 font-bold text-sm tracking-widest uppercase transition-all ease-out hover:text-white rounded-lg shadow-md hover:shadow-xl"
//                         style={{
//                           fontFamily: "'Playfair Display', Georgia, serif",
//                           opacity: hoveredCard === service.id ? 1 : 0,
//                           transform: hoveredCard === service.id ? 'translateY(0)' : 'translateY(10px)',
//                           transitionDelay: hoveredCard === service.id ? '1s' : '0s',
//                           transitionDuration: '600ms'
//                         }}
//                       >
//                         <span className="relative z-10">READ MORE</span>
//                         <span className="absolute inset-0 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//                       </button>
//                     </div>

//                     {/* Bottom decorative corner */}
//                     <div 
//                       className="absolute bottom-4 right-4 opacity-10 transition-all ease-in-out"
//                       style={{
//                         transform: hoveredCard === service.id ? 'rotate(0deg)' : 'rotate(-90deg)',
//                         transitionDelay: hoveredCard === service.id ? '1.1s' : '0s',
//                         transitionDuration: '700ms'
//                       }}
//                     >
//                       <svg width="60" height="60" viewBox="0 0 60 60">
//                         <path d="M0,60 Q0,30 30,30 Q0,30 0,0" fill="none" stroke="#C41E3A" strokeWidth="2"/>
//                         <circle cx="30" cy="30" r="3" fill="#C41E3A"/>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
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
      title: 'VENUE BOOKING',
      image: 'images/picture.jpg',
      description: 'Searching for the best places for your event? Give us a try. Let our professionals help you find the best venue of your preferences.',
      delay: '200ms'
    },
    {
      id: 2,
      title: 'DECORATION & FLORIST',
      image: 'https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Searching for a decorator to hand you the flower designs you have always dreamt of? Let us help you decorate aesthetic wedding.',
      delay: '400ms'
    },
    {
      id: 3,
      title: 'CATERING AND FOODING',
      image: 'https://plus.unsplash.com/premium_photo-1668442052924-8eae206272f0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Great food is the essence of any event planning. Let\'s collaborate and welcome your guests with delicious finger-licking foods!',
      delay: '600ms'
    },
    {
      id: 4,
      title: 'PHOTOGRAPHY & VIDEOGRAPHY',
      image: 'images/picture-1.jpg',
      description: 'Capture every precious moment with our professional photography and videography services. We preserve your memories beautifully.',
      delay: '800ms'
    },
    {
      id: 5,
      title: 'ENTERTAINMENT & DJ',
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
