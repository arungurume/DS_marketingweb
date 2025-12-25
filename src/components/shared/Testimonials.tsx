'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote:
      "This free digital signage solution is a game-changer for our small business. We can now create professional-looking displays without breaking the bank.",
    name: "Sarah Johnson",
    title: "Owner, The Grind Coffee Shop",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "I was skeptical at first, but this platform is incredibly easy to use and has all the features we need. Highly recommended!",
    name: "Michael Chen",
    title: "Marketing Manager, Acme Inc.",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "The ability to update our content remotely has saved us so much time and effort. It's a fantastic solution for any business.",
    name: "Emily Rodriguez",
    title: "Operations Director, City Fitness",
    avatar: "/placeholder-user.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            What Our Users Are Saying
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from real businesses who have transformed their displays with
            our free digital signage solution.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                      <p className="text-sm text-center text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
