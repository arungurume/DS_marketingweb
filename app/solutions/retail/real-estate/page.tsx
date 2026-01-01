'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Home, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, MapPin } from 'lucide-react';

export default function RealEstatePage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Retail & Commerce", "item": "https://digitalsigns.ai/solutions/retail" },
                            { "@type": "ListItem", "position": 3, "name": "Real Estate", "item": "https://digitalsigns.ai/solutions/retail/real-estate" }
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
                                "name": "How does digital signage help real estate agents?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Digital signage helps real estate agents showcase properties 24/7 with high-brightness window displays, virtual tours, and interactive office screens. It builds agent branding and captures leads even when the office is closed." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I automate property listing updates?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can sync with your CRM or property feed (e.g., MLS) to automatically update listings, pricing, and 'Under Contract' or 'Sold' status in real-time." }
                            },
                            {
                                "@type": "Question",
                                "name": "What are high-brightness window displays?",
                                "acceptedAnswer": { "@type": "Answer", "text": "These are specialized screens designed to be visible even in direct sunlight. They are perfect for storefront windows where standard TVs would be washed out by glare." }
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
                            <Link href="/solutions/retail" className="hover:text-[#2B7CD3] transition-colors">Retail & Commerce</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">Real Estate</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            RETAIL & COMMERCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br /> Real Estate
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Transform your agency storefront with 24/7 <strong>high-brightness window listings</strong>, immersive virtual tours, and dynamic agent branding. Capture more leads, showcase premium properties, and modernize your office environment with cloud-managed signage.
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
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Monitor className="w-4 h-4" />
                                </span>
                                24/7 Window Showroom
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Zap className="w-4 h-4" />
                                </span>
                                Automated Listing Sync
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Target className="w-4 h-4" />
                                </span>
                                Virtual Tours
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Residential Agencies</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: Commercial Brokerages</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-blue-200 transition-colors">Best for: High-Ston Street Windows</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop"
                                    alt="Real estate office window with digital signage screens"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2B7CD3]" />
                                    Tip: High-brightness screens ensure your property listings are visible even on the sunniest days.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why agents choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Enhance your professional image and keep your listings up-to-date without touching a single paper flyer.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">The 24/7 Salesperson</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Your window becomes an interactive showroom that works through the night, capturing leads when you're closed.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Automated Listing Sync</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Stop manually updating flyers. Sync with your property feed to show 'New Listing' or 'Sold' automatically.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Immersive Experience</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Build trust by showcasing drone footage, walk-through videos, and 3D architectural renders in high definition.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Common Real Estate Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">From window displays to office reception, digitize the real estate selling process.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Window Listing Loops", desc: "High-brightness displays showing your most exclusive properties to passers-by 24/7." },
                            { title: "Virtual Tour Kiosks", desc: "Touch-enabled screens in your office where clients can browse property walkthroughs." },
                            { title: "Agent Recognition Walls", desc: "Feature top-performing agents, their recent closings, and client testimonials." },
                            { title: "Commercial Property Specs", desc: "Detailed floor plans, zoning info, and high-res photos for commercial listings." },
                            { title: "Local Market Data", desc: "Display real-time neighborhood stats, school rankings, and recent area sales." },
                            { title: "Upcoming Open Houses", desc: "Automatically promote weekend open houses during the week to generate interest." },
                            { title: "New Development Renders", desc: "Immersive video and image loops for off-plan property sales and construction updates." },
                            { title: "QR Lead Capture", desc: "Include QR codes on every listing screen so clients can 'Take this listing home' on their phone." },
                            { title: "Social Media Property Buzz", desc: "Display your agency's latest property reels and community engagement posts." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Agency-Level Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Professional tools built to showcase properties with style and ease of management.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Dynamic Feed Integration", desc: "Connect to your MLS or custom property CRM to automate listing updates and pricing changes." },
                            { title: "High-Resolution Video Support", desc: "Play 4K drone footage and professional property walkthroughs with zero lag." },
                            { title: "Smart Scheduling", desc: "Feature luxury listings during evening foot traffic and family homes during the day automatically." },
                            { title: "Centralized Multisite Control", desc: "Manage property listings across multiple branch offices from one master agency account." },
                            { title: "Template Design Library", desc: "Access 100+ professional real estate templates for 'New Listing', 'Sold', and 'Open House'." },
                            { title: "Monitoring & Reporting", desc: "Ensure your window displays are always online and track how many leads interact with your QR codes." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=real-estate" className="text-[#2563eb] font-extrabold hover:underline">Real Estate Templates</Link>,
                        learn more about <Link href="/window-displays" className="text-[#2563eb] font-extrabold hover:underline">Window Displays</Link>,
                        or check out <Link href="/pricing" className="text-[#2563eb] font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Buyer questions for real estate agency and property signage.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How does digital signage help real estate agents?</AccordionTrigger>
                                <AccordionContent>
                                    Digital signage helps real estate agents showcase properties 24/7 with high-brightness window displays, virtual tours, and interactive office screens. It builds agent branding and captures leads even when the office is closed.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I automate property listing updates?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can sync with your CRM or property feed (e.g., MLS) to automatically update listings, pricing, and 'Under Contract' or 'Sold' status in real-time.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>What are high-brightness window displays?</AccordionTrigger>
                                <AccordionContent>
                                    These are specialized screens designed to be visible even in direct sunlight. They are perfect for storefront windows where standard TVs would be washed out by glare.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Do I need a designer for my listings?</AccordionTrigger>
                                <AccordionContent>
                                    No. Our drag-and-drop builder and pre-made real estate templates make it easy for anyone in your office to create professional property displays in minutes.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2">Ready to modernize your real estate agency?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about creating a 24/7 digital storefront for your listings today.
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
                                    <Link href="/solutions/retail">Back to Retail</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
