'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Map, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search } from 'lucide-react';

export default function ShoppingMallsPage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Retail & Commerce", "item": "https://digitalsigns.ai/solutions/retail" },
                            { "@type": "ListItem", "position": 3, "name": "Shopping Malls", "item": "https://digitalsigns.ai/solutions/retail/shopping-malls" }
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
                                "name": "What is digital wayfinding for malls?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Digital wayfinding is an interactive map system on touchscreens that helps mall visitors find stores, amenities, and parking. It can also display pathfinding routes and promotional ads for nearby tenants." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I sell advertising space on mall screens?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Mall operators frequently use our platform to manage retail media networks, scheduling paid advertisements for tenants and external brands to generate additional revenue." }
                            },
                            {
                                "@type": "Question",
                                "name": "Are the screens centrally managed?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can manage every directory, video wall, and kiosk screen from a single centralized dashboard, regardless of how many shopping centers you operate." }
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
                            <Link href="/solutions/retail" className="hover:text-[#2B7CD3] transition-colors">Retail & Commerce</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">Shopping Malls</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            RETAIL & COMMERCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br /> Shopping Malls
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Enhance the visitor experience with <strong>interactive wayfinding</strong>, large-scale video walls, and revenue-generating <strong>retail media networks</strong>. Modernize your shopping center with real-time event updates, directory screens, and high-impact tenant advertising.
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
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Map className="w-4 h-4" />
                                </span>
                                Interactive Wayfinding
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <TrendingUp className="w-4 h-4" />
                                </span>
                                Ad Revenue (Retail Media)
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Monitor className="w-4 h-4" />
                                </span>
                                Video Walls
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Regional Malls</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Lifestyle Centers</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Multi-story Parking Garages</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2574&auto=format&fit=crop"
                                    alt="Shopping mall interactive wayfinding kiosk"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: Malls using interactive wayfinding see a 30% increase in visitor dwell time.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why shopping centers choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Manage vast networks of directory kiosks and video walls with ease while unlocking new revenue streams.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Retail Media Monetization</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Turn your foot traffic into ad revenue by scheduling paid tenant promotions across high-traffic areas.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Frictionless Wayfinding</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Help visitors find what they need instantly with touch-enabled maps, 3D floor plans, and amenity lists.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Centralized Control</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Update directory listings, holiday hours, and event announcements globally or per individual kiosk in seconds.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Rather than static posters or outdated maps, a <strong>digital mall signage network</strong> provides real-time information, interactive guidance, and a powerful platform for tenant advertising.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Common Shopping Mall Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">From entrance kiosks to large atriums, digitize every facet of the mall visitor journey.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Interactive Wayfinding Kiosks", desc: "Touch-enabled maps that provide pathfinding routes to stores, dining, and restrooms." },
                            { title: "Atrium Video Walls", desc: "Large-scale displays that feature brand storytelling, event highlights, and mall-wide news." },
                            { title: "Digital Store Directories", desc: "Easily searchable lists of tenants categorized by type (Fashion, Food, Kids) on every floor." },
                            { title: "Tenant Advertising Loops", desc: "Scheduled rotations of high-definition ads from mall tenants to boost their foot traffic." },
                            { title: "Event & Holiday Promos", desc: "Highlight Santa visits, seasonal sales, and community events with dynamic screen takeovers." },
                            { title: "Parking Guidance Screens", desc: "Display real-time parking availability and directional signage to different parking levels." },
                            { title: "Social Media Engagement", desc: "Feature user-generated content from the mall's hashtag to build community and excitement." },
                            { title: "Amenity Info", desc: "Promote parent rooms, valet services, and playground locations using clear, visual cues." },
                            { title: "Emergency Public Messaging", desc: "Instantly deploy evacuation routes or safety alerts across all screens in the complex." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Enterprise Features for Malls</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Powerful tools designed for large-scale operations and multi-center management.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Kiosk Management Dashboard", desc: "Monitor and manage 3D wayfinding maps and directory listings from a centralized cloud CMS." },
                            { title: "Ad Campaign Scheduling", desc: "Assign specific time slots and frequencies to tenant ads with detailed playback reporting." },
                            { title: "3D Wayfinding Support", desc: "Deep integration with top wayfinding software to provide immersive pathfinding experiences." },
                            { title: "Multi-Zone Content", desc: "Display different content on screens in the Food Court vs. the Fashion Wing vs. the Parking Garage." },
                            { title: "Real-time Alerts & Monitoring", desc: "Automatic notifications if any kiosk or video wall goes offline; ensure 99.9% uptime for advertisers." },
                            { title: "High-Brightness Support", desc: "Optimized for high-brightness outdoor screens and sun-facing windows common in modern mall architecture." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore <Link href="/wayfinding" className="text-[#2563eb] font-extrabold hover:underline">Interactive Wayfinding</Link>,
                        learn about <Link href="/video-walls" className="text-[#2563eb] font-extrabold hover:underline">Large-Scale Video Walls</Link>,
                        or see our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline transition-colors text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Buyer questions for shopping center and mall digital signage.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is digital wayfinding for malls?</AccordionTrigger>
                                <AccordionContent>
                                    Digital wayfinding is an interactive map system on touchscreens that helps mall visitors find stores, amenities, and parking. It can also display pathfinding routes and promotional ads for nearby tenants.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I sell advertising space on mall screens?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Mall operators frequently use our platform to manage retail media networks, scheduling paid advertisements for tenants and external brands to generate additional revenue.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Are the screens centrally managed?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can manage every directory, video wall, and kiosk screen from a single centralized dashboard, regardless of how many shopping centers you operate.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Does wayfinding work on mobile phones too?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Many setups include a 'Send to Mobile' feature where visitors can scan a QR code on the kiosk to take the map and route with them on their phone.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2">Ready to digitize your shopping center?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about creating a custom wayfinding and ad network for your mall today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <Link href="/book-demo">Contact Sales</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/retail">Back to Retail</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
