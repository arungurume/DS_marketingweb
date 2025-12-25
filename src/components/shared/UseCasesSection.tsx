'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';


const useCases = [
    {
        value: 'scheduled-menus',
        tag: 'RESTAURANTS & CAFÉS',
        title: 'Show scheduled menus',
        subtext: 'Breakfast, lunch, dinner & promos',
        features: ['Day-part scheduling', 'Instant price updates', 'Menu boards', 'Limited offers'],
        image: '/images/screens/screen1.png'
    },
    {
        value: 'promotions',
        tag: 'RETAIL STORES',
        title: 'Promote in-store offers',
        subtext: 'Campaigns & product highlights',
        features: ['Holiday sales ads', 'New arrivals', 'Live stock updates', 'In-store marketing'],
        image: '/images/screens/screen2.png'
    },
    {
        value: 'internal-updates',
        tag: 'OFFICES & CORPORATE',
        title: 'Share internal updates',
        subtext: 'Announcements, KPIs & meetings',
        features: ['Meeting room logs', 'CEO messages', 'KPI dashboards', 'Slack integrations'],
        image: '/images/screens/screen1.png'
    },
    {
        value: 'stay-informed',
        tag: 'SCHOOLS & CAMPUSES',
        title: 'Keep everyone informed',
        subtext: 'Events, alerts & schedules',
        features: ['Campus alerts', 'Event schedules', 'Wayfinding', 'Social feeds'],
        image: '/images/screens/screen2.png'
    },
];

const howItWorks = [
    { step: 1, title: 'Connect a TV' },
    { step: 2, title: 'Create or upload content' },
    { step: 3, title: 'Publish or schedule' },
];

export function UseCasesSection() {
    const [activeUseCase, setActiveUseCase] = useState(useCases[0].value);
    const activeData = useCases.find(u => u.value === activeUseCase) || useCases[0];

    return (
        <section className="py-24 bg-white w-full overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline font-semibold text-3xl md:text-[40px] text-gray-900 tracking-tight mb-4">
                        Built for Real Businesses
                    </h2>
                    <p className="font-body text-gray-500 text-base md:text-lg max-w-4xl mx-auto font-normal lg:whitespace-nowrap">
                        Expandable use-cases that clearly show how DigitalSigns.ai fits your operation.
                    </p>

                </div>


                <div className="mt-16 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
                    {/* Left side Accordion */}
                    <div className="space-y-4">
                        <Accordion type="single" value={activeUseCase} onValueChange={setActiveUseCase} className="w-full">
                            {useCases.map(useCase => (
                                <AccordionItem
                                    value={useCase.value}
                                    key={useCase.value}
                                    className={cn(
                                        "border border-gray-100 rounded-xl mb-4 p-1 px-4 transition-all duration-300",
                                        activeUseCase === useCase.value ? "border-[#00AEEF] bg-white shadow-sm" : "hover:border-gray-200"
                                    )}
                                >
                                    <AccordionTrigger className="hover:no-underline py-5 text-left border-none">
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="font-body text-[#00AEEF] text-[11px] font-bold uppercase tracking-[0.05em] mb-1">{useCase.tag}</span>
                                            <span className="font-headline font-semibold text-xl text-gray-900 tracking-tight">{useCase.title}</span>
                                            <span className="font-body text-gray-500 font-normal text-[15px] mt-0.5">{useCase.subtext}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6">
                                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 border-t border-gray-50 pt-6">
                                            {useCase.features.map(feature => (
                                                <div key={feature} className="flex items-center gap-3">
                                                    <Check className="h-4 w-4 text-[#00AEEF] stroke-[3px]" />
                                                    <span className="font-body text-[14px] text-gray-600 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Right side 'How it works' card */}
                    <div className="rounded-[24px] border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-10 lg:p-12 sticky top-32">
                        <div className="mb-10">
                            <h3 className="font-headline font-semibold text-2xl text-gray-900 mb-2 tracking-tight">How it works (3 steps)</h3>
                            <p className="font-body text-gray-500 text-base font-normal">No complicated hardware or setup.</p>
                        </div>

                        <div className="space-y-8 mb-12">
                            {howItWorks.map(item => (
                                <div key={item.step} className="flex items-center gap-6">
                                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm">
                                        {item.step}
                                    </div>
                                    <span className="font-headline font-semibold text-lg text-gray-900 tracking-tight">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="relative aspect-[1.8/1] w-full overflow-hidden rounded-xl mb-12 shadow-sm border border-gray-100">
                            <Image
                                key={activeData.image}
                                src={activeData.image}
                                alt={activeData.title}
                                fill
                                className="object-cover transition-opacity duration-700"
                                priority
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="font-headline flex-1 bg-[#00AEEF] hover:bg-[#0096ce] text-white h-14 text-lg font-bold rounded-lg shadow-lg">
                                Start Free
                            </Button>
                            <Button variant="outline" className="font-headline flex-1 border-gray-200 text-black h-14 text-lg font-bold rounded-lg shadow-sm bg-white hover:bg-gray-50">
                                Pricing
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
