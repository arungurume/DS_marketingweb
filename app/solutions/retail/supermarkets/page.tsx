'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ShoppingCart, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Apple } from 'lucide-react';

export default function SupermarketsPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Supermarkets", "item": "https://digitalsigns.ai/solutions/retail/supermarkets" }
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
                                "name": "How is digital signage used in supermarkets?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Supermarkets use digital signage for dynamic menu boards in deli/bakery sections, aisle-end promotional displays, digital shelf talkers, and checkout area communication to reduce perceived wait times." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I automate pricing updates?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can integrate with your inventory or ERP systems to update pricing and promotional offers automatically across all screens in real-time." }
                            },
                            {
                                "@type": "Question",
                                "name": "What are digital shelf talkers?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Digital shelf talkers are small, high-resolution screens placed at the shelf edge to display vibrant product info, QR codes for recipes, and real-time discounts." }
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
                            <span className="text-[#2B7CD3]">Supermarkets</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            RETAIL & COMMERCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Smart Signage for <br /> Supermarkets
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize your grocery environment with <strong>dynamic deli menus</strong>, aisle-end special screens, and <strong>checkout line entertainment</strong>. Increase margin on fresh produce and decrease waste through real-time pricing and time-sensitive promotions.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Apple className="w-4 h-4" />
                                </span>
                                Fresh Produce Promos
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Tag className="w-4 h-4" />
                                </span>
                                Dynamic Pricing
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Clock className="w-4 h-4" />
                                </span>
                                Inventory Sync
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Grocery Chains</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Deli & Bakery Sections</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Multi-location Inventory Sync</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
                                    alt="Supermarket interior with digital signage over produces area"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: Use digital deli menus to update pricing and 'sold out' items in seconds from your phone.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why grocers choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Optimize inventory, reduce labor costs for signage, and create a modern shopping experience.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Waste Reduction</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly drop prices on short-dated produce using dynamic screens to clear inventory before it spoils.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Automated Dayparting</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Show breakfast bakery deals in the morning and dinner recipe ideas in the late afternoon automatically.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Retail Media Revenue</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Monetize your screen network by selling ad space to food and beverage brands within your store.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Common Supermarket Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every stage of the customer journey—from the entrance to the checkout.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Digital Deli Menus", desc: "Clearly display daily specials, pricing, and nutritional info with easy remote updates." },
                            { title: "Aisle-End Promos", desc: "Draw attention to high-margin products and weekly flyers with vibrant motion graphics." },
                            { title: "Recipe QR Codes", desc: "Display visual recipe cards with QR codes that load the list of ingredients on the customer's phone." },
                            { title: "Produce Area Educational Screens", desc: "Share tips on how to pick the best fruit, storage advice, and seasonal highlights." },
                            { title: "Queue Management / Entertainment", desc: "Reduce perceived wait times at checkout with lighthearted content and quick 'impulse buy' ads." },
                            { title: "Alcohol & Wine Pairing", desc: "Use digital screens in the wine section to suggest food pairings and highlight local selections." },
                            { title: "Staff Communication", desc: "Screens in breakrooms for shift schedules, safety protocols, and internal announcements." },
                            { title: "Promote Store App", desc: "Encourage app downloads and loyalty program signups at the point of choice." },
                            { title: "Emergency Public Alerts", desc: "Instantly take over screens for weather alerts or safety announcements." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Enterprise Features for Grocery</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Scalable tools built for high-inventory environments and multi-department management.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Data-Driven Menu Boards", desc: "Connect your deli or bakery menus to your inventory so items hide automatically when out of stock." },
                            { title: "Scheduled Dayparting", desc: "Automatically switch promotional content based on the time of day (e.g., lunch specials)." },
                            { title: "Integrated Weather Feeds", desc: "Automatically promote 'BBQ weather' items when the forecast is sunny, or 'comfort foods' when it's raining." },
                            { title: "Enterprise Scalability", desc: "Manage 500+ locations from a single master account with granular user permissions for store managers." },
                            { title: "Dynamic QR Code Generator", desc: "Create trackable QR codes for coupons and recipes directly within the signage CMS." },
                            { title: "System Monitoring & Alerts", desc: "Get real-time status of every display; ensure pricing information is always accurate." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore <Link href="/menu-board" className="text-[#2563eb] font-extrabold hover:underline">Digital Deli Boards</Link>,
                        browse <Link href="/templates?tag=grocery" className="text-[#2563eb] font-extrabold hover:underline">Grocery Templates</Link>,
                        or view our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline">Enterprise Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Buyer questions for supermarket and grocery digital signage.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in supermarkets?</AccordionTrigger>
                                <AccordionContent>
                                    Supermarkets use digital signage for dynamic menu boards in deli/bakery sections, aisle-end promotional displays, digital shelf talkers, and checkout area communication to reduce perceived wait times.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I automate pricing updates?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can integrate with your inventory or ERP systems to update pricing and promotional offers automatically across all screens in real-time.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>What are digital shelf talkers?</AccordionTrigger>
                                <AccordionContent>
                                    Digital shelf talkers are small, high-resolution screens placed at the shelf edge to display vibrant product info, QR codes for recipes, and real-time discounts.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>How difficult is it to manage displays across 100+ stores?</AccordionTrigger>
                                <AccordionContent>
                                    Our centralized dashboard is built for exactly this scale. You can update all 100 stores at once, or target specific regions, or even individual screens within seconds.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2">Ready to modernize your supermarkets?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Join top grocery retailers who use .DS (DigitalSigns.ai) to increase margins and reduce waste.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
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
