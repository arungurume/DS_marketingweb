import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getSpaBySlug, getAllSpaPageSlugs, getSpasByCity, getAllCities } from '@/lib/spa-locations';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, Globe, Play, Youtube, List, Users, Tv, Zap, Sparkles, Heart, Flower2, Activity, Building2, MapPin } from 'lucide-react';

interface PageProps {
    params: {
        slug: string;
    };
}

// Generate static params for spa pages AND city landing pages
export function generateStaticParams() {
    const spaPages = getAllSpaPageSlugs();
    const cities = getAllCities();
    const cityPages = cities.map(city => ({ slug: city.slug }));

    return [...spaPages, ...cityPages];
}

// Spa categories with all types
const spaCategories = {
    "Core Spa Types": [
        "Spa", "Day Spa", "Resort Spa", "Destination Spa", "Luxury Spa",
        "Urban Spa", "Health Spa"
    ],
    "Wellness & Holistic": [
        "Wellness Center", "Ayurvedic Spa", "Thai Spa", "Balinese Spa",
        "Detox & Healing Retreat", "Yoga & Meditation Center"
    ],
    "Beauty & Aesthetic": [
        "Beauty Spa", "Facial & Skin Clinic", "Nail Spa", "Massage Therapy Center",
        "Hair & Beauty Spa", "Slimming Spa"
    ],
    "Specialty & Experience": [
        "Hammam / Turkish Bath", "Hot Spring Spa", "Hydrotherapy Spa",
        "Sauna Studio", "Salt Cave Spa", "Sound Healing Studio"
    ],
    "Hospitality & Travel": [
        "Hotel Spa", "Cruise Ship Spa", "Airport Spa",
        "Corporate Wellness Spa", "Wellness Resort"
    ]
};

export default async function SpaLocationSlugPage({ params }: PageProps) {
    // Await params in Next.js 15
    const { slug } = await params;

    // Check if slug is a city name (barcelona, paris, london)
    const isCity = !slug.includes('-in-');

    if (isCity) {
        // Render city landing page
        return <CityLandingPage citySlug={slug} />;
    }

    // Render individual spa page (type-in-city format)
    const location = getSpaBySlug(slug);

    if (!location) {
        notFound();
    }

    const whatsappUrl = `https://wa.me/12263360773?text=${encodeURIComponent(location.whatsappPrefillText)}`;

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">

            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-indigo-50/30">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                        <Link href="/" className="hover:text-indigo-700 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <Link href="/spa-digital-signage" className="hover:text-indigo-700 transition-colors">Spa Digital Signage</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <span className="text-indigo-700">{location.city}</span>
                    </div>

                    <span className="inline-block px-3 py-1.5 border border-indigo-200 rounded-full text-xs font-semibold tracking-wider text-indigo-700 uppercase mb-4 bg-indigo-50">
                        {location.city.toUpperCase()} • {location.country.toUpperCase()}
                    </span>

                    <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Digital Signage for {location.businessType} in {location.city}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                        {location.metaDescription}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-indigo-900/10 transition-transform hover:scale-105">
                            <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold h-12 px-6 rounded-xl transition-all"
                        >
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                💬 WhatsApp us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why City Chooses Us */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">
                                Why {location.city} chooses DigitalSigns.ai
                            </h2>
                            <p className="text-gray-500 text-[15px] max-w-3xl">
                                Simple to run, beautiful on screen, and built for teams.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { Icon: Clock, title: "Schedule playlists", desc: "Swap morning, mid-day, and evening ambience automatically." },
                            { Icon: Globe, title: "Multi-location control", desc: `Update all locations in ${location.city} from one dashboard.` },
                            { Icon: Play, title: "Play video & images", desc: "Loop calm visuals, offers, and wellness clips smoothly." },
                            { Icon: Youtube, title: "YouTube support", desc: "Stream playlists or meditative clips easily." },
                            { Icon: List, title: "Unlimited playlists", desc: "Separate screens by room, theme, or service." },
                            { Icon: Users, title: "User roles", desc: "Staff, managers, and admins with role control." },
                            { Icon: Tv, title: "Android / Fire TV", desc: "Works on your existing smart TVs instantly." },
                            { Icon: Zap, title: "Online in minutes", desc: "Pair a screen, publish, and relax." }
                        ].map((feature, i) => (
                            <div key={i} className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center mb-3">
                                    <feature.Icon className="w-5 h-5 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{feature.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Made for City */}
            <section className="py-12 px-6 bg-indigo-50/30">
                <div className="max-w-[1100px] mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Made for {location.city}'s wellness scene</h2>
                    <p className="text-gray-700 leading-relaxed max-w-3xl">
                        {location.benefitText}
                    </p>
                </div>
            </section>

            {/* All Spa Types */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">
                            Digital signage for every kind of spa in {location.city}
                        </h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">
                            From relaxing day spas to luxurious wellness retreats — explore all types below.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(spaCategories).map(([category, types]) => (
                            <div key={category} className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                                        {category === "Core Spa Types" && <Sparkles className="w-4 h-4 text-indigo-600" />}
                                        {category === "Wellness & Holistic" && <Heart className="w-4 h-4 text-indigo-600" />}
                                        {category === "Beauty & Aesthetic" && <Flower2 className="w-4 h-4 text-indigo-600" />}
                                        {category === "Specialty & Experience" && <Activity className="w-4 h-4 text-indigo-600" />}
                                        {category === "Hospitality & Travel" && <Building2 className="w-4 h-4 text-indigo-600" />}
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900">{category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {types.map((type) => {
                                        // Convert type name to slug matching the data
                                        // Handle special cases where '&' should be 'and' vs just '-'
                                        let slug = type.toLowerCase();

                                        // Special cases that use 'and'
                                        if (slug.includes('yoga')) {
                                            // Yoga & Meditation keeps 'and' in the slug
                                            slug = slug.replace(/\s*&\s*/g, '-and-');
                                        } else {
                                            // All other types just remove the '&'
                                            slug = slug.replace(/\s*&\s*/g, '-');
                                        }

                                        slug = slug.replace(/\s*\/\s*/g, '-'); // "Hammam / Turkish" → "hammam-turkish"
                                        slug = slug.replace(/\s+/g, '-'); // remaining spaces → dashes

                                        return (
                                            <li key={type}>
                                                <Link
                                                    href={`/spa-digital-signage/${slug}-in-${location.citySlug}`}
                                                    className="text-indigo-600 hover:text-indigo-700 hover:underline text-sm transition-colors"
                                                >
                                                    {type}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <h2 className="font-headline text-3xl font-bold text-gray-900 text-center mb-12">How it works</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { num: "1", title: "Design", desc: "Use templates or upload your own calming visuals." },
                            { num: "2", title: "Schedule", desc: "Plan ambience and offers by time of day or zone." },
                            { num: "3", title: "Publish", desc: "One click to update every screen across locations." }
                        ].map((step) => (
                            <div key={step.num} className="p-6 border border-gray-100 rounded-[18px] bg-white text-center">
                                <div className="text-4xl font-bold text-indigo-600 mb-3">{step.num} · {step.title}</div>
                                <p className="text-gray-600 text-[15px]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-2">Frequently asked questions — {location.city}</h2>
                        <p className="text-gray-500 text-[15px] max-w-3xl">Common questions about digital signage for {location.businessType.toLowerCase()}s in {location.city}.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{location.faqQ1}</AccordionTrigger>
                                <AccordionContent>{location.faqA1}</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>{location.faqQ2}</AccordionTrigger>
                                <AccordionContent>{location.faqA2}</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>{location.faqQ3}</AccordionTrigger>
                                <AccordionContent>{location.faqA3}</AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            {location.faqQ4 && (
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>{location.faqQ4}</AccordionTrigger>
                                    <AccordionContent>{location.faqA4}</AccordionContent>
                                </AccordionItem>
                            )}
                            {location.faqQ5 && (
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>{location.faqQ5}</AccordionTrigger>
                                    <AccordionContent>{location.faqA5}</AccordionContent>
                                </AccordionItem>
                            )}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-24 pt-12 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-[#0b1220] rounded-[26px] p-10 md:p-14 text-white">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 text-indigo-50">
                                    Ready to transform your {location.city} {location.businessType.toLowerCase()}?
                                </h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Join {location.businessType.toLowerCase()}s across {location.country} using DigitalSigns.ai to create beautiful, engaging displays.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                    <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Start Free Trial</a>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20 transition-transform hover:scale-105"
                                >
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contact on WhatsApp</a>
                                </Button>
                                <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                    <Link href="/spa-digital-signage">Back to Spa Solutions</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

// City Landing Page Component
function CityLandingPage({ citySlug }: { citySlug: string }) {
    const spas = getSpasByCity(citySlug);

    if (!spas || spas.length === 0) {
        notFound();
    }

    const cityInfo = spas[0];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">
            {/* Hero Section */}
            <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-indigo-50/30">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                        <Link href="/" className="hover:text-indigo-700 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <Link href="/spa-digital-signage" className="hover:text-indigo-700 transition-colors">Spa Digital Signage</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <span className="text-indigo-700">{cityInfo.city}</span>
                    </div>

                    <span className="inline-block px-3 py-1.5 border border-indigo-200 rounded-full text-xs font-semibold tracking-wider text-indigo-700 uppercase mb-4 bg-indigo-50">
                        {cityInfo.city.toUpperCase()} • {cityInfo.country.toUpperCase()}
                    </span>

                    <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Spa Digital Signage in {cityInfo.city}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[54ch] mb-8">
                        Premium digital signage solutions for every type of spa and wellness center in {cityInfo.city}. Update content instantly, manage multiple screens, and create beautiful displays.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-indigo-900/10 transition-transform hover:scale-105">
                            <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign up free</a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 font-bold h-12 px-6 rounded-xl transition-all"
                        >
                            <Link href="/spa-digital-signage">View All Cities</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* All Spa Types Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="mb-12 text-center">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <MapPin className="w-6 h-6 text-indigo-600" />
                            <h2 className="font-headline text-3xl font-bold text-gray-900">
                                All Spa Types in {cityInfo.city}
                            </h2>
                        </div>
                        <p className="text-gray-500 text-[15px] max-w-3xl mx-auto">
                            Choose your spa type below to see tailored digital signage solutions for {cityInfo.city}.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(spaCategories).map(([category, types]) => (
                            <div key={category} className="p-6 border border-gray-100 rounded-[18px] bg-white shadow-[0_1px_0_rgba(11,18,32,0.02)] hover:border-indigo-100 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                                        {category === "Core Spa Types" && <Sparkles className="w-4 h-4 text-indigo-600" />}
                                        {category === "Wellness & Holistic" && <Heart className="w-4 h-4 text-indigo-600" />}
                                        {category === "Beauty & Aesthetic" && <Flower2 className="w-4 h-4 text-indigo-600" />}
                                        {category === "Specialty & Experience" && <Activity className="w-4 h-4 text-indigo-600" />}
                                        {category === "Hospitality & Travel" && <Building2 className="w-4 h-4 text-indigo-600" />}
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900">{category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {types.map((type) => {
                                        let slug = type.toLowerCase();
                                        if (slug.includes('yoga')) {
                                            slug = slug.replace(/\s*&\s*/g, '-and-');
                                        } else {
                                            slug = slug.replace(/\s*&\s*/g, '-');
                                        }
                                        slug = slug.replace(/\s*\/\s*/g, '-');
                                        slug = slug.replace(/\s+/g, '-');

                                        return (
                                            <li key={type}>
                                                <Link
                                                    href={`/spa-digital-signage/${slug}-in-${citySlug}`}
                                                    className="text-indigo-600 hover:text-indigo-700 hover:underline text-sm transition-colors flex items-center gap-2 group"
                                                >
                                                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                                    {type}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-indigo-50/30">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-indigo-600 mb-2">{spas.length}</div>
                            <div className="text-gray-600">Spa Solutions Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-600 mb-2">5</div>
                            <div className="text-gray-600">Major Categories</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-600 mb-2">∞</div>
                            <div className="text-gray-600">Customization Options</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="bg-[#0b1220] rounded-[26px] p-10 md:p-14 text-white text-center">
                        <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 text-indigo-50">
                            Ready to transform your {cityInfo.city} spa?
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                            Choose your spa type above to see how digital signage can enhance your customer experience and boost your business.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-11 px-6 rounded-xl border border-transparent transition-transform hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Start Free Trial</a>
                            </Button>
                            <Button asChild variant="ghost" className="text-white hover:bg-white/10 font-bold h-11 px-6 rounded-xl border border-white/20">
                                <Link href="/spa-digital-signage">Explore Other Cities</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
