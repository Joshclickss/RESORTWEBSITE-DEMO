import React from 'react';
import { Waves, Utensils, Wifi, Compass, Gamepad2, Car, Clock, Check } from 'lucide-react';
import { Facility } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface FacilityCardProps {
  facility: Facility;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Waves':
        return <Waves className="w-5 h-5 text-haven-700" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-haven-700" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-haven-700" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-haven-700" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-haven-700" />;
      case 'Car':
        return <Car className="w-5 h-5 text-haven-700" />;
      default:
        return <Compass className="w-5 h-5 text-haven-700" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 flex flex-col group">
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-sand-200">
        <ImageWithFallback
          src={facility.image}
          alt={facility.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Icon Floating Badge */}
        <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-md border border-sand-200">
          {getIcon(facility.iconName)}
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-haven-950 mb-1 group-hover:text-haven-700 transition-colors">
            {facility.name}
          </h3>
          <p className="text-xs text-gold-700 font-medium mb-3">
            {facility.tagline}
          </p>
          <p className="text-sand-700 text-sm leading-relaxed mb-4">
            {facility.description}
          </p>

          {/* Operating Schedule */}
          <div className="flex items-center gap-2 text-xs text-sand-600 bg-sand-50 py-2 px-3 rounded-xl border border-sand-200 mb-4">
            <Clock className="w-4 h-4 text-haven-700 shrink-0" />
            <span className="font-medium truncate">{facility.hours}</span>
          </div>

          {/* Features list */}
          <div className="space-y-1.5">
            {facility.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-sand-700">
                <Check className="w-3.5 h-3.5 text-haven-600 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-sand-200 flex items-center justify-between text-[11px] text-sand-500">
          <span>Complimentary for Resident Guests</span>
          <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-sm">Demo Facility</span>
        </div>
      </div>
    </div>
  );
};
