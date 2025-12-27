'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Leaf, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function DispensariesPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-100">

            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Solutions", "item": "https://digitalsigns.ai/solutions" },
                            { "@type": "ListItem", "position": 2, "name": "Cannabis", "item": "https://digitalsigns.ai/solutions/cannabis" },
                            { "@type": "ListItem", "position": 3, "name": "Cannabis Dispensaries", "item": "https://digitalsigns.ai/solutions/cannabis/dispensaries" }
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
                                "name": "How is digital signage used in dispensaries?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Dispensaries use digital signage for real-time menu boards synced with inventory (like Dutchie), educational content about strains and terpenes, promotional graphics for daily deals, and integrated order status displays." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I sync my menu with Dutchie or LeafLogix?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform integrates directly with major cannabis POS and inventory systems like Dutchie and LeafLogix to ensure your digital menus are always 100% accurate and never show out-of-stock items." }
                            },
                            {
                                "@type": "Question",
                                "name": "Does it help with compliance?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can display necessary state warnings, lab testing results (COAs), and dosage instructions centrally across all screens to ensure your dispensary remains fully compliant with local regulations." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-emerald-50/30">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-emerald-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/cannabis" className="hover:text-emerald-700 transition-colors">Cannabis</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-emerald-700">Dispensaries</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-emerald-200 rounded-full text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-4 bg-emerald-50">
                            CANNABIS INDUSTRY
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            High-Conversion <br /> Dispensary Signage
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize your retail floor with <strong>real-time Dutchie-synced menus</strong>, terpene education screens, and <strong>order queue status boards</strong>. Boost sales by up to 30% through dynamic product promotions and a premium digital atmosphere.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-emerald-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-700">
                                    <Layout className="w-4 h-4" />
                                </span>
                                POS-Synced Menus
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-700">
                                    <ShoppingBag className="w-4 h-4" />
                                </span>
                                Order Queues
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-700">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Compliance Ready
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: Recreational Shops</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: Medical Dispensaries</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-emerald-200 transition-colors">Best for: Multi-State Operators</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1628174744436-1f7c525f0967?q=80&w=2670&auto=format&fit=crop"
                                    alt="Modern cannabis dispensary interior with high-definition digital menu boards and product displays"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    Tip: Displaying educational content about terpenes alongside product listings can increase premium strain sales by up to 25%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why retailers choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Combine high-level operational efficiency with a premium, engaging retail experience.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-emerald-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">100% Menu Accuracy</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Direct POS sync means when you sell out of a SKU in your vault, it instantly disappears from your public digital menus.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-emerald-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Automated Compliance</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Centrally manage mandatory state warnings and lab test results to ensure every screen across every location is fully compliant.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-emerald-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Seamless Customer Flow</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Reduce perceived wait times and improve floor management with integrated, real-time order status and queue boards.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In the fast-moving cannabis market, <strong>dispensary digital signage</strong> is more than just "decor"—it's a critical bridge between your inventory, your budtenders, and your customers.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Dispensary Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every square foot of your shop to improve efficiency, trust, and sales.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "POS-Synced Menu Boards", desc: "Automated screens showing real-time inventory, pricing, and potency from Dutchie or LeafLogix." },
                            { title: "Terpene & Education Loops", desc: "Help customers understand the difference between Indicas, Sativas, and various terpene profiles." },
                            { title: "Real-Time Order Queues", desc: "Display 'Orders Preparing' and 'Orders Ready' status to keep your lobby organized and calm." },
                            { title: "Daily Deal & Promo Walls", desc: "High-impact graphics featuring BOGO deals, happy hour specials, and new brand launches." },
                            { title: "Budtender Choice Feature", desc: "Digital 'Staff Picks' highlighting favorite strains and products with budtender bios." },
                            { title: "Social Media & Community Feed", desc: "Display your shop's Instagram feed to build brand trust and show off your community engagement." },
                            { title: "In-Store Online Ordering QR", desc: "Screens featuring large QR codes that allow customers to skip the line and order on their phones while in-store." },
                            { title: "Mandatory State Warnings", desc: "Dedicated screen zones that ensure legal disclosures and warnings are always visible as required by law." },
                            { title: "Product Lab Result (COA) Boards", desc: "Build trust by displaying live lab results for your currently featured top-shelf flower." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-emerald-50 rounded-[18px] bg-white">
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Dispensary-Grade Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Robust, compliant, and data-driven tools built for the world's most mission-critical retail environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Native POS Integrations", desc: "Built-in connectors for Dutchie, LeafLogix, Cova, and Treez for instant menu updates." },
                            { title: "Secure Compliance Engine", desc: "Centrally manage and audit state-mandated legal disclosures across all locations." },
                            { title: "Enterprise Fleet Management", desc: "Monitor the 'Healthy' status of 1 or 1,000 screens across multiple states from one master dashboard." },
                            { title: "Smart Scheduling & Logic", desc: "Automatically change menus for Medical vs. Recreational hours, or surface 'Weekend Deals' on Fridays." },
                            { title: "Premium Cannabis Templates", desc: "Access 100+ professionally designed templates for edibles, flower, concentrates, and more." },
                            { title: "Off-Line Playback Mode", desc: "If your internet goes down, your menus keep running. Never let a network blip stop your shop floor." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=cannabis" className="text-emerald-700 font-extrabold hover:underline">Cannabis Templates</Link>,
                        learn about <Link href="/integrations" className="text-emerald-700 font-extrabold hover:underline">POS Integrations</Link>,
                        or see our <Link href="/pricing" className="text-emerald-700 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for dispensary owners and multi-state operators (MSOs).</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in dispensaries?</AccordionTrigger>
                                <AccordionContent>
                                    Dispensaries use digital signage for real-time menu boards synced with inventory (like Dutchie), educational content about strains and terpenes, promotional graphics for daily deals, and integrated order status displays.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I sync my menu with Dutchie or LeafLogix?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform integrates directly with major cannabis POS and inventory systems like Dutchie and LeafLogix to ensure your digital menus are always 100% accurate and never show out-of-stock items.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Does it help with compliance?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can display necessary state warnings, lab testing results (COAs), and dosage instructions centrally across all screens to ensure your dispensary remains fully compliant with local regulations.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I update all 10 locations at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can push a global promotion or state warning to every screen in your entire dispensary network in seconds, or target specific locations for local events or inventory clear-outs.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-emerald-50">Ready to level up your dispensary experience?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our cannabis experts about setting up a high-conversion, POS-integrated signage network for your shop today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/cannabis">Back to Cannabis</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
