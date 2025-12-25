
import { HeroSection } from '@/components/shared/HeroSection';
import { Testimonials } from '@/components/shared/Testimonials';
import { UseCasesSection } from '@/components/shared/UseCasesSection';
import { HardwareSection } from '@/components/shared/HardwareSection';
import { BrandsSection } from '@/components/shared/BrandsSection';
import { AskAiSection } from '@/components/shared/AskAiSection';
import { SetupSection } from '@/components/shared/SetupSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <UseCasesSection />
      <HardwareSection />
      <BrandsSection />
      <AskAiSection />
      <SetupSection />
    </>
  );
}
