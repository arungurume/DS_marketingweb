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
    <path d="M22.25 7.15c-3.14 1.83-6.52 3.1-9.91 3.84-.42.09-.84.18-1.26.26-.81-1.39-1.36-2.94-1.63-4.59C12.98 5.6 17.58 5.2 22.25 7.15z" />
    <path d="M9.45 6.66c.27 1.65.82 3.2 1.63 4.59.42-.08.84-.17 1.26-.26 3.39-.74 6.77-2.01 9.91-3.84C18.6 3.12 13.9.75 8.75.75c-4.14 0-7.61 2.5-9.35 6.04 3.03-.45 6.27-.45 9.05-.13z" />
  </svg>
);
