import { Metadata } from 'next';
import { AppsHubClient } from '@/components/shared/guides/AppsHubClient';

export const metadata: Metadata = {
    title: 'Apps for Digital Signage Playlists | DigitalSigns.ai',
    description: 'Connect YouTube, Calendars, Spreadsheets, Social Feeds, Dashboards and more directly into your playlists.',
};

export default function AppsHubPage() {
    return <AppsHubClient />;
}
