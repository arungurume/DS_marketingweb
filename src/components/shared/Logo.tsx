import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('font-headline font-bold text-2xl tracking-tighter', className)}>
    <svg
      width="153"
      height="56"
      viewBox="0 0 153 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-7 w-auto', className)}
    >
      <g clipPath="url(#clip0_1_2)">
        <g style={{ mixBlendMode: 'multiply' }}>
          <circle cx="16" cy="40" r="8" fill="#F5D631" />
          <circle cx="32" cy="40" r="8" fill="#00AEEF" />
          <circle cx="24" cy="40" r="8" fill="#C8688A" />
        </g>
        <path
          d="M50.4805 1.00002L50.4805 55H63.6325V42.064L83.0245 42.064C93.4405 42.064 100.208 35.84 100.208 26.624C100.208 17.408 93.4405 11.184 83.0245 11.184L63.6325 11.184L63.6325 1.00002L50.4805 1.00002ZM78.0325 28.928C81.9685 28.928 84.8485 27.264 84.8485 24.064C84.8485 20.864 81.9685 19.2 78.0325 19.2L63.6325 19.2V28.928L78.0325 28.928Z"
          fill="hsl(var(--foreground))"
        />
        <path
          d="M101.44 1.00002L116.896 28.48L101.44 55H116.288L124.608 40.48L132.928 55H147.776L132.32 28.48L147.776 1.00002H132.928L124.608 15.52L116.288 1.00002H101.44Z"
          fill="hsl(var(--foreground))"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="153" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export default Logo;
