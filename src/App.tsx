import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookingModal } from './components/BookingModal';

import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { RoomDetails } from './pages/RoomDetails';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Helper component to scroll window to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export const AppContent: React.FC = () => {
  // Global Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    roomId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  const handleOpenBooking = (
    roomId?: string,
    checkIn?: string,
    checkOut?: string,
    guests?: number
  ) => {
    setBookingPrefill({ roomId, checkIn, checkOut, guests });
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPrefill({});
  };

  return (
    <div className="flex flex-col min-h-screen bg-sand-50 selection:bg-haven-700 selection:text-white">
      <ScrollToTop />
      
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
          <Route path="/rooms" element={<Rooms onOpenBooking={handleOpenBooking} />} />
          <Route
            path="/rooms/:roomId"
            element={<RoomDetails onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/facilities"
            element={<Facilities onOpenBooking={() => handleOpenBooking()} />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/about"
            element={<About onOpenBooking={() => handleOpenBooking()} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton variant="floating" />

      {/* Global Booking Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialRoomId={bookingPrefill.roomId}
        initialCheckIn={bookingPrefill.checkIn}
        initialCheckOut={bookingPrefill.checkOut}
        initialGuests={bookingPrefill.guests}
      />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
