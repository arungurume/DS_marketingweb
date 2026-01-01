import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { FaqSection, type FaqItem } from '@/components/shared/FaqSection';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Seo } from '@/components/shared/Seo';
import type { FAQPage } from 'schema-dts';

const pageTitle = `Digital Pizza Menu Boards | ${SITE_NAME}`;
const pageDescription = 'Create mouth-watering digital menu boards for your pizza shop. Easily showcase combos, daily specials, and high-margin items to boost sales.';
const pageUrl = `${SITE_URL}/pizza-menuboard/`;

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

const pageImage = PlaceHolderImages.find((p) => p.id === 'pizza-menu');

const faqs: FaqItem[] = [
  {
    question: 'Can I schedule different menus for lunch and dinner?',
    answer: 'Absolutely! Our scheduling feature allows you to automatically switch menus at any time of day, any day of the week.',
  },
  {
    question: 'Is it easy to update prices?',
    answer: 'Yes. You can log in to your dashboard from any device and update prices, text, or images in seconds. The changes will appear on your screens instantly.',
  },
  {
    question: 'Can I show videos of my pizza being made?',
    answer: 'Yes, our system supports both images and videos. Showing delicious-looking video content is a great way to increase appetite and sales.',
  },
  {
    question: 'What hardware do I need?',
    answer: 'All you need is a TV with an HDMI port and an Amazon Fire TV Stick. It\'s a low-cost, high-performance solution.',
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

export default function PizzaMenuBoardPage() {
  return (
    <>
      <Seo schema={{ '@context': 'https://schema.org', ...jsonLd }} />
      <div className="pb-16 sm:pb-24">
        <PageHeader
          title="Digital Menu Boards for Pizza Shops"
          subtitle={pageDescription}
        />
        <div className="container mt-12 sm:mt-16">
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
            <h2 className="font-headline text-3xl font-bold text-primary">Showcase Your Slices in Style</h2>
            {pageImage && (
              <Image
                src={pageImage.imageUrl}
                alt={`A digital pizza menu board by ${SITE_NAME} displaying pizza and deals`}
                width={1200}
                height={800}
                className="rounded-xl shadow-lg my-8"
                data-ai-hint={pageImage.imageHint}
              />
            )}
            <p>
              A static menu board can't capture the deliciousness of your pizza. With {SITE_NAME}, you can bring your menu to life with sizzling videos, high-resolution photos, and eye-catching promotions. Instantly update your specials, promote profitable combos, and entice customers with dynamic visuals that make their mouths water.
            </p>
            <h3>Benefits of a Digital Pizza Menu:</h3>
            <ul>
              <li><strong>Increase Average Order Value:</strong> Automatically upsell by promoting combos, extra toppings, and sides.</li>
              <li><strong>Reduce Perceived Wait Times:</strong> Entertain waiting customers with engaging video content.</li>
              <li><strong>Instant Updates:</strong> 86 a topping? Update your menu in seconds from your phone or computer.</li>
              <li><strong>Save on Printing Costs:</strong> Never pay for a printed menu again. Your digital menu is always up-to-date.</li>
            </ul>
          </div>
        </div>
        <FaqSection faqs={faqs} />
      </div>
    </>
  );
}
