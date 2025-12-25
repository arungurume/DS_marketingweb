import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { FreeSignagePageClient } from '@/components/shared/FreeSignagePageClient';

export const metadata: Metadata = {
  title: `Free Digital Signage Software | ${SITE_NAME}`,
  description: 'Turn any TV or display into a digital signage screen. Create playlists, schedule content, and manage up to 4 screens free forever—no credit card required.',
  alternates: {
    canonical: `${SITE_URL}/free-digital-signage/`,
  },
  openGraph: {
    title: `Free Digital Signage Software | ${SITE_NAME}`,
    description: 'Turn any TV or display into a digital signage screen. Create playlists, schedule content, and manage up to 4 screens free forever—no credit card required.',
    url: `${SITE_URL}/free-digital-signage/`,
  },
};

export default function FreeDigitalSignagePage() {
  return <FreeSignagePageClient />;
}
