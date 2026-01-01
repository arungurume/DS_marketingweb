'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
    'Digital Signage': [
        { title: 'Free Digital Signage', href: '/free-digital-signage' },
        { title: 'Templates', href: '/templates' },
        { title: 'Amazon Signage Stick', href: '/amazon-signage-stick' },
    ],
    Company: [
        { title: 'About Us', href: '/about-us' },
        { title: 'Blog', href: '/blog' },
        { title: 'Knowledge Base', href: 'https://kb.digitalsigns.ai/' },
        { title: 'Contact Support', href: 'https://kb.digitalsigns.ai/' },
    ],
    Legal: [
        { title: 'GDPR Overview', href: '/gdpr' },
        { title: 'Privacy Policy', href: '/privacy-policy' },
        { title: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
    Solutions: [
        { title: 'Pizza Shop', href: '/solutions/food-hospitality/pizzerias' },
        { title: 'Coffee Shop', href: '/solutions/food-hospitality/coffee-shops-cafes' },
        { title: 'Restaurant', href: '/solutions/food-hospitality/fine-dining' },
        { title: 'QSR', href: '/solutions/food-hospitality/qsr' },
        { title: 'Dispensary', href: '/solutions/cannabis/dispensaries' },
    ],
    Alternatives: [
        { title: 'ScreenCloud Alternative', href: '/alternatives/screencloud' },
        { title: 'Yodeck Alternative', href: '/alternatives/yodeck' },
        { title: 'OptiSigns Alternative', href: '/alternatives/optisigns' },
        { title: 'NoviSign Alternative', href: '/alternatives/novisign' },
        { title: 'Rise Vision Alternative', href: '/alternatives/rise-vision' },
        { title: 'View all alternatives →', href: '/alternatives' },
    ]
}


const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/digitalsignsai/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/digitalsignsai/' },
    { name: 'Youtube', icon: Youtube, href: 'https://www.youtube.com/@DigitalSigns.ai' },
]

export function Footer() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-50 py-24 w-full overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Logo />
                        <p className="mt-6 text-[15px] text-gray-500 max-w-[280px] leading-relaxed font-normal">
                            Free Digital Signage CMS by DS – your complete solution for managing screens, boosting brand visibility, and driving sales with ease.
                        </p>
                        <div className="mt-6 flex flex-col gap-2">
                            <p className="text-sm font-bold text-black">Support</p>
                            <a href="https://wa.me/12263360773" className="flex items-center gap-2 text-[14px] text-gray-500 hover:text-[#2B7CD3] transition-colors">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                +1 (226) 336-0773
                            </a>
                        </div>

                    </div>
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-bold text-black text-base">{title}</h3>

                            <ul className="mt-4 space-y-3">
                                {links.map(link => (
                                    <li key={link.title}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-sm text-muted-foreground order-2 sm:order-1 mt-4 sm:mt-0">
                        &copy; {isClient ? currentYear : ''} DigitalSigns.ai. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 order-1 sm:order-2">
                        {socialLinks.map(link => (
                            <Button key={link.name} variant="ghost" size="icon" asChild>
                                <Link href={link.href} aria-label={link.name}>
                                    <link.icon className="h-5 w-5 text-muted-foreground" />
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
