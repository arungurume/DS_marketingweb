'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Utensils, ShoppingBag, Briefcase, GraduationCap, Building2, HeartPulse, Landmark, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industryGroups = [
    {
        category: 'Food & Hospitality',
        description: 'Engage diners and streamline operations with digital menu boards and interactive displays.',
        icon: Utensils,
        industries: [
            { label: 'Quick Service (QSR)', description: 'Fast-loading menu boards for high-traffic food chains.' },
            { label: 'Coffee Shops & Cafes', description: 'Cozy, aesthetic displays for specials and community news.' },
            { label: 'Bars & Nightclubs', description: 'Dynamic drink menus and event promotions.' },
            { label: 'Pizzerias', description: 'Visual menus that drive impulse purchases.' },
            { label: 'Food Trucks', description: 'Rugged, sunlight-readable mobile signage.' },
            { label: 'Fine Dining', description: 'Elegant, subtle digital wine lists and menus.' },
        ]
    },
    {
        category: 'Retail & Commerce',
        description: 'Transform shopper experiences and boost sales with high-impact visual marketing.',
        icon: ShoppingBag,
        industries: [
            { label: 'Retail Stores', description: 'Window displays and in-store promo screens.' },
            { label: 'Supermarkets', description: 'Aisles-end specials and butcher counter menus.' },
            { label: 'Shopping Malls', description: 'Wayfinding and large-scale advertising walls.' },
            { label: 'Real Estate', description: 'High-brightness window displays for listings.' },
            { label: 'Pharmacies', description: 'Health tips and promotional offer screens.' },
        ]
    },
    {
        category: 'Corporate & Finance',
        description: 'Enhance internal communication and modernize professional environments.',
        icon: Briefcase,
        industries: [
            { label: 'Corporate Offices', description: 'Employee recognition and KPI dashboards.' },
            { label: 'Meeting Rooms', description: 'Automated room scheduling and status displays.' },
            { label: 'Banks & Finance', description: 'Live rates and personalized service messaging.' },
            { label: 'Warehouses', description: 'Safety alerts and real-time logistics tracking.' },
        ]
    },
    {
        category: 'Education & Public',
        description: 'Inform and protect your community with scalable signage networks.',
        icon: GraduationCap,
        industries: [
            { label: 'Schools & K-12', description: 'Daily announcements and cafeteria menus.' },
            { label: 'Universities', description: 'Campus-wide alerts and event wayfinding.' },
            { label: 'Government', description: 'Public service announcements and queue management.' },
            { label: 'Museums', description: 'Interactive exhibits and exhibit information.' },
            { label: 'Events & Arenas', description: 'Live sponsorship loops and dynamic fan zones.' },
        ]
    }
];

export default function SolutionsHub() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-gray-50 bg-[#fcfdff]">
                {/* Refined Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-50/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-[#00AEEF]/5 text-[#00AEEF] text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                        Industry Solutions
                    </span>
                    <h1 className="font-headline font-semibold text-5xl md:text-6xl text-gray-900 tracking-tight mb-8">
                        Digital Signage for <span className="text-[#00AEEF]">Every Business.</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-500 font-medium leading-relaxed">
                        From single-screen cafes to global retail networks, DigitalSigns.ai scales with your operations.
                        Choose your industry to see how we help you engage customers and boost revenue.
                    </p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-32">
                        {industryGroups.map((group, groupIdx) => (
                            <div key={group.category} className="relative">
                                {/* Category Header */}
                                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
                                    <div className="max-w-2xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-gray-50 rounded-lg">
                                                <group.icon className="w-5 h-5 text-gray-900" />
                                            </div>
                                            <h2 className="font-headline font-semibold text-3xl text-gray-900 tracking-tight">
                                                {group.category}
                                            </h2>
                                        </div>
                                        <p className="text-lg text-gray-500 font-medium leading-relaxed">
                                            {group.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Industry Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {group.industries.map((industry) => (
                                        <Link
                                            key={industry.label}
                                            href={`/solutions/${industry.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                            className="group p-8 bg-white border border-gray-100 rounded-[24px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-[#00AEEF]/20 hover:-translate-y-1 block"
                                        >
                                            <h3 className="font-headline font-semibold text-xl text-gray-900 mb-3 group-hover:text-[#00AEEF] transition-colors">
                                                {industry.label}
                                            </h3>
                                            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                                                {industry.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                                View Solution <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-gray-900 text-white rounded-[48px] m-6">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-headline font-semibold text-4xl mb-8 leading-tight">
                        Don't see your specific industry?
                        <br />
                        <span className="text-gray-400">We build custom solutions every day.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold h-14 px-10 rounded-2xl transition-all hover:scale-[1.05] active:scale-[0.95]">
                            Contact Our Sales Team
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold h-14 px-10 rounded-2xl">
                            Book a Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
