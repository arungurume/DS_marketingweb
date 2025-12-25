'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const pizzaImage = PlaceHolderImages.find(p => p.id === 'pizza-menu');

const useCases = [
    { 
        value: 'restaurants-cafes', 
        title: 'Restaurants & Cafes',
        description: 'Show scheduled menus, promote in-store offers, and share internal updates easily.',
        features: ['Breakfast, lunch, dinner & promos', 'Showcase menu items', 'Promote daily specials', 'Upsell high-margin items']
    },
    { 
        value: 'retail', 
        title: 'Retail',
        description: 'Promote in-store offers, campaign high-margin products, and keep everyone informed.',
        features: ['In-store promotions', 'Supplier-funded ads', 'New product arrivals', 'Brand storytelling']
    },
    { 
        value: 'offices-corporate', 
        title: 'Offices & Corporate',
        description: 'Share internal updates, announce company-wide events, and keep everyone informed.',
        features: ['Company announcements', 'Meeting room schedules', 'Welcome messages for guests', 'KPI dashboards']
    },
    { 
        value: 'schools-universities', 
        title: 'Schools & Universities',
        description: 'Keep everyone informed with event schedules, campus maps, and emergency alerts.',
        features: ['Cafeteria menus', 'Upcoming events', 'Campus wayfinding', 'Sports scores']
    },
];

const howItWorks = [
    { step: 1, title: 'Connect a TV' },
    { step: 2, title: 'Create or upload content' },
    { step: 3, title: 'Publish your screen' },
];

export function UseCasesSection() {
    const [activeUseCase, setActiveUseCase] = useState(useCases[0].value);

    return (
        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold">Built for Real Businesses</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Expandable use cases that clearly show how DigitalSigns.ai is right for your operation.
                    </p>
                </div>
                <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
                    <Accordion type="single" value={activeUseCase} onValueChange={setActiveUseCase} collapsible className="w-full">
                        {useCases.map(useCase => (
                            <AccordionItem value={useCase.value} key={useCase.value}>
                                <AccordionTrigger>
                                    <span className="font-semibold text-lg">{useCase.title}</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">{useCase.description}</p>
                                    <ul className="mt-4 space-y-2">
                                        {useCase.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <Check className="h-4 w-4 text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-8 sticky top-24">
                        <h3 className="font-semibold text-lg">How it works (3 steps)</h3>
                        <ul className="mt-4 space-y-3">
                            {howItWorks.map(item => (
                                <li key={item.step} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                                        {item.step}
                                    </div>
                                    <span>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 aspect-video w-full overflow-hidden rounded-md border">
                            {pizzaImage && (
                                <Image
                                    src={pizzaImage.imageUrl}
                                    alt="Pizza restaurant menu"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    data-ai-hint={pizzaImage.imageHint}
                                />
                            )}
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <Button asChild className="w-full">
                                <Link href="#">Start Free</Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full">
                                <Link href="#">See a Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
