'use client';
import { SantanderLogo } from '@/components/icons/SantanderLogo';
import { WhataburgerLogo } from '@/components/icons/WhataburgerLogo';
import { ChickFilALogo } from '@/components/icons/ChickFilALogo';
import { HeyTeaLogo } from '@/components/icons/HeyTeaLogo';
import { NikeLogo } from '@/components/icons/NikeLogo';
import { CostaCoffeeLogo } from '@/components/icons/CostaCoffeeLogo';

const brands = [
    { name: 'Santander', icon: SantanderLogo },
    { name: 'Whataburger', icon: WhataburgerLogo },
    { name: 'Chick-fil-A', icon: ChickFilALogo },
    { name: 'HeyTea', icon: HeyTeaLogo },
    { name: 'Nike', icon: NikeLogo },
    { name: 'Costa Coffee', icon: CostaCoffeeLogo },
];

export function BrandsSection() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold">Brands Leading the Way with Digital Signage</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Leading global brands across retail, cafe, and restaurants use digital signage to modernize their communication, and drive in-store revenue.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
                    {brands.map(brand => (
                        <div key={brand.name} className="flex justify-center">
                            <brand.icon className="h-8 md:h-10 w-auto text-muted-foreground" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
