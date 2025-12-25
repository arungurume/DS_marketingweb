'use client';
import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { SITE_NAME } from '@/lib/constants';
import { useEffect, useState } from 'react';

const socialLinks = [
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
  { icon: Facebook, href: '#', 'aria-label': 'Facebook' },
  { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
  { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Free Signage', href: '/free-digital-signage/' },
      { label: 'Menu Boards', href: '#' },
      { label: 'Amazon Stick', href: '/amazon-signage-stick-cms/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
  {
    title: 'Company',
    links: [
        { label: 'About Us', href: '/about-us-ds/' },
        { label: 'Blog', href: '/blog/' },
        { label: 'Contact Us', href: '#' },
    ]
  },
  {
    title: 'Resources',
    links: [
        { label: 'Help Center', href: '#' },
        { label: 'Privacy Policy', href: '/privacy-policy/' },
        { label: 'Terms', href: '/terms-and-conditions/' },
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Pizza Shop', href: '/pizza-menuboard/' },
      { label: 'Coffee Shop', href: '/cafe-menuboard/' },
      { label: 'Burger Shop', href: '/burger-menuboard/' },
      { label: 'Dispensary', href: '/cannabis-dispensary-menu/' },
      { label: 'QSR', href: '/qsr-menuboard/' },
    ],
  },
];

export function Footer() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
                <Logo />
                 <p className="text-sm text-muted-foreground mt-4">
                    Free Digital Signage CMS by DS – your complete solution for managing screens, boosting brand visibility, and driving sales with ease.
                 </p>
            </div>
            {footerLinks.map((section) => (
                <div key={section.title}>
                <h3 className="font-headline font-semibold tracking-wide text-foreground">
                    {section.title}
                </h3>
                <ul className="mt-4 space-y-2">
                    {section.links.map((link) => (
                    <li key={link.label}>
                        <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                        {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {isClient ? new Date().getFullYear() : '2024'} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
                <Link
                    key={link['aria-label']}
                    href={link.href}
                    aria-label={link['aria-label']}
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <link.icon className="h-5 w-5" />
                </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
