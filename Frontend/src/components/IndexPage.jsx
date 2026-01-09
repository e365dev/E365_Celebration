import React, { useState } from "react";
import { Send, User, Mail, Phone, Heart } from "lucide-react";

const IndexPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "" });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FFF8F3] via-[#FFF5ED] to-[#FFF8F3] py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4A574]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#8B6F5E]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
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
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#8B6F5E] tracking-wide mb-3">
              Make an Inquiry
            </h2>
            <p className="text-[#8B6F5E]/70 text-sm md:text-base">
              Let us help you plan your perfect celebration
            </p>
          </div>
        </div>

        {/* Form Container with AMAZING 3D effect */}
        <div className="relative perspective-1000">
          {/* 3D Shadow base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F5E]/20 to-[#D4A574]/20 rounded-3xl transform translate-y-8 translate-x-4 blur-2xl opacity-40"></div>
          
          {/* Form Card with 3D Transform */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#D4A574]/20 relative transform-style-3d hover-lift transition-all duration-500">
            {/* Decorative corner elements with depth */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4A574] rounded-tl-3xl opacity-30 z-10 transform translate-z-10"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D4A574] rounded-br-3xl opacity-30 z-10 transform translate-z-10"></div>

            {/* Form Content Wrapper */}
            <div className="px-8 pt-8 md:px-12 md:pt-12 pb-0 relative z-10 bg-white rounded-t-3xl">
              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fade-in shadow-lg transform-3d">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-700 font-medium">Thank you! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 mb-0">
                {/* Name Field */}
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm font-medium text-[#8B6F5E] mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#FFF8F3] border-2 ${
                      errors.name ? "border-red-400" : "border-[#D4A574]/30"
                    } rounded-xl focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 outline-none transition-all duration-300 text-[#8B6F5E] placeholder-[#8B6F5E]/40 shadow-sm hover:shadow-md`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-medium text-[#8B6F5E] mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#FFF8F3] border-2 ${
                      errors.email ? "border-red-400" : "border-[#D4A574]/30"
                    } rounded-xl focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 outline-none transition-all duration-300 text-[#8B6F5E] placeholder-[#8B6F5E]/40 shadow-sm hover:shadow-md`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative group">
                  <label htmlFor="phone" className="block text-sm font-medium text-[#8B6F5E] mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#FFF8F3] border-2 ${
                      errors.phone ? "border-red-400" : "border-[#D4A574]/30"
                    } rounded-xl focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 outline-none transition-all duration-300 text-[#8B6F5E] placeholder-[#8B6F5E]/40 shadow-sm hover:shadow-md`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Submit Button with 3D effect */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#A0435C] to-[#8B3850] text-white py-4 rounded-xl font-semibold text-lg hover:from-[#8B3850] hover:to-[#A0435C] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  {/* 3D shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Floral Image at Form Bottom Edge - Perfect Integration */}
            <div className="w-full relative -mt-0">
              {/* Multi-layered 3D shadows for depth */}
              <div className="absolute -inset-x-0 -bottom-3 h-full bg-gradient-to-t from-[#8B6F5E]/40 to-transparent rounded-b-3xl blur-lg"></div>
              <div className="absolute -inset-x-0 -bottom-5 h-full bg-gradient-to-t from-[#D4A574]/30 to-transparent rounded-b-3xl blur-xl"></div>
              
              <div className="relative">
                {/* Image with permanent 3D depth */}
                <img
                  src="images/form_image.png"
                  alt="Decorative Floral"
                  className="w-full h-56 md:h-64 object-cover object-center block rounded-b-3xl shadow-2xl relative z-10"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(139, 111, 94, 0.4)) brightness(1.08) contrast(1.1)',
                    transform: 'translateZ(20px)',
                    display: 'block'
                  }}
                />
                
                {/* Permanent glossy overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-b-3xl pointer-events-none"></div>
                
                {/* Shimmer animation across image */}
                <div className="absolute inset-0 overflow-hidden rounded-b-3xl">
                  <div className="shimmer-effect"></div>
                </div>
                
                {/* 3D edge glow */}
                <div className="absolute inset-0 rounded-b-3xl border-2 border-white/20 pointer-events-none shadow-inner"></div>
                
                {/* Decorative floating particles */}
                <div className="absolute top-6 right-12 w-2 h-2 bg-[#D4A574] rounded-full animate-float-slow opacity-70"></div>
                <div className="absolute top-12 right-24 w-1.5 h-1.5 bg-[#D4A574] rounded-full animate-float-medium opacity-80" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-8 left-16 w-1.5 h-1.5 bg-[#8B6F5E] rounded-full animate-float-fast opacity-60" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-12 left-12 w-2 h-2 bg-[#C08B8B]/80 rounded-full animate-float-medium opacity-70" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional decorative text */}
        <p className="text-center text-[#8B6F5E]/60 text-sm mt-12 italic">
          We typically respond within 24 hours
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) translateX(5px);
            opacity: 1;
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
            opacity: 1;
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-25px) translateX(8px);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 3s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 2.5s ease-in-out infinite;
        }

        /* Shimmer effect */
        .shimmer-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 3s ease-in-out infinite;
        }

        /* 3D Transform Styles */
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .hover-lift:hover {
          transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
          box-shadow: 
            0 30px 60px -12px rgba(139, 111, 94, 0.35),
            0 18px 36px -18px rgba(0, 0, 0, 0.3),
            inset 0 -3px 10px rgba(255, 255, 255, 0.3);
        }

        .transform-3d {
          transform: translateZ(10px);
        }

        .translate-z-10 {
          transform: translateZ(10px);
        }

        /* Input focus 3D effect */
        input:focus {
          transform: translateY(-2px) translateZ(5px);
          box-shadow: 0 8px 16px rgba(212, 165, 116, 0.2);
        }

        /* Smooth transitions */
        input, button {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }

        /* Enhanced shadow for realism */
        .shadow-2xl {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 15px rgba(139, 111, 94, 0.1);
        }

        /* 3D button press effect */
        button:active:not(:disabled) {
          transform: translateY(2px) scale(0.98);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default IndexPage;
