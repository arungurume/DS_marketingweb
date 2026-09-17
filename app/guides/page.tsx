import { Metadata } from 'next';
import { GuidesHubClient } from '@/components/shared/guides/GuidesHubClient';

export const metadata: Metadata = {
    title: 'Guides & Help Center | DigitalSigns.ai',
    description: 'Step-by-step guides to set up screens, create playlists, add apps, schedule content, and manage users using DigitalSigns.ai.',
};

export default function GuidesPage() {
    return <GuidesHubClient />;
}
