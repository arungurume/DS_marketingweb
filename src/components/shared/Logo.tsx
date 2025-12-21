import { SITE_NAME } from '@/lib/constants';

const Logo = ({ className }: { className?: string }) => (
  <div className={`font-headline font-bold text-5xl ${className}`}>
    <span className="text-primary">DS</span>
  </div>
);

export default Logo;
