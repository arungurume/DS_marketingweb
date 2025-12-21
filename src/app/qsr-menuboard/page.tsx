import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { FaqSection, type FaqItem } from '@/components/shared/FaqSection';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Seo } from '@/components/shared/Seo';
import type { FAQPage } from 'schema-dts';

const pageTitle = `Digital Menu Boards for QSR | ${SITE_NAME}`;
const pageDescription = 'Increase sales and streamline operations in your Quick-Service Restaurant with dynamic digital menu boards. Update prices, promote combos, and cut down on printing costs.';
const pageUrl = `${SITE_URL}/qsr-menuboard/`;

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

const pageImage = PlaceHolderImages.find((p) => p.id === 'qsr-menu');

const faqs: FaqItem[] = [
  {
    question: 'How quickly can I update my menu?',
    answer: 'Updates are instant. As soon as you hit "publish" in your dashboard, the changes are reflected on your screens across all locations.',
  },
  {
    question: 'Can I schedule my menu to change from breakfast to lunch?',
    answer: 'Yes, this is one of our most popular features! Dayparting allows you to schedule automatic menu changes, so you\'re always showing the right items at the right time.',
  },
  {
    question: 'Will digital menus really increase my sales?',
    answer: 'Studies and our customers consistently show that digital menus increase sales. By using enticing visuals and strategically promoting high-margin items and combos, you can significantly lift your average order value.',
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

export default function QsrMenuBoardPage() {
  return (
    <>
      <Seo schema={{ '@context': 'https://schema.org', ...jsonLd }} />
      <div className="pb-16 sm:pb-24">
        <PageHeader
          title="The Future of QSR Menu Boards is Here"
          subtitle={pageDescription}
        />
        <div className="container mt-12 sm:mt-16">
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
            <h2 className="font-headline text-3xl font-bold text-primary">Faster Service, Higher Sales</h2>
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
              In the fast-paced world of Quick-Service Restaurants, speed and clarity are everything. {SITE_NAME} empowers you to create clean, easy-to-read menus that help customers make decisions faster. Use mouth-watering videos and dynamic promotions to guide their choices, increase order value, and reduce perceived wait times.
            </p>
            <h3>The Digital Advantage for Your QSR:</h3>
            <ul>
              <li><strong>Boost Efficiency:</strong> Clearer menus mean faster ordering and shorter queues.</li>
              <li><strong>Increase Profitability:</strong> Promote your most profitable items and combos with eye-catching visuals.</li>
              <li><strong>Centralized Control:</strong> Update pricing and menu items across all your franchise locations with a single click.</li>
              <li><strong>Eliminate Printing:</strong> Save thousands on printing and shipping costs for menu updates.</li>
            </ul>
          </div>
        </div>
        <FaqSection faqs={faqs} />
      </div>
    </>
  );
}
