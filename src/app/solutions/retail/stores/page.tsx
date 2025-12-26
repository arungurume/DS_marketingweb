'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ShoppingBag, Clock, TrendingUp, Monitor, CheckCircle, Tag, ShoppingCart, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target } from 'lucide-react';

export default function RetailStoresPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Retail Stores", "item": "https://digitalsigns.ai/solutions/retail/stores" }
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
                                "name": "What is retail digital signage?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Retail digital signage is a network of digital displays used in stores to show promotions, brand messaging, and product information. It helps drive foot traffic, increase sales, and improve the customer experience." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I update screens remotely across multiple stores?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our cloud-based CMS allows you to push updates to one screen, one store, or your entire global network in seconds from any device." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support video and social media feeds?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can display high-definition videos, live Instagram/Social feeds, and dynamic web content to keep your store environment fresh and engaging." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I schedule promotions for specific times?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can schedule content to play at specific times of the day or dates, making it perfect for morning specials, weekend sales, or seasonal campaigns." }
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
                            <span className="text-[#2B7CD3]">Retail Stores</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            RETAIL & COMMERCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br /> Retail Stores
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize your retail environment with high-impact <strong>window displays</strong>, in-store promo screens, and <strong>interactive mirrors</strong>. Drive foot traffic, increase basket size, and build brand loyalty through dynamic visual storytelling and real-time promotions.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <ShoppingBag className="w-4 h-4" />
                                </span>
                                Drive foot traffic
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <TrendingUp className="w-4 h-4" />
                                </span>
                                Increase Sales
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Zap className="w-4 h-4" />
                                </span>
                                Instant updates
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Fashion Boutiques</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Multi-location Retailers</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Window Displays</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern retail store with digital signage displays"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: High-brightness window displays can increase foot traffic by up to 24%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why retailers choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Transform your physical space into a dynamic sales engine with enterprise-grade signage tools.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Centralized Brand Control</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Maintain global brand consistency while allowing local managers to push store-specific offers.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Data-Driven Promotions</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Sync with your POS to highlight low-stock items or push high-margin products automatically.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Engagement at Point-of-Sale</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Reduce perceived wait times at checkout with engaging lifestyle content and loyalty program signups.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Beyond just "screens on walls," our <strong>retail digital signage platform</strong> is an ROI-focused tool designed for rapid inventory updates, seasonal campaigns, and cross-store management.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Common Retail Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">From shopfront windows to checkout counters, every screen is an opportunity to engage.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Window Promo Loops", desc: "High-brightness displays that draw attention from the street even in direct sunlight." },
                            { title: "New Arrival Highlights", desc: "Feature the latest collections with high-definition video loops and professional photography." },
                            { title: "Seasonal Flash Sales", desc: "Deploy 'Sale' messaging across all screens instantly when inventory needs to move." },
                            { title: "Interactive Product Discovery", desc: "Touch-kiosks that help customers find their size, color, or extended catalog items." },
                            { title: "Social Proof Walls", desc: "Display real-time Instagram feeds of customers wearing your products to build trust." },
                            { title: "Digital Wayfinding", desc: "Guide customers through flagship stores with interactive maps and department lists." },
                            { title: "Employee Training", desc: "Use in-store screens during closed hours for staff training and morning huddle updates." },
                            { title: "Wayfinding & Directories", desc: "Simple, easy-to-read directories for large multi-floor retail spaces." },
                            { title: "Loyalty Program Signup", desc: "QR-code enabled screens that let customers join your rewards club instantly." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Enterprise Features for Retail</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Everything you need to manage a global retail signage network from one centralized cloud dashboard.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Multi-Store Management", desc: "Group screens by location, city, or region for targeted content deployment." },
                            { title: "POS & Data Integration", desc: "Sync with your inventory system to automatically promote high-stock or trending items." },
                            { title: "Smart Scheduling & Loops", desc: "Schedule dawn-to-dusk content or specific promo hours (e.g., Happy Hour or Weekend Sale)." },
                            { title: "Mobile Remote Control", desc: "Allow store managers to change specific screen content from their smartphones." },
                            { title: "System Monitoring", desc: "Real-time health checks on every screen in your network with email alerts for downtime." },
                            { title: "Template Library", desc: "Access hundreds of pre-designed retail templates for sales, holidays, and promo events." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Browse our <Link href="/templates?tag=retail" className="text-[#2563eb] font-extrabold hover:underline transition-colors">Retail Template Library</Link>,
                        learn about <Link href="/window-displays" className="text-[#2563eb] font-extrabold hover:underline transition-colors">High-Brightness Displays</Link>,
                        or check out <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline transition-colors">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Common questions about deploying digital signage in a retail environment.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is retail digital signage?</AccordionTrigger>
                                <AccordionContent>
                                    Retail digital signage is a network of digital displays used in stores to show promotions, brand messaging, and product information. It helps drive foot traffic, increase sales, and improve the customer experience.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I update screens remotely across multiple stores?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our cloud-based CMS allows you to push updates to one screen, one store, or your entire global network in seconds from any device.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support video and social media feeds?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can display high-definition videos, live Instagram/Social feeds, and dynamic web content to keep your store environment fresh and engaging.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I schedule promotions for specific times?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can schedule content to play at specific times of the day or dates, making it perfect for morning specials, weekend sales, or seasonal campaigns.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Do I need special hardware?</AccordionTrigger>
                                <AccordionContent>
                                    Our software works with most smart TVs (Samsung, LG, Sony), Android boxes, Amazon Fire Sticks, and specialized high-brightness signage players.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>How many screens can I manage?</AccordionTrigger>
                                <AccordionContent>
                                    Whether you have 1 screen or 10,000, our enterprise CMS is built to scale seamlessly.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2">Ready to boost your retail sales?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Join 5,000+ retail brands using .DS (DigitalSigns.ai) to capture attention and drive conversions. Start your 14-day free trial today.
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
