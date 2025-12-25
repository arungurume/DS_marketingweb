'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SITE_NAME } from '@/lib/constants';

const useCases = [
  {
    value: 'item-1',
    category: 'RESTAURANTS & CAFÉS',
    title: 'Show scheduled menus',
    description: 'Breakfast, lunch, dinner & promos',
    features: [
      'Day-part scheduling',
      'Instant price updates',
      'Menu boards',
      'Limited offers',
    ],
    image: PlaceHolderImages.find((p) => p.id === 'pizza-menu'),
  },
  {
    value: 'item-2',
    category: 'RETAIL STORES',
    title: 'Promote in-store offers',
    description: 'Campaigns & product highlights',
    features: [
        'Seasonal promotions',
        'Dynamic pricing',
        'Brand storytelling',
        'Upsell products',
    ],
    image: PlaceHolderImages.find((p) => p.id === 'qsr-menu'),
  },
  {
    value: 'item-3',
    category: 'OFFICES & CORPORATE',
    title: 'Share internal updates',
    description: 'Announcements, KPIs & meetings',
    features: [
        'Welcome messages',
        'Company-wide alerts',
        'Dashboard integrations',
        'Meeting room schedules',
    ],
    image: PlaceHolderImages.find((p) => p.id === 'app-showcase-4'),
  },
  {
    value: 'item-4',
    category: 'SCHOOLS & CAMPUSES',
    title: 'Keep everyone informed',
    description: 'Events, alerts & schedules',
    features: [
        'Cafeteria menus',
        'Campus event calendars',
        'Emergency alerts',
        'Student achievements',
    ],
    image: PlaceHolderImages.find((p) => p.id === 'app-showcase-2'),
  },
];

const howItWorksSteps = [
    { number: 1, text: 'Connect a TV' },
    { number: 2, text: 'Create or upload content' },
    { number: 3, text: 'Publish or schedule' },
]

export function UseCasesSection() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold">
            Built for Real Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Expandable use-cases that clearly show how DigitalSigns.ai fits your
            operation.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Accordion */}
          <div className="flex flex-col gap-4">
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="w-full"
              onValueChange={(value) => {
                const newActiveUseCase = useCases.find(uc => uc.value === value);
                if (newActiveUseCase) {
                    setActiveUseCase(newActiveUseCase);
                }
              }}
            >
              {useCases.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-0 mb-4"
                >
                  <AccordionTrigger className="p-6 bg-card rounded-lg shadow-sm data-[state=open]:shadow-lg data-[state=open]:rounded-b-none border data-[state=open]:border-primary hover:no-underline [&>svg]:ml-4">
                    <div className="text-left flex-grow">
                      <p className="text-sm font-semibold text-primary">
                        {item.category}
                      </p>
                      <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-card rounded-b-lg p-6 pt-0 -mt-2 border border-t-0 data-[state=open]:border-primary">
                    {item.features && (
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                        {item.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-blue-500" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column: How it works */}
          <div className="sticky top-24">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-bold text-xl">How it works (3 steps)</CardTitle>
                    <p className="text-muted-foreground pt-1">No complicated hardware or setup.</p>
                </CardHeader>
              <CardContent className="flex flex-col gap-8">
                <div className="space-y-4">
                    {howItWorksSteps.map((step) => (
                        <div key={step.number} className="flex items-center gap-4">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">{step.number}</div>
                            <p className="font-medium text-foreground/90">{step.text}</p>
                        </div>
                    ))}
                </div>
                <div className="aspect-[16/9] w-full rounded-lg bg-muted overflow-hidden">
                    {activeUseCase && activeUseCase.image ? (
                         <Image
                            src={activeUseCase.image.imageUrl}
                            alt={`Example of ${SITE_NAME} used for ${activeUseCase.category}`}
                            width={1200}
                            height={675}
                            className="w-full h-full object-cover transition-opacity duration-300"
                            data-ai-hint={activeUseCase.image.imageHint}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-muted-foreground">Screen preview</p>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button asChild size="lg">
                        <Link href="/free-digital-signage/">Start Free</Link>
                    </Button>
                     <Button asChild size="lg" variant="outline">
                        <Link href="/pricing/">Pricing</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
