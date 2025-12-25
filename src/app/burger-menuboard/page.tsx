import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { FaqSection, type FaqItem } from '@/components/shared/FaqSection';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Seo } from '@/components/shared/Seo';
import type { FAQPage } from 'schema-dts';

const pageTitle = `Digital Burger Menu Boards | ${SITE_NAME}`;
const pageDescription = 'Make your burgers look irresistible with dynamic digital menu boards. Showcase your signature burgers, combos, and sides with juicy, high-definition visuals.';
const pageUrl = `${SITE_URL}/burger-menuboard/`;

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

const pageImage = PlaceHolderImages.find((p) => p.id === 'burger-menu');

const faqs: FaqItem[] = [
  {
    question: 'Can I create a "Build Your Own Burger" section?',
    answer: 'Yes! Our flexible editor lets you easily create sections for custom orders, showcasing all your available toppings, cheeses, and sauces.',
  },
  {
    question: 'How can a digital menu increase my sales?',
    answer: 'By using high-quality video and images, you can make your food look more appealing. You can also strategically place high-margin items and combo deals to guide customer choices and increase average order value.',
  },
  {
    question: 'Can I manage menus for multiple locations?',
    answer: 'Absolutely. Our platform is designed for multi-location management. You can push menu updates to all your restaurants at once, or manage each one individually.',
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

export default function BurgerMenuBoardPage() {
  return (
    <>
      <Seo schema={{ '@context': 'https://schema.org', ...jsonLd }} />
      <div className="pb-16 sm:pb-24">
        <PageHeader
          title="Sizzling-Hot Burger Menu Boards"
          subtitle={pageDescription}
        />
        <div className="container mt-12 sm:mt-16">
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
            <h2 className="font-headline text-3xl font-bold text-primary">Sell the Sizzle, Not Just the Burger</h2>
            {pageImage && (
              <Image
                src={pageImage.imageUrl}
                alt={`A digital menu board by ${SITE_NAME} showing delicious burgers in a restaurant`}
                width={1200}
                height={800}
                className="rounded-xl shadow-lg my-8"
                data-ai-hint={pageImage.imageHint}
              />
            )}
            <p>
              Your burgers are a feast for the eyes and the stomach. A digital menu board from {SITE_NAME} lets you show off your creations with juicy close-ups and mouth-watering videos. Guide customers to your most profitable items, promote daily specials, and create an ordering experience that's as satisfying as your food.
            </p>
            <h3>Benefits of a Digital Burger Menu:</h3>
            <ul>
              <li><strong>Drive Combo Sales:</strong> Visually pair burgers with fries and a drink to create irresistible combo deals.</li>
              <li><strong>Feature a "Burger of the Week":</strong> Easily create and display limited-time offers to generate excitement and repeat business.</li>
              <li><strong>Streamline Ordering:</strong> A clear, easy-to-read menu speeds up the decision-making process and reduces queues.</li>
              <li><strong>Show Off Your Ingredients:</strong> Use visuals to highlight fresh, local ingredients and build trust with your customers.</li>
            </ul>
          </div>
        </div>
        <FaqSection faqs={faqs} />
      </div>
    </>
  );
}
