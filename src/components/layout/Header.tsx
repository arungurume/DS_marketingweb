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
  { href: '/', label: 'Free Signage' },
  { href: '/menu-boards', label: 'Menu Boards' },
  { href: '/amazon-stick', label: 'Amazon Stick' },
  { href: '/pricing', label: '$5/ Screen' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About Us' },
];


export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-xl">
      <div className="w-full px-6 md:px-12 flex h-20 items-center justify-between">
        <Logo />

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-8">
          <nav className="hidden xl:flex items-center gap-1 mr-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2.5 text-[15px] font-bold tracking-tight transition-all duration-300 rounded-full group',
                  pathname === link.href
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                )}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={cn(
                  "absolute inset-0 bg-gray-100/80 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  pathname === link.href
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                )} />
              </Link>
            ))}

          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="hidden sm:flex border-gray-200 text-black font-bold h-11 px-6 rounded-xl transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98]">
              <Link href="#">Book Demo</Link>
            </Button>
            <Button asChild className="bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold h-11 px-6 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Link href="#">Start Free</Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Logo className="mb-8" />
                <div className="flex flex-col gap-4">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-bold',
                        pathname === link.href ? 'text-[#00AEEF]' : 'hover:text-[#00AEEF]'
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
      </div>

    </header>
  );
}

