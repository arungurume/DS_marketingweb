import { GoogleTvIcon } from '@/components/icons/GoogleTvIcon';
import { AndroidTvIcon } from '@/components/icons/AndroidTvIcon';
import { AmazonFireTvIcon } from '@/components/icons/AmazonFireTvIcon';
import { AmazonSignageIcon } from '@/components/icons/AmazonSignageIcon';
import { WebPlayerIcon } from '@/components/icons/WebPlayerIcon';

const hardware = [
    {
        name: 'Google TV',
        icon: GoogleTvIcon,
    },
    {
        name: 'Android TV',
        icon: AndroidTvIcon,
    },
    {
        name: 'Fire TV',
        icon: AmazonFireTvIcon,
    },
    {
        name: 'Amazon Signage',
        icon: AmazonSignageIcon,
    },
    {
        name: 'Web Player',
        icon: WebPlayerIcon,
    }
];

export function HardwareSection() {
    return (
        <section className="py-16 sm:py-24 bg-primary/5">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                        Use Your Existing Hardware.
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our digital signage software is designed for maximum compatibility, letting you use the smart TVs, media players, and devices you connect to our cloud CMS today. We support a wide range of hardware — or any modern web browser.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
                    {hardware.map((item) => (
                        <div key={item.name} className="flex flex-col items-center justify-center gap-4 p-6 bg-background rounded-lg border shadow-sm">
                            <item.icon className="h-12 w-12" />
                            <p className="font-medium text-center">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
