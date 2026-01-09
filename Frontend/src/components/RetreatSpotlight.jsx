import React, { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const retreats = [
  {
    id: 1,
    title: "Turnkey Wedding Services",
    category: "Weddings",
    description:
      "End-to-end wedding planning covering every ritual and tradition of the family. From concept to execution, we manage everything so you can focus on celebrating with your loved ones.",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Curated Wedding Services",
    category: "Weddings",
    description:
      "Handpicked services designed specifically for your special day. We collaborate closely with your family and existing service providers to deliver perfectly tailored wedding solutions.",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "A La Carte Wedding Services",
    category: "Weddings",
    description:
      "Individually selected experiences to complete what may be missing in your celebration planning—be it a grand cake, live band, bridal trousseau, celebrity guest, or other special additions.",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Birthday Celebrations",
    category: "Private Parties",
    description:
      "A celebration that gets younger with every year. From vibrant themes to seamless guest management, we create unforgettable birthday bashes while you enjoy every moment.",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Anniversary Celebrations",
    category: "Private Parties",
    description:
      "Celebrate the milestones of your love story year after year. We help you relive cherished memories with thoughtfully planned anniversary celebrations, even amidst busy schedules.",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1525328302834-764f32276842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Private Events",
    category: "Private Parties",
    description:
      "From baby showers and rice ceremonies to bachelorettes, engagements, intimate dates, and social gatherings, we take care of every detail so you can host stress-free events.",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Tour Planning",
    category: "Destination Events",
    description:
      "With nearly two decades of expertise, our tour planners handle everything—from tickets and visas to accommodations, transport, venues, sightseeing, and seamless check-ins and checkouts.",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Offshore Celebrations",
    category: "Destination Events",
    description:
      "Luxury celebrations at stunning destinations. From themes and décor to catering, music, lighting, florals, and makeup, we curate royal experiences where you live every moment to the fullest.",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1511316695145-4992006ffddb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Honeymoons",
    category: "Destination Events",
    description:
      "Exquisite, tailor-made honeymoon experiences crafted for couples seeking luxury, romance, and unforgettable memories. Trust us to design the perfect journey for lovebirds.",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function RetreatSpotlight() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const totalPages = Math.ceil(retreats.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleRetreats = retreats.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FFF8F3] via-[#FFF5ED] to-[#FFF8F3] py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden min-h-screen">
      <div className="absolute top-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-[#D4A574]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-tl from-[#8B6F5E]/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#C08B8B]/5 to-transparent rounded-full blur-3xl animate-pulse-slowest"></div>

      <div className="text-center mb-12 relative z-10 animate-fade-in-up">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light  bg-clip-text bg-gradient-to-r text-[#8B6F5E] tracking-wide animate-gradient-text">
            What We Do
          </h2>
          <p className="text-[#8B6F5E]/70 mt-2 text-sm md:text-base tracking-wider animate-fade-in-delay">
            Discover our exclusive wedding services
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 relative z-10 max-w-7xl mx-auto">
        {visibleRetreats.map((r, index) => (
          <div key={r.id} className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 group animate-fade-in-up-cards" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="relative overflow-hidden">
              <img src={r.image} alt={r.title} className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-[#8B6F5E]/90 backdrop-blur-sm text-white text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-light tracking-wider group-hover:scale-110 transition-transform duration-300">
                {r.category}
              </span>
              <div className="absolute top-3 right-3 w-8 h-8 bg-[#C08B8B]/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-bounce-slow transition-all duration-500">
                <Star size={14} fill="white" className="text-white" />
              </div>
            </div>
            <div className="p-4 sm:p-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl md:rounded-b-3xl"></div>
              <h3 className="text-sm sm:text-base font-medium text-[#8B6F5E] mb-2 sm:mb-3 line-clamp-2 leading-snug group-hover:text-[#C08B8B] transition-colors duration-300 relative z-10">
                {r.title}
              </h3>
              <p className="text-[#8B6F5E]/70 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed group-hover:text-[#8B6F5E] transition-colors duration-300 relative z-10">
                {r.description}
              </p>
              <div className="flex justify-end items-center pt-2 sm:pt-3 border-t border-[#8B6F5E]/10 group-hover:border-[#8B6F5E]/30 transition-colors duration-300 relative z-10">
                <span className="flex items-center text-[#D4A574] group-hover:scale-110 transition-transform duration-300">
                  <Star size={14} fill="currentColor" className="mr-1 group-hover:animate-spin-slow" />
                  <span className="text-[#8B6F5E] font-medium text-sm">{r.rating}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full mt-8 sm:mt-10 md:mt-12 max-w-7xl mx-auto">
        <div className="md:hidden flex items-center justify-center gap-3 sm:gap-4">
          <button onClick={handlePrev} disabled={currentPage === 1} className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md border-2 border-[#8B6F5E]/30 hover:border-[#8B6F5E] hover:bg-[#8B6F5E] hover:text-white hover:scale-110 transition-all duration-300 ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : ""}`}>
            <ChevronLeft size={16} />
          </button>
          <p className="text-[#8B6F5E] text-sm sm:text-base font-light px-2 sm:px-4">{currentPage} / {totalPages}</p>
          <button onClick={handleNext} disabled={currentPage === totalPages} className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md border-2 border-[#8B6F5E]/30 hover:border-[#8B6F5E] hover:bg-[#8B6F5E] hover:text-white hover:scale-110 transition-all duration-300 ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : ""}`}>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-between relative">
          <button onClick={handlePrev} disabled={currentPage === 1} className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/80 shadow-lg border-2 border-[#8B6F5E]/30 hover:border-[#8B6F5E] hover:bg-[#8B6F5E] hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-300 ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : ""}`}>
            <ChevronLeft size={20} />
          </button>
          <div className="text-center">
            <p className="text-[#8B6F5E] text-lg font-light">{currentPage} / {totalPages}</p>
            <div className="flex items-center justify-center space-x-1 mt-2">
              {[...Array(totalPages)].map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i + 1 === currentPage ? "w-8 bg-[#8B6F5E] animate-pulse-glow" : "w-1.5 bg-[#8B6F5E]/20 hover:bg-[#8B6F5E]/40"}`}></div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} disabled={currentPage === totalPages} className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/80 shadow-lg border-2 border-[#8B6F5E]/30 hover:border-[#8B6F5E] hover:bg-[#8B6F5E] hover:text-white hover:scale-110 hover:-rotate-12 transition-all duration-300 ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : ""}`}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulsesSlow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.05); } }
        @keyframes pulseSlower { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.08); } }
        @keyframes pulseSlowest { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.1); } }
        @keyframes expandLeft { from { width: 0; margin-left: auto; } to { width: 4rem; margin-left: 0; } }
        @keyframes expandRight { from { width: 0; margin-right: auto; } to { width: 4rem; margin-right: 0; } }
        @keyframes pulseHeart { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        @keyframes gradientText { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes bounceSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.8; transform: scaleX(1); } 50% { opacity: 1; transform: scaleX(1.2); } }
        .animate-pulse-slow { animation: pulsesSlow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulseSlower 6s ease-in-out infinite; }
        .animate-pulse-slowest { animation: pulseSlowest 8s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-up-cards { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in-delay { animation: fadeInUp 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-fade-in { animation: fadeInUp 0.8s ease-out 0.8s forwards; opacity: 0; }
        .animate-expand-left { animation: expandLeft 1s ease-out; }
        .animate-expand-right { animation: expandRight 1s ease-out; }
        .animate-pulse-heart { animation: pulseHeart 2s ease-in-out infinite; }
        .animate-gradient-text { background-size: 200% 200%; animation: gradientText 5s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 3s linear infinite; }
        .animate-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
