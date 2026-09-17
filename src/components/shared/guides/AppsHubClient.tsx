'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    ChevronRight,
    ArrowRight,
    Info,
    Youtube,
    Megaphone,
    Globe,
    CloudSun,
    Instagram,
    Palette,
    FileSpreadsheet,
    Presentation,
    Calendar,
    Table,
    BarChart,
    Image as ImageIcon
} from 'lucide-react';
import { appGuides, IconName } from '@/data/app-guides.data';

const IconMap: Record<IconName, any> = {
    'youtube': Youtube,
    'announcements': Megaphone,
    'html-page': Globe,
    'weather': CloudSun,
    'instagram': Instagram,
    'canva': Palette,
    'google-sheets': FileSpreadsheet,
    'google-slides': Presentation,
    'google-calendar': Calendar,
    'outlook-calendar': Calendar,
    'microsoft-excel': Table,
    'microsoft-power-bi': BarChart,
    'postermywall': ImageIcon,
};

export function AppsHubClient() {
    const scrollToApps = () => {
        const element = document.getElementById('app-list');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            {/* Header / Hero Section */}
            <section className="pt-16 pb-8 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                        <Link href="/" className="hover:text-[#2B7CD3] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <Link href="/guides" className="hover:text-[#2B7CD3] transition-colors">Guides</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <span className="text-[#2B7CD3]">Apps</span>
                    </div>

                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Apps & Integrations
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mb-10">
                        Connect YouTube, Calendars, Spreadsheets, Social Feeds, Dashboards and more directly into your playlists.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <Button asChild className="bg-[#2B7CD3] hover:bg-[#2366b1] text-white font-bold h-12 px-8 rounded-full transition-all text-base shadow-lg hover:shadow-xl">
                            <Link href="https://hub.digitalsigns.ai/">Sign in to DShub</Link>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={scrollToApps}
                            className="border-gray-200 hover:bg-gray-100 text-gray-900 font-bold h-12 px-8 rounded-full transition-all text-base"
                        >
                            Explore Apps
                        </Button>
                    </div>
                </div>
            </section>

            {/* Intro Section - Matching Amazon Setup Style */}
            <section className="py-12 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-gray-50 rounded-[40px] p-10 md:p-12 border border-gray-100 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-500 p-2 rounded-xl mt-1">
                                <Info className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Apps Work in DShub</h2>
                                <p className="text-[17px] text-gray-600 leading-relaxed font-medium mb-6">
                                    Apps in DigitalSigns.ai allow you to pull live content directly from your favorite platforms. Unlike static images or videos, Apps are dynamic—when you update your Google Sheet, Canva design, or YouTube playlist, the changes appear on your screens instantly without you having to re-upload anything.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/solutions" className="text-[#2B7CD3] font-bold hover:underline flex items-center gap-1 group">
                                        View all solutions <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Grid Section */}
            <section id="app-list" className="py-24 bg-white scroll-mt-20">
                <div className="max-w-[1100px] mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-headline">Explore Our App Guides</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {appGuides.map((app) => (
                            <Link
                                key={app.id}
                                href={`/guides/apps/${app.slug}/`}
                                className="group bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full hover:border-blue-100"
                            >
                                <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-blue-100">
                                    {(() => {
                                        const Icon = IconMap[app.icon];
                                        return <Icon className="w-8 h-8 text-[#2B7CD3]" />;
                                    })()}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2B7CD3] transition-colors">
                                    {app.name}
                                </h3>

                                <p className="text-gray-500 text-[15px] font-medium leading-relaxed mb-6 flex-grow">
                                    {app.description}
                                </p>

                                <div className="flex items-center gap-2 text-[#2B7CD3] font-bold text-sm">
                                    View Guide
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Steps / Callout */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-white rounded-[40px] p-10 md:p-16 border border-gray-100 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center font-headline">Quick Start Checklist</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2B7CD3] font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Create a Playlist</h4>
                                        <p className="text-sm text-gray-500 font-medium">Head to the <Link href="/playlists" className="text-[#2B7CD3] hover:underline">Playlists section</Link> to start building your content loop.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2B7CD3] font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Add Your First App</h4>
                                        <p className="text-sm text-gray-500 font-medium">Inside any playlist, click the 'Apps' tab and choose from our library of 50+ integrations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2B7CD3] font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Configure Settings</h4>
                                        <p className="text-sm text-gray-500 font-medium">Enter your URLs or connect accounts to pull live data into your signage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2B7CD3] font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Publish to Screens</h4>
                                        <p className="text-sm text-gray-500 font-medium">Go to <Link href="/screens" className="text-[#2B7CD3] hover:underline">Screens</Link> to assign your playlist to your hardware.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-[#0b1220] text-white">
                <div className="max-w-[1100px] mx-auto px-6 text-center">
                    <h2 className="font-headline text-3xl font-bold mb-6">Ready to bring your screens to life?</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                        Experience the power of live automation with DigitalSigns.ai.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild className="bg-[#2B7CD3] hover:bg-[#2366b1] text-white font-black h-12 px-10 rounded-full transition-all text-base">
                            <Link href="https://hub.digitalsigns.ai/">Sign in to DShub</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
