import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const ChromecastIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('h-10 w-auto', props.className)}
    {...props}
  >
    <path
      fill="#4285F4"
      d="M21.6 4.8H2.4A2.4 2.4 0 0 0 0 7.2v1.2h2.4V7.2h19.2v9.6h-7.2v2.4h7.2a2.4 2.4 0 0 0 2.4-2.4V7.2a2.4 2.4 0 0 0-2.4-2.4z"
    />
    <path fill="#34A853" d="M1.2 16.8h7.2v-7.2H1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 0 0 1.2 1.2z" />
    <path fill="#F9BC05" d="M0 18v1.2a2.4 2.4 0 0 0 2.4 2.4h1.2v-3.6H0z" />
    <path fill="#EA4335" d="M4.8 21.6h1.2v-2.4H4.8c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2z" />
  </svg>
);
