import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PlayCircle, Tv, Globe, Monitor, Smartphone, Tablet } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Seo } from '@/components/shared/Seo';
import type { SoftwareApplication } from 'schema-dts';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const title = `Digital Signage Software for Modern Businesses | ${SITE_NAME}`;
const description =
  'DSHub is the leading cloud-based digital signage software CMS that empowers you to create and manage stunning content on any screen. Perfect for restaurants, retail, and corporate communication.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
  },
};

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-home');
const appShowcase1 = PlaceHolderImages.find((p) => p.id === 'app-showcase-1');
const appShowcase2 = PlaceHolderImages.find((p) => p.id === 'app-showcase-2');
const appShowcase3 = PlaceHolderImages.find((p) => p.id === 'app-showcase-3');
const appShowcase4 = PlaceHolderImages.find((p) => p.id === 'app-showcase-4');

const players = [
  { name: 'Google TV', icon: Tv },
  { name: 'Android TV', icon: Tv },
  { name: 'Amazon Fire TV', icon: Tv },
  { name: 'Web Player', icon: Globe },
];

const features = [
  {
    icon: Monitor,
    title: 'Intuitive Content Creation',
    description: 'Leverage our user-friendly, drag-and-drop editor to build beautiful, dynamic content for your digital displays. Absolutely no design experience required.',
  },
  {
    icon: Smartphone,
    title: 'Advanced Scheduling & Automation',
    description: 'Organize your digital signage content for days, weeks, or even months. Configure automated schedules to update your screens at the perfect time.',
  },
  {
    icon: Tablet,
    title: 'Remote Screen Management',
    description: 'Our powerful cloud-based CMS lets you control one screen or thousands from any device, anywhere in the world. DSHub gives you complete control.',
  },
];

const appScreens = [
    { image: appShowcase1, className: 'lg:col-span-2' },
    { image: appShowcase2, className: '' },
    { image: appShowcase3, className: '' },
    { image: appShowcase4, className: 'lg:col-span-2' },
];


const jsonLd: SoftwareApplication = {
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  operatingSystem: 'Web',
  applicationCategory: 'BusinessApplication',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '512',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function Home() {
  return (
    <>
      <Seo schema={{ '@context': 'https://schema.org', ...jsonLd }} />
      <section className="py-20 sm:py-32">
        <div className="container text-center">
            <div className="flex justify-center items-center gap-4">
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/ceo/40/40" alt="CEO" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-medium">John Doe, CEO of CafeMocha</p>
                    <p className="text-sm text-muted-foreground">"The best Digital Signage platform, bar none."</p>
                </div>
            </div>
          <h1 className="font-headline mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Cloud-Based Digital Signage Software
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to DSHub, powered by {SITE_NAME}. Create and manage stunning content on your screens with our powerful, easy-to-use digital signage CMS.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/free-digital-signage/">Start For Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </Button>
          </div>

           <div className="mt-16">
              {heroImage && (
                 <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-lg border"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              )}
            </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-32 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">
              All-in-One Digital Signage Content Management
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our cloud-based platform is packed with powerful features designed to make managing your digital signs simple, effective, and scalable.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto">
                    <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-xl font-semibold mt-6">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="app-showcase" className="py-20 sm:py-32">
        <div className="container">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {appScreens.map((screen, index) => (
                    <div key={index} className={cn("rounded-xl border shadow-lg overflow-hidden", screen.className)}>
                        {screen.image && (
                            <Image
                                src={screen.image.imageUrl}
                                alt={screen.image.description}
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                                data-ai-hint={screen.image.imageHint}
                            />
                        )}
                    </div>
                ))}
             </div>
        </div>
      </section>


      <section id="players" className="py-20 sm:py-32 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">
              Use Your Existing Hardware.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
             Our digital signage software is designed for maximum compatibility. Bring your own device and connect to DSHub today. We support a wide range of hardware to make getting started as easy as possible.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {players.map((player) => (
              <Card key={player.name} className="text-center bg-background/50 border">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                  <player.icon className="h-10 w-10 text-primary" />
                  <p className="font-semibold">{player.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20 sm:py-24">
        <div className="container text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold">
            Ready to Revolutionize Your Displays?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of businesses and start creating beautiful,
            effective digital signage today. It&apos;s free to get started with DSHub.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/free-digital-signage/">
                Claim Your Free Account Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
