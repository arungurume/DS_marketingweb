'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ShoppingBag, ShoppingCart, Map, Home, Activity, Car, Zap, Tag, Monitor, Layers, ChevronRight } from 'lucide-react';

export default function RetailPage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Retail & Commerce", "item": "https://digitalsigns.ai/solutions/retail" }
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
                                "name": "Can I schedule sales ahead of time?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can schedule content to start and end at specific times, ensuring your promotions run exactly when you want them to." }
                            },
                            {
                                "@type": "Question",
                                "name": " Does it support video walls?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. .DS (DigitalSigns.ai) supports various screen configurations, including video walls, to create immersive brand experiences." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I monetize my screens with ads?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can interleave your own content with third-party advertisements or partner promotions to generate revenue." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is it compatible with my existing TVs?",
                                "acceptedAnswer": { "@type": "Answer", "text": "In most cases, yes. If your TVs have an HDMI port, you can use a supported media player (like Amazon Fire Stick or an Android player) to turn them into digital signs." }
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
                            <span className="text-[#2B7CD3]">Retail & Commerce</span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br className="hidden lg:block" />
                            <span className="text-[#2B7CD3]">Retail & Commerce</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Boost sales with high-impact promos, in-store campaigns, and digital merchandising across screens.
                            Turn traffic into customers with dynamic visuals.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <Link href="#templates">See Templates</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Tag className="w-4 h-4" />
                                </span>
                                Dynamic pricing
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Monitor className="w-4 h-4" />
                                </span>
                                Screen sync
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Layers className="w-4 h-4" />
                                </span>
                                Multi-zone layouts
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract background blobs for premium feel */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            {/* Fallback image or placeholder since we don't have the exact asset yet, utilizing a color block or generic retail image */}
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
                                    alt="Retail digital signage"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: Use video to showcase product details and increase dwell time.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Drive sales & foot traffic</h2>
                            <p className="text-gray-500">Transform your store into an engaging digital experience.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Tag className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Automated Promotions</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Schedule sales and limited-time offers to run automatically without staff intervention.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Monitor className="w-5 h-5 text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Immersive Brand Storytelling</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Use high-definition video and animation to tell your brand's story and connect with shoppers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Layers className="w-5 h-5 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Endless Aisle</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Showcase your full online inventory in-store, helping customers find exactly what they want.</p>
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Popular retail use cases</h2>
                        <p className="text-gray-500">Solutions tailored for different retail environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: ShoppingBag, color: 'text-indigo-500', bg: 'bg-indigo-50',
                                title: 'Retail Stores',
                                desc: 'Window displays and in-store promo screens for new arrivals and sales.',
                                link: '/solutions/retail/stores'
                            },
                            {
                                icon: ShoppingCart, color: 'text-emerald-600', bg: 'bg-emerald-50',
                                title: 'Supermarkets',
                                desc: 'Aisle-end specials, dynamic pricing, and deli counter menus.',
                                link: '/solutions/retail/supermarkets'
                            },
                            {
                                icon: Map, color: 'text-blue-500', bg: 'bg-blue-50',
                                title: 'Shopping Malls',
                                desc: 'Wayfinding, directory screens, and large-scale advertising walls.',
                                link: '/solutions/retail/shopping-malls'
                            },
                            {
                                icon: Home, color: 'text-cyan-600', bg: 'bg-cyan-50',
                                title: 'Real Estate',
                                desc: 'High-brightness window displays for listings and agent branding.',
                                link: '/solutions/retail/real-estate'
                            },
                            {
                                icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50',
                                title: 'Pharmacies',
                                desc: 'Health tips, service messaging, and promotional offers at the counter.',
                                link: '/solutions/retail/pharmacies'
                            },
                            {
                                icon: Car, color: 'text-slate-600', bg: 'bg-slate-100',
                                title: 'Auto Dealerships',
                                desc: 'Showroom promos, vehicle specs, and service waiting area content.',
                                link: '/solutions/retail/auto-dealerships'
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Retail templates</h2>
                            <p className="text-gray-500">Professional designs ready for your logo and content.</p>
                        </div>
                        <Link href="/templates?tag=retail" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#2B7CD3] transition-colors">
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
                                            src={`https://images.unsplash.com/photo-${1557804506000 + i}?auto=format&fit=crop&w=600&q=80`} // Random retail-ish placeholder
                                            alt={`Retail Template ${i}`}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-sm text-gray-900 mb-1">Seasonal Sale Promo {i}</h4>
                                    <p className="text-xs text-gray-500">Perfect for window displays and high-traffic zones.</p>
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
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Powerful features for retailers</h2>
                        <p className="text-gray-400 max-w-2xl">Tools designed to help you sell more and manage screens with ease.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Zap className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Instant Content Updates</h3>
                            <p className="text-gray-400 leading-relaxed">React to market trends or competitor moves instantly. Push new pricing or promos in seconds.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Layers className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Multi-Zone Layouts</h3>
                            <p className="text-gray-400 leading-relaxed">Display a video ad, a scrolling ticker, and a static promo all on the same screen.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Monitor className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Centralized Management</h3>
                            <p className="text-gray-400 leading-relaxed">Control one store or a thousand from a single dashboard. Ensure brand consistency everywhere.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Activity className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Performance Monitoring</h3>
                            <p className="text-gray-400 leading-relaxed">Know your screens are online and playing the right content with remote monitoring.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <p className="text-gray-500">Common questions from retail businesses.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Can I schedule sales ahead of time?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can schedule content to start and end at specific times, ensuring your promotions run exactly when you want them to.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Does it support video walls?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. .DS (DigitalSigns.ai) supports various screen configurations, including video walls, to create immersive brand experiences.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Can I monetize my screens with ads?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can interleave your own content with third-party advertisements or partner promotions to generate revenue.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Is it compatible with my existing TVs?</AccordionTrigger>
                                <AccordionContent>
                                    In most cases, yes. If your TVs have an HDMI port, you can use a supported media player (like Amazon Fire Stick or an Android player) to turn them into digital signs.
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Ready to modernize your retail space?</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Join thousands of retailers using .DS (DigitalSigns.ai) to drive sales and engage customers.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                                <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-14 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
                                    <Link href="/book-demo">Contact Sales</Link>
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
