'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Layout, Search } from 'lucide-react';
import { templateSlug, templateThumb, priceLabel, type Template } from '@/lib/templates';

type Orientation = 'all' | 'horizontal' | 'vertical';

const isHorizontal = (t: Template) => (t.width || 0) > (t.height || 0);

export function TemplateGallery({ templates }: { templates: Template[] }) {
    const [query, setQuery] = useState('');
    const [orientation, setOrientation] = useState<Orientation>('all');

    const counts = useMemo(() => {
        const horizontal = templates.filter(isHorizontal).length;
        return { all: templates.length, horizontal, vertical: templates.length - horizontal };
    }, [templates]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return templates.filter((t) => {
            if (orientation === 'horizontal' && !isHorizontal(t)) return false;
            if (orientation === 'vertical' && isHorizontal(t)) return false;
            if (q && !(t.title || '').toLowerCase().includes(q)) return false;
            return true;
        });
    }, [templates, query, orientation]);

    const tabs: { key: Orientation; label: string; n: number }[] = [
        { key: 'all', label: 'All', n: counts.all },
        { key: 'horizontal', label: 'Horizontal', n: counts.horizontal },
        { key: 'vertical', label: 'Vertical', n: counts.vertical },
    ];

    return (
        <div>
            {/* Filter bar: orientation toggle + search */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                <div className="inline-flex rounded-xl bg-gray-100 p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            onClick={() => setOrientation(tab.key)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                orientation === tab.key
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-800'
                            }`}
                        >
                            {tab.label} <span className="text-gray-400">({tab.n})</span>
                        </button>
                    ))}
                </div>
                <div className="sm:ml-auto w-full sm:w-72 relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search templates…"
                        className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-blue-400 transition-colors"
                    />
                </div>
            </div>

            {filtered.length === 0 ? (
                <p className="text-center text-gray-400 py-16">No templates match your filters.</p>
            ) : (
                // Big, image-forward masonry linking to each template's detail page.
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                    {filtered.map((t) => {
                        const thumb = templateThumb(t);
                        return (
                            <Link
                                key={t.id}
                                href={`/templates/${templateSlug(t)}`}
                                className="group relative mb-5 block break-inside-avoid rounded-2xl overflow-hidden bg-gray-100 shadow-sm ring-1 ring-gray-100 hover:shadow-2xl hover:ring-blue-200 transition-all duration-300"
                            >
                                {thumb ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={thumb}
                                        alt={`${t.title || 'Digital signage'} template`}
                                        loading="lazy"
                                        className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                                    />
                                ) : (
                                    <div className="aspect-[4/3] flex items-center justify-center bg-gray-50">
                                        <Layout className="w-10 h-10 text-gray-300" />
                                    </div>
                                )}

                                <span className="absolute top-3 left-3 text-xs font-semibold rounded-full px-2.5 py-1 bg-white/90 backdrop-blur text-blue-700 shadow-sm">
                                    {priceLabel(t)}
                                </span>

                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/25 to-transparent">
                                    <h3 className="text-white font-semibold text-sm sm:text-base leading-tight truncate">{t.title || 'Template'}</h3>
                                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white text-blue-700 text-xs font-semibold px-3 py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        View template →
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
