'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about-us-ds/', label: 'About Us' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [hoveredPill, setHoveredPill] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const linkRefs = useRef<(HTMLAnchorElement | HTMLSpanElement | null)[]>([]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const calculatePillPosition = (element: HTMLElement) => {
    if (!navRef.current) return { width: 0, left: 0 };
    const navRect = navRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return {
      width: elementRect.width,
      left: elementRect.left - navRect.left,
    };
  };

  const handleMouseEnter = (index: number) => {
    const linkElement = linkRefs.current[index];
    if (linkElement) {
      const { width, left } = calculatePillPosition(linkElement);
      setHoveredPill({ width, left, opacity: 1 });
    }
  };

  const handleMouseLeave = () => {
    const activeLinkIndex = navLinks.findIndex((link) => pathname.startsWith(link.href) && link.href !== '/');
    if (activeLinkIndex !== -1) {
      const activeLinkElement = linkRefs.current[activeLinkIndex];
      if (activeLinkElement) {
        const { width, left } = calculatePillPosition(activeLinkElement);
        setHoveredPill({ width, left, opacity: 1 });
      }
    } else {
      setHoveredPill({ width: 0, left: 0, opacity: 0 });
    }
  };

  useEffect(() => {
    handleMouseLeave(); // Set initial position on mount/path change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav
            ref={navRef}
            className="relative hidden md:flex md:gap-1"
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="absolute h-full rounded-full bg-secondary transition-all duration-300 ease-out"
              style={{
                width: `${hoveredPill.width}px`,
                transform: `translateX(${hoveredPill.left}px)`,
                opacity: hoveredPill.opacity,
                top: 0,
                left: 0,
              }}
            />
            {navLinks.map((link, index) =>
              link.subLinks ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <span
                      ref={(el) => (linkRefs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      className="nav-link flex items-center cursor-pointer text-sm text-foreground/80 data-[state=open]:text-foreground z-10"
                    >
                      {link.label}
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.subLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.href} asChild>
                        <Link
                          href={subLink.href}
                          className={cn(
                            'text-foreground/80',
                            pathname === subLink.href &&
                              'font-semibold text-primary'
                          )}
                        >
                          {subLink.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  ref={(el) => (linkRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  href={link.href}
                  className={cn(
                    'nav-link text-sm text-foreground/80 z-10',
                    pathname === link.href && 'text-foreground font-semibold'
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
                <SheetHeader className="sr-only">
                  <SheetTitle>Mobile Menu</SheetTitle>
                  <SheetDescription>
                    Navigation links for DigitalSigns.ai
                  </SheetDescription>
                </SheetHeader>
                <div className="p-4">
                  <Logo />
                  <div className="mt-8 flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <div key={link.label}>
                        {link.subLinks ? (
                          <div>
                            <span className="font-semibold text-foreground/80">
                              {link.label}
                            </span>
                            <div className="mt-2 flex flex-col gap-2 pl-4">
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  onClick={closeMobileMenu}
                                  className={cn(
                                    'text-muted-foreground',
                                    pathname === subLink.href &&
                                      'text-primary font-semibold'
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
                              pathname === link.href
                                ? 'text-primary font-semibold'
                                : 'text-muted-foreground'
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
            <Button variant="outline">Book a Demo</Button>
            <Button>Start Free</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
