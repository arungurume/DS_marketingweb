'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TEMPLATES_API, templateSlug, templateThumb, priceLabel, type Template } from '@/lib/templates';

// Real template grid for the solution/vertical pages (replaces the old dummy
// Unsplash placeholders). Client-fetched from the public catalog so it drops
// into the existing 'use client' pages without a server refactor. Cards link to
// each template's SEO detail page; buying/saving-to-Canva stays behind login.
export function TemplateStrip({ filter, limit = 6 }: { filter?: string; limit?: number }) {
    const [templates, setTemplates] = useState<Template[]>([]);

    useEffect(() => {
        let alive = true;
        fetch(TEMPLATES_API)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => {
                if (!alive || !d) return;
                let list: Template[] = Array.isArray(d.content) ? d.content : [];
                if (filter) {
                    const f = filter.toLowerCase();
                    const matched = list.filter((t) => (t.title || '').toLowerCase().includes(f));
                    // Only narrow if there are enough matches, else keep the full list.
                    if (matched.length >= 4) list = matched;
                }
                setTemplates(list.slice(0, limit));
            })
            .catch(() => {});
        return () => {
            alive = false;
        };
    }, [filter, limit]);

    if (templates.length === 0) return null;

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t) => {
                const thumb = templateThumb(t);
                return (
                    <Link
                        key={t.id}
                        href={`/templates/${templateSlug(t)}`}
                        className="group border border-gray-100 rounded-[18px] overflow-hidden bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300 block"
                    >
                        <div className="bg-gray-100 aspect-[4/3] relative overflow-hidden">
                            {thumb && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={thumb}
                                    alt={`${t.title || 'Digital signage'} template`}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                />
                            )}
                            <span className="absolute top-2 left-2 text-[11px] font-semibold rounded-full px-2 py-0.5 bg-white/90 backdrop-blur text-blue-700 shadow-sm">
                                {priceLabel(t)}
                            </span>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-sm text-gray-900 mb-1 truncate">{t.title || 'Template'}</h4>
                            <p className="text-xs text-gray-500">Editable in Canva — publish to any screen.</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
