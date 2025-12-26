'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Trophy, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Mic, MapPin } from 'lucide-react';

export default function EventsArenasPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Events & Arenas", "item": "https://digitalsigns.ai/solutions/education-public/events-arenas" }
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
                                "name": "How is digital signage used in events and arenas?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Events and arenas use digital signage for wayfinding to seats, real-time concessions menu boards, live social media walls, sponsorship promotions, and critical emergency crowd-control instructions." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show live social media feeds from fans?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform includes social media widgets that can moderate and display fan photos and posts in real-time on stadium jumbotrons or concourse screens." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support real-time concession updates?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can update menu prices, mark items as 'Sold Out', and promote 'Happening Now' specials across all concourse food vendors instantly from one central dashboard." }
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
                            <span className="text-[#2B7CD3]">Events & Arenas</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            EDUCATION & PUBLIC
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            High-Energy Stadium <br /> & Event Signage
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Amplify the fan experience with <strong>live social media walls</strong>, dynamic concourse menu boards, and <strong>smart wayfinding</strong> for thousands. Maximize sponsorship revenue and maintain flawless crowd control with high-performance, cloud-managed displays.
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
                                <span className="w-7 h-7 rounded-md bg-sky-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Instagram className="w-4 h-4" />
                                </span>
                                Social Media Walls
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-amber-50 flex items-center justify-center text-amber-700">
                                    <Layout className="w-4 h-4" />
                                </span>
                                Concession Menus
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center text-rose-600">
                                    <ShieldAlert className="w-4 h-4" />
                                </span>
                                Crowd Control
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Sports Stadiums</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Concert Halls</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Convention Centers</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1540747913346-19e3adca174f?q=80&w=2670&auto=format&fit=crop"
                                    alt="Large stadium interior with high-definition digital billboards and concourse info screens"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    Tip: Promoting high-margin concession items on concourse screens during halftime increases sales by up to 28%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why venue operators choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Turn high-traffic concourses into high-revenue zones while improving the fan journey.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Fan Retention & Engagement</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Keep energy high with live social media walls, instant replay highlights, and real-time interactive trivia on every screen.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Dynamic Ad Revenue</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly swap sponsor logos, deploy time-sensitive promos, and maximize brand visibility for your venue's partners.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Scalable Crowd Control</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Guide tens of thousands of fans to the nearest exit or seat area using oversized, clear digital wayfinding and safety alerts.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a large-scale event environment, <strong>stadium digital signage</strong> is more than just entertainment—it's a critical tool for safety, revenue, and flawless operations.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Arena & Event Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every second of the fan experience, from the gate to the final whistle.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Live Social Media Walls", desc: "Display moderated fan photos and 'I was here' posts in real-time on jumbotrons and lobbies." },
                            { title: "Concession Menu Boards", desc: "Digital screens that allow for instant price changes and 'Sold Out' updates during the event." },
                            { title: "Smart Seat Wayfinding", desc: "Digital maps in concourses help fans find the nearest restroom, exit, or specific seating block." },
                            { title: "Premium Suite Information", desc: "Upscale lifestyle and branding content specifically for VIP and corporate arena suites." },
                            { title: "Real-time Score Dashboards", desc: "Keep fans informed with live scores from other games across the league on concourse monitors." },
                            { title: "Sponsorship Takeover Loops", desc: "Global takeover of all arena screens for 'Goal Alerts' or major sponsor celebrations." },
                            { title: "Gate & Security Instructions", desc: "Entrance screens showing 'What's Allowed' and gate wait times to streamline entry." },
                            { title: "Emergency Evacuation Alerts", desc: "Instant deployment of clear, oversized instructions and exit paths for the entire arena." },
                            { title: "Merchandise Store Promos", desc: "Highlight top-selling jerseys, hats, and 'Player of the Game' specials in retail zones." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Venue-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Powerful, secure, and data-driven tools built for the world's largest event spaces.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Synchronized Global Playback", desc: "Trigger 'Goal' or 'Intermission' content across 1,000+ screens in perfect sync." },
                            { title: "Live Social Feed Moderation", desc: "Built-in tools to filter and approve fan social media posts before they go live on stadium screens." },
                            { title: "Real-Time Concession Sync", desc: "Integrate with POS systems (Toast, Clover) to update menu availability and pricing automatically." },
                            { title: "Enterprise Fleet Management", desc: "Monitor the health of every concourse monitor and jumbotron from one central Operations Room." },
                            { title: "High-Performance Media Support", desc: "Fluid 4K video playback designed for heavy-duty stadium and concert visuals." },
                            { title: "Centralized Multisite Control", desc: "Manage signage across multiple arenas or convention halls from one master HQ dashboard." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=events" className="text-[#2563eb] font-extrabold hover:underline">Event Templates</Link>,
                        learn about <Link href="/menu-boards" className="text-[#2563eb] font-extrabold hover:underline">Concession Menus</Link>,
                        or see our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for venue directors and event operations teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in events and arenas?</AccordionTrigger>
                                <AccordionContent>
                                    Events and arenas use digital signage for wayfinding to seats, real-time concessions menu boards, live social media walls, sponsorship promotions, and critical emergency crowd-control instructions.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show live social media feeds from fans?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform includes social media widgets that can moderate and display fan photos and posts in real-time on stadium jumbotrons or concourse screens.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support real-time concession updates?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can update menu prices, mark items as 'Sold Out', and promote 'Happening Now' specials across all concourse food vendors instantly from one central dashboard.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>How many screens can I manage at once?</AccordionTrigger>
                                <AccordionContent>
                                    Our cloud CMS is designed for extreme scale. Whether you have 50 screens in a theater or 1,500 in a major sports stadium, you can manage them all with ease from a single device.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-sky-50">Ready to amplify your fan experience?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a high-performance, high-revenue signage network for your venue today.
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
