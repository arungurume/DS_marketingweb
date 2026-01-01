'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Building2, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Users, Sparkles } from 'lucide-react';

export default function CorporateOfficesPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Corporate Offices", "item": "https://digitalsigns.ai/solutions/corporate-finance/offices" }
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
                                "name": "What is corporate digital signage?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Corporate digital signage is a communication system using digital displays throughout an office to share company news, KPI dashboards, employee recognition, and wayfinding. It improves internal comms and employee engagement." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I display real-time KPI dashboards?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform integrates with tools like Power BI, Tableau, and Google Sheets to display live data, sales metrics, and project progress on office screens automatically." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support emergency alerts?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can instantly take over all office screens for emergency notifications, weather alerts, or critical company-wide announcements from any device." }
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
                            <span className="text-[#2B7CD3]">Corporate Offices</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            CORPORATE & FINANCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Smart Signage for <br /> Modern Offices
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize internal communication with <strong>real-time KPI dashboards</strong>, employee recognition loops, and <strong>smart wayfinding</strong>. Move beyond emails and posters—engage your workforce where they are with vibrant, cloud-managed displays.
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
                                    <Users className="w-4 h-4" />
                                </span>
                                Employee Engagement
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <TrendingUp className="w-4 h-4" />
                                </span>
                                Live KPI Dashboards
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Sparkles className="w-4 h-4" />
                                </span>
                                Brand Culture
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Enterprise HQ</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Co-working Spaces</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Internal Communications</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                                    alt="Modern corporate office lobby with digital signage displays"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: Employees are 3x more likely to remember company news seen on screens vs. internal emails.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why teams choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Break through the digital noise and foster a connected, informed, and motivated office culture.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Unified Internal Comms</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Ensure every employee sees critical updates, from HR announcements to office event highlights.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Data Transparency</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Boost motivation by making performance metrics and company goals visible and transparent across departments.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Enhanced Lobby Experience</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Welcome visitors with personalized messages, wayfinding maps, and high-impact brand storytelling.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Rather than static bulletin boards or ignored mass emails, a <strong>corporate digital signage platform</strong> acts as a real-time pulse for your organization—keeping everyone aligned and inspired.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Common Corporate Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">From the front lobby to the breakroom, digitize your company's communication channels.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Lobby Welcome Walls", desc: "Greet clients and new hires by name with professional, high-impact brand videos." },
                            { title: "Live KPI Dashboards", desc: "Automated screens showing sales targets, support ticket counts, or production metrics." },
                            { title: "Employee Recognition", desc: "Shoutouts for work anniversaries, birthdays, and 'Employee of the Month' winners." },
                            { title: "HR & Benefits Updates", desc: "Display open enrollment deadlines, health tips, and upcoming office holidays." },
                            { title: "Social Media Feeds", desc: "Showcase company pride by displaying the latest LinkedIn or Twitter activity from the brand." },
                            { title: "Office Wayfinding", desc: "Interactive or static maps helping visitors and new staff find meeting rooms and departments." },
                            { title: "Breakroom TV Loops", desc: "Lighthearted content mixed with company news to keep staff informed during their breaks." },
                            { title: "Real-time Slack/Teams Info", desc: "Broadcast specific announcement channels to physical screens in common areas." },
                            { title: "Safety & Emergency Alerts", desc: "Instant deployment of evacuation paths or health protocols across all floors." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Enterprise Features for Corporates</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Secure, scalable, and professional tools designed for modern organizational needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Dashboard Integrations", desc: "Direct connectors for Power BI, Tableau, Google Sheets, and custom API data feeds." },
                            { title: "SSO & Secure Authentication", desc: "Enterprise-grade security with support for SAML, Okta, and Microsoft Azure login." },
                            { title: "Granular User Permissions", desc: "Allow local office managers to update specific screens while HQ controls global messaging." },
                            { title: "Smart Scheduling & Expiring Content", desc: "Schedule announcements to hide automatically after an event or deadline passes." },
                            { title: "Emergency Screen Takeover", desc: "One-click activation for emergency alerts across all connected screens globally." },
                            { title: "Hardware Neutral Player", desc: "Runs on Windows, ChromeOS, Android, and Smart TVs without needing extra hardware." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=corporate" className="text-[#2563eb] font-extrabold hover:underline">Corporate Templates</Link>,
                        learn about <Link href="/data-dashboards" className="text-[#2563eb] font-extrabold hover:underline">Dashboard Solutions</Link>,
                        or check out <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Main questions from HR, IT, and Operations teams about office signage.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is corporate digital signage?</AccordionTrigger>
                                <AccordionContent>
                                    Corporate digital signage is a communication system using digital displays throughout an office to share company news, KPI dashboards, employee recognition, and wayfinding. It improves internal comms and employee engagement.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I display real-time KPI dashboards?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform integrates with tools like Power BI, Tableau, and Google Sheets to display live data, sales metrics, and project progress on office screens automatically.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support emergency alerts?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can instantly take over all office screens for emergency notifications, weather alerts, or critical company-wide announcements from any device.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>How secure is the platform?</AccordionTrigger>
                                <AccordionContent>
                                    We offer enterprise-grade security including SOC2 compliance, SSO integration (Okta, Azure), and granular user permissions to ensure your internal data stays safe.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2">Ready to modernize your office comms?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Join 1,000+ organizations using .DS (DigitalSigns.ai) to build a more connected and informed workforce.
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
