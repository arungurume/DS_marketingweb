'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Car, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Settings } from 'lucide-react';

export default function AutoDealershipsPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Auto Dealerships", "item": "https://digitalsigns.ai/solutions/retail/auto-dealerships" }
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
                                "name": "How is digital signage used in car dealerships?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Car dealerships use digital signage for showroom video walls, interactive vehicle configuration kiosks, service area status boards, and salesperson leaderboards." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show real-time vehicle specs?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can place tablets or small screens next to showroom vehicles to display dynamic pricing, specs, and financing options that are updated in real-time." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support service department status boards?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can display a 'Service Dashboard' in the waiting area to show customers when their vehicle is being worked on, ready for pickup, or if additional services are recommended." }
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
                            <span className="text-[#2B7CD3]">Auto Dealerships</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            RETAIL & COMMERCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Excellence for <br /> Auto Dealerships
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize your showroom with **high-definition video walls**, interactive vehicle spec screens, and **service department status boards**. Boost upsells, reduce perceived wait times in service areas, and create a premium brand experience for every car buyer.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signin">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700">
                                    <Car className="w-4 h-4" />
                                </span>
                                Showroom Promos
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Monitor className="w-4 h-4" />
                                </span>
                                Video Walls
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-orange-600">
                                    <Settings className="w-4 h-4" />
                                </span>
                                Service Boards
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Franchise Dealerships</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Exotic Car Showrooms</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Auto Service Centers</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern car showroom with digital video walls"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-500" />
                                    Tip: Video walls featuring immersive 4K footage of vehicles in motion increase showroom engagement by 40%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why car brands choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Enhance the sales journey from the first step in the door to the final service visit.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Immersive Showrooming</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Display ultra-HD vehicle features, safety technology, and lifestyle videos on high-impact video walls.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Service Transparency</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Keep customers happy in the waiting area with real-time status updates on their vehicle maintenance and repairs.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Sales Data Visualization</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Motivate your sales team with real-time leaderboards and performance stats displayed in back-office areas.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In an industry where visual appeal and customer trust are paramount, an <strong>automotive digital signage solution</strong> delivers a premium brand experience while automating routine information updates.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Auto Dealership Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Digitize every department—from the showroom floor to the service bays.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Large-Scale Video Walls", desc: "Feature brand cinematic commercials and feature highlights that capture attention from the street." },
                            { title: "Interactive Vehicle Configurators", desc: "Touchscreens that allow customers to view different colors, rims, and interior options for models." },
                            { title: "Service Status Dashboards", desc: "Waiting room screens showing 'In Progress', 'Detailing', and 'Ready for Pickup' in real-time." },
                            { title: "Finance & Leasing Promo Screens", desc: "Dynamic displays featuring current APR offers, lease specials, and trade-in valuations." },
                            { title: "Certified Pre-Owned Loops", desc: "Highlight your rotating stock of CPO vehicles with professional photography and key selling points." },
                            { title: "Customer Welcome Walls", desc: "Feature 'Welcome [Customer Name]' messages for scheduled test drives and VIP appointments." },
                            { title: "F&I Product Menus", desc: "Digital screens in the finance office explaining warranty options, ceramic coating, and protection plans." },
                            { title: "Service Lane Menus", desc: "Display oil change specials, tire deals, and seasonal maintenance packages in the service drive." },
                            { title: "Staff Leaderboards", desc: "Back-office screens showing daily/monthly sales goals and individual agent performance." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Dealership-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Robust tools built for high-HD content and complex data-driven displays.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "4K & 8K Video Support", desc: "Play heavy cinematic automotive files with zero stutter for a premium showroom feel." },
                            { title: "Service Management Integration", desc: "Sync with your service software (e.g., CDK, Reynolds) to automate vehicle status boards." },
                            { title: "Multi-Zone Layouts", desc: "Show vehicle specs on one side of a screen and current finance promos on the other simultaneously." },
                            { title: "Cloud Scheduling & Groups", desc: "Different content loops for the New Showroom vs. Service Waiting Room vs. Finance Office." },
                            { title: "Automated Compliance Sync", desc: "Ensure all finance disclosures and legal text are always up-to-date across every screen." },
                            { title: "Hardware Neutral CMS", desc: "Runs on LG webOS, Samsung Tizen, ChromeOS, and specialized media players for video walls." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/video-walls" className="text-[#2563eb] font-extrabold hover:underline">Showroom Video Walls</Link>,
                        browse <Link href="/templates?tag=automotive" className="text-[#2563eb] font-extrabold hover:underline">Auto Templates</Link>,
                        or see our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline">Pricing for Dealerships</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Buyer questions for car dealerships and automotive service centers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in car dealerships?</AccordionTrigger>
                                <AccordionContent>
                                    Car dealerships use digital signage for showroom video walls, interactive vehicle configuration kiosks, service area status boards, and salesperson leaderboards.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show real-time vehicle specs?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can place tablets or small screens next to showroom vehicles to display dynamic pricing, specs, and financing options that are updated in real-time.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support service department status boards?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can display a 'Service Dashboard' in the waiting area to show customers when their vehicle is being worked on, ready for pickup, or if additional services are recommended.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple locations at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our cloud CMS allows you to group dealerships by region or brand, making it easy to push global campaigns while allowing local pricing and service offers.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2">Ready to modernize your dealership?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about creating a custom video wall or service dashboard for your showroom today.
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
