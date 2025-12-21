import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { SITE_NAME } from '@/lib/constants';

const socialLinks = [
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
  { icon: Github, href: '#', 'aria-label': 'Github' },
  { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
];

const footerLinks = {
  Product: [
    { label: 'Free Signage', href: '/free-digital-signage/' },
    { label: 'Amazon Stick CMS', href: '/amazon-signage-stick-cms/' },
    { label: 'Menu Boards', href: '/qsr-menuboard/' },
    { label: 'Pricing', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '/about-us-ds/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact Us', href: '#' },
  ],
  Legal: [
    { label: 'Terms and Conditions', href: '/terms-and-conditions/' },
    { label: 'Privacy Policy', href: '/privacy-policy/' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-4 lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The easiest way to power your screens.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-headline font-semibold tracking-wide text-foreground">
                {title}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                aria-label={link['aria-label']}
                className="text-muted-foreground hover:text-foreground transition-colors"
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
