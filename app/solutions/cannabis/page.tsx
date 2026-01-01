'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Leaf, Activity, ShieldCheck, Truck, Zap, Monitor, Layers, ChevronRight, BarChart3, Database } from 'lucide-react';

export default function CannabisPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-100">

            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Solutions", "item": "https://digitalsigns.ai/solutions" },
                            { "@type": "ListItem", "position": 2, "name": "Cannabis", "item": "https://digitalsigns.ai/solutions/cannabis" }
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
                                "name": "Can I integrate my POS system for real-time menu updates?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. .DS (DigitalSigns.ai) integrates with major cannabis POS systems like Dutchie, Blaze, and Treez to automatically update your menus when stock levels change." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does the software support compliance messaging?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can easily schedule and display required state-specific compliance warnings and age-restriction messages." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I use video to showcase products?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform supports high-definition video and animations, perfect for showcasing slow-motion flower shots or educational content." }
                            },
                            {
                                "@type": "Question",
                                "name": "How do I manage multiple dispensary locations?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Our centralized dashboard allows you to manage content for one store or a nationwide chain from a single login, ensuring brand consistency everywhere." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-green-50/30">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-[#2B7CD3] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-[#2B7CD3] transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-green-600">Cannabis</span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br className="hidden lg:block" />
                            <span className="text-green-600">Cannabis Businesses</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize dispensaries and grow ops with real-time digital menus, compliance tracking, and high-impact promotional displays.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-green-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <Link href="#templates">See Templates</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center text-green-600">
                                    <Database className="w-4 h-4" />
                                </span>
                                POS Integration
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center text-green-600">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Compliance alerts
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center text-green-600">
                                    <Zap className="w-4 h-4" />
                                </span>
                                Live inventories
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract background blobs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100/50 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1533630663533-bb0550130634?q=80&w=2670&auto=format&fit=crop"
                                    alt="Cannabis dispensary digital menu"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                    Tip: Integrate Dutchie or Blaze for automatic stock-level updates.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Elevate the dispensary experience</h2>
                            <p className="text-gray-500">Streamline sales and stay compliant with smart digital signage.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-green-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Leaf className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Dynamic Product Menus</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Display strains, potency levels, and descriptions clearly. Sync with your POS for real-time accuracy.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-green-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Bulletproof Compliance</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Ensure required disclaimers and age-restriction messages are always visible and up to date.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-green-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Zap className="w-5 h-5 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Impulse Upsells</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Promote accessories, new drops, and daily specials right where your customers make decisions.</p>
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Cannabis industry use cases</h2>
                        <p className="text-gray-500">Tailored solutions for every stage of the cannabis supply chain.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Leaf, color: 'text-green-600', bg: 'bg-green-50',
                                title: 'Dispensaries',
                                desc: 'High-impact digital menus, brand storytelling, and waiting room education screens.',
                                link: '/solutions/cannabis/dispensaries'
                            },
                            {
                                icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50',
                                title: 'Growth Facilities',
                                desc: 'Employee announcements, safety alerts, and environmental monitoring dashboards.',
                                link: '/solutions/cannabis/growth-facilities'
                            },
                            {
                                icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50',
                                title: 'Processing & Manufacturing',
                                desc: 'Compliance status, shift schedules, and operational performance metrics.',
                                link: '/solutions/cannabis/processing'
                            },
                            {
                                icon: Truck, color: 'text-slate-600', bg: 'bg-slate-100',
                                title: 'Delivery Services',
                                desc: 'Order status screens, local promo boards, and dispatch tracking for staff.',
                                link: '/solutions/cannabis/delivery'
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
                                    <div className="text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:gap-2 transition-all">
                                        Explore {item.title} <ArrowRight className="w-3 h-3" />
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Cannabis templates</h2>
                            <p className="text-gray-500">Professional menu designs and promotional layouts.</p>
                        </div>
                        <Link href="/templates?tag=cannabis" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-green-600 transition-colors">
                            Browse all templates <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="border border-gray-100 rounded-[18px] overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                                <div className="bg-gray-100 aspect-[16/9] relative md:h-[200px]">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                        <Image
                                            src={`https://images.unsplash.com/photo-${1557804506000 + i}?auto=format&fit=crop&w=600&q=80`}
                                            alt={`Cannabis Template ${i}`}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-sm text-gray-900 mb-1">Dispensary Menu Layout {i}</h4>
                                    <p className="text-xs text-gray-500">Optimized for high THC/CBD clarity and brand aesthetic.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-900 text-white rounded-t-[48px] mt-12">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Enterprise features for Cannabis retail</h2>
                        <p className="text-gray-400 max-w-2xl">Scalable, secure, and compliance-first digital signage.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <BarChart3 className="w-10 h-10 text-green-500 mb-6" />
                            <h3 className="font-bold text-xl mb-3">POS & Inventory Sync</h3>
                            <p className="text-gray-400 leading-relaxed">Automatically hide out-of-stock items and update pricing as it changes in your POS system.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Monitor className="w-10 h-10 text-green-500 mb-6" />
                            <h3 className="font-bold text-xl mb-3">Multi-Chain Management</h3>
                            <p className="text-gray-400 leading-relaxed">Control menus and promotions for all your locations from one central login. Set local overrides where needed.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-green-500 mb-6" />
                            <h3 className="font-bold text-xl mb-3">Compliance Safeguards</h3>
                            <p className="text-gray-400 leading-relaxed">Pre-built templates with required state disclaimers and localized compliance messaging.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Zap className="w-10 h-10 text-green-500 mb-6" />
                            <h3 className="font-bold text-xl mb-3">Offline Media Player</h3>
                            <p className="text-gray-400 leading-relaxed">Your screens will never go black. Content is cached locally on the player, so it keeps running even if the internet goes down.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <p className="text-gray-500">Common questions from cannabis business owners.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Can I integrate my POS system for real-time menu updates?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. .DS (DigitalSigns.ai) integrates with major cannabis POS systems like Dutchie, Blaze, and Treez to automatically update your menus when stock levels change.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Does the software support compliance messaging?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can easily schedule and display required state-specific compliance warnings and age-restriction messages.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Can I use video to showcase products?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform supports high-definition video and animations, perfect for showcasing slow-motion flower shots or educational content.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>How do I manage multiple dispensary locations?</AccordionTrigger>
                                <AccordionContent>
                                    Our centralized dashboard allows you to manage content for one store or a nationwide chain from a single login, ensuring brand consistency everywhere.
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
                        <div className="absolute top-0 right-0 w-80 h-80 bg-green-600/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ready to modernize your dispensary?</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Join leading dispensaries using .DS (DigitalSigns.ai) to drive sales and stay compliant.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold h-14 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
                                </Button>
                                <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 font-bold h-14 px-8 rounded-xl border border-white/20 hover:scale-105 transition-transform">
                                    <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
