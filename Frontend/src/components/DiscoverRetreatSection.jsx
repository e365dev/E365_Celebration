
import React, { useState, useEffect } from "react";

const DiscoverRetreatSection = () => {
  const [counts, setCounts] = useState({
    weddings: 0,
    decoration: 0,
    locations: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      weddings: 1545 / steps,
      decoration: 750 / steps,
      locations: 265 / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounts({
          weddings: Math.min(
            Math.floor(increment.weddings * currentStep),
            1545
          ),
          decoration: Math.min(
            Math.floor(increment.decoration * currentStep),
            750
          ),
          locations: Math.min(
            Math.floor(increment.locations * currentStep),
            265
          ),
        });
        currentStep++;
      } else {
        setCounts({
          weddings: 1545,
          decoration: 750,
          locations: 265,
        });
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-8 bg-gradient-to-br from-[#FFF8F3] via-[#FFF5ED] to-[#FFF8F3] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 animate-pulse-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="#D4A574" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 animate-pulse-slower">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="100" fill="#8B6F5E" />
        </svg>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-[#D4A574]/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-[#8B6F5E]/10 to-transparent rounded-full blur-3xl animate-float-slower"></div>

      {/* Decorative Floral Image - Left Side - Closer to center */}
      <div className="absolute left-8 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 hidden lg:block animate-floatLeft">
        <div className="relative">
          <img
            src="images/_Pngtree_beautifull_the_nature_flower_with_8995429.png"
            alt="Decorative Flowers"
            className="w-48 lg:w-56 xl:w-64 h-auto opacity-90 drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(212, 165, 116, 0.3))',
              transform: 'perspective(1000px) rotateY(15deg)',
            }}
          />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 to-transparent blur-2xl -z-10 animate-pulse-glow"></div>
        </div>
      </div>

      {/* Decorative Floral Image - Right Side - Closer to center */}
      <div className="absolute right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 hidden lg:block animate-floatRight">
        <div className="relative">
          <img
            src="images/_Pngtree_beautifull_the_nature_flower_with_8995429.png"
            alt="Decorative Flowers"
            className="w-48 lg:w-56 xl:w-64 h-auto opacity-90 drop-shadow-2xl transform scale-x-[-1]"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(212, 165, 116, 0.3))',
              transform: 'perspective(1000px) rotateY(-15deg) scaleX(-1)',
            }}
          />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-bl from-[#D4A574]/20 to-transparent blur-2xl -z-10 animate-pulse-glow"></div>
        </div>
      </div>

      {/* Mobile Decorative Floral Images - BIGGER and MORE VISIBLE */}
      <div className="lg:hidden absolute top-8 left-2 animate-float-mobile-left">
        <div className="relative">
          <img
            src="images/_Pngtree_beautifull_the_nature_flower_with_8995429.png"
            alt="Decorative Flowers"
            className="w-32 sm:w-40 h-auto opacity-80"
            style={{
              filter: 'drop-shadow(0 8px 20px rgba(212, 165, 116, 0.4))',
            }}
          />
          {/* Glow for mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/30 to-transparent blur-xl -z-10 animate-pulse"></div>
        </div>
      </div>
      <div className="lg:hidden absolute bottom-8 right-2 animate-float-mobile-right">
        <div className="relative">
          <img
            src="images/_Pngtree_beautifull_the_nature_flower_with_8995429.png"
            alt="Decorative Flowers"
            className="w-32 sm:w-40 h-auto opacity-80 transform scale-x-[-1]"
            style={{
              filter: 'drop-shadow(0 8px 20px rgba(212, 165, 116, 0.4))',
            }}
          />
          {/* Glow for mobile */}
          <div className="absolute inset-0 bg-gradient-to-bl from-[#D4A574]/30 to-transparent blur-xl -z-10 animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title with animations */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-4 mb-4">
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
            <h2 className="text-4xl md:text-5xl font-serif font-light bg-clip-text bg-gradient-to-r text-[#8B6F5E] tracking-wide animate-gradient-text">
              Our Journey Together
            </h2>
            <p className="text-[#8B6F5E] opacity-70 mt-4 text-lg font-light tracking-wider animate-fade-in-delay">
              Creating memories, one celebration at a time
            </p>
          </div>
        </div>

        {/* Statistics Grid - SAME SIZE with animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 px-4">
          {/* Weddings */}
          <div className="group relative">
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-[#FFF8F3] rounded-full flex items-center justify-center border-2 border-[#D4A574]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#D4A574]"
                  >
                    <path
                      d="M12 21C12 21 20 16 20 10C20 6.5 17.5 4 14.5 4C13 4 12 5 12 5C12 5 11 4 9.5 4C6.5 4 4 6.5 4 10C4 16 12 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-5xl md:text-6xl font-serif font-light text-[#D4A574] mb-2 tracking-tight">
                  {counts.weddings.toLocaleString()}
                </div>
                <div className="text-lg text-[#8B6F5E] font-light tracking-widest uppercase">
                  Weddings
                </div>
                <p className="text-xs text-[#8B6F5E] opacity-60 mt-2">
                  Beautiful celebrations
                </p>
              </div>
            </div>
          </div>

          {/* Decoration */}
          <div className="group relative">
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#8B6F5E]/20 hover:border-[#8B6F5E]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-[#FFF8F3] rounded-full flex items-center justify-center border-2 border-[#8B6F5E]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#8B6F5E]"
                  >
                    <path
                      d="M12 2C12 2 15 5 15 8C15 10 13.5 12 12 12C10.5 12 9 10 9 8C9 5 12 2 12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 12C12 12 8 14 6 16C4.5 17.5 4.5 19.5 6 21C7.5 22.5 9.5 22.5 11 21C13 19 15 16 15 16"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M12 12C12 12 16 14 18 16C19.5 17.5 19.5 19.5 18 21C16.5 22.5 14.5 22.5 13 21C11 19 9 16 9 16"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-5xl md:text-6xl font-serif font-light text-[#8B6F5E] mb-2 tracking-tight">
                  {counts.decoration}+
                </div>
                <div className="text-lg text-[#8B6F5E] font-light tracking-widest uppercase">
                  Decorations
                </div>
                <p className="text-xs text-[#8B6F5E] opacity-60 mt-2">
                  Unique designs crafted
                </p>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="group relative">
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-[#FFF8F3] rounded-full flex items-center justify-center border-2 border-[#D4A574]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#D4A574]"
                  >
                    <path
                      d="M12 2C8.5 2 5.5 5 5.5 8.5C5.5 13 12 22 12 22C12 22 18.5 13 18.5 8.5C18.5 5 15.5 2 12 2Z"
                      fill="currentColor"
                    />
                    <circle cx="12" cy="8.5" r="2.5" fill="#FFF8F3" />
                  </svg>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-5xl md:text-6xl font-serif font-light text-[#D4A574] mb-2 tracking-tight">
                  {counts.locations}+
                </div>
                <div className="text-lg text-[#8B6F5E] font-light tracking-widest uppercase">
                  Locations
                </div>
                <p className="text-xs text-[#8B6F5E] opacity-60 mt-2">
                  Dream venues covered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative divider with animation */}
        <div className="flex items-center justify-center mt-16 space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#D4A574] animate-bounce-dot"></div>
            <div className="w-2 h-2 rounded-full bg-[#8B6F5E] animate-bounce-dot" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#D4A574] animate-bounce-dot" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
        </div>
      </div>

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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatLeft {
          0%, 100% {
            transform: perspective(1000px) rotateY(15deg) translateY(-10px);
          }
          50% {
            transform: perspective(1000px) rotateY(15deg) translateY(10px);
          }
        }

        @keyframes floatRight {
          0%, 100% {
            transform: perspective(1000px) rotateY(-15deg) scaleX(-1) translateY(-10px);
          }
          50% {
            transform: perspective(1000px) rotateY(-15deg) scaleX(-1) translateY(10px);
          }
        }

        @keyframes floatMobileLeft {
          0%, 100% {
            transform: translateY(-5px) translateX(0);
          }
          50% {
            transform: translateY(5px) translateX(5px);
          }
        }

        @keyframes floatMobileRight {
          0%, 100% {
            transform: translateY(-5px) translateX(0) scaleX(-1);
          }
          50% {
            transform: translateY(5px) translateX(-5px) scaleX(-1);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes pulseSlower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.08);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.02);
          }
        }

        @keyframes floatSlower {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.03);
          }
        }

        @keyframes expandLeft {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        @keyframes expandRight {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        @keyframes pulseHeart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }

        @keyframes gradientText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes bounceDot {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulseFast {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-floatLeft {
          animation: floatLeft 6s ease-in-out infinite;
        }

        .animate-floatRight {
          animation: floatRight 6s ease-in-out infinite;
        }

        .animate-float-mobile-left {
          animation: floatMobileLeft 4s ease-in-out infinite;
        }

        .animate-float-mobile-right {
          animation: floatMobileRight 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulseSlower 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: floatSlower 10s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-expand-left {
          animation: expandLeft 1s ease-out;
        }

        .animate-expand-right {
          animation: expandRight 1s ease-out;
        }

        .animate-pulse-heart {
          animation: pulseHeart 2s ease-in-out infinite;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradientText 5s ease-in-out infinite;
        }

        .animate-bounce-dot {
          animation: bounceDot 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulseFast 1s ease-in-out infinite;
        }

        .group:hover svg {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default DiscoverRetreatSection;