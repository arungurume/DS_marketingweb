import { redirect } from 'next/navigation';
import { getAllSpaSlugs } from '@/lib/spa-locations';

interface PageProps {
    params: {
        slug: string;
        segments: string[];
    };
}

export function generateStaticParams() {
    const slugs = getAllSpaSlugs();
    return slugs.map((slug) => ({
        slug: slug.city,
        segments: [slug.businessType],
    }));
}

export default async function NestedSpaRoute({ params }: PageProps) {
    // Await params in Next.js 15
    const { slug: city, segments } = await params;

    // Handle /barcelona/spa format
    // Redirect to /spa-in-barcelona format
    const type = segments[0];

    redirect(`/spa-digital-signage/${type}-in-${city}`);
}
