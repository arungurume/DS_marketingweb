'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, School, GraduationCap, Landmark, Library, Ticket, Bell, Calendar, MapPin, Zap, ShieldAlert, ChevronRight } from 'lucide-react';

export default function EducationPublicPage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Education & Public", "item": "https://digitalsigns.ai/solutions/education-public" }
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
                                "name": "Can we override screens for emergencies?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our CAP-compliant emergency alert system allows you to instantly take over all screens to broadcast lockdown, weather, or fire alerts." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can different departments manage their own screens?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can assign user roles and permissions so that the science department manages the lab screens while the cafeteria manages the lunch menu." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is there an education discount?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer special pricing for K-12 schools, universities, and non-profit organizations. Contact sales for details." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it work outdoors?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes, but you will need weather-rated, high-brightness outdoor displays. Our software works seamlessly with outdoor hardware players." }
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
                            <span className="text-[#2B7CD3]">Education & Public</span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br className="hidden lg:block" />
                            <span className="text-[#2B7CD3]">Education & Public</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Inform and protect your community with announcements, safety alerts, wayfinding, and event messaging.
                            Simple, scalable, and secure.
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
                                    <ShieldAlert className="w-4 h-4" />
                                </span>
                                Emergency alerts
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <MapPin className="w-4 h-4" />
                                </span>
                                Campus wayfinding
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Calendar className="w-4 h-4" />
                                </span>
                                Event schedules
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
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
                                    alt="Education digital signage"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: Use color-coded zones for different departments or grade levels.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Connect your campus</h2>
                            <p className="text-gray-500">Simplify communication for students, faculty, and visitors.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <ShieldAlert className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Campus Safety</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Broadcast urgent safety alerts across every screen in seconds with CAP integration.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Bell className="w-5 h-5 text-sky-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Daily Announcements</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Save paper and time by displaying morning announcements, lunch menus, and club news digitally.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <MapPin className="w-5 h-5 text-violet-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Visitor Wayfinding</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Help new students and guests find their way around auditoriums, lecture halls, and offices.</p>
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Education & public use cases</h2>
                        <p className="text-gray-500">Trusted by schools, governments, and cultural institutions.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: School, color: 'text-amber-600', bg: 'bg-amber-50',
                                title: 'Schools & K–12',
                                desc: 'Cafeteria menus, hallway announcements, and student recognition.',
                                link: '/solutions/education-public/k12'
                            },
                            {
                                icon: GraduationCap, color: 'text-blue-700', bg: 'bg-blue-50',
                                title: 'Universities',
                                desc: 'Campus-wide alerts, department news, and digital donor walls.',
                                link: '/solutions/education-public/universities'
                            },
                            {
                                icon: Landmark, color: 'text-stone-600', bg: 'bg-stone-100',
                                title: 'Government',
                                desc: 'Public notices, queue management, and service counters.',
                                link: '/solutions/education-public/government'
                            },
                            {
                                icon: Library, color: 'text-emerald-600', bg: 'bg-emerald-50',
                                title: 'Museums',
                                desc: 'Exhibit info, interactive kiosks, and visitor guidance.',
                                link: '/solutions/education-public/museums'
                            },
                            {
                                icon: Ticket, color: 'text-pink-600', bg: 'bg-pink-50',
                                title: 'Events & Arenas',
                                desc: 'Sponsor loops, fan engagement, and concession menus.',
                                link: '/solutions/education-public/events-arenas'
                            },
                            {
                                icon: Library, color: 'text-indigo-600', bg: 'bg-indigo-50',
                                title: 'Libraries',
                                desc: 'Community events, room bookings, and general info.',
                                link: '/solutions/education-public/community-centers'
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Education templates</h2>
                            <p className="text-gray-500">Engaging designs for students and staff.</p>
                        </div>
                        <Link href="/templates?tag=education" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#2B7CD3] transition-colors">
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
                                            src={`https://images.unsplash.com/photo-${1503676260728 + i}?auto=format&fit=crop&w=600&q=80`} // School placeholder
                                            alt={`Education Template ${i}`}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-sm text-gray-900 mb-1">Morning Announcements {i}</h4>
                                    <p className="text-xs text-gray-500">Show weather, lunch menu, and key dates.</p>
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
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Built for campuses</h2>
                        <p className="text-gray-400 max-w-2xl">Manage communication across buildings and districts effortlessly.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <ShieldAlert className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Emergency & CAP Alerts</h3>
                            <p className="text-gray-400 leading-relaxed">Integrated with Common Alerting Protocol (CAP) for automated severe weather and emergency warnings.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Zap className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Granular Permissions</h3>
                            <p className="text-gray-400 leading-relaxed">Let the principal control main announcements while the cafeteria staff updates only the menu screens.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Calendar className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Event Calendars</h3>
                            <p className="text-gray-400 leading-relaxed">Sync with Google or Outlook calendars to automatically display upcoming events and sports schedules.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <MapPin className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Digital Wayfinding</h3>
                            <p className="text-gray-400 leading-relaxed">Interactive or static maps to help visitors navigate complex campuses and buildings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <p className="text-gray-500">Common questions from schools and government bodies.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Can we override screens for emergencies?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our CAP-compliant emergency alert system allows you to instantly take over all screens to broadcast lockdown, weather, or fire alerts.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can different departments manage their own screens?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can assign user roles and permissions so that the science department manages the lab screens while the cafeteria manages the lunch menu.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is there an education discount?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! We offer special pricing for K-12 schools, universities, and non-profit organizations. Contact sales for details.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Does it work outdoors?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, but you will need weather-rated, high-brightness outdoor displays. Our software works seamlessly with outdoor hardware players.
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Modernize your campus messaging</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Join thousands of schools and institutions using .DS (DigitalSigns.ai) to keep their communities informed.
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
