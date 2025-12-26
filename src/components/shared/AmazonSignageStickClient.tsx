'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
    ChevronRight,
    Check,
    Zap,
    Shield,
    Cloud,
    Maximize,
    Tv,
    ArrowRight,
    Info,
    Utensils,
    ShoppingBag,
    GraduationCap,
    Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function AmazonSignageStickClient() {
    const amazonLink = "https://www.amazon.com/dp/B0D4FCG9MX/ref=pmkt_cmsdigital_web";

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-white">
                <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-[#2B7CD3] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">Amazon Signage Stick</span>
                        </div>

                        <div className="inline-block px-3 py-1 bg-[#FDF6D6] text-[#A67D28] text-[10px] font-bold tracking-tighter uppercase rounded-md mb-8">
                            Amazon Signage Stick with DShub CMS
                        </div>

                        <p className="font-headline text-[13px] font-bold text-gray-400 mb-4 tracking-[0.15em] uppercase">
                            PURPOSE-BUILT DIGITAL SIGNAGE — NOT STREAMING TV
                        </p>

                        <h1 className="font-headline text-5xl md:text-[64px] font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                            One stick, unlimited digital <br className="hidden md:block" /> signage potential.
                        </h1>

                        <p className="text-lg text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            DigitalSigns.ai is available on the Amazon Signage Stick, a compact media player designed specifically for digital signage. Plug it into any compatible display, pair it with DigitalSigns.ai, and manage menus, promos, and announcements from the cloud.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold h-10 px-8 rounded-full transition-all text-xs">
                                <a href={amazonLink} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
                            </Button>
                            <Button asChild size="lg" className="bg-[#0b1220] hover:bg-[#1a2536] text-white font-bold h-10 px-8 rounded-full transition-all text-xs">
                                <Link href="/how-to-setup-amazon-signage-stick">View Setup Steps</Link>
                            </Button>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed max-w-[500px] mb-8">
                            Unlike consumer streaming devices, the Amazon Signage Stick is optimized for <span className="font-bold text-gray-600">reliable, long-duration playback</span> of your business content. When paired with DigitalSigns.ai, it becomes a simple, scalable way to manage screens across one or many locations.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Plug and play in about 5 minutes",
                                "Designed for 24/7 signage use",
                                "Cloud management with DigitalSigns.ai"
                            ].map((text, i) => (
                                <div key={i} className="px-4 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-500">
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative pt-8 lg:pt-0">
                        <div className="relative rounded-[40px] bg-[#F1EFEC] p-10 shadow-sm border border-gray-100">
                            <div className="relative rounded-[20px] overflow-hidden bg-white aspect-[4/3] shadow-xl">
                                <Image
                                    src="/images/amazon/Amazon_signage_DShub.png"
                                    alt="Amazon Signage Stick connected to a TV running DigitalSigns.ai menus"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-xs font-bold text-gray-900 mb-1">Create, manage, and publish content instantly</p>
                                <p className="text-[10px] text-gray-500 font-medium">— DShub now on Amazon Signage Stick</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Row */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Instant setup", desc: "Connect via HDMI, join Wi-Fi, and start publishing from DigitalSigns.ai." },
                            { title: "Built for signage", desc: "Purpose-built for business content and reliable playback — not consumer streaming apps." },
                            { title: "Cloud control", desc: "Update menus, pricing, and playlists from anywhere using DigitalSigns.ai." },
                            { title: "Scales with you", desc: "Roll out to one or many locations with centralized management." }
                        ].map((item, i) => (
                            <div key={i} className="p-4">
                                <h3 className="font-bold text-gray-900 text-[15px] mb-2">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                What is the Amazon Signage Stick?
                            </h2>
                            <div className="space-y-6 text-[15px] text-gray-500 leading-relaxed font-medium">
                                <p>
                                    The Amazon Signage Stick is a compact, affordable media player created specifically for digital signage. Designed to focus on signage, not entertainment, it helps businesses keep content on-screen and on-brand throughout the day.
                                </p>
                                <p>
                                    When paired with DigitalSigns.ai, the Signage Stick becomes a simple, cloud-connected player for restaurants, cafés, retail, schools, and internal communications screens. Add your content in DigitalSigns.ai, assign it to a playlist, and publish it to any paired stick.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-headline text-sm font-bold text-gray-900 uppercase tracking-widest mb-8">Why it’s different from consumer devices</h3>
                            <ul className="space-y-5">
                                {[
                                    "Purpose-built for signage, not home streaming.",
                                    "Helps avoid interruptions caused by consumer streaming apps or remote usage.",
                                    "Connects directly to commercial and consumer displays via HDMI.",
                                    "Designed for long-duration playback and remote management."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-[14px] text-gray-600 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Amazon Signage Stick vs. Amazon Fire TV Stick (High Level)
                    </h2>
                    <p className="text-sm text-gray-500 mb-12 max-w-3xl">
                        Both products come from Amazon, but they’re built for different use cases. Fire TV Stick is designed for home entertainment; the Amazon Signage Stick is designed specifically for digital signage scenarios.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px] border-collapse bg-[#FFF9ED] rounded-xl overflow-hidden shadow-sm">
                            <thead>
                                <tr className="border-b border-white/50">
                                    <th className="py-5 px-8 text-left text-[14px] font-bold text-gray-900 uppercase tracking-wider w-1/4">Aspect</th>
                                    <th className="py-5 px-8 text-left text-[14px] font-bold text-gray-900 uppercase tracking-wider w-1/3">Amazon Signage Stick</th>
                                    <th className="py-5 px-8 text-left text-[14px] font-bold text-gray-900 uppercase tracking-wider">Amazon Fire TV Stick</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/50">
                                {[
                                    { aspect: "Primary use", s: <><span className="text-[#2B7CD3]">✓</span> Business digital signage</>, f: "Home and personal entertainment" },
                                    { aspect: "Focus", s: "Long-duration playback of business content.", f: "Streaming apps, TV shows, and movies." },
                                    { aspect: "Ideal scenarios", s: "Menus, promos, announcements, information screens.", f: "Home viewing and consumer streaming." },
                                    { aspect: "How we recommend using DigitalSigns.ai", s: "Recommended for long-term, dedicated signage installations with business-first behavior.", f: "Can be used for testing or simple signage setups where entertainment features are still in use." }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/40 transition-colors">
                                        <td className="py-6 px-8 font-bold text-gray-900 text-[13px]">{row.aspect}</td>
                                        <td className="py-6 px-8 text-[13px] text-gray-600 font-medium">{row.s}</td>
                                        <td className="py-6 px-8 text-[13px] text-gray-400 font-medium">{row.f}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8">
                        <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:underline">
                            For a deeper breakdown, see our full comparison: Amazon Signage Stick vs Fire TV Stick – Detailed Comparison →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section id="setup" className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                        Set up Amazon Signage Stick with DigitalSigns.ai in 3 steps
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                step: 1,
                                title: "1. Plug in & connect",
                                desc: "Connect the Amazon Signage Stick to your display via HDMI, power it on, and join your network. Use the Amazon Signage mobile app to quickly discover and organize sticks across locations."
                            },
                            {
                                step: 2,
                                title: "2. Complete setup in the Amazon Signage app",
                                desc: "From the Amazon Signage app, name your devices, group them by location, and confirm they’re online. This gives you a clear view of every screen in your network."
                            },
                            {
                                step: 3,
                                title: "3. Pair with DigitalSigns.ai & publish",
                                desc: "In DigitalSigns.ai, add a new screen, enter the pairing details, and assign playlists or schedules. Your menus, promotions, and messages will publish instantly to the Amazon Signage Stick."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[32px] border border-[#FDF6D6] bg-[#FFFEF9] relative shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-[#FF9900] flex items-center justify-center text-white font-black text-xs absolute -top-5 left-8 shadow-md">
                                    {item.step}
                                </div>
                                <h3 className="font-headline text-[15px] font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Where Amazon Signage Stick + DigitalSigns.ai works best
                    </h2>
                    <p className="text-sm text-gray-500 mb-12">
                        A flexible combination for both customer-facing and internal communication screens.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Restaurants & cafés", desc: "Digital menu boards, daily specials, upsell combos and promos." },
                            { title: "Retail & convenience", desc: "Shelf talkers, in-store offers, product highlights, and seasonal campaigns." },
                            { title: "Schools & campuses", desc: "Announcements, events, bell schedules, and wayfinding." },
                            { title: "Offices & operations", desc: "Dashboards, KPIs, shift information, and internal notices." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 text-[15px] mb-3">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1000px] mx-auto px-6">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                        Frequently Asked Questions
                    </h2>

                    <Accordion type="single" collapsible className="space-y-4">
                        {[
                            {
                                q: "Do I need the Amazon Signage Stick to use DigitalSigns.ai?",
                                a: "DigitalSigns.ai works with multiple player options, including browser-based players and other hardware. The Amazon Signage Stick is recommended when you want a dedicated, purpose-built device for signage use."
                            },
                            {
                                q: "Can I start with a Fire TV Stick and later move to the Amazon Signage Stick?",
                                a: "We recommend beginning with the Amazon Signage Stick to optimize signage impact and prepare for scale, but customers that have started their journey with the Fire TV Stick can easily upgrade and migrate to this professional media player. Your content, playlists, and schedules remain in DigitalSigns.ai – you simply pair new devices."
                            },
                            {
                                q: "How many Amazon Signage Sticks can I manage with DigitalSigns.ai?",
                                a: "DigitalSigns.ai is designed to scale from a single screen to many locations. You can manage multiple sticks across restaurants, stores, or offices from one cloud dashboard, depending on your plan limits."
                            },
                            {
                                q: "Where do I buy the Amazon Signage Stick?",
                                a: "You can purchase the Amazon Signage Stick directly from Amazon using the link above. Once it arrives, follow the setup steps on this page and in the Amazon Signage documentation."
                            }
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-white border-b border-gray-100 last:border-0 overflow-hidden">
                                <AccordionTrigger className="font-bold text-[15px] hover:no-underline py-6 text-gray-900 text-left">
                                    <div className="flex items-center gap-4">
                                        <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200" />
                                        {item.q}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-500 text-[14px] leading-relaxed pb-6 pl-8">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#FCFBF8] border-t border-gray-50">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="bg-[#0b1220] rounded-[48px] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl overflow-hidden relative">
                        <div className="flex-1 relative z-10 text-center md:text-left">
                            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Ready to pair DigitalSigns.ai with Amazon Signage Stick?
                            </h2>
                            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                                Use the Amazon Signage Stick as your dedicated, purpose-built player and control every screen from the DigitalSigns.ai dashboard. Start with a single display and grow to multiple locations without changing your content workflow.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-black h-14 px-8 rounded-full shadow-lg transition-all">
                                    <a href={amazonLink} target="_blank" rel="noopener noreferrer">Buy Amazon Signage Stick</a>
                                </Button>
                                <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 font-bold h-14 px-8 rounded-full border border-white/20 transition-all">
                                    <a href="https://hub.digitalsigns.ai/">Sign in to DShub</a>
                                </Button>
                            </div>
                        </div>

                        <div className="w-full md:w-[450px] relative z-10 shrink-0">
                            <div className="relative rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-2xl group">
                                <div className="relative aspect-video rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/amazon/Banner1.png"
                                        alt="Multiple Amazon Signage Sticks managed by DigitalSigns.ai CMS"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">Play - Connect - Publish</p>
                                    <p className="text-xs font-bold text-white">www.digitalsigns.ai</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative circle */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
                    </div>
                </div>
            </section>
        </div>
    );
}
