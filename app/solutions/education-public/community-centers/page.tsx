'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Users, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Book, Calendar } from 'lucide-react';

export default function CommunityCentersLibrariesPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Community Centers & Libraries", "item": "https://digitalsigns.ai/solutions/education-public/community-centers" }
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
                                "name": "How is digital signage used in libraries and community centers?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Libraries and community centers use digital signage for event calendars, book recommendations, room reservation status, town hall announcements, and real-time public service info." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show live weather or news feeds?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform includes dynamic widgets that can display real-time weather forecasts, local news headlines, and emergency alerts to keep the public informed while they visit." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is it easy for non-technical staff to update?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We provide a very user-friendly interface with pre-built templates, meaning librarians or community leads can update event details or news in seconds with no IT help required." }
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
                            <span className="text-[#2B7CD3]">Community Centers & Libraries</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            EDUCATION & PUBLIC
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Connected Hubs for <br /> Communities
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Foster local engagement with <strong>dynamic community event calendars</strong>, helpful book recommendations, and <strong>smart room booking displays</strong>. Unify communications across every public facility with simple, professional, and cloud-managed displays.
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
                                <span className="w-7 h-7 rounded-md bg-stone-50 flex items-center justify-center text-stone-700">
                                    <Calendar className="w-4 h-4" />
                                </span>
                                Event Calendars
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Book className="w-4 h-4" />
                                </span>
                                Reading Lists
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                                    <Users className="w-4 h-4" />
                                </span>
                                Public Info
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Public Libraries</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Recreation Centers</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Senior Hubs</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern public library with digital information boards and event calendars"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    Tip: Libraries with digital book recommendation screens see a 15-20% increase in checkout rates for featured titles.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why community leaders choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Enhance public information flow and foster a more connected local culture through simple, digital communication.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Increased Event Awareness</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Ensure every visitor knows about upcoming classes, workshops, and community meetings through high-visibility foyer screens.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Meaningful Recommendations</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Feature 'Staff Picks', seasonal reads, and local author spotlights to engage patrons and drive resource utilization.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Facility Professionalism</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Replace cluttered bulletin boards with clean, modern digital displays that build civic pride and improve facility utility.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a public hub, <strong>community digital signage</strong> is a bridge between administrative info and local connection—providing a central place for people to learn, grow, and interact.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Community & Library Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every public square foot to improve communication and local engagement.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Dynamic Event Calendars", desc: "Display today's schedule and upcoming week events for youth, seniors, and interest groups." },
                            { title: "Smart Room Status Screens", desc: "Small tablets outside meeting rooms showing 'Free' or 'In Use' status and reservation schedules." },
                            { title: "Digital 'Staff Picks' Walls", desc: "Feature weekly book or resource recommendations with cover art and short reviews." },
                            { title: "Town Hall & Local News", desc: "Feature highlights from city meetings, local sports scores, and municipal wellness news." },
                            { title: "Public Service QR Codes", desc: "Include QR codes on screens that lead to municipal forms, class registrations, or feedback surveys." },
                            { title: "Real-Time Weather & News", desc: "Keep patrons informed with live local forecasts and world news headlines in public lobbies." },
                            { title: "Children's Area Storytelling", desc: "Animated screens for kids' sections featuring upcoming storytime and fun educational facts." },
                            { title: "Emergency Public Alerts", desc: "Instant deployment of weather lockdowns, emergency shelter info, or municipal safety instructions." },
                            { title: "Social Media Community Feed", desc: "Display photos from local community hashtags to build local pride and engagement." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Public-Hole Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, affordable, and easy-to-manage tools designed for municipal and public environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Easy Template Editor", desc: "Allow non-technical staff to create beautiful flyers and news slides in seconds without IT help." },
                            { title: "Dynamic Data Widgets", desc: "Standard widgets for Weather, News, Instagram, and Calendars that update themselves automatically." },
                            { title: "Secure Public Operation", desc: "Enterprise security and locked-down media players to ensure your screens are safe from unauthorized access." },
                            { title: "Multi-Zone Display Support", desc: "Show an event flyer on one side and a live news feed on the other simultaneously." },
                            { title: "Emergency Broadcast Override", desc: "Instantly take over all community screens for critical public safety or health announcements." },
                            { title: "Centralized Multisite Fleet", desc: "Manage 3 or 30 facilities across the county from one master dashboard." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=community" className="text-[#2563eb] font-extrabold hover:underline">Community Templates</Link>,
                        learn about <Link href="/widgets" className="text-[#2563eb] font-extrabold hover:underline">Dynamic Widgets</Link>,
                        or see our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Answering key questions for community directors and library managers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in libraries and community centers?</AccordionTrigger>
                                <AccordionContent>
                                    Libraries and community centers use digital signage for event calendars, book recommendations, room reservation status, town hall announcements, and real-time public service info.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show live weather or news feeds?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform includes dynamic widgets that can display real-time weather forecasts, local news headlines, and emergency alerts to keep the public informed while they visit.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it easy for non-technical staff to update?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. We provide a very user-friendly interface with pre-built templates, meaning librarians or community leads can update event details or news in seconds with no IT help required.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple facilities at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can push a global county update to every screen in your entire public network in seconds, or target specific community centers based on their location or specialization (e.g. senior center vs youth hub).
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-emerald-50">Ready to build a more connected community?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a simple, engaging signage network for your public facility today.
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
