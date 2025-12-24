import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const SantanderLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path
      fill="#EC0000"
      d="M15.33 16.33c0 .5-.13.98-.38 1.41h-2.1c-.2-.46-.31-.97-.31-1.51s.11-1.05.31-1.51h2.1c.25.43.38.91.38 1.41m-6.66 0c0-.5.13-.98.38-1.41h2.1c.2.46.31.97.31 1.51s-.11 1.05-.31 1.51h-2.1c-.25-.43-.38-.91-.38-1.41m6.66-4.57c0-.5-.13-.98-.38-1.41h-2.1c-.2.46-.31.97-.31 1.51s.11 1.05.31 1.51h2.1c.25-.43.38-.91.38-1.41m-6.66 0c0 .5.13.98.38 1.41h2.1c.2-.46.31-.97.31-1.51s-.11-1.05-.31-1.51h-2.1c-.25-.43-.38-.91-.38-1.41M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2"
    />
  </svg>
);
