'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

const mainNavLinks = [
  { href: '/free-digital-signage', label: 'Free Signage' },
  { href: '/amazon-signage-stick-cms', label: 'Amazon Stick' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us-ds', label: 'About Us' },
  { href: '/pricing', label: 'Pricing' },
];

const menuBoardLinks = [
    { href: '/pizza-menuboard', label: 'Pizza Menu Boards' },
    { href: '/cafe-menuboard', label: 'Cafe Menu Boards' },
    { href: '/burger-menuboard', label: 'Burger Menu Boards' },
    { href: '/qsr-menuboard', label: 'QSR Menu Boards' },
    { href: '/cannabis-dispensary-menu', label: 'Cannabis Menu Boards' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Logo />

        <nav className="hidden md:flex items-center ml-8 gap-1">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'nav-link text-sm font-medium',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
                <Link href="#">Log in</Link>
            </Button>
          <Button asChild>
            <Link href="#">Start Free</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Logo />
              <div className="mt-8 flex flex-col gap-4">
                {[...mainNavLinks, ...menuBoardLinks].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium',
                      pathname === link.href ? 'text-primary' : 'hover:text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
