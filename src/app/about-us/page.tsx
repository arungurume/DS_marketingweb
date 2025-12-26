'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { TvFrame } from '@/components/shared/TvFrame';
import { Check, Clock, DollarSign, BarChart, Users, Store, Coffee, GraduationCap, Building2, Utensils } from 'lucide-react';
import Link from 'next/link';

const values = [
    {
        title: 'Save Time',
        description: 'Update menus and promotions in minutes, not hours. No more manual changes.',
        icon: Clock
    },
    {
        title: 'Cut Costs',
        description: 'Eliminate the need for constant design or print updates. Save on printing and agencies.',
        icon: DollarSign
    },
    {
        title: 'Scale Easily',
        description: 'Manage one screen or a hundred from the same dashboard effortlessly.',
        icon: BarChart
    },
    {
        title: 'Engage Customers',
        description: 'Use dynamic visuals that capture attention and drive more sales in-store.',
        icon: Users
    }
];

const whoWeServe = [
    { name: 'Restaurants & QSR', icon: Utensils },
    { name: 'Cafes & Coffee Shops', icon: Coffee },
    { name: 'Retail & Shops', icon: Store },
    { name: 'Schools & Campuses', icon: GraduationCap },
    { name: 'Offices & Corporate', icon: Building2 },
    { name: 'Franchise Chains', icon: Building2 },
];

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gray-50/50 border-b border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6 text-center">
                    <h1 className="font-headline text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        The Future of Digital <span className="text-[#2B7CD3]">Signage.</span>
                    </h1>
                    <p className="font-body text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-normal">
                        .DS (DigitalSigns.ai) helps businesses deliver content that attracts customers, boosts sales, and saves time through effortless cloud-based management.
                    </p>
                </div>
            </section>

            {/* Product Section: DSHub */}
            <section className="py-24 bg-white border-b border-gray-50 overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2B7CD3] text-xs font-bold tracking-widest uppercase mb-6">THE CORE</div>
                        <h2 className="font-headline text-4xl font-semibold text-gray-900 mb-6 tracking-tight">DSHub Cloud-Based CMS</h2>
                        <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                            DSHub is an all-in-one cloud-based signage CMS that gives you complete control of your screens. Whether you’re managing a single TV menu board or hundreds of displays across multiple locations, DSHub keeps everything synced and dynamic.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Real-time screen pairing & synchronization',
                                'Works with Android TV, Firestick & any web browser',
                                'Supports both landscape & portrait layouts',
                                'Tag-based grouping for multi-location management'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                                        <Check className="h-4 w-4 text-[#2B7CD3]" />
                                    </div>
                                    <span className="font-body text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <TvFrame mode="window" className="shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Product Section: DSEditor */}
            <section className="py-24 bg-gray-50/30">
                <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="aspect-[16/10] bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group cursor-pointer transition-transform hover:scale-[1.01]">
                            <div className="text-center px-12">
                                <div className="inline-block mb-6 p-4 rounded-full bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                                    <BarChart className="h-12 w-12 text-[#2B7CD3]" />
                                </div>
                                <h4 className="text-white font-headline text-2xl font-bold mb-4">Design Editor Mockup</h4>
                                <p className="text-gray-400 font-normal">Visualizing the drag-and-drop experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold tracking-widest uppercase mb-6">CANVA ALTERNATIVE</div>
                        <h2 className="font-headline text-4xl font-semibold text-gray-900 mb-6 tracking-tight">DSEditor Menu Design</h2>
                        <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                            Not every business has a graphic designer. That’s why we created DSEditor—a simple, drag-and-drop tool built specifically for restaurants. Think of it as a Canva alternative tailored for digital signage.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Ready-to-use templates for menus & promos',
                                'Export to JPEG, PDF, or publish directly',
                                'Perfect for signage, print, or social media',
                                'Easy customization with no experience'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="font-body text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6 text-center mb-16">
                    <h2 className="font-headline text-4xl font-semibold text-gray-900 tracking-tight">Why Choose .DS (DigitalSigns.ai)?</h2>
                </div>
                <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v) => (
                        <div key={v.title} className="p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all hover:bg-gray-50/50 group">
                            <div className="mb-6 h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#2B7CD3] transition-colors">
                                <v.icon className="h-6 w-6 text-[#2B7CD3] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-headline text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                            <p className="font-body text-gray-600 leading-relaxed text-sm">{v.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-24 bg-gray-50/30">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-md">
                            <h2 className="font-headline text-4xl font-semibold text-gray-900 tracking-tight mb-6">Who We Serve</h2>
                            <p className="font-body text-lg text-gray-600">Our digital signage solutions are trusted by a wide range of growing businesses across the globe.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 flex-1 w-full max-w-xl">
                            {whoWeServe.map((item) => (
                                <div key={item.name} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <item.icon className="h-5 w-5 text-[#2B7CD3]" />
                                    <span className="font-headline font-bold text-gray-800 text-sm">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-white border-t border-gray-50">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-16 items-start">
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold tracking-widest uppercase mb-6">OUR STORY</div>
                            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
                                Making digital signage as easy as updating a <span className="text-[#2B7CD3]">social post.</span>
                            </h2>
                        </div>
                        <div className="font-body text-lg text-gray-600 leading-relaxed space-y-8">
                            <p>
                                .DS (DigitalSigns.ai) was founded with a single vision: to democratize digital signage technology. We saw that most businesses—from local cafes to global franchises—struggled with outdated, expensive, or overly complex legacy systems.
                            </p>
                            <p>
                                Our team built **DSHub** and **DSEditor** to provide a modern, cloud-based alternative. By combining powerful remote management with intuitive drag-and-drop design, we've created the most accessible **Free Digital Signage CMS** on the market today.
                            </p>
                            <p>
                                Whether you're a small coffee shop looking to build its first **digital menu board** or a corporate office managing a global network of displays, we provide the tools you need to stay ahead in a fast-changing digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-[1240px] mx-auto px-6 text-center">
                    <h2 className="font-headline text-4xl md:text-5xl font-semibold tracking-tight mb-8">Get Started Today.</h2>
                    <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                        Start free with 2 screens forever—no credit card required. Experience the power of DSHub and see how simple digital signage can be.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white px-10 h-14 text-lg font-bold rounded-xl shadow-2xl transition-transform hover:scale-[1.02]">
                            <Link href="#">Try .DS (DigitalSigns.ai) for Free</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-gray-800 bg-transparent text-white hover:bg-white/5 px-10 h-14 text-lg font-bold rounded-xl transition-all">
                            <Link href="/pricing">View Pricing</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
