'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Pizza, Clock, TrendingUp, Monitor, CheckCircle, Smartphone, Tag, MessageSquare, AlertCircle, ShoppingCart, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search } from 'lucide-react';

export default function PizzeriasPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100">

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
                            { "@type": "ListItem", "position": 3, "name": "Pizzerias", "item": "https://digitalsigns.ai/solutions/food-hospitality/pizzerias" }
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
                                "name": "What are the benefits of digital menu boards for pizzerias?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Digital menu boards for pizzerias allow for vibrant, high-definition displays of pizza toppings, crust options, and combo deals. They enable instant price updates, automated lunch/dinner menu switching, and the ability to highlight seasonal or 'limited time offer' pizzas with appetizing video content." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show different menus for lunch and dinner?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform includes powerful scheduling features that allow your menus to automatically switch from lunch specials (like 'Slice and Soda' combos) to full-size family dinner deals at pre-set times." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I integrate my online ordering system?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can display QR codes on your screens that link directly to your online order flow, or integrate with POS systems like Toast or Revel to show real-time order status and queue positions." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-red-50/30">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-red-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/food-hospitality" className="hover:text-red-700 transition-colors font-medium">Food & Hospitality</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-red-700">Pizzerias</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-red-200 rounded-full text-xs font-semibold tracking-wider text-red-700 uppercase mb-4 bg-red-50">
                            PIZZERIA SOLUTIONS
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Deliver Hotter Sales <br /> with Pizza Signage
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize your pizzeria with <strong>dynamic digital menu boards</strong>, mouth-watering topping animations, and <strong>order queue displays</strong>. Increase combo sales by up to 25% with vibrant, high-impact visuals that drive cravings.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-red-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-red-50 flex items-center justify-center text-red-700">
                                    <Pizza className="w-4 h-4" />
                                </span>
                                Visual Toppings
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-red-50 flex items-center justify-center text-red-700">
                                    <Tag className="w-4 h-4" />
                                </span>
                                Slice Combo Deals
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-red-50 flex items-center justify-center text-red-700">
                                    <Clock className="w-4 h-4" />
                                </span>
                                Order Queues
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-red-200 transition-colors">Best for: Slice Shops</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-red-200 transition-colors">Best for: Family Pizza Parlors</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-red-200 transition-colors">Best for: Delivery & Carryout Hubs</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern pizzeria interior with high-definition digital menu boards"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500" />
                                    Tip: Displaying slow-motion video of melting cheese and steam rising from a fresh pizza can increase 'Extra Cheese' topping requests by 20%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why pizzeria owners choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Streamline your operations and turn browse-time into buy-time with smart displays.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-red-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Visual Combo Upselling</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Clearly display 'Pie + Wings + Soda' bundles with high-resolution imagery that makes upselling natural and effective.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-red-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Instant Price Management</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Update ingredient costs or launch weekend specials across all your locations in seconds from your phone or laptop.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-red-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Reduced Line Stress</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Integrated order status boards keep customers informed and calm, allowing your counter staff to focus on serving, not answering 'Is it ready?'.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In the fast-paced pizza world, <strong>pizzeria digital signage</strong> is a critical tool for driving throughput and ensuring 100% menu accuracy during the busiest rushes.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Pizzeria Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Optimize every square inch of your shop for speed and flavor.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Digital Slice Menus", desc: "Clearly display available-now slices with pricing for quick lunch rushes." },
                            { title: "Mouth-Watering Hero Video", desc: "Feature slow-motion shots of fresh dough, melting cheese, and premium toppings." },
                            { title: "Real-Time Order Queues", desc: "Display 'Now Baking' and 'Ready for Pickup' status to manage lobby flow." },
                            { title: "Combo & Family Deal Boards", desc: "Highlight bundle savings to increase average check sizes automatically." },
                            { title: "QR Code Online Ordering", desc: "Let customers in line skip the wait by scanning a code to order on their phone." },
                            { title: "Promotional Sideboards", desc: "Dedicated screens for wings, desserts, and limited-time soda collaborations." },
                            { title: "Window 'Hunger' Displays", desc: "Draw in foot traffic with high-brightness street-facing screens showing fresh pizza." },
                            { title: "Social Proof Walls", desc: "Display guest tags and 5-star reviews from Google or Yelp to build trust." },
                            { title: "Community Event Hype", desc: "Sponsor a local team? Show their schedule and build your neighborhood brand." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-red-50 rounded-[18px] bg-white">
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Pizza-Ready Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Robust, easy-to-manage tools built for the heat of the kitchen and the speed of the counter.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Plug-and-Play Setup", desc: "Get your menus live in under 10 minutes with our low-cost media players and easy app." },
                            { title: "Native POS Integrations", desc: "Direct connectors for Toast, Revel, and Square to keep your prices and stock levels synced." },
                            { title: "Multi-Store Global Sync", desc: "Manage 50 shops as easily as 1. Push a discount or menu update to every store in seconds." },
                            { title: "Dayparting & Automation", desc: "Schedule 'Lunch Specials' to end and 'Family Dinner Deals' to begin automatically." },
                            { title: "Pizzeria Layout Library", desc: "Access 100+ professionally designed templates specifically for pizza shops." },
                            { title: "Heat-Resilient Playback", desc: "Our software works on enterprise-grade hardware that handles the high-temp pizzeria environment." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=pizza" className="text-red-700 font-extrabold hover:underline">Pizza Templates</Link>,
                        learn about <Link href="/integrations" className="text-red-700 font-extrabold hover:underline">POS Integrations</Link>,
                        or see our <Link href="/pricing" className="text-red-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for pizzeria owners and franchise operators.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What are the benefits of digital menu boards for pizzerias?</AccordionTrigger>
                                <AccordionContent>
                                    Digital menu boards for pizzerias allow for vibrant, high-definition displays of pizza toppings, crust options, and combo deals. They enable instant price updates, automated lunch/dinner menu switching, and the ability to highlight seasonal or 'limited time offer' pizzas with appetizing video content.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show different menus for lunch and dinner?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform includes powerful scheduling features that allow your menus to automatically switch from lunch specials (like 'Slice and Soda' combos) to full-size family dinner deals at pre-set times.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Can I integrate my online ordering system?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can display QR codes on your screens that link directly to your online order flow, or integrate with POS systems like Toast or Revel to show real-time order status and queue positions.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Do I need special screens for a pizzeria?</AccordionTrigger>
                                <AccordionContent>
                                    While standard TVs work, we recommend commercial-grade displays if they will be mounted near ovens or in high-heat areas. Our software runs on a wide range of hardware fits any budget.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-red-50">Ready to boost your pizza sales?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our pizza specialists about setting up a high-impact, professional signage network for your shop today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
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
