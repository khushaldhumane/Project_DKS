import React from 'react';
import { ClipboardList, Send, Package, ArrowRight } from 'lucide-react';
import storeConfig from '../config/storeConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    step: 1,
    icon: ClipboardList,
    title: 'Write or Snap Your List',
    desc: 'Write your grocery list on paper, type it out, or simply take a photo of your existing list.',
  },
  {
    step: 2,
    icon: Send,
    title: 'Send It to Us',
    desc: `Upload your list on our website or send it directly via WhatsApp to ${storeConfig.phone || '9922719802'}.`,
  },
  {
    step: 3,
    icon: Package,
    title: 'We Pack & Deliver',
    desc: 'We carefully pack your items fresh and deliver to your doorstep — or keep it ready for store pickup!',
  },
];

const HowItWorks = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="howitworks"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal text-center">
          <p className="uppercase tracking-widest text-primary-300 font-semibold text-sm text-center">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mt-2">
            Order in 3 Simple Steps
          </h2>
          <p className="text-lg text-primary-200/70 mt-4 text-center max-w-2xl mx-auto">
            No app needed. No registration required. Just send your list!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="reveal relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                {/* Step number badge */}
                <div className="w-14 h-14 rounded-full bg-accent-400 text-primary-900 font-bold text-xl flex items-center justify-center mx-auto shadow-md">
                  {item.step}
                </div>

                {/* Icon below number */}
                <Icon size={32} className="text-white mt-4 mx-auto" aria-hidden="true" />

                {/* Title */}
                <h3 className="font-semibold text-xl text-white mt-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-primary-200/70 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Connecting line & arrow to next step on desktop */}
                {index < steps.length - 1 && (
                  <>
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute top-[60px] -right-8 w-8 border-t-2 border-dashed border-accent-400/40 z-10"
                    />
                    <div
                      aria-hidden="true"
                      className="hidden md:flex items-center justify-center absolute top-[60px] -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-primary-800/90 border border-white/20 text-accent-400 shadow-md"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
