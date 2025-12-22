import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const McDonaldsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path d="M12 12c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6zm0-2c3.3 0 6-2.7 6-6H6c0 3.3 2.7 6 6 6z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".3" />
  </svg>
);