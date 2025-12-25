'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const useCases = [
  {
    title: 'Restaurant Menus',
    description: 'Display your menu in a beautiful and dynamic way.',
    image: 'https://picsum.photos/seed/restaurant/600/400',
    hint: 'restaurant menu'
  },
  {
    title: 'Retail Promotions',
    description: 'Showcase your latest products and promotions to customers.',
    image: 'https://picsum.photos/seed/retail/600/400',
    hint: 'retail store'
  },
  {
    title: 'Corporate Communication',
    description: 'Keep your employees informed with company news and updates.',
    image: 'https://picsum.photos/seed/office/600/400',
    hint: 'office lobby'
  },
  {
    title: 'School Announcements',
    description: 'Share important information with students and faculty.',
    image: 'https://picsum.photos/seed/school/600/400',
    hint: 'school hallway'
  },
  {
    title: 'Healthcare Information',
    description:
      'Provide patients with important health information and updates.',
    image: 'https://picsum.photos/seed/hospital/600/400',
    hint: 'hospital waiting'
  },
  {
    title: 'Event Schedules',
    description: 'Display event schedules and information for attendees.',
    image: 'https://picsum.photos/seed/conference/600/400',
    hint: 'conference room'
  },
];

export function UseCasesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-gray-800">
              Use Cases
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Perfect for Any Business
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From restaurants to retail, our digital signage solution can be
              customized to fit your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title}>
              <CardHeader>
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                    data-ai-hint={useCase.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
