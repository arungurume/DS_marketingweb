import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import './globals.css';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontSpaceGrotesk = localFont({
  src: '../fonts/SpaceGrotesk-VariableFont_wght.ttf',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Free Digital Signage, Cloud Content Management`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'The easiest way to power your digital screens. Turn any TV into a sign, manage content from the cloud, and get up to 4 screens free, forever. Perfect for restaurants, retail, and offices.',
  openGraph: {
    title: `${SITE_NAME} | Free Digital Signage, Cloud Content Management`,
    description:
      'The easiest way to power your digital screens. Turn any TV into a sign, manage content from the cloud, and get up to 4 screens free, forever.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `A digital menu board in a modern cafe showing coffee and pastries, created with ${SITE_NAME}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Free Digital Signage, Cloud Content Management`,
    description:
      'The easiest way to power your digital screens. Turn any TV into a sign, manage content from the cloud, and get up to 4 screens free, forever.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fontInter.variable, fontSpaceGrotesk.variable)} suppressHydrationWarning>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
