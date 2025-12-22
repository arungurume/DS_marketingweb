'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from '@/lib/placeholder-images';

const showcaseImages = [
  PlaceHolderImages.find((p) => p.id === 'hero-home'),
  PlaceHolderImages.find((p) => p.id === 'pizza-menu'),
  PlaceHolderImages.find((p) => p.id === 'cafe-menu'),
  PlaceHolderImages.find((p) => p.id === 'burger-menu'),
].filter(Boolean) as ImagePlaceholder[];

export function TvFrame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseImages.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = showcaseImages[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
      <div className="aspect-[16/9] relative">
        <div
          className="w-full h-full rounded-lg bg-gray-900 border-4 border-gray-700/50 shadow-2xl p-2 sm:p-3 flex items-center justify-center overflow-hidden"
        >
           {currentImage && (
            <Image
              src={currentImage.imageUrl}
              alt={currentImage.description}
              width={1200}
              height={800}
              priority={currentIndex === 0}
              className={cn(
                'w-full h-full object-cover rounded-sm transition-opacity duration-500',
                isFading ? 'opacity-0' : 'opacity-100'
              )}
               data-ai-hint={currentImage.imageHint}
            />
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-[25%] h-4 bg-gray-700/60 rounded-b-md" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(100%+1rem)] w-[10%] h-2 bg-gray-600/80 rounded-b-sm" />
    </div>
  );
}