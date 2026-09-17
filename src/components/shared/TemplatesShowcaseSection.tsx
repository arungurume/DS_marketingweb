import Link from 'next/link';
import { getAllTemplates, templateSlug, templateThumb, priceLabel } from '@/lib/templates';

export async function TemplatesShowcaseSection() {
    const all = await getAllTemplates();
    if (all.length === 0) return null;
    const templates = all.slice(0, 12);

    return (
        <section className="py-24 bg-white w-full overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="font-headline font-bold text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
                            Start with a ready-made template
                        </h2>
                        <p className="font-body text-base md:text-lg text-gray-500 leading-relaxed font-normal">
                            Designer-made templates for menus, promos, and announcements. Save one to your own Canva, then customize and publish to your screens.
                        </p>
                    </div>
                    <Link
                        href="/templates"
                        className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 h-12 font-medium transition-colors"
                    >
                        Browse all templates →
                    </Link>
                </div>

                {/* Horizontal strip: fixed height, natural width, so horizontal (menu
                    board) and vertical (poster) templates both show at a consistent
                    height and scroll sideways. */}
                <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x">
                    {templates.map((t) => {
                        const thumb = templateThumb(t);
                        return (
                            <Link
                                key={t.id}
                                href={`/templates/${templateSlug(t)}`}
                                className="group snap-start shrink-0 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-blue-200"
                            >
                                <div className="h-64 bg-gray-50 overflow-hidden flex items-center justify-center">
                                    {thumb && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={thumb}
                                            alt={`${t.title || 'Digital signage'} template`}
                                            loading="lazy"
                                            className="h-64 w-auto object-cover transition-transform group-hover:scale-[1.03]"
                                        />
                                    )}
                                </div>
                                <div className="p-3 flex items-center justify-between gap-3 min-w-[9rem]">
                                    <span className="font-headline font-semibold text-sm text-gray-900 truncate">
                                        {t.title || 'Template'}
                                    </span>
                                    <span className="shrink-0 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-0.5">
                                        {priceLabel(t)}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
