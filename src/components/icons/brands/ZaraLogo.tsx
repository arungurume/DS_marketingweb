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
    <path d="M21 20.98v-1.92l-4.99-9.15h4.94v-2.1H8.78v1.92l5.01 9.15h-5.01v2.1h12.22zM8.32 7.81h2.18v2.16H8.32z" />
    <path d="M4.32 14.19h2.18v2.16H4.32zM15.42 7.81h2.18v2.16h-2.18z" />
    <path d="M3 3h18v18H3z" fill="none"/>
  </svg>
);
