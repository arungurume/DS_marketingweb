'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Truck, ShieldCheck, Zap, Monitor, Activity, ChevronRight, BarChart3, Bell, MapPin, ShieldAlert, Target, Search, Layout, Clock, TrendingUp, Info } from 'lucide-react';

export default function DeliveryPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-slate-100">

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
                            { "@type": "ListItem", "position": 3, "name": "Delivery Services", "item": "https://digitalsigns.ai/solutions/cannabis/delivery" }
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
                                "name": "How is digital signage used in cannabis delivery services?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Delivery services use digital signage in their fulfillment hubs for dispatch boards, driver status updates, real-time inventory levels, and localized promotional content to build brand awareness in high-traffic depot areas." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can it integrate with our dispatch software?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform connects via API to leading cannabis delivery and dispatch software (like Onfleet or Dutchie) to display live route and order data for the hub team." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is there a solution for mobile delivery vehicles?",
                                "acceptedAnswer": { "@type": "Answer", "text": "While our main focus is on stationary displays in hubs, our cloud CMS can power mobile screens and tablets in delivery vehicles for driver communication and localized customer-facing promotions." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-slate-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/cannabis" className="hover:text-slate-700 transition-colors font-medium">Cannabis</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-slate-700">Delivery Services</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-slate-200 rounded-full text-xs font-semibold tracking-wider text-slate-700 uppercase mb-4 bg-slate-50">
                            LOGISTICS & FULFILLMENT
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Smart Signage for <br /> Cannabis Delivery
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Optimize your fulfillment workflow with <strong>real-time dispatch dashboards</strong>, driver status screens, and <strong>inventory monitoring</strong>. Unify your logistics hub with high-visibility communication designed for fast-paced cannabis delivery operations.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-900 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-slate-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <BarChart3 className="w-4 h-4" />
                                </span>
                                Dispatch Metrics
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <Truck className="w-4 h-4" />
                                </span>
                                Driver Status
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <MapPin className="w-4 h-4" />
                                </span>
                                Inventory Map
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Delivery Hubs</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Fulfillment Centers</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Multi-State Logistics</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2670&auto=format&fit=crop"
                                    alt="Cannabis delivery fulfillment center with logistics monitoring screens"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-500" />
                                    Tip: Displaying real-time route efficiency and 'Orders Out' stats in fulfillment hubs can improve dispatch speed by 20%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why delivery leaders choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Professionalize your logistics environment with data-driven communication.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Dispatch Visibility</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Give every member of the fulfillment team a clear view of current orders, route statuses, and driver location updates.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Operational Speed</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly update route priorities, inventory warnings, and localized delivery news across every hub from a central operations office.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Compliance & Local Laws</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Keep drivers informed about zip-code specific regulations and state-mandated delivery window compliance rules.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a fast-growing delivery operation, <strong>logistics digital signage</strong> ensures your dispatchers and drivers are always in sync with your real-time inventory and route data.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Logistics & Delivery Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance communication and fulfillment speed across your entire distribution network.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Live Dispatch Boards", desc: "Digital screens showing ready-to-dispatch orders and assigned driver routes in fulfillment centers." },
                            { title: "Driver Queue Status", desc: "Display current driver check-ins and expected return times to manage labor efficiently." },
                            { title: "Inventory Low-Stock Alerts", desc: "Live-synced boards showing products that are out of stock or low in the hub vault." },
                            { title: "Localized Compliance News", desc: "Keep staff informed about town-specific ordinances and delivery hour rules for each zone." },
                            { title: "In-Car Tablet Communication", desc: "Use our CMS to power mobile driver screens for route changes and high-impact promos." },
                            { title: "Hub Performance KPI Walls", desc: "Track 'Average Order-to-Door Time' and other logistic metrics to drive team performance." },
                            { title: "Employee Shout-outs", desc: "Feature top-performing drivers and hub staff with customized graphics and company-wide news." },
                            { title: "Security & Safety Alerts", desc: "Instantly broadcast weather warnings or facility-wide security alerts for the fulfillment center." },
                            { title: "Customer-Facing In-Hub Signage", desc: "Screens in public-facing depot areas promoting your delivery brand and loyalty signups." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-slate-50 rounded-[18px] bg-white">
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Logistics-Grade Delivery Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, secure, and data-driven tools built for the world's most advanced delivery operations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Onfleet & Dutchie Integration", desc: "Connect with your dispatch software to pull live route and order data via secure API." },
                            { title: "Zonal Content Scheduling", desc: "Manage different content (Hub A vs. Hub B) from one central operations dashboard." },
                            { title: "Enterprise Fleet Monitoring", desc: "Track the health of every screen in your logística network with real-time downtime alerts." },
                            { title: "Mobile Display Support", desc: "Optimized playback for tablets and smaller screens in mobile delivery vehicles." },
                            { title: "High-Brightness Clarity", desc: "Optimized playback for bright fulfillment environments with high-contrast text and colors." },
                            { title: "Offline Data Persistence", desc: "Dashboards continue to display critical logistics data even if the hub internet falls offline." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=logistics" className="text-slate-700 font-extrabold hover:underline">Logistics Templates</Link>,
                        learn about <Link href="/integrations" className="text-slate-700 font-extrabold hover:underline">Dispatch Integrations</Link>,
                        or see our <Link href="/pricing" className="text-slate-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for delivery directors and hub operations teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in cannabis delivery services?</AccordionTrigger>
                                <AccordionContent>
                                    Delivery services use digital signage in their fulfillment hubs for dispatch boards, driver status updates, real-time inventory levels, and localized promotional content to build brand awareness in high-traffic depot areas.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can it integrate with our dispatch software?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform connects via API to leading cannabis delivery and dispatch software (like Onfleet or Dutchie) to display live route and order data for the hub team.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is there a solution for mobile delivery vehicles?</AccordionTrigger>
                                <AccordionContent>
                                    While our main focus is on stationary displays in hubs, our cloud CMS can power mobile screens and tablets in delivery vehicles for driver communication and localized customer-facing promotions.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple delivery sites?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can manage every screen across one hub or 50 global logistics sites from one centralized cloud dashboard, making facility-wide communication seamless and professional.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-slate-50">Ready to optimize your delivery operations?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our cannabis logistics experts about setting up a data-driven, secure signage network for your fulfillment centers today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-slate-700 hover:bg-slate-800 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
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
