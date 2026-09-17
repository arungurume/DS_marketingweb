'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    ChevronRight,
    ExternalLink,
    HelpCircle,
    Info,
    Monitor,
    BookOpen,
    ArrowRight
} from 'lucide-react';
import { AppGuide, appGuides } from '@/data/app-guides.data';
import { SITE_URL } from '@/lib/constants';

interface AppGuideClientProps {
    app: AppGuide;
}

export function AppGuideClient({ app }: AppGuideClientProps) {
    const steps = [
        {
            title: "1. Open Playlists",
            name: "Open Playlists",
            desc: "Go to Playlists and create a new playlist or open an existing one.",
            imageHint: "Playlist list / Create Playlist button"
        },
        {
            title: "2. Open the Apps Tab",
            name: "Open the Apps Tab",
            desc: "Inside the playlist editor, switch to the Apps tab.",
            imageHint: "Apps tab highlighted"
        },
        {
            title: "3. Add " + app.name,
            name: "Add " + app.name,
            desc: "Find " + app.name + " in the list and click the + button.",
            imageHint: "App list with + button"
        },
        {
            title: "4. Configure Settings",
            name: "Configure Settings",
            desc: "Enter the required details and adjust display options, then click Save.",
            imageHint: "App settings form + preview"
        },
        {
            title: "5. Save the Playlist",
            name: "Save the Playlist",
            desc: "Save the playlist to confirm the app is added.",
            imageHint: "Save playlist action"
        },
        {
            title: "6. Assign Playlist to Screens",
            name: "Assign Playlist to Screens",
            desc: "Go to Screens and assign this playlist to the desired screen, then save.",
            imageHint: "Screen assignment / playlist selection"
        }
    ];

    // JSON-LD HowTo Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to display ${app.name} on Digital Signage`,
        description: app.intro,
        image: `${SITE_URL}/images/guides/apps/${app.slug}.jpg`, // Placeholder for actual image
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            itemListElement: [{
                '@type': 'HowToDirection',
                text: step.desc
            }]
        })),
        totalTime: 'PT5M',
        supply: [{
            '@type': 'HowToSupply',
            name: 'DigitalSigns.ai Account'
        }, {
            '@type': 'HowToSupply',
            name: 'A paired screen'
        }]
    };

    const lastUpdated = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date());

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            {/* JSON-LD for Google Search Riche Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className="py-16 bg-white">
                <div className="max-w-[1000px] mx-auto px-6">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                        <Link href="/" className="hover:text-[#2B7CD3] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <Link href="/guides/apps" className="hover:text-[#2B7CD3] transition-colors">Apps</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <span className="text-[#2B7CD3]">{app.name}</span>
                    </div>

                    <h1 className="font-headline text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        How to use {app.name} for Digital Signage
                    </h1>

                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
                        Last updated: {lastUpdated}
                    </p>

                    <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mb-10">
                        {app.intro}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <Button asChild className="bg-[#2B7CD3] hover:bg-[#2366b1] text-white font-bold h-12 px-8 rounded-full transition-all text-base shadow-lg hover:shadow-xl">
                            <Link href="https://hub.digitalsigns.ai/">Get Started for Free</Link>
                        </Button>
                        <Button variant="outline" asChild className="border-gray-200 hover:bg-gray-100 text-gray-900 font-bold h-12 px-8 rounded-full transition-all text-base">
                            <Link href="#step-1">View Instructions</Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
                        {/* Tips & Best Practices */}
                        <div className="bg-gray-50 rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
                            <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                                <Info className="w-5 h-5 text-blue-500" />
                                Tips & Best Practices
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    `Ensure your ${app.name} content is set to public or shared correctly.`,
                                    "Test the app in the DShub previewer before publishing.",
                                    "Keep display durations long enough for viewers to read the content.",
                                    "Mix apps with static content for a more engaging playlist loop."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* In This Guide (TOC) */}
                        <div className="bg-[#FFF9ED] rounded-[32px] p-8 md:p-10 border border-[#FDF6D6] shadow-sm">
                            <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-[#A67D28]" />
                                In This Guide
                            </h2>
                            <ul className="space-y-3">
                                {steps.map((step, i) => (
                                    <li key={i}>
                                        <a href={`#step-${i + 1}`} className="text-[14px] font-bold text-[#A67D28] hover:underline flex items-start gap-2">
                                            <span className="shrink-0">{i + 1}.</span>
                                            {step.title.split('. ')[1]}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a href="#troubleshooting" className="text-[14px] font-bold text-[#A67D28] hover:underline flex items-start gap-2">
                                        <span className="shrink-0">7.</span>
                                        Troubleshooting
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="pb-24 bg-white">
                <div className="max-w-[1000px] mx-auto px-6 space-y-20">
                    <h2 className="font-headline text-3xl font-bold text-gray-900 mb-4">Step-by-Step: Adding {app.name} to Your Playlist</h2>
                    {steps.map((step, i) => (
                        <div key={i} id={`step-${i + 1}`} className="scroll-mt-24 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#2B7CD3] flex items-center justify-center text-white font-black text-sm shadow-md">
                                    {i + 1}
                                </div>
                                <h2 className="font-headline text-2xl font-bold text-gray-900">{step.title.split('. ')[1]}</h2>
                            </div>

                            <div className="bg-white rounded-[40px] border border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
                                    <div>
                                        <p className="text-[17px] text-gray-600 leading-relaxed font-medium mb-8">
                                            {step.desc}
                                        </p>

                                        {i === 0 && (
                                            <div className="p-4 bg-blue-50/50 rounded-2xl border-l-4 border-blue-500 text-sm text-gray-500 font-medium my-6">
                                                <span className="font-bold text-gray-900 block mb-1">Tip:</span>
                                                Named your playlists descriptively (e.g., "Lobby Welcome" or "Kitchen Menu") to find them easily later.
                                            </div>
                                        )}

                                        {i === 5 && (
                                            <div className="flex gap-4 mb-8">
                                                <Button asChild className="bg-[#2B7CD3] hover:bg-[#2366b1] text-white font-bold h-10 px-6 rounded-full text-xs transition-all">
                                                    <Link href="https://hub.digitalsigns.ai/screens">Go to Screens</Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative aspect-video bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group-hover:border-blue-100 transition-colors">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 p-8 text-center">
                                            <Monitor className="w-12 h-12 mb-4 opacity-20" />
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Screenshot Placeholder</p>
                                            <p className="text-xs font-bold text-gray-500 mt-2">{step.imageHint}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Troubleshooting & Related */}
            <section id="troubleshooting" className="py-24 bg-[#F1F7FE] border-t border-blue-50">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="bg-white rounded-[48px] p-10 md:p-16 border border-blue-100 shadow-sm">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-[#2B7CD3]" />
                            Troubleshooting
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <ul className="space-y-6">
                                {[
                                    { title: "Content Not Loading", desc: "Check if the URL provided is correct and accessible publicly." },
                                    { title: "Display Layout", desc: "Adjust the display settings in the app configuration if the content looks cut off." }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <h3 className="font-bold text-gray-900 text-[15px] mb-2">{item.title}</h3>
                                        <p className="text-[14px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-6">
                                {[
                                    { title: "Refresh Frequency", desc: "Apps sync periodically. If changes aren't showing, try saving the playlist again." },
                                    { title: "Support", desc: "If you have specific issues with this integration, please contact our support team." }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <h3 className="font-bold text-gray-900 text-[15px] mb-2">{item.title}</h3>
                                        <p className="text-[14px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Footer CTA */}
            <section className="py-24 bg-[#0b1220] text-white">
                <div className="max-w-[1000px] mx-auto px-6 text-center">
                    <h2 className="font-headline text-3xl font-bold mb-6">Start Building Your Playlist</h2>
                    <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
                        Ready to add {app.name} to your screens? Log in to DShub and get started in seconds.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild className="bg-[#2B7CD3] hover:bg-[#2366b1] text-white font-black h-14 px-10 rounded-full transition-all text-base shadow-lg shadow-blue-500/10">
                            <Link href="https://hub.digitalsigns.ai/">Create a Playlist</Link>
                        </Button>
                        <Button asChild className="bg-transparent hover:bg-white/10 border-2 border-white/20 text-white font-black h-14 px-10 rounded-full transition-all text-base">
                            <Link href="https://hub.digitalsigns.ai/screens">Go to Screens</Link>
                        </Button>
                    </div>

                    <div className="mt-16 pt-16 border-t border-gray-800/50">
                        <p className="text-sm font-bold text-gray-500 mb-8 uppercase tracking-widest">Related App Guides</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {appGuides.filter(a => a.id !== app.id).slice(0, 4).map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/guides/apps/${related.slug}/`}
                                    className="px-6 py-3 rounded-2xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700 transition-all text-sm font-bold text-gray-300 flex items-center gap-2 group"
                                >
                                    {related.name} Guide
                                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
