'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "The ability to push schedules and updates to our menus from our central office has been a game-changer. The system is so intuitive, we onboarded 110 stores in a week.",
    name: 'David Choi',
    title: 'Owner, 110x BBQ',
    avatar: 'https://i.pravatar.cc/150?u=davidchoi',
  },
];

export function Testimonials({ isQuote = false}: { isQuote?: boolean }) {
  const testimonial = testimonials[0];
  if (isQuote) {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <blockquote className="text-sm text-muted-foreground text-left max-w-sm">
                <p>"{testimonial.quote}"</p>
                <cite className="mt-2 not-italic font-medium text-foreground block">{testimonial.name}, {testimonial.title}</cite>
            </blockquote>
        </div>
    )
  }

  // Can expand this to be a carousel later
  return null;
}
