
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const setupImage = PlaceHolderImages.find((p) => p.id === 'cms-playlist-view');

export function SetupSection() {
  return (
    <section className="bg-black text-white">
      <div className="container pt-20 sm:pt-32 text-center">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold">
          Get set up with digital signage in minutes
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Use your existing TV, media player, or computer — no additional hardware required.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/free-digital-signage/">Sign Up For Free</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-200 hover:text-black">
            <Link href="#">Book a Demo</Link>
          </Button>
        </div>

        <div className="mt-16 h-[32vw] max-h-[450px] overflow-hidden">
            <div className="max-w-5xl mx-auto bg-gray-800/50 rounded-xl shadow-2xl shadow-black/50 p-2 border border-gray-700">
                <div className="flex items-center gap-1.5 px-2 h-6">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
                {setupImage && (
                    <Image
                    src={setupImage.imageUrl}
                    alt={setupImage.description}
                    width={1080}
                    height={721}
                    className="rounded-b-lg w-full h-auto"
                    data-ai-hint={setupImage.imageHint}
                    />
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
