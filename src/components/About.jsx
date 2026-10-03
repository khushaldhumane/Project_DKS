import React from 'react';
import { Store, ShoppingBag, Wheat, Heart } from 'lucide-react';
import storeConfig from '../config/storeConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" ref={sectionRef} className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT column (image/visual side) */}
          <div className="reveal relative bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center overflow-hidden mb-12 lg:mb-0">
            {/* Floating smaller decorative icons */}
            <ShoppingBag
              size={36}
              className="absolute top-8 left-8 text-primary-200 -rotate-12 pointer-events-none"
              aria-hidden="true"
            />
            <Wheat
              size={40}
              className="absolute top-10 right-10 text-primary-200 rotate-12 pointer-events-none"
              aria-hidden="true"
            />
            <Heart
              size={32}
              className="absolute bottom-16 left-12 text-primary-200 rotate-6 pointer-events-none"
              aria-hidden="true"
            />

            {/* Central Store Icon */}
            <div className="flex flex-col items-center justify-center text-center p-6">
              <Store size={96} className="text-primary-300" aria-hidden="true" />
            </div>

            {/* Corner Badge */}
            <div className="absolute bottom-4 right-4 bg-primary-600 text-white rounded-2xl px-4 py-2 font-bold text-xl shadow-lg">
              40+ Years
            </div>
          </div>

          {/* RIGHT column (text side) */}
          <div>
            {/* Section label */}
            <div className="flex items-center space-x-2 text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <span className="w-8 h-0.5 bg-primary-600 rounded-full inline-block" />
              <span>OUR STORY</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight">
              A Legacy of Trust, Built Over 4 Decades
            </h2>

            {/* Paragraph 1 */}
            <p className="reveal text-slate-600 leading-relaxed mt-6">
              Dhumane Kirana Stores was founded over four decades ago in Allipur, Wardha, by Shri Shalikrao Shyamrao Dhumane. What started as a modest neighborhood shop has grown into one of the most trusted kirana stores in the area — built on honest weights, fair prices, and a personal relationship with every customer.
            </p>

            {/* Paragraph 2 */}
            <p className="reveal text-slate-600 leading-relaxed mt-4">
              For over 40 years, we have been the store that families in Allipur turn to for their everyday needs — from staple grains and fresh spices to daily essentials. Our shelves carry the brands you trust, and our service carries the warmth of a family you know.
            </p>

            {/* Paragraph 3 */}
            <p className="reveal text-slate-600 leading-relaxed mt-4">
              We believe that a kirana store isn't just a shop — it's the backbone of a neighborhood. And we are proud to have been yours for over four decades.
            </p>

            {/* Stat Cards */}
            <div className="reveal flex gap-4 sm:gap-6 mt-8">
              <div className="flex-1 bg-primary-50 rounded-xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-bold text-primary-600">40+</span>
                <span className="block text-xs sm:text-sm font-medium text-slate-500 mt-1">Years</span>
              </div>
              <div className="flex-1 bg-primary-50 rounded-xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-bold text-primary-600">3+</span>
                <span className="block text-xs sm:text-sm font-medium text-slate-500 mt-1">Generations Served</span>
              </div>
              <div className="flex-1 bg-primary-50 rounded-xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-bold text-primary-600">1000s</span>
                <span className="block text-xs sm:text-sm font-medium text-slate-500 mt-1">Happy Families</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
