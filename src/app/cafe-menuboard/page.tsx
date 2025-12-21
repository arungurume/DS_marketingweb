import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { FaqSection, type FaqItem } from '@/components/shared/FaqSection';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Seo } from '@/components/shared/Seo';
import type { FAQPage } from 'schema-dts';

const pageTitle = `Digital Cafe Menu Boards | ${SITE_NAME}`;
const pageDescription = 'Elevate your cafe\'s atmosphere with beautiful digital menu boards. Highlight your specialty coffees, pastries, and seasonal offers with ease.';
const pageUrl = `${SITE_URL}/cafe-menuboard/`;

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

const pageImage = PlaceHolderImages.find((p) => p.id === 'cafe-menu');

const faqs: FaqItem[] = [
  {
    question: 'Can I schedule a different menu for the morning rush?',
    answer: 'Of course. Use our scheduler to display your breakfast and coffee menu in the morning, and automatically switch to your lunch menu in the afternoon.',
  },
  {
    question: 'Is it easy to add a "Drink of the Day"?',
    answer: 'Yes! You can update your menu in seconds to feature a daily special, including a beautiful picture or video to entice customers.',
  },
  {
    question: 'Will this fit my cafe\'s aesthetic?',
    answer: 'Our platform includes a range of modern, stylish templates that you can customize with your own logo, colors, and fonts to perfectly match your brand.',
  },
];

const jsonLd: FAQPage = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function CafeMenuBoardPage() {
  return (
    <>
      <Seo schema={{ '@context': 'https://schema.org', ...jsonLd }} />
      <div className="pb-16 sm:pb-24">
        <PageHeader
          title="Modern Menu Boards for Your Cafe"
          subtitle={pageDescription}
        />
        <div className="container mt-12 sm:mt-16">
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
            <h2 className="font-headline text-3xl font-bold text-primary">Brew Up More Business</h2>
            {pageImage && (
              <Image
                src={pageImage.imageUrl}
                alt={pageImage.description}
                width={1200}
                height={800}
                className="rounded-xl shadow-lg my-8"
                data-ai-hint={pageImage.imageHint}
              />
            )}
            <p>
              Your coffee is a work of art, and your menu should be too. Replace your chalkboards and printed menus with a stunning digital display from {SITE_NAME}. Showcase your latte art with beautiful videos, promote your loyalty program, and easily feature seasonal drinks like a pumpkin spice latte or a summer cold brew.
            </p>
            <h3>Benefits of a Digital Cafe Menu:</h3>
            <ul>
              <li><strong>Promote High-Margin Items:</strong> Use beautiful imagery to draw attention to pastries, add-ons, and specialty drinks.</li>
              <li><strong>Enhance Your Ambiance:</strong> Create a modern, professional look that complements your cafe's design.</li>
              <li><strong>Communicate in Real-Time:</strong> Instantly update your menu when you run out of a particular pastry or single-origin bean.</li>
              <li><strong>Dayparting:</strong> Automatically switch from a breakfast menu to a lunch menu to a happy hour menu.</li>
            </ul>
          </div>
        </div>
        <FaqSection faqs={faqs} />
      </div>
    </>
  );
}
