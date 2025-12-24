import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const KrispyKremeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path fill="#007749" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
    <path
      fill="#fff"
      d="M12 6.5c-2.4 0-4.6.8-6.4 2.3l-1.1-1.1c2.1-1.7 4.7-2.7 7.5-2.7s5.4 1 7.5 2.7l-1.1 1.1C16.6 7.3 14.4 6.5 12 6.5zm0 11c2.4 0 4.6-.8 6.4-2.3l1.1 1.1c-2.1 1.7-4.7 2.7-7.5 2.7s-5.4-1-7.5-2.7l1.1-1.1c1.8 1.5 4 2.3 6.4 2.3z"
    />
    <path fill="#de002c" d="M9.5 14.5h5v-5h-5v5z" />
  </svg>
);
