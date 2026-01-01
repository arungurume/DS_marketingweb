'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Clock, Calendar, TrendingUp, Monitor, CheckCircle, Smartphone, Tag, MessageSquare, AlertCircle, ShoppingCart, Info, Instagram, ShieldAlert, ChevronRight } from 'lucide-react';

export default function QSRPage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Food & Hospitality", "item": "https://digitalsigns.ai/solutions/food-hospitality" },
                            { "@type": "ListItem", "position": 3, "name": "QSR", "item": "https://digitalsigns.ai/solutions/food-hospitality/qsr" }
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
                                "name": "What is QSR digital signage?",
                                "acceptedAnswer": { "@type": "Answer", "text": "QSR digital signage is software used to manage digital menu boards, kiosks, and indoor/outdoor displays for quick service restaurants. It enables instant updates, daypart scheduling, and targeted promotions." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I automate dayparting (breakfast, lunch, dinner)?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can schedule menus by time and day so screens automatically switch from breakfast to lunch to dinner without staff intervention." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I hide out-of-stock items in real time?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can quickly remove or hide items that are out of stock to prevent customer frustration and reduce order errors." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does this support drive-thru and outdoor displays?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. QSR setups commonly use high-brightness outdoor displays and drive-thru menu boards to improve readability and speed up ordering." }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you support self-order kiosks?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Self-order kiosks can be used to reduce staff workload and shorten wait times by letting customers place orders on interactive screens." }
                            },
                            {
                                "@type": "Question",
                                "name": "How fast can menu changes be published across multiple locations?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Menu changes can be published in seconds to one screen, one store, or all locations from a centralized dashboard." }
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
                            <Link href="/solutions/food-hospitality" className="hover:text-[#2B7CD3] transition-colors">Food & Hospitality</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">QSR</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            FOOD & HOSPITALITY
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            QSR Digital Signage <br /> Software
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            <strong>QSR digital signage</strong>—including menu boards, kiosks, and outdoor displays—boosts sales through instant updates, dayparting, and targeted upselling. Key use cases include automated menu changes, interactive ordering, promotional advertising, reducing perceived wait times, and managing inventory in real-time.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                            <Button asChild variant="ghost" size="lg" className="text-gray-600 font-bold h-12 px-6 rounded-xl hover:bg-gray-50">
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Clock className="w-4 h-4" />
                                </span>
                                Instant updates
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Calendar className="w-4 h-4" />
                                </span>
                                Dayparting
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <TrendingUp className="w-4 h-4" />
                                </span>
                                Upsell promos
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white">Best for: Multi-location QSR chains</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white">Best for: Franchise restaurants</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white">Best for: Drive-thru menu boards</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white">Best for: Self-order kiosks</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="/images/homepage/Burger_menuboard_h.png"
                                    alt="QSR digital signage with menu boards"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: Dayparting lets you switch breakfast → lunch → dinner automatically without staff effort.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why QSR brands choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Built for speed, consistency, and scale—so operators can move fast and stay accurate across locations.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Automated menu changes</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Update pricing, items, and nutrition instantly across one store or hundreds of locations.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Dayparting & scheduling</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Automatically switch menus (breakfast, lunch, dinner) at scheduled times.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Targeted promotions & upsells</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Feature LTOs, combos, and high-margin items with engaging visuals or videos.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Unlike generic signage tools, a <strong>QSR-focused digital signage CMS</strong> is built for rapid updates, daypart scheduling, and multi-location control—critical in fast-paced restaurant environments.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Common QSR digital signage use cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Menu boards, kiosks, drive-thru screens, order status displays, and more—designed to increase sales and reduce wait times.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Digital Menu Boards", desc: "Instantly update pricing, items, and nutritional information across one or many locations." },
                            { title: "Dayparting", desc: "Automatically switch menus (e.g., breakfast to lunch) at scheduled times." },
                            { title: "Drive-Thru & Outdoor Displays", desc: "High-brightness screens attract customers, promote items, and speed up the ordering process." },
                            { title: "Self-Order Kiosks", desc: "Interactive, touch-enabled screens allow customers to order directly, reducing staff workload and wait times." },
                            { title: "Promotional & Upselling Content", desc: "Feature limited-time offers (LTOs), combos, or high-margin items with engaging visuals or videos." },
                            { title: "Order Status Boards", desc: "Keep customers informed about when their orders are ready, reducing counter congestion." },
                            { title: "Social Media & User-Generated Content", desc: "Display customer posts, selfies, or reviews to build brand engagement and trust." },
                            { title: "Internal Communication", desc: "Use screens to display store hours, safety protocols, or employee hiring messages." },
                            { title: "Dynamic Inventory Control", desc: "Quickly hide out-of-stock items, preventing customer frustration and improving order accuracy." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Key features for QSR operations</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Everything you need to manage QSR digital signage across menu boards, kiosks, and drive-thru displays—without complexity.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Centralized signage CMS", desc: "Manage content for menu boards, kiosks, and indoor/outdoor screens from a single dashboard." },
                            { title: "Instant publishing at scale", desc: "Push updates to one screen, one store, or all locations in seconds." },
                            { title: "Dayparting rules", desc: "Schedule automated menu switching by time/day (breakfast, lunch, dinner, late-night)." },
                            { title: "Promotions & upsells", desc: "Run LTO campaigns, combos, and high-margin items with visuals/video for better conversions." },
                            { title: "Order status display support", desc: "Use dedicated screens to show order status and reduce congestion at the counter." },
                            { title: "Real-time item visibility", desc: "Hide out-of-stock items quickly to avoid frustration and reduce incorrect orders." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore <Link href="/menu-board" className="text-[#2563eb] font-extrabold hover:underline">digital menu boards</Link>,
                        browse <Link href="/templates?tag=menu-boards" className="text-[#2563eb] font-extrabold hover:underline">menu board templates</Link>,
                        or see <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline">digital signage pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">SEO-friendly buyer questions for QSR menu boards, kiosks, dayparting, and multi-location management.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is QSR digital signage?</AccordionTrigger>
                                <AccordionContent>
                                    QSR digital signage is software used to manage digital menu boards, kiosks, and indoor/outdoor displays for quick service restaurants. It enables instant updates, daypart scheduling, and targeted promotions.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I automate dayparting (breakfast, lunch, dinner)?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Schedule menus by time and day so screens automatically switch without staff intervention.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Can I hide out-of-stock items in real time?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can quickly remove or hide items that are out of stock to prevent customer frustration and reduce order errors.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Does this support drive-thru and outdoor displays?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. QSR setups commonly use high-brightness outdoor displays and drive-thru menu boards to improve readability and speed up ordering.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Do you support self-order kiosks?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Kiosks help reduce staff workload and shorten wait times by letting customers place orders on interactive screens.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>How fast can menu changes be published across multiple locations?</AccordionTrigger>
                                <AccordionContent>
                                    Menu changes can be published in seconds to one screen, one store, or all locations from a centralized dashboard.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2">Ready to modernize your QSR digital signage?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our team and we’ll recommend the best setup for menu boards, kiosks, and drive-thru screens across your locations.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold h-11 px-6 rounded-xl border border-transparent">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
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
