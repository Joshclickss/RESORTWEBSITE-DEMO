import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Compass, Users } from 'lucide-react';
import { roomsData } from '../data/rooms';

interface HeroProps {
  onOpenBooking: (roomId?: string, checkIn?: string, checkOut?: string, guests?: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 3);

  const [selectedRoom, setSelectedRoom] = useState(roomsData[0].id);
  const [checkIn, setCheckIn] = useState(tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(dayAfter.toISOString().split('T')[0]);
  const [guests, setGuests] = useState(2);

  const handleHeroCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedRoom, checkIn, checkOut, guests);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with layered gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85"
          alt="Green Haven Resort Kerala nature landscape"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-haven-950/90 via-haven-950/60 to-haven-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-haven-950 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white flex flex-col items-center text-center">
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-haven-900/80 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-lg">
          <Compass className="w-3.5 h-3.5 text-gold-400" />
          <span>Wayanad Foothills, Kerala • God's Own Country</span>
        </div>

        {/* Hero Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6 drop-shadow-md">
          Escape to Nature. <br />
          <span className="italic font-normal text-gold-200">
            Experience Serenity.
          </span>
        </h1>

        {/* Short Resort Introduction */}
        <p className="text-sand-200 text-base sm:text-xl max-w-2xl font-light leading-relaxed mb-10 drop-shadow-sm">
          Immerse your senses in mist-kissed hills, private pool cottages, and the timeless warmth of authentic Kerala luxury hospitality.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            to="/rooms"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-haven-800 hover:bg-haven-700 border border-haven-600/80 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Explore Rooms
          </Link>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-haven-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Your Stay</span>
            <ArrowRight className="w-4 h-4 text-haven-950" />
          </button>
        </div>

        {/* Interactive Booking Strip / Quick Search Bar */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 shadow-2xl border border-white/40 text-sand-900 text-left">
          <div className="flex items-center justify-between px-2 pb-3 border-b border-sand-200/80 text-xs">
            <span className="font-semibold text-haven-900 flex items-center gap-1.5 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-haven-700" />
              Quick Stay Search (Demo)
            </span>
            <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-200 text-[11px]">
              No credit card required
            </span>
          </div>

          <form onSubmit={handleHeroCheckAvailability} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-3">
            {/* Room choice */}
            <div>
              <label className="block text-[11px] font-bold text-sand-600 uppercase tracking-wider mb-1">
                Accommodation
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full px-3 py-2 bg-sand-50 rounded-xl border border-sand-300 text-xs text-sand-900 focus:outline-hidden focus:ring-1 focus:ring-haven-700"
              >
                {roomsData.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-In */}
            <div>
              <label className="block text-[11px] font-bold text-sand-600 uppercase tracking-wider mb-1">
                Check-in
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 bg-sand-50 rounded-xl border border-sand-300 text-xs text-sand-900 focus:outline-hidden focus:ring-1 focus:ring-haven-700"
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-[11px] font-bold text-sand-600 uppercase tracking-wider mb-1">
                Check-out
              </label>
              <input
                type="date"
                min={checkIn}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 bg-sand-50 rounded-xl border border-sand-300 text-xs text-sand-900 focus:outline-hidden focus:ring-1 focus:ring-haven-700"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-[11px] font-bold text-sand-600 uppercase tracking-wider mb-1">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-3 py-2 bg-sand-50 rounded-xl border border-sand-300 text-xs text-sand-900 focus:outline-hidden focus:ring-1 focus:ring-haven-700"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Submit */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-haven-800 hover:bg-haven-700 shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Check Tariff</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
