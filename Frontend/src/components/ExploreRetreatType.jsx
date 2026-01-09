
import React, { useState, useEffect, useRef } from "react";
import { Check, MessageSquare, FileText, Calendar } from "lucide-react";

const ExploreRetreatType = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
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

  // Auto-cycle through steps for demonstration
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: 1,
      title: "Share your requirements",
      description:
        "Tell us your event date, budget, location, type of venue, guest count, etc.",
      icon: MessageSquare,
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Phone mockup */}
          <div className="relative w-48 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl border-8 border-gray-900 overflow-hidden transform transition-all duration-700 hover:scale-105">
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
            
            {/* Phone screen */}
            <div className="w-full h-full bg-gradient-to-br from-[#FFF8F3] to-[#FFF5ED] p-6 flex items-center justify-center">
              {/* Chat bubble */}
              <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-2 transition-transform duration-500 hover:rotate-0">
                <p className="text-gray-800 text-sm font-medium leading-relaxed">
                  I want my wedding in Goa. My budget is 60 Lakhs
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative hand */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 opacity-80">
            <div className="w-full h-full bg-gradient-to-br from-[#D4A574] to-[#8B6F5E] rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      title: "Get a personalised proposal",
      description:
        "Get the best deals on venue, catering, and decor as per your preferences.",
      icon: FileText,
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Wedding invitation card */}
          <div className="relative w-56 h-72 bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-700 hover:scale-105 hover:rotate-1">
            {/* Top decorative element */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path
                  d="M0 10 Q10 0, 20 10 T40 10"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Marigold flowers */}
            <div className="absolute top-12 left-6 w-12 h-12">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-orange-600 animate-float"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-700"></div>
            </div>
            <div className="absolute top-12 right-6 w-12 h-12">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-orange-600 animate-float" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-700"></div>
            </div>

            {/* Names */}
            <div className="mt-24 text-center">
              <p className="font-serif text-2xl text-[#8B6F5E] tracking-wider" style={{ fontFamily: "cursive" }}>
                Rahul
              </p>
              <p className="font-serif text-lg text-[#8B6F5E] my-1">&</p>
              <p className="font-serif text-2xl text-[#8B6F5E] tracking-wider" style={{ fontFamily: "cursive" }}>
                Kajal
              </p>
            </div>

            {/* Bottom decorative element */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path
                  d="M0 10 Q10 20, 20 10 T40 10"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Decorative sparkles */}
          <div className="absolute top-8 right-8 w-3 h-3 bg-[#D4A574] rounded-full animate-twinkle"></div>
          <div className="absolute bottom-12 left-8 w-2 h-2 bg-[#D4A574] rounded-full animate-twinkle" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-1/2 right-12 w-2 h-2 bg-[#8B6F5E] rounded-full animate-twinkle" style={{ animationDelay: "1s" }}></div>
        </div>
      ),
    },
    {
      number: 3,
      title: "Confirm and book",
      description:
        "Pay a minimum amount & lock the deal within 7 days. Leave the rest to us.",
      icon: Calendar,
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Wedding venue card */}
          <div className="relative w-64 h-48 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105">
            {/* Venue illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100">
              {/* Mandap structure */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-32">
                {/* Roof */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-br from-[#8B6F5E] to-[#6B5548] rounded-t-2xl"></div>
                
                {/* Pillars */}
                <div className="absolute top-8 left-2 w-4 h-24 bg-gradient-to-b from-[#D4A574] to-[#B8956A] rounded-t-lg"></div>
                <div className="absolute top-8 right-2 w-4 h-24 bg-gradient-to-b from-[#D4A574] to-[#B8956A] rounded-t-lg"></div>
                
                {/* Floral decoration on top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                </div>
                
                {/* Seating */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
                  <div className="w-8 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-t-lg"></div>
                  <div className="w-8 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-t-lg"></div>
                </div>
                
                {/* Table */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-2 bg-[#D4A574] rounded-full"></div>
              </div>
              
              {/* Side decorative elements */}
              <div className="absolute left-4 bottom-8 w-12 h-16 bg-gradient-to-br from-pink-300 to-pink-500 rounded-lg opacity-60"></div>
              <div className="absolute right-4 bottom-8 w-12 h-16 bg-gradient-to-br from-pink-300 to-pink-500 rounded-lg opacity-60"></div>
            </div>

            {/* Checkmark overlay */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg flex items-center justify-center animate-bounce-in">
              <Check className="w-8 h-8 text-white" strokeWidth={3} />
            </div>
          </div>

          {/* Confetti effect */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-confetti"></div>
          <div className="absolute top-8 right-12 w-2 h-2 bg-[#D4A574] rounded-full animate-confetti" style={{ animationDelay: "0.2s" }}></div>
          <div className="absolute bottom-12 left-12 w-2 h-2 bg-purple-400 rounded-full animate-confetti" style={{ animationDelay: "0.4s" }}></div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-[#FFF8F3] via-[#FFF5ED] to-[#FFF8F3] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D4A574]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#8B6F5E]/5 to-transparent rounded-full blur-3xl"></div>

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light bg-clip-text bg-gradient-to-r text-[#8B6F5E] tracking-wide animate-gradient-text">
            How it works
          </h2>
          <p className="text-[#8B6F5E]/70 mt-2 text-sm md:text-base tracking-wider animate-fade-in-delay">
            Book your wedding service in 3 easy steps
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const isActive = activeStep === step.number;
              const isPast = activeStep > step.number;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative transition-all duration-500"
                  style={{
                    animation: isVisible
                      ? `fadeInLeft 0.6s ease-out ${index * 0.2}s forwards`
                      : "none",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[22px] top-12 w-0.5 h-20 md:h-24 bg-gradient-to-b from-[#D4A574] to-[#D4A574]/20 border-l-2 border-dashed border-[#D4A574]/40"></div>
                  )}

                  {/* Step container */}
                  <div
                    className="flex gap-6 cursor-pointer group"
                    onClick={() => setActiveStep(step.number)}
                  >
                    {/* Number badge */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-to-br from-[#A0435C] to-[#8B3850] text-white shadow-lg scale-110"
                            : isPast
                            ? "bg-[#8B6F5E] text-white"
                            : "bg-[#8B6F5E]/20 text-[#8B6F5E] group-hover:bg-[#8B6F5E]/30"
                        }`}
                      >
                        {isPast && !isActive ? (
                          <Check className="w-6 h-6" strokeWidth={3} />
                        ) : (
                          step.number
                        )}
                      </div>

                      {/* Pulse effect for active step */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-[#A0435C] animate-ping opacity-20"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3
                        className={`text-xl md:text-2xl font-semibold mb-2 transition-all duration-500 ${
                          isActive
                            ? "text-[#1a1a1a] scale-105"
                            : "text-[#8B6F5E]/60 group-hover:text-[#8B6F5E]"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Expandable description */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[#8B6F5E]/80 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Icon indicator */}
                      <div
                        className={`mt-3 transition-all duration-300 ${
                          isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        }`}
                      >
                        <Icon className="w-5 h-5 text-[#D4A574]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - Illustration */}
          <div className="relative h-96 lg:h-[500px]">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeStep === step.number
                    ? "opacity-100 scale-100 rotate-0"
                    : activeStep > step.number
                    ? "opacity-0 scale-90 -rotate-12"
                    : "opacity-0 scale-90 rotate-12"
                }`}
              >
                {/* Circular background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br transition-all duration-700 ${
                      activeStep === step.number
                        ? "from-[#FFF8F3] via-[#FFF5ED] to-[#FFE8D6] scale-100 opacity-100 shadow-2xl"
                        : "scale-90 opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Illustration */}
                <div
                  className={`absolute inset-0 transition-all duration-700 delay-200 ${
                    activeStep === step.number
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                >
                  {step.illustration}
                </div>
              </div>
            ))}

            {/* Progress indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {steps.map((step) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === step.number
                      ? "bg-[#A0435C] w-8"
                      : "bg-[#8B6F5E]/30 hover:bg-[#8B6F5E]/50"
                  }`}
                  aria-label={`Go to step ${step.number}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }

        .animate-confetti {
          animation: confetti 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ExploreRetreatType;