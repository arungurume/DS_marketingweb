import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const ChatGptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-6 w-6', props.className)}
    {...props}
  >
    <path
      d="M35.216 17.552C36.752 23.328 32.736 29.104 26.96 30.64C21.184 32.176 15.408 28.16 13.872 22.384C12.336 16.608 16.352 10.832 22.128 9.296C27.904 7.76 33.68 11.776 35.216 17.552Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M23.584 5.344C29.36 6.88 33.376 12.656 31.84 18.432C30.304 24.208 24.528 28.224 18.752 26.688C12.976 25.152 8.96 19.376 10.496 13.6C12.032 7.824 17.808 3.808 23.584 5.344Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);
