import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/shared/CookieConsent';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Cloud-Based Digital Signage Software`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Easily create, schedule, and manage content across your screens — without complex hardware. Get started for free.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} | Cloud-Based Digital Signage Software`,
    description: 'Easily create, schedule, and manage content across your screens — without complex hardware. Get started for free.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Cloud-Based Digital Signage Software`,
    description: 'Easily create, schedule, and manage content across your screens — without complex hardware. Get started for free.',
    images: ['/og.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QTJ47CHKVK"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "G-QTJ47CHKVK", { anonymize_ip: true });
        ` }} />
      </head>
      <body className="font-outfit bg-background text-foreground antialiased selection:bg-blue-100">
        <Header />
        <main className="font-outfit">{children}</main>
        <Footer />
        <Toaster />
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
