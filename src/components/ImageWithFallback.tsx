import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const defaultFallback =
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80";

  if (hasError) {
    if (fallbackSrc && fallbackSrc !== src) {
      return (
        <img
          src={fallbackSrc}
          alt={alt || "Green Haven Resort"}
          className={className}
          loading="lazy"
          {...props}
        />
      );
    }

    return (
      <div
        className={`bg-haven-900/10 flex flex-col items-center justify-center p-6 text-haven-800 text-center border border-haven-100 ${className}`}
        role="img"
        aria-label={alt || "Resort Image Placeholder"}
      >
        <ImageOff className="w-8 h-8 mb-2 opacity-50" />
        <span className="text-xs font-medium uppercase tracking-wider opacity-70">
          Green Haven Resort
        </span>
        <span className="text-xs text-haven-700/60 mt-1 line-clamp-1">{alt || "Image preview"}</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-sand-200 animate-pulse" />
      )}
      <img
        src={src || defaultFallback}
        alt={alt || "Green Haven Resort"}
        className={`${className} transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        loading="lazy"
        {...props}
      />
    </div>
  );
};
