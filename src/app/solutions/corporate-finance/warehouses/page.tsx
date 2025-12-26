'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Warehouse, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Package, ShieldCheck } from 'lucide-react';

export default function WarehousesPage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Corporate & Finance", "item": "https://digitalsigns.ai/solutions/corporate-finance" },
                            { "@type": "ListItem", "position": 3, "name": "Warehouses", "item": "https://digitalsigns.ai/solutions/corporate-finance/warehouses" }
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
                                "name": "How is digital signage used in warehouses?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Warehouses use digital signage for real-time inventory levels, fulfillment metrics, safety reminders (e.g., 'Days Without Accident'), forklift traffic alerts, and internal staff communication." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can it show live fulfillment data?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can sync with your Warehouse Management System (WMS) to display live picking speeds, order volumes, and daily shipping targets to keep the floor motivated." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support safety alerts?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can display oversized safety warnings, weather alerts, and important OSHA guidelines in high-traffic areas to maintain a safe working environment." }
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
                            <Link href="/solutions/corporate-finance" className="hover:text-[#2B7CD3] transition-colors">Corporate & Finance</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">Warehouses</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            LOGISTICS & INDUSTRIAL
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Smart Logistics <br /> & Warehouse Signage
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Optimize your supply chain with <strong>real-time fulfillment dashboards</strong>, automated safety alerts, and effective <strong>floor communication</strong>. Boost productivity and maintain a high safety standard with durable, cloud-managed displays throughout your facility.
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
                                <span className="w-7 h-7 rounded-md bg-amber-50 flex items-center justify-center text-amber-700">
                                    <Package className="w-4 h-4" />
                                </span>
                                Inventory Status
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <TrendingUp className="w-4 h-4" />
                                </span>
                                Picking Metrics
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center text-rose-700">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Safety Dashboards
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-amber-200 transition-colors">Best for: Fulfillment Centers</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-amber-200 transition-colors">Best for: Distribution Hubs</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-amber-200 transition-colors">Best for: 3PL Operators</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern warehouse facility with large digital dashboards showing logistics data"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                                    Tip: Displaying real-time picking speed vs. daily targets can improve floor efficiency by up to 15%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why logistics leaders choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Turn complex data into clear, actionable information for your entire workforce.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Real-Time Operational Visibility</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly see bottlenecks, shipping delays, and inventory shortages on high-visibility floor screens.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Commitment to Safety</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Keep safety top-of-mind with automated injury-free counters, PPE reminders, and dynamic floor alerts.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Enhanced Staff Engagement</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Bridge the communication gap with the warehouse floor through announcements and recognition loops.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a high-speed industrial environment, <strong>warehouse digital signage</strong> is more than just a monitor—it's a critical tool for safety, motivation, and operational control.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Logistics & Warehouse Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Digitize your facility to improve speed, safety, and employee morale.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Live Order Fulfillment Boards", desc: "Display current orders picked vs. daily goal to keep the team focused and motivated." },
                            { title: "Dynamic Safety Counters", desc: "Automated 'Days Since Last Incident' trackers and daily safety protocol checklists." },
                            { title: "Shipping Dock Status", desc: "Monitor which trucks are at which dock and their current loading/unloading progress." },
                            { title: "Forklift & Traffic Alerts", desc: "Visual warnings for high-traffic zones or maintenance-in-progress areas." },
                            { title: "Floor Staff Announcements", desc: "Display shift changes, cafeteria menus, and company news where deskless workers see it." },
                            { title: "Inventory Low-Stock Alerts", desc: "Automated warnings when key SKUs fall below threshold, visible to all floor managers." },
                            { title: "Emergency Evacuation Maps", desc: "Instantly switch all displays to show the nearest exit paths during emergency drills." },
                            { title: "Training & Onboarding Loops", desc: "Short video clips showing correct lifting techniques or machinery operation tips." },
                            { title: "Regional & Global Metrics", desc: "For large companies, show how this facility's performance compares to others in the network." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Industrial-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Professional tools built to withstand industrial environments and integrate with complex data systems.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "WMS & ERP Integrations", desc: "Direct connectors for SAP, Oracle, Blue Yonder, and custom warehouse management systems." },
                            { title: "High-Visibility Layouts", desc: "Large-font, high-contrast designs optimized for viewing from long distances in vast warehouses." },
                            { title: "Emergency Override", desc: "Global and site-specific emergency takeover for fire, weather, or security notifications." },
                            { title: "Smart Scheduling & Logic", desc: "Automatically change content based on the time of day, shift schedule, or specific data triggers." },
                            { title: "Secure Fleet Management", desc: "Manage 10 or 1,000 screens across multiple distribution centers from one master HQ dashboard." },
                            { title: "Durable Hardware Support", desc: "Compatible with high-brightness industrial monitors and ruggedized media players." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=logistics" className="text-amber-700 font-extrabold hover:underline">Logistics Templates</Link>,
                        learn about <Link href="/data-dashboards" className="text-amber-700 font-extrabold hover:underline">Dashboard Solutions</Link>,
                        or check out <Link href="/pricing" className="text-amber-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Answering key questions for warehouse ops and facility managers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in warehouses?</AccordionTrigger>
                                <AccordionContent>
                                    Warehouses use digital signage for real-time inventory levels, fulfillment metrics, safety reminders (e.g., 'Days Without Accident'), forklift traffic alerts, and internal staff communication.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can it show live fulfillment data?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can sync with your Warehouse Management System (WMS) to display live picking speeds, order volumes, and daily shipping targets to keep the floor motivated.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support safety alerts?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can display oversized safety warnings, weather alerts, and important OSHA guidelines in high-traffic areas to maintain a safe working environment.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple facilities at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our cloud CMS allows you to group screens by location, region, or function, making it easy to push global company news while keeping local floor metrics relevant.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-amber-50">Ready to modernize your logistics facility?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a data-driven signage network to improve safety and productivity.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <Link href="/book-demo">Contact Sales</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/corporate-finance">Back to Corporate</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
