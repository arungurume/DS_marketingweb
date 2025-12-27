'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, School, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, BookOpen, Bell } from 'lucide-react';

export default function K12SchoolsPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "K-12 Schools", "item": "https://digitalsigns.ai/solutions/education-public/k12" }
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
                                "name": "What is digital signage for schools?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Digital signage for schools is a campus-wide communication system that uses screens to display morning announcements, cafeteria menus, upcoming events, student achievements, and critical safety alerts." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can students or teachers manage the content?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform allows for granular user permissions, meaning you can let students in a media class or specific teachers update their own hall screens while HQ maintains global control." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support emergency alerts?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can instantly take over every screen on campus for lock-down alerts, weather warnings, or other critical safety notifications from any mobile device or computer." }
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
                            <span className="text-[#2B7CD3]">K-12 Schools</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            EDUCATION & PUBLIC
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Smart Signage for <br /> K-12 Schools
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Empower your campus with <strong>digital morning announcements</strong>, automated cafeteria menus, and <strong>real-time emergency alerts</strong>. Engage students, inform parents, and modernize your school environment with cloud-managed displays.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <BookOpen className="w-4 h-4" />
                                </span>
                                Campus Info
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Layout className="w-4 h-4" />
                                </span>
                                Digital Menu Boards
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center text-rose-600">
                                    <Bell className="w-4 h-4" />
                                </span>
                                Emergency Alerts
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Primary Schools</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: High Schools</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Private Academies</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern school hallway with digital information screens"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    Tip: Visual alerts on digital screens are processed 60,000x faster than written text by the human brain.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why districts choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Combine administrative efficiency with a vibrant, student-centered campus culture.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Unified Campus Comms</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Ensure every hall, cafeteria, and staff room sees the same critical updates and school news simultaneously.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Student Engagement</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Feature student art, sports results, and theater promos to build school pride and celebrate achievements.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Ultimate Campus Safety</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">The fastest possible way to deploy lock-down or emergency paths across the entire campus in seconds.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Rather than static posters or announcements over the PA system, <strong>school digital signage</strong> provides a real-time, engaging, and professional channel for the next generation.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">K-12 Campus Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Digitize your school to improve information flow and student safety.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Morning Announcement Loops", desc: "Display student-led video announcements, weather, and the daily pledge." },
                            { title: "Digital Cafeteria Menus", desc: "Show daily meals, nutritional info, and upcoming lunch specials automatically." },
                            { title: "Student Achievement Walls", desc: "Feature honor rolls, science fair winners, and sports victory highlights." },
                            { title: "Faculty Room Dashboards", desc: "Internal screens for staff meetings, PD schedules, and district updates." },
                            { title: "Parent Information Displays", desc: "Screens in the front lobby sharing PTO news, event dates, and visitor info." },
                            { title: "Event & Theater Promos", desc: "Dynamic countdowns and trailers for upcoming school plays and concerts." },
                            { title: "Campus Wayfinding", desc: "Digital maps to help new students and visitors find the gym, library, or specific classrooms." },
                            { title: "Emergency Broadcast Alerts", desc: "Instant deployment of lock-down, fire drill, or weather safety instructions." },
                            { title: "Social Media Pride", desc: "Display the school's Instagram or Twitter feed to feature campus life in real-time." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">District-Level Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Secure, scalable, and easy-to-use tools designed for the unique needs of school districts.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Google Drive & Slides Sync", desc: "Directly play presentations made by teachers or students without manual uploads." },
                            { title: "Granular User Permissions", desc: "Allow individual schools or departments to manage their own screens while the district controls global news." },
                            { title: "CAP Emergency Alerts", desc: "Automatically trigger emergency messages through the Common Alerting Protocol (CAP) integration." },
                            { title: "Smart Scheduling & Logic", desc: "Display different content for elementary, middle, and high schools automatically." },
                            { title: "Hardware Flexibility", desc: "Runs on Chromebooks, Android tablets, specialized media players, and existing Smart TVs." },
                            { title: "Safe & Secure Cloud", desc: "COPPA & FERPA compliant architecture to ensure the safety of school communications." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=education" className="text-[#2563eb] font-extrabold hover:underline">Education Templates</Link>,
                        learn about <Link href="/campus-safety" className="text-[#2563eb] font-extrabold hover:underline">Safety Solutions</Link>,
                        or see our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline text-uppercase">Pricing for Schools</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Helping principals and district IT teams build better campus communications.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is digital signage for schools?</AccordionTrigger>
                                <AccordionContent>
                                    Digital signage for schools is a campus-wide communication system that uses screens to display morning announcements, cafeteria menus, upcoming events, student achievements, and critical safety alerts.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can students or teachers manage the content?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform allows for granular user permissions, meaning you can let students in a media class or specific teachers update their own hall screens while HQ maintains global control.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support emergency alerts?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can instantly take over every screen on campus for lock-down alerts, weather warnings, or other critical safety notifications from any mobile device or computer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Is it compatible with Chromebooks?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Our software can run as a Chrome app, making it incredibly easy to repurpose existing Chromebooks or Chrome-based hardware into digital signage players.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-blue-50">Ready to modernize your school campus?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Join hundreds of K-12 schools using .DS (DigitalSigns.ai) to build a safer and more connected learning environment.
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
                                    <Link href="/solutions/education-public">Back to Education</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
