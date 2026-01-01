import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { PricingGrid } from '@/components/sections/PricingGrid';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const pageTitle = `Simple Pricing | ${SITE_NAME}`;
const pageDescription = 'Start for free and scale as you grow. Transparent pricing for businesses of all sizes.';
const pageUrl = `${SITE_URL}/pricing/`;

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

export default function PricingPage() {
    return (
        <div className="pb-16 sm:pb-24">
            <PageHeader
                title="Simple pricing, by the screen"
                subtitle="7 day free trial. No credit card required."
            />
            <div className="container mt-12 sm:mt-16">
                <PricingGrid />
            </div>
        </div>
    );
}
