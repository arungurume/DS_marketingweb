import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    getAllTemplates,
    templateSlug,
    idFromSlug,
    templateThumb,
    isHorizontal,
    priceLabel,
    HUB_TEMPLATE_URL,
    type Template,
} from '@/lib/templates';
import { SITE_URL } from '@/lib/constants';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
    const templates = await getAllTemplates();
    return templates.map((t) => ({ slug: templateSlug(t) }));
}

async function getTemplateBySlug(slug: string): Promise<Template | null> {
    const id = idFromSlug(slug);
    if (id == null) return null;
    const templates = await getAllTemplates();
    return templates.find((t) => t.id === id) || null;
}

function describe(t: Template): string {
    return (
        t.description ||
        `Use the ${t.title} digital signage template on DigitalSigns.ai — save it straight to your own Canva, then customize and publish it to your screens.`
    );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const t = await getTemplateBySlug(params.slug);
    if (!t) return { title: 'Template not found | DigitalSigns.ai' };

    const title = `${t.title} — Digital Signage Template`;
    const description = describe(t).slice(0, 160);
    const image = templateThumb(t);
    const url = `${SITE_URL}/templates/${params.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'website',
            images: image ? [{ url: image, alt: `${t.title} digital signage template` }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: image ? [image] : [],
        },
    };
}

export default async function TemplateDetailPage({ params }: Props) {
    const t = await getTemplateBySlug(params.slug);
    if (!t) notFound();

    const templates = await getAllTemplates();
    const thumb = templateThumb(t);
    const horizontal = isHorizontal(t);
    const related = templates
        .filter((x) => x.id !== t.id && isHorizontal(x) === horizontal)
        .slice(0, 4);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: t.title,
        image: thumb ? [thumb] : [],
        description: describe(t),
        brand: { '@type': 'Brand', name: 'DigitalSigns.ai' },
        category: 'Digital Signage Template',
        offers: {
            '@type': 'Offer',
            price: t.creditCost ?? 0,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/templates/${params.slug}`,
        },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Templates', item: `${SITE_URL}/templates` },
            { '@type': 'ListItem', position: 2, name: t.title, item: `${SITE_URL}/templates/${params.slug}` },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <section className="pt-24 md:pt-28 pb-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    <nav className="text-sm text-gray-400 mb-8">
                        <Link href="/templates" className="hover:text-blue-600">Templates</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-600">{t.title}</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Preview */}
                        <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                            {thumb ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={thumb} alt={`${t.title} digital signage template`} className="w-full h-auto" />
                            ) : null}
                        </div>

                        {/* Info */}
                        <div>
                            <span className="inline-block text-xs font-semibold rounded-full px-3 py-1 bg-blue-50 text-blue-700 mb-4">
                                {priceLabel(t)}
                            </span>
                            <h1 className="font-headline text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-5 leading-[1.1]">
                                {t.title}
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed mb-8">{describe(t)}</p>

                            <ul className="text-sm text-gray-600 space-y-2 mb-8">
                                <li><span className="font-semibold text-gray-900">Orientation:</span> {horizontal ? 'Horizontal' : 'Vertical'}</li>
                                {t.width && t.height ? (
                                    <li><span className="font-semibold text-gray-900">Size:</span> {t.width} × {t.height}px</li>
                                ) : null}
                                <li><span className="font-semibold text-gray-900">Editable in:</span> Canva</li>
                                <li><span className="font-semibold text-gray-900">Runs on:</span> Fire TV, Android TV, and any browser screen</li>
                            </ul>

                            <a
                                href={`${HUB_TEMPLATE_URL}${t.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 font-medium transition-colors"
                            >
                                Get it on DSHub →
                            </a>
                            <p className="text-xs text-gray-400 mt-3">Free and credit templates — saved straight to your own Canva account to customize and publish.</p>
                        </div>
                    </div>

                    {related.length > 0 && (
                        <div className="mt-24">
                            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-8">
                                Related templates
                            </h2>
                            <div className="columns-2 md:columns-4 gap-6 [column-fill:_balance]">
                                {related.map((r) => {
                                    const rt = templateThumb(r);
                                    return (
                                        <Link
                                            key={r.id}
                                            href={`/templates/${templateSlug(r)}`}
                                            className="group mb-6 block break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all"
                                        >
                                            <div className="bg-gray-50 overflow-hidden">
                                                {rt ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img src={rt} alt={r.title || 'Template'} loading="lazy" className="w-full h-auto block group-hover:scale-105 transition-transform duration-300" />
                                                ) : null}
                                            </div>
                                            <div className="p-3">
                                                <span className="block text-sm font-semibold text-gray-900 truncate">{r.title || 'Template'}</span>
                                                <span className="text-xs text-blue-700">{priceLabel(r)}</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
