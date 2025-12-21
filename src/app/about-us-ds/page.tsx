import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const pageTitle = `About ${SITE_NAME}`;
const pageDescription = 'Learn about the team, mission, and values behind DigitalSigns.ai. We are passionate about making digital signage simple and accessible for everyone.';
const pageUrl = `${SITE_URL}/about-us-ds/`;

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

const aboutUsImage = PlaceHolderImages.find((p) => p.id === 'about-us');

export default function AboutUsPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        title="We're on a mission to simplify digital signage."
        subtitle={pageDescription}
      />
      <div className="container mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>
              Founded in 2020, {SITE_NAME} was born from a simple observation: digital signage was too complicated, too expensive, and too fragmented. We saw businesses struggling with outdated software, clunky hardware, and a lack of creative freedom. We knew there had to be a better way.
            </p>
            <p>
              Our mission is to empower businesses of all sizes to create stunning, effective digital displays with ease. We believe that great technology should be accessible, intuitive, and beautiful. That's why we've built a powerful yet simple cloud-based platform that works with hardware you already own, like the Amazon Fire TV Stick.
            </p>
            <p>
              From local cafes to international retail chains, we're proud to help our customers tell their stories, engage their audiences, and grow their businesses.
            </p>
          </div>
          <div>
            {aboutUsImage && (
              <Image
                src={aboutUsImage.imageUrl}
                alt={aboutUsImage.description}
                width={1200}
                height={800}
                className="rounded-xl shadow-lg"
                data-ai-hint={aboutUsImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
