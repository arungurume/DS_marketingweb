'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Martini, Calendar, PartyPopper, Monitor, Play, Smartphone, Tag, Music, AlertCircle, ShoppingCart, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search } from 'lucide-react';

export default function BarsNightclubsPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">

            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Solutions", "item": "https://digitalsigns.ai/solutions" },
                            { "@type": "ListItem", "position": 2, "name": "Food & Hospitality", "item": "https://digitalsigns.ai/solutions/food-hospitality" },
                            { "@type": "ListItem", "position": 3, "name": "Bars & Nightclubs", "item": "https://digitalsigns.ai/solutions/food-hospitality/bars-nightclubs" }
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
                                "name": "How is digital signage used in bars and nightclubs?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Bars and nightclubs use digital signage for automated happy hour menus, promoting VIP bottle service, hyping up upcoming DJ nights or live music, and displaying live social media feeds to engage guests. It also serves as a powerful wayfinding and branding tool in large venues." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I automate happy hour menu changes?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can schedule your screens to automatically switch to happy hour pricing at 4:00 PM and switch back to regular pricing at 7:00 PM without any manual effort from your staff." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show live sports and my own drink specials at the same time?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our platform allows you to use 'zones' on your screens. You can have a live TV feed (like a sports game) in one zone and your high-margin drink specials or upcoming event posters in another zone on the same screen." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-indigo-50/30">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-indigo-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-indigo-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/food-hospitality" className="hover:text-indigo-700 transition-colors font-medium">Food & Hospitality</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-indigo-700">Bars & Nightclubs</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-indigo-200 rounded-full text-xs font-semibold tracking-wider text-indigo-700 uppercase mb-4 bg-indigo-50">
                            NIGHTLIFE SOLUTIONS
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Amplify Revenue with <br /> Nightlife Signage
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Turn your venue into a visual powerhouse with <strong>dynamic bottle service menus</strong>, automated happy hour displays, and <strong>high-energy event posters</strong>. Hyperextend your brand and increase spirit sales by up to 30% with .DS (DigitalSigns.ai).
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-indigo-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-700">
                                    <Martini className="w-4 h-4" />
                                </span>
                                Drink Specials
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-700">
                                    <PartyPopper className="w-4 h-4" />
                                </span>
                                VIP Promos
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-700">
                                    <Music className="w-4 h-4" />
                                </span>
                                Event Posters
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-indigo-200 transition-colors">Best for: Sports Bars</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-indigo-200 transition-colors">Best for: Nightclubs & Lounges</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-indigo-200 transition-colors">Best for: Craft Breweries & Taprooms</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
                                    alt="High-energy nightclub with vibrant digital displays and VIP bottle service"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                    Tip: Use bright, high-contrast video backgrounds on your drink menus to ensure high readability in dark venue environments.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why nightlife operators choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Professionalize your atmosphere and drive higher ticket sizes with high-energy digital tools.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Automated Happy Hour</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Schedule your drink specials to appear and disappear automatically, ensuring your staff never has to manually update chalkboards or paper menus during the rush.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Promote High-Margin VIP</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Showcase your premium bottle service packages and exclusive VIP areas with high-impact video loops that drive aspiration and sales.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Real-Time Event Hype</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">instantly update upcoming DJ lineups, theme nights, or holiday parties across all your screens to maximize future ticket sales and loyalty.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In the high-energy nightlife market, <strong>bar and nightclub digital signage</strong> is more than just screen-time—it's a critical engine for driving atmosphere and revenue.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Nightlife Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Optimize every square inch of your venue to drive energy and sales.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Digital Drink & Tap Lists", desc: "Easily update craft beer lists and rotating cocktail specials in real-time as inventory changes." },
                            { title: "Dynamic Bottle Service Tables", desc: "Feature dedicated screen zones for VIP bottle prices and exclusive member-only offers." },
                            { title: "Upcoming DJ & Artist Reels", desc: "Hyp up future events with high-motion video trailers and artist profiles playing throughout the night." },
                            { title: "Live Instagram/Social Feed", desc: "Display live guest photos and tags to build social proof and keep the crowd engaged with your brand." },
                            { title: "Automated Happy Hour Boards", desc: "Set-and-forget scheduling that ensures your early-crowd deals are always clearly promoted." },
                            { title: "Wayfinding & Section ID", desc: "Guide guests through large venues to VIP booths, restrooms, or smoking areas with digital labels." },
                            { title: "Sponsor Brand Spotlights", desc: "Partner with beverage brands to feature high-resolution ad spots that generate additional revenue." },
                            { title: "Emergency Alert Override", desc: "Instantly clear all screens for emergency messaging or mandatory security announcements if needed." },
                            { title: "Valet & Coat Check Queues", desc: "Reduce lobby congestion by displaying car retrieval or coat check numbers digitally." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-indigo-50 rounded-[18px] bg-white">
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Built for the Night Shift</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, automated, and easy-to-use tools built for the world's most mission-critical hospitality environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Zone-Based Screen Layouts", desc: "Show live TV, drink specials, and social feeds simultaneously on the same display." },
                            { title: "Cloud Fleet Management", desc: "Push a global promotion to 1 or 1,000 screens across multiple cities from one dashboard." },
                            { title: "TapList & Untappd Sync", desc: "Direct connectors for beverage inventory platforms to keep your tap list 100% accurate." },
                            { title: "Offline Playback Mode", desc: "Your content keeps playing even if the venue Wi-Fi blips. Never let a network drop stop the party." },
                            { title: "Nightlife-Grade Template Library", desc: "Access 500+ high-contrast, professional templates designed specifically for low-light environments." },
                            { title: "Native Canva Integration", desc: "Design stunning event posters in Canva and publish them to your screens in one click." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=nightlife" className="text-indigo-700 font-extrabold hover:underline">Nightlife Templates</Link>,
                        learn about <Link href="/integrations" className="text-indigo-700 font-extrabold hover:underline">Hospitality Integrations</Link>,
                        or see our <Link href="/pricing" className="text-indigo-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for venue owners and event managers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in bars and nightclubs?</AccordionTrigger>
                                <AccordionContent>
                                    Bars and nightclubs use digital signage for automated happy hour menus, promoting VIP bottle service, hyping up upcoming DJ nights or live music, and displaying live social media feeds to engage guests. It also serves as a powerful wayfinding and branding tool in large venues.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I automate happy hour menu changes?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can schedule your screens to automatically switch to happy hour pricing at 4:00 PM and switch back to regular pricing at 7:00 PM without any manual effort from your staff.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Can I show live sports and my own drink specials at the same time?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. Our platform allows you to use 'zones' on your screens. You can have a live TV feed (like a sports game) in one zone and your high-margin drink specials or upcoming event posters in another zone on the same screen.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>What hardware do I need for my club?</AccordionTrigger>
                                <AccordionContent>
                                    Our software runs on various platforms, including Amazon Fire Stick (for simplicity) and high-performance commercial media players (for mission-critical 4K video walls). We recommend commercial-grade displays for longevity in nightclub environments.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-indigo-50">Ready to light up your venue?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our nightlife specialists about setting up a high-impact, scalable signage network for your club today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <Link href="/book-demo">Contact Sales</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/food-hospitality">Back to Food & Hospitality</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
