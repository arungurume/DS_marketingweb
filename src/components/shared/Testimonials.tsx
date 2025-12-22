'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'The best Digital Signage platform, bar none. Incredibly easy to use and has transformed our customer engagement.',
    author: 'John Doe',
    company: 'CEO of CafeMocha',
    avatar: 'https://picsum.photos/seed/ceo1/40/40',
  },
  {
    quote:
      'Our sales have increased by 20% since we started using DigitalSigns.ai. The ability to schedule promotions is a game-changer.',
    author: 'Jane Smith',
    company: 'Owner of The Pizza Spot',
    avatar: 'https://picsum.photos/seed/ceo2/40/40',
  },
  {
    quote:
      "I'm not a tech person, but I had our digital menu up and running in 15 minutes. It's that simple!",
    author: 'Emily Johnson',
    company: 'Manager at Burger Bliss',
    avatar: 'https://picsum.photos/seed/ceo3/40/40',
  },
  {
    quote:
      'The flexibility to manage all our screens from one dashboard is amazing. It saves us so much time.',
    author: 'Michael Brown',
    company: 'IT Director at Urban Retail',
    avatar: 'https://picsum.photos/seed/ceo4/40/40',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFading(false);
      }, 500); // match this with transition duration
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className={cn(
        'flex justify-center items-center gap-4 h-24 transition-opacity duration-500',
        isFading ? 'opacity-0' : 'opacity-100'
      )}
    >
      <Avatar>
        <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.author} />
        <AvatarFallback>
          {currentTestimonial.author
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium text-left">
            &ldquo;{currentTestimonial.quote}&rdquo;
        </p>
        <p className="text-sm text-muted-foreground text-left">
          - {currentTestimonial.author}, {currentTestimonial.company}
        </p>
      </div>
    </div>
  );
}
