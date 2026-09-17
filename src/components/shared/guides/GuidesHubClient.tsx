'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    ChevronRight,
    PlayCircle,
    Monitor,
    Layers,
    Puzzle,
    Calendar,
    Settings,
    Users,
    ArrowRight,
    Search,
    BookOpen
} from 'lucide-react';

const categories = [
    {
        title: "Getting Started",
        desc: "Start here to get your first screen live.",
        icon: PlayCircle,
        links: [
            { title: "Add & Pair a Screen", desc: "Register a new screen and pair it using a pairing code.", href: "/guides/pair-screen" },
            { title: "Assign Content to a Screen", desc: "Display images, videos, playlists, or apps on your screen.", href: "/guides/assign-content" }
        ]
    },
    {
        title: "Playlists & Content",
        desc: "Manage your content loops and media library.",
        icon: Layers,
        links: [
            { title: "Create a Playlist", desc: "Build a sequence of content to play on your screens.", href: "/guides/create-playlist" },
            { title: "Edit a Playlist", desc: "Modify items, durations, and transitions in your playlists.", href: "/guides/edit-playlist" },
            { title: "Playlist Settings", desc: "Configure aspect ratios, background colors, and timing.", href: "/guides/playlist-settings" },
            { title: "Upload Content", desc: "Add images and videos to your media library.", href: "/guides/upload-content" }
        ]
    },
    {
        title: "Apps & Integrations",
        desc: "Add live and dynamic apps directly to your playlists.",
        icon: Puzzle,
        links: [
            { title: "Apps Overview", desc: "Learn how dynamic apps work in DShub.", href: "/guides/apps" },
            { title: "Add YouTube to a Playlist", desc: "Stream videos and live broadcasts.", href: "/guides/apps/youtube" },
            { title: "Add Google Calendar", desc: "Display live event schedules.", href: "/guides/apps/google-calendar" },
            { title: "Add Google Sheets", desc: "Show live tables and price lists.", href: "/guides/apps/google-sheets" }
        ],
        footerLink: { label: "Browse all App Guides", href: "/guides/apps" }
    },
    {
        title: "Schedules",
        desc: "Automate your content by time and day.",
        icon: Calendar,
        links: [
            { title: "Create a Schedule", desc: "Set specific times for your content to play.", href: "/guides/create-schedule" },
            { title: "Assign a Schedule", desc: "Link a schedule to your paired screens.", href: "/guides/assign-schedule" },
            { title: "Edit or Disable", desc: "Manage existing schedule rules.", href: "/guides/manage-schedules" }
        ]
    },
    {
        title: "Screen Management",
        desc: "Monitor and configure your display hardware.",
        icon: Monitor,
        links: [
            { title: "Edit Screen Settings", desc: "Change screen names, orientations, and volumes.", href: "/guides/screen-settings" },
            { title: "Delete a Screen", desc: "Unpair and remove devices from your account.", href: "/guides/delete-screen" },
            { title: "Status & Troubleshooting", desc: "Understand online/offline status and health.", href: "/guides/screen-troubleshooting" }
        ]
    },
    {
        title: "Locations & Users",
        desc: "Manage organization structure and team access.",
        icon: Users,
        links: [
            { title: "Manage Locations", desc: "Group screens by physical venue or department.", href: "/guides/manage-locations" },
            { title: "Invite a User", desc: "Add team members to your organization.", href: "/guides/invite-user" },
            { title: "Roles & Permissions", desc: "Control what team members can view and edit.", href: "/guides/user-roles" }
        ]
    }
];

const workflows = [
    { title: "Display Google Calendar on a TV", href: "/guides/apps/google-calendar" },
    { title: "Show Google Sheets with live updates", href: "/guides/apps/google-sheets" },
    { title: "Run announcements on multiple screens", href: "/guides/announcements" },
    { title: "Schedule playlists by time of day", href: "/guides/create-schedule" },
    { title: "Manage screens across multiple locations", href: "/guides/manage-locations" }
];

export function GuidesHubClient() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            {/* Hero Section */}
            <section className="pt-16 pb-12 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                        <Link href="/" className="hover:text-[#2B7CD3] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <span className="text-[#2B7CD3]">Guides</span>
                    </div>

                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Guides & Help Center
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-3xl font-medium">
                        Learn how to set up screens, create playlists, add apps, and manage your digital signage network using DigitalSigns.ai. Follow these step-by-step guides to get content live quickly and manage it with confidence.
                    </p>
                </div>
            </section>

            {/* Main Categories Grid */}
            <section className="py-12 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-white rounded-[40px] border border-gray-100 p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                        <cat.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
                                        <p className="text-sm text-gray-500 font-medium">{cat.desc}</p>
                                    </div>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    {cat.links.map((link, j) => (
                                        <Link key={j} href={link.href} className="group block">
                                            <h3 className="font-bold text-gray-900 group-hover:text-[#2B7CD3] transition-colors flex items-center gap-2">
                                                {link.title}
                                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                            </h3>
                                            <p className="text-[14px] text-gray-500 font-medium leading-relaxed mt-1">
                                                {link.desc}
                                            </p>
                                        </Link>
                                    ))}
                                </div>

                                {cat.footerLink && (
                                    <div className="mt-8 pt-8 border-t border-gray-50">
                                        <Link href={cat.footerLink.href} className="text-[#2B7CD3] font-bold text-sm hover:underline flex items-center gap-1 group">
                                            {cat.footerLink.label}
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Workflows Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-white rounded-[48px] p-10 md:p-16 border border-gray-100 shadow-sm">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-[#2B7CD3]" />
                            Common Workflows
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            {workflows.map((flow, i) => (
                                <Link key={i} href={flow.href} className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                    <span className="text-[17px] text-gray-600 font-bold group-hover:text-[#2B7CD3] transition-colors">{flow.title}</span>
                                    <ArrowRight className="w-4 h-4 text-blue-500 ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Callout - Amazon Setup Style */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-[#FFF9ED] rounded-[48px] p-10 md:p-16 border border-[#FDF6D6] shadow-xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-headline">New to DigitalSigns.ai?</h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto font-medium">
                            The best way to learn is by doing. Start by pairing your first screen and creating a playlist to see your content live.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild className="bg-[#2B7CD3] hover:bg-[#2366b1] text-white font-black h-14 px-10 rounded-full transition-all text-base shadow-lg shadow-blue-500/10">
                                <Link href="/guides/pair-screen">Add & Pair a Screen</Link>
                            </Button>
                            <Button variant="outline" asChild className="border-gray-200 hover:bg-white bg-white/50 text-gray-900 font-black h-14 px-10 rounded-full transition-all text-base">
                                <Link href="/guides/apps">Browse App Guides</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Footer CTA */}
            <section className="py-24 bg-[#0b1220] text-white">
                <div className="max-w-[1100px] mx-auto px-6 text-center">
                    <h2 className="font-headline text-3xl font-bold mb-6">Need more help?</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                        Our support team is available to help you with any technical questions or custom setup requirements.
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
