import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const StarbucksLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="#006241" />
    <path
      d="M12 15.5c-1.05 0-1.9.85-1.9 1.9s.85 1.9 1.9 1.9 1.9-.85 1.9-1.9-.85-1.9-1.9-1.9zm0-11c-2.42 0-4.45.85-5.94 2.26-.3.29-.3.77 0 1.06l.53.53c.15.15.34.22.53.22s.38-.07.53-.22c1.1-1.04 2.6-1.64 4.35-1.64s3.25.6 4.35 1.64c.29.29.77.29 1.06 0l.53-.53c.29-.29.29-.77 0-1.06C16.45 5.35 14.42 4.5 12 4.5zM8.5 11c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-4c-.83 0-1.5-.67-1.5-1.5v-1zm1.5 1h4v-1h-4v1z"
      fill="#fff"
    />
  </svg>
);
