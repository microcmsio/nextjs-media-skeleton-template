import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="/logo.svg" alt="SIMPLE" width={157} height={27} priority />
      </Link>
    </header>
  );
}
