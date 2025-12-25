import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TvFrame } from '@/components/shared/TvFrame';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Testimonials } from '@/components/shared/Testimonials';
import { UseCasesSection } from '@/components/shared/UseCasesSection';
import { AskAiSection } from '@/components/shared/AskAiSection';
import { SetupSection } from '@/components/shared/SetupSection';
import { HardwareSection } from '@/components/shared/HardwareSection';
import { BrandsSection } from '@/components/shared/BrandsSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
             <div className="max-w-xl mx-auto mb-8">
               <Testimonials />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl">
              Cloud-Based Digital Signage Software
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Easily create, schedule, and manage content across your screens — without complex hardware.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/free-digital-signage/">Start For Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#">
                  <PlayCircle className="mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
          <TvFrame />
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Hardware Section */}
      <HardwareSection />

      {/* Brands Section */}
      <BrandsSection />

      {/* Ask AI Section */}
      <AskAiSection />

      {/* How it Works / Setup Section */}
      <SetupSection />
    </>
  );
}
