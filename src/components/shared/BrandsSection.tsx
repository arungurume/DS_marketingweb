import Image from 'next/image';

const brands = [
    { name: 'Santander', image: '/images/brands/Santander_logo.png' },
    { name: 'Krispy Kreme', image: '/images/brands/Krispy-Kreme_donut.png' },
    { name: 'Chick-fil-A', image: '/images/brands/Chick-fil-A-Logo.wine.png' },
    { name: 'HeyTea', image: '/images/brands/HEYTEA_logo.png' },
    { name: 'Nike', image: '/images/brands/Nike-Logo.png' },
    { name: 'Costa Coffee', image: '/images/brands/Costa-Coffee.png' },
];


export function BrandsSection() {
    return (
        <section className="py-20 sm:py-24 w-full bg-white overflow-hidden border-t border-gray-50">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline font-semibold text-3xl md:text-[40px] text-gray-900 tracking-tight mb-4">Brands Leading the Way with Digital Signage</h2>
                    <p className="font-body mt-4 text-base md:text-lg text-gray-500 max-w-4xl mx-auto font-normal leading-relaxed">
                        Leading global brands across QSR, café, and retail industries use digital signage to modernize menus, promotions, and in-store communication.
                    </p>
                </div>




                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
                    {brands.map(brand => (
                        <div key={brand.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                            <Image
                                src={brand.image}
                                alt={brand.name}
                                width={120}
                                height={40}
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
