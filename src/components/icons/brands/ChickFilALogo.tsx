import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const ChickFilALogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path
      fill="#DD0031"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V9.5c0-.83.67-1.5 1.5-1.5h0c.83 0 1.5.67 1.5 1.5V12h-2zm4.5 4c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zm-3-10.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S13.33 7 12.5 7 11 6.33 11 5.5z"
    />
  </svg>
);
