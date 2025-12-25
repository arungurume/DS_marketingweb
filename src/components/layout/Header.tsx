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
  { href: '#', label: 'Solutions', isMega: true },
  { href: '/pricing', label: '$5/ Screen' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About Us' },
];

const solutionsData = [
  {
    title: 'Hospitality & Food',
    links: [
      { label: 'Quick Service (QSR)', href: '/solutions/qsr' },
      { label: 'Coffee Shops & Cafes', href: '/solutions/cafes' },
      { label: 'Bars & Nightclubs', href: '/solutions/bars' },
      { label: 'Pizzeria Boards', href: '/solutions/pizzerias' },
    ]
  },
  {
    title: 'Retail & Business',
    links: [
      { label: 'Retail Store Displays', href: '/solutions/retail' },
      { label: 'Supermarket Signage', href: '/solutions/supermarkets' },
      { label: 'Corporate HR Boards', href: '/solutions/corporate' },
      { label: 'Healthcare Media', href: '/solutions/healthcare' },
    ]
  }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl">
      <div className="w-full px-6 md:px-12 flex h-20 items-center justify-between">
        <Logo />

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-8">
          <nav className="hidden xl:flex items-center gap-1 mr-4">
            {mainNavLinks.map((link) => (
              <div
                key={link.label}
                className="relative group h-20 flex items-center"
                onMouseEnter={() => link.isMega && setIsMegaOpen(true)}
                onMouseLeave={() => link.isMega && setIsMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2.5 text-[15px] font-bold tracking-tight transition-all duration-300 rounded-full flex items-center gap-1',
                    pathname === link.href || (link.isMega && isMegaOpen)
                      ? 'text-black'
                      : 'text-gray-500 hover:text-black'
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className={cn(
                    "absolute inset-0 bg-gray-100/80 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    pathname === link.href || (link.isMega && isMegaOpen)
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  )} />
                </Link>

                {/* Mega Menu Dropdown */}
                {link.isMega && (
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] w-[900px]",
                    isMegaOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                  )}>
                    <div className="bg-white/95 backdrop-blur-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[32px] overflow-hidden flex">
                      {/* Left: Industry Grid (2/3) */}
                      <div className="flex-1 p-12 grid grid-cols-2 gap-16">
                        {solutionsData.map((category) => (
                          <div key={category.title}>
                            <h4 className="font-headline font-semibold text-gray-900 text-sm tracking-widest uppercase mb-8 pb-3 border-b border-gray-100/50">
                              {category.title}
                            </h4>
                            <ul className="space-y-6">
                              {category.links.map((subLink) => (
                                <li key={subLink.label}>
                                  <Link
                                    href={subLink.href}
                                    className="text-[15px] text-gray-500 hover:text-[#00AEEF] transition-all duration-300 block font-medium group/item flex items-center gap-3 hover:translate-x-1"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-[#00AEEF] transition-colors" />
                                    {subLink.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Right: Solution Spotlight (1/3) */}
                      <div className="w-[320px] bg-gray-50/50 p-12 border-l border-gray-100 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-3 py-1 bg-[#00AEEF]/10 text-[#00AEEF] text-[10px] font-bold tracking-tighter uppercase rounded-full mb-6">
                            Solution Spotlight
                          </span>
                          <h3 className="font-headline font-semibold text-2xl text-black leading-snug mb-4">
                            Industry-Specific Power
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed font-medium">
                            Scalable digital signage designed for your specific business needs. From 1 screen to 1,000.
                          </p>
                        </div>

                        <div className="mt-8">
                          <Link
                            href="/solutions"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#00AEEF] hover:gap-3 transition-all duration-300"
                          >
                            Explore All Industries
                            <span className="text-lg">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
              <SheetContent side="left" className="w-[300px] overflow-y-auto">
                <Logo className="mb-8" />
                <div className="flex flex-col gap-6">
                  {mainNavLinks.map((link) => (
                    <div key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => !link.isMega && setIsOpen(false)}
                        className={cn(
                          'text-lg font-bold flex flex-col',
                          pathname === link.href ? 'text-[#00AEEF]' : 'hover:text-[#00AEEF]'
                        )}
                      >
                        {link.label}
                      </Link>
                      {link.isMega && (
                        <div className="mt-4 grid gap-6 pl-4">
                          {solutionsData.map((cat) => (
                            <div key={cat.title}>
                              <h5 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">{cat.title}</h5>
                              <div className="grid gap-2">
                                {cat.links.slice(0, 3).map(l => (
                                  <Link key={l.label} href={l.href} className="text-sm font-semibold text-gray-600">{l.label}</Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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


