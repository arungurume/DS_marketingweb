'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
    Product: [
        { title: 'Free Signage', href: '/free-digital-signage' },
        { title: 'Amazon Fire TV', href: '/amazon-signage-stick-cms' },
        { title: 'Pricing', href: '/pricing' },
    ],
    Company: [
        { title: 'About Us', href: '/about-us-ds' },
        { title: 'Blog', href: '/blog' },
        { title: 'Contact', href: '#' },
    ],
    Resources: [
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
    <footer className="bg-background/95 border-t py-12 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
                <Logo />
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                    <h3 className="font-semibold text-foreground">{title}</h3>
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
