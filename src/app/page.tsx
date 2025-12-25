
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Seo } from '@/components/shared/Seo';
import type { SoftwareApplication } from 'schema-dts';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { AskAiSection } from '@/components/shared/AskAiSection';
import { Testimonials } from '@/components/shared/Testimonials';
import { TvFrame } from '@/components/shared/TvFrame';
import { UseCasesSection } from '@/components/shared/UseCasesSection';
import { SetupSection } from '@/components/shared/SetupSection';

const title = `The Easiest Way To Power Your Screens | ${SITE_NAME}`;
const description =
  'Create stunning digital signage with our easy-to-use content management system. Perfect for restaurants, retail, and more. Get started for free!';

export const metadata: Metadata = {
  title,
  description,
  applicationName: SITE_NAME,
  authors: [{ name: `${SITE_NAME} Team`, url: `${SITE_URL}/about-us-ds/` }],
  keywords: ['digital signage', 'cms', 'menu board', 'qsr', 'restaurant'],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title,
    description,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${SITE_URL}/og-image.png`],
  },
};

const players = [
  { name: 'Google TV', src: '/images/Google_TV.png', hoverColor: 'hover:bg-blue-100' },
  { name: 'Android TV', src: '/images/Android_TV.png', hoverColor: 'hover:bg-green-100' },
  { name: 'Fire TV', src: '/images/Fire_Tv.png', hoverColor: 'hover:bg-orange-100' },
  { name: 'Amazon Signage', src: '/images/amazon_signage.png', hoverColor: 'hover:bg-orange-100' },
  { name: 'Web Browser', src: '/images/browser.png', hoverColor: 'hover:bg-sky-100' },
];

const industryLogos = [
  { name: 'Santander', src: '/images/brands/Santander_logo.png' },
  { name: 'Krispy Kreme', src: '/images/brands/Krispy-Kreme_donut.png' },
  { name: 'Chick Fil A', src: '/images/brands/Chick-fil-A-Logo.wine.png' },
  { name: 'Heytea', src: '/images/brands/HEYTEA_logo.png' },
  { name: 'Nike', src: '/images/brands/Nike-Logo.png' },
  { name: 'Costa Coffee', src: '/images/brands/Costa-Coffee.png' },
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
      <section className="pb-20 sm:pb-32 sm:pt-8">
        <div className="container text-center">
          <Testimonials />
          <h1 className="font-headline mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Cloud-Based Digital Signage Software
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Easily create, schedule, and manage content across your screens — without complex hardware.
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

          <TvFrame />
        </div>
      </section>

      <UseCasesSection />

      <section id="players" className="pt-8 pb-20 bg-primary/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">
              Use Your Existing Hardware.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our digital signage software is designed for maximum
              compatibility. Bring your own device and connect to DSHub today.
              We support a wide range of hardware to make getting started as
              easy as possible.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {players.map((player) => (
              <Card
                key={player.name}
                className={cn(
                  "text-center transition-colors shadow-none border-0 bg-card",
                  player.hoverColor
                )}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                  <Image
                    src={player.src}
                    alt={`${player.name} logo, a supported player for ${SITE_NAME}`}
                    width={80}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <p className="font-semibold">{player.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 bg-background">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">
              Brands Leading the Way with Digital Signage
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Leading global brands across QSR, café, and retail industries use digital signage to modernize menus, promotions, and in-store communication.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
            {industryLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={`${logo.name} logo, a brand that uses digital signage`}
                width={128}
                height={40}
                className="h-8 w-auto object-contain text-foreground opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Logos shown represent brands known to use digital signage technology.
          </p>
        </div>
      </section>

      <AskAiSection />
      
      <SetupSection />
    </>
  );
}
