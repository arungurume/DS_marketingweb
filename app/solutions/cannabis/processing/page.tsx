'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Factory, ShieldCheck, Zap, Monitor, Activity, ChevronRight, BarChart3, Bell, ClipboardCheck, ShieldAlert, Target, Search, Layout, Clock, TrendingUp, Info } from 'lucide-react';

export default function ProcessingPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Processing", "item": "https://digitalsigns.ai/solutions/cannabis/processing" }
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
                                "name": "How is digital signage used in cannabis processing facilities?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Processing facilities use digital signage for real-time production line metrics, safety protocol reinforcement (PPE, chemical handling), shift schedules, and batch tracking updates. It ensures high throughput while maintaining strict compliance." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can it integrate with our inventory/ERP system?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can pull data via API from various ERP and inventory management systems to display live production targets and batch status across the facility floor." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support emergency alerts?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. In the event of an extraction room leak or mechanical failure, management can instantly override all screens facility-wide with critical safety alerts and evacuation routes." }
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
                            <span className="text-slate-700">Processing</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-slate-200 rounded-full text-xs font-semibold tracking-wider text-slate-700 uppercase mb-4 bg-slate-50">
                            MANUFACTURING & EXTRACTION
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Precision Signage for <br /> Cannabis Processing
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Maximize throughput and maintain 100% compliance with <strong>real-time production dashboards</strong>, digital SOPs, and <strong>industrial safety alerts</strong>. Unify your processing floor with high-visibility communication designed for extraction and manufacturing environments.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-900 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-slate-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signin">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <BarChart3 className="w-4 h-4" />
                                </span>
                                Production Metrics
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Compliance SOPs
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <Bell className="w-4 h-4" />
                                </span>
                                Safety Alerts
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Extraction Facilities</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Edible Manufacturing</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Large-Scale Packaging</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
                                    alt="Cannabis processing facility with industrial equipment and digital workflow monitors"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-500" />
                                    Tip: Displaying real-time 'Units Per Hour' targets on the packaging floor can increase shift productivity by up to 18%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why processors choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Professionalize your industrial environment with enterprise-grade communications.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Production Accountability</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Publicly track batch progress and hourly targets to keep floor teams focused and accountable for facility KPIs.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Digital SOP Enforcement</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Ensure every worker sees mandatory PPE rules and batch-handling protocols at the point of action.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Crisis Response</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">In safety-critical extraction areas, our instant-override system ensures emergency alerts are seen immediately by all staff.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a modern cannabis manufacturing plant, <strong>processing digital signage</strong> bridges the gap between your ERP data and the actual humans moving product on the floor.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Manufacturing & Processing Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance safety, efficiency, and communication across your entire industrial floor.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Live Batch Tracking Dashboards", desc: "Digital boards showing current batch status, extraction stages, and drying times." },
                            { title: "Point-of-Action PPE Alerts", desc: "High-visibility screens in cleanrooms reminding staff of mandatory gowning and safety protocols." },
                            { title: "Production Line KPI Walls", desc: "Display 'Units Packaged Today' vs. target to drive healthy competition and team focus." },
                            { title: "Chemical & Extraction Safety", desc: "Dedicated monitors in extraction labs featuring live gas sensor data and hazard warnings." },
                            { title: "Digital Cleaning Logs", desc: "Rotation schedules for equipment sanitation that are visible to all staff and inspectors." },
                            { title: "Shift & Break Management", desc: "Facility-wide screens showing upcoming shift changes and break schedules for better labor flow." },
                            { title: "Compliance Audit Prep", desc: "Display current facility certifications and state-mandated signage requirements digitally." },
                            { title: "Employee News & Wins", desc: "Feature new product launches, trade show wins, and team birthdays to build culture." },
                            { title: "Automated Emergency Overrides", desc: "Instant facility takeover for fire, chemical spills, or mechanical equipment failure." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Industrial-Grade Processing Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, secure, and built for the most mission-critical manufacturing environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "ERP & Inventory Sync", desc: "Connect with your manufacturing software to pull live production data via secure API." },
                            { title: "Durable Hardware Support", desc: "Compatible with industrial-grade players and protective enclosures for factory environments." },
                            { title: "Role-Based Content Management", desc: "Empower floor managers to update specific zone boards while maintaining master control." },
                            { title: "State-Wide Alert System", desc: "Push safety or compliance updates to multiple processing sites instantly from HQ." },
                            { title: "High-Brightness Clarity", desc: "Optimized playback for bright industrial environments with high-contrast text and colors." },
                            { title: "Local-Network Persistence", desc: "Dashboards continue to display critical safety data even if the main internet falls offline." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=industrial" className="text-slate-700 font-extrabold hover:underline">Industrial Templates</Link>,
                        learn about <Link href="/integrations" className="text-slate-700 font-extrabold hover:underline">ERP Integrations</Link>,
                        or see our <Link href="/pricing" className="text-slate-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for manufacturing directors and processing ops teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in cannabis processing facilities?</AccordionTrigger>
                                <AccordionContent>
                                    Processing facilities use digital signage for real-time production line metrics, safety protocol reinforcement (PPE, chemical handling), shift schedules, and batch tracking updates. It ensures high throughput while maintaining strict compliance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can it integrate with our inventory/ERP system?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can pull data via API from various ERP and inventory management systems to display live production targets and batch status across the facility floor.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support emergency alerts?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. In the event of an extraction room leak or mechanical failure, management can instantly override all screens facility-wide with critical safety alerts and evacuation routes.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Is special hardware required for factory rooms?</AccordionTrigger>
                                <AccordionContent>
                                    While our software works on standard screens, we recommend industrial-grade displays or protective NEMA-rated enclosures for extraction areas with specific moisture or chemical requirements.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-slate-50">Ready to modernize your processing facility?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our cannabis manufacturing experts about setting up a secure, compliant signage network for your industrial plant today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-slate-700 hover:bg-slate-800 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
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
