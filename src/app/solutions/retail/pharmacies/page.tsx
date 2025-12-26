'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Activity, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Heart, ShieldCheck } from 'lucide-react';

export default function PharmaciesPage() {
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
                            { "@type": "ListItem", "position": 3, "name": "Pharmacies", "item": "https://digitalsigns.ai/solutions/retail/pharmacies" }
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
                                "name": "How is digital signage used in pharmacies?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Pharmacies use digital signage for health awareness campaigns, prescription status updates, seasonal promotion of wellness products, and virtual wait-time management at the counter." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show real-time wait times for prescriptions?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can integrate with your management software or a manual data feed to display estimated wait times, reducing customer frustration and counter congestion." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is it easy to update health alerts?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can push critical health alerts, flu shot availability, or pharmacy hour changes to all your screens in seconds from a centralized dashboard." }
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
                            <span className="text-[#2B7CD3]">Pharmacies</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            RETAIL & COMMERCE
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Digital Signage for <br /> Pharmacies
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Transform your pharmacy experience with <strong>health education screens</strong>, prescription wait-time displays, and targeted <strong>wellness product promotions</strong>. Build patient trust and increase average transaction value while modernizing your clinical environment.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                                <Link href="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 font-bold h-12 px-6 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                                <Link href="/start-free">Start Free</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-8">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center text-rose-600">
                                    <Heart className="w-4 h-4" />
                                </span>
                                Health Education
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Clock className="w-4 h-4" />
                                </span>
                                Wait-Time Displays
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Professional Branding
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-rose-200 transition-colors">Best for: Community Pharmacies</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-rose-200 transition-colors">Best for: Retail Pharmacy Chains</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-rose-200 transition-colors">Best for: Wellness Clinics</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2669&auto=format&fit=crop"
                                    alt="Modern pharmacy interior with health education signage"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                                    Tip: Displaying flu shot availability can increase annual vaccine uptake by up to 20%.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why pharmacies choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Combine clinical professionalism with smart retail messaging to serve patients better.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Patient Education</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Educate patients on chronic conditions, new medication protocols, and wellness tips while they wait.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Reduced Wait Frustration</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Real-time prescription status boards keep patients informed, reducing repetitive questions at the counter.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Targeted Health Promos</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Promote high-margin vitamins, seasonal allergy relief, and sun care products based on local trends.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        A modern <strong>pharmacy signage solution</strong> isn't just about selling; it's about clear communication, patient safety alerts, and creating a trusted, professional healthcare environment.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Pharmacy Digital Signage Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance the point-of-sale and waiting area with meaningful health and product information.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Prescription Status Boards", desc: "Show ready-for-pickup orders by ticket number to streamline the collection process." },
                            { title: "Health Awareness Loops", desc: "Short video tips on diabetes management, heart health, and mental wellness." },
                            { title: "Seasonal Vaccine Calls", desc: "Bright banners promoting Flu, COVID-19, or Travel vaccinations available in-store." },
                            { title: "Counter-Top Promo Screens", desc: "Promote impulse buys like lip balms, hand sanitizers, and travel-sized toiletries." },
                            { title: "Virtual Queue Kiosks", desc: "Let patients check in for consultations and see their place in line on a public monitor." },
                            { title: "Privacy Messaging", desc: "Inform patients about privacy areas and consultation room availability." },
                            { title: "Doctor/Staff Profiles", desc: "Build trust by featuring the pharmacist's credentials and expertise on screen." },
                            { title: "Emergency Public Alerts", desc: "Instantly display local health warnings or temporary hour changes." },
                            { title: "Loyalty & App Signups", desc: "QR codes to download the pharmacy app for easy prescription refills." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Professional Signage Features for Healthcare</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Secure, reliable, and easy-to-use tools for busy pharmacy environments.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Centralized Multisite Control", desc: "Manage 50+ pharmacy locations from one dashboard, ensuring consistent health messaging." },
                            { title: "Real-Time Data Integration", desc: "Connect to your queue management or prescription system to automate wait-time displays." },
                            { title: "Smart Health Templates", desc: "Access 100+ healthcare-specific templates for seasonal promos and patient tips." },
                            { title: "Secure Cloud Architecture", desc: "Enterprise-grade security to ensure your signage system remains protected at all times." },
                            { title: "Mobile Remote Updates", desc: "Allow Lead Pharmacists to quickly update daily messages from their smartphone." },
                            { title: "System Monitoring & Alerts", desc: "Automatic downtime alerts to ensure your patient information screens are always running." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        See our <Link href="/templates?tag=pharmacy" className="text-rose-600 font-extrabold hover:underline">Pharmacy Templates</Link>,
                        learn about <Link href="/healthcare-signage" className="text-rose-600 font-extrabold hover:underline">Clinical Solutions</Link>,
                        or check out <Link href="/pricing" className="text-rose-600 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Common questions for pharmacy and retail healthcare signage.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in pharmacies?</AccordionTrigger>
                                <AccordionContent>
                                    Pharmacies use digital signage for health awareness campaigns, prescription status updates, seasonal promotion of wellness products, and virtual wait-time management at the counter.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show real-time wait times for prescriptions?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can integrate with your management software or a manual data feed to display estimated wait times, reducing customer frustration and counter congestion.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it easy to update health alerts?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can push critical health alerts, flu shot availability, or pharmacy hour changes to all your screens in seconds from a centralized dashboard.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Do you provide content? Or do I need to make it?</AccordionTrigger>
                                <AccordionContent>
                                    We provide a library of professionally designed healthcare templates and high-quality health tips ready for use. You can also upload your own images and videos easily.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-rose-50">Ready to modernize your pharmacy?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Join leading pharmacy chains using .DS (DigitalSigns.ai) to improve patient education and increase store sales.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <Link href="/book-demo">Contact Sales</Link>
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
