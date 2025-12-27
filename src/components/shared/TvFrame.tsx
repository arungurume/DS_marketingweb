'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type TvFrameProps = {
  mode?: 'horizontal' | 'vertical' | 'both' | 'window';
  className?: string;
  slideshowImages?: string[];
  currentIndex?: number;
};

const HOMEPAGE_SCENES = [
  'coffee_menu',
  'gym_signage',
  'Burger_menuboard',
  'Retailboard',
  'School_menuboard',
  'office'
];

export function TvFrame({
  mode = 'both',
  className,
  slideshowImages,
  currentIndex = 0
}: TvFrameProps) {
  const [internalIndex, setInternalIndex] = useState(0);

  useEffect(() => {
    // Only run internal slideshow if no external images provided
    if (slideshowImages && slideshowImages.length > 0) return;

    const timer = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % HOMEPAGE_SCENES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slideshowImages]);

  // Determine which index and collection to use
  const activeIndex = (slideshowImages && slideshowImages.length > 0) ? currentIndex : internalIndex;

  const renderContent = (type: 'horizontal' | 'vertical', fit: 'cover' | 'contain' = 'cover') => {
    // 1. External Slideshow (e.g. Window Mode)
    if (slideshowImages && slideshowImages.length > 0) {
      return (
        <div className="relative w-full h-full bg-[#0a0a0a]">
          {slideshowImages.map((img, idx) => (
            <div
              key={idx}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                idx === activeIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={img}
                alt={`Screen ${idx + 1}`}
                fill
                className={cn("object-top", fit === 'cover' ? "object-cover" : "object-contain")}
                priority={idx === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-20" />
        </div>
      );
    }

    // 2. Default Homepage Slideshow (Horizontal/Vertical Pairs)
    return (
      <div className="relative w-full h-full bg-[#0a0a0a]">
        {HOMEPAGE_SCENES.map((name, idx) => {
          const suffix = type === 'horizontal' ? '_h.png' : '_v.png';
          const src = `/images/homepage/${name}${suffix}`;

          return (
            <div
              key={name}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                idx === activeIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={src}
                alt={`${type} screen ${name}`}
                fill
                className={cn("object-top", fit === 'cover' ? "object-cover" : "object-contain")}
                priority={idx === 0}
              />
            </div>
          );
        })}
        {/* Subtle screen glare */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-20" />
      </div>
    );
  };

  if (mode === 'window') {
    return (
      <div className={cn("relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]", className)}>
        {/* Window controls */}
        <div className="h-10 bg-[#141414] flex items-center px-5 gap-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="h-6 w-32 bg-white/5 rounded-md" />
          </div>
        </div>
        <div className="aspect-[16/10] relative">
          {renderContent('horizontal', 'contain')}
        </div>
      </div>
    );
  }

  const TvBezel = ({ children, isVertical = false }: { children: React.ReactNode, isVertical?: boolean }) => (
    <div className="relative group w-full">
      {/* TV Body */}
      <div className={cn(
        "relative rounded-[12px] border-[10px] border-[#111] bg-[#111] shadow-2xl overflow-hidden",
        isVertical ? "aspect-[9/16]" : "aspect-video"
      )}>
        {/* Inner screen border for depth */}
        <div className="absolute inset-0 border-[1.5px] border-white/10 pointer-events-none z-10" />
        {children}
      </div>

      {/* TV Stand/Base (Subtle) */}
      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-48 h-2 bg-[#1a1a1a] rounded-t-full blur-[1px] opacity-40 group-hover:opacity-60 transition-opacity" />
    </div>
  );

  return (
    <div className={cn('relative w-full max-w-7xl mx-auto flex items-end justify-center gap-4 md:gap-12 px-4', className)}>
      {(mode === 'horizontal' || mode === 'both') && (
        <div className="flex-1 min-w-0">
          <TvBezel>
            {renderContent('horizontal')}
          </TvBezel>
        </div>
      )}

      {(mode === 'vertical' || mode === 'both') && (
        <div className={cn("shrink-0", mode === 'both' ? "w-[120px] sm:w-[180px] md:w-[240px]" : "w-full max-w-[400px]")}>
          <TvBezel isVertical>
            {renderContent('vertical')}
          </TvBezel>
        </div>
      )}
    </div>
  );
}
