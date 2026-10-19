import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { galleryData } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryGridProps {
  initialCategory?: 'all' | 'rooms' | 'property' | 'dining' | 'facilities';
  limit?: number;
  showFilters?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  initialCategory = 'all',
  limit,
  showFilters = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms & Cottages' },
    { id: 'property', label: 'Property & Nature' },
    { id: 'dining', label: 'Dining & Flavors' },
    { id: 'facilities', label: 'Facilities & Wellness' },
  ];

  const filteredItems = galleryData.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-haven-900 text-gold-300 shadow-md border border-haven-800'
                    : 'bg-sand-100 hover:bg-sand-200 text-sand-800 border border-sand-300/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(index)}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 border border-sand-200 bg-sand-200"
          >
            <ImageWithFallback
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
            />
            
            {/* Category tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-xs text-sand-200 px-3 py-1 rounded-full border border-white/20">
                {item.category}
              </span>
            </div>

            {/* Hover overlay with title & icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-haven-950/90 via-haven-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-gold-400 mb-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-medium">Click to Expand</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-sand-300 line-clamp-1 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayedItems.length === 0 && (
        <div className="text-center py-16 text-sand-600">
          <p className="font-serif text-lg">No photos found in this category.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        items={displayedItems}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setActiveImageIndex(newIndex)}
      />
    </div>
  );
};
