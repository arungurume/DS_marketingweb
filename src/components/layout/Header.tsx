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
  { href: '#', label: 'Players', isDropdown: true },
  { href: '/free-digital-signage', label: 'Free Digital Signage' },
  { href: '/amazon-signage-stick', label: 'Amazon Signage Stick' },
  { href: '#', label: 'Solutions', isMega: true },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About Us' },
];

const solutionsData = [
  {
    title: 'Food & Hospitality',
    links: [
      { label: 'Quick Service (QSR)', href: '/solutions/food-hospitality/qsr' },
      { label: 'Fine Dining', href: '/solutions/food-hospitality/fine-dining' },
      { label: 'Casual Dining', href: '/solutions/food-hospitality/casual-dining' },
      { label: 'Bars & Nightclubs', href: '/solutions/food-hospitality/bars-nightclubs' },
      { label: 'Pizzerias', href: '/solutions/food-hospitality/pizzerias' },
      { label: 'Food Trucks', href: '/solutions/food-hospitality/food-trucks' },
      { label: 'Coffee Shops & Cafes', href: '/solutions/food-hospitality/coffee-shops-cafes' },
      { label: 'Spas & Wellness Centers', href: '/spa-digital-signage' },
    ]
  },
  {
    title: 'Retail & Commerce',
    links: [
      { label: 'Retail Store Displays', href: '/solutions/retail/stores' },
      { label: 'Supermarket Signage', href: '/solutions/retail/supermarkets' },
      { label: 'Shopping Malls', href: '/solutions/retail/shopping-malls' },
      { label: 'Real Estate Displays', href: '/solutions/retail/real-estate' },
      { label: 'Pharmacy Solutions', href: '/solutions/retail/pharmacies' },
      { label: 'Auto Dealerships', href: '/solutions/retail/auto-dealerships' },
    ]
  },
  {
    title: 'Corporate & Finance',
    links: [
      { label: 'Corporate Offices', href: '/solutions/corporate-finance/offices' },
      { label: 'Meeting Rooms', href: '/solutions/corporate-finance/meeting-rooms' },
      { label: 'Banks & Finance', href: '/solutions/corporate-finance/banks' },
      { label: 'Warehouse & Logistics', href: '/solutions/corporate-finance/warehouses' },
      { label: 'Clinics & Healthcare', href: '/solutions/corporate-finance/clinics' },
      { label: 'Manufacturing Floors', href: '/solutions/corporate-finance/manufacturing' },
    ]
  },
  {
    title: 'Education & Public',
    links: [
      { label: 'K-12 Schools', href: '/solutions/education-public/k12' },
      { label: 'Universities', href: '/solutions/education-public/universities' },
      { label: 'Government Agencies', href: '/solutions/education-public/government' },
      { label: 'Museums & Galleries', href: '/solutions/education-public/museums' },
      { label: 'Events & Arenas', href: '/solutions/education-public/events-arenas' },
      { label: 'Community Centers', href: '/solutions/education-public/community-centers' },
    ]
  },
  {
    title: 'Cannabis Industry',
    links: [
      { label: 'Dispensary Menus', href: '/solutions/cannabis/dispensaries' },
      { label: 'Growth Facilities', href: '/solutions/cannabis/growth-facilities' },
      { label: 'Processing Plants', href: '/solutions/cannabis/processing' },
      { label: 'Delivery Services', href: '/solutions/cannabis/delivery' },
    ]
  }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                onMouseEnter={() => {
                  if (link.isMega) setIsMegaOpen(true);
                  if (link.isDropdown) setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.isMega) setIsMegaOpen(false);
                  if (link.isDropdown) setIsDropdownOpen(false);
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2.5 text-[15px] font-medium tracking-tight transition-all duration-300 rounded-full flex items-center gap-1',
                    pathname === link.href || (link.isMega && isMegaOpen) || (link.isDropdown && isDropdownOpen)
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className={cn(
                    "absolute inset-0 bg-gray-100/80 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    pathname === link.href || (link.isMega && isMegaOpen) || (link.isDropdown && isDropdownOpen)
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  )} />
                </Link>

                {/* Dropdown for Players */}
                {link.isDropdown && (
                  <div className={cn(
                    "absolute top-[calc(100%-5px)] left-0 w-[260px] bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden transition-all duration-300",
                    isDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  )}>
                    <div className="p-2 space-y-1">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.dshub.signage&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-[#2B7CD3] transition-colors"
                      >
                        Google TV / Android TV
                      </a>
                      <a
                        href="https://www.amazon.com.br/DS-DSPlayer-Digitalsigns-ai/dp/B0F7Y9Q598"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-[#2B7CD3] transition-colors"
                      >
                        Amazon Fire TV
                      </a>
                    </div>
                  </div>
                )}

                {/* Mega Menu Dropdown */}
                {link.isMega && (
                  <div className={cn(
                    "fixed top-[80px] left-1/2 -translate-x-1/2 w-full max-w-[1340px] px-6 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    isMegaOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  )}>
                    <div className="bg-white/95 backdrop-blur-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[32px] overflow-hidden flex">
                      {/* Left: Industry Grid (1 row) */}
                      <div className="flex-1 p-10 grid grid-cols-5 gap-6">
                        {solutionsData.map((category) => (
                          <div key={category.title}>
                            <h4 className="font-headline font-medium text-gray-900 text-xs tracking-widest uppercase mb-5 pb-3 border-b border-gray-100/50">
                              {category.title}
                            </h4>
                            <ul className="space-y-3.5">
                              {category.links.map((subLink) => (
                                <li key={subLink.label}>
                                  <Link
                                    href={subLink.href}
                                    className="text-[15px] text-gray-500 hover:text-[#2B7CD3] transition-all duration-300 block font-medium group/item flex items-center gap-3 hover:translate-x-1 whitespace-nowrap"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-[#2B7CD3] transition-colors shrink-0" />
                                    {subLink.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Right: Solution Spotlight (1/3) */}
                      <div className="w-[360px] bg-gray-50/50 p-10 border-l border-gray-100 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-3 py-1 bg-[#2B7CD3]/10 text-[#2B7CD3] text-[10px] font-medium tracking-tighter uppercase rounded-full mb-4">
                            Solution Spotlight
                          </span>
                          <h3 className="font-headline font-medium text-2xl text-black leading-snug mb-4">
                            Industry-Specific Power
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed font-medium">
                            Scalable digital signage designed for your specific business needs. From 1 screen to 1,000.
                          </p>
                        </div>

                        <div className="mt-8">
                          <Link
                            href="/solutions"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#2B7CD3] hover:gap-3 transition-all duration-300"
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
            <Button asChild variant="outline" className="hidden sm:flex border-gray-200 text-black hover:text-black font-bold h-11 px-6 rounded-xl transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98]">
              <a href="https://hub.digitalsigns.ai/">Login</a>
            </Button>
            <Button asChild className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-11 px-6 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]">
              <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
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
                        onClick={() => !link.isMega && !link.isDropdown && setIsOpen(false)}
                        className={cn(
                          'text-lg font-medium flex flex-col',
                          pathname === link.href ? 'text-[#2B7CD3]' : 'hover:text-[#2B7CD3]'
                        )}
                      >
                        {link.label}
                      </Link>
                      {link.isMega && (
                        <div className="mt-4 grid gap-6 pl-4">
                          {solutionsData.map((cat) => (
                            <div key={cat.title}>
                              <h5 className="text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-2">{cat.title}</h5>
                              <div className="grid gap-2">
                                {cat.links.slice(0, 3).map(l => (
                                  <Link key={l.label} href={l.href} className="text-sm font-medium text-gray-600">{l.label}</Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col gap-4">
                    <Button asChild variant="outline" className="w-full font-bold h-12 rounded-xl text-black hover:text-black hover:bg-gray-50">
                      <a href="https://hub.digitalsigns.ai/">Login</a>
                    </Button>
                    <Button asChild className="w-full bg-[#2B7CD3] text-white font-bold h-12 rounded-xl">
                      <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}


