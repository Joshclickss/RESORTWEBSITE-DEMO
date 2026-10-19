# Green Haven Resort — Luxury Kerala Website Demo

A modern, responsive, frontend-focused resort website demo named **Green Haven Resort**, inspired by Kerala's natural landscapes, spice plantations, and luxury hospitality.

> **Demonstration Notice:** This is a public-facing website demo built strictly with frontend capabilities. There is **no admin panel, no staff login, no database, and no payment collection**. All prices, room details, and testimonials are simulated for presentation purposes.

---

## 🌴 Highlights & Features

- **Kerala Luxury Aesthetic:** Forest green (`#132d27`, `#26574a`), cream, sand/beige, and warm gold accents with Playfair Display serif typography.
- **7 Public Pages:**
  1. **Home (`/`):** Hero banner, quick availability search strip, architectural pillars, featured rooms, facilities preview, photo gallery preview, testimonials (clearly labelled demo content), and booking callouts.
  2. **Rooms (`/rooms`):** 4 sample room types (Deluxe Room, Premium Garden View Room, Private Cottage, Family Suite) with occupancy filtering, INR demo pricing, amenities, and enquiry buttons.
  3. **Room Details (`/rooms/:roomId`):** Interactive photo gallery thumbnails, comprehensive specs, architectural highlights, amenities, live stay calculator, and WhatsApp booking trigger.
  4. **Facilities (`/facilities`):** Horizon infinity pool, Elayam Malabar dining, high-speed fiber Wi-Fi, 24/7 valet & EV charging, spice garden nature trails, and recreation pavilion.
  5. **Gallery (`/gallery`):** Responsive grid with category filtering (Rooms, Property, Dining, Facilities) and full-screen keyboard-accessible Lightbox (Esc, Left/Right navigation, image counter).
  6. **About (`/about`):** Heritage story, *Nalukettu* eco-architecture philosophy, and 4 sustainability pillars (solar, rainwater harvesting, zero plastics, local employment).
  7. **Contact (`/contact`):** Interactive contact form with client-side validation, WhatsApp concierge button, transit directions, and embedded Google Map.
- **Functional Booking Enquiry Form:**
  - Date validation (past dates prevented, check-out must be after check-in).
  - Occupancy validation with warnings if room capacity is exceeded.
  - Interactive stay duration and quote summary in INR.
  - Unique demo enquiry reference generator (e.g. `GH-2024-XXXX`).
  - Clear success confirmation screen with copyable reference and WhatsApp transfer option.
- **Configurable WhatsApp Integration:**
  - Floating WhatsApp launcher.
  - Room-specific enquiry buttons with prefilled booking dates and guest counts.
  - Configured in a single centralized file (`src/config/site.ts`).
  - Helper modal if phone number is unconfigured or to copy message.

---

## 🛠️ Technology Stack

- **React 18** (TypeScript)
- **Vite** (Fast dev server & optimized production bundler)
- **Tailwind CSS** (Tailored luxury resort color palette)
- **React Router 6** (Multi-page client routing with scroll-to-top)
- **Lucide React** (Clean modern UI icons)

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18+ (tested on v20+)
- **npm** v9+

### 2. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 3. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to the printed local URL (typically `http://localhost:5173`).

### 4. Production Build
To create an optimized production build:
```bash
npm run build
```

To preview the built production site locally:
```bash
npm run preview
```

---

## ⚙️ Configuration

All site contacts, WhatsApp numbers, resort address, and Google Maps embed links are managed in a single file:

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "Green Haven Resort",
  contact: {
    address: "Banasura Foothills, Vythiri, Wayanad, Kerala 673576, India",
    displayPhone: "+91 94000 12345",
    whatsappNumber: "919400012345", // Country code + phone digits (no '+' or dashes)
    email: "enquire@greenhavenresort-demo.com",
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },
  // ...
};
```

---

## 📁 Project Structure

```
├── public/
│   └── leaf.svg                # Resort branding favicon
├── src/
│   ├── components/
│   │   ├── Badge.tsx           # Reusable luxury tags
│   │   ├── BookingModal.tsx    # Booking enquiry dialog & validation
│   │   ├── FacilityCard.tsx    # Facility card with icons & schedule
│   │   ├── Footer.tsx          # Public footer & demo disclaimer
│   │   ├── GalleryGrid.tsx     # Filterable image grid
│   │   ├── Hero.tsx            # Hero banner & quick search strip
│   │   ├── ImageWithFallback.tsx # Lazy loading image with error fallback
│   │   ├── Lightbox.tsx        # Accessible full-screen photo lightbox
│   │   ├── Navbar.tsx          # Sticky responsive navigation & mobile menu
│   │   ├── RoomCard.tsx        # Room card with INR price & actions
│   │   └── WhatsAppButton.tsx  # Floating & inline WhatsApp launcher
│   ├── config/
│   │   └── site.ts             # Central configuration (contacts, WhatsApp)
│   ├── data/
│   │   ├── facilities.ts       # Facilities dataset
│   │   ├── gallery.ts          # Photo collection dataset
│   │   ├── rooms.ts            # 4 sample room types dataset
│   │   └── testimonials.ts     # Demo testimonials dataset
│   ├── pages/
│   │   ├── About.tsx           # Story, philosophy, sustainability
│   │   ├── Contact.tsx         # Contact form, map, transit guide
│   │   ├── Facilities.tsx      # All 6 resort facilities & daily schedule
│   │   ├── Gallery.tsx         # Full categorized photo gallery
│   │   ├── Home.tsx            # Main homepage
│   │   ├── NotFound.tsx        # 404 page
│   │   ├── RoomDetails.tsx     # Room gallery, specs, live stay calculator
│   │   └── Rooms.tsx           # Room listing with occupancy filter
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Router & global booking modal provider
│   ├── index.css               # Tailwind directives & custom scrollbars
│   └── main.tsx                # React DOM entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License
This project is open-source demonstration code created for presentation purposes.
