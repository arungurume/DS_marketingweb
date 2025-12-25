import Image from 'next/image';

const brands = [
  { name: 'Santander', logo: '/images/brands/santander.svg', width: 120, height: 28 },
  { name: 'Whataburger', logo: '/images/brands/whataburger.svg', width: 120, height: 40 },
  { name: 'Chick-fil-A', logo: '/images/brands/chick-fil-a.svg', width: 140, height: 40 },
  { name: 'Heytea', logo: '/images/brands/heytea.svg', width: 100, height: 40 },
  { name: 'Nike', logo: '/images/brands/nike.svg', width: 80, height: 40 },
  { name: 'Costa Coffee', logo: '/images/brands/costa-coffee.svg', width: 120, height: 40 },
];

export function BrandsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold">
            Brands Leading the Way with Digital Signage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Leading global brands across retail, QSR, and new industries use digital signage to modernize their promotion, and their communication.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={brand.width}
              height={brand.height}
              className="h-8 w-auto object-contain grayscale opacity-60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
