'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Truck, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, MapPin, WifiOff } from 'lucide-react';

export default function FoodTrucksPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Food Trucks", "item": "https://digitalsigns.ai/solutions/food-hospitality/food-trucks" }
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
                                "name": "How do digital menus work on food trucks with limited Wi-Fi?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Our platform features an offline stability mode. Once your content is downloaded to the media player, it will continue to play perfectly even if you lose internet connection while on the move or at a remote location." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I update my menu from my phone while at the truck?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can manage your entire menu, update prices, or mark items as 'Sold Out' instantly from our mobile-friendly dashboard using your smartphone's data connection." }
                            },
                            {
                                "@type": "Question",
                                "name": "Are the screens readable in bright sunlight?",
                                "acceptedAnswer": { "@type": "Answer", "text": "We recommend using high-brightness, semi-outdoor displays specifically designed for food trucks. These screens are built to combat glare and remain perfectly visible even in direct midday sun." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-blue-50/20">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-blue-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/food-hospitality" className="hover:text-blue-700 transition-colors font-medium">Food & Hospitality</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-blue-700">Food Trucks</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-blue-200 rounded-full text-xs font-semibold tracking-wider text-blue-700 uppercase mb-4 bg-blue-50">
                            MOBILE VENDING SOLUTIONS
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Rugged Digital Menus <br /> for Food Trucks
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Take your mobile business to the next level with <strong>sunlight-readable menu boards</strong>, instant 'Sold Out' updates, and <strong>location-based promos</strong>. Designed for the road, managed from anywhere with .DS (DigitalSigns.ai).
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-blue-700">
                                    <WifiOff className="w-4 h-4" />
                                </span>
                                Offline Playback
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-blue-700">
                                    <Monitor className="w-4 h-4" />
                                </span>
                                Sunlight Readable
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-blue-700">
                                    <MapPin className="w-4 h-4" />
                                </span>
                                Location Sync
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Gourmet Food Trucks</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Mobile Coffee Vans</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Pop-up Event Vendors</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern food truck with vibrant digital menu boards attached to the side"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    Tip: Digital menus on food trucks can increase order speed by up to 25% by making options clearer for customers in line.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why food truck owners choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Built for the unique challenges of mobile vending—rugged, reliable, and incredibly easy to update on the go.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Zero Connection Worries</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Our 'Offline-First' tech ensures your menus keep playing even if you're in a Wi-Fi dead zone at a festival or remote event.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Instant Sold-Out Swaps</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Run out of a popular item? Remove it from the board in 5 seconds from your phone to avoid customer disappointment and line delays.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Brilliant Day or Night</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Whether you're serving the lunch rush in direct sun or the late-night crowd, your text and imagery remain sharp and vibrant.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In the mobile world, <strong>food truck digital signage</strong> isn't just a menu—it's your most important salesperson, working 24/7 to draw in crowds and move the line faster.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Mobile Vending Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Flexible content strategies for every stop on your route.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Dynamic Daily Menus", desc: "Easily swap menus based on your location or time of day (Breakfast vs. Lunch)." },
                            { title: "Real-Time 'Sold Out' Tags", desc: "Instantly grey out or remove items that have run out to keep the line moving smoothly." },
                            { title: "Social Media 'Find Us' Promos", desc: "Show a QR code that leads to your live tracker or Instagram to build a following." },
                            { title: "High-Visibility Specials", desc: "Dedicate a screen or part of a screen to a 'Special of the Day' with high-res video loops." },
                            { title: "Combo Upsell Visuals", desc: "Feature mouth-watering images of meal deals to increase average order value by up to 15%." },
                            { title: "Brand Storytelling Loops", desc: "Share your truck's origin story or footage of food being prepared to engage guests while they wait." },
                            { title: "QR Code Ordering", desc: "Let customers scan a large QR code on the side of the truck to order and pay via phone." },
                            { title: "Sponsorship & Local Ads", desc: "Partner with local events or brands to display rotating logos and generate extra revenue." },
                            { title: "Night-Shift 'Glow-Mode'", desc: "Automatically switch to high-contrast, night-friendly designs for evening events and street stops." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-blue-50 rounded-[18px] bg-white">
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Road-Ready Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Professional-grade tools built specifically for the mobile hospitality environment.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "True Offline Playback", desc: "Content is stored locally on the player. If you lose signal, your menus stay 100% active." },
                            { title: "Mobile Dashboard Control", desc: "Full control of all your screens from your iPhone or Android device—no laptop needed." },
                            { title: "High-Brightness Optimization", desc: "Contrast-ready templates designed to be read in direct outdoor sunlight without washing out." },
                            { title: "Low-Power Consumption Mode", desc: "Energy-efficient software that won't drain your truck's generator or battery systems." },
                            { title: "Native Canva Integration", desc: "Design a new special on your phone in Canva and push it to the truck instantly." },
                            { title: "Rugged Hardware Support", desc: "Optimized for compact, vibration-resistant media players that survive the road." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=food-truck" className="text-blue-700 font-extrabold hover:underline">Food Truck Templates</Link>,
                        learn about <Link href="/hardware" className="text-blue-700 font-extrabold hover:underline">Outdoor Hardwares</Link>,
                        or see our <Link href="/pricing" className="text-blue-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for mobile vendors and food truck fleet operators.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How do digital menus work on food trucks with limited Wi-Fi?</AccordionTrigger>
                                <AccordionContent>
                                    Our platform features an offline stability mode. Once your content is downloaded to the media player, it will continue to play perfectly even if you lose internet connection while on the move or at a remote location.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I update my menu from my phone while at the truck?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can manage your entire menu, update prices, or mark items as 'Sold Out' instantly from our mobile-friendly dashboard using your smartphone's data connection.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Are the screens readable in bright sunlight?</AccordionTrigger>
                                <AccordionContent>
                                    We recommend using high-brightness, semi-outdoor displays specifically designed for food trucks. These screens are built to combat glare and remain perfectly visible even in direct midday sun.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple trucks from one place?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. If you operate a fleet, you can push global price changes or regional promos to every truck in your network simultaneously from your central dashboard.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-blue-50">Ready to boost your truck's daily intake?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our mobile vending experts about setting up a high-impact, rugged signage system for your food truck today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
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
