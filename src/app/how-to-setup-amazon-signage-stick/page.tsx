import type { Metadata } from 'next';
import { AmazonSetupClient } from '@/components/shared/AmazonSetupClient';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const pageTitle = `How to Set Up Amazon Signage Stick with DShub | ${SITE_NAME}`;
const pageDescription = 'Follow our step-by-step guide to set up your Amazon Signage Stick with DigitalSigns.ai (DShub). Plug, connect, and start publishing in 5 minutes.';
const pageUrl = `${SITE_URL}/how-to-setup-amazon-signage-stick/`;

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

export default function AmazonSetupPage() {
    return <AmazonSetupClient />;
}
