import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'haven' | 'gold' | 'sand' | 'demo';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'haven',
  className = '',
}) => {
  const variantStyles = {
    haven: 'bg-haven-100 text-haven-800 border-haven-200',
    gold: 'bg-gold-50 text-gold-800 border-gold-200',
    sand: 'bg-sand-100 text-sand-800 border-sand-200',
    demo: 'bg-amber-100 text-amber-900 border-amber-300 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border shadow-xs ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
