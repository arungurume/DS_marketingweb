import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Cloud-Based Digital Signage Software`,
    description: 'Easily create, schedule, and manage content across your screens — without complex hardware. Get started for free.',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
