import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Coffee,
  Trees,
  ArrowRight,
  Star,
  Quote,
  MapPin,
  Phone,
  Calendar
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { RoomCard } from '../components/RoomCard';
import { FacilityCard } from '../components/FacilityCard';
import { GalleryGrid } from '../components/GalleryGrid';
import { roomsData } from '../data/rooms';
import { facilitiesData } from '../data/facilities';
import { testimonialsData } from '../data/testimonials';
import { siteConfig } from '../config/site';

interface HomeProps {
  onOpenBooking: (roomId?: string, checkIn?: string, checkOut?: string, guests?: number) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Hero Section */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Resort Introduction & Kerala Essence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-haven-100 text-haven-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-haven-700" />
              <span>Authentic Kerala Hospitality</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-haven-950 leading-tight">
              A Living Sanctuary in God's Own Country
            </h2>

            <p className="text-sand-700 text-base sm:text-lg leading-relaxed">
              Tucked away in the bio-diverse Western Ghats of Wayanad, Green Haven Resort was envisioned as an unhurried haven where ancient timber architecture meets untouched tropical wilderness. 
            </p>

            <p className="text-sand-600 text-sm sm:text-base leading-relaxed">
              Wake each morning to birdsong, the aroma of crushed cardamom leaves, and gentle mist gliding through the valley. Whether you choose to unwind in our infinity pool or take an evening nature walk, every hour is dedicated to effortless renewal.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-haven-800 hover:text-haven-600 border-b-2 border-gold-500 pb-1"
              >
                <span>Read Our Heritage Story</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg h-60 sm:h-72 border border-sand-200">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                  alt="Kerala Resort Architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 rounded-3xl bg-haven-900 text-white shadow-lg border border-haven-800">
                <span className="font-serif text-3xl font-bold text-gold-300 block mb-1">
                  12+ Acres
                </span>
                <span className="text-xs uppercase tracking-wider text-sand-300 font-medium">
                  Protected Natural Spice Estate
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-3xl bg-sand-200 text-sand-900 shadow-md border border-sand-300">
                <span className="font-serif text-3xl font-bold text-haven-900 block mb-1">
                  100%
                </span>
                <span className="text-xs uppercase tracking-wider text-sand-700 font-medium">
                  Eco-Conscious Architecture
                </span>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-60 sm:h-72 border border-sand-200">
                <img
                  src="https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80"
                  alt="Lush rainforest trail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Resort Highlights (Pillars) */}
      <section className="bg-haven-900 text-white py-20 border-y border-haven-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              The Haven Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-sand-50">
              Rooted in Nature, Defined by Luxury
            </h2>
            <p className="text-sand-300 text-sm mt-3">
              Crafted around the elements of Earth, Water, and Forest to offer guests deep relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-haven-950/70 p-7 rounded-3xl border border-haven-800 hover:border-gold-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-haven-800 text-gold-400 flex items-center justify-center mb-5 border border-gold-500/20">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Tropical Wilderness
              </h3>
              <p className="text-xs text-sand-300 leading-relaxed">
                Surrounded by indigenous spice plants, ancient teak groves, and wild mountain streams.
              </p>
            </div>

            <div className="bg-haven-950/70 p-7 rounded-3xl border border-haven-800 hover:border-gold-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-haven-800 text-gold-400 flex items-center justify-center mb-5 border border-gold-500/20">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Malabar Gastronomy
              </h3>
              <p className="text-xs text-sand-300 leading-relaxed">
                Farm-to-fork meals prepared with single-origin pepper, fresh coconut milk, and organic estate herbs.
              </p>
            </div>

            <div className="bg-haven-950/70 p-7 rounded-3xl border border-haven-800 hover:border-gold-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-haven-800 text-gold-400 flex items-center justify-center mb-5 border border-gold-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Ayurvedic Wellness
              </h3>
              <p className="text-xs text-sand-300 leading-relaxed">
                Daily guided yoga, pranayama, and holistic herbal therapies inspired by centuries of Kerala healing.
              </p>
            </div>

            <div className="bg-haven-950/70 p-7 rounded-3xl border border-haven-800 hover:border-gold-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-haven-800 text-gold-400 flex items-center justify-center mb-5 border border-gold-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Sustainable Luxury
              </h3>
              <p className="text-xs text-sand-300 leading-relaxed">
                Zero single-use plastics, solar energy, rainwater harvesting, and local artisan empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Rooms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-haven-100 text-haven-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Accommodations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-haven-950">
              Thoughtfully Curated Havens
            </h2>
            <p className="text-sand-600 text-sm mt-2 max-w-xl">
              Each room and cottage features traditional Kerala teak detailing, private verandahs, and sweeping nature views.
            </p>
          </div>

          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-sm font-semibold text-haven-800 hover:text-haven-600 group"
          >
            <span>View All Accommodations</span>
            <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roomsData.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onEnquire={(roomId) => onOpenBooking(roomId)}
            />
          ))}
        </div>
      </section>

      {/* 5. Facilities Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-haven-700">
            Resort Facilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-haven-950">
            Designed for Serene Living
          </h2>
          <p className="text-sand-600 text-sm mt-2">
            From our panoramic horizon pool to secluded meditation decks, discover amenities designed to delight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilitiesData.slice(0, 3).map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-haven-950 bg-sand-200 hover:bg-sand-300 border border-sand-300 transition-colors shadow-xs"
          >
            <span>Explore All 6 Facilities</span>
            <ArrowRight className="w-4 h-4 text-haven-800" />
          </Link>
        </div>
      </section>

      {/* 6. Photo Gallery Preview */}
      <section className="bg-sand-100 py-20 border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-haven-700">
                Visual Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1 text-haven-950">
                Moments of Serenity
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-haven-800 hover:text-gold-700"
            >
              <span>Open Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid with 6 curated photos */}
          <GalleryGrid limit={6} showFilters={false} />
        </div>
      </section>

      {/* 7. Guest Testimonials (Clearly labelled as demo content) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-2">
            <span>Fictional Demo Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-haven-950">
            What Our Guests Cherish
          </h2>
          <p className="text-sand-600 text-xs sm:text-sm mt-1">
            Read representative sample feedback demonstrating our hospitality values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-7 border border-sand-200 shadow-sm flex flex-col justify-between relative group hover:border-haven-300 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-gold-400/40 mb-3" />
                <div className="flex items-center gap-1 mb-4 text-gold-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sand-700 text-sm italic leading-relaxed mb-6">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-sand-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-haven-950 text-sm">
                    {test.name}
                  </h4>
                  <span className="text-xs text-sand-500 block">{test.location}</span>
                </div>
                <span className="text-[10px] bg-sand-100 text-haven-800 font-medium px-2 py-1 rounded-md">
                  {test.roomStayed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Location & Booking Preview Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-haven-950 via-haven-900 to-haven-800 text-white p-8 sm:p-14 shadow-2xl border border-haven-800 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-300">
                Begin Your Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-white">
                Ready to Experience <br />
                <span className="text-gold-200 italic font-normal">
                  Green Haven's Serenity?
                </span>
              </h2>
              <p className="text-sand-300 text-sm sm:text-base max-w-xl">
                Choose your desired dates and room to generate an interactive demo enquiry reference or connect directly with our reservation team.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-sand-300">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  {siteConfig.location.region}, {siteConfig.location.state}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-400" />
                  {siteConfig.contact.displayPhone}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full py-4 px-6 rounded-full font-semibold text-sm uppercase tracking-wider text-haven-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 shadow-xl transition-all duration-200 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-haven-950" />
                <span>Reserve Demo Stay</span>
              </button>

              <Link
                to="/contact"
                className="w-full py-3.5 px-6 rounded-full font-semibold text-xs uppercase tracking-wider text-sand-100 hover:text-white bg-haven-800/80 hover:bg-haven-800 border border-haven-700 transition-colors text-center"
              >
                View Directions & Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
