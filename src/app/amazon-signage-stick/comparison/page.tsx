import type { Metadata } from 'next';
import { SignageComparisonClient } from '@/components/shared/SignageComparisonClient';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const pageTitle = `Amazon Signage Stick vs Fire TV Stick Comparison | ${SITE_NAME}`;
const pageDescription = 'Compare Amazon Signage Stick vs Fire TV Stick. Discover why the Signage Stick involves kiosk mode, 24/7 reliability, and is better for digital signage.';
const pageUrl = `${SITE_URL}/amazon-signage-stick/comparison/`;

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
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
    },
};

export default function ComparisonPage() {
    return <SignageComparisonClient />;
}
