import React from 'react';
import { ArrowRight, Phone, Clock, Truck, ShieldCheck, ChevronDown } from 'lucide-react';
import storeConfig from '../config/storeConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
  const revealRef = useScrollReveal();

  return (
    <section
      id="home"
      ref={revealRef}
      className="relative min-h-screen flex flex-col justify-between items-center text-white bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle decorative pattern overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Floating organic decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content centered vertically and horizontally */}
      <div className="relative z-10 my-auto max-w-4xl mx-auto flex flex-col items-center text-center py-8">
        {/* Pill badge */}
        <div className="reveal inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 text-primary-200 text-sm border border-white/20 mb-6">
          <span>🏪 Trusted Since 4 Decades</span>
        </div>

        {/* Main headline */}
        <h1 className="reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
          Your Family's{' '}
          <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
            Kirana Store
          </span>
          , Now Just a Message Away.
        </h1>

        {/* Subtitle */}
        <p className="reveal text-lg sm:text-xl text-primary-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dhumane Kirana Stores has been the trusted grocery destination for families in Allipur, Wardha for over 40 years. Now order from the comfort of your home.
        </p>

        {/* CTA buttons */}
        <div className="reveal flex gap-4 flex-wrap justify-center items-center">
          <a
            href="#order"
            className="bg-white hover:bg-primary-50 text-primary-800 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 group"
          >
            <span>Send Grocery List</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`tel:${storeConfig.phone}`}
            className="border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Us</span>
          </a>
        </div>

        {/* Trust badges row */}
        <div className="reveal flex flex-wrap items-center justify-center gap-8 mt-12 pt-4">
          <div className="flex items-center gap-2 text-primary-200/70 text-sm">
            <Clock className="w-4 h-4" />
            <span>40+ Years Legacy</span>
          </div>
          <div className="flex items-center gap-2 text-primary-200/70 text-sm">
            <Truck className="w-4 h-4" />
            <span>Home Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-primary-200/70 text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Quality Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="relative z-10 pb-2">
        <a
          href="#about"
          aria-label="Scroll to next section"
          className="flex flex-col items-center text-white/40 hover:text-white/70 transition-colors animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
