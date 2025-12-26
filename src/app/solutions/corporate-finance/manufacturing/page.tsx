'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Factory, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Settings, ShieldCheck } from 'lucide-react';

export default function ManufacturingPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Manufacturing", "item": "https://digitalsigns.ai/solutions/corporate-finance/manufacturing" }
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
                                "name": "How is digital signage used in manufacturing?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Manufacturing facilities use digital signage for real-time production metrics (Andon boards), plant floor safety alerts, maintenance schedules, and internal employee announcements for deskless workers." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show live production data from my machines?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can integrate with your shop floor systems (SCADA, MES, or ERP) via custom APIs to display real-time machine status, output volume, and quality metrics." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support high-visibility safety alerts?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can display large-scale safety warnings, emergency evacuation paths, and real-time OSHA statistics in high-traffic floor areas to maintain safety compliance." }
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
                            <span className="text-[#2B7CD3]">Manufacturing</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            INDUSTRIAL & MANUFACTURING
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Visual Operations for <br /> Manufacturing
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Optimize your shop floor with <strong>real-time Andon boards</strong>, automated safety dashboards, and effective <strong>deskless worker communication</strong>. Increase OEE (Overall Equipment Effectiveness) and maintain a high safety standard with durable digital displays.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <Link href="/start-free">Start Free</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-orange-700">
                                    <Settings className="w-4 h-4" />
                                </span>
                                Production Metrics
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <TrendingUp className="w-4 h-4" />
                                </span>
                                Real-time OEE
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center text-rose-700">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Safety Alerts
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-orange-200 transition-colors">Best for: Production Lines</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-orange-200 transition-colors">Best for: Fab Plants</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-orange-200 transition-colors">Best for: Assembly Facilities</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern manufacturing plant with large digital production dashboards overhead"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                                    Tip: Manufacturing floors with real-time Andon boards see a 20% reduction in downtime response speed.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why plant managers choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Turn complex machine data into clear, visual signals that empower your production team.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Data-Driven Shop Floor</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Display real-time production targets, machine statuses, and shift performance clearly for everyone to see.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">High-Impact Safety Alerts</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly broadcast safety warnings, weather lockdowns, or PPE reminders across the entire plant floor.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Deskless Worker Connection</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Bridge the gap for workers who don't have company email—keep them updated on company news and internal policies.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a high-intensity industrial environment, <strong>manufacturing digital signage</strong> acts as the central nervous system—providing essential data, direction, and safety warnings in real-time.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Manufacturing & Industrial Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every square foot of your plant to improve efficiency, safety, and morale.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Live Andon Boards", desc: "Digital screens showing machine status (Green/Yellow/Red) and real-time production output." },
                            { title: "Dynamic Safety Dashboards", desc: "Automated 'Days Since Last Lost Time Accident' and daily safety protocol checklists." },
                            { title: "Shift Schedule Displays", desc: "Clear, high-visibility monitors showing current shift members, line leads, and upcoming rotations." },
                            { title: "Real-time OEE Viewers", desc: "Displays showing overall equipment effectiveness metrics for specific production lines or zones." },
                            { title: "Plant Floor Safety Alerts", desc: "Instantly deployoversized warnings for forklift traffic, maintenance zones, or hazardous conditions." },
                            { title: "Training & Safety Videos", desc: "Short video loops showing correct equipment handling or lockout/tagout (LOTO) procedures." },
                            { title: "Internal Company News", desc: "Feature town hall highlights, quarterly performance, and employee milestones for deskless staff." },
                            { title: "Maintenance & Downtime Info", desc: "Keep everyone informed about planned machine maintenance or unexpected production delays." },
                            { title: "Regional Competition Boards", desc: "Show how this plant's performance metrics compare to others in the company to build friendly competition." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Industrial-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Robust, secure, and data-driven tools built for the world's most demanding production environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "MES & SCADA Integrations", desc: "Direct connectors for your manufacturing execution systems to pull live machine data automatically." },
                            { title: "High-Visibility Designs", desc: "Large-font, high-contrast layouts optimized for viewing across vast, brightly-lit plant floors." },
                            { title: "Global Emergency Takeover", desc: "One-click activation for emergency alerts across all connected screens in your plant or global network." },
                            { title: "Smart Logic & Shift Rules", desc: "Automatically change content loops based on the active shift, production cycle, or specific downtime triggers." },
                            { title: "Durable Hardware Support", desc: "Compatible with high-brightness industrial monitors and ruggedized media players for harsh conditions." },
                            { title: "Secure Multisite Fleet", desc: "Manage 5 or 500 screens across multiple manufacturing sites from one master enterprise dashboard." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=manufacturing" className="text-orange-700 font-extrabold hover:underline">Industrial Templates</Link>,
                        learn about <Link href="/data-dashboards" className="text-orange-700 font-extrabold hover:underline">Andon Board Solutions</Link>,
                        or check out <Link href="/pricing" className="text-orange-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for plant managers and industrial IT teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in manufacturing?</AccordionTrigger>
                                <AccordionContent>
                                    Manufacturing facilities use digital signage for real-time production metrics (Andon boards), plant floor safety alerts, maintenance schedules, and internal employee announcements for deskless workers.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show live production data from my machines?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can integrate with your shop floor systems (SCADA, MES, or ERP) via custom APIs to display real-time machine status, output volume, and quality metrics.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support high-visibility safety alerts?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can display large-scale safety warnings, emergency evacuation paths, and real-time OSHA statistics in high-traffic floor areas to maintain safety compliance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>How many screens can I manage?</AccordionTrigger>
                                <AccordionContent>
                                    Our cloud CMS is built for scale. You can manage anything from a single safety board to thousands of screens across a global network of manufacturing plants from one dashboard.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-orange-50">Ready to modernize your production floor?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a data-driven visual operations network for your facility today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <Link href="/book-demo">Contact Sales</Link>
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
