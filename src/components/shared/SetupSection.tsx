'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const setupImage = PlaceHolderImages.find(p => p.id === 'cms-playlist-view');

export function SetupSection() {
    return (
        <section className="py-16 sm:py-24 bg-foreground text-background">
            <div className="container">
                <div className="text-center">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                        Get set up with digital signage in minutes
                    </h2>
                    <p className="mt-4 text-muted max-w-2xl mx-auto">
                        Use your existing TV, media player, or computer — no additional tools or complex hardware required.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                            <Link href="#">Start For Free</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            <Link href="#">See a Demo</Link>
                        </Button>
                    </div>
                </div>
                <div className="mt-16">
                    {setupImage && (
                         <Image
                            src={setupImage.imageUrl}
                            alt="DigitalSigns.ai CMS playlist view"
                            width={2400}
                            height={1600}
                            className="w-full rounded-xl shadow-2xl"
                            data-ai-hint={setupImage.imageHint}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
