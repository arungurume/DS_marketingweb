'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Tv2 } from 'lucide-react';
import { useState } from 'react';

import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/free-digital-signage/', label: 'Free Signage' },
  {
    href: '#',
    label: 'Menu Boards',
    subLinks: [
      { href: '/pizza-menuboard/', label: 'Pizza' },
      { href: '/cafe-menuboard/', label: 'Cafe' },
      { href: '/burger-menuboard/', label: 'Burger' },
      { href: '/cannabis-dispensary-menu/', label: 'Cannabis' },
      { href: '/qsr-menuboard/', label: 'QSR' },
    ],
  },
  { href: '/amazon-signage-stick-cms/', label: 'Amazon Stick' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about-us-ds/', label: 'About Us' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex md:gap-6">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.label} className="relative group">
                  <span className="flex items-center cursor-pointer text-foreground/60 transition-colors hover:text-foreground/80">
                    {link.label}
                  </span>
                  <div className="absolute hidden group-hover:block pt-2">
                    <div className="bg-background border rounded-md shadow-lg py-2 w-48">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className={cn(
                            'block px-4 py-2 text-sm text-foreground/80 hover:bg-accent/50',
                            pathname === subLink.href && 'font-semibold text-primary'
                          )}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-foreground/60 transition-colors hover:text-foreground/80',
                    pathname === link.href && 'text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Logo />
                  <div className="mt-8 flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <div key={link.label}>
                        {link.subLinks ? (
                          <div>
                            <span className="font-semibold text-foreground/80">{link.label}</span>
                            <div className="mt-2 flex flex-col gap-2 pl-4">
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  onClick={closeMobileMenu}
                                  className={cn(
                                    'text-muted-foreground',
                                    pathname === subLink.href && 'text-primary font-semibold'
                                  )}
                                >
                                  {subLink.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={closeMobileMenu}
                            className={cn(
                              'text-lg',
                              pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                            )}
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex items-center gap-2 ml-6">
            <Button variant="outline">Book Demo</Button>
            <Button>Start Free</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
