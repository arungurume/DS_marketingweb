
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';

const images = [
  '/images/screens/screen1.png',
  '/images/screens/screen2.png',
];

export function SetupSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20 sm:py-32 overflow-hidden">
      <div className="container text-center">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold">
          Get set up in minutes.
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Use your existing player, TV or computer
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
          >
            <Link href="/free-digital-signage/">Sign Up For Free</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black"
          >
            <Link href="#">Book a Demo</Link>
          </Button>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative h-full">
            <div className="relative" style={{ aspectRatio: '1080 / 721' }}>
              <div className="w-full h-full absolute top-0 left-0">
                <div className="bg-gray-800/50 rounded-t-xl p-2 border-b-0 border border-gray-700">
                  <div className="flex items-center gap-1.5 px-2 h-6">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="w-full h-full relative">
                  {images.map((src, index) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`A screenshot of the ${SITE_NAME} digital signage content management system.`}
                      width={1080}
                      height={721}
                      className={cn(
                        'w-full h-auto rounded-b-xl absolute top-0 left-0 transition-opacity duration-1000 ease-in-out',
                        currentIndex === index ? 'opacity-100' : 'opacity-0'
                      )}
                      priority={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
