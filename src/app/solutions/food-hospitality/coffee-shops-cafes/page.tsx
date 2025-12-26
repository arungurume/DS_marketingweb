'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Coffee, Calendar, TrendingUp, Monitor, CheckCircle, Smartphone, Tag, MessageSquare, AlertCircle, ShoppingCart, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Heart } from 'lucide-react';

export default function CafesPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Coffee Shops & Cafes", "item": "https://digitalsigns.ai/solutions/food-hospitality/coffee-shops-cafes" }
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
                                "name": "How is digital signage used in coffee shops and cafes?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Coffee shops and cafes use digital signage for dynamic menu boards that highlight seasonal beverages, promoting loyalty programs, displaying community news, and featuring appetizing visuals of pastries and specialty brews. It helps reduce perceived wait times and increases average check sizes." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I schedule different menus for morning and afternoon?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform allows you to automatically transition from your morning rush menu (featuring breakfast items and espresso specials) to your afternoon menu (highlighting cold brews, lunch light-bites, and seasonal treats) without any manual intervention." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it integrate with my POS for easy price updates?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer seamless integrations with popular cafe POS systems like Square, Toast, and Clover, ensuring that any price or availability changes you make in your POS are instantly reflected on your digital menu boards." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-blue-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/food-hospitality" className="hover:text-blue-700 transition-colors font-medium">Food & Hospitality</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-blue-700">Coffee Shops & Cafes</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-blue-200 rounded-full text-xs font-semibold tracking-wider text-blue-700 uppercase mb-4 bg-blue-50">
                            CAFE & BEVERAGE SOLUTIONS
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Perk Up Sales with <br /> Cafe Digital Menus
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize your coffee shop atmosphere with <strong>stunning visual menu boards</strong>, automated seasonal promos, and <strong>loyalty program highlights</strong>. Capture attention and increase average order values by up to 20% with .DS (DigitalSigns.ai).
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-blue-700">
                                    <Coffee className="w-4 h-4" />
                                </span>
                                Seasonal Menus
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-blue-700">
                                    <Heart className="w-4 h-4" />
                                </span>
                                Loyalty Perks
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-blue-700">
                                    <Instagram className="w-4 h-4" />
                                </span>
                                Community Hub
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Independent Roasteries</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Multi-Location Cafe Chains</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Bakeries & Patisseries</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop"
                                    alt="Modern cafe interior with beautiful digital menu boards showing specialty coffee and pastries"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    Tip: Featuring a slow-moving video loop of latte art being poured can increase specialty drink sales by up to 15%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why cafe owners choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Streamline your operations and turn browse-time into buy-time with smart displays.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Boost Upselling Automatically</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Highlight seasonal pastries or newly launched cold brews with vibrant, mouth-watering imagery that drives impulse purchases.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Effortless Menu Management</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Update pricing, swap out 'Sold Out' items, or launch new drink specials across all your locations in seconds from your dashboard.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Build Local Community</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Establish your cafe as a neighborhood hub by displaying local weather, community events, and your latest social media posts.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In the fast-moving cafe world, <strong>coffee shop digital signage</strong> is more than just decoration—it's a critical tool for driving line efficiency and maximizing every transaction.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Cafe Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every guest interaction with purposeful, beautiful digital content.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Dynamic Menu Boards", desc: "Easily readable menus that highlight espresso drinks, lattes, and artisan coffee options." },
                            { title: "Mouth-Watering Pastry Reels", desc: "Feature close-up visuals of fresh croissants, muffins, and seasonal treats to drive cravings." },
                            { title: "Loyalty & Reward Highlights", desc: "Remind customers to scan their app or join your rewards program with dedicated screen prompts." },
                            { title: "Live Instagram Walls", desc: "Build social proof by displaying guest photos from your shop's latest tags and check-ins." },
                            { title: "QR Code 'Skip the Line' Ordering", desc: "Let regulars order from their phone by scanning a large, clear QR code while waiting in line." },
                            { title: "Local Weather & News Feeds", desc: "Keep guests informed and engaged with curated local updates that build neighborhood trust." },
                            { title: "Origin & Sustainability Stories", desc: "Share the journey of your coffee beans—from farm to cup—to build premium brand value." },
                            { title: "Limited Time Offer (LTO) Sliders", desc: "Dedicated screen space for seasonal favorites like Pumpkin Spice or Peppermint Mochas." },
                            { title: "Employee 'Barista Choice' Features", desc: "Highlight staff expertise and recommendations to humanize your brand and drive sales." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Cafe-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Professional-grade tools built for the high-intensity hospitality environment.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Seamless POS & Price Sync", desc: "Connect with platforms like Square or Toast to keep your pricing 100% accurate across all screens." },
                            { title: "Advanced Daypart Scheduling", desc: "Automatically transition from 'Morning Rush' menus to 'Chilled Afternoon' vibes at set times." },
                            { title: "Cloud Centralized Control", desc: "Manage 1 or 1,000 screens from any device. Update your specials from your phone in seconds." },
                            { title: "Professional Designer Template Library", desc: "Access 1,000+ custom cafe templates designed by high-end hospitality experts." },
                            { title: "Native Canva Integration", desc: "Design your own signature graphics in Canva and push them to your screens instantly." },
                            { title: "Offline Stability Mode", desc: "Content keeps playing even if the shop Wi-Fi blips, ensuring your menus never go dark." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=cafe" className="text-blue-700 font-extrabold hover:underline">Cafe Templates</Link>,
                        learn about <Link href="/integrations" className="text-blue-700 font-extrabold hover:underline">POS Integrations</Link>,
                        or see our <Link href="/pricing" className="text-blue-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for cafe owners and operations managers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in coffee shops and cafes?</AccordionTrigger>
                                <AccordionContent>
                                    Coffee shops and cafes use digital signage for dynamic menu boards that highlight seasonal beverages, promoting loyalty programs, displaying community news, and featuring appetizing visuals of pastries and specialty brews. It helps reduce perceived wait times and increases average check sizes.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I schedule different menus for morning and afternoon?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform allows you to automatically transition from your morning rush menu (featuring breakfast items and espresso specials) to your afternoon menu (highlighting cold brews, lunch light-bites, and seasonal treats) without any manual intervention.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it integrate with my POS for easy price updates?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. We offer seamless integrations with popular cafe POS systems like Square, Toast, and Clover, ensuring that any price or availability changes you make in your POS are instantly reflected on your digital menu boards.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple cafe locations from one place?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can push a global promotion or a price change to every screen in your entire shop network in seconds from your central dashboard.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-blue-50">Ready to perk up your daily sales?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our hospitality experts about setting up a high-impact, professional signage network for your shop today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
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
