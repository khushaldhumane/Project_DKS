import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ChevronDown } from 'lucide-react';
import storeConfig from '../config/storeConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    question: 'What is the minimum order for delivery?',
    answer: 'There is no strict minimum order. However, for free delivery, we recommend orders above ₹200.',
  },
  {
    question: 'What payment modes do you accept?',
    answer: 'We accept Cash on Delivery, UPI (Google Pay, PhonePe, Paytm), and bank transfer.',
  },
  {
    question: 'How soon can I expect my delivery?',
    answer: 'Most orders within Allipur are delivered within 1-2 hours. Urgent orders are prioritized.',
  },
];

const Contact = () => {
  const sectionRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="contact" ref={sectionRef} className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-600 uppercase">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2">
            Visit Us or Reach Out Anytime
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            Find our store in Allipur or reach out directly via call or WhatsApp. We are always happy to help with your grocery needs!
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-stretch">
          {/* LEFT Column - Contact Cards */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="reveal bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 text-lg">Store Address</h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {storeConfig.address.full}
                </p>
                <a
                  href={storeConfig.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="reveal bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 text-lg">Call or WhatsApp</h3>
                <div className="mt-1">
                  <a
                    href={`tel:+91${storeConfig.phone}`}
                    className="text-slate-600 hover:text-primary-600 font-medium text-base transition-colors"
                  >
                    +91 {storeConfig.phone}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <a
                    href={`tel:+91${storeConfig.phone}`}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 shadow hover:shadow-md"
                  >
                    <Phone size={14} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${storeConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-green-500 hover:bg-green-600 text-white transition-all duration-300 shadow hover:shadow-md"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="reveal bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600">
                <Clock size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="font-semibold text-slate-800 text-lg">Operating Hours</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Open Now
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <div className="flex justify-between items-center sm:justify-start sm:gap-6">
                    <span className="text-slate-500 font-medium">Mon – Sat:</span>
                    <span className="font-semibold text-slate-700">{storeConfig.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center sm:justify-start sm:gap-6">
                    <span className="text-slate-500 font-medium">Sunday:</span>
                    <span className="font-semibold text-slate-700">{storeConfig.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT Column - Google Maps Embed */}
          <div className="reveal flex flex-col h-full">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex-1 min-h-[300px] lg:min-h-[400px] bg-slate-100">
              <iframe
                src={storeConfig.mapEmbedUrl}
                title="Dhumane Kirana Stores Location Map"
                className="w-full h-full min-h-[300px] lg:min-h-[400px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href={storeConfig.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm hover:underline transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="reveal max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full font-medium text-slate-800 p-4 cursor-pointer flex justify-between items-center text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-primary-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="text-slate-600 text-sm px-4 pb-4 leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
