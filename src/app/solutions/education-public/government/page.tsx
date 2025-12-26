'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Landmark, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, FileText, Map } from 'lucide-react';

export default function GovernmentPage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Education & Public", "item": "https://digitalsigns.ai/solutions/education-public" },
                            { "@type": "ListItem", "position": 3, "name": "Government", "item": "https://digitalsigns.ai/solutions/education-public/government" }
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
                                "name": "How is digital signage used in government buildings?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Government offices use digital signage for wayfinding in complex municipal buildings, public service announcements, digital notice boards for legal meetings, and real-time wait-room management." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can it show live public transit data?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can sync with municipal transit feeds to show real-time bus, train, and subway arrival times in public lobbies and citizen service centers." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is it secure for government IT environments?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We offer enterprise-grade security, SOC2 compliance, SSO integration, and secure cloud infrastructure to meet the rigorous security standards of local, state, and federal agencies." }
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
                            <Link href="/solutions/education-public" className="hover:text-[#2B7CD3] transition-colors">Education & Public</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">Government</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            EDUCATION & PUBLIC
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Public-Facing <br /> Government Signage
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize citizen services with <strong>integrated wait-time displays</strong>, smart municipal wayfinding, and <strong>real-time public service announcements</strong>. Build civic trust and improve communication across every agency with secure, cloud-managed displays.
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
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <FileText className="w-4 h-4" />
                                </span>
                                Digital Notices
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Map className="w-4 h-4" />
                                </span>
                                Wayfinding
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center text-rose-600">
                                    <ShieldAlert className="w-4 h-4" />
                                </span>
                                Secure & Compliant
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: City Halls</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: DMV & Service Centers</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Public Transit Hubs</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1577017040065-650ee4d43339?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern government building lobby with digital information kiosks and wait-time displays"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    Tip: Displaying clear wait times and service status in high-traffic offices reduces citizen anxiety and improves satisfaction scores.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why agencies choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Enhance the citizen experience and support agency missions through reliable, professional communication.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Reduced Perceived Wait</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Engaging public info and active wait-time boards make the waiting process feel significantly shorter for citizens.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Public Health & Safety</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Educate citizens on preventive care, seasonal wellness, and city-wide safety protocols directly in public waiting areas.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Agency Professionalism</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Replace outdated printed posters with clean, high-resolution digital displays that build citizen trust and project efficiency.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a government environment, <strong>public sector digital signage</strong> is a bridge between administrative efficiency and citizen service—providing necessary info while maintaining professionalism.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Government & Public Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every square foot of your agency to improve service delivery and citizen morale.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Lobby Wait-Time Dashboards", desc: "Display real-time queue status and ticket numbers for DMV, Social Security, or Tax offices." },
                            { title: "Digital Building Directories", desc: "Interactive or static maps helping citizens find specific departments and offices in complex government buildings." },
                            { title: "Public Service Announcements", desc: "Feature town hall highlights, community event dates, and municipal wellness programs." },
                            { title: "Agency Staff Credential Walls", desc: "Build trust by featuring city leaders, department heads, and key public servants." },
                            { title: "Live Transit Information", desc: "Keep citizens informed with real-time bus, train, and subway arrival times in public lobbies." },
                            { title: "Citizen Feedback QR Codes", desc: "Include QR codes on screens that allow citizens to fill out service satisfaction surveys on their own phones." },
                            { title: "Emergency Broadcast Alerts", desc: "Instant deployment of lock-down, inclement weather, or city-wide safety instructions." },
                            { title: "Multi-Language Support", desc: "Automatically cycle instructions and news in multiple languages to serve a diverse citizen base." },
                            { title: "Town Hall Live Streams", desc: "Broadcast live or recorded government meetings to keep the public informed on local decision-making." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Professional Features for Government</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, secure, and easy-to-manage tools designed for the unique needs of government agencies.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Secure Data Feed Integrations", desc: "Ability to pull wait times and queue info from agency software via secure APIs." },
                            { title: "Gov-Secured Template Library", desc: "Access 100+ professionally designed templates for public safety, city news, and agency info." },
                            { title: "Enterprise SSO & Security", desc: "High-level server security and compliance (SOC2) to protect your agency's network and data." },
                            { title: "Multi-Zone Display Support", desc: "Show city news on one side of a TV and live transit info on the other simultaneously." },
                            { title: "Emergency Alert Takeover", desc: "Instantly take over all agency screens for critical safety or public health announcements." },
                            { title: "Centralized Multisite Fleet", desc: "Manage 5 or 500 screens across multiple government buildings from one master dashboard." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=government" className="text-[#2563eb] font-extrabold hover:underline">Government Templates</Link>,
                        learn about <Link href="/wayfinding" className="text-[#2563eb] font-extrabold hover:underline">Public Wayfinding</Link>,
                        or see our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for agency managers and government IT teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in government buildings?</AccordionTrigger>
                                <AccordionContent>
                                    Government offices use digital signage for wayfinding in complex municipal buildings, public service announcements, digital notice boards for legal meetings, and real-time wait-room management.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can it show live public transit data?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can sync with municipal transit feeds to show real-time bus, train, and subway arrival times in public lobbies and citizen service centers.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it secure for government IT environments?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. We offer enterprise-grade security, SOC2 compliance, SSO integration, and secure cloud infrastructure to meet the rigorous security standards of local, state, and federal agencies.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I update multiple agencies at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can push a global public safety update to every screen in your entire municipal network in seconds, or target specific agencies based on their location or function.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-blue-50">Ready to modernize your agency's communications?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a citizen-centered signage network for your government building today.
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
                                    <Link href="/solutions/education-public">Back to Public</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
