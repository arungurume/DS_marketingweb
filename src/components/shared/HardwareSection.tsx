'use client';
import { GoogleTvIcon } from '@/components/icons/GoogleTvIcon';
import { AndroidTvIcon } from '@/components/icons/AndroidTvIcon';
import { AmazonFireTvIcon } from '@/components/icons/AmazonFireTvIcon';
import { AmazonSignageIcon } from '@/components/icons/AmazonSignageIcon';
import { WebPlayerIcon } from '@/components/icons/WebPlayerIcon';

const hardware = [
    { name: 'Google TV', icon: GoogleTvIcon, description: "Google TV" },
    { name: 'Android TV', icon: AndroidTvIcon, description: "Android TV" },
    { name: 'Fire TV', icon: AmazonFireTvIcon, description: "Fire TV" },
    { name: 'Amazon Signage', icon: AmazonSignageIcon, description: "Amazon Signage" },
    { name: 'Web Player', icon: WebPlayerIcon, description: "Web Player" },
];

export function HardwareSection() {
    return (
        <section className="py-16 sm:py-24 bg-primary/5">
            <div className="container">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold">Use Your Existing Hardware.</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Our digital signage software is designed for maximum compatibility, letting you use hardware you already own. We support a wide range of devices and connect to our CMS today. We support any screen, any size, any orientation.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {hardware.map(item => (
                        <div key={item.name} className="p-6 rounded-lg bg-background border shadow-sm text-center flex flex-col items-center">
                            <item.icon className="h-12 w-auto" />
                            <p className="mt-4 font-semibold">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
