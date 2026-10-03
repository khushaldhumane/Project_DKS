import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Categories() {
  const sectionRef = useScrollReveal();

  const colorMap = {
    amber: {
      bg: 'bg-amber-100',
      bar: 'bg-amber-400',
    },
    red: {
      bg: 'bg-red-100',
      bar: 'bg-red-500',
    },
    blue: {
      bg: 'bg-blue-100',
      bar: 'bg-blue-500',
    },
    green: {
      bg: 'bg-green-100',
      bar: 'bg-green-500',
    },
    purple: {
      bg: 'bg-purple-100',
      bar: 'bg-purple-500',
    },
    orange: {
      bg: 'bg-orange-100',
      bar: 'bg-orange-500',
    },
    pink: {
      bg: 'bg-pink-100',
      bar: 'bg-pink-500',
    },
  };

  const categories = [
    {
      emoji: '🌾',
      title: 'Grains, Atta, Rice & Dals',
      desc: 'Premium staples — loose & packaged, all trusted brands',
      color: 'amber',
    },
    {
      emoji: '🌶️',
      title: 'Spices, Masalas & Oils',
      desc: 'Authentic regional spices, cold-pressed & refined oils',
      color: 'red',
    },
    {
      emoji: '🥛',
      title: 'Dairy & Daily Essentials',
      desc: 'Fresh milk, paneer, ghee, eggs & bread',
      color: 'blue',
    },
    {
      emoji: '🍎',
      title: 'Fresh Fruits & Vegetables',
      desc: 'Seasonal, locally sourced produce',
      color: 'green',
    },
    {
      emoji: '🧼',
      title: 'Home Care & Personal Care',
      desc: 'Soaps, detergents, toiletries & cleaning supplies',
      color: 'purple',
    },
    {
      emoji: '🍪',
      title: 'Snacks, Biscuits & Beverages',
      desc: 'Tea, coffee, biscuits, namkeen & cold drinks',
      color: 'orange',
    },
    {
      emoji: '🍬',
      title: 'Pooja Items & Miscellaneous',
      desc: 'Agarbatti, camphor, matchbox & everyday sundries',
      color: 'pink',
    },
  ];

  return (
    <section id="categories" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <span id="offerings" className="absolute -top-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 text-center">
            WHAT WE OFFER
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mt-2">
            Everything Your Home Needs, Under One Roof
          </h2>
          <p className="text-lg text-slate-500 mt-4 text-center max-w-2xl mx-auto">
            From staple grains to daily essentials — your complete family grocery store.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((category, index) => {
            const colors = colorMap[category.color] || {
              bg: 'bg-primary-100',
              bar: 'bg-primary-500',
            };

            return (
              <div
                key={category.title}
                className="reveal bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span role="img" aria-label={category.title}>
                    {category.emoji}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-slate-800">
                  {category.title}
                </h3>
                <p className="text-slate-500 text-sm mt-2">
                  {category.desc}
                </p>
                <div
                  className={`w-12 h-1 ${colors.bar} rounded-full mt-4 group-hover:w-20 transition-all duration-300`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
