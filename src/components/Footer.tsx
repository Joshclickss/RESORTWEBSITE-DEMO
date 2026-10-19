import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Compass, ArrowUp, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-haven-950 text-sand-200 border-t border-haven-800">
      {/* Upper Footer: Nature Quote / Aesthetic divider */}
      <div className="border-b border-haven-800/80 py-8 bg-haven-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-haven-800 text-gold-400 border border-gold-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif italic text-sand-100 text-lg">
                "Where the morning mist lingers and tranquility begins."
              </p>
              <p className="text-xs text-sand-400 uppercase tracking-widest mt-0.5">
                Wayanad Hills, Kerala • God's Own Country
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-300 hover:text-gold-400 bg-haven-800/60 hover:bg-haven-800 px-4 py-2 rounded-full border border-haven-700 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-haven-800 border border-gold-400/40 flex items-center justify-center text-gold-300">
                <svg
                  className="w-4 h-4 text-gold-400"
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
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                Green Haven Resort
              </span>
            </div>
            <p className="text-sand-300 text-sm leading-relaxed">
              Nestled along the emerald slopes of Wayanad, Green Haven offers an eco-conscious sanctuary blending traditional Kerala architectural grace with warm hospitality.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-haven-900 border border-haven-700 flex items-center justify-center text-sand-300 hover:text-gold-300 hover:border-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-haven-900 border border-haven-700 flex items-center justify-center text-sand-300 hover:text-gold-300 hover:border-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-haven-900 border border-haven-700 flex items-center justify-center text-sand-300 hover:text-gold-300 hover:border-gold-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 pb-1 border-b border-haven-800 inline-block">
              Explore Resort
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Home & Highlights
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Rooms & Cottages
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Resort Facilities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Photo & Nature Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Our Story & Sustainability
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Accommodation Types */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 pb-1 border-b border-haven-800 inline-block">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/rooms/deluxe-room" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Deluxe Room
                </Link>
              </li>
              <li>
                <Link to="/rooms/premium-garden-view" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Premium Garden View Room
                </Link>
              </li>
              <li>
                <Link to="/rooms/private-cottage" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Private Cottage (Plunge Pool)
                </Link>
              </li>
              <li>
                <Link to="/rooms/family-suite" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Family Suite
                </Link>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-lg bg-haven-900 border border-haven-800 text-xs text-sand-400">
              <span className="text-gold-400 font-semibold block mb-0.5">Check-In / Out</span>
              Check-in from 2:00 PM • Check-out by 11:00 AM
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3.5">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 pb-1 border-b border-haven-800 inline-block">
              Sanctuary Location
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-sand-300">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
              <span>{siteConfig.contact.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-sand-300">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`tel:${siteConfig.contact.displayPhone}`} className="hover:text-gold-300 transition-colors">
                {siteConfig.contact.displayPhone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-sand-300">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-300 transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-sand-300">
              <Clock className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{siteConfig.contact.receptionHours}</span>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-haven-900/80 border border-haven-800 text-sand-300 text-xs flex flex-col sm:flex-row items-center gap-3">
          <AlertCircle className="w-5 h-5 text-gold-400 shrink-0" />
          <div className="flex-1 text-center sm:text-left">
            <strong className="text-sand-100">Public Demonstration Notice:</strong> This website is an interactive frontend demonstration built for presentation purposes. Room availability, rates, phone contacts, and facilities are fictional demo representations. No actual payments are accepted and no booking reservations are confirmed.
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="mt-8 pt-6 border-t border-haven-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400 gap-4">
          <p>© {new Date().getFullYear()} Green Haven Resort Demo. Inspired by Kerala's Nature and Hospitality.</p>
          <p className="flex items-center gap-2">
            <span>Crafted with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
