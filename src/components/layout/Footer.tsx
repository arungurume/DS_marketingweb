import Link from 'next/link';
import { Linkedin, Instagram, Phone, Mail } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { SITE_NAME } from '@/lib/constants';

const socialLinks = [
  { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
  { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
];

const footerLinks = {
  'Main Menu': [
    { label: 'About Us', href: '/about-us-ds/' },
    { label: 'Services', href: '#' },
    { label: 'Pages', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Solutions: [
    { label: 'Pizza Shop', href: '/pizza-menuboard/' },
    { label: 'Coffee Shop', href: '/cafe-menuboard/' },
    { label: 'Burger Shop', href: '/burger-menuboard/' },
    { label: 'Cannabis', href: '/cannabis-dispensary-menu/' },
    { label: 'QSR Shop', href: '/qsr-menuboard/' },
  ],
  Resources: [
    { label: 'Knowledge Base', href: '#' },
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions/' },
    { label: 'Video guide', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-4 lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Free Digital Signage CMS by DS - your complete solution for managing screens, boosting brand visibility, and driving sales with ease.
            </p>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:connect@digitalsigns.ai" className="hover:text-foreground">connect@digitalsigns.ai</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (226) 336-0773</span>
            </div>
             <div className="flex space-x-4 mt-4">
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
        </div>
      </div>
    </footer>
  );
}
