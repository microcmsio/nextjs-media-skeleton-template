import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/_components/Header';
import { GTM } from '@/_components/GTM';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const isProduction: boolean = process.env.NODE_ENV === 'production';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      {isProduction && (
        <>
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1850426805870963"
            crossOrigin="anonymous"
          />
          <GTM />
        </>
      )}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
