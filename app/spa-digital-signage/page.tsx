'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles, Clock, Palette, Globe, Smartphone, Zap } from 'lucide-react';
import { getAllCities, getAllBusinessTypes } from '@/lib/spa-locations';

export default function SpaDigitalSignagePage() {
    const cities = getAllCities();
    const businessTypes = getAllBusinessTypes();

    // Featured cities with custom backgrounds
    const featuredCities = [
        { name: 'Barcelona', slug: 'barcelona', country: 'Spain', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2670&auto=format&fit=crop' },
        { name: 'Paris', slug: 'paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop' },
        { name: 'London', slug: 'london', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop' },
        { name: 'Zurich', slug: 'zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1532939163844-547f958e91b4?q=80&w=2671&auto=format&fit=crop' },
        { name: 'Rome', slug: 'rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2696&auto=format&fit=crop' },
        { name: 'Dubai', slug: 'dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop' },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-indigo-50/30">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-indigo-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-indigo-700">Spa Digital Signage</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-indigo-200 rounded-full text-xs font-semibold tracking-wider text-indigo-700 uppercase mb-4 bg-indigo-50">
                            WELLNESS & SPA SOLUTIONS
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br /> Spas & Wellness Centers
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Create calm, inspiring environments in your spa, resort, or wellness retreat with <strong>DigitalSigns.ai</strong>. Display relaxing visuals, promote treatments, and <strong>manage all screens effortlessly</strong> from one dashboard.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-indigo-900/10 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-700">
                                    <Sparkles className="w-4 h-4" />
                                </span>
                                Calming Visuals
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-700">
                                    <Clock className="w-4 h-4" />
                                </span>
                                Treatment Menus
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-700">
                                    <Palette className="w-4 h-4" />
                                </span>
                                Custom Branding
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-indigo-200 transition-colors">Best for: Day Spas</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-indigo-200 transition-colors">Best for: Resort Spas</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-indigo-200 transition-colors">Best for: Wellness Centers</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop"
                                    alt="Relaxing spa environment with digital signage displaying treatment menu"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                    Tip: Use soft, nature-inspired visuals and calming color palettes to enhance your spa's tranquil atmosphere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Spas Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why spas & wellness centers choose .DS</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Create a premium, relaxing experience while promoting treatments and increasing bookings.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Instant Updates</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Update treatments, prices, and promotions in real-time across all your spa locations from one dashboard.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Calming Visuals</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Display serene imagery, nature scenes, and relaxing content that enhances your spa's tranquil atmosphere.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Works Anywhere</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Use any Android TV, Fire TV Stick, or browser-based screen. No expensive hardware required.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In the wellness industry, <strong>spa digital signage</strong> is essential for creating an immersive, professional experience that drives bookings and customer satisfaction.
                    </p>
                </div>
            </section>

            {/* Explore Spa Types */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Digital Signage for Every Spa Type</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Discover tailored solutions for different wellness and spa businesses.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {businessTypes.map((type, i) => (
                            <Link
                                key={i}
                                href={`/spa-digital-signage/barcelona/${type.slug}`}
                                className="p-4 border border-indigo-50 rounded-[18px] bg-white hover:border-indigo-200 hover:shadow-md transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px] group-hover:text-indigo-700 transition-colors">{type.name}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">View solutions →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Cities */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Top Spa Locations Using Digital Signage</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">From tropical resorts to luxury urban spas, see where DigitalSigns.ai powers beautiful displays around the world.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {featuredCities.map((city, i) => (
                            <Link
                                key={i}
                                href={`/spa-digital-signage/${city.slug}`}
                                className="group relative rounded-[18px] overflow-hidden bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <Image
                                        src={city.image}
                                        alt={`${city.name} spa digital signage`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                        <h3 className="font-headline text-2xl font-bold text-white mb-1">
                                            {city.name}
                                        </h3>
                                        <p className="text-white/90 text-sm">{city.country}</p>
                                        <p className="text-white/80 text-xs mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Explore spa solutions
                                            <ChevronRight className="w-3 h-3" />
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Built for Wellness Professionals</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, elegant, and easy-to-use digital signage designed for premium spa experiences.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { icon: Clock, title: "Daypart Scheduling", desc: "Schedule playlists for morning yoga, afternoon services, or evening promos with a few clicks." },
                            { icon: Smartphone, title: "Any Device", desc: "Works with Android TV, Fire TV, or browser-based screens. Pair the device and publish instantly." },
                            { icon: Globe, title: "Multi-Location Management", desc: "Set roles and manage content across multiple spa branches from a single dashboard." },
                            { icon: Palette, title: "Custom Branding", desc: "Upload your brand assets and create reusable templates with your logo, colors, and fonts." },
                            { icon: Zap, title: "Offline Playback", desc: "Content keeps playing even if the internet drops. New content syncs automatically when restored." },
                            { icon: Sparkles, title: "Premium Templates", desc: "Access beautiful, professionally designed templates perfect for spa and wellness environments." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white hover:border-indigo-100 hover:shadow-md transition-all">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                        <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/pricing" className="text-indigo-700 font-extrabold hover:underline">Pricing</Link> or learn about <Link href="/hardware" className="text-indigo-700 font-extrabold hover:underline">Compatible Hardware</Link>.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-24 pt-12 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-[#0b1220] rounded-[26px] p-10 md:p-14 text-white">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-indigo-50">Ready to transform your spa experience?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Join hundreds of spas and wellness centers using DigitalSigns.ai to create beautiful, engaging displays.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Start Free Trial</a>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
