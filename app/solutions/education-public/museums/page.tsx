'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, GalleryVertical, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Palette, Ticket } from 'lucide-react';

export default function MuseumsPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">

            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Solutions", "item": "https://digitalsigns.ai/solutions" },
                            { "@type": "ListItem", "position": 2, "name": "Education & Public", "item": "https://digitalsigns.ai/solutions/education-public" },
                            { "@type": "ListItem", "position": 3, "name": "Museums", "item": "https://digitalsigns.ai/solutions/education-public/museums" }
                        ]
                    })
                }}
            />
            {/* JSON-LD for FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How is digital signage used in museums?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Museums use digital signage for exhibit descriptions, interactive storytelling, wayfinding in large galleries, ticketing information, and promoting gift shop items or upcoming special exhibitions." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show video or animated art?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform supports high-definition video, 4K resolution, and fluid animations, making it perfect for digital art installations and immersive exhibit experiences." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it support interactive touchscreens?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can create interactive kiosks that allow visitors to dive deeper into exhibit history, view high-res scans of artifacts, or browse museum collections on demand." }
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
                            <Link href="/solutions/education-public" className="hover:text-[#2B7CD3] transition-colors">Education & Public</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">Museums</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            EDUCATION & PUBLIC
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Immersive Experiences <br /> for Museums
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Bring history and art to life with <strong>high-definition exhibit screens</strong>, interactive storytelling kiosks, and <strong>seamless digital wayfinding</strong>. Create unforgettable visitor journeys and promote your museum's unique collections with premium digital displays.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-stone-50 flex items-center justify-center text-stone-700">
                                    <Palette className="w-4 h-4" />
                                </span>
                                Digital Art
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Zap className="w-4 h-4" />
                                </span>
                                Interactive Storytelling
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-amber-50 flex items-center justify-center text-amber-700">
                                    <Ticket className="w-4 h-4" />
                                </span>
                                Ticketing Info
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Art Galleries</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: History Museums</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Science Centers</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1518998053574-53ee753fe1d0?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern museum gallery with large digital art displays and interactive info kiosks"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-stone-500" />
                                    Tip: Immersive video walls in museum lobbies increase visitor engagement and social media sharing by over 50%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why curators choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Enhance exhibit education and improve visitor flow through high-quality, professional digital displays.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Frictionless Storytelling</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Deliver deep exhibit context through video, animation, and high-res imaging that static plaques simply can't match.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Dynamic Visitor Info</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly update show times, ticket availability, and special tour dates across all gallery screens.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Modern Aesthetic</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Align your museum's brand with modern technology using sleek, ultra-thin displays and professional digital content.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In an exhibition environment, <strong>museum digital signage</strong> is a tool for deeper engagement—providing layers of information that invite visitors to explore and learn more.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Museum & Gallery Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enrich every exhibit and touchpoint to create a truly world-class visitor experience.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Exhibit Introduction Walls", desc: "Large-scale video displays that set the mood and context for major exhibitions." },
                            { title: "Interactive Artifact Explorers", desc: "Touch-screen kiosks that allow visitors to rotate 3D scans of items or read full artifact histories." },
                            { title: "Wayfinding & Gallery Maps", desc: "Interactive digital maps helping visitors navigate large museum wings and find specific art pieces." },
                            { title: "Digital Ticketing Boards", desc: "Show real-time pricing, membership benefits, and remaining show times in the lobby." },
                            { title: "Gift Shop & Cafe Mini-Menus", desc: "Highlight seasonal gifts, member discounts, and special cafe treats near retail areas." },
                            { title: "Donation & Membership QR Codes", desc: "Include QR codes on screens throughout the museum to drive instant donations and membership signups." },
                            { title: "Immersive Video Art", desc: "Specialized high-res media players designed for fluid playback of complex digital art installations." },
                            { title: "Educational Clip Loops", desc: "Short video explainers nested within exhibits to provide additional expert commentary." },
                            { title: "Social Media Engagement Wall", desc: "Display visitor-shared photos from the museum's hashtag to build community and social proof." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Professional Features for Museums</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, high-definition, and easy-to-manage tools designed for premium museum environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "4K & High-Res Playback", desc: "Support for ultra-high definition video and images to match the quality of your art and artifacts." },
                            { title: "Immersive Sync Playback", desc: "Synchronize multiple screens to create stunning surround-view video experiences in gallery rooms." },
                            { title: "Interactive Touch Support", desc: "Native support for multi-touch kiosks and interactive exhibits with fast response times." },
                            { title: "Scheduled Content Loops", desc: "Automatically change museum info based on the time of day, special events, or member-only hours." },
                            { title: "Remote Exhibit Control", desc: "Manage every screen in every gallery from one central curatorial dashboard without leaving your office." },
                            { title: "Multi-Zone Display Support", desc: "Show art on one side and educational descriptions or QR codes on the other simultaneously." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=museum" className="text-[#2563eb] font-extrabold hover:underline">Museum Templates</Link>,
                        learn about <Link href="/interactive" className="text-[#2563eb] font-extrabold hover:underline">Interactive Solutions</Link>,
                        or see our <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for museum curators and facility operations teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in museums?</AccordionTrigger>
                                <AccordionContent>
                                    Museums use digital signage for exhibit descriptions, interactive storytelling, wayfinding in large galleries, ticketing information, and promoting gift shop items or upcoming special exhibitions.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show video or animated art?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform supports high-definition video, 4K resolution, and fluid animations, making it perfect for digital art installations and immersive exhibit experiences.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it support interactive touchscreens?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can create interactive kiosks that allow visitors to dive deeper into exhibit history, view high-res scans of artifacts, or browse museum collections on demand.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple gallery locations?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can manage every screen across multiple buildings or satellite galleries from one centralized dashboard, making global exhibit updates quick and easy.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-24 pt-12 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-[#0b1220] rounded-[26px] p-10 md:p-14 text-white">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-stone-50">Ready to elevate your visitor experience?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a high-definition, immersive signage network for your museum today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/education-public">Back to Public</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
