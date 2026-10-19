import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const showSolidNav = isScrolled || !isHome;

  return (
    <>
      {/* Top Demo Notification Banner */}
      <div className="bg-haven-950 text-sand-200 text-xs py-1.5 px-4 text-center border-b border-haven-800/60 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
          <span>
            <strong>Official Demo:</strong> Welcome to Green Haven Resort, Wayanad. This is a public frontend preview.
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          showSolidNav
            ? 'bg-haven-900/95 backdrop-blur-md shadow-lg py-3 text-white border-b border-haven-800'
            : 'bg-gradient-to-b from-haven-950/80 via-haven-950/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-gold-400 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-full bg-haven-800 border border-gold-400/40 flex items-center justify-center text-gold-300 shadow-inner group-hover:border-gold-300 transition-colors">
                <svg
                  className="w-5 h-5 text-gold-400 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  Green Haven
                  <span className="text-gold-400 font-sans text-xs uppercase tracking-widest font-normal px-1.5 py-0.5 rounded-sm border border-gold-400/30">
                    Kerala
                  </span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-sand-300 font-medium -mt-1">
                  Eco Luxury Sanctuary
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-gold-300 font-semibold'
                        : 'text-sand-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${siteConfig.contact.displayPhone}`}
                className="hidden xl:flex items-center gap-1.5 text-xs text-sand-200 hover:text-gold-300 transition-colors"
                title="Call Resort Reception"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{siteConfig.contact.displayPhone}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-haven-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-haven-950" />
                <span>Book Your Stay</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gold-400 text-haven-950 hover:bg-gold-300 transition-colors flex items-center gap-1"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-sand-200 hover:text-white hover:bg-haven-800 focus:outline-hidden focus:ring-2 focus:ring-gold-400"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-haven-950 border-b border-haven-800 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-haven-800 text-gold-300 font-semibold'
                        : 'text-sand-100 hover:bg-haven-900 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-gold-400" />}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-haven-800 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full text-sm font-semibold text-haven-950 bg-gradient-to-r from-gold-300 to-gold-500 shadow-md text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire / Book Your Stay</span>
                </button>

                <div className="text-center text-xs text-sand-400 pt-1">
                  Reception: {siteConfig.contact.displayPhone}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
