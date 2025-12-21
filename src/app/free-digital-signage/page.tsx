import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

const pageTitle = `Free Digital Signage Software | ${SITE_NAME}`;
const pageDescription = 'Get started with our powerful digital signage software for free. Manage one screen with unlimited access to our core features. No credit card required.';
const pageUrl = `${SITE_URL}/free-digital-signage/`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
  },
};

const freeSignageImage = PlaceHolderImages.find((p) => p.id === 'free-signage');
const freeFeatures = [
    "Manage 1 screen, forever free",
    "Intuitive content editor",
    "Schedule content in advance",
    "Cloud-based media library",
    "Works with Amazon Fire TV Stick",
    "Free templates to get you started"
]

export default function FreeDigitalSignagePage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        title="Powerful Digital Signage, Completely Free."
        subtitle={pageDescription}
      />
      <div className="container mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {freeSignageImage && (
              <Image
                src={freeSignageImage.imageUrl}
                alt={freeSignageImage.description}
                width={1200}
                height={800}
                className="rounded-xl shadow-lg"
                data-ai-hint={freeSignageImage.imageHint}
              />
            )}
          </div>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <h2 className="font-headline text-3xl font-bold text-primary">What's included in the Free Plan?</h2>
            <p>
              Our free plan is not a trial. It's a permanently free solution perfect for single locations, small businesses, or anyone wanting to explore the power of digital signage without commitment.
            </p>
            <ul className="mt-6 space-y-4">
              {freeFeatures.map(feature => (
                <li key={feature} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                    <span>{feature}</span>
                </li>
              ))}
            </ul>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="#">Get Your Free Account</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
