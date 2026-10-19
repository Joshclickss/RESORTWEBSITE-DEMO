import { Room } from '../types';

export const roomsData: Room[] = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Serene comfort overlooking evergreen spice plantations",
    description: "Generously sized room featuring hand-carved teakwood furnishings, private balcony, and soothing forest panoramas.",
    longDescription: "Our Deluxe Rooms are crafted to harmonize traditional Kerala architecture with contemporary luxury. Wake up to the musical calls of Malabar whistling thrushes and breathe in fresh mountain mist from your private shaded verandah. Features artisanal wood finishes, high ceilings for natural ventilation, and a plush king bed draped in organic cotton linens.",
    pricePerNightINR: 7500,
    maxOccupancy: 2,
    bedType: "1 King Bed or 2 Twin Beds",
    roomSize: "420 sq ft (39 m²)",
    view: "Spice Plantation & Forest Canopy",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-speed Wi-Fi",
      "Private Balcony",
      "Rainfall Shower",
      "Herbal Tea & Coffee Station",
      "Climate Control AC",
      "Safe Deposit Box",
      "Organic Ayurvedic Toiletries",
      "Daily Housekeeping"
    ],
    features: [
      "Traditional Kerala terracotta floor tiles",
      "Panoramic views of pepper and cardamom groves",
      "Handcrafted wooden lounge chairs on deck",
      "Complimentary morning birdwatching walk"
    ],
    isPopular: false
  },
  {
    id: "premium-garden-view",
    name: "Premium Garden View Room",
    tagline: "Lush tropical botanical gardens right at your doorstep",
    description: "Expanded living space with direct access to curated botanical gardens, lotus ponds, and open-air shower alcoves.",
    longDescription: "Set along the gently curving garden pathways of Green Haven, this room offers immediate communion with Kerala's rich flora. Designed with an open-concept flow, it features a semi-open tropical bathroom with a stone rain shower, oversized daybed, and generous outdoor patio surrounded by native orchids and banana palms.",
    pricePerNightINR: 10500,
    maxOccupancy: 3,
    bedType: "1 King Bed + 1 Daybed",
    roomSize: "560 sq ft (52 m²)",
    view: "Botanical Gardens & Lotus Pond",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-speed Wi-Fi",
      "Walk-out Garden Patio",
      "Semi-open Stone Rain Shower",
      "Mini Bar & Kettle",
      "Smart Flat Screen TV",
      "Natural Linen Robes",
      "Organic Ayurvedic Toiletries",
      "24/7 Concierge Service"
    ],
    features: [
      "Private garden deck with teak deck loungers",
      "Sunlit semi-open ensuite bathroom with granite basin",
      "Curated library of regional wildlife and botanical books",
      "Herbal evening turndown beverage service"
    ],
    isPopular: true
  },
  {
    id: "private-cottage",
    name: "Private Cottage",
    tagline: "Secluded sanctuary with traditional pitched roof and plunge pool deck",
    description: "Standalone Kerala-style villa offering ultimate tranquility, private timber deck, personal plunge plunge jacuzzi, and panoramic valley vista.",
    longDescription: "Inspired by ancient Nalukettu courtyard architecture, our standalone Private Cottages provide the utmost in intimacy and seclusion. Each cottage stands surrounded by dense greenery and features a spacious bedroom, bespoke timber furniture, outdoor sun deck, and a private plunge pool facing the morning sun.",
    pricePerNightINR: 16000,
    maxOccupancy: 2,
    bedType: "1 Grand King Four-Poster Bed",
    roomSize: "850 sq ft (79 m²)",
    view: "Banasura Mist Valley & Rainforest",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Private Plunge Pool / Jacuzzi",
      "Generous Teak Sun Deck",
      "High-speed Wi-Fi",
      "Nespresso & Artisanal Tea bar",
      "Deep Soaking Freestanding Tub",
      "Bose Bluetooth Audio System",
      "Ayurvedic Bath Salts & Oils",
      "Private In-Cottage Dining Option"
    ],
    features: [
      "Completely standalone architectural villa",
      "Unobstructed views of emerald mountain ranges",
      "High timber-beamed roof designed for tranquil acoustics",
      "Complimentary high-tea served at cottage verandah"
    ],
    isPopular: true
  },
  {
    id: "family-suite",
    name: "Family Suite",
    tagline: "Spacious dual-bedroom haven tailored for memorable shared moments",
    description: "Two interconnected bedrooms, central living lounge, dining nook, and a wraparound balcony offering expansive nature views.",
    longDescription: "Crafted specifically for families and groups traveling together, the Family Suite blends spacious shared communal areas with private sleeping quarters. It features a master suite with a king bed, a second bedroom with twin beds, an inviting living room with handwoven Kerala rugs, and a wide wraparound balcony with seating for four.",
    pricePerNightINR: 19500,
    maxOccupancy: 5,
    bedType: "1 Master King + 2 Twin Beds + 1 Rollaway",
    roomSize: "1,100 sq ft (102 m²)",
    view: "Panoramic Plantation & Valley",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Two Separate Bedrooms & Bathrooms",
      "Central Living Lounge & Dining Table",
      "Wraparound Forest Balcony",
      "High-speed Wi-Fi & Two Smart TVs",
      "Mini Fridge & Beverage Station",
      "Child-safe balcony barriers",
      "Deluxe Ayurvedic Toiletries",
      "Dedicated Butler Support"
    ],
    features: [
      "Interconnecting layout for privacy and togetherness",
      "Board games & indoor activity basket included",
      "Spacious dining table for family breakfasts",
      "Complimentary evening bonfire experience"
    ],
    isPopular: false
  }
];
