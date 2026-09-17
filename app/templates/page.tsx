import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE_NAME } from '@/lib/constants';
import { Layout, Utensils, ShoppingBag, Briefcase, Sparkles } from 'lucide-react';
import { TemplateGallery } from '@/components/shared/TemplateGallery';
import { getAllTemplates } from '@/lib/templates';

export const metadata: Metadata = {
    title: 'Digital Signage Templates | Professional Layouts for Any Screen',
    description: 'Boost your brand with ready-to-use digital signage templates for QSR, retail, corporate, and more — free and credit-based. Save one to your own Canva account, customize, and publish to your screens.',
};

const categories = [
    {
        title: 'Restaurant & QSR',
        description: 'Dynamic menu boards, daily specials, and mouth-watering food displays.',
        icon: Utensils,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        title: 'Retail & Fashion',
        description: 'Product showcases, seasonal sales, and interactive storefront displays.',
        icon: ShoppingBag,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Corporate & Office',
        description: 'Internal communications, meeting room schedules, and company news.',
        icon: Briefcase,
        color: 'bg-indigo-100 text-indigo-600',
    },
    {
        title: 'Custom Layouts',
        description: 'Flexible grid systems and multi-zone layouts for complex viewing needs.',
        icon: Layout,
        color: 'bg-purple-100 text-purple-600',
    },
];

// Cross-links to our vertical/solution pages — topical internal linking for SEO.
const industries = [
    { title: 'Restaurants & Cafés', desc: 'Menu boards, daily specials, and promos.', href: '/solutions/food-hospitality', icon: Utensils, color: 'bg-orange-100 text-orange-600' },
    { title: 'Retail & Stores', desc: 'Product highlights, sales, and window displays.', href: '/solutions/retail', icon: ShoppingBag, color: 'bg-blue-100 text-blue-600' },
    { title: 'Offices & Corporate', desc: 'Announcements, KPIs, and meeting-room screens.', href: '/solutions/corporate-finance', icon: Briefcase, color: 'bg-indigo-100 text-indigo-600' },
    { title: 'Schools & Public', desc: 'Events, alerts, and daily bulletins.', href: '/solutions/education-public', icon: Layout, color: 'bg-purple-100 text-purple-600' },
];

const faqs = [
    { q: 'Are the digital signage templates free?', a: 'Both — our library has free templates and credit-based ones. Free templates cost nothing to use; paid templates unlock with credits. Every template shows its price on its card.' },
    { q: 'Do I need design skills to use them?', a: 'No. Each template saves straight to your own Canva account, so you edit it with Canva’s drag-and-drop tools — swap text, colors, logos, and images, no designer needed.' },
    { q: 'How do I use a template on my screens?', a: 'Pick a template, save it to your Canva, customize it, then publish it to any screen from your DigitalSigns.ai dashboard — Fire TV, Android TV, or any browser-based display.' },
    { q: 'Do the templates come in horizontal and vertical layouts?', a: 'Yes. Filter by orientation — horizontal (landscape) for standard TVs and vertical (portrait) for standing displays and posters.' },
    { q: 'Can I edit a template in Canva?', a: 'Yes. Our templates are built on Canva. When you get a template it is saved to your Canva account, so you can fully customize it and reuse it anytime.' },
    { q: 'What screens and hardware do they work on?', a: 'Any screen. DigitalSigns.ai runs on hardware you already own — Amazon Fire TV Stick, Android TV, the Amazon Signage Stick, or any device with a web browser.' },
];

export default async function TemplatesPage() {
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };
    const templates = await getAllTemplates();
    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {/* Hero Section */}
            <section className="bg-white pt-20 pb-8 md:pt-28 md:pb-10 overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700 tracking-tight">Canva Templates</span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Professional Digital <br />
                            <span className="text-blue-600">Signage Templates</span>
                        </h1>
                        <p className="font-body text-xl text-gray-500 leading-relaxed mx-auto">
                            Ready-to-use templates for menus, promos, and announcements. Save one to your own Canva, then customize and publish to your screens.
                        </p>
                    </div>
                </div>
            </section>

            {/* Template Gallery Section */}
            <section className="pb-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    {templates.length > 0 ? (
                        <TemplateGallery templates={templates} />
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {categories.map((category, index) => (
                                <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                                    <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* How it works — keyword-rich content */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight text-center mb-4">
                        How our digital signage templates work
                    </h2>
                    <p className="text-gray-500 text-lg text-center max-w-3xl mx-auto mb-14">
                        From template to live screen in three steps — no design skills required.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { n: '1', t: 'Pick a template', d: 'Browse free and credit-based digital signage templates for menus, promos, and announcements. Filter by horizontal or vertical layout.' },
                            { n: '2', t: 'Customize in Canva', d: 'Every template saves straight to your own Canva account. Edit text, colors, logos, and images with Canva’s drag-and-drop editor.' },
                            { n: '3', t: 'Publish to your screens', d: 'Push your design live from the DigitalSigns.ai dashboard to any Fire TV, Android TV, or browser-based screen in seconds.' },
                        ].map((s) => (
                            <div key={s.n} className="p-8 rounded-2xl bg-white border border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-5">{s.n}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.t}</h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates by industry — internal linking to solution pages */}
            <section className="py-20 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight text-center mb-4">
                        Digital signage templates by industry
                    </h2>
                    <p className="text-gray-500 text-lg text-center max-w-3xl mx-auto mb-14">
                        Find layouts built for how your business uses its screens.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((it) => (
                            <Link
                                key={it.title}
                                href={it.href}
                                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl ${it.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <it.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{it.title}</h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed mb-3">{it.desc}</p>
                                <span className="text-sm font-semibold text-blue-600 group-hover:underline">Explore →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ (+ FAQPage schema above) */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight text-center mb-12">
                        Digital signage templates FAQ
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <details key={i} className="group rounded-2xl bg-white border border-gray-100 p-6">
                                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-gray-900">
                                    {f.q}
                                    <span className="ml-4 text-blue-600 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24 pt-4 bg-slate-50">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="p-12 rounded-3xl bg-blue-600 relative overflow-hidden text-center text-white">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to upgrade your screens?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                                Browse our Canva templates — free and credit-based — and save the ones you love straight to your Canva to customize and publish.
                            </p>
                            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 h-14 px-10 text-lg font-medium rounded-xl transition-all hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/templates">Sign Up Free</a>
                            </Button>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
