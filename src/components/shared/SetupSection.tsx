
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SetupSection() {
  return (
    <section className="bg-black">
      <div className="container pt-20 sm:pt-32 text-center">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-white">
          Get set up with digital signage in minutes
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Use your existing TV, media player, or computer — no additional hardware required.
          <br />
          Best for restaurants, retail, offices, and schools.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/free-digital-signage/">Sign Up For Free</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-200 hover:text-black">
            <Link href="#">Book a Demo</Link>
          </Button>
        </div>

        <div className="mt-16 max-w-5xl mx-auto -mb-40 relative z-10">
          <div className="relative" style={{ paddingBottom: 'calc(100% * (721 / 1080))' }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="bg-gray-800/50 rounded-t-xl p-2 border-b-0 border border-gray-700">
                <div className="flex items-center gap-1.5 px-2 h-6">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>
              <Image
                src="/images/screens/screen1.png"
                alt="DigitalSigns.ai CMS playlist view"
                width={1080}
                height={721}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
