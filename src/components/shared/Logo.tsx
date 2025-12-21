import { SITE_NAME } from '@/lib/constants';

const Logo = ({ className }: { className?: string }) => (
  <div className={`font-headline font-bold text-2xl ${className}`}>
    <span className="text-primary">{SITE_NAME}</span>
  </div>
);

export default Logo;
