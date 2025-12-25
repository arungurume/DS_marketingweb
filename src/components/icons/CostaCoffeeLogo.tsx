import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const CostaCoffeeLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('h-10 w-auto', props.className)}
      {...props}
      fill="currentColor"
    >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.87 5.752c.28.56.346.96.346 1.453 0 .426-.067.786-.2 1.08-.133.293-.333.52-.6.68-.267.16-.58.24-.94.24-.48 0-.9-.12-1.26-.36-.36-.24-.633-.56-.82-.96l-.88 3.56h5.307v1.454H7.387l3.053-12.28h1.52l-1.04 4.2c.32-.427.693-.76 1.12-1 .427-.24.9-.36 1.427-.36.56 0 1.08.187 1.56.56.48.373.82.853 1.026 1.44z" />
    </svg>
);
