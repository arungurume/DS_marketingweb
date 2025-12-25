'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
    Product: [
        { title: 'Free Signage', href: '/free-digital-signage' },
        { title: 'Hardware', href: '/hardware' },
        { title: 'Software', href: '/software' },
        { title: 'Services', href: '/services' },
        { title: 'Pricing', href: '/pricing' },
    ],
    Company: [
        { title: 'About Us', href: '/about-us' },
        { title: 'Blog', href: '/blog' },
        { title: 'Contact', href: '/contact' },
    ],
    Support: [
        { title: 'Help Center', href: '#' },
        { title: 'Privacy Policy', href: '/privacy-policy' },
        { title: 'Terms', href: '/terms-and-conditions' },
    ],
    Solutions: [
        { title: 'Pizza Shop', href: '/pizza-menuboard' },
        { title: 'Coffee Shop', href: '/cafe-menuboard' },
        { title: 'Burger Shop', href: '/burger-menuboard' },
        { title: 'QSR', href: '/qsr-menuboard' },
        { title: 'Dispensary', href: '/cannabis-dispensary-menu' },
    ]
}


const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                    <div className="col-span-2 md:col-span-1">
                        <Logo />
                        <p className="mt-6 text-[15px] text-gray-500 max-w-[280px] leading-relaxed font-normal">
                            Free Digital Signage CMS by DS – your complete solution for managing screens, boosting brand visibility, and driving sales with ease.
                        </p>

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
