import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const CostaCoffeeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <path d="M14.07 7.07c-1.33-1.33-3.49-1.33-4.82 0l-2.07 2.07c-.39.39-.39 1.02 0 1.41l.71.71c.39.39 1.02.39 1.41 0L10.7 9.8c.19-.19.51-.19.7 0l2.12 2.12c.19.19.19.51 0 .7l-1.41 1.41c-.39.39-.39 1.02 0 1.41l.71.71c.39.39 1.02.39 1.41 0l2.07-2.07c1.33-1.33 1.33-3.49 0-4.82l-2.07-2.07z" />
  </svg>
);