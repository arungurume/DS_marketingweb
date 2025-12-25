'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1593342371934-87817c555358?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop',
];

export function TvFrame() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={src}
                alt={`Digital Signage content ${index + 1}`}
                fill
                priority={index === 0}
                style={{objectFit: 'cover'}}
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-300 rounded-b-lg" />
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-400 rounded-b-md" />
    </div>
  );
}
