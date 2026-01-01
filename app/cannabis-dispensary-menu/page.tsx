import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { FaqSection, type FaqItem } from '@/components/shared/FaqSection';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Seo } from '@/components/shared/Seo';
import type { FAQPage } from 'schema-dts';

const pageTitle = `Digital Cannabis Dispensary Menu Boards | ${SITE_NAME}`;
const pageDescription = 'Modern, compliant, and easy-to-update digital menu boards for your cannabis dispensary. Educate customers and drive sales with beautiful displays.';
const pageUrl = `${SITE_URL}/cannabis-dispensary-menu/`;

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

const pageImage = PlaceHolderImages.find((p) => p.id === 'cannabis-menu');

const faqs: FaqItem[] = [
  {
    question: 'Is your system compliant with state regulations?',
    answer: 'While our software provides the tools to display required information, it is your responsibility to ensure your content complies with all local and state regulations. Our flexible editor makes it easy to add disclaimers, THC/CBD content, and lab results.',
  },
  {
    question: 'Can I integrate with my POS system like Leafly or Weedmaps?',
    answer: 'While we don\'t offer direct POS integration at this time, our platform makes it extremely fast and easy to manually update your menu with current inventory and pricing from any device.',
  },
  {
    question: 'Can I show different menus for recreational and medical customers?',
    answer: 'Yes, you can use separate screens for medical and recreational menus, or use our scheduling feature to display different content on the same screen at different times if regulations permit.',
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

export default function CannabisMenuPage() {
  return (
    <>
      <Seo schema={{ '@context': 'https://schema.org', ...jsonLd }} />
      <div className="pb-16 sm:pb-24">
        <PageHeader
          title="High-Quality Menus for Your Dispensary"
          subtitle={pageDescription}
        />
        <div className="container mt-12 sm:mt-16">
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
            <h2 className="font-headline text-3xl font-bold text-primary">Educate, Engage, and Elevate</h2>
            {pageImage && (
              <Image
                src={pageImage.imageUrl}
                alt={`A compliant digital cannabis menu by ${SITE_NAME} inside a modern dispensary`}
                width={1200}
                height={800}
                className="rounded-xl shadow-lg my-8"
                data-ai-hint={pageImage.imageHint}
              />
            )}
            <p>
              In the competitive cannabis market, an informed customer is a happy customer. {SITE_NAME} provides a clean, modern, and compliant way to display your products. Say goodbye to confusing whiteboards and expensive printed menus. Our digital boards allow you to clearly present strains, pricing, THC/CBD content, and effects, helping customers make confident purchasing decisions.
            </p>
            <h3>Benefits for Your Dispensary:</h3>
            <ul>
              <li><strong>Ensure Compliance:</strong> Easily display required legal disclaimers and product information.</li>
              <li><strong>Educate Customers:</strong> Clearly list strain type (indica, sativa, hybrid), effects, and cannabinoid profiles.</li>
              <li><strong>Promote Specials:</strong> Instantly update your menu to feature daily deals, bundles, and new product drops.</li>
              <li><strong>Streamline Operations:</strong> Free up your budtenders from answering basic product questions so they can provide more valuable consultations.</li>
            </ul>
          </div>
        </div>
        <FaqSection faqs={faqs} />
      </div>
    </>
  );
}
