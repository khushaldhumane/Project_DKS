import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    text: "We have been buying from Dhumane stores since my father's time. The quality and trust have never wavered. Now with the WhatsApp order system, it's even more convenient!",
    name: 'Ramesh Patil',
    detail: 'Customer since 20+ years',
    initials: 'RP',
  },
  {
    text: 'The best kirana store in Allipur. Shalikrao uncle always ensures we get the freshest items. Their new delivery service is a blessing for our family.',
    name: 'Priya Deshmukh',
    detail: 'Regular customer',
    initials: 'PD',
  },
  {
    text: "I just WhatsApp my grocery list and everything is packed perfectly and delivered to my door. Such a convenient service from a store we've trusted for decades.",
    name: 'Sunil Wankhede',
    detail: 'Customer since 10+ years',
    initials: 'SW',
  },
  {
    text: "Honest weights, fair prices, and genuine products — that's the Dhumane promise. Three generations of my family have shopped here.",
    name: 'Meena Joshi',
    detail: 'Customer since 3 generations',
    initials: 'MJ',
  },
];

const Testimonials = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-primary-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center">
          <p className="uppercase tracking-widest text-primary-600 font-semibold text-sm text-center">
            WHAT CUSTOMERS SAY
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mt-2">
            Trusted by Families for Generations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <Quote
                  className="text-primary-100 absolute top-4 right-4 size-8"
                  aria-hidden="true"
                />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 text-accent-400 fill-accent-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mt-4 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div>
                <div className="w-12 h-0.5 bg-primary-200 rounded-full mt-6" />
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-sm flex-shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-xs">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
