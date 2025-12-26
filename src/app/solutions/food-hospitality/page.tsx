'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Clock, MapPin, Store, Utensils, Coffee, Martini, Pizza, Truck, Wine, Zap, Printer, Layout, Calendar, PlaySquare, Monitor, Edit, ChevronRight } from 'lucide-react';

export default function FoodHospitalityPage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Food & Hospitality", "item": "https://digitalsigns.ai/solutions/food-hospitality" }
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
                                "name": "Can I update my menu in seconds?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Update content in the dashboard and publish instantly or schedule changes (breakfast/lunch/dinner, daily specials, happy hour)." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it work for multiple restaurant locations?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can manage screens by location, publish content to one store or all stores, and keep branding consistent across locations." }
                            },
                            {
                                "@type": "Question",
                                "name": "What screen hardware is supported?",
                                "acceptedAnswer": { "@type": "Answer", "text": " .DS (DigitalSigns.ai) supports common Android-based players and other compatible devices. Choose the setup that fits your screens and network." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I schedule content automatically?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Create schedules by date/time and playlists, then the screens switch automatically based on your rules." }
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
                            <span className="text-[#2B7CD3]">Food & Hospitality</span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br className="hidden lg:block" />
                            <span className="text-[#2B7CD3]">Food & Hospitality</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            From QSR to fine dining, keep menus and promos always up to date.
                            Schedule dayparts, push instant changes, and manage screens across every location.
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
                                    <Zap className="w-4 h-4" />
                                </span>
                                Instant menu updates
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Calendar className="w-4 h-4" />
                                </span>
                                Daypart scheduling
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Store className="w-4 h-4" />
                                </span>
                                Multi-location control
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract background blobs for premium feel */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            {/* Fallback image or placeholder since we don't have the exact asset yet, utilizing a color block or generic food image */}
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop"
                                    alt="Digital menu board"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: Use breakfast/lunch/dinner schedules to auto-switch menus.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Built for restaurants, cafes, bars & more</h2>
                            <p className="text-gray-500">Everything you need to run digital menu boards without complexity.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Zap className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Increase upsells</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Highlight combos, add-ons, and limited-time offers with motion and high-impact layouts.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Printer className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Reduce printing</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Change prices and items instantly—no more reprints every time your menu changes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Layout className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Templates that look premium</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Start with ready-made designs, add your logo, and publish to screens in minutes.</p>
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Popular food & hospitality use cases</h2>
                        <p className="text-gray-500">Pick a setup that matches your business type.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-50',
                                title: 'Quick Service (QSR)',
                                desc: 'Fast-loading menu boards for high-traffic food chains.',
                                link: '/solutions/food-hospitality/qsr'
                            },
                            {
                                icon: Coffee, color: 'text-amber-700', bg: 'bg-amber-50',
                                title: 'Coffee Shops & Cafes',
                                desc: 'Promote seasonal drinks, pastries, and community announcements.',
                                link: '/solutions/food-hospitality/coffee-shops-cafes'
                            },
                            {
                                icon: Martini, color: 'text-pink-500', bg: 'bg-pink-50',
                                title: 'Bars & Nightclubs',
                                desc: 'Dynamic drinks menus, event promos, and live specials.',
                                link: '/solutions/food-hospitality/bars-nightclubs'
                            },
                            {
                                icon: Pizza, color: 'text-red-500', bg: 'bg-red-50',
                                title: 'Pizzerias',
                                desc: 'Visual menus that drive impulse purchases and combo deals.',
                                link: '/solutions/food-hospitality/pizzerias'
                            },
                            {
                                icon: Truck, color: 'text-blue-500', bg: 'bg-blue-50',
                                title: 'Food Trucks',
                                desc: 'Simple signage built for mobility and quick updates.',
                                link: '/solutions/food-hospitality/food-trucks'
                            },
                            {
                                icon: Wine, color: 'text-purple-800', bg: 'bg-purple-50',
                                title: 'Fine Dining',
                                desc: 'Elegant wine lists, tasting menus, and subtle promotions.',
                                link: '/solutions/food-hospitality/fine-dining'
                            },
                            {
                                icon: Utensils, color: 'text-blue-600', bg: 'bg-blue-50',
                                title: 'Casual Dining',
                                desc: 'Visual menus, automated dayparting, and brand consistency.',
                                link: '/solutions/food-hospitality/casual-dining'
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Menu board templates</h2>
                            <p className="text-gray-500">Start with a template, add your logo, and publish to screens.</p>
                        </div>
                        <Link href="/templates?tag=menu-boards" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#2B7CD3] transition-colors">
                            Browse all templates <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="border border-gray-100 rounded-[18px] overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                                <div className="bg-gray-100 aspect-[16/9] relative md:h-[200px]">
                                    {/* Placeholder for template image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                        <Image
                                            src={`https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&w=400&q=80`} // Completely random Unsplash placeholder for structure
                                            alt={`Template ${i}`}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-sm text-gray-900 mb-1">Modern QSR Menu {i}</h4>
                                    <p className="text-xs text-gray-500">Best for combos, add-ons, and rotating specials.</p>
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
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Key features for food businesses</h2>
                        <p className="text-gray-400 max-w-2xl">Designed to save staff time and keep menus accurate without the headache.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Calendar className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Daypart & promo scheduling</h3>
                            <p className="text-gray-400 leading-relaxed">Breakfast → lunch → dinner automatically. Schedule weekly specials and seasonal promos.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <PlaySquare className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Playlists & screen control</h3>
                            <p className="text-gray-400 leading-relaxed">Run menus, promos, and announcements in a single playlist with smooth transitions.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Monitor className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Multi-location management</h3>
                            <p className="text-gray-400 leading-relaxed">Publish content to one screen, one store, or all stores from the same dashboard.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <Edit className="w-10 h-10 text-[#2B7CD3] mb-6" />
                            <h3 className="font-bold text-xl mb-3">Fast content creation</h3>
                            <p className="text-gray-400 leading-relaxed">Use templates (or Canva) to create professional designs without a designer.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <p className="text-gray-500">Common questions from restaurants and cafes.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Can I update my menu in seconds?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Update content in the dashboard and publish instantly or schedule changes from your phone or computer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Does it work for multiple locations?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. managing multiple locations is a core feature. You can group screens by location and update them all at once or individually.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>What screen hardware is supported?</AccordionTrigger>
                                <AccordionContent>
                                    We support any Android TV, Amazon Fire Stick, or any screen with a browser. We also have dedicated hardware players for enterprise stability.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I schedule content automatically?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, dayparting is built-in. You can set specific playlists to run at specific times (e.g. Breakfast menu 6am-11am).
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Don’t see your specific food business?</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We build custom signage solutions every day. Tell us your setup and we’ll recommend the best approach.
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
