import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const pageTitle = `Pricing | ${SITE_NAME}`;
const pageDescription = 'Find the perfect plan for your business. From our free-forever plan for single screens to enterprise solutions, we have you covered.';
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

const plans = [
    {
        name: "Free",
        price: "$0",
        pricePeriod: "/forever",
        description: "For single locations and getting started with digital signage.",
        features: [
            "1 Screen Included",
            "Unlimited Content Uploads",
            "Cloud Media Library",
            "Standard Support",
        ],
        isFeatured: false,
        cta: "Get Started for Free"
    },
    {
        name: "Pro",
        price: "$20",
        pricePeriod: "/screen/month",
        description: "For businesses looking to grow with powerful features.",
        features: [
            "Everything in Free, plus:",
            "Advanced Scheduling",
            "Custom Templates",
            "Priority Support",
            "No 'Powered By' Branding",
        ],
        isFeatured: true,
        cta: "Start Your Free Trial"
    },
    {
        name: "Enterprise",
        price: "Custom",
        pricePeriod: "",
        description: "For large organizations with custom needs and integrations.",
        features: [
            "Everything in Pro, plus:",
            "Dedicated Account Manager",
            "Custom Integrations (API)",
            "Personalized Onboarding",
            "SAML/SSO Integration",
        ],
        isFeatured: false,
        cta: "Contact Sales"
    }
]


export default function PricingPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        title="Find the Right Plan for You"
        subtitle="Simple, transparent pricing that scales with your business. No hidden fees."
      />
      <div className="container mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {plans.map(plan => (
                <div key={plan.name} className={cn(
                    "rounded-xl border shadow-sm p-8 flex flex-col h-full",
                    plan.isFeatured ? "bg-primary text-primary-foreground border-primary" : "bg-card"
                )}>
                    <h3 className="font-headline text-2xl font-bold">{plan.name}</h3>
                    <p className={cn("mt-4", plan.isFeatured ? "text-primary-foreground/80" : "text-muted-foreground")}>{plan.description}</p>
                    <div className="mt-6">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.pricePeriod && <span className="text-sm font-medium">{plan.pricePeriod}</span>}
                    </div>
                    <ul className="mt-8 space-y-4 flex-grow">
                        {plan.features.map(feature => (
                            <li key={feature} className="flex items-center gap-3">
                                <Check className="h-5 w-5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8">
                        <Button 
                            asChild 
                            size="lg" 
                            className={cn(
                                "w-full",
                                plan.isFeatured ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : "bg-primary text-primary-foreground"
                            )}
                        >
                            <Link href="#">{plan.cta}</Link>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
