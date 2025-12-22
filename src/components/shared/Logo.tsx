import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('flex items-center gap-2', className)}>
    <svg
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <title>{SITE_NAME} Logo</title>
      <circle cx="12" cy="18" r="6" fill="#00AEEF" style={{ mixBlendMode: 'multiply' }} />
      <circle cx="18" cy="18" r="6" fill="#F5D631" style={{ mixBlendMode: 'multiply' }} />
      <circle cx="24" cy="18" r="6" fill="#FF5A5F" style={{ mixBlendMode: 'multiply' }} />
    </svg>
    <span className="font-headline font-bold text-2xl tracking-tighter">{SITE_NAME}</span>
  </div>
);

export default Logo;
