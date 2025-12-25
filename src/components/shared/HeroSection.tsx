'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { TvFrame } from '@/components/shared/TvFrame';
import { Testimonials } from '@/components/shared/Testimonials';

export function HeroSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <Testimonials isQuote={true}/>
          <h1 className="font-headline mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Cloud-Based Digital Signage Software
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Easily create, schedule, and manage content across your screens — without complex hardware.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#">Start For Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16">
            <TvFrame />
        </div>
      </div>
    </section>
  );
}
