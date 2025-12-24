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
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
      fill="#A21115"
    />
    <path
      d="M14.5 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0C8.67 9 8 9.67 8 10.5S8.67 12 9.5 12s1.5-.67 1.5-1.5S10.33 9 9.5 9zm0 5c-1.66 0-3-1.34-3-3s1.34-3 3-3 .55.15.78.38C9.53 8.16 8.58 8 7.5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.08 0 2.03-.42 2.78-1.1.23.23.53.38.78.38z"
      fill="#fff"
    />
  </svg>
);
