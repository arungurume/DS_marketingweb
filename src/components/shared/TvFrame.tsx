'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type TvFrameProps = {
  horizontalOnly?: boolean;
};

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-home');
const phoneImage = PlaceHolderImages.find((p) => p.id === 'app-showcase-4');

export function TvFrame({ horizontalOnly = false }: TvFrameProps) {
  return (
    <div
      className={cn(
        'relative mx-auto flex w-full max-w-4xl items-center justify-center gap-4',
        horizontalOnly ? '' : 'flex-col md:flex-row'
      )}
    >
      <div className="relative w-full rounded-lg border-8 border-foreground bg-foreground shadow-2xl">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="A digital signage screen in a modern cafe"
            width={1200}
            height={675}
            className="w-full h-auto aspect-video object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
      </div>

      {!horizontalOnly && (
        <div className="relative h-full w-1/3 max-w-[150px] md:w-1/4 rounded-lg border-4 border-foreground bg-foreground shadow-2xl">
          {phoneImage && (
            <Image
              src={phoneImage.imageUrl}
              alt="Digital signage management app on a phone"
              width={300}
              height={600}
              className="w-full h-auto aspect-[1/2] object-cover"
              data-ai-hint={phoneImage.imageHint}
              priority
            />
          )}
        </div>
      )}
    </div>
  );
}
