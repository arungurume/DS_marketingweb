import { HeroSection } from '@/components/shared/HeroSection';
import { Testimonials } from '@/components/shared/Testimonials';
import { UseCasesSection } from '@/components/shared/UseCasesSection';
import { HardwareSection } from '@/components/shared/HardwareSection';
import { TemplatesShowcaseSection } from '@/components/shared/TemplatesShowcaseSection';
import { BrandsSection } from '@/components/shared/BrandsSection';
import { AskAiSection } from '@/components/shared/AskAiSection';
import { SetupSection } from '@/components/shared/SetupSection';
import { SITE_URL } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'DigitalSigns.ai',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Android, Fire TV, Web',
            url: SITE_URL,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            description:
              'Cloud-based digital signage software that turns any TV into a smart, remotely-managed digital sign — manage playlists and content across every screen from one dashboard.',
          }),
        }}
      />
      <HeroSection />
      <UseCasesSection />
      <HardwareSection />
      <TemplatesShowcaseSection />
      {/* <Testimonials fullWidth={true} /> */}
      <BrandsSection />
      <AskAiSection />
      <SetupSection />
    </>
  );
}


