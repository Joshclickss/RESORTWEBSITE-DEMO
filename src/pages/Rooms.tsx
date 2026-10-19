import React, { useState } from 'react';
import { roomsData } from '../data/rooms';
import { RoomCard } from '../components/RoomCard';
import { Badge } from '../components/Badge';
import { Check, ShieldAlert } from 'lucide-react';

interface RoomsProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onOpenBooking }) => {
  const [filterOccupancy, setFilterOccupancy] = useState<number | 'all'>('all');

  const filteredRooms = roomsData.filter((room) => {
    if (filterOccupancy === 'all') return true;
    return room.maxOccupancy >= filterOccupancy;
  });

  return (
    <div className="pb-24">
      {/* Header Banner */}
      <section className="bg-haven-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=80"
            alt="Resort bedrooms"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-4">
            Sanctuary Accommodations
          </Badge>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-4">
            Rooms & Private Cottages
          </h1>
          <p className="text-sand-200 text-sm sm:text-base max-w-2xl mx-auto">
            Experience restful sleep amidst ancient teak furnishings, private shaded balconies, and unobstructed views of Kerala's mountain slopes.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Demonstration Information: Tariffs and availability are for presentation only.</span>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-lg border border-sand-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold text-sand-700 uppercase tracking-wider">
            Showing {filteredRooms.length} Curated Accommodations
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs text-sand-500">Filter by Guests:</span>
            <div className="flex items-center gap-1.5">
              {[
                { label: 'All', value: 'all' },
                { label: '2+ Guests', value: 2 },
                { label: '3+ Guests', value: 3 },
                { label: '5+ Guests', value: 5 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setFilterOccupancy(opt.value as number | 'all')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    filterOccupancy === opt.value
                      ? 'bg-haven-900 text-white'
                      : 'bg-sand-100 hover:bg-sand-200 text-sand-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Room Listing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onEnquire={(roomId) => onOpenBooking(roomId)}
            />
          ))}
        </div>
      </section>

      {/* Inclusions & Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-sand-100 rounded-3xl p-8 sm:p-12 border border-sand-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-haven-700">
              Every Stay Includes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-haven-950 mt-1 mb-6">
              Complimentary Experiences With Every Room
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-sand-200">
              <div className="w-8 h-8 rounded-full bg-haven-100 text-haven-700 flex items-center justify-center mb-3">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-haven-900 text-sm mb-1">
                Artisanal Kerala Breakfast
              </h4>
              <p className="text-xs text-sand-600">
                Fresh appams, stew, seasonal tropical fruit juices, and Malabar coffee.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-sand-200">
              <div className="w-8 h-8 rounded-full bg-haven-100 text-haven-700 flex items-center justify-center mb-3">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-haven-900 text-sm mb-1">
                Guided Morning Bird Walk
              </h4>
              <p className="text-xs text-sand-600">
                Naturalist-led walk through spice trails to spot endemic Western Ghats birds.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-sand-200">
              <div className="w-8 h-8 rounded-full bg-haven-100 text-haven-700 flex items-center justify-center mb-3">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-haven-900 text-sm mb-1">
                Horizon Pool & Wi-Fi
              </h4>
              <p className="text-xs text-sand-600">
                Unrestricted access to the panoramic infinity pool and high-speed fiber internet.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-sand-200">
              <div className="w-8 h-8 rounded-full bg-haven-100 text-haven-700 flex items-center justify-center mb-3">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-haven-900 text-sm mb-1">
                Traditional Evening High Tea
              </h4>
              <p className="text-xs text-sand-600">
                Hot Wayanad tea and savory Kerala fritters served at the sunset garden pavilion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
