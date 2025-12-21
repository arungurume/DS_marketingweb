import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const AmazonFireTvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className={cn('h-10 w-auto', props.className)}
    {...props}
  >
    <g fill="currentColor">
      <path d="M127.5 25.5c-4 0-8 2-10 6l-18 32c-2 4-2 8 0 12l48 84c2 4 6 6 10 6s8-2 10-6l48-84c2-4 2-8 0-12l-18-32c-2-4-6-6-10-6h-60Z" />
      <path d="M127.5 175.5c-4 0-8 2-10 6l-18 32c-2 4-2 8 0 12l48 84c2 4 6 6 10 6s8-2 10-6l48-84c2-4 2-8 0-12l-18-32c-2-4-6-6-10-6h-60Z" opacity={0.5} />
    </g>
  </svg>
);
