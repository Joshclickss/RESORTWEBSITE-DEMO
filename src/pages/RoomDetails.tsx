import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Users,
  CheckCircle2,
  Calendar,
  ArrowLeft,
  MessageSquare,
  Sparkles,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { roomsData } from '../data/rooms';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Badge } from '../components/Badge';
import { siteConfig } from '../config/site';

interface RoomDetailsProps {
  onOpenBooking: (roomId?: string, checkIn?: string, checkOut?: string, guests?: number) => void;
}

export const RoomDetails: React.FC<RoomDetailsProps> = ({ onOpenBooking }) => {
  const { roomId } = useParams<{ roomId: string }>();
  const room = roomsData.find((r) => r.id === roomId) || roomsData[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Date selection states for the inline booking widget
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 3);

  const [checkIn, setCheckIn] = useState(tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(dayAfter.toISOString().split('T')[0]);
  const [guestCount, setGuestCount] = useState(Math.min(2, room.maxOccupancy));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const estimatedTotal = nights * room.pricePerNightINR;

  const handleStartBooking = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(room.id, checkIn, checkOut, guestCount);
  };

  const whatsappMessage = `Hello Green Haven Resort! I am looking into reserving the "${room.name}" from ${checkIn} to ${checkOut} for ${guestCount} guest(s). Could you please provide demo booking details?`;

  return (
    <div className="pb-24">
      {/* Breadcrumb Bar */}
      <div className="bg-sand-100 border-b border-sand-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sand-700 hover:text-haven-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Rooms</span>
          </Link>

          <span className="text-[11px] font-medium text-sand-500 uppercase tracking-widest hidden sm:inline">
            Accommodations • {room.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {room.isPopular && <Badge variant="gold">Most Popular</Badge>}
            <Badge variant="haven">{room.roomSize}</Badge>
            <Badge variant="demo">Demo Presentation</Badge>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-haven-950">
            {room.name}
          </h1>
          <p className="text-sm sm:text-base text-gold-800 font-medium mt-1">
            {room.tagline}
          </p>
        </div>

        {/* Gallery Section */}
        <div className="space-y-3 mb-12">
          {/* Main Large Display Image */}
          <div className="relative h-[380px] sm:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-sand-200 bg-sand-200">
            <ImageWithFallback
              src={room.galleryImages[activeImageIndex] || room.image}
              alt={`${room.name} gallery image ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs pointer-events-none">
              <span className="bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/20">
                Photo {activeImageIndex + 1} of {room.galleryImages.length}
              </span>
              <span className="bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/20">
                View: {room.view}
              </span>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 gap-3">
            {room.galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-gold-500 ring-2 ring-gold-400/50 scale-[0.98]'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Details Left, Booking Widget Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Room Specs, Overview, Features, Amenities */}
          <div className="lg:col-span-7 space-y-10">
            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-sand-100 rounded-3xl border border-sand-200 text-center">
              <div>
                <span className="text-[10px] font-semibold text-sand-500 uppercase tracking-widest block mb-1">
                  Capacity
                </span>
                <span className="font-serif font-bold text-base text-haven-900 flex items-center justify-center gap-1">
                  <Users className="w-4 h-4 text-haven-700" />
                  {room.maxOccupancy} Guests
                </span>
              </div>

              <div>
                <span className="text-[10px] font-semibold text-sand-500 uppercase tracking-widest block mb-1">
                  Bedding
                </span>
                <span className="font-serif font-bold text-sm text-haven-900 truncate block px-1">
                  {room.bedType}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-semibold text-sand-500 uppercase tracking-widest block mb-1">
                  Size
                </span>
                <span className="font-serif font-bold text-base text-haven-900">
                  {room.roomSize}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-semibold text-sand-500 uppercase tracking-widest block mb-1">
                  View
                </span>
                <span className="font-serif font-bold text-xs text-haven-900 truncate block px-1">
                  {room.view}
                </span>
              </div>
            </div>

            {/* Room Story & Long Description */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-haven-950">
                About This Room
              </h3>
              <p className="text-sand-800 text-sm sm:text-base leading-relaxed">
                {room.longDescription}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-haven-950">
                Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-2xl border border-sand-200 flex items-start gap-2.5 text-xs text-sand-800"
                  >
                    <Sparkles className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* All Amenities */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-haven-950">
                Room Amenities & Facilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-sand-800 py-1"
                  >
                    <CheckCircle2 className="w-4 h-4 text-haven-700 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="p-5 bg-sand-50 rounded-2xl border border-sand-200 text-xs text-sand-600 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-sand-800">
                <Clock className="w-4 h-4 text-haven-700" />
                <span>Check-in & Stay Policies</span>
              </div>
              <p>• Check-in begins at 2:00 PM; Check-out is until 11:00 AM.</p>
              <p>• Early check-in is subject to availability and prior confirmation.</p>
              <p>• Demonstration disclaimer: This is a frontend simulation. No actual booking or reservation takes place.</p>
            </div>
          </div>

          {/* Right Column: Sticky Booking Enquiry Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sand-200 space-y-6">
              {/* Tariff Header */}
              <div className="border-b border-sand-200 pb-5">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-serif text-3xl font-bold text-haven-900">
                      {formatCurrency(room.pricePerNightINR)}
                    </span>
                    <span className="text-xs text-sand-500 ml-1">/ night</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-200">
                    Demo Rate
                  </span>
                </div>
                <p className="text-xs text-sand-500 mt-1">
                  Includes gourmet breakfast, estate walks, and evening tea.
                </p>
              </div>

              {/* Interactive Date & Guest Selector Form */}
              <form onSubmit={handleStartBooking} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-sand-700 uppercase tracking-wider mb-1">
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

                  <div>
                    <label className="block text-[11px] font-bold text-sand-700 uppercase tracking-wider mb-1">
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
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-sand-700 uppercase tracking-wider mb-1">
                    Guests (Max {room.maxOccupancy})
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-sand-50 rounded-xl border border-sand-300 text-xs text-sand-900 focus:outline-hidden focus:ring-1 focus:ring-haven-700"
                  >
                    {[...Array(room.maxOccupancy)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Live Cost calculation */}
                <div className="p-4 bg-sand-100 rounded-2xl border border-sand-200 text-xs space-y-2">
                  <div className="flex justify-between text-sand-700">
                    <span>
                      {formatCurrency(room.pricePerNightINR)} × {nights} night(s)
                    </span>
                    <span className="font-semibold text-sand-900">
                      {formatCurrency(estimatedTotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sand-700">
                    <span>Breakfast & Nature Walk</span>
                    <span className="text-emerald-700 font-medium">Included Free</span>
                  </div>
                  <div className="pt-2 border-t border-sand-200 flex justify-between items-baseline font-bold text-haven-950">
                    <span className="font-serif text-sm">Estimated Total</span>
                    <span className="font-serif text-xl">{formatCurrency(estimatedTotal)}</span>
                  </div>
                </div>

                {/* Primary Button: Open Booking Enquiry Modal */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full font-semibold text-xs uppercase tracking-wider text-haven-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-haven-950" />
                  <span>Enquire for These Dates</span>
                </button>
              </form>

              {/* WhatsApp Enquiry Option */}
              {siteConfig.contact.whatsappNumber && (
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Direct Room Enquiry</span>
                  </a>
                </div>
              )}

              {/* Demonstration Notice */}
              <div className="flex items-start gap-2 text-[11px] text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  This frontend demo creates simulation enquiry references. No credit card is charged and no room reservation is made.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
