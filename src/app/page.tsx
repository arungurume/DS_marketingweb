import { Testimonials } from '@/components/shared/Testimonials';
import { HardwareSection } from '@/components/shared/HardwareSection';
import { BrandsSection } from '@/components/shared/BrandsSection';
import { UseCasesSection } from '@/components/shared/UseCasesSection';
import { SetupSection } from '@/components/shared/SetupSection';
import { AskAiSection } from '@/components/shared/AskAiSection';
import { TvFrame } from '@/components/shared/TvFrame';

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-24 sm:pb-32">
        <div className="container">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Free Digital Signage.
              <br />
              <span className="text-primary">Four Screens Forever.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
              Turn any TV into a digital sign. Manage one screen, or thousands.
              Our free digital signage software gives you everything you need to start.
              No per-screen fees or subscriptions.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 max-w-lg mx-auto">
             <Testimonials />
          </div>
        </div>
        <TvFrame />
      </section>

      <HardwareSection />
      <BrandsSection />
      <UseCasesSection />
      <div className="h-40 sm:h-48" />
      <SetupSection />
      <AskAiSection />
    </main>
  );
}
