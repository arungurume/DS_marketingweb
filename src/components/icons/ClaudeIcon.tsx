import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const ClaudeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-6 w-6', props.className)}
    {...props}
  >
    <path
      d="M12 2.5L13.1875 5.59375L16.2812 6.78125L13.1875 7.96875L12 11L10.8125 7.96875L7.71875 6.78125L10.8125 5.59375L12 2.5Z"
      fill="currentColor"
    />
    <path
      d="M21.5 12L19.5 16L15.5 14L19.5 12L21.5 8L23.5 12L27.5 14L23.5 16L21.5 20L19.5 16Z"
      fill="currentColor"
      transform="translate(-6 -1)"
    />
    <path
      d="M4.5 15.5L5.3125 17.5938L7.40625 18.4062L5.3125 19.2188L4.5 21.3125L3.6875 19.2188L1.59375 18.4062L3.6875 17.5938L4.5 15.5Z"
      fill="currentColor"
    />
  </svg>
);
