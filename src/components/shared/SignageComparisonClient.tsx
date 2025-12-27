'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight, Check, X, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export function SignageComparisonClient() {
    const amazonLink = "https://www.amazon.com/dp/B0D4FCG9MX/ref=pmkt_cmsdigital_web";

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100">
            {/* Hero Section */}
            <section className="pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/amazon-signage-stick" className="hover:text-[#FF9900] transition-colors">Amazon Signage Stick</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#FF9900]">Comparison</span>
                        </div>

                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Amazon Signage Stick <br className="hidden md:block" />
                            <span className="text-gray-400">vs.</span> Fire TV Stick
                        </h1>

                        <p className="font-body text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
                            Upgrade from consumer devices to the Amazon Signage Stick for Professional Digital Signage. Choose a device built for reliable 24/7 signage vs streaming entertainment apps.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold h-12 px-8 rounded-full transition-all text-sm shadow-lg shadow-orange-500/20">
                                <a href={amazonLink} target="_blank" rel="noopener noreferrer">Buy Signage Stick</a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-50 text-gray-900 border-gray-200 font-bold h-12 px-8 rounded-full transition-all text-sm">
                                <Link href="/amazon-signage-stick">Overview</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Snapshot Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Signage Stick Card */}
                        <div className="rounded-[32px] border-2 border-[#FF9900] bg-[#FFF9F0] p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-6 right-6 px-3 py-1 bg-[#FF9900] text-black text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Recommended
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-gray-900 mb-2">Amazon Signage Stick</h3>
                            <p className="text-sm font-bold text-[#FF9900] uppercase tracking-wider mb-6">Built for CMS</p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Purpose-built digital signage player",
                                    "Kiosk mode",
                                    "24/7 reliable",
                                    "Remote management"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-[#FF9900]/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5 text-[#FF9900] stroke-[3px]" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-[#FF9900]/20">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 font-medium">Available storage</span>
                                    <span className="font-bold text-gray-900">12 GB (Signage)</span>
                                </div>
                            </div>
                        </div>

                        {/* Fire TV Card */}
                        <div className="rounded-[32px] border border-gray-100 bg-gray-50 p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-6 right-6 px-3 py-1 bg-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> Consumer Device
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-gray-500 mb-2">Fire TV Stick</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Consumer Streaming</p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Optimized for home streaming",
                                    "No native kiosk",
                                    "Streaming prompts",
                                    "Manual relaunch"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-500 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                            <X className="w-3.5 h-3.5 text-gray-400 stroke-[3px]" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400 font-medium">Available storage</span>
                                    <span className="font-bold text-gray-500">~5–10 GB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-8 max-w-md mx-auto">
                        Data based on Amazon guidance for professional signage use. Engineered for CMS-first deployments.
                    </p>
                </div>
            </section>

            {/* Detailed Comparison Table */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Amazon Signage Stick vs Fire TV Stick at a Glance
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            Understand the key differences that matter for digital signage: uptime, kiosk mode, CMS integration, remote management, and real-world use.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl bg-white">
                        <table className="w-full min-w-[900px]">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-6 px-8 text-left text-sm font-bold text-gray-900 uppercase tracking-wider w-1/4">Features</th>
                                    <th className="py-6 px-8 text-left text-sm font-bold text-[#E47911] uppercase tracking-wider w-1/3 bg-[#FFF9F0]">Amazon Signage Stick</th>
                                    <th className="py-6 px-8 text-left text-sm font-bold text-gray-500 uppercase tracking-wider w-1/3">Fire TV Stick (4K/HD)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { f: "Primary purpose", s: "Professional digital signage player for business use.", ft: "Consumer streaming device for home entertainment." },
                                    { f: "Kiosk / lockdown mode", s: "Native kiosk mode boots straight into CMS and blocks non-signage apps.", ft: "Requires workarounds; not secure for public screens." },
                                    { f: "24/7 operation", s: "Optimized for continuous 24/7 playback.", ft: "Not designed for continuous commercial use; prone to prompts." },
                                    { f: "CMS launch after outage", s: "Automatically relaunches CMS after power/network outages.", ft: "Often returns to home screen; manual input needed." },
                                    { f: "Available storage", s: "Approx. 12 GB for signage content.", ft: "Approx. 5–10 GB shared with apps." },
                                    { f: "GPU & performance", s: "Strong performance for 4K menu loops.", ft: "Lower-performance GPU on several models." },
                                    { f: "Remote device management", s: "Supports Signage Manager status, reboot, and CMS restart.", ft: "No native centralized dashboard; relies on remotes." },
                                    { f: "Setup & bulk provisioning", s: "Plug and play – average setup up to 4× faster.", ft: "Must be configured individually with a remote." },
                                    { f: "Updates & maintenance", s: "Streamlined; device returns to kiosk mode automatically.", ft: "Updates can send device back to home screen." },
                                    { f: "Best use cases", s: "Restaurants, QSR, Hotels, Retail, Healthcare, Education.", ft: "Home streaming and simple internal use." },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-bold text-gray-900 text-sm">{row.f}</td>
                                        <td className="py-6 px-8 text-sm text-gray-700 bg-[#FFF9F0]/50 font-medium leading-relaxed">{row.s}</td>
                                        <td className="py-6 px-8 text-sm text-gray-500 leading-relaxed">{row.ft}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Industries / Where it shines */}
            <section className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Where the Amazon Signage Stick Shines
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl">
                            A single, signage-optimized device that works across restaurant menu boards, hospitality industry signage, retail, healthcare, education, and corporate communications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Restaurants & QSR", items: ["Digital menu boards", "Dayparting schedules", "Drive-thru screens", "Order pickup status"] },
                            { title: "Hospitality", items: ["Hotel lobby screens", "Conference boards", "Bar digital menus", "Wayfinding displays"] },
                            { title: "Retail & Corporate", items: ["In-store promos", "Window displays", "Internal comms", "Lobby branding"] },
                            { title: "Healthcare & Education", items: ["Waiting room info", "Queue management", "School announcements", "Cafeteria menus"] }
                        ].map((cat, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="font-headline font-bold text-lg text-gray-900 mb-4">{cat.title}</h3>
                                <ul className="space-y-3">
                                    {cat.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF9900] mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Overview */}
            <section className="py-24 bg-[#0F1115] text-white">
                <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Technical Highlights for Signage Workloads</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Optimized performance, storage, and networking make the Amazon Signage Stick a reliable choice for high-resolution menu loops and hospitality-grade digital signage.
                        </p>
                        <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold h-12 px-8 rounded-full transition-all">
                            <a href={amazonLink} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
                        </Button>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-[#FF9900] font-bold uppercase tracking-wider text-sm mb-4">Amazon Signage Stick Specs</h3>
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    { l: "Resolution", v: "4K UHD signage output" },
                                    { l: "OS", v: "Fire OS 8 (Signage optimized)" },
                                    { l: "CPU / GPU", v: "High-performance quad-core" },
                                    { l: "RAM", v: "Ample memory for CMS" },
                                    { l: "Storage", v: "~12 GB for cached content" },
                                    { l: "Connectivity", v: "Modern Wi-Fi" },
                                    { l: "Updates", v: "Auto-return to kiosk mode" },
                                ].map((spec, i) => (
                                    <div key={i} className="border-b border-gray-800 pb-2">
                                        <span className="block text-gray-500 text-xs uppercase font-bold mb-1">{spec.l}</span>
                                        <span className="block text-gray-200 font-medium">{spec.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-[800px] mx-auto px-6">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {[
                            { q: "Can I use a Fire TV Stick for digital signage?", a: "You can, but it is not recommended for professional use. Fire TV Sticks are designed as consumer streaming devices and often show ads, prompts, and home-screen interruptions that can disrupt signage playback." },
                            { q: "Which is better for restaurant digital menu boards?", a: "The Amazon Signage Stick is strongly recommended for restaurant menu boards. It supports kiosk mode, auto-relaunch after outages, better storage, and remote management—key requirements for QSR environments." },
                            { q: "Is the Amazon Signage Stick suited for hospitality industry signage?", a: "Yes. Hotels, resorts, and event venues can centrally manage lobby screens, conference boards, bar menus, and wayfinding signage using the Signage Stick." },
                            { q: "Does the Amazon Signage Stick support offline playback?", a: "Yes. With more available storage than most Fire TV Stick models, it can cache menu boards and promos for offline playback if the network drops." },
                            { q: "How does remote management work?", a: "The Amazon Signage ecosystem includes tools to monitor status, reboot devices, and relaunch the CMS without visiting each screen physically." },
                            { q: "Can I migrate from Fire TV Stick to the Amazon Signage Stick easily?", a: "Yes. If you are already using DigitalSigns.ai (DS / DShub), you can pair your new Signage Sticks, apply your existing signage profiles, and upgrade locations easily." },
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-gray-100">
                                <AccordionTrigger className="font-bold text-gray-900 hover:no-underline text-left">{item.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{item.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
