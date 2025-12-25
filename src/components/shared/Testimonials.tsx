'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';

const testimonials = [
  {
    quote:
      "The ability to schedule our lunch combos in advance has been a game-changer. Our sales are up and the screens look fantastic. A total win.",
    author: 'David Chen',
    company: 'Manager, The Pizza Spot',
    avatar: 'https://picsum.photos/seed/ceo2/40/40',
  },
  {
    quote:
      "I'm not a tech person, but I had our new digital menu running in 15 minutes. It’s that simple. Our daily specials look amazing, and customers love it.",
    author: 'Maria Garcia',
    company: 'Owner, The Daily Grind Cafe',
    avatar: 'https://picsum.photos/seed/ceo1/40/40',
  },
  {
    quote:
      "We used to spend so much time and money on printed signs. Now, I can update all 12 of our locations from my laptop in a few clicks. It's brilliant.",
    author: 'Sarah Jenkins',
    company: 'Marketing Director, Urban Retail',
    avatar: 'https://picsum.photos/seed/ceo3/40/40',
  },
  {
    quote:
      "Finally, a digital signage CMS that just works. The interface is intuitive and it's saved my team countless hours. We couldn't be happier.",
    author: 'Kevin Thompson',
    company: 'IT Manager, Burger Bliss',
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
        <AvatarImage src={currentTestimonial.avatar} alt={`Avatar of ${currentTestimonial.author}, a happy customer of ${SITE_NAME}.`} />
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
