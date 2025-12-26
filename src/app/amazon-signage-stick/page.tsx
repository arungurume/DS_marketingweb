import type { Metadata } from 'next';
import { AmazonSignageStickClient } from '@/components/shared/AmazonSignageStickClient';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const pageTitle = `Amazon Signage Stick Digital Signage CMS | ${SITE_NAME}`;
const pageDescription = 'Turn any TV into a professional digital sign with the Amazon Signage Stick and DigitalSigns.ai CMS. Purpose-built for 24/7 business use.';
const pageUrl = `${SITE_URL}/amazon-signage-stick/`;

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
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
    },
};

export default function AmazonSignageStickPage() {
    return <AmazonSignageStickClient />;
}
