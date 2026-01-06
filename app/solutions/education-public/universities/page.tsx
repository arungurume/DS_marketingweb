'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, GraduationCap, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Calendar, MapPin } from 'lucide-react';

export default function UniversitiesPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Universities", "item": "https://digitalsigns.ai/solutions/education-public/universities" }
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
                                "name": "How is digital signage used in universities?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Universities use digital signage for campus-wide event promotions, dynamic building directories, real-time shuttle tracking, academic departmental updates, and emergency mass notifications." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I integrate campus social media feeds?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform allows you to display live Instagram, Twitter, and LinkedIn feeds to showcase campus life, student achievements, and university-wide brand engagement." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support wayfinding for large campuses?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can deploy interactive touchscreen kiosks or static 3D maps to help new students and visitors navigate complex university buildings and campus grounds." }
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
                            <span className="text-[#2B7CD3]">Universities</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            EDUCATION & PUBLIC
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Campus-Wide Digital <br /> Communication
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Transform your university with <strong>dynamic event promotions</strong>, smart wayfinding, and <strong>real-time campus transit tracking</strong>. Engage a tech-savvy student body and unify communications across every department and dorm with cloud-managed displays.
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
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Calendar className="w-4 h-4" />
                                </span>
                                Event Promotions
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <MapPin className="w-4 h-4" />
                                </span>
                                Campus Wayfinding
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center text-rose-600">
                                    <ShieldAlert className="w-4 h-4" />
                                </span>
                                Mass Notifications
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: State Universities</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Community Colleges</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Student Housing</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1523050853064-db0ef9358925?q=80&w=2670&auto=format&fit=crop"
                                    alt="University campus plaza with digital wayfinding and information screens"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    Tip: Real-time transit tracking screens in dorm lobbies reduce student frustration and perceived travel wait times.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why higher-ed leaders choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Combine administrative control with departmental flexibility to support a global academic community.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Departmental Autonomy</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Allow the Law School or Science Dept to manage their own news while the Provost's office controls global campus alerts.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Digital Wayfinding</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Guide tens of thousands of students and visitors across complex, multi-building campuses with interactive digital maps.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Real-Time Data Integration</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Sync with campus transit (GPS), cafeteria inventory, and student housing portals to show live, relevant data 24/7.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Beyond basic messaging, a <strong>university digital signage network</strong> acts as the operating system for physical campus life—connecting students to events, services, and safety info.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Higher Education Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance the student journey from student union to the lecture hall.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Student Union Event Boards", desc: "Dynamic displays featuring club meetings, guest speakers, and concert announcements." },
                            { title: "Campus Shuttle Trackers", desc: "Real-time GPS maps in lobby screens showing the exact location and ETAs of campus transit." },
                            { title: "Interactive Department Maps", desc: "Touch-screen directories that help visitors find specific faculty offices and classrooms." },
                            { title: "Dining Hall Menu Boards", desc: "Automated screens showing daily meals, allergen info, and open/close status." },
                            { title: "Library Availability Boards", desc: "Show real-time room occupancy and desktop computer availability across campus libraries." },
                            { title: "Sports Victory Walls", desc: "Feature live scores, upcoming game promos, and athlete recognition for university's teams." },
                            { title: "Academic Honors & Ranks", desc: "Digital plaques featuring dean's list results and prestigious scholarship winners." },
                            { title: "Campus-Wide Emergency Alerts", desc: "Instant deployment of lock-down, inclement weather, or health safety paths." },
                            { title: "Social Media Wall", desc: "Display student-generated content using the university's hashtag to build campus community." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">University-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Scalable, secure, and professional tools designed for complex campus ecosystems.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Departmental Sub-Accounts", desc: "Give each academic department their own 'channel' while retaining admin control at the campus level." },
                            { title: "Real-Time Data Connectors", desc: "Sync with TransLoc, Google Calendar, and internal databases to automate transit and schedule displays." },
                            { title: "Enterprise SSO Integration", desc: "Secure access management using your university's existing login systems (Azure, Okta)." },
                            { title: "Multi-Zone Layouts", desc: "Show event flyers on one side and a live Twitter feed on the other simultaneously." },
                            { title: "Mass Notification Takeover", desc: "Instant override for critical campus-wide safety alerts from any centralized location." },
                            { title: "Hardware Agnostic CMS", desc: "Runs on Windows, Android, ChromeOS, and LG/Samsung Smart TVs throughout the campus." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=university" className="text-[#2563eb] font-extrabold hover:underline">University Templates</Link>,
                        learn about <Link href="/wayfinding" className="text-[#2563eb] font-extrabold hover:underline">Campus Wayfinding</Link>,
                        or see our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for university administrators and campus IT teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in universities?</AccordionTrigger>
                                <AccordionContent>
                                    Universities use digital signage for campus-wide event promotions, dynamic building directories, real-time shuttle tracking, academic departmental updates, and emergency mass notifications.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I integrate campus social media feeds?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform allows you to display live Instagram, Twitter, and LinkedIn feeds to showcase campus life, student achievements, and university-wide brand engagement.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support wayfinding for large campuses?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can deploy interactive touchscreen kiosks or static 3D maps to help new students and visitors navigate complex university buildings and campus grounds.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Is the platform secure for public campus access?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. We offer enterprise-grade security including secure cloud infrastructure and localized user permissions to ensure your campus displays are protected from unauthorized access.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-blue-50">Ready to unify your campus communications?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Join top Universities using .DS (DigitalSigns.ai) to build a more engaged and informed student community.
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
