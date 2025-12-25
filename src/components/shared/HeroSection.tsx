'use client';
import Link from 'next/link';
import { TvFrame } from './TvFrame';

export function HeroSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Turn Any Screen into a Digital Sign for Free
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              No credit card required. No hidden fees. Just free digital
              signage for everyone.
            </p>
            <div className="space-x-4">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
          </div>
          <TvFrame />
        </div>
      </div>
    </section>
  );
}
