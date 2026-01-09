import React, { useState } from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Planning Your Dream Wedding",
    excerpt: "Discover the key strategies that will help you plan a memorable celebration without the stress. From budgeting to venue selection, we've got you covered.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    category: "Planning",
    date: "Jan 15, 2026",
    featured: true,
  },
  {
    id: 2,
    title: "Top Wedding Trends for 2026",
    excerpt: "Stay ahead of the curve with the latest wedding trends that are making waves this year. From sustainable celebrations to intimate gatherings.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
    category: "Trends",
    date: "Jan 10, 2026",
    featured: false,
  },
  {
    id: 3,
    title: "Choosing the Perfect Wedding Venue",
    excerpt: "Your venue sets the tone for your entire celebration. Learn how to choose a location that matches your vision and budget perfectly.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    category: "Venues",
    date: "Jan 8, 2026",
    featured: false,
  },
  {
    id: 4,
    title: "Wedding Photography Styles Explained",
    excerpt: "From candid to traditional, understand different photography styles to capture your special day exactly as you envision it.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    category: "Photography",
    date: "Jan 5, 2026",
    featured: false,
  },
  {
    id: 5,
    title: "Budget-Friendly Wedding Ideas That Look Luxurious",
    excerpt: "Create an elegant celebration without breaking the bank. These creative ideas will help you achieve luxury on any budget.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    category: "Budget",
    date: "Jan 3, 2026",
    featured: false,
  },
  {
    id: 6,
    title: "The Ultimate Wedding Day Timeline",
    excerpt: "Master the art of timing with our comprehensive guide to planning your perfect wedding day schedule from start to finish.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    category: "Planning",
    date: "Dec 28, 2025",
    featured: false,
  },
];

const AboutSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Planning", "Trends", "Venues", "Photography", "Budget"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#FFF8F3] to-[#FFE5D9] py-12 md:py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#D4A574]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#8B6F5E]/10 rounded-full blur-2xl animate-float-delay-1"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-[#D4A574]/10 rounded-full blur-xl animate-float-delay-2"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#8B6F5E]/10 rounded-full blur-2xl animate-float-delay-3"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Enhanced Animations */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4 animate-slide-down">
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
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#8B6F5E] tracking-wide mb-4 animate-fade-in-up">
              Wedding Inspiration & Tips
            </h2>
            
            <p className="text-[#8B6F5E]/70 text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up-delay">
              Discover expert advice, trending ideas, and real stories to make your special day unforgettable
            </p>

            {/* Sparkles decoration */}
            <div className="flex justify-center gap-2 mt-4 animate-fade-in-up-delay-2">
              <Sparkles className="w-4 h-4 text-[#D4A574] animate-sparkle-1" />
              <Sparkles className="w-5 h-5 text-[#8B6F5E] animate-sparkle-2" />
              <Sparkles className="w-4 h-4 text-[#D4A574] animate-sparkle-3" />
            </div>
          </div>
        </div>

        {/* Category Filter with Animations */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-scale">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                animation: `slideInFromBottom 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
              className={`px-5 md:px-7 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#D4A574] to-[#8B6F5E] text-white shadow-lg scale-105 animate-pulse-subtle"
                  : "bg-white text-[#8B6F5E] hover:bg-[#D4A574]/10 border border-[#D4A574]/30 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post with Enhanced Animations */}
        {featuredPost && (
          <div className="mb-12 md:mb-16 animate-zoom-in">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-[#D4A574]/20 group relative">
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image Side */}
                <div className="relative h-64 md:h-96 lg:h-[500px] md:col-span-3 overflow-hidden">
                  <div className="absolute top-6 left-6 z-10 animate-bounce-subtle">
                    <span className="bg-gradient-to-r from-[#D4A574] to-[#8B6F5E] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                      <span className="text-lg animate-spin-slow">⭐</span> Featured
                    </span>
                  </div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-10 lg:p-12 md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5 animate-slide-in-right">
                    <span className="bg-[#D4A574]/15 text-[#8B6F5E] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#D4A574]/25 transition-all duration-300">
                      {featuredPost.category}
                    </span>
                    <span className="text-[#8B6F5E]/60 text-sm flex items-center gap-1.5 animate-fade-in">
                      <Calendar className="w-4 h-4 animate-wiggle" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#8B6F5E] mb-4 leading-tight group-hover:text-[#D4A574] transition-colors duration-300 animate-slide-in-right-delay">
                    {featuredPost.title}
                  </h3>

                  <p className="text-[#8B6F5E]/70 text-base md:text-lg mb-6 leading-relaxed animate-slide-in-right-delay-2">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-auto animate-slide-in-right-delay-3">
                    <button className="flex items-center gap-2 text-[#D4A574] font-semibold hover:gap-3 transition-all duration-300 group/btn bg-[#D4A574]/10 px-6 py-3 rounded-full hover:bg-[#D4A574]/20 hover:shadow-lg hover:-translate-x-1">
                      Read More
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Posts Grid with Staggered Animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-xl md:rounded-2xl shadow-md overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 border border-[#D4A574]/20 group flex flex-col h-full relative"
              style={{
                animation: `fadeInUpStagger 0.6s ease-out ${index * 0.15}s forwards`,
                opacity: 0,
              }}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-10"></div>
              
              {/* Image */}
              <div className="relative h-52 md:h-60 overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 animate-slide-in-left">
                  <span className="bg-white/95 backdrop-blur-sm text-[#8B6F5E] px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {post.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 animate-slide-in-right">
                  <span className="bg-white/95 backdrop-blur-sm text-[#8B6F5E] px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-serif font-bold text-[#8B6F5E] mb-3 line-clamp-2 group-hover:text-[#D4A574] transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>

                <p className="text-[#8B6F5E]/70 text-sm md:text-base mb-5 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <button className="text-[#D4A574] font-semibold text-sm flex items-center gap-1 hover:gap-3 transition-all duration-300 group/btn w-full justify-center bg-[#D4A574]/10 py-3 rounded-lg hover:bg-[#D4A574]/20 hover:shadow-md">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
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

        @keyframes fadeInUpStagger {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes pulse-heart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes expand-right {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        @keyframes expand-left {
          from {
            width: 0;
          }
          to {
            width: 4rem;
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

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
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

        @keyframes sparkle-1 {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.8);
          }
        }

        @keyframes sparkle-2 {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes sparkle-3 {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.9) rotate(180deg);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-delay-2 {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-delay-3 {
          animation: float 6.5s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-pulse-heart {
          animation: pulse-heart 2s ease-in-out infinite;
        }

        .animate-expand-right {
          animation: expand-right 1s ease-out forwards;
        }

        .animate-expand-left {
          animation: expand-left 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-zoom-in {
          animation: zoom-in 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }

        .animate-slide-in-right-delay {
          animation: slide-in-right 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-in-right-delay-2 {
          animation: slide-in-right 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-slide-in-right-delay-3 {
          animation: slide-in-right 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-sparkle-1 {
          animation: sparkle-1 1.5s ease-in-out infinite;
        }

        .animate-sparkle-2 {
          animation: sparkle-2 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-sparkle-3 {
          animation: sparkle-3 1.8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;