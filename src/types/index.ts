export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  pricePerNightINR: number;
  maxOccupancy: number;
  bedType: string;
  roomSize: string;
  view: string;
  image: string;
  galleryImages: string[];
  amenities: string[];
  features: string[];
  isPopular?: boolean;
}

export interface Facility {
  id: string;
  name: string;
  tagline: string;
  description: string;
  hours: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'property' | 'dining' | 'facilities';
  image: string;
  alt: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  roomStayed: string;
}

export interface BookingEnquiry {
  reference: string;
  guestName: string;
  email: string;
  phone: string;
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  specialRequests?: string;
  submittedAt: string;
  estimatedTotalINR?: number;
  nights?: number;
}
