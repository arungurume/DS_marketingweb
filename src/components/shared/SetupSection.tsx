'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TvFrame } from '@/components/shared/TvFrame';
import { cn } from '@/lib/utils';

const slideshowImages = [
    '/images/screens/screen1.png',
    '/images/screens/screen2.png',
];

export function SetupSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="pt-24 sm:pt-32 pb-0 bg-black text-white w-full overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="font-headline font-semibold text-4xl md:text-[52px] tracking-tight mb-8 leading-tight lg:whitespace-nowrap">
                        Get set up with digital signage in minutes
                    </h2>
                    <p className="font-body text-base md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-normal lg:whitespace-nowrap">
                        Use your existing TV, media player, or computer — no additional hardware required.
                    </p>



                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild className="font-headline bg-[#F5D631] text-black hover:bg-[#eacb2e] h-14 px-10 text-lg font-normal rounded-lg shadow-xl shadow-yellow-500/10 transition-transform hover:scale-[1.02]">
                            <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                        </Button>
                        <Button asChild variant="outline" className="font-headline bg-white text-black border-none hover:bg-gray-100 h-14 px-10 text-lg font-normal rounded-lg transition-all hover:scale-[1.02]">
                            <a href="https://hub.digitalsigns.ai/">Login</a>
                        </Button>
                    </div>
                </div>

                <div className="relative mt-20 max-w-[95%] lg:max-w-[85%] mx-auto h-[350px] md:h-[500px] lg:h-[620px] overflow-hidden">
                    <TvFrame
                        mode="window"
                        slideshowImages={slideshowImages}
                        currentIndex={currentIndex}
                        className="shadow-[0_48px_100px_-20px_rgba(0,0,0,1)]"
                    />
                </div>
            </div>
        </section>
    );
}
