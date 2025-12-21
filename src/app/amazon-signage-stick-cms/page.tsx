import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

const pageTitle = `Amazon Fire TV Stick Digital Signage CMS | ${SITE_NAME}`;
const pageDescription = 'Turn any TV into a professional digital sign with an Amazon Fire TV Stick and our powerful CMS. A low-cost, high-impact solution for your business.';
const pageUrl = `${SITE_URL}/amazon-signage-stick-cms/`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
  },
};

const amazonStickImage = PlaceHolderImages.find((p) => p.id === 'amazon-stick');

const steps = [
    { title: "Plug In", description: "Connect your Amazon Fire TV Stick to any TV with an HDMI port." },
    { title: "Install App", description: "Download the free DigitalSigns.ai player app from the Amazon Appstore." },
    { title: "Pair Screen", description: "Enter the code shown on your TV into your DigitalSigns.ai dashboard to pair the screen." },
    { title: "Push Content", description: "Your scheduled content will instantly appear on the screen. It's that simple!" },
];

export default function AmazonStickPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        title="Turn Your TV into a Digital Sign with an Amazon Fire Stick"
        subtitle={pageDescription}
      />
      <div className="container mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-foreground/80">
                <h2 className="font-headline text-3xl font-bold text-primary">Low Cost, High Performance</h2>
                <p>
                    Forget expensive, proprietary media players. The Amazon Fire TV Stick is a powerful, affordable device that's perfect for digital signage. Paired with our cloud-based CMS, you get a robust solution for a fraction of the traditional cost.
                </p>
                <h3 className="font-headline text-2xl font-bold text-primary mt-8">Setup in 3 Easy Steps:</h3>
            </div>
            <div>
                {amazonStickImage && (
                <Image
                    src={amazonStickImage.imageUrl}
                    alt={amazonStickImage.description}
                    width={1200}
                    height={800}
                    className="rounded-xl shadow-lg"
                    data-ai-hint={amazonStickImage.imageHint}
                />
                )}
            </div>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="mt-4 font-headline text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
