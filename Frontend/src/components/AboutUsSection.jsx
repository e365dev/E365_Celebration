// import React, { useState, useEffect, useRef } from 'react';

// const AboutUsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
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

//   return (
//     <>
//       <style>{`
//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

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

//         @keyframes floatImage {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         .bride-image {
//           animation: floatImage 6s ease-in-out infinite;
//         }

//         .social-icon {
//           transition: all 0.3s ease;
//         }

//         .social-icon:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//         }
//       `}</style>

//       <section 
//         ref={sectionRef}
//         className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 sm:py-24 lg:py-32 overflow-hidden"
//       >
//         {/* Decorative wave background */}
//         <div className="absolute inset-0 opacity-10">
//           <svg className="absolute top-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
//             <path fill="#e5e7eb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,170.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//           </svg>
//           <svg className="absolute bottom-0 right-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
//             <path fill="#e5e7eb" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//           </svg>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
//             {/* Left Side - Image */}
//             <div 
//               className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//               style={{
//                 animation: isVisible ? 'fadeInLeft 1s ease-out' : 'none'
//               }}
//             >
//               {/* Decorative circle background */}
//               <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-50" />
//               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-50" />
              
//               {/* Main bride image */}
//               <div className="relative bride-image">
//                 <img 
//                   src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Bride" 
//                   className="w-full h-auto object-cover rounded-3xl shadow-2xl"
//                 />
                
//                 {/* Decorative dot accent */}
//                 <div className="absolute -top-4 -right-4 w-24 h-24 border-8 border-white rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-xl">
//                   <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Content */}
//             <div 
//               className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//               style={{
//                 animation: isVisible ? 'fadeInRight 1s ease-out 0.3s both' : 'none'
//               }}
//             >
//               {/* Decorative dot */}
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full" />
//                 <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-rose-500 to-transparent" />
//               </div>

//               {/* Title */}
//               <h2 
//                 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
//                 style={{ 
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   letterSpacing: '-0.01em'
//                 }}
//               >
//                 About Us
//               </h2>

//               {/* Main description */}
//               <p 
//                 className="text-gray-800 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6"
//                 style={{ 
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontWeight: 600
//                 }}
//               >
//                 At <span className="text-rose-600">Mary's Bridal</span>, we know we how much you want your wedding to be perfect. And the preparation for it begins with a wedding dress.
//               </p>

//               {/* Secondary description */}
//               <p 
//                 className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8"
//                 style={{ 
//                   fontFamily: "'Playfair Display', Georgia, serif"
//                 }}
//               >
//                 We believe that every woman can find HER wedding dress in our salon. The one she's always dreamed of. We sell only the best dresses from famous brands so that you can feel like a real princess on your special day.
//               </p>

//               {/* Social Media Icons */}
//               <div className="flex items-center gap-4 mb-10">
//                 <a 
//                   href="#" 
//                   className="social-icon w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white group"
//                   aria-label="Facebook"
//                 >
//                   <svg className="w-5 h-5 text-gray-800 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                 </a>

//                 <a 
//                   href="#" 
//                   className="social-icon w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white group"
//                   aria-label="Instagram"
//                 >
//                   <svg className="w-5 h-5 text-gray-800 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>

//                 <a 
//                   href="#" 
//                   className="social-icon w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white group"
//                   aria-label="YouTube"
//                 >
//                   <svg className="w-5 h-5 text-gray-800 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                   </svg>
//                 </a>
//               </div>

//               {/* CTA Button */}
//               <button 
//                 className="group relative overflow-hidden bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-500 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
//                 style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//               >
//                 <span className="relative z-10">LEARN MORE</span>
//                 <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* Decorative floating elements */}
//         <div className={`absolute top-1/4 right-[10%] w-4 h-4 bg-rose-300 rounded-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animation: 'floatImage 5s ease-in-out infinite' }} />
//         <div className={`absolute bottom-1/4 left-[8%] w-3 h-3 bg-pink-300 rounded-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animation: 'floatImage 6s ease-in-out infinite', animationDelay: '2s' }} />
//       </section>
//     </>
//   );
// };

// export default AboutUsSection;



// import React, { useState, useEffect, useRef } from 'react';

// const AboutUsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
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

//   return (
//     <>
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .fade-in {
//           animation: fadeIn 1s ease-in;
//         }
//       `}</style>

//       <section 
//         ref={sectionRef}
//         className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
//         style={{
//           background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 50%, #f5f5f5 100%)'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
//             {/* Left Side - Bride Image */}
//             <div className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`}>
//               <img 
//                 src="images/picf.jpeg" 
//                 alt="Bride with bouquet" 
//                 className="w-full h-auto object-cover"
//                 style={{
//                   maxWidth: '100%',
//                   height: 'auto'
//                 }}
//               />
//             </div>

//             {/* Right Side - Content */}
//             <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
//               {/* Red dot decoration */}
//               <div className="mb-8">
//                 <div className="w-2.5 h-2.5 bg-red-600 rounded-full" style={{ backgroundColor: '#dc2626' }} />
//               </div>

//               {/* About Us Heading */}
//               <h2 
//                 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-8"
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 400,
//                   lineHeight: 1.2,
//                   color: '#1a1a1a'
//                 }}
//               >
//                 About Us
//               </h2>

//               {/* Main Bold Text */}
//               <p 
//                 className="text-lg sm:text-xl text-gray-900 mb-6"
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 700,
//                   lineHeight: 1.6,
//                   color: '#1a1a1a'
//                 }}
//               >
//                 At Mary's Bridal, we know we how much you want your wedding to be perfect. And the preparation for it begins with a wedding dress.
//               </p>

//               {/* Secondary Text */}
//               <p 
//                 className="text-base sm:text-lg text-gray-600 mb-8"
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 400,
//                   lineHeight: 1.7,
//                   color: '#6b7280'
//                 }}
//               >
//                 We believe that every woman can find HER wedding dress in our salon. The one she's always dreamed of. We sell only the best dresses from famous brands so that you can feel like a real princess on your special day.
//               </p>

//               {/* Social Media Icons */}
//               <div className="flex items-center gap-3 mb-8">
//                 {/* Facebook */}
//                 <a 
//                   href="#" 
//                   className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
//                   aria-label="Facebook"
//                   style={{ borderColor: '#1a1a1a' }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                   </svg>
//                 </a>

//                 {/* Instagram */}
//                 <a 
//                   href="#" 
//                   className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
//                   aria-label="Instagram"
//                   style={{ borderColor: '#1a1a1a' }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>

//                 {/* YouTube */}
//                 <a 
//                   href="#" 
//                   className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
//                   aria-label="YouTube"
//                   style={{ borderColor: '#1a1a1a' }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
//                   </svg>
//                 </a>
//               </div>

//               {/* Learn More Button */}
//               <button 
//                 className="px-8 py-3.5 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
//                 style={{
//                   backgroundColor: '#dc2626',
//                   fontFamily: 'Lora, Georgia, serif',
//                   borderRadius: '4px',
//                   letterSpacing: '0.1em'
//                 }}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
//               >
//                 LEARN MORE
//               </button>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutUsSection;



// import React, { useState, useEffect, useRef } from 'react';

// const AboutUsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
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

//   return (
//     <>
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .fade-in {
//           animation: fadeIn 1s ease-in;
//         }
//       `}</style>

//       <section 
//         ref={sectionRef}
//         className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
//         style={{
//           background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 50%, #f5f5f5 100%)'
//         }}
//       >
//         {/* Wave/Curve at the top */}
//         <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0 }}>
//           <svg 
//             viewBox="0 0 1200 120" 
//             preserveAspectRatio="none" 
//             className="relative block w-full"
//             style={{ height: '80px' }}
//           >
//             <path 
//               d="M0,0 C200,80 400,80 600,40 C800,0 1000,0 1200,40 L1200,0 L0,0 Z" 
//               style={{ fill: '#ffffff' }}
//             />
//           </svg>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
//             {/* Left Side - Bride Image */}
//             <div className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`}>
//               <img 
//                 src="images/picf.jpeg" 
//                 alt="Bride with bouquet" 
//                 className="w-full h-auto object-cover"
//                 style={{
//                   maxWidth: '100%',
//                   height: 'auto'
//                 }}
//               />
//             </div>

//             {/* Right Side - Content */}
//             <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
//               {/* Red dot decoration */}
//               <div className="mb-8">
//                 <div className="w-2.5 h-2.5 bg-red-600 rounded-full" style={{ backgroundColor: '#dc2626' }} />
//               </div>

//               {/* About Us Heading */}
//               <h2 
//                 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-8"
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 400,
//                   lineHeight: 1.2,
//                   color: '#1a1a1a'
//                 }}
//               >
//                 About Us
//               </h2>

//               {/* Main Bold Text */}
//               <p 
//                 className="text-lg sm:text-xl text-gray-900 mb-6"
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 700,
//                   lineHeight: 1.6,
//                   color: '#1a1a1a'
//                 }}
//               >
//                 At Mary's Bridal, we know we how much you want your wedding to be perfect. And the preparation for it begins with a wedding dress.
//               </p>

//               {/* Secondary Text */}
//               <p 
//                 className="text-base sm:text-lg text-gray-600 mb-8"
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 400,
//                   lineHeight: 1.7,
//                   color: '#6b7280'
//                 }}
//               >
//                 We believe that every woman can find HER wedding dress in our salon. The one she's always dreamed of. We sell only the best dresses from famous brands so that you can feel like a real princess on your special day.
//               </p>

//               {/* Social Media Icons */}
//               <div className="flex items-center gap-3 mb-8">
//                 {/* Facebook */}
//                 <a 
//                   href="#" 
//                   className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
//                   aria-label="Facebook"
//                   style={{ borderColor: '#1a1a1a' }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                   </svg>
//                 </a>

//                 {/* Instagram */}
//                 <a 
//                   href="#" 
//                   className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
//                   aria-label="Instagram"
//                   style={{ borderColor: '#1a1a1a' }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>

//                 {/* YouTube */}
//                 <a 
//                   href="#" 
//                   className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
//                   aria-label="YouTube"
//                   style={{ borderColor: '#1a1a1a' }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
//                   </svg>
//                 </a>
//               </div>

//               {/* Learn More Button */}
//               <button 
//                 className="px-8 py-3.5 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
//                 style={{
//                   backgroundColor: '#dc2626',
//                   fontFamily: 'Lora, Georgia, serif',
//                   borderRadius: '4px',
//                   letterSpacing: '0.1em'
//                 }}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
//               >
//                 LEARN MORE
//               </button>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutUsSection;


import React, { useState, useEffect, useRef } from 'react';

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-in;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #e5e5e5 0%, #d4d4d4 50%, #e5e5e5 100%)'
        }}
      >
        {/* Wave/Curve at the top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0 }}>
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full"
            style={{ height: '80px' }}
          >
            <path 
              d="M0,0 C200,80 400,80 600,40 C800,0 1000,0 1200,40 L1200,0 L0,0 Z" 
              style={{ fill: '#ffffff' }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Bride Image */}
            <div className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <img 
                src="images/picf.jpeg" 
                alt="Bride with bouquet" 
                className="w-full h-auto object-cover"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>

            {/* Right Side - Content */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
              {/* Red dot decoration */}
              <div className="mb-8">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full" style={{ backgroundColor: '#dc2626' }} />
              </div>

              {/* About Us Heading */}
              <h2 
                className="text-4xl sm:text-5xl font-normal text-gray-900 mb-8"
                style={{ 
                  fontFamily: 'Lora, Georgia, serif',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: '#1a1a1a'
                }}
              >
                About Us
              </h2>

              {/* Main Bold Text */}
              <p 
                className="text-lg sm:text-xl text-gray-900 mb-6"
                style={{ 
                  fontFamily: 'Lora, Georgia, serif',
                  fontWeight: 700,
                  lineHeight: 1.6,
                  color: '#1a1a1a'
                }}
              >
                At Mary's Bridal, we know we how much you want your wedding to be perfect. And the preparation for it begins with a wedding dress.
              </p>

              {/* Secondary Text */}
              <p 
                className="text-base sm:text-lg text-gray-600 mb-8"
                style={{ 
                  fontFamily: 'Lora, Georgia, serif',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#6b7280'
                }}
              >
                We believe that every woman can find HER wedding dress in our salon. The one she's always dreamed of. We sell only the best dresses from famous brands so that you can feel like a real princess on your special day.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 mb-8">
                {/* Facebook */}
                <a 
                  href="#" 
                  className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                  style={{ borderColor: '#1a1a1a' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="#" 
                  className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                  style={{ borderColor: '#1a1a1a' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="#" 
                  className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
                  aria-label="YouTube"
                  style={{ borderColor: '#1a1a1a' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>

              {/* Learn More Button */}
              <button 
                className="px-8 py-3.5 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#dc2626',
                  fontFamily: 'Lora, Georgia, serif',
                  borderRadius: '4px',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
              >
                LEARN MORE
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;


// import React, { useState, useEffect, useRef } from 'react';

// const AboutUsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
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

//   return (
//     <>
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-60px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(60px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -1000px 0;
//           }
//           100% {
//             background-position: 1000px 0;
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 1s ease-out forwards;
//         }

//         .animate-fade-in-left {
//           animation: fadeInLeft 1s ease-out forwards;
//         }

//         .animate-fade-in-right {
//           animation: fadeInRight 1s ease-out forwards;
//         }

//         .animate-scale-in {
//           animation: scaleIn 0.8s ease-out forwards;
//         }

//         .delay-100 {
//           animation-delay: 0.1s;
//         }

//         .delay-200 {
//           animation-delay: 0.2s;
//         }

//         .delay-300 {
//           animation-delay: 0.3s;
//         }

//         .delay-400 {
//           animation-delay: 0.4s;
//         }

//         .delay-500 {
//           animation-delay: 0.5s;
//         }

//         .delay-600 {
//           animation-delay: 0.6s;
//         }

//         .hover-lift {
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .hover-lift:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//         }

//         .shimmer-effect {
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             rgba(255, 255, 255, 0.3) 50%,
//             transparent 100%
//           );
//           background-size: 200% 100%;
//           animation: shimmer 3s infinite;
//         }

//         .social-icon {
//           transition: all 0.3s ease;
//         }

//         .social-icon:hover {
//           transform: scale(1.15) rotate(5deg);
//         }
//       `}</style>

//       <section 
//         ref={sectionRef}
//         className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
//         style={{
//           background: 'linear-gradient(135deg, #e5e5e5 0%, #d4d4d4 50%, #e5e5e5 100%)'
//         }}
//       >
//         {/* Wave/Curve at the top */}
//         <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0 }}>
//           <svg 
//             viewBox="0 0 1200 120" 
//             preserveAspectRatio="none" 
//             className="relative block w-full"
//             style={{ height: '80px' }}
//           >
//             <path 
//               d="M0,0 C200,80 400,80 600,40 C800,0 1000,0 1200,40 L1200,0 L0,0 Z" 
//               style={{ fill: '#ffffff' }}
//             />
//           </svg>
//         </div>

//         {/* Animated decorative elements */}
//         <div 
//           className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10"
//           style={{
//             background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
//             animation: 'float 6s ease-in-out infinite',
//             filter: 'blur(40px)'
//           }}
//         />
//         <div 
//           className="absolute bottom-20 left-10 w-40 h-40 rounded-full opacity-10"
//           style={{
//             background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
//             animation: 'float 8s ease-in-out infinite',
//             animationDelay: '1s',
//             filter: 'blur(50px)'
//           }}
//         />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
//             {/* Left Side - Bride Image */}
//             <div 
//               className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
//               style={{ animationDelay: '0.1s' }}
//             >
//               <div className="relative overflow-hidden rounded-lg hover-lift">
//                 {/* Image shimmer overlay */}
//                 <div className="absolute inset-0 shimmer-effect pointer-events-none z-10" />
                
//                 {/* Decorative border effect */}
//                 <div 
//                   className="absolute inset-0 border-4 border-red-600/20 rounded-lg"
//                   style={{
//                     boxShadow: 'inset 0 0 20px rgba(220, 38, 38, 0.1)'
//                   }}
//                 />
                
//                 <img 
//                   src="images/picf.jpeg" 
//                   alt="Bride with bouquet" 
//                   className="w-full h-auto object-cover rounded-lg transition-transform duration-700 hover:scale-105"
//                   style={{
//                     maxWidth: '100%',
//                     height: 'auto',
//                     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Right Side - Content */}
//             <div className={`${isVisible ? '' : 'opacity-0'}`}>
//               {/* Red dot decoration with pulse */}
//               <div 
//                 className={`mb-8 ${isVisible ? 'animate-scale-in delay-200' : 'opacity-0'}`}
//               >
//                 <div 
//                   className="w-2.5 h-2.5 bg-red-600 rounded-full relative"
//                   style={{ 
//                     backgroundColor: '#dc2626',
//                     animation: 'pulse 2s ease-in-out infinite',
//                     boxShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
//                   }}
//                 >
//                   <div 
//                     className="absolute inset-0 rounded-full bg-red-600"
//                     style={{
//                       animation: 'pulse 2s ease-in-out infinite',
//                       animationDelay: '0.5s'
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* About Us Heading */}
//               <h2 
//                 className={`text-4xl sm:text-5xl font-normal text-gray-900 mb-8 ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 400,
//                   lineHeight: 1.2,
//                   color: '#1a1a1a',
//                   textShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)'
//                 }}
//               >
//                 About Us
//               </h2>

//               {/* Main Bold Text */}
//               <p 
//                 className={`text-lg sm:text-xl text-gray-900 mb-6 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 700,
//                   lineHeight: 1.6,
//                   color: '#1a1a1a'
//                 }}
//               >
//                 At Mary's Bridal, we know we how much you want your wedding to be perfect. And the preparation for it begins with a wedding dress.
//               </p>

//               {/* Secondary Text */}
//               <p 
//                 className={`text-base sm:text-lg text-gray-600 mb-8 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}
//                 style={{ 
//                   fontFamily: 'Lora, Georgia, serif',
//                   fontWeight: 400,
//                   lineHeight: 1.7,
//                   color: '#6b7280'
//                 }}
//               >
//                 We believe that every woman can find HER wedding dress in our salon. The one she's always dreamed of. We sell only the best dresses from famous brands so that you can feel like a real princess on your special day.
//               </p>

//               {/* Social Media Icons */}
//               <div 
//                 className={`flex items-center gap-3 mb-8 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}
//               >
//                 {/* Facebook */}
//                 <a 
//                   href="#" 
//                   className="social-icon w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
//                   aria-label="Facebook"
//                   style={{ 
//                     borderColor: '#1a1a1a',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
//                   }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                   </svg>
//                 </a>

//                 {/* Instagram */}
//                 <a 
//                   href="#" 
//                   className="social-icon w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
//                   aria-label="Instagram"
//                   style={{ 
//                     borderColor: '#1a1a1a',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                     transitionDelay: '0.05s'
//                   }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>

//                 {/* YouTube */}
//                 <a 
//                   href="#" 
//                   className="social-icon w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
//                   aria-label="YouTube"
//                   style={{ 
//                     borderColor: '#1a1a1a',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                     transitionDelay: '0.1s'
//                   }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
//                   </svg>
//                 </a>
//               </div>

//               {/* Learn More Button */}
//               <div className={`${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
//                 <button 
//                   className="group relative px-8 py-3.5 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl overflow-hidden"
//                   style={{
//                     backgroundColor: '#dc2626',
//                     fontFamily: 'Lora, Georgia, serif',
//                     borderRadius: '4px',
//                     letterSpacing: '0.1em'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = '#b91c1c';
//                     e.currentTarget.style.transform = 'translateY(-2px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = '#dc2626';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   {/* Button shimmer effect */}
//                   <span 
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"
//                     style={{
//                       transform: 'translateX(-100%)',
//                       animation: 'shimmer 2s infinite'
//                     }}
//                   />
//                   <span className="relative z-10">LEARN MORE</span>
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutUsSection;
