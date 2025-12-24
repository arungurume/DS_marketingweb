import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const BurgerKingLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-12 w-auto', props.className)}
    {...props}
  >
    <path
      d="M18 6H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
      fill="#ED7800"
    />
    <path
      d="M12 16.5c-3.14 0-5.83-2.1-6.72-4.99.23.01.46.01.69.01h12.06c.23 0 .46 0 .69-.01C17.83 14.4 15.14 16.5 12 16.5z"
      fill="#F2A900"
    />
    <path d="M12 7.5c3.14 0 5.83 2.1 6.72 4.99-.23-.01-.46-.01-.69-.01H5.97c-.23 0-.46 0-.69.01C6.17 9.6 8.86 7.5 12 7.5z" fill="#F2A900" />
    <path d="M18.5 12c0-1.1-.9-2-2-2h-9c-1.1 0-2 .9-2 2s.9 2 2 2h9c1.1 0 2-.9 2-2z" fill="#FECA00" />
  </svg>
);
