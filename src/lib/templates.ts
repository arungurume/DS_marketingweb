// Shared helpers for the public template catalog (marketing site).
// Browsing is public; buying/saving-to-Canva happens behind login on the hub.

export const TEMPLATES_API =
    'https://api-cms.digitalsigns.ai/cms/api/v1/ctc/public/templates?page=0&size=200';

// Deep link to the hub's template detail (login → buy → save to Canva).
export const HUB_TEMPLATE_URL = 'https://hub.digitalsigns.ai/templates/detail?id=';

export type Template = {
    id: number;
    title?: string;
    description?: string;
    creditCost?: number;
    plan?: string;
    width?: number;
    height?: number;
    fullResImageUrl?: string;
    images?: { url?: string }[];
};

// Fetched at build time (SSG). Returns [] if unreachable so the build never breaks.
export async function getAllTemplates(): Promise<Template[]> {
    try {
        const res = await fetch(TEMPLATES_API);
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data?.content) ? data.content : [];
    } catch {
        return [];
    }
}

export function slugify(input: string): string {
    return (
        (input || '')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 60) || 'template'
    );
}

// SEO-friendly, unique, reversible slug: "<title>-<id>".
export function templateSlug(t: Template): string {
    return `${slugify(t.title || 'template')}-${t.id}`;
}

export function idFromSlug(slug: string): number | null {
    const m = (slug || '').match(/-(\d+)$/);
    return m ? Number(m[1]) : null;
}

export function templateThumb(t: Template): string | undefined {
    return t.images?.[0]?.url || t.fullResImageUrl;
}

export function isHorizontal(t: Template): boolean {
    return (t.width || 0) > (t.height || 0);
}

export function priceLabel(t: Template): string {
    return t.creditCost ? `${t.creditCost} credits` : 'Free';
}
