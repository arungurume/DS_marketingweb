'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { TvFrame } from '@/components/shared/TvFrame';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export function HeroSection() {
  return (
    <section className="pt-0 pb-32 w-full bg-white overflow-hidden">
      {/* 100% Width Testimonial Bar */}
      <div className="w-full border-t border-gray-100 bg-white/50 py-4 mb-16">
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-center gap-4">
          <Avatar className="h-10 w-10 border border-gray-100 shadow-sm flex-shrink-0 grayscale">
            <AvatarImage src="https://i.pravatar.cc/150?u=pizza" alt="David Chen" />
            <AvatarFallback className="bg-gray-100 font-bold">DC</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="font-body text-[14px] font-normal text-gray-500 leading-snug">
              "The ability to schedule our lunch combos in advance has been a game-changer. Our sales are up and the screens look fantastic. A total win."
            </p>
            <p className="font-body text-[11px] text-gray-400 font-bold mt-0.5 uppercase tracking-widest">
              - David Chen, Manager, The Pizza Spot
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center">
          {/* Headline */}

          <h1 className="font-headline text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-gray-900 leading-[1.1] mb-8 lg:whitespace-nowrap">
            Cloud-Based Digital Signage Software
          </h1>


          {/* Subtext */}
          <p className="font-body max-w-3xl mx-auto text-lg md:text-xl text-gray-500 font-normal leading-relaxed mb-16">
            Easily create, schedule, and manage content across your screens — without complex hardware.
          </p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
            <Button className="bg-[#00AEEF] hover:bg-[#0096ce] text-white h-14 px-8 text-lg font-bold rounded-lg shadow-lg shadow-blue-500/10 transition-transform hover:scale-[1.02]">
              Start For Free
            </Button>
            <Button variant="outline" className="border-gray-200 bg-white hover:bg-gray-50 text-black h-14 px-8 text-lg font-bold rounded-lg shadow-sm transition-transform hover:scale-[1.02]">
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Demo
            </Button>
          </div>

        </div>

        {/* Frames */}
        <div className="relative w-full flex justify-center">
          <TvFrame />
        </div>
      </div>
    </section>
  );
}



