import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { alternativesData, CompetitorData } from '@/data/alternatives.data';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Check, X, ArrowRight, CheckCircle2, AlertTriangle, MonitorPlay } from 'lucide-react';

interface PageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return alternativesData.map((competitor) => ({
        slug: competitor.slug,
    }));
}

export function generateMetadata({ params }: PageProps): Metadata {
    const competitor = alternativesData.find((c) => c.slug === params.slug);

    if (!competitor) {
        return {
            title: 'Alternative not found',
        };
    }

    return {
        title: competitor.seoTitle,
        description: competitor.seoDescription,
    };
}

export default function AlternativePage({ params }: PageProps) {
    const competitor = alternativesData.find((c) => c.slug === params.slug);

    if (!competitor) {
        notFound();
    }

    const amazonLink = "https://hub.digitalsigns.ai/#/usermanagement/signin";
    const brandBlue = "#2B7CD3"; // DigitalSigns Blue
    const brandBlueLight = "#F0F7FF"; // Very light blue background

    const faqs = [
        {
            question: `Is DigitalSigns.ai a good alternative to ${competitor.brand}?`,
            answer: `Yes, DigitalSigns.ai is a top-rated ${competitor.brand} alternative for businesses who want a simpler, faster, and more modern digital signage experience without the complexity.`,
        },
        {
            question: `Which platform is easier to get started with?`,
            answer: `DigitalSigns.ai is designed for speed. You can get your first screen live in minutes using consumer hardware like Fire TV or Android TV, often with fewer steps than ${competitor.brand}.`,
        },
        {
            question: `Does DigitalSigns.ai support Android TV and Fire TV?`,
            answer: `Yes, DigitalSigns.ai has native support for Android TV, Amazon Fire TV, and the Amazon Signage Stick, making it easy to use affordable hardware.`,
        },
        {
            question: `How does the pricing compare?`,
            answer: `DigitalSigns.ai offers simple, transparent pricing with a 14-day free trial, often providing better value for growing businesses compared to enterprise-focused legacy platforms.`,
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
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

    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'DigitalSigns.ai',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android, FireOS',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: '14-day free trial',
        },
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />

            {/* Hero Section */}
            <section className="pt-6 pb-20 lg:pt-12 lg:pb-32 bg-white overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="max-w-4xl mb-12">
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-primary transition-colors">DigitalSigns.ai</Link>
                            <ArrowRight className="w-4 h-4 text-gray-300" />
                            <span className="text-primary">Alternatives</span>
                            <ArrowRight className="w-4 h-4 text-gray-300" />
                            <span className="text-gray-900">{competitor.brand}</span>
                        </div>

                        <p className="text-[#2B7CD3] font-bold text-lg md:text-xl uppercase tracking-wider mb-2">
                            {competitor.brand} Alternative
                        </p>

                        <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            DigitalSigns.ai <span className="text-gray-300 mx-1">vs.</span> {competitor.brand}
                        </h1>

                        <p className="font-body text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mb-8">
                            {competitor.intro} Upgrade to the modern standard for digital signage.
                        </p>

                        <div className="text-left w-full mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100 max-w-2xl">
                            <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Why businesses switch from {competitor.brand}:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    Faster setup with no sales calls
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    Better Android & Fire TV support
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    Transparent pricing without surprises
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#206bc4] text-white font-bold h-14 px-10 rounded-full transition-all text-base shadow-lg shadow-blue-500/20">
                                <a href={amazonLink} target="_blank" rel="noopener noreferrer">Start 14-Day Free Trial</a>
                            </Button>
                        </div>
                    </div>

                    {/* Snapshot Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* DigitalSigns.ai Card */}
                        <div className="rounded-[32px] border-2 border-[#2B7CD3] bg-[#F0F7FF] p-8 md:p-12 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute top-6 right-6 px-3 py-1 bg-[#2B7CD3] text-white text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Recommended
                            </div>
                            <h3 className="font-headline text-3xl font-bold text-gray-900 mb-2">DigitalSigns.ai</h3>
                            <p className="text-sm font-bold text-[#2B7CD3] uppercase tracking-wider mb-8">Modern & Fast</p>

                            <ul className="space-y-5 mb-8">
                                {[
                                    "Setup in < 5 minutes",
                                    "Native Fire TV & Android Apps",
                                    "100% Cloud-Based Management",
                                    "Beautiful, Modern Templates",
                                    "Self-Service (No Sales Call)",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                                        <div className="w-8 h-8 rounded-full bg-[#2B7CD3]/10 flex items-center justify-center shrink-0">
                                            <Check className="w-5 h-5 text-[#2B7CD3] stroke-[3px]" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-[#2B7CD3]/20">
                                <p className="text-gray-600 font-medium italic">
                                    "{competitor.uxAdvantage}"
                                </p>
                            </div>
                        </div>

                        {/* Competitor Card */}
                        <div className="rounded-[32px] border border-gray-200 bg-gray-50 p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-6 right-6 px-3 py-1 bg-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> Alternative
                            </div>
                            <h3 className="font-headline text-3xl font-bold text-gray-500 mb-2">{competitor.brand}</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-8">Legacy / Enterprise</p>

                            <ul className="space-y-5 mb-8">
                                {[
                                    "Often requires sales demo",
                                    "Can have complex pricing",
                                    "Steeper learning curve",
                                    "Legacy interface designs",
                                    "Slower deployment time"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-500 font-medium text-lg">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                            <X className="w-4 h-4 text-gray-400 stroke-[3px]" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-gray-200">
                                <p className="text-gray-400 font-medium italic">
                                    Best for: {competitor.competitorBestFor}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Comparison Table */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            DigitalSigns.ai vs {competitor.brand} at a Glance
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            Compare the key differences that matter for your business: speed, ease of use, hardware support, and target audience.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl bg-white">
                        <table className="w-full min-w-[900px]">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-6 px-8 text-left text-sm font-bold text-gray-900 uppercase tracking-wider w-1/4">Features</th>
                                    <th className="py-6 px-8 text-left text-sm font-bold text-[#2B7CD3] uppercase tracking-wider w-1/3 bg-[#F0F7FF]">DigitalSigns.ai</th>
                                    <th className="py-6 px-8 text-left text-sm font-bold text-gray-500 uppercase tracking-wider w-1/3 text-gray-600">{competitor.brand}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { f: "Free Trial", s: "14-day full access free trial", ft: competitor.trialText },
                                    { f: "Setup Speed", s: "Instant self-service (< 5 mins)", ft: "Varies (often slower)" },
                                    { f: "Hardware Support", s: "Consumer (Fire TV) & Pro Hardware", ft: "Often proprietary or PC-based" },
                                    { f: "User Experience", s: "Modern, drag-and-drop, simple", ft: "Often complex / technical" },
                                    { f: "Device Onboarding", s: "Enter 6-digit code (TV App)", ft: "Manual IP / Server config" },
                                    { f: "Ideal For", s: competitor.digitalsignsBestFor, ft: competitor.competitorBestFor },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-bold text-gray-900 text-sm">{row.f}</td>
                                        <td className="py-6 px-8 text-sm text-gray-800 bg-[#F0F7FF]/50 font-medium leading-relaxed flex items-center gap-2">
                                            {row.s.includes('DigitalSigns') || row.s.includes('Instant') ? <CheckCircle2 className="w-4 h-4 text-[#2B7CD3]" /> : null}
                                            {row.s}
                                        </td>
                                        <td className="py-6 px-8 text-sm text-gray-500 leading-relaxed">{row.ft}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-6 max-w-2xl mx-auto">
                        Comparison based on publicly available information and common customer feedback. Features and pricing may vary.
                    </p>

                    <div className="flex justify-center mt-12">
                        <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#206bc4] text-white font-bold h-12 px-8 rounded-full transition-all text-base shadow-lg shadow-blue-500/20">
                            <a href="https://hub.digitalsigns.ai/#/usermanagement/signin">
                                Try DigitalSigns.ai free for 14 days
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Industries / Where it shines */}
            <section className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Where DigitalSigns.ai Shines
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl">
                            A modern platform built for businesses that need to move fast and look professional.
                            Perfect for replacing legacy systems like {competitor.brand}.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Restaurants & QSR", items: ["Digital menu boards", "Dayparting schedules", "Price updates in seconds", "Video promotions"] },
                            { title: "Corporate", items: ["Lobby greeting screens", "KPI dashboards", "Internal announcements", "Meeting room signs"] },
                            { title: "Retail", items: ["In-store promotions", "Window displays", "Brand storytelling", "Social media walls"] },
                            { title: "Healthcare", items: ["Waiting room entertainment", "Queue management infosec", "Doctor profiles", "Health tips"] }
                        ].map((cat, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-100 transition-colors">
                                <h3 className="font-headline font-bold text-lg text-gray-900 mb-4">{cat.title}</h3>
                                <ul className="space-y-3">
                                    {cat.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#2B7CD3] mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[800px] mx-auto px-6">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((item, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-gray-100 bg-white rounded-xl px-6 shadow-sm">
                                <AccordionTrigger className="font-bold text-gray-900 hover:no-underline text-left py-6 text-lg">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#0F1115] text-white overflow-hidden relative">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2B7CD3]/10 to-transparent pointer-events-none" />

                <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Switch to the Modern Alternative</h2>
                        <p className="text-gray-400 text-xl leading-relaxed mb-8">
                            Stop struggling with complex software. Get your screens live today with DigitalSigns.ai.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#206bc4] text-white font-bold h-14 px-10 rounded-full transition-all text-base">
                                <a href={amazonLink}>Start Free Trial</a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="bg-transparent border-gray-700 text-white hover:bg-gray-800 font-bold h-14 px-10 rounded-full transition-all text-base">
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="bg-[#1C1F26] rounded-3xl p-8 border border-gray-800">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#2B7CD3]/20 flex items-center justify-center">
                                <MonitorPlay className="w-6 h-6 text-[#2B7CD3]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Instant Switching</h3>
                                <p className="text-gray-400 text-sm">Already have hardware?</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            If you are already using Fire TV Sticks or Android players with {competitor.brand}, you can simply download our app and switch in minutes. No new hardware required.
                        </p>
                        <p className="text-[#2B7CD3] font-bold text-sm uppercase tracking-wide">
                            Compatible with Fire OS, Android, and Web
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
