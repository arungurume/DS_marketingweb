import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const WhataburgerLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('h-10 w-auto', props.className)}
      {...props}
      fill="currentColor"
    >
        <path d="M12 0L0 9l2.5 1.5L0 12l12 9 12-9-2.5-1.5L24 9 12 0zm0 13.5L4.5 9 12 4.5 19.5 9 12 13.5z" />
    </svg>
);
