'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Building2, Calendar, Landmark, Factory, Stethoscope, Users, BarChart3, ShieldCheck, Zap, Monitor, ChevronRight } from 'lucide-react';

export default function CorporateFinancePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">

            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Solutions", "item": "https://digitalsigns.ai/solutions" },
                            { "@type": "ListItem", "position": 2, "name": "Corporate & Finance", "item": "https://digitalsigns.ai/solutions/corporate-finance" }
                        ]
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is the platform secure for corporate use?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer enterprise-grade security, including SSO integration, role-based access control, and encrypted data transmission." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can we display live data dashboards?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can securely display Power BI, Tableau, or other web-based dashboards to keep teams aligned on KPIs." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it integrate with room booking systems?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Connect with your calendar system (Google, Outlook) to automatically display meeting room availability and schedules." }
                            },
                            {
                                "@type": "Question",
                                "name": "How do we push emergency alerts?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Our platform includes an emergency override feature. With one click, you can take over all screens to display critical safety information." }
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
                            <span className="text-[#2B7CD3]">Corporate & Finance</span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br className="hidden lg:block" />
                            <span className="text-[#2B7CD3]">Corporate & Finance</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize internal communication with dashboards, announcements, room status, and service messaging.
                            Keep your team aligned and informed.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <Link href="#templates">See Templates</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <BarChart3 className="w-4 h-4" />
                                </span>
                                Live KPI dashboards
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Enterprise security
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Calendar className="w-4 h-4" />
                                </span>
                                Room scheduling
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract background blobs for premium feel */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            {/* Fallback image or placeholder */}
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                                    alt="Corporate digital signage"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: Connect your Power BI dashboards for real-time performance tracking.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Better communication, everywhere</h2>
                            <p className="text-gray-500">From the lobby to the breakroom, keep everyone on the same page.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Users className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Employee Engagement</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Recognize achievements, welcome new hires, and share company news efficiently.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <BarChart3 className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Data Visualization</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Turn complex spreadsheets into easy-to-read charts and graphs for instant insights.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-5 h-5 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Safety & Compliance</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Display safety reminders, compliance stats, and emergency alerts instantly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-gray-50/50">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Corporate & finance use cases</h2>
                        <p className="text-gray-500">Versatile solutions for every part of your organization.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50',
                                title: 'Corporate Offices',
                                desc: 'Employee recognition, company updates, and lobby welcome screens.',
                                link: '/solutions/corporate-finance/offices'
                            },
                            {
                                icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50',
                                title: 'Meeting Rooms',
                                desc: 'Automated room scheduling and occupancy status displays.',
                                link: '/solutions/corporate-finance/meeting-rooms'
                            },
                            {
                                icon: Landmark, color: 'text-emerald-700', bg: 'bg-emerald-50',
                                title: 'Banks & Finance',
                                desc: 'Live rate screens, queue messaging, and service information.',
                                link: '/solutions/corporate-finance/banks'
                            },
                            {
                                icon: Factory, color: 'text-orange-600', bg: 'bg-orange-50',
                                title: 'Warehouses',
                                desc: 'Safety alerts, real-time logistics tracking, and shift schedules.',
                                link: '/solutions/corporate-finance/warehouses'
                            },
                            {
                                icon: Stethoscope, color: 'text-red-500', bg: 'bg-red-50',
                                title: 'Clinics & Offices',
                                desc: 'Patient check-in, health tips, and waiting room entertainment.',
                                link: '/solutions/corporate-finance/clinics'
                            },
                            {
                                icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50',
                                title: 'Manufacturing',
                                desc: 'Production dashboards, efficiency metrics, and safety protocols.',
                                link: '/solutions/corporate-finance/manufacturing'
                            },
                        ].map((item) => (
                            <Link
                                key={item.title}
                                href={item.link}
                                className="group flex flex-col md:flex-row gap-5 p-6 bg-white border border-gray-100 rounded-[18px] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                                    <div className="text-xs font-bold text-[#2B7CD3] uppercase tracking-wider flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:gap-2 transition-all">
                                        Explore {item.title.split(' ')[0]} <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Gallery */}
            <section id="templates" className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex items-end justify-between gap-6 mb-12">
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Corporate templates</h2>
                            <p className="text-gray-500">Clean, professional designs for internal communications.</p>
                        </div>
                        <Link href="/templates?tag=corporate" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#2B7CD3] transition-colors">
                            Browse all templates <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="border border-gray-100 rounded-[18px] overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                                <div className="bg-gray-100 aspect-[16/9] relative md:h-[200px]">
                                    {/* Placeholder for template image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                        <Image
                                            src={`https://images.unsplash.com/photo-${1497215728101 + i}?auto=format&fit=crop&w=600&q=80`} // Office placeholder
                                            alt={`Corporate Template ${i}`}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-sm text-gray-900 mb-1">Company News Layout {i}</h4>
                                    <p className="text-xs text-gray-500">Ideal for announcements and team shoutouts.</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Button variant="outline" asChild>
                            <Link href="/templates">Browse all templates</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-900 text-white rounded-t-[48px] mt-12">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Enterprise-ready features</h2>
                        <p className="text-gray-400 max-w-2xl">Security, scalability, and ease of use for large organizations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Enterprise Security</h3>
                            <p className="text-gray-400 leading-relaxed">SSO, role-based access control, and audit logs keep your network secure and compliant.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Zap className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Emergency Alerts</h3>
                            <p className="text-gray-400 leading-relaxed">Instantly override all screens with critical alerts and safety instructions in case of an emergency.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Monitor className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Remote Device Management</h3>
                            <p className="text-gray-400 leading-relaxed">Monitor screen health, reboot devices, and update software remotely from the IT dashboard.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <BarChart3 className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Content Integrations</h3>
                            <p className="text-gray-400 leading-relaxed">Seamlessly display content from Power BI, Google Slides, social media, and news feeds.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <p className="text-gray-500">Common questions from corporate IT and HR teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is the platform secure for corporate use?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. We offer enterprise-grade security, including SSO integration, role-based access control, and encrypted data transmission.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can we display live data dashboards?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can securely display Power BI, Tableau, or other web-based dashboards to keep teams aligned on KPIs.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it integrate with room booking systems?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Connect with your calendar system (Google, Outlook) to automatically display meeting room availability and schedules.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>How do we push emergency alerts?</AccordionTrigger>
                                <AccordionContent>
                                    Our platform includes an emergency override feature. With one click, you can take over all screens to display critical safety information.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-24 pt-12 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-[#0b1220] rounded-[26px] p-10 md:p-14 text-white relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="font-headline text-3xl font-bold mb-4">Streamline your internal comms</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Empower your workforce with .DS (DigitalSigns.ai). Used by leading enterprises worldwide.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                                <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-14 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
                                </Button>
                                <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 font-bold h-14 px-8 rounded-xl border border-white/20 hover:scale-105 transition-transform">
                                    <a href="https://hub.digitalsigns.ai/#/usermanagement/signin">Sign up free</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
