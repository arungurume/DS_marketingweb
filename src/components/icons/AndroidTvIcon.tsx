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
      fill="#3DDC84"
      d="M15.25 5.21h-2.5v-1.5a.75.75 0 0 0-1.5 0v1.5h-2.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5Zm-6.55 0L7.5 4.01l-1.2 1.2a.75.75 0 1 0 1.06 1.06l1.2-1.2 1.2 1.2a.75.75 0 0 0 1.06-1.06Zm8.61 0L16.1 4.01l-1.2 1.2a.75.75 0 1 0 1.06 1.06l1.2-1.2 1.2 1.2a.75.75 0 1 0 1.06-1.06Z"
    />
    <path
      fill="#3DDC84"
      d="M17.5 11.2a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7.75 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
    <path
      fill="#3DDC84"
      d="M15.75 12.46H9.5a1.25 1.25 0 0 0-1.25 1.25v3.54a.75.75 0 0 0 1.5 0v-2.79h4.5v2.79a.75.75 0 0 0 1.5 0v-3.54a1.25 1.25 0 0 0-1.25-1.25Z"
    />
  </svg>
);
