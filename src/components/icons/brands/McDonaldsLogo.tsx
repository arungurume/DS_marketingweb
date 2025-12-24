import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const McDonaldsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      fillOpacity="0"
    />
    <path
      d="M17.32 15.3c-.6-.44-1.28-.73-2.02-.85.39-.4.73-.85.99-1.35.48-.9.72-1.87.72-2.91 0-1.4-.44-2.6-1.31-3.61-.88-1-2-1.5-3.36-1.5s-2.48.5-3.36 1.5c-.87 1.01-1.31 2.21-1.31 3.61 0 1.04.24 2.01.72 2.91.26.5.6.95.99 1.35-.74.12-1.42.41-2.02.85-.6.43-1.07.97-1.41 1.6h2.15c.29-.38.64-.7 1.05-.94.4-.24.83-.36 1.29-.36.46 0 .89.12 1.29.36.41.24.76.56 1.05.94h2.15c-.34-.63-.8-1.17-1.4-1.6z"
      fill="#FFC72C"
    />
  </svg>
);
