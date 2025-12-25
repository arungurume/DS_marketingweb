import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TvFrame } from '@/components/shared/TvFrame';
import { ArrowRight, Zap, Cloud, Layers } from 'lucide-react';
import { Testimonials } from '@/components/shared/Testimonials';
import { UseCasesSection } from '@/components/shared/UseCasesSection';
import { AskAiSection } from '@/components/shared/AskAiSection';
import { SetupSection } from '@/components/shared/SetupSection';

const featureCards = [
  {
    icon: Zap,
    title: 'Easy to Use Interface',
    description: 'Our intuitive drag-and-drop editor makes creating beautiful content a breeze, no technical skills required.',
    image: PlaceHolderImages.find((p) => p.id === 'feature-1'),
  },
  {
    icon: Cloud,
    title: 'Cloud-Based Management',
    description: 'Update one or hundreds of screens from anywhere in the world with our reliable cloud-based CMS.',
    image: PlaceHolderImages.find((p) => p.id === 'feature-2'),
  },
  {
    icon: Layers,
    title: 'Flexible Scheduling',
    description: 'Schedule content to change by the minute, hour, or day. Perfect for restaurant menus and retail promotions.',
    image: PlaceHolderImages.find((p) => p.id === 'feature-3'),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl">
              Free Digital Signage for Everyone
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Turn any TV into a digital sign. Manage content from the cloud.
              Get up to 4 screens on our free forever plan. No credit card required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/free-digital-signage/">Start for Free</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/pricing/">
                  See Pricing <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <TvFrame />
          <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* How it Works / Setup Section */}
      <SetupSection />

      {/* Ask AI Section */}
      <div className="pt-48">
        <AskAiSection />
      </div>
    </>
  );
}
