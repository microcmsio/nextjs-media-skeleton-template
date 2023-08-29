import type { Metadata } from 'next';
// import Script from 'next/script';
import './globals.css';
import Header from '@/_components/Header';
import { GTM } from '@/_components/GTM';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: {
    template: '%s｜公式メディアテンプレート',
    default: '公式メディアテンプレート',
  },
  description: 'Next.js製のメディア向けスケルトンテンプレートです',
  openGraph: {
    title: '公式メディアテンプレート',
    description: 'Next.js製のメディア向けスケルトンテンプレートです',
    type: 'website',
    images: '/ogp.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  },
};

const isProduction: boolean = process.env.NODE_ENV === 'production';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      {/* {isProduction && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"
          crossOrigin="anonymous"
        />
      )} */}
      {isProduction && <GTM />}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
