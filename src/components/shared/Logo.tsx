import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('font-headline font-bold text-2xl tracking-tighter', className)}>
    <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <path d="M12.336 27.2L12.336 0.800003L18.864 0.800003L18.864 5.328L25.68 5.328L25.68 0.800003L32.208 0.800003L32.208 12.048L25.68 12.048L25.68 15.984L32.208 15.984L32.208 27.2L25.68 27.2L25.68 22.672L18.864 22.672L18.864 27.2L12.336 27.2ZM18.864 15.984L18.864 12.048L25.68 12.048L25.68 15.984L18.864 15.984Z" fill="hsl(var(--foreground))"/>
        <path d="M34.56 27.2L34.56 0.800003L47.088 0.800003L47.088 5.328L41.136 5.328L41.136 11.568L46.464 11.568L46.464 16.096L41.136 16.096L41.136 22.672L47.088 22.672L47.088 27.2L34.56 27.2Z" fill="hsl(var(--foreground))"/>
        <g style={{ mixBlendMode: 'screen' }}>
            <circle cx="4" cy="24" r="4" fill="#FDEE21"/>
            <circle cx="8" cy="24" r="4" fill="#00AEEF"/>
            <circle cx="6" cy="21" r="4" fill="#EC008C"/>
        </g>
    </svg>
  </div>
);

export default Logo;
