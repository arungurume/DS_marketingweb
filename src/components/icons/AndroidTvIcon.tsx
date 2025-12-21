import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const AndroidTvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('h-10 w-auto', props.className)}
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 7.14a2.14 2.14 0 0 1 2.14-2.14h15.72A2.14 2.14 0 0 1 22 7.14v9.72A2.14 2.14 0 0 1 19.86 19H4.14A2.14 2.14 0 0 1 2 16.86zm11-1.39v-1.5h-2v1.5zm-5.48 0L9 4.25l1.5 1.5zm8.98 0L15 4.25l1.5 1.5zM4.14 17.5h15.72a.64.64 0 0 0 .64-.64V7.14a.64.64 0 0 0-.64-.64H4.14a.64.64 0 0 0-.64.64v9.72a.64.64 0 0 0 .64.64M16.5 11a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-9 0a1 1 0 1 1-1 1a1 1 0 0 1 1-1m4.5 4.5a.5.5 0 0 1-.5-.5v-2.5h-1V15a1.5 1.5 0 0 0 3 0v-2.5h-1V15a.5.5 0 0 1-.5.5"
    />
  </svg>
);
