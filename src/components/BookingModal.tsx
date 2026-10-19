import React, { useState, useEffect } from 'react';
import { X, AlertCircle, CheckCircle2, MessageSquare, Copy, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { roomsData } from '../data/rooms';
import { siteConfig } from '../config/site';
import { BookingEnquiry } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
}) => {
  // Form fields
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomId, setRoomId] = useState(initialRoomId || roomsData[0].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(initialGuests || 2);
  const [children, setChildren] = useState(0);
  const [specialRequests, setSpecialRequests] = useState('');

  // UI States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedEnquiry, setCompletedEnquiry] = useState<BookingEnquiry | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Today's date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (initialRoomId) {
      setRoomId(initialRoomId);
    }
    if (initialCheckIn) {
      setCheckIn(initialCheckIn);
    } else {
      // Default tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setCheckIn(tomorrow.toISOString().split('T')[0]);
    }

    if (initialCheckOut) {
      setCheckOut(initialCheckOut);
    } else {
      // Default 3 days after tomorrow
      const dayAfter = new Date();
      dayAfter.setDate(dayAfter.getDate() + 3);
      setCheckOut(dayAfter.toISOString().split('T')[0]);
    }

    if (initialGuests) {
      setAdults(initialGuests);
    }
  }, [initialRoomId, initialCheckIn, initialCheckOut, initialGuests, isOpen]);

  if (!isOpen) return null;

  const selectedRoom = roomsData.find((r) => r.id === roomId) || roomsData[0];

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
  const estimatedTotal = nights > 0 ? nights * selectedRoom.pricePerNightINR : 0;

  // Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!guestName.trim()) {
      newErrors.guestName = 'Guest name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number (minimum 8 digits)';
    }

    if (!checkIn) {
      newErrors.checkIn = 'Please select a check-in date';
    } else if (checkIn < todayStr) {
      newErrors.checkIn = 'Check-in date cannot be in the past';
    }

    if (!checkOut) {
      newErrors.checkOut = 'Please select a check-out date';
    } else if (checkIn && checkOut <= checkIn) {
      newErrors.checkOut = 'Check-out must be at least one day after check-in';
    }

    if (adults < 1) {
      newErrors.adults = 'At least 1 adult guest is required';
    }

    if (adults + children > selectedRoom.maxOccupancy + 1) {
      newErrors.adults = `${selectedRoom.name} accommodates up to ${selectedRoom.maxOccupancy} guests. Please adjust guests or select our Family Suite.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Generate unique demo reference
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const reference = `GH-${new Date().getFullYear()}-${randomHex}`;

    setTimeout(() => {
      setIsSubmitting(false);
      const enquiry: BookingEnquiry = {
        reference,
        guestName,
        email,
        phone,
        roomId: selectedRoom.id,
        roomName: selectedRoom.name,
        checkIn,
        checkOut,
        adults,
        children,
        specialRequests,
        submittedAt: new Date().toISOString(),
        nights,
        estimatedTotalINR: estimatedTotal,
      };
      setCompletedEnquiry(enquiry);
    }, 600);
  };

  const handleCopyReference = () => {
    if (completedEnquiry) {
      navigator.clipboard.writeText(completedEnquiry.reference);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Build WhatsApp prefilled string for the completed enquiry
  const buildWhatsAppEnquiryText = (enquiry: BookingEnquiry) => {
    return (
      `*Green Haven Resort - Booking Enquiry*\n` +
      `Reference: ${enquiry.reference}\n` +
      `Room: ${enquiry.roomName}\n` +
      `Dates: ${enquiry.checkIn} to ${enquiry.checkOut} (${enquiry.nights} night${enquiry.nights! > 1 ? 's' : ''})\n` +
      `Guests: ${enquiry.adults} Adults${enquiry.children > 0 ? `, ${enquiry.children} Children` : ''}\n` +
      `Lead Guest: ${enquiry.guestName}\n` +
      `Phone: ${enquiry.phone}\n` +
      `Email: ${enquiry.email}\n` +
      (enquiry.specialRequests ? `Special Requests: ${enquiry.specialRequests}\n` : '') +
      `Estimated Demo Quote: ${formatCurrency(enquiry.estimatedTotalINR || 0)}\n\n` +
      `_(Frontend Demo Enquiry - Green Haven Resort)_`
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-sand-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-haven-900 text-white px-6 py-5 flex items-center justify-between border-b border-haven-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              <h2 id="booking-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-white">
                {completedEnquiry ? 'Enquiry Submitted' : 'Reserve Your Haven'}
              </h2>
            </div>
            <p className="text-xs text-sand-300 mt-0.5">
              Green Haven Resort • Wayanad, Kerala (Demo Reservation Flow)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-sand-300 hover:text-white hover:bg-haven-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {completedEnquiry ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-haven-950">
                  Enquiry Request Received!
                </h3>
                <p className="text-sm text-sand-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong>{completedEnquiry.guestName}</strong>. Your reservation enquiry for{' '}
                  <strong>{completedEnquiry.roomName}</strong> has been created.
                </p>
              </div>

              {/* Reference Card */}
              <div className="p-4 bg-sand-100 rounded-2xl border border-sand-200 max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between border-b border-sand-200 pb-2.5">
                  <span className="text-xs uppercase tracking-wider text-sand-600 font-semibold">
                    Demo Enquiry Reference
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-bold text-haven-900">
                      {completedEnquiry.reference}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyReference}
                      className="p-1 rounded text-sand-600 hover:text-haven-900 hover:bg-sand-200 cursor-pointer"
                      title="Copy Reference"
                    >
                      {copiedRef ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-sand-700">
                  <div>
                    <span className="text-sand-500 block">Check-in:</span>
                    <strong className="text-sand-900">{completedEnquiry.checkIn}</strong>
                  </div>
                  <div>
                    <span className="text-sand-500 block">Check-out:</span>
                    <strong className="text-sand-900">{completedEnquiry.checkOut}</strong>
                  </div>
                  <div>
                    <span className="text-sand-500 block">Duration:</span>
                    <span className="text-sand-900">{completedEnquiry.nights} Night(s)</span>
                  </div>
                  <div>
                    <span className="text-sand-500 block">Guests:</span>
                    <span className="text-sand-900">
                      {completedEnquiry.adults} Adults
                      {completedEnquiry.children > 0 && `, ${completedEnquiry.children} Children`}
                    </span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-sand-200 flex justify-between items-center">
                    <span className="text-sand-600">Sample Tariff:</span>
                    <span className="font-serif font-bold text-base text-haven-900">
                      {formatCurrency(completedEnquiry.estimatedTotalINR || 0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Demo Notice Alert */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-left text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Frontend Demo Notice:</strong> As this is a frontend-focused preview without a database backend, this enquiry has not been stored or charged. No room is booked or payment requested. You can transmit this enquiry details to our demo WhatsApp line below.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                {siteConfig.contact.whatsappNumber && (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                      buildWhatsAppEnquiryText(completedEnquiry)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-sand-200 hover:bg-sand-300 text-sand-900 font-semibold text-sm transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* ENQUIRY FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Demo Disclaimer Header */}
              <div className="p-3 rounded-xl bg-sand-100 border border-sand-200 text-xs text-sand-700 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-haven-700" />
                  Frontend Booking Demo (No Payment Required)
                </span>
                <span className="text-[11px] text-haven-800 font-semibold uppercase tracking-wider bg-haven-100 px-2 py-0.5 rounded-sm">
                  Instant Preview
                </span>
              </div>

              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1.5">
                  Select Accommodation *
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-300 bg-sand-50 text-sand-900 focus:outline-hidden focus:ring-2 focus:ring-haven-600 focus:bg-white text-sm"
                >
                  {roomsData.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — {formatCurrency(room.pricePerNightINR)} / night (Max {room.maxOccupancy} Guests)
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-sand-500 mt-1 italic">
                  Selected: {selectedRoom.tagline} ({selectedRoom.bedType})
                </p>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1.5">
                    Check-in Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-haven-600 bg-sand-50 focus:bg-white ${
                        errors.checkIn ? 'border-red-500 ring-1 ring-red-500' : 'border-sand-300'
                      }`}
                    />
                  </div>
                  {errors.checkIn && (
                    <p className="text-xs text-red-600 mt-1">{errors.checkIn}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1.5">
                    Check-out Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={checkIn || todayStr}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-haven-600 bg-sand-50 focus:bg-white ${
                        errors.checkOut ? 'border-red-500 ring-1 ring-red-500' : 'border-sand-300'
                      }`}
                    />
                  </div>
                  {errors.checkOut && (
                    <p className="text-xs text-red-600 mt-1">{errors.checkOut}</p>
                  )}
                </div>
              </div>

              {/* Guests Selection */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1.5">
                    Adults (12+ yrs) *
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-sand-300 bg-sand-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-haven-600 focus:bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1.5">
                    Children (0-11 yrs)
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-sand-300 bg-sand-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-haven-600 focus:bg-white"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors.adults && (
                <p className="text-xs text-red-600 -mt-3">{errors.adults}</p>
              )}

              {/* Guest Contact Information */}
              <div className="space-y-4 pt-2 border-t border-sand-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-haven-900">
                  Guest Contact Details
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Varma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-haven-600 bg-sand-50 focus:bg-white ${
                      errors.guestName ? 'border-red-500 ring-1 ring-red-500' : 'border-sand-300'
                    }`}
                  />
                  {errors.guestName && (
                    <p className="text-xs text-red-600 mt-1">{errors.guestName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. anand@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-haven-600 bg-sand-50 focus:bg-white ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-sand-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-haven-600 bg-sand-50 focus:bg-white ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-sand-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-sand-800 uppercase tracking-wider mb-1">
                    Special Requests or Dietary Preferences (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Honeymoon bed decoration, airport pickup request, vegetarian Sadhya..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-sand-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-haven-600 bg-sand-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Live Summary Card */}
              <div className="p-4 bg-haven-50 rounded-2xl border border-haven-200 space-y-2">
                <div className="flex items-center justify-between text-xs text-haven-800">
                  <span className="font-semibold uppercase tracking-wider">Estimated Stay Summary</span>
                  <span>{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
                </div>
                <div className="flex items-baseline justify-between text-haven-950">
                  <span className="text-sm font-medium">
                    {selectedRoom.name} ({adults} Adults{children > 0 ? `, ${children} Children` : ''})
                  </span>
                  <span className="font-serif text-lg font-bold">
                    {formatCurrency(estimatedTotal)}
                  </span>
                </div>
                <p className="text-[11px] text-haven-700">
                  Includes morning breakfast & birdwatching walk • Demo rates (Taxes not applicable)
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-sand-700 hover:bg-sand-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-full text-sm font-semibold text-haven-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Generating Reference...</span>
                  ) : (
                    <>
                      <span>Submit Booking Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
