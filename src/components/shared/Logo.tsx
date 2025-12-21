import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('font-headline font-bold text-2xl tracking-tighter', className)}>
    <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <path d="M12.336 27.2V0.800003H18.864V5.328H25.68V0.800003H32.208V12.048H25.68V15.984H32.208V27.2H25.68V22.672H18.864V27.2H12.336ZM18.864 15.984V12.048H25.68V15.984H18.864Z" fill="hsl(var(--foreground))"/>
        <path d="M34.56 27.2V0.800003H47.088V5.328H41.136V11.568H46.464V16.096H41.136V22.672H47.088V27.2H34.56Z" fill="hsl(var(--foreground))"/>
        <g style={{ mixBlendMode: 'screen' }}>
            <circle cx="4" cy="24" r="4" fill="#F5D631"/>
            <circle cx="8" cy="24" r="4" fill="#00AEEF"/>
            <circle cx="6" cy="21" r="4" fill="#C8688A"/>
        </g>
    </svg>
  </div>
);

export default Logo;
