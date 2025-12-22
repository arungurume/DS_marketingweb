import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const NikeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path d="M2.5 12.5c0-1.1.9-2 2-2h15c1.1 0 2 .9 2 2s-.9 2-2 2h-15c-1.1 0-2-.9-2-2zm0 0c0-2.2 1.8-4 4-4h11c2.2 0 4 1.8 4 4s-1.8 4-4 4h-11c-2.2 0-4-1.8-4-4z" />
    <path d="M4.5 8.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);