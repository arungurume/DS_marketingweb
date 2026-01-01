'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, Utensils, Coffee, Wine, Pizza, Truck, Martini, ShoppingBag, ShoppingCart, Map, Home, Activity, Car, Building2, Calendar, Landmark, Factory, Stethoscope, GraduationCap, School, Library, Ticket, ChevronRight, Leaf, ShieldCheck, Zap } from 'lucide-react';

// Define the industry data structure
type Industry = {
    id: string;
    title: string;
    description: string;
    icon: any; // Using any for Lucide icon component type simplicity
    link: string;
    keywords: string;
};

type Group = {
    id: string;
    title: string;
    description: string;
    meta: string[];
    link?: string;
    industries: Industry[];
};

const groups: Group[] = [
    {
        id: 'food-hospitality',
        title: 'Food & Hospitality',
        description: 'Engage diners and streamline operations with digital menu boards, promos, and queue messaging.',
        link: '/solutions/food-hospitality',
        meta: ['Best for: menus & promotions', 'Best for: dayparting', 'Best for: multi-location chains'],
        industries: [
            { id: 'qsr', title: 'Quick Service (QSR)', description: 'Fast-loading menu boards for high-traffic chains, daypart scheduling, and upsell promotions.', icon: Utensils, link: '/solutions/food-hospitality/qsr', keywords: 'qsr quick service restaurants fast food menu boards drive thru kiosks dayparting' },
            { id: 'cafes', title: 'Coffee Shops & Cafés', description: 'Cozy displays for seasonal specials, loyalty promos, and queue-friendly menu layouts.', icon: Coffee, link: '/solutions/food-hospitality/coffee-shops-cafes', keywords: 'coffee cafes café espresso tea pastries seasonal drinks menu boards' },
            { id: 'bars', title: 'Bars & Nightclubs', description: 'Dynamic drink menus, happy-hour rotations, and event promotion screens.', icon: Martini, link: '/solutions/food-hospitality/bars-nightclubs', keywords: 'bars nightclubs drinks happy hour events promotions' },
            { id: 'pizzerias', title: 'Pizzerias', description: 'Visual menus that drive impulse purchases, combo upgrades, and add-on sales.', icon: Pizza, link: '/solutions/food-hospitality/pizzerias', keywords: 'pizzerias pizza slices combos impulse purchases menu' },
            { id: 'casual-dining', title: 'Casual Dining', description: 'Visual menus, automated dayparting, and brand consistency for sit-down restaurants.', icon: Utensils, link: '/solutions/food-hospitality/casual-dining', keywords: 'casual dining restaurants sit down menu boards dayparting' },
            { id: 'food-trucks', title: 'Food Trucks', description: 'Rugged, sunlight-readable mobile signage for rotating locations and daily menus.', icon: Truck, link: '/solutions/food-hospitality/food-trucks', keywords: 'food trucks mobile outdoor sunlight readable menus' },
            { id: 'fine-dining', title: 'Fine Dining', description: 'Elegant, subtle menus and digital wine lists that enhance the premium dining experience.', icon: Wine, link: '/solutions/food-hospitality/fine-dining', keywords: 'fine dining wine list elegant subtle menus' },
        ]
    },
    {
        id: 'retail-commerce',
        title: 'Retail & Commerce',
        description: 'Boost sales with high-impact promos, in-store campaigns, and digital merchandising across screens.',
        link: '/solutions/retail',
        meta: ['Best for: promotions', 'Best for: window displays', 'Best for: wayfinding'],
        industries: [
            { id: 'retail-stores', title: 'Retail Stores', description: 'Window displays and in-store promo screens for sales, new arrivals, and featured products.', icon: ShoppingBag, link: '/solutions/retail/stores', keywords: 'retail stores window displays in store promotions sales' },
            { id: 'supermarkets', title: 'Supermarkets', description: 'Aisle-end specials, dynamic pricing messaging, and counter menus for deli and butcher areas.', icon: ShoppingCart, link: '/solutions/retail/supermarkets', keywords: 'supermarkets grocery aisles end caps butcher counter menus specials' },
            { id: 'shopping-malls', title: 'Shopping Malls', description: 'Wayfinding, directory screens, and large-scale advertising walls for tenants and sponsors.', icon: Map, link: '/solutions/retail/shopping-malls', keywords: 'shopping malls wayfinding directories advertising walls' },
            { id: 'real-estate', title: 'Real Estate', description: 'High-brightness window displays for listings, open house promotions, and agent branding.', icon: Home, link: '/solutions/retail/real-estate', keywords: 'real estate window listings displays high brightness' },
            { id: 'pharmacies', title: 'Pharmacies', description: 'Health tips, service messaging, and promotional offers on in-store and waiting-area screens.', icon: Activity, link: '/solutions/retail/pharmacies', keywords: 'pharmacies health tips promotions queue screens' },
            { id: 'auto-dealerships', title: 'Auto Dealerships', description: 'Showroom promos, service updates, and waiting-area content to improve customer experience.', icon: Car, link: '/solutions/retail/auto-dealerships', keywords: 'auto dealerships showrooms promotions service waiting screens' },
        ]
    },
    {
        id: 'corporate-finance',
        title: 'Corporate & Finance',
        description: 'Modernize internal communication with dashboards, announcements, room status, and service messaging.',
        link: '/solutions/corporate-finance',
        meta: ['Best for: internal comms', 'Best for: meeting rooms', 'Best for: service messaging'],
        industries: [
            { id: 'corporate-offices', title: 'Corporate Offices', description: 'Employee recognition, company updates, and KPI dashboards across lobbies and common areas.', icon: Building2, link: '/solutions/corporate-finance/offices', keywords: 'corporate offices employee recognition dashboards kpi' },
            { id: 'meeting-rooms', title: 'Meeting Rooms', description: 'Automated room scheduling and status displays to reduce no-shows and improve utilization.', icon: Calendar, link: '/solutions/corporate-finance/meeting-rooms', keywords: 'meeting rooms room scheduling status displays' },
            { id: 'banks', title: 'Banks & Finance', description: 'Live rate screens, queue messaging, and personalized service information in branches.', icon: Landmark, link: '/solutions/corporate-finance/banks', keywords: 'banks finance live rates service messaging' },
            { id: 'warehouses', title: 'Warehouses', description: 'Safety alerts and real-time logistics tracking displayed where teams need it most.', icon: Factory, link: '/solutions/corporate-finance/warehouses', keywords: 'warehouses safety alerts logistics tracking realtime' },
            { id: 'clinics', title: 'Clinics & Offices', description: 'Front-desk messaging, announcements, and branded screens for reception and waiting areas.', icon: Stethoscope, link: '/solutions/corporate-finance/clinics', keywords: 'healthcare clinics internal communication patient messaging' },
            { id: 'manufacturing', title: 'Manufacturing', description: 'Production dashboards, shift messaging, and safety reminders for floor operations.', icon: Factory, link: '/solutions/corporate-finance/manufacturing', keywords: 'manufacturing safety kpi production dashboards' },
        ]
    },
    {
        id: 'education-public',
        title: 'Education & Public',
        description: 'Inform and protect communities with announcements, alerts, wayfinding, and event messaging.',
        link: '/solutions/education-public',
        meta: ['Best for: announcements', 'Best for: wayfinding', 'Best for: safety alerts'],
        industries: [
            { id: 'k12', title: 'Schools & K–12', description: 'Daily announcements, cafeteria menus, event reminders, and emergency messaging.', icon: School, link: '/solutions/education-public/k12', keywords: 'schools k-12 announcements cafeteria menus' },
            { id: 'universities', title: 'Universities', description: 'Campus-wide alerts, event promotion, and wayfinding across buildings and departments.', icon: GraduationCap, link: '/solutions/education-public/universities', keywords: 'universities campus alerts wayfinding events' },
            { id: 'government', title: 'Government', description: 'Public service announcements, queue messaging, and department wayfinding at facilities.', icon: Landmark, link: '/solutions/education-public/government', keywords: 'government public service announcements queue management' },
            { id: 'museums', title: 'Museums', description: 'Exhibit information, interactive experiences, sponsor loops, and visitor guidance screens.', icon: Library, link: '/solutions/education-public/museums', keywords: 'museums interactive exhibits exhibit information' },
            { id: 'events', title: 'Events & Arenas', description: 'Live sponsorship loops, dynamic fan zones, directional messaging, and event schedules.', icon: Ticket, link: '/solutions/education-public/events-arenas', keywords: 'events arenas sponsorship loops fan zones' },
            { id: 'libraries', title: 'Libraries', description: 'Community announcements, event schedules, room info, and wayfinding for visitors.', icon: Library, link: '/solutions/education-public/community-centers', keywords: 'libraries community announcements events' },
        ]
    },
    {
        id: 'cannabis',
        title: 'Cannabis',
        description: 'Modernize dispensaries and grow ops with digital menus, compliance tracking, and promotional displays.',
        link: '/solutions/cannabis',
        meta: ['Best for: digital menus', 'Best for: compliance', 'Best for: grow ops'],
        industries: [
            { id: 'dispensaries', title: 'Dispensaries', description: 'Dynamic menus with real-time stock, THC/CBD levels, and promotional displays.', icon: Leaf, link: '/solutions/cannabis/dispensaries', keywords: 'dispensaries cannabis leaf menus pot weed cbd thc' },
            { id: 'growth-facilities', title: 'Growth Facilities', description: 'Environmental monitoring dashboards, staff announcements, and safety alerts.', icon: Activity, link: '/solutions/cannabis/growth-facilities', keywords: 'growth facilities cultivation cannabis monitoring' },
            { id: 'processing', title: 'Processing', description: 'Compliance tracking, safety protocols, and operational dashboards for processing plants.', icon: ShieldCheck, link: '/solutions/cannabis/processing', keywords: 'processing cannabis manufacturing safety compliance' },
            { id: 'delivery', title: 'Delivery Services', description: 'Dispatch dashboards, waiting room status, and promotional screens for local services.', icon: Truck, link: '/solutions/cannabis/delivery', keywords: 'delivery cannabis weed dispatch logistics' },
        ]
    }
];

export default function SolutionsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter logic
    const filteredGroups = useMemo(() => {
        if (!searchQuery.trim()) return groups;
        const query = searchQuery.toLowerCase().trim();

        return groups.map(group => {
            // Check if group matches
            const groupMatches = group.title.toLowerCase().includes(query) || group.description.toLowerCase().includes(query);

            // Check if industries match
            const matchingIndustries = group.industries.filter(ind =>
                ind.title.toLowerCase().includes(query) ||
                ind.description.toLowerCase().includes(query) ||
                ind.keywords.includes(query)
            );

            // If group matches, show all its industries (or maybe just matching ones? Let's show all for context if group matches, otherwise just matching ones)
            // Actually, better UX: show group if it matches OR if it has matching industries.
            // If group matches, show all industries. If only industries match, show those.
            // Simpler approach for this grid: Filter industries. If a group has 0 industries left, don't show group.

            if (groupMatches) return group; // Return full group if title/desc matches

            if (matchingIndustries.length > 0) {
                return { ...group, industries: matchingIndustries };
            }

            return null;
        }).filter(Boolean) as Group[];
    }, [searchQuery]);

    return (
        <div className="min-h-screen bg-white">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Digital signage solutions by industry",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Food & Hospitality", "url": "https://digitalsigns.ai/solutions/food-hospitality" },
                            { "@type": "ListItem", "position": 2, "name": "Retail & Commerce", "url": "https://digitalsigns.ai/solutions/retail" },
                            { "@type": "ListItem", "position": 3, "name": "Corporate & Finance", "url": "https://digitalsigns.ai/solutions/corporate-finance" },
                            { "@type": "ListItem", "position": 4, "name": "Education & Public", "url": "https://digitalsigns.ai/solutions/education-public" },
                            { "@type": "ListItem", "position": 5, "name": "Cannabis", "url": "https://digitalsigns.ai/solutions/cannabis" }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-6">
                <div className="max-w-[1120px] mx-auto">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
                        <Link href="/" className="hover:text-[#2B7CD3] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <span className="text-gray-900">Solutions</span>
                    </div>

                    <h1 className="font-headline text-4xl md:text-5xl lg:text-[44px] font-bold text-gray-900 leading-[1.1] mb-4">
                        Digital Signage Solutions for <span className="text-[#2B7CD3]">Every Business</span>
                    </h1>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-[82ch] mb-8">
                        .DS (DigitalSigns.ai) helps businesses run modern digital displays—like menu boards, promotions, wayfinding, and internal dashboards—across one screen or thousands. <strong>DShub</strong>, our digital signage CMS, lets you design, schedule, and publish content in real time.
                    </p>

                    <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start mt-8">
                        <div>
                            {/* Chips */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {[
                                    '🍔 QSR menu boards',
                                    '☕ Café displays',
                                    '🛍 Retail promos',
                                    '🏢 KPI dashboards',
                                    '🏫 Announcements'
                                ].map(chip => (
                                    <span key={chip} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 text-slate-700 text-xs font-bold hover:bg-blue-100 transition-colors cursor-default">
                                        {chip}
                                    </span>
                                ))}
                            </div>

                            {/* AI Summary Block */}
                            <div className="border border-dashed border-blue-200 bg-blue-50/50 rounded-[18px] p-4 text-[13px] leading-relaxed text-slate-600 mb-6">
                                <strong className="text-slate-900">Summary:</strong> This page lists industry-specific digital signage solutions. Each solution shows typical use cases (menus, promotions, wayfinding, internal comms), and links to dedicated pages for deeper details—optimized for both single-location businesses and multi-location networks.
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Button asChild className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold rounded-xl h-10 px-5 transition-transform hover:scale-105 shadow-md">
                                    <Link href="/book-demo">Book a Consultation</Link>
                                </Button>
                                <Button asChild variant="ghost" className="hover:bg-gray-50 text-gray-600 font-bold rounded-xl h-10 px-5">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="hover:bg-gray-50 text-gray-600 font-bold rounded-xl h-10 px-5">
                                    <Link href="/templates?tag=menu-boards">Browse Templates</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Search Widget */}
                        <div className="border border-gray-100 rounded-[26px] bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)] overflow-hidden">
                            <div className="p-4 bg-white border-b border-gray-100">
                                <h2 className="font-bold text-lg text-gray-900 mb-1">Find your industry faster</h2>
                                <p className="text-[13px] text-gray-500">Type a keyword like “restaurant”, “coffee”, or “school”.</p>
                            </div>
                            <div className="p-4 bg-gray-50/30">
                                <div className="relative flex items-center bg-white border border-gray-200 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-[#2B7CD3] transition-all">
                                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Search industries..."
                                        className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder:text-gray-400"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-gray-50 px-1.5 font-mono text-[10px] font-medium text-gray-500 opacity-100">
                                        <span className="text-xs">⌘</span>K
                                    </kbd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Groups */}
            <div className="pb-24 px-6 space-y-12">
                {filteredGroups.length === 0 ? (
                    <div className="text-center py-20 max-w-[1120px] mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No industries found</h3>
                        <p className="text-gray-500">Try searching for something else or browse all solutions.</p>
                        <Button variant="outline" className="mt-4" onClick={() => setSearchQuery('')}>Clear Search</Button>
                    </div>
                ) : (
                    filteredGroups.map((group) => (
                        <section key={group.id} id={group.id} className="max-w-[1120px] mx-auto p-6 md:p-8 border border-gray-100 rounded-[26px] bg-white">
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                                <div>
                                    {group.link ? (
                                        <Link href={group.link} className="flex items-center gap-2 group/title cursor-pointer w-fit">
                                            <h3 className="font-headline text-2xl font-bold text-gray-900 mb-2 group-hover/title:text-[#2B7CD3] transition-colors">{group.title}</h3>
                                            <ArrowRight className="w-5 h-5 text-[#2B7CD3] opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all mb-2" />
                                        </Link>
                                    ) : (
                                        <h3 className="font-headline text-2xl font-bold text-gray-900 mb-2">{group.title}</h3>
                                    )}
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[90ch]">{group.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.meta.map((meta, idx) => (
                                        <span key={idx} className="inline-flex items-center px-3 py-1.5 border border-gray-100 rounded-full text-xs font-medium text-gray-500 bg-white whitespace-nowrap">
                                            {meta}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {group.industries.map((industry) => (
                                    <Link
                                        key={industry.id}
                                        href={industry.link}
                                        className="group bg-white border border-gray-100 rounded-[18px] p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between min-h-[160px]"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <industry.icon className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[15px] text-gray-900 mb-2 group-hover:text-[#2B7CD3] transition-colors">{industry.title}</h4>
                                            <p className="text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-3">{industry.description}</p>
                                            <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#2B7CD3]">
                                                View solution <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))
                )}
            </div>

            {/* Footer CTA */}
            <section className="pb-24 px-6">
                <div className="max-w-[1120px] mx-auto bg-[#0b1220] rounded-[26px] p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-3">Don’t see your exact industry?</h2>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[74ch]">
                                We build custom signage workflows every day—from unique screen layouts to integrations and multi-location publishing. Tell us what you need and we’ll recommend the fastest path.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0">
                            <Button asChild className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold h-11 px-6 rounded-xl border border-transparent">
                                <a href="https://wa.me/12263360773">Contact Sales</a>
                            </Button>
                            <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                            <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
