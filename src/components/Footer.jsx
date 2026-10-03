import { Phone, MapPin, MessageCircle, ShoppingBasket } from 'lucide-react';
import storeConfig from '../config/storeConfig';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'What We Offer', href: '#categories' },
    { label: 'Place Order', href: '#order' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 — Store Info */}
          <div>
            <div className="flex items-center gap-2">
              <ShoppingBasket className="w-6 h-6 text-primary-400" />
              <span className="text-white text-xl font-bold">{storeConfig.name}</span>
            </div>
            <p className="text-slate-400 text-sm mt-2">{storeConfig.tagline}</p>
            <p className="text-slate-400 text-sm mt-4">
              Your trusted family kirana store for all daily grocery and household needs.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${storeConfig.phone}`}
                  className="text-slate-400 text-sm hover:text-primary-400 transition-colors"
                >
                  {storeConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{storeConfig.address.full}</span>
              </div>
            </div>
          </div>

          {/* Column 4 — Order Now CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Order Now</h4>
            <p className="text-slate-400 text-sm">
              Send us your grocery list via WhatsApp or our order form. We'll pack and deliver
              fresh!
            </p>
            <a
              href={`https://wa.me/${storeConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2.5 text-sm font-medium mt-4 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {storeConfig.name}. Serving Allipur with love since 4
            decades.
          </p>
          <p className="text-slate-500 text-sm">
            Made with <span className="text-red-400">❤</span> for Allipur
          </p>
        </div>
      </div>
    </footer>
  );
}
