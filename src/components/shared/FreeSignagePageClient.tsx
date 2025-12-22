'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE_NAME } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckmarkIcon } from '@/components/icons/CheckmarkIcon';
import { TvFrame } from '@/components/shared/TvFrame';


const template1 = PlaceHolderImages.find(p => p.id === 'pizza-menu');
const template2 = PlaceHolderImages.find(p => p.id === 'cafe-menu');
const template3 = PlaceHolderImages.find(p => p.id === 'burger-menu');
const template4 = PlaceHolderImages.find(p => p.id === 'qsr-menu');

const features = [
    { title: "Up to 4 Screens Free Forever", description: "Perfect for cafes, retail, offices, schools and stores looking to go digital signage." },
    { title: "No Subscriptions or Per-Screen Fees", description: "Transparent pricing. Upgrade only when you need more than four free screens." },
    { title: "Easy, Flexible Setup", description: "Use Fire TV, Android TV, or any modern web browser player. No expensive hardware needed." },
    { title: "Templates Included", description: "Digital menu boards and posters ready to customize." },
    { title: "Scheduling & Playlists", description: "Automate content with scheduling and playlists." },
    { title: "Upgrade Anytime", description: "Add screens, storage, and premium templates as your business grows." },
];

const steps = [
    { title: "Sign Up Free", description: "Create your account at DigitalSigns.ai." },
    { title: "Connect Your Screen", description: "Pair your TV using our Fire TV or Android TV apps — or open the web player in the browser." },
    { title: "Upload or Choose Templates", description: "Add your own images/videos or pick from our free gallery, then schedule and publish!" },
];

const comparisonData = [
  { feature: "Free Plan", dsai: "4 screens free (no watermark)", yodeck: "1 screen free (with watermark)", trulifi: "A trial only" },
  { feature: "Entry Paid Plan", dsai: "Only when > 4 screens", yodeck: "Starts ~$8/screen/mo", trulifi: "Starts ~$8/screen/mo" },
  { feature: "Watermark on Free", dsai: "None", yodeck: "Yes", trulifi: "Trial expires" },
  { feature: "Supported Players", dsai: "Browser, Fire TV, Android TV", yodeck: "Fire TV, Android, Windows, ChromeOS", trulifi: "Fire TV, Android, Windows, ChromeOS" },
  { feature: "Templates Included", dsai: "Menus, retail, events", yodeck: "Menus, retail, events", trulifi: "Menus, retail, events" },
  { feature: "Ease of Setup", dsai: "Browser player, no installs", yodeck: "Requires player hardware", trulifi: "Requires app installs" },
  { feature: "Scheduling", dsai: "Free", yodeck: "Free", trulifi: "Only on paid" },
];

const whoUses = [
    { title: "Restaurants & Cafes", description: "Digital menu boards & promos" },
    { title: "Retail Stores", description: "Sales & seasonal offers" },
    { title: "Offices & Lobbies", description: "Announcements & wayfinding" },
    { title: "Events & Venues", description: "Wayfinding & schedules" },
];

const templates = [
    { image: template1, title: "Restaurant Menu Board" },
    { image: template2, title: "Indian Menu" },
    { image: template3, title: "Sandwich Combo Board" },
    { image: template4, title: "Sandwich Poster" },
];

const faqs = [
    { question: "Is DigitalSigns.ai really free?", answer: `Yes, our free plan lets you manage up to 4 screens forever with no watermarks or required subscriptions. You get access to our core features, including the content editor, scheduling, and a media library. You only need to upgrade if you need more than 4 screens.` },
    { question: "Do I need special hardware?", answer: "No. You can use hardware you already own. DigitalSigns.ai works great with an Amazon Fire TV Stick, any device with Android TV / Google TV, or any computer with a modern web browser. No need to buy expensive, proprietary media players." },
    { question: "Can I upload my own content?", answer: "Absolutely. You can upload your own images (JPG, PNG) and videos (MP4) to our media library and use them in your designs. You can also use our free templates and stock image library." },
    { question: "What if I need more than 4 screens?", answer: "Our paid plans are simple and affordable, starting at just $20 per screen per month. You can upgrade, downgrade, or cancel anytime directly from your dashboard." },
]

export function FreeSignagePageClient() {
  return (
    <div className="pb-16 sm:pb-24">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider">Up to 4 screens — Free Forever</p>
              <h1 className="font-headline mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                Free Digital Signage Software — No Subscriptions, No Per-Screen Fees
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Turn any TV or display into a digital signage screen. Create playlists, schedule content, and manage up to 4 screens free forever—no credit card required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#">Get Started Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#">See How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <TvFrame horizontalOnly={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-primary/5">
        <div className="container text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold">
            Simple, Powerful, and Always Free
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Start with our robust, 0$ free plan that helps small businesses launch professional digital signage in minutes.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {features.map(feature => (
              <div key={feature.title} className="p-6 rounded-lg bg-background shadow-sm border">
                <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">
                Start Free in Just 3 Steps
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-12 relative">
                {/* Dashed lines for larger screens */}
                <div className="hidden md:block absolute top-5 left-0 w-full h-px">
                   <svg width="100%" height="2" className="absolute">
                      <line x1="0" y1="1" x2="100%" y2="1" strokeWidth="2" strokeDasharray="8 8" className="stroke-border" />
                    </svg>
                </div>
                {steps.map((step, index) => (
                    <div key={step.title} className="text-center relative bg-background px-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground mx-auto font-bold text-xl z-10 relative">
                            {index + 1}
                        </div>
                        <h3 className="mt-4 font-headline text-xl font-semibold">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-amber-100/50">
          <div className="container">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">
                  Compare DigitalSigns.ai to Other Platforms
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                  Accurate to the best of our knowledge (we checked September 2023). Device support and pricing may change — check each platform for current details.
              </p>
              <div className="mt-12 max-w-5xl mx-auto">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 font-semibold">Features</th>
                                <th className="p-4 font-semibold text-primary bg-primary/10 rounded-t-lg">{SITE_NAME}</th>
                                <th className="p-4 font-semibold">Yodeck</th>
                                <th className="p-4 font-semibold">Trulifi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map(row => (
                                <tr key={row.feature} className="border-b bg-background">
                                    <td className="p-4 font-medium">{row.feature}</td>
                                    <td className="p-4 bg-primary/5">
                                        {row.dsai === 'None' || row.dsai === 'Free' || row.dsai.includes('screen') || row.dsai.includes('player') ? row.dsai : <CheckmarkIcon val={true} />}
                                        {row.feature === "Supported Players" && <span className="block text-sm text-muted-foreground">{row.dsai}</span>}
                                        {row.feature === "Templates Included" && <span className="block text-sm text-muted-foreground">{row.dsai}</span>}
                                        {row.feature === "Ease of Setup" && <span className="block text-sm text-muted-foreground">{row.dsai}</span>}

                                    </td>
                                    <td className="p-4">
                                        {row.yodeck === 'Yes' || row.yodeck === 'Free' ? <CheckmarkIcon val={true} /> : (row.yodeck === "No" ? <CheckmarkIcon val={false}/> : row.yodeck)}
                                        {row.feature === "Supported Players" && <span className="block text-sm text-muted-foreground">{row.yodeck}</span>}
                                        {row.feature === "Templates Included" && <span className="block text-sm text-muted-foreground">{row.yodeck}</span>}

                                    </td>
                                    <td className="p-4">
                                        {row.trulifi.includes('trial') || row.trulifi.includes('paid') || row.trulifi.includes('installs') ? row.trulifi : <CheckmarkIcon val={true} />}
                                        {row.feature === "Supported Players" && <span className="block text-sm text-muted-foreground">{row.trulifi}</span>}
                                        {row.feature === "Templates Included" && <span className="block text-sm text-muted-foreground">{row.trulifi}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                  <div className="mt-8 text-center">
                    <Button asChild>
                        <Link href="#">Claim My Free Screens</Link>
                    </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* Who Uses Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
            <div className="container">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">Who Uses Free Digital Signage?</h2>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {whoUses.map(item => (
                        <div key={item.title} className="p-6 rounded-lg bg-background border shadow-sm text-center">
                            <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        {/* Templates Section */}
        <section className="py-16 sm:py-24">
            <div className="container">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">
                    Free Templates to Get You Started
                </h2>
                <p className="mt-4 text-lg text-muted-foreground text-center">
                    Create a design, customize text and images, and go live in minutes.
                </p>
                <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {templates.map(template => (
                        template.image && (
                             <div key={template.title} className="text-center">
                                <div className="rounded-lg border shadow-md overflow-hidden aspect-[9/16]">
                                    <Image src={template.image.imageUrl} alt={template.image.description} width={300} height={400} className="w-full h-full object-cover" data-ai-hint={template.image.imageHint} />
                                </div>
                                <p className="mt-4 font-medium">{template.title}</p>
                            </div>
                        )
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Button asChild variant="outline">
                        <Link href="#">Browse All Templates</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
            <div className="container max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full mt-8 bg-background px-6 rounded-lg border">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className={index === faqs.length-1 ? "border-b-0" : ""}>
                            <AccordionTrigger className="text-lg text-left font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
            <div className="container">
                <div className="rounded-xl bg-primary p-8 sm:p-12 text-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url(/images/cta-bg.svg)] bg-center opacity-20"></div>
                    <div className="relative z-10">
                        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary-foreground">
                            Start Free Digital Signage Today
                        </h2>
                        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                            With DigitalSigns.ai, you always have a free plan. Manage up to 4 screens, create playlists, use free templates and publish content instantly — no subscriptions and no per-screen fees.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                                <Link href="#">Get Started Free</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="#">See Live Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
