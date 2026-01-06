'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Landmark, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Landmark as BankIcon, BarChart3, ShieldCheck } from 'lucide-react';

export default function BanksFinancePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">

            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Solutions", "item": "https://digitalsigns.ai/solutions" },
                            { "@type": "ListItem", "position": 2, "name": "Corporate & Finance", "item": "https://digitalsigns.ai/solutions/corporate-finance" },
                            { "@type": "ListItem", "position": 3, "name": "Banks & Finance", "item": "https://digitalsigns.ai/solutions/corporate-finance/banks" }
                        ]
                    })
                }}
            />
            {/* JSON-LD for FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How is digital signage used in banks?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Banks use digital signage for live interest rate displays, financial literacy content, automated queue management, and promotional messaging for loans and investment services." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show live stock market or interest rate data?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform includes dynamic data widgets that can pull real-time feeds for interest rates, foreign exchange (FX) rates, and global stock market indices." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the system secure for bank environments?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We offer enterprise-grade security, SOC2 compliance, SSO integration, and secure cloud infrastructure to meet the stringent requirements of financial institutions." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-[#2B7CD3] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-[#2B7CD3] transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/corporate-finance" className="hover:text-[#2B7CD3] transition-colors">Corporate & Finance</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">Banks & Finance</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            CORPORATE & FINANCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Trust for <br /> Banks & Finance
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize your retail banking experience with <strong>live interest rate screens</strong>, automated queue messaging, and <strong>financial literacy content</strong>. Build client confidence and promote specialized financial services through professional, secure, and dynamic digital displays.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signin">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-700">
                                    <BarChart3 className="w-4 h-4" />
                                </span>
                                Live Interest Rates
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Clock className="w-4 h-4" />
                                </span>
                                Queue Management
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Enterprise Security
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: Retail Banking Branches</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: Wealth Management Offices</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: Stock Brokerages</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="/images/solutions/corporate-finance/banks-hero.jpg"
                                    alt="Modern corporate finance building and lobby"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    Tip: Displaying cross-sold financial products on signage can increase product awareness by up to 25%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Category */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why financial institutions choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Combine high-level security with dynamic communication to dominate the retail banking landscape.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Real-Time Data Accuracy</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Ensure mortgage rates, FX prices, and savings interest are always accurate across all branch displays via automated feeds.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Professional Brand Image</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Deliver high-definition messaging that aligns with your brand's commitment to excellence and modern technology.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Compliant Communication</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Centrally manage and update legal disclosures, ensuring every promotional screen remains fully compliant with regulations.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Beyond just "moving images," a <strong>bank digital signage network</strong> is a critical link in the customer service chain—providing essential data, direction, and trust.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Financial Industry Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance the branch experience and improve service delivery with smart digital displays.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Live Interest Rate Boards", desc: "Automated screens showing the latest mortgage, savings, and CD rates." },
                            { title: "FX Rate Displays", desc: "Real-time currency exchange rates for international travel and business banking." },
                            { title: "Integrated Queue Displays", desc: "Keep customers informed about their place in line for teller or consultation services." },
                            { title: "Financial Literacy Tips", desc: "Educational content about retirement planning, home buying, and credit management." },
                            { title: "Personalized Loan Promos", desc: "Highlight mortgage specials or auto loan rates based on seasonal home/car buying trends." },
                            { title: "Premium Client Lounges", desc: "Upscale lifestyle content and branded storytelling for wealth management and VIP areas." },
                            { title: "CSR/Staff Recognition", desc: "Internal screens featuring top-performing tellers and branch managers." },
                            { title: "ATM Surround Signage", desc: "Promo screens near ATMs highlighting digital banking features and card security." },
                            { title: "Branch Hour Updates", desc: "Instantly update holiday hours or temporary closures across the entire branch network." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Banking-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Robust, secure, and data-driven tools built for the world's most demanding financial environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Encrypted Data Feeds", desc: "Securely pull interest rates and market data via encrypted HTTPS/API connections." },
                            { title: "SOC2 & Enterprise Security", desc: "High-level server security and compliance to protect your internal network and data." },
                            { title: "Group-Based Management", desc: "Manage content for 1,000+ branches globally, allowing for regional vs. national campaigns." },
                            { title: "Emergency Messaging", desc: "Instant override for critical alerts or unforeseen branch status changes across all screens." },
                            { title: "Professional Templates", desc: "Access a library of finance-specific templates for loans, investment, and branding." },
                            { title: "Remote System Monitoring", desc: "Real-time status checks to ensure 100% visibility for your most important data screens." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=finance" className="text-emerald-700 font-extrabold hover:underline">Finance Templates</Link>,
                        learn about <Link href="/data-widgets" className="text-emerald-700 font-extrabold hover:underline">Live Data Widgets</Link>,
                        or check out <Link href="/pricing" className="text-emerald-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for financial institution operators and IT teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in banks?</AccordionTrigger>
                                <AccordionContent>
                                    Banks use digital signage for live interest rate displays, financial literacy content, automated queue management, and promotional messaging for loans and investment services.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show live stock market or interest rate data?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform includes dynamic data widgets that can pull real-time feeds for interest rates, foreign exchange (FX) rates, and global stock market indices.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is the system secure for bank environments?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. We offer enterprise-grade security, SOC2 compliance, SSO integration (Azure, Okta), and secure cloud infrastructure to meet the stringent requirements of financial institutions.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I update all 100 branches at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can push a global campaign to every screen in your entire network in seconds, or target specific branches based on their location or specialization (e.g., mortgage centers).
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-24 pt-12 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-[#0b1220] rounded-[26px] p-10 md:p-14 text-white">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-emerald-50">Ready to modernize your financial institution?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a secure, data-driven signage network for your branches today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/corporate-finance">Back to Corporate</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
