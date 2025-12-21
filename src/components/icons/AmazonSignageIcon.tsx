import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const AmazonSignageIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn('h-10 w-auto', props.className)}
        {...props}
    >
        <path
            fill="currentColor"
            d="M20.42 12.89a.5.5 0 0 0 .58-.42a9 9 0 0 0-17.11-1.33a.5.5 0 0 0 .6.42a8 8 0 0 1 15.33 1.33Zm-15-2.2A.5.5 0 0 1 5 10.27a4 4 0 0 1 8 0a.5.5 0 1 1-1 0a3 3 0 0 0-6 0a.5.5 0 0 1-.52.42ZM22 13.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1 0-1h19a.5.5 0 0 1 .5.5Z"
        />
    </svg>
);
