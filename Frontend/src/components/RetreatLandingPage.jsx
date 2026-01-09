import React, { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import DiscoverRetreatSection from "./DiscoverRetreatSection";
import RetreatSpotlight from "./RetreatSpotlight";
import ExploreRetreatType from "./ExploreRetreatType";
import StoriesSection from "./StoriesSection";
import AboutSection from "./AboutSection";
import IndexPage from "./IndexPage";
import Footer from "./Footer";

const RetreatLandingPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add your wedding videos here
  const videos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video4.mp4",
  ];

  // Romantic wedding text that changes every 10 seconds
  const heroTexts = [
    "Our Love Story Begins",
    "Two Hearts, One Love",
    "Forever Starts Today",
    "Join Us In Celebration",
    "Love Brought Us Together",
    "A Journey of Forever",
  ];

  // Get current date in DD/MM/YYYY format
  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      setCurrentDate(`${day} . ${month} . ${year}`);
    };

    updateDate();
    // Update date at midnight every day
    const interval = setInterval(() => {
      updateDate();
    }, 86400000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  // Pick random video on page load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideoIndex(randomIndex);
  }, []);

  // Change text every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFB6C1]">
      {/* Clean Navigation Bar with Logo Animation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            {/* Logo - Always Visible */}
            <div
              className={`flex items-center transition-all duration-700 ${
                isScrolled ? "scale-75 sm:scale-90" : "scale-90 sm:scale-100"
              }`}
            >
              <img
                src="images/E365CelebrationsLogo.png"
                alt="Wedding Logo"
                className="h-40 w-40 sm:h-32 sm:w-32 lg:h-40 lg:w-40 object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div
              className={`hidden md:flex items-center space-x-4 lg:space-x-8 font-light tracking-wider text-xs lg:text-sm transition-colors duration-500 ${
                isScrolled ? "text-[#D4A574]" : "text-white"
              }`}
            >
              <a
                href="#home"
                className="hover:text-[#D4A574] transition-all duration-300 hover:scale-110"
              >
                Home
              </a>
              <a
                href="#packages"
                className="hover:text-[#D4A574] transition-all duration-300 hover:scale-110"
              >
                Packages
              </a>
              <a
                href="#about"
                className="hover:text-[#D4A574] transition-all duration-300 hover:scale-110"
              >
                About
              </a>
              <a
                href="#gallery"
                className="hover:text-[#D4A574] transition-all duration-300 hover:scale-110"
              >
                Gallery
              </a>
              <a
                href="#journey"
                className="hover:text-[#D4A574] transition-all duration-300 hover:scale-110"
              >
                Journey
              </a>
              <a
                href="#contact"
                className="hover:text-[#D4A574] transition-all duration-300 hover:scale-110"
              >
                Contact
              </a>
              <a
                href="#blog"
                className="hover:text-[#D4A574] transition-all duration-300 hover:scale-110"
              >
                Blog
              </a>
            </div>

            {/* Mobile Menu Button & Heart Icon */}
            <div className="flex items-center space-x-4">
              <button
                className={`transition-all duration-500 ${
                  isScrolled ? "text-[#D4A574]" : "text-white"
                }`}
              >
                <Heart
                  className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-125 transition-transform duration-300"
                  fill="currentColor"
                />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden transition-all duration-500 ${
                  isScrolled ? "text-[#D4A574]" : "text-white"
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md px-4 py-6 space-y-4 shadow-lg">
            <a
              href="#home"
              onClick={handleMobileMenuClick}
              className="block text-[#D4A574] hover:text-[#D4A574] transition-colors duration-300 py-2 text-sm tracking-wider"
            >
              Home
            </a>
            <a
              href="#packages"
              onClick={handleMobileMenuClick}
              className="block text-[#D4A574] hover:text-[#D4A574] transition-colors duration-300 py-2 text-sm tracking-wider"
            >
              Packages
            </a>
            <a
              href="#about"
              onClick={handleMobileMenuClick}
              className="block text-[#D4A574] hover:text-[#D4A574] transition-colors duration-300 py-2 text-sm tracking-wider"
            >
              About
            </a>
            <a
              href="#gallery"
              onClick={handleMobileMenuClick}
              className="block text-[#D4A574] hover:text-[#D4A574] transition-colors duration-300 py-2 text-sm tracking-wider"
            >
              Gallery
            </a>
            <a
              href="#journey"
              onClick={handleMobileMenuClick}
              className="block text-[#D4A574] hover:text-[#D4A574] transition-colors duration-300 py-2 text-sm tracking-wider"
            >
              Journey
            </a>
            <a
              href="#contact"
              onClick={handleMobileMenuClick}
              className="block text-[#D4A574] hover:text-[#D4A574] transition-colors duration-300 py-2 text-sm tracking-wider"
            >
              Contact
            </a>
            <a
              href="#blog"
              onClick={handleMobileMenuClick}
              className="block text-[#D4A574] hover:text-[#D4A574] transition-colors duration-300 py-2 text-sm tracking-wider"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>

      {/* Clean Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          key={currentVideoIndex}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* Very Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Particles Animation - Adjusted for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Hearts - Fewer on mobile */}
          <div className="hidden sm:block absolute top-20 left-10 animate-floatSlow">
            <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white/20" fill="white" />
          </div>
          <div
            className="absolute top-40 right-10 sm:right-20 animate-floatMedium"
            style={{ animationDelay: "2s" }}
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white/15" fill="white" />
          </div>
          <div
            className="hidden sm:block absolute bottom-32 left-1/4 animate-floatFast"
            style={{ animationDelay: "1s" }}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white/20" fill="white" />
          </div>
          <div
            className="absolute top-1/3 right-5 sm:right-10 animate-floatSlow"
            style={{ animationDelay: "3s" }}
          >
            <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-white/15" fill="white" />
          </div>
          <div
            className="hidden sm:block absolute bottom-20 right-1/3 animate-floatMedium"
            style={{ animationDelay: "1.5s" }}
          >
            <Heart className="w-4 h-4 text-white/20" fill="white" />
          </div>

          {/* Sparkle/Star Elements */}
          <div className="absolute top-1/4 left-1/3 animate-twinkle">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full"></div>
          </div>
          <div
            className="absolute top-1/2 right-1/4 animate-twinkle"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
          </div>
          <div
            className="hidden sm:block absolute bottom-1/3 left-1/4 animate-twinkle"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-2 h-2 bg-white/35 rounded-full"></div>
          </div>
        </div>

        {/* Clean Centered Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          {/* Top Divider Line with Animation */}
          <div className="mb-6 sm:mb-10 animate-slideDown">
            <div className="w-16 sm:w-24 h-px bg-white/70 animate-expandWidth"></div>
          </div>

          {/* Main Title - Clean & Elegant with Enhanced Animation */}
          <h1
            key={currentTextIndex}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#D4A574] text-center mb-6 sm:mb-8 px-4 animate-fadeInScale tracking-wide leading-tight"
            style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.4)" }}
          >
            {heroTexts[currentTextIndex]}
          </h1>

          {/* Current Date - DD/MM/YYYY Format with Glow Animation */}
          <p
            className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-10 animate-fadeInGlow"
            style={{
              textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
              animationDelay: "0.5s",
            }}
          >
            {currentDate}
          </p>

          {/* Bottom Divider Line with Animation */}
          <div className="mt-6 sm:mt-10 animate-slideUp">
            <div className="w-16 sm:w-24 h-px bg-white/70 animate-expandWidth"></div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
                <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-white/70 rounded-full animate-scrollIndicator"></div>
              </div>
              <p className="text-white/60 text-[10px] sm:text-xs tracking-widest">SCROLL</p>
            </div>
          </div>
        </div>
      </div>

      <DiscoverRetreatSection />
      <RetreatSpotlight />
      <ExploreRetreatType />
      <StoriesSection />
      <IndexPage />
      <AboutSection />
      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeInGlow {
          from {
            opacity: 0;
            transform: translateY(20px);
            text-shadow: 1px 1px 8px rgba(0,0,0,0.4);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            text-shadow: 1px 1px 20px rgba(255,255,255,0.4), 1px 1px 8px rgba(0,0,0,0.4);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.3;
          }
        }

        @keyframes floatMedium {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-40px) translateX(-15px) rotate(10deg);
            opacity: 0.25;
          }
        }

        @keyframes floatFast {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-25px) translateX(15px);
            opacity: 0.3;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }

        @keyframes scrollIndicator {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 1.5s ease-out forwards;
        }

        .animate-fadeInGlow {
          animation: fadeInGlow 1.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }

        .animate-expandWidth {
          animation: expandWidth 1.5s ease-out forwards;
        }

        .animate-floatSlow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .animate-floatMedium {
          animation: floatMedium 6s ease-in-out infinite;
        }

        .animate-floatFast {
          animation: floatFast 4s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-scrollIndicator {
          animation: scrollIndicator 2s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Prevent horizontal scroll on mobile */
        body {
          overflow-x: hidden;
        }

        /* Custom gradient animation */
        @keyframes gradientShift {
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
      `}</style>
    </div>
  );
};

export default RetreatLandingPage;

