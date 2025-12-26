'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Calendar, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, MousePointer2 } from 'lucide-react';

export default function MeetingRoomsPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Meeting Rooms", "item": "https://digitalsigns.ai/solutions/corporate-finance/meeting-rooms" }
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
                                "name": "What is a meeting room display?",
                                "acceptedAnswer": { "@type": "Answer", "text": "A meeting room display is a small screen (usually 10-15 inches) mounted outside a conference room that shows the current occupancy status, daily schedule, and allows for on-the-spot room booking." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it sync with Google Calendar or Outlook?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our meeting room solution fully integrates with Google Workspace, Microsoft 365 (Outlook/Teams), and other calendar APIs to ensure real-time synchronization." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I book a room directly from the screen?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. If a room is free, you can instantly book it for a selected duration directly on the touch-enabled display outside the room." }
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
                            <span className="text-[#2B7CD3]">Meeting Rooms</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            CORPORATE & FINANCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Smart Meeting Room <br /> Scheduling
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Optimize your workspace with <strong>interactive room displays</strong>, real-time availability sync, and <strong>on-the-spot booking</strong>. Eliminate "room sharking" and double-booking with clear, color-coded status screens for every meeting space in your office.
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
                                <span className="w-7 h-7 rounded-md bg-purple-50 flex items-center justify-center text-purple-600">
                                    <Calendar className="w-4 h-4" />
                                </span>
                                Calendar Sync
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <MousePointer2 className="w-4 h-4" />
                                </span>
                                On-The-Spot Booking
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                                    <CheckCircle className="w-4 h-4" />
                                </span>
                                Room Availability
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-purple-200 transition-colors">Best for: Enterprise Offices</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-purple-200 transition-colors">Best for: Huddle Rooms & Pods</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-purple-200 transition-colors">Best for: Co-working Venues</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2669&auto=format&fit=crop"
                                    alt="Modern glass meeting room with a digital occupancy display outside"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                                    Tip: Offices using room displays report a 40% reduction in meeting scheduling conflicts.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why facilities managers choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Streamline your workplace efficiency and provide a frictionless experience for employees and clients.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Zero Booking Conflicts</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Direct integration with your company's calendar ensures that once a room is booked, it stays booked—no overlaps.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Automatic "No-Show" Release</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">If no one checks into the room within 15 minutes, the room is automatically released and becomes available for others.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Instant Ad-hoc Meetings</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Need a quick huddle? Just tap 'Book Now' on the screen outside any empty room for immediate access.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Moving beyond sticky notes and printed schedules, <strong>digital meeting room signs</strong> provide a real-time, professional, and data-driven way to manage your physical workspace.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Workspace Scheduling Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Manage every square foot of your office, from large boardrooms to small phone booths.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Conference Room Displays", desc: "10-inch tablets outside large rooms showing the organizer, meeting title, and end time." },
                            { title: "Phone Booth Availability", desc: "Small status indicators showing whether a private pod is currently occupied or vacant." },
                            { title: "Lobby Room Directory", desc: "A large screen at the office entrance listing all daily meetings and their room locations." },
                            { title: "Check-in Requirements", desc: "Force users to 'Check-in' on the screen to prevent ghost meetings and wasted space." },
                            { title: "Custom Room Branding", desc: "Display room-specific names, photos, or capacity info on the signage." },
                            { title: "Integrated Wayfinding", desc: "Include a 'Take me there' button that shows the route to the room on a mobile map." },
                            { title: "Amenity Status", desc: "Display whether a room has Video Conferencing (VC), Whiteboards, or Catering enabled." },
                            { title: "End-of-Meeting Warnings", desc: "Screens turn yellow five minutes before a meeting ends to keep schedules on track." },
                            { title: "Workplace Analytics", desc: "Track which rooms are used most frequently and optimize your office layout based on data." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Professional Scheduling Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enterprise tools designed to eliminate workplace friction and optimize room utilization.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Full Calendar Integration", desc: "Seamless sync with G-Suite, Office 365, Exchange, and custom enterprise calendars." },
                            { title: "Color-Coded Status", desc: "Bright Red (Busy) and Vibrant Green (Available) bars that are visible from down the hallway." },
                            { title: "Interactive Touch Booking", desc: "Responsive touch-screens that allow for instant booking, end-early, or extension of meetings." },
                            { title: "SSO & Secure Management", desc: "Manage your entire room network with secure enterprise login and encrypted data sync." },
                            { title: "Multi-Language Support", desc: "Display room information and instructions in multiple languages for global office headquarters." },
                            { title: "Hardware Flexibility", desc: "Compatible with iPads, Android tablets, specialized POE room panels, and standard monitors." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=room-booking" className="text-purple-600 font-extrabold hover:underline">Room Booking Templates</Link>,
                        learn about <Link href="/interactive-kiosks" className="text-purple-600 font-extrabold hover:underline">Interactive Solutions</Link>,
                        or see our <Link href="/pricing" className="text-purple-600 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Common questions about deploying smart meeting room displays.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is a meeting room display?</AccordionTrigger>
                                <AccordionContent>
                                    A meeting room display is a small screen (usually 10-15 inches) mounted outside a conference room that shows the current occupancy status, daily schedule, and allows for on-the-spot room booking.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Does it sync with Google Calendar or Outlook?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our meeting room solution fully integrates with Google Workspace, Microsoft 365 (Outlook/Teams), and other calendar APIs to ensure real-time synchronization.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Can I book a room directly from the screen?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. If a room is free, you can instantly book it for a selected duration directly on the touch-enabled display outside the room.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Do I need special power for the screens?</AccordionTrigger>
                                <AccordionContent>
                                    Most professional room panels support Power over Ethernet (PoE), meaning one cable provides both internet and power, making installation clean and simple.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-purple-50">Ready to optimize your conference rooms?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a smart room scheduling system for your office today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
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
