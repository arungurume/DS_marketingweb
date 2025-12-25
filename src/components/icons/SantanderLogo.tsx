import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const SantanderLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://wwwrano.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('h-10 w-auto', props.className)}
      {...props}
      fill="currentColor"
    >
        <path d="M14.418.003A12.186 12.186 0 0012 24c3.483 0 6.643-1.458 8.913-3.818C16.924 16.51 13.987 13.682 12 13.682c-1.986 0-4.924 2.828-8.913 6.5C5.356 22.545 8.517 24 12 24a12.186 12.186 0 002.418-.225V.003z" fill="#fff" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 3.483 1.458 6.643 3.818 8.913C7.49 17.24 10.014 15 12 15c1.986 0 4.51 2.24 8.182 5.913A11.95 11.95 0 0024 12C24 5.373 18.627 0 12 0z" fill="red" />
    </svg>
);
