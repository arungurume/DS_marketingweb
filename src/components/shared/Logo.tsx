import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('flex items-center gap-2', className)}>
    <Image
      src="https://digitalsigns.ai/wp-content/uploads/2025/02/DSlogo.png"
      alt={`${SITE_NAME} Logo`}
      width={138}
      height={44}
      className="h-8 w-auto shrink-0"
      priority
    />
    <span className="sr-only">{SITE_NAME}</span>
  </div>
);

export default Logo;
