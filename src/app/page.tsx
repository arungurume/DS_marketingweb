import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, PlayCircle, Star, Tv, Smartphone, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Seo } from '@/components/shared/Seo';
import type { SoftwareApplication } from 'schema-dts';
import { Card, CardContent } from '@/components/ui/card';

const title = `The Easiest Way To Power Your Screens | ${SITE_NAME}`;
const description = 'Create stunning digital signage with our easy-to-use content management system. Perfect for restaurants, retail, and more. Get started for free!';

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

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
const feature1Image = PlaceHolderImages.find(p => p.id === 'feature-1');
const feature2Image = PlaceHolderImages.find(p => p.id === 'feature-2');
const feature3Image = PlaceHolderImages.find(p => p.id === 'feature-3');

const players = [
    { name: 'Google TV', icon: Tv },
    { name: 'Android TV', icon: Tv },
    { name: 'Amazon Signage', icon: Tv },
    { name: 'Fire TV', icon: Tv },
    { name: 'Web Player', icon: Globe },
]

const features = [
  {
    title: 'Design with Ease',
    description: 'Use our intuitive drag-and-drop editor to create beautiful, dynamic content. No design skills needed.',
    image: feature1Image,
  },
  {
    title: 'Schedule & Automate',
    description: 'Plan your content for days, weeks, or months in advance. Set schedules to update your screens automatically.',
    image: feature2Image,
  },
  {
    title: 'Manage from Anywhere',
    description: 'Our cloud-based platform lets you manage one screen or thousands from any device, anywhere in the world.',
    image: feature3Image,
  },
];

const steps = [
  {
    title: 'Select the Gallery',
    description: 'Choose a menuboard that fits your style and needs.',
  },
  {
    title: 'Edit the Design/Menu',
    description: 'Quickly edit prices, graphics, and content from anywhere.',
  },
  {
    title: 'Launch to Screen',
    description: 'Pick your screen, set the schedule, and display your menu board.',
  },
];

const testimonials = [
  {
    quote: `DigitalSigns.ai transformed our restaurant's ambiance. Updating our menu is now a breeze, and our sales have increased by 15%!`,
    author: 'Maria Garcia',
    role: 'Owner, The Corner Bistro',
  },
  {
    quote: `The scheduling feature is a game-changer for our retail promotions. We can plan our marketing campaigns months ahead. Highly recommended!`,
    author: 'David Chen',
    role: 'Marketing Director, Urban Apparel',
  },
  {
    quote: `I was up and running in minutes. The platform is incredibly user-friendly, and their support team is top-notch.`,
    author: 'Sarah Jenkins',
    role: 'Manager, The Daily Grind Cafe',
  },
];

const jsonLd: SoftwareApplication = {
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  operatingSystem: 'Web',
  applicationCategory: 'BusinessApplication',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '250',
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
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
                The Easiest Way To Power Your Screens
              </h1>
              <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0">
                Create stunning digital signage with our easy-to-use content management system. Perfect for restaurants, retail, and more. Get started for free!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </div>
            <div>
              {heroImage && (
                 <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-2xl"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="players" className="py-20 sm:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
              Works With Your Hardware
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              From dedicated signage players to the devices you already own. We support a wide range of hardware to make getting started as easy as possible.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
            {players.map((player) => (
              <Card key={player.name} className="text-center">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                      <player.icon className="h-10 w-10 text-primary" />
                      <p className="font-semibold text-foreground/90">{player.name}</p>
                  </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-32 bg-primary/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
              Everything you need, nothing you don&apos;t.
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our platform is packed with powerful features designed to make managing your digital signs simple and effective.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-lg border border-border/20">
                {feature.image && (
                  <Image
                    src={feature.image.imageUrl}
                    alt={feature.image.description}
                    width={600}
                    height={400}
                    className="rounded-md mb-4 aspect-video object-cover"
                    data-ai-hint={feature.image.imageHint}
                  />
                )}
                <h3 className="font-headline text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="mt-2 text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 sm:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
              Digital Signage Menu in 3 Easy Steps
            </h2>
          </div>
          <div className="mt-16 relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                <div className="w-2/3 mx-auto border-t-2 border-dashed border-border"></div>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 text-center relative">
              {steps.map((step, index) => (
                <div key={step.title}>
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background border-2 border-primary text-primary mx-auto font-bold text-2xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-headline text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 sm:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
              Loved by businesses worldwide
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Don&apos;t just take our word for it. Here&apos;s what our customers have to say.
            </p>
          </div>
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background border border-border/20 rounded-lg p-6 flex flex-col">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current h-5 w-5" />
                  ))}
                </div>
                <p className="text-foreground/80 flex-grow">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground py-20 sm:py-24">
        <div className="container text-center">
           <h2 className="font-headline text-3xl sm:text-4xl font-bold">
            Ready to revolutionize your displays?
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Join thousands of businesses and start creating beautiful, effective digital signage today. It&apos;s free to get started.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
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
