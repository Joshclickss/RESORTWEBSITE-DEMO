import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bed, Eye, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { Room } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Badge } from './Badge';
import { siteConfig } from '../config/site';

interface RoomCardProps {
  room: Room;
  onEnquire: (roomId: string) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onEnquire }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const whatsappMessage = `Hello Green Haven Resort! I would like to enquire about the "${room.name}" (sample rate ${formatCurrency(
    room.pricePerNightINR
  )}/night). Could you provide demo availability for upcoming dates?`;

  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 flex flex-col group">
      {/* Room Photo & Badges */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-sand-200">
        <ImageWithFallback
          src={room.image}
          alt={`${room.name} at Green Haven Resort`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {room.isPopular && (
            <Badge variant="gold" className="shadow-md">
              Most Popular
            </Badge>
          )}
          <Badge variant="haven" className="shadow-md">
            {room.roomSize}
          </Badge>
        </div>

        <div className="absolute top-4 right-4">
          <Badge variant="demo" className="shadow-md">
            Demo Rate
          </Badge>
        </div>

        {/* View Badge bottom right */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
          <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
            View: {room.view}
          </span>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Title */}
          <div className="flex flex-col mb-3">
            <h3 className="font-serif text-2xl font-bold text-haven-950 group-hover:text-haven-700 transition-colors">
              <Link to={`/rooms/${room.id}`}>
                {room.name}
              </Link>
            </h3>
            <p className="text-xs text-gold-700 font-medium tracking-wide mt-0.5">
              {room.tagline}
            </p>
          </div>

          <p className="text-sand-700 text-sm leading-relaxed mb-5 line-clamp-2">
            {room.description}
          </p>

          {/* Key Specs: Occupancy & Bed */}
          <div className="grid grid-cols-2 gap-3 py-3 px-3.5 bg-sand-50 rounded-2xl border border-sand-200 text-xs text-sand-800 mb-5">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-haven-700 shrink-0" />
              <span>Up to {room.maxOccupancy} Guests</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-haven-700 shrink-0" />
              <span className="truncate">{room.bedType}</span>
            </div>
          </div>

          {/* Amenities Pills (show first 4) */}
          <div className="mb-6">
            <div className="text-[11px] font-semibold text-sand-500 uppercase tracking-wider mb-2">
              Included Amenities
            </div>
            <div className="flex flex-wrap gap-1.5">
              {room.amenities.slice(0, 4).map((amenity, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] bg-sand-100 text-sand-800 px-2.5 py-1 rounded-md border border-sand-200/80"
                >
                  <CheckCircle2 className="w-3 h-3 text-haven-600 shrink-0" />
                  <span>{amenity}</span>
                </span>
              ))}
              {room.amenities.length > 4 && (
                <span className="text-[11px] text-sand-500 px-2 py-1">
                  +{room.amenities.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 border-t border-sand-200">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="font-serif text-2xl font-bold text-haven-900">
                {formatCurrency(room.pricePerNightINR)}
              </span>
              <span className="text-xs text-sand-500 ml-1">/ night</span>
            </div>
            <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-200">
              Demo Price
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <Link
              to={`/rooms/${room.id}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-haven-900 bg-sand-100 hover:bg-sand-200 border border-sand-300 transition-colors text-center"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </Link>

            <button
              type="button"
              onClick={() => onEnquire(room.id)}
              className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-semibold text-haven-950 bg-gradient-to-r from-gold-300 to-gold-400 hover:from-gold-200 hover:to-gold-300 shadow-xs transition-colors cursor-pointer text-center"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* WhatsApp Direct Link */}
          {siteConfig.contact.whatsappNumber && (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-medium text-emerald-800 hover:text-emerald-950 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              <span>WhatsApp Quick Enquiry</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
