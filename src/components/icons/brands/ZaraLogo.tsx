import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const ZaraLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path d="M5 5h14v2H5zm0 4h14v2H5zm0 4h14v2H5zm0 4h14v2H5z" />
  </svg>
);