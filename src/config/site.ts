export const siteConfig = {
  name: "Green Haven Resort",
  shortName: "Green Haven",
  tagline: "Escape to Nature. Experience Serenity.",
  description:
    "Immerse yourself in Kerala's mist-clad hills, lush rainforests, and timeless hospitality at Green Haven Resort. An eco-luxury sanctuary nestled in God's Own Country.",
  
  // Contact details (Configurable - clearly marked demo placeholders)
  contact: {
    address: "Banasura Foothills, Vythiri, Wayanad, Kerala 673576, India",
    displayPhone: "+91 94000 12345",
    // WhatsApp phone number in international format without plus or spaces (e.g. "919400012345")
    // Set to empty string "" or null to simulate unconfigured WhatsApp
    whatsappNumber: "919400012345", 
    email: "enquire@greenhavenresort-demo.com",
    receptionHours: "24 Hours Guest Concierge",
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },

  // Location details for maps
  location: {
    state: "Kerala",
    region: "Wayanad Hills",
    country: "India",
    nearestAirport: "Calicut International Airport (CCJ) - 78 km",
    nearestRailway: "Kozhikode Railway Station (CLT) - 72 km",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125134.78018336338!2d76.0125868!3d11.5540321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba674d812d8a0c7%3A0x6b104ad545a9ca21!2sVythiri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tripadvisor: "https://tripadvisor.com",
    youtube: "https://youtube.com",
  },

  demoNotice: "Demonstration Project: All prices, bookings, and facility details are for presentation purposes only. No actual financial transactions or room guarantees are made.",
};

/**
 * Generates a WhatsApp deep link with encoded message.
 * Returns null if no valid WhatsApp number is configured.
 */
export function getWhatsAppLink(message: string): { url: string; isConfigured: boolean } {
  const cleanNumber = siteConfig.contact.whatsappNumber?.replace(/[^0-9]/g, "");
  
  if (!cleanNumber || cleanNumber.length < 7) {
    return {
      url: "#",
      isConfigured: false,
    };
  }

  const encodedMessage = encodeURIComponent(message);
  return {
    url: `https://wa.me/${cleanNumber}?text=${encodedMessage}`,
    isConfigured: true,
  };
}
