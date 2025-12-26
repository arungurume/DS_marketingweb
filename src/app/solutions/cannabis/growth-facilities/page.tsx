'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Leaf, ShieldCheck, Zap, Monitor, Activity, ChevronRight, BarChart3, Bell, ThermometerSun, ShieldAlert, Target, Search, Layout, Clock, TrendingUp, Info } from 'lucide-react';

export default function GrowthFacilitiesPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-100">

            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Solutions", "item": "https://digitalsigns.ai/solutions" },
                            { "@type": "ListItem", "position": 2, "name": "Cannabis", "item": "https://digitalsigns.ai/solutions/cannabis" },
                            { "@type": "ListItem", "position": 3, "name": "Growth Facilities", "item": "https://digitalsigns.ai/solutions/cannabis/growth-facilities" }
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
                                "name": "How is digital signage used in cannabis growth facilities?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Growth facilities use digital signage for real-time environmental monitoring (temp, humidity, CO2), displaying daily task lists for cultivation teams, safety protocols and zone warnings, and key performance indicators (KPIs) related to crop health and harvest yields." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I integrate my environmental sensors?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can pull data from many IoT sensor networks and environmental controllers to display live dashboards throughout the facility, ensuring your team can react instantly to any changes in the grow environment." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it help with facility security and compliance?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can use screens to reinforce METRC compliance procedures, display mandatory visitor instructions, and instantly deploy facility-wide security alerts or lockdown protocols." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-emerald-50/30">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-emerald-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/cannabis" className="hover:text-emerald-700 transition-colors font-medium">Cannabis</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-emerald-700">Growth Facilities</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-emerald-200 rounded-full text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-4 bg-emerald-50">
                            CULTIVATION & GROW OPS
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Smart Signage for <br /> Growth Facilities
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Optimize your cultivation workflow with <strong>real-time environmental dashboards</strong>, automated task lists, and <strong>critical safety alerts</strong>. Unify communications across your greenhouse or indoor facility to ensure peak crop performance and team efficiency.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-emerald-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <Link href="/start-free">Start Free</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-700">
                                    <ThermometerSun className="w-4 h-4" />
                                </span>
                                Environment Dashboards
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-700">
                                    <Bell className="w-4 h-4" />
                                </span>
                                Safety Alerts
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-700">
                                    <Activity className="w-4 h-4" />
                                </span>
                                KPI Monitoring
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: Indoor Cultivation</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: Greenhouse Operations</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: MSO Facility Networks</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2670&auto=format&fit=crop"
                                    alt="Large-scale cannabis cultivation facility with digital monitoring screens"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    Tip: Real-time CO2 and humidity dashboards in grow rooms help workers identify and fix climate issues 50% faster.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why cultivation leaders choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Professionalize operations and empower your team with data-driven communication.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-emerald-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Data Transparency</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Give every worker sight-lines into critical grow data without needing to check handheld devices or sensors manually.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-emerald-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Operational Speed</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly update task lists, harvest dates, and facility news across every room from a central operations office.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-emerald-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Compliance & Safety</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Replace taped paper signs with clean, high-visibility digital protocols that meet strict state regulatory requirements.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a high-stakes cultivation environment, <strong>grow-op digital signage</strong> acts as the facility's central nervous system—connecting sensors, management, and workers in real-time.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Cultivation & Grow Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Optimize every zone of your facility for higher yields and safer operations.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Real-Time Climate Dashboards", desc: "Live-synced displays showing temp, humidity, VDP, and CO2 levels pulled from IoT sensors." },
                            { title: "Daily Cultivation Task Lists", desc: "Digital boards in each zone featuring daily feeding, pruning, and cleaning schedules." },
                            { title: "Harvest Countdown Boards", desc: "Track batch maturity and upcoming harvest dates to prepare labor and processing teams." },
                            { title: "Visitor & Security Check-In", desc: "Entrance screens displaying mandatory visitor protocols, non-disclosure notices, and security rules." },
                            { title: "Strain & Potency Logs", desc: "Internal reference screens for workers showing strain-specific care instructions and expected profiles." },
                            { title: "Facility-Wide Safety Alerts", desc: "Instant emergency takeover for fire, chemical leaks, or critical environmental failures." },
                            { title: "Team Motivational Boards", desc: "Feature harvest yields, employee of the month, and company-wide success milestones." },
                            { title: "Compliance Reference Walls", desc: "Digital plaques featuring required METRC procedures, PPE rules, and bio-security protocols." },
                            { title: "Live Facility Maps", desc: "Interactive or static maps helping new staff and inspectors navigate large multi-zone buildings." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-emerald-50 rounded-[18px] bg-white">
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Industrial-Grade Facility Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, secure, and data-driven tools built for the world's most advanced grow operations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Real-Time IoT Data Sync", desc: "Powerfully simple API connectors to pull data from TrolMaster, Argus, or custom sensor arrays." },
                            { title: "Zonal Content Control", desc: "Manage different content (Greenhouse 1 vs. Drying Room) from one central dashboard." },
                            { title: "Enterprise Fleet Monitoring", desc: "Track the health of every screen in your facility with real-time downtime alerts." },
                            { title: "Dynamic Task Logic", desc: "Schedule task lists to update based on grow cycles (Vegging vs. Flowering protocols)." },
                            { title: "Emergency Broadcast Override", desc: "Instantly take over all screens in the facility for critical safety or health announcements." },
                            { title: "Offline Data Caching", desc: "Your dashboards keep running even if the facility Wi-Fi blips. Never lose sight of your grow." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=facility" className="text-emerald-700 font-extrabold hover:underline">Industrial Templates</Link>,
                        learn about <Link href="/data-sync" className="text-emerald-700 font-extrabold hover:underline">IoT Integration</Link>,
                        or see our <Link href="/pricing" className="text-emerald-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for cultivation directors and facility ops teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in cannabis growth facilities?</AccordionTrigger>
                                <AccordionContent>
                                    Growth facilities use digital signage for real-time environmental monitoring (temp, humidity, CO2), displaying daily task lists for cultivation teams, safety protocols and zone warnings, and key performance indicators (KPIs) related to crop health and harvest yields.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I integrate my environmental sensors?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can pull data from many IoT sensor networks and environmental controllers to display live dashboards throughout the facility, ensuring your team can react instantly to any changes in the grow environment.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it help with facility security and compliance?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can use screens to reinforce METRC compliance procedures, display mandatory visitor instructions, and instantly deploy facility-wide security alerts or lockdown protocols.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple facility sites?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can manage every screen across one building or 50 global cultivation sites from one centralized cloud dashboard, making facility-wide communication seamless and professional.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-emerald-50">Ready to optimize your grow operations?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our cannabis cultivation experts about setting up a data-driven, secure signage network for your facility today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <Link href="/book-demo">Contact Sales</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/cannabis">Back to Cannabis</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
