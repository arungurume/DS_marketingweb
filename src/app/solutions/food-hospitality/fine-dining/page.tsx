'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Wine, Calendar, Star, Monitor, ChefHat, Smartphone, Tag, MessageSquare, AlertCircle, ShoppingCart, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Users } from 'lucide-react';

export default function FineDiningPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-slate-100">

            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Solutions", "item": "https://digitalsigns.ai/solutions" },
                            { "@type": "ListItem", "position": 2, "name": "Food & Hospitality", "item": "https://digitalsigns.ai/solutions/food-hospitality" },
                            { "@type": "ListItem", "position": 3, "name": "Fine Dining", "item": "https://digitalsigns.ai/solutions/food-hospitality/fine-dining" }
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
                                "name": "What are the benefits of digital signage for fine dining restaurants?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Fine dining establishments use digital signage to enhance the guest experience with subtle, high-end displays. This includes interactive digital wine lists, lobby welcoming screens for VIP events, chef's table live-feeds, and elegant digital menu boards that can be updated instantly without the need for reprinted paper inserts." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I display digital wine lists on tablets?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer interactive tablet-based wine lists that allow guests to filter by vintage, region, grape profile, and price point, complete with sommelier tasting notes and inventory-synced availability." }
                            },
                            {
                                "@type": "Question",
                                "name": "How does digital signage improve private event management?",
                                "acceptedAnswer": { "@type": "Answer", "text": "For private events, you can customize lobby and room-entry screens with the event name, corporate logo, or personal photos of the hosts, creating a bespoke atmosphere that premium clients expect." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the software easy to use for restaurant managers?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our cloud CMS allows managers to update 'Chef's Specials' or 'Catch of the Day' from a phone or laptop in seconds, ensuring the digital displays are always 100% accurate." }
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                            <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions" className="hover:text-slate-700 transition-colors">Solutions</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <Link href="/solutions/food-hospitality" className="hover:text-slate-700 transition-colors font-medium">Food & Hospitality</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-slate-700">Fine Dining</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-slate-200 rounded-full text-xs font-semibold tracking-wider text-slate-700 uppercase mb-4 bg-slate-50">
                            PREMIUM HOSPITALITY
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Elevate Guest <br /> Experience Elegantly
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Modernize your fine dining establishment with <strong>sophisticated digital interfaces</strong>. From interactive wine cellars to personalized private event welcomes, .DS (DigitalSigns.ai) provides the tools to blend technology seamlessly with luxury.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-900 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-slate-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Request a Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <Wine className="w-4 h-4" />
                                </span>
                                Digital Wine Lists
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <Users className="w-4 h-4" />
                                </span>
                                VIP Welcome
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                                    <ChefHat className="w-4 h-4" />
                                </span>
                                Chef Specials
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Michelin-Star Establishments</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Luxury Hotel Dining</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-slate-300 transition-colors">Best for: Upscale Steakhouses</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2670&auto=format&fit=crop"
                                    alt="Elegant fine dining restaurant setting with subtle digital displays"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-500" />
                                    Tip: In fine dining, less is more. Use slow-moving, high-art visuals rather than fast-paced advertisements to maintain the lounge atmosphere.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why hospitality leaders choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Combine high-level operational efficiency with a premium, engaging retail experience.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Digital Storytelling</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Share the farm-to-table journey of your ingredients or the history of your establishment through beautiful, slow-motion cinemagraphs in the lobby.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">VIP Personalization</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Instantly tailor entryway screens and private room displays for high-value guests and corporate event planners at the touch of a button.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Operational Agility</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Eliminate the need for paper menu inserts and reprints. Update special pairings or limited-vintage wine availability across your system in real-time.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In the upscale market, <strong>fine dining digital signage</strong> is a silent partner that enhances the brand without distracting from the main event: the cuisine.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Elegant Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every guest touchpoint with subtle, purposeful digital interactions.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Digital Sommelier Tablets", desc: "Interactive wine lists that allow guests to explore tasting notes, origins, and pairings." },
                            { title: "Lobby Signature Artist Loops", desc: "Feature slow-moving, high-art visuals or profiles of the chef's culinary philosophy." },
                            { title: "Table-Side Digital Menu inserts", desc: "Subtle, high-res displays for seasonal dessert pairings or premium digestifs." },
                            { title: "Private Suite Personalization", desc: "Welcome corporate groups with their logo and a custom menu on a dedicated entryway screen." },
                            { title: "Bar Top Spirit Showcase", desc: "Highlight rare whiskies or premium gin collections with elegant digital bottle tags." },
                            { title: "Chef's Table Live-Feed", desc: "Showcase the precision and artistry of the kitchen to guests at the chef's table." },
                            { title: "Valet Status Display", desc: "Discreetly display car retrieval status near the exit to ensure a smooth guest departure." },
                            { title: "Sustainability & Source Maps", desc: "Educate guests on the origin of your wagyu or the freshness of your morning-caught seafood." },
                            { title: "Interactive Private Event Floorplans", desc: "Help large parties find their designated room or seating areas with digital wayfinding." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-slate-50 rounded-[18px] bg-white">
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Premium Signage Features</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Professional-grade tools built for the world's most discerning hospitality environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Inventory-Synced Cellar CMS", desc: "Directly link your digital wine list to your cellar inventory to avoid guest disappointment." },
                            { title: "Multi-Language Concierge", desc: "Instantly translate menus and event info into 10+ languages for international guests." },
                            { title: "Advanced Brightness Scheduling", desc: "Automatically dim screens as the restaurant lighting transitions from early evening to a cozy atmosphere." },
                            { title: "Group-Level Content Pushing", desc: "Manage menus for a global restaurant group or a local multi-concept portfolio from one dashboard." },
                            { title: "High-Art Template Library", desc: "Access a curated selection of minimalist, elegant templates designed specifically for luxury brands." },
                            { title: "Secure Room-Level Control", desc: "Give event planners temporary, secure access to manage the content in their specific private room." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=luxury" className="text-slate-800 font-extrabold hover:underline">Luxury Templates</Link>,
                        learn about <Link href="/integrations" className="text-slate-800 font-extrabold hover:underline">Hospitality Integrations</Link>,
                        or see our <Link href="/pricing" className="text-slate-800 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for restaurant owners and operations directors.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What are the benefits of digital signage for fine dining restaurants?</AccordionTrigger>
                                <AccordionContent>
                                    Fine dining establishments use digital signage to enhance the guest experience with subtle, high-end displays. This includes interactive digital wine lists, lobby welcoming screens for VIP events, chef's table live-feeds, and elegant digital menu boards that can be updated instantly without the need for reprinted paper inserts.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I display digital wine lists on tablets?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. We offer interactive tablet-based wine lists that allow guests to filter by vintage, region, grape profile, and price point, complete with sommelier tasting notes and inventory-synced availability.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>How does digital signage improve private event management?</AccordionTrigger>
                                <AccordionContent>
                                    For private events, you can customize lobby and room-entry screens with the event name, corporate logo, or personal photos of the hosts, creating a bespoke atmosphere that premium clients expect.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I manage multiple locations at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can push a global menu update or a consistent brand graphic to every restaurant in your group in seconds, while still allowing local managers to handle their specific 'Chef's Specials'.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-slate-50">Ready to redefine your hospitality experience?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Consult with our hospitality experts to design a tailored, premium signage solution that elevates your brand.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <Link href="/book-demo">Contact Sales</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/food-hospitality">Back to Food & Hospitality</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
