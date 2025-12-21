import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const WebPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('h-10 w-auto', props.className)}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.6-1.5c-.56.41-1.21.73-1.93 1C14.78 17.7 13.45 17.5 12.5 17L11 15.5V9h4v1h-2v2h2v1h-2v2h2v1h-2v1.53c1.55.06 3.03-.49 4.1-1.53z"
    />
  </svg>
);
