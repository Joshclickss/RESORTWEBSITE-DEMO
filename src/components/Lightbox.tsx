import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 p-2 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Top Bar with counter & close */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
        <div className="bg-haven-950/80 px-3.5 py-1.5 rounded-full text-xs font-mono border border-haven-800 flex items-center gap-2">
          <ImageIcon className="w-3.5 h-3.5 text-gold-400" />
          <span>
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-sand-400 capitalize hidden sm:inline">
            • {currentItem.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-transform hover:scale-110 z-20 cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-transform hover:scale-110 z-20 cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center p-2">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl max-h-[70vh]">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            className="w-full h-auto max-h-[70vh] object-contain transition-all duration-300 select-none"
          />
        </div>

        {/* Captions */}
        <div className="text-center mt-4 text-white max-w-2xl px-4">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-sand-100">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-sand-300 mt-1">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
