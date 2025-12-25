'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "The efficiency and ease of use is incredible. I can manage everything from my laptop and it updates in real time.",
    name: 'John Smith',
    title: 'Coffee Shop Owner at Smiths Coffee',
    avatar: 'https://i.pravatar.cc/150?u=johnsmith',
  },
];


export function Testimonials({ isQuote = false, fullWidth = false }: { isQuote?: boolean; fullWidth?: boolean }) {
  const testimonial = testimonials[0];

  if (isQuote) {
    return (
      <div className="flex items-center justify-center gap-4">
        <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <blockquote className="text-sm text-gray-600 text-left max-w-sm">
          <p className="italic">"{testimonial.quote}"</p>
          <cite className="mt-1 not-italic font-bold text-black block text-xs">{testimonial.name}, {testimonial.title}</cite>
        </blockquote>
      </div>
    )
  }

  if (fullWidth) {
    return (
      <section className="w-full bg-[#f9faff] py-24 overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback className="text-2xl">{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <span className="text-xl font-black text-black">{testimonial.name}</span>
              <span className="text-lg text-gray-500 font-medium">{testimonial.title}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return null;
}

