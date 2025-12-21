import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const GoogleTvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('h-10 w-auto', props.className)}
    {...props}
  >
    <path
      fill="currentColor"
      d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-3 14H6V6h12z"
    />
    <path
      fill="#4285F4"
      d="M9.4 12.5a2.5 2.5 0 0 1-2.5-2.5V8.5H12v1.5H8.4v2.5a1 1 0 0 0 1 1h1.5v-2h1.5v2.5a2.5 2.5 0 0 1-2.5 2.5"
    />
    <path
      fill="#34A853"
      d="M16.9 12a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m0-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
    />
  </svg>
);
