'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from '@/lib/placeholder-images';

const horizontalImages = [
  PlaceHolderImages.find((p) => p.id === 'hero-home'),
  PlaceHolderImages.find((p) => p.id === 'pizza-menu'),
  PlaceHolderImages.find((p) => p.id === 'qsr-menu'),
].filter(Boolean) as ImagePlaceholder[];

const verticalImages = [
  PlaceHolderImages.find((p) => p.id === 'app-showcase-1'),
  PlaceHolderImages.find((p) => p.id === 'app-showcase-2'),
  PlaceHolderImages.find((p) => p.id === 'app-showcase-3'),
].filter(Boolean) as ImagePlaceholder[];


export function TvFrame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % Math.min(horizontalImages.length, verticalImages.length);
        setCurrentIndex(nextIndex);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentHorizontalImage = horizontalImages[currentIndex];
  const currentVerticalImage = verticalImages[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12 sm:mt-16">
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-8">
            {/* Horizontal TV */}
            <div className="relative w-full max-w-3xl flex-shrink">
                <div className="aspect-[16/9] relative h-full">
                    <div
                    className="w-full h-full rounded-lg bg-gray-900 border-4 sm:border-8 border-gray-800 shadow-2xl p-1 flex items-center justify-center overflow-hidden"
                    >
                    {currentHorizontalImage && (
                        <Image
                        src={currentHorizontalImage.imageUrl}
                        alt={currentHorizontalImage.description}
                        width={1200}
                        height={675}
                        priority
                        className={cn(
                            'w-full h-full object-cover rounded-sm transition-opacity duration-500',
                            isFading ? 'opacity-0' : 'opacity-100'
                        )}
                        data-ai-hint={currentHorizontalImage.imageHint}
                        />
                    )}
                    </div>
                </div>
            </div>

            {/* Vertical TV */}
            <div className="relative w-40 sm:w-auto sm:flex-1 max-w-[12rem] mx-auto sm:mx-0">
                 <div className="aspect-[9/16] relative h-full">
                    <div
                    className="w-full h-full rounded-lg bg-gray-900 border-4 sm:border-8 border-gray-800 shadow-2xl p-1 flex items-center justify-center overflow-hidden"
                    >
                    {currentVerticalImage && (
                        <Image
                        src={currentVerticalImage.imageUrl}
                        alt={currentVerticalImage.description}
                        width={338}
                        height={600}
                        className={cn(
                            'w-full h-full object-cover rounded-sm transition-opacity duration-500',
                            isFading ? 'opacity-0' : 'opacity-100'
                        )}
                        data-ai-hint={currentVerticalImage.imageHint}
                        />
                    )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
