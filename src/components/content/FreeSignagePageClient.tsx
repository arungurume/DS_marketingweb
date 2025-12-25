'use client';
import { HeroSection } from '@/components/shared/HeroSection';
import { UseCasesSection } from '@/components/shared/UseCasesSection';
import { SetupSection } from '@/components/shared/SetupSection';
import { Testimonials } from '@/components/shared/Testimonials';
import { AskAiSection } from '@/components/shared/AskAiSection';

export function FreeSignagePageClient() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <UseCasesSection />
        <SetupSection />
        <Testimonials />
        <AskAiSection />
      </main>
    </div>
  );
}
