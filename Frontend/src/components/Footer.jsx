import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#8B6F5E] via-[#A0435C] to-[#8B3850] text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D4A574]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slower"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 relative z-10">
        {/* Top Section - Logo and Tagline */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Logo container with 3D effect */}
              <div className="w-56 h-56 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl border-2 border-white/30 flex items-center justify-center shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                <img 
                  src="images/E365CelebrationsLogo.png" 
                  alt="Bandhan Weddings Logo" 
                  className="w-full h-full object-contain p-6"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="flex-col items-center justify-center hidden">
                  <Heart className="w-16 h-16 text-[#D4A574] mb-2 animate-pulse" />
                  <span className="text-2xl font-serif font-bold text-white">Bandhan</span>
                  <span className="text-sm text-white/80">Weddings</span>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#D4A574]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-[#D4A574] animate-spin-slow" />
            Creating Magical Moments
            <Sparkles className="w-6 h-6 text-[#D4A574] animate-spin-slow" />
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
            Your dream wedding, our expertise. Celebrating love across Kolkata, Mumbai & Dhaka
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Registered Office */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full hover:border-[#D4A574]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-xl flex items-center justify-center group-hover:bg-[#D4A574]/30 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-[#D4A574]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Registered Office</h3>
                  <p className="text-xs text-white/60">Kolkata</p>
                </div>
              </div>
              <div className="space-y-1 text-white/80 text-sm leading-relaxed">
                <p>1A, 1B & 2A, 1st & 2nd Floors,</p>
                <p>Annapoorna Apartment, 5H,</p>
                <p>Cornfield Road, Ballygunge,</p>
                <p>Kolkata – 700019,</p>
                <p>West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Branch Office */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full hover:border-[#D4A574]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-xl flex items-center justify-center group-hover:bg-[#D4A574]/30 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-[#D4A574]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Branch Office</h3>
                  <p className="text-xs text-white/60">Mumbai</p>
                </div>
              </div>
              <div className="space-y-1 text-white/80 text-sm leading-relaxed">
                <p>117A & 117B, 1st Floor,</p>
                <p>Kuber Complex, 47, New Link Road,</p>
                <p>Opposite Laxmi Industrial Estate,</p>
                <p>Andheri (W), Mumbai – 400047,</p>
                <p>Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full hover:border-[#D4A574]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-xl flex items-center justify-center group-hover:bg-[#D4A574]/30 transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#D4A574]" />
                </div>
                <h3 className="text-lg font-bold text-white">Get In Touch</h3>
              </div>
              <div className="space-y-4">
                <a
                  href="tel:+919748581082"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 group/link"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-[#D4A574]/30 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm group-hover/link:translate-x-1 transition-transform duration-300">+91 97485 81082</span>
                </a>
                <a
                  href="mailto:kausturi@e365.in"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 group/link"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-[#D4A574]/30 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm group-hover/link:translate-x-1 transition-transform duration-300 break-all">kausturi@e365.in</span>
                </a>
                <a
                  href="mailto:bandhanweddings.e365@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 group/link"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-[#D4A574]/30 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs group-hover/link:translate-x-1 transition-transform duration-300 break-all">bandhanweddings.e365@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social & Copyright */}
        <div className="border-t border-white/10 pt-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm font-medium">Follow Us:</span>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#D4A574]/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group border border-white/20"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#D4A574]/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group border border-white/20"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#D4A574]/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group border border-white/20"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.6-.11-1.5.02-2.15l.87-3.69s-.22-.45-.22-1.1c0-1.04.6-1.81 1.35-1.81.64 0 .95.48.95 1.05 0 .64-.4 1.6-.62 2.49-.18.74.37 1.35 1.1 1.35 1.32 0 2.33-1.39 2.33-3.4 0-1.78-1.28-3.02-3.1-3.02-2.11 0-3.35 1.58-3.35 3.22 0 .64.24 1.32.55 1.69.06.07.07.14.05.21l-.2.84c-.03.13-.11.16-.25.1-1-.46-1.62-1.92-1.62-3.09 0-2.51 1.83-4.82 5.27-4.82 2.77 0 4.92 1.97 4.92 4.6 0 2.75-1.73 4.96-4.13 4.96-.81 0-1.57-.42-1.83-.91l-.5 1.9c-.18.69-.66 1.56-1 2.09A12 12 0 1 0 12 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">
                © {new Date().getFullYear()} Bandhan Weddings. All rights reserved.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/50 text-xs">
                <span>Crafted with</span>
                <Heart className="w-3 h-3 text-[#D4A574] animate-pulse-heart fill-current" />
                <span>for celebrating love</span>
              </div>
            </div>

            {/* Location badges */}
            <div className="flex items-center gap-2">
              {['Kolkata', 'Mumbai', 'Dhaka'].map((city, index) => (
                <div
                  key={city}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium hover:bg-[#D4A574]/30 transition-all duration-300 hover:scale-105 border border-white/20 animate-pop-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative top border with animated dots */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#D4A574] rounded-full animate-ping-slow"></div>
      <div className="absolute top-0 right-1/3 w-2 h-2 bg-[#D4A574] rounded-full animate-ping-slower"></div>

      <style>{`
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

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.08);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pop-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-heart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-pop-in {
          animation: pop-in 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-heart {
          animation: pulse-heart 1.5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
