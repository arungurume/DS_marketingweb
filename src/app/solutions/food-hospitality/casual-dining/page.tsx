'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Utensils, Calendar, TrendingUp, Monitor, CheckCircle, Smartphone, Tag, MessageSquare, AlertCircle, ShoppingCart, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search } from 'lucide-react';

export default function CasualDiningPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100">

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
                            { "@type": "ListItem", "position": 3, "name": "Casual Dining", "item": "https://digitalsigns.ai/solutions/food-hospitality/casual-dining" }
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
                                "name": "How is digital signage used in casual dining restaurants?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Casual dining restaurants use digital signage for greeting guests in the lobby, displaying seasonal specials, promoting loyalty programs, and featuring mouth-watering visuals of signature dishes to drive higher check averages." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I update specials from my phone?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our cloud-based CMS allows you to update your 'Daily Specials' or 'Catch of the Day' instantly from any device with an internet connection." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it integrate with my POS?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer integrations with leading POS systems like Toast, Clover, and Square to sync your menu pricing and availability automatically." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-orange-50/30">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-orange-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-orange-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/food-hospitality" className="hover:text-orange-700 transition-colors font-medium">Food & Hospitality</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-orange-700">Casual Dining</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-orange-200 rounded-full text-xs font-semibold tracking-wider text-orange-700 uppercase mb-4 bg-orange-50">
                            RESTAURANT SOLUTIONS
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Boost Sales with <br /> Casual Dining Signage
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Transform your restaurant atmosphere with <strong>stunning visual menus</strong>, automated daily specials, and <strong>integrated loyalty promos</strong>. Capture attention and increase check averages by up to 20% with professional digital displays.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-orange-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <Link href="/start-free">Start Free</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-orange-700">
                                    <Utensils className="w-4 h-4" />
                                </span>
                                Visual Specials
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-orange-700">
                                    <Instagram className="w-4 h-4" />
                                </span>
                                Social Feeds
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-orange-700">
                                    <Layout className="w-4 h-4" />
                                </span>
                                Lobby Greeting
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-orange-200 transition-colors">Best for: Family Restaurants</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-orange-200 transition-colors">Best for: Sports Bars & Grills</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-orange-200 transition-colors">Best for: Bistro & Cafe Networks</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern casual dining restaurant with digital menu boards"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                                    Tip: Rotating mouth-watering visuals of your highest-margin appetizers in the lobby can increase their sales by 15%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why casual dining leaders choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Professionalize your atmosphere and drive higher ticket sizes with ease.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-orange-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Visual Menus</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Let your food do the talking with high-motion video and professional photography that drives cravings and sales.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-orange-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Automated Dayparting</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly switch from lunch to dinner menus at the exact right time without lifting a finger.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-orange-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Brand Consistency</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Ensure every location in your franchise network features the same high-quality promotions and brand standards.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a competitive dining landscape, <strong>casual dining digital signage</strong> is more than just "screens"—it's a powerful tool to engage guests and maximize every table's value.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Casual Dining Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Optimize every corner of your restaurant for engagement and sales.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Lobby Welcome & Wait Times", desc: "Greet guests elegantly and display current wait times to manage expectations and reduce stress." },
                            { title: "Digital Special Boards", desc: "Feature 'Catch of the Day' or 'Cocktail of the Month' with stunning visuals and descriptive copy." },
                            { title: "Bar-Behind Menus", desc: "Sleek, easy-to-read beer, wine, and cocktail lists that entice guests to explore your beverage program." },
                            { title: "Loyalty & App Promos", desc: "Encourage guests to join your rewards program with dedicated screen alerts and QR codes." },
                            { title: "Social Media Aggregation", desc: "Display live guest photos and reviews from Instagram to build social proof and community." },
                            { title: "Local Community News", desc: "Feature local events and news to establish your restaurant as a true community hub." },
                            { title: "Kitchen-to-Front Updates", desc: "Improve communication between the line and the front of house with internal-only displays." },
                            { title: "Employee Recognition", desc: "Feature 'Server of the Month' or team wins to boost morale and humanize your brand." },
                            { title: "Holiday & Event Hype", desc: "Promote upcoming Mother's Day brunch, Super Bowl parties, or holiday bookings with motion graphics." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-orange-50 rounded-[18px] bg-white">
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Restaurant-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, easy-to-use, and built for the high-intensity hospitality environment.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Cloud-Based Management", desc: "Update your menus and promos from anywhere—home, office, or on the road." },
                            { title: "POS & Inventory Sync", desc: "Connect with Toast or Square to automatically update pricing and remove out-of-stock items." },
                            { title: "Enterprise Fleet Control", desc: "Manage 1 or 1,000 screens across multiple locations with ease and real-time health alerts." },
                            { title: "Smart Scheduling & Logic", desc: "Schedule menus to change based on time of day, day of week, or even weather conditions." },
                            { title: "Professional Designer Library", desc: "Access 1,000+ restaurant-specific templates designed for high conversion." },
                            { title: "Offline Resilience", desc: "Your menus keep running even if the restaurant Wi-Fi blips. Never lose your shop floor." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=restaurant" className="text-orange-700 font-extrabold hover:underline">Restaurant Templates</Link>,
                        learn about <Link href="/integrations" className="text-orange-700 font-extrabold hover:underline">POS Integrations</Link>,
                        or see our <Link href="/pricing" className="text-orange-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for casual dining owners and managers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in casual dining restaurants?</AccordionTrigger>
                                <AccordionContent>
                                    Casual dining restaurants use digital signage for greeting guests in the lobby, displaying seasonal specials, promoting loyalty programs, and featuring mouth-watering visuals of signature dishes to drive higher check averages.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I update specials from my phone?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our cloud-based CMS allows you to update your 'Daily Specials' or 'Catch of the Day' instantly from any device with an internet connection.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it integrate with my POS?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. We offer integrations with leading POS systems like Toast, Clover, and Square to sync your menu pricing and availability automatically.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple locations at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can push a global promotion or a price change to every screen in your entire restaurant network in seconds from your central dashboard.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-orange-50">Ready to level up your dining experience?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our hospitality experts about setting up a high-conversion, professional signage network for your restaurant today.
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
