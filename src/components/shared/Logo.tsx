import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';


const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={cn('flex items-center', className)}>
    <Image
      src="/images/logo.png"
      alt={SITE_NAME}
      width={130}
      height={32}
      className="h-8 w-auto object-contain"
      priority
    />
  </Link>
);





export default Logo;
