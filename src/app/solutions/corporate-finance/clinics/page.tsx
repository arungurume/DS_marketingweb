'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Activity, Clock, TrendingUp, Monitor, CheckCircle, Tag, Info, Instagram, ShieldAlert, ChevronRight, Layout, Zap, Target, Search, Heart, ShieldCheck } from 'lucide-react';

export default function ClinicsHealthcarePage() {
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
                            { "@type": "ListItem", "position": 2, "name": "Corporate & Finance", "item": "https://digitalsigns.ai/solutions/corporate-finance" },
                            { "@type": "ListItem", "position": 3, "name": "Clinics & Healthcare", "item": "https://digitalsigns.ai/solutions/corporate-finance/clinics" }
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
                                "name": "How is digital signage used in medical clinics?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Medical clinics use digital signage for patient check-in instructions, virtual waiting room queue displays, health education videos, and wayfinding for large medical buildings." }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I show real-time waiting times?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our platform can integrate with your patient management system to show live, estimated wait times, which helps reduce patient anxiety and improve their overall experience." }
                            },
                            {
                                "@type": "Question",
                                "name": "Is it secure for HIPAA-regulated environments?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our enterprise-grade security and secure cloud architecture are designed to be safe for healthcare environments. We ensure that only the intended content is displayed with no unauthorized access or data exposure." }
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
                            <Link href="/solutions/corporate-finance" className="hover:text-[#2B7CD3] transition-colors">Corporate & Finance</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className="text-[#2B7CD3]">Clinics & Healthcare</span>
                        </div>

                        <span className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            HEALTHCARE & CLINICAL
                        </span>

                        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Patient-Centered <br /> Healthcare Signage
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                            Transform the patient experience with <strong>integrated wait-time displays</strong>, helpful health education tips, and <strong>smart clinic wayfinding</strong>. Reduce perceived wait times and improve health outcomes by educating patients while they wait.
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
                                <span className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center text-rose-600">
                                    <Heart className="w-4 h-4" />
                                </span>
                                Patient Education
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2B7CD3]">
                                    <Clock className="w-4 h-4" />
                                </span>
                                Live Wait-Times
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <span className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                Safe & Secure
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-rose-200 transition-colors">Best for: Medical Centers</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-rose-200 transition-colors">Best for: Specialty Clinics</span>
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-500 bg-white hover:border-rose-200 transition-colors">Best for: Hospital Networks</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[26px] border border-gray-100 overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,18,32,0.08)]">
                            <div className="w-full h-[320px] bg-gray-100 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop"
                                    alt="Modern medical clinic waiting area with patient information displays"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-white/95 backdrop-blur">
                                <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                                    Tip: Offices showing clear wait times and health tips report a 35% higher patient satisfaction score.
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
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Why providers choose .DS (DigitalSigns.ai)</h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">Enhance the patient journey and support clinical outcomes through clear, professional communication.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Reduced Perceived Wait</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Engaging health content and active wait-time boards make the waiting process feel significantly shorter for patients.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Meaningful Health Education</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Educate patients on preventive care, seasonal wellness, and chronic conditions directly in your waiting areas.</p>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">Clinic Professionalism</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Replace outdated printed posters with clean, high-resolution digital displays that build patient trust and institutional brand value.</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        In a healthcare environment, <strong>medical digital signage</strong> is a bridge between clinical efficiency and patient comfort—providing necessary information while maintaining a professional atmosphere.
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Clinic & Healthcare Use Cases</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Enhance every patient touchpoint, from the entrance to the consultation room.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Virtual Waiting Room Boards", desc: "Display current wait times and ticket numbers to keep patients informed and calm." },
                            { title: "Check-in Instructions", desc: "Digital screens at the entrance guiding patients through contact-less check-in processes." },
                            { title: "Wellness & Safety Loops", desc: "Feature tips on heart health, daily movement, and the importance of regular screenings." },
                            { title: "Staff Credential Walls", desc: "Build trust by featuring doctor backgrounds, nurse certifications, and specialty expertise." },
                            { title: "Pharmacy & Service Promos", desc: "Highlight in-house lab services, pharmacy availability, or nearby specialty partners." },
                            { title: "Patient Form QR Codes", desc: "Include QR codes on screens that allow patients to fill out intake forms on their own phones." },
                            { title: "Multi-Clinic Wayfinding", desc: "Interactive maps helping patients find specific departments or doctors in large medical complexes." },
                            { title: "Seasonal Health Alerts", desc: "Instant deployment of flu shot availability, COVID protocols, or pollen count warnings." },
                            { title: "Patient Feedback Channels", desc: "Loop QR codes that lead to satisfaction surveys to gather real-time clinic feedback." }
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
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Professional Features for Healthcare</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Reliable, secure, and easy-to-manage tools designed for the unique needs of medical clinics.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Secure Patient Data Sync", desc: "Ability to pull wait times and queue info from clinical software via secure APIs." },
                            { title: "Healthcare Template Library", desc: "Access 100+ professionally designed medical templates for safety, wellness, and clinic info." },
                            { title: "SSO & Secure Management", desc: "Enterprise security with Okta and Azure integration to ensure only authorized staff can update content." },
                            { title: "Multi-Zone Display Support", desc: "Show health tips on one side of a TV and live wait times on the other simultaneously." },
                            { title: "Emergency Broadcast System", desc: "Instantly take over all clinic screens for critical safety or health-related announcements." },
                            { title: "Centralized Network Control", desc: "Manage signage across multiple clinics and hospitals from one master healthcare dashboard." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-[18px] bg-white">
                                <h3 className="font-bold text-gray-900 mb-1.5 text-[15px]">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                        Explore our <Link href="/templates?tag=healthcare" className="text-rose-600 font-extrabold hover:underline">Healthcare Templates</Link>,
                        learn about <Link href="/wayfinding" className="text-rose-600 font-extrabold hover:underline">Digital Wayfinding</Link>,
                        or see our <Link href="/pricing" className="text-rose-600 font-extrabold hover:underline text-uppercase">Pricing</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Expert answers for medical office managers and healthcare network IT teams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is digital signage used in medical clinics?</AccordionTrigger>
                                <AccordionContent>
                                    Medical clinics use digital signage for patient check-in instructions, virtual waiting room queue displays, health education videos, and wayfinding for large medical buildings.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I show real-time waiting times?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our platform can integrate with your patient management system to show live, estimated wait times, which helps reduce patient anxiety and improve their overall experience.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it secure for HIPAA-regulated environments?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Our enterprise-grade security and secure cloud architecture are designed to be safe for healthcare environments. We ensure that only the intended content is displayed with no unauthorized access.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I update all clinics at once?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can push a global health update to every screen in your entire network in seconds, or target specific clinics based on their location or specialty.
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
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-rose-50">Ready to modernize your healthcare facility?</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Talk to our experts about setting up a patient-centered signage network for your clinic today.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://wa.me/12263360773">Contact Sales</a>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/solutions/corporate-finance">Back to Corporate</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
