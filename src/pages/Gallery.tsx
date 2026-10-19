import React from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { Badge } from '../components/Badge';
import { ShieldAlert, Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header Banner */}
      <section className="bg-haven-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80"
            alt="Nature gallery background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-4">
            <Camera className="w-3.5 h-3.5 mr-1" />
            Photo Collection
          </Badge>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-4">
            A Glimpse into Green Haven
          </h1>
          <p className="text-sand-200 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our curated photo showcase across guest suites, misty hillside trails, authentic Malabar dining, and wellness retreats.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Lightbox: Click any image to view in full resolution or use arrow keys to navigate.</span>
          </div>
        </div>
      </section>

      {/* Main Gallery with Category Filters & Lightbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GalleryGrid showFilters={true} />
      </section>
    </div>
  );
};
