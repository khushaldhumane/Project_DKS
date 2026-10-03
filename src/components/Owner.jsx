import React from 'react';
import { User, Quote } from 'lucide-react';
import storeConfig from '../config/storeConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Owner() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="owner"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-primary-50/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="reveal text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-600 uppercase">
            MEET THE FOUNDER
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2">
            The Person Behind the Promise
          </h2>
        </div>

        {/* Owner Card */}
        <div className="reveal bg-white rounded-3xl shadow-xl p-8 sm:p-12 mt-12 hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: Owner Photo Placeholder */}
            <div className="shrink-0">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center ring-4 ring-primary-100 ring-offset-4">
                <User size={60} className="text-white" />
              </div>
            </div>

            {/* Right: Owner Details & Quote */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-800">
                {storeConfig.owner.name}
              </h3>
              <p className="text-primary-600 font-medium mt-1">
                {storeConfig.owner.title}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-4 mx-auto md:mx-0" />
              <blockquote className="text-slate-600 text-lg italic leading-relaxed mt-6">
                &ldquo;I started this store with one simple belief &mdash; treat every customer like family. 40 years later, that hasn&apos;t changed. Whether you walk in or send us a list, you&apos;ll always get the freshest items, honest measure, and fair price.&rdquo;
              </blockquote>
              <div className="flex justify-center md:justify-start mt-4">
                <Quote className="w-8 h-8 text-primary-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
