import React, { useState } from 'react';
import { ShoppingBasket, Menu, X } from 'lucide-react';
import storeConfig from '../config/storeConfig';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'What We Offer', href: '#offerings' },
  { name: 'Place Order', href: '#order' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary-600 to-primary-400 w-full" />

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-primary-700 font-bold text-xl sm:text-2xl tracking-tight hover:text-primary-800 transition-colors"
          >
            <ShoppingBasket className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 flex-shrink-0" />
            <span>{storeConfig.name}</span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-primary-600 font-medium py-1 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#order"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Send Grocery List
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-primary-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-6 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col space-y-3 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-primary-600 font-medium py-2 px-2 rounded-md hover:bg-slate-50 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 inline-block w-fit"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#order"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                Send Grocery List
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
