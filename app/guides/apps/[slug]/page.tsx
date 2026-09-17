import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { appGuides } from '@/data/app-guides.data';
import { AppGuideClient } from '@/components/shared/guides/AppGuideClient';

type Props = {
    params: { slug: string };
};

export async function generateStaticParams() {
    return appGuides.map((app) => ({
        slug: app.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const app = appGuides.find((a) => a.slug === params.slug);

    if (!app) {
        return {
            title: 'Guide Not Found',
        };
    }

    return {
        title: `${app.seoTitle} | DigitalSigns.ai`,
        description: app.intro,
    };
}

export default function AppGuidePage({ params }: Props) {
    const app = appGuides.find((a) => a.slug === params.slug);

    if (!app) {
        notFound();
    }

    return <AppGuideClient app={app} />;
}
