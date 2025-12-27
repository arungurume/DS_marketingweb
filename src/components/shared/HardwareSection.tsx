import Image from 'next/image';

import Link from 'next/link';

const hardware = [
    { name: 'Google TV', image: '/images/Google_TV.png', description: "Google TV", href: "https://play.google.com/store/apps/details?id=com.dshub.signage&hl=en" },
    { name: 'Android TV', image: '/images/Android_TV.png', description: "Android TV", href: "https://play.google.com/store/apps/details?id=com.dshub.signage&hl=en" },
    { name: 'Fire TV', image: '/images/Fire_Tv.png', description: "Fire TV", href: "https://www.amazon.com.br/DS-DSPlayer-Digitalsigns-ai/dp/B0F7Y9Q598" },
    { name: 'Amazon Signage stick', image: '/images/amazon_signage.png', description: "Amazon Signage stick", href: "/amazon-signage-stick" },
    { name: 'Web Browsers', image: '/images/browser.png', description: "Web Browsers", href: "https://hub.digitalsigns.ai/" },
];


export function HardwareSection() {
    return (
        <section className="pb-24 bg-[#F1F7FE] w-full overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="text-center mb-12 mt-8">
                    <h2 className="font-headline font-bold text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
                        Use Your Existing Hardware.
                    </h2>
                    <p className="font-body text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed font-normal">
                        Our software is designed for maximum compatibility, letting you use hardware you already own. We support any screen, any size, any orientation.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {hardware.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:shadow-md group"
                        >
                            <div className="h-10 w-full relative mb-4 flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto object-contain transition-transform group-hover:scale-110"
                                />
                            </div>
                            <p className="font-headline font-bold text-base text-gray-900 tracking-tight">{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}


