import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SITE_NAME } from '@/lib/constants';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('font-headline font-bold text-2xl tracking-tighter', className)}>
    <Image 
      src="/logo.png" 
      alt={`${SITE_NAME} logo`}
      width={140} 
      height={40}
      className={cn('h-7 w-auto', className)} 
      priority
    />
  </div>
);

export default Logo;
