'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

declare global {
  var adsbygoogle: unknown[];
}

const isProduction: boolean = process.env.NODE_ENV === 'production';

export default function Ad() {
  // const pathname = usePathname();

  // useEffect(() => {
  //   try {
  //     (adsbygoogle = window.adsbygoogle || []).push({});
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [pathname]);

  // if (isProduction) {
  //   return (
  //     <ins
  //       className="adsbygoogle"
  //       style={{ display: 'block' }}
  //       data-ad-client="ca-pub-0000000000000000"
  //       data-ad-slot="0000000000"
  //       data-ad-format="auto"
  //       data-full-width-responsive="true"
  //     />
  //   );
  // }
  return <div className={styles.ad}>Ad</div>;
}
