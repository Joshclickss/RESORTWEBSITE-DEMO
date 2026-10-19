import React from 'react';
import { facilitiesData } from '../data/facilities';
import { FacilityCard } from '../components/FacilityCard';
import { Badge } from '../components/Badge';
import { ShieldAlert, Clock } from 'lucide-react';

interface FacilitiesProps {
  onOpenBooking: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenBooking }) => {
  return (
    <div className="pb-24">
      {/* Header Banner */}
      <section className="bg-haven-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=80"
            alt="Resort facilities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-4">
            Resort Amenities
          </Badge>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-4">
            Facilities & Guest Experiences
          </h1>
          <p className="text-sand-200 text-sm sm:text-base max-w-2xl mx-auto">
            From mountain-fed swimming pools to guided spice trail walks and high-speed fiber internet, every amenity has been curated for thoughtful leisure.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Fictional Demonstration: Facilities details are simulated for portfolio presentation.</span>
          </div>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </section>

      {/* Daily Experience Schedule Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand-100 rounded-3xl p-8 sm:p-12 border border-sand-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-haven-700">
              Complimentary Daily Schedule
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-haven-950 mt-1">
              Curated Daily Activities at Green Haven
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-sand-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>07:00 AM – 08:30 AM</span>
              </div>
              <h4 className="font-serif font-bold text-base text-haven-950">
                Morning Mist Bird Walk
              </h4>
              <p className="text-xs text-sand-600 leading-relaxed">
                Join our resident botanist through 7 acres of aromatic spice trails. Binoculars provided for birding.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-sand-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>04:30 PM – 05:45 PM</span>
              </div>
              <h4 className="font-serif font-bold text-base text-haven-950">
                Kerala High Tea & Cultural Folk
              </h4>
              <p className="text-xs text-sand-600 leading-relaxed">
                Enjoy hot plantation tea, fried banana snacks, and live acoustic pulluvan veena melodies at the pavilion.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-sand-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>07:30 PM – 09:00 PM</span>
              </div>
              <h4 className="font-serif font-bold text-base text-haven-950">
                Fireside Star Gazing
              </h4>
              <p className="text-xs text-sand-600 leading-relaxed">
                Gather around the stone bonfire pit under pristine, light-pollution-free Western Ghats night skies.
              </p>
            </div>
          </div>

          {/* Book Callout */}
          <div className="mt-10 pt-8 border-t border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-sand-700 text-center sm:text-left">
              All resident guests receive complimentary access to all schedules and sports facilities.
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-haven-950 bg-gradient-to-r from-gold-300 to-gold-400 hover:from-gold-200 hover:to-gold-300 transition-colors shadow-xs cursor-pointer"
            >
              Book Your Haven Experience
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
