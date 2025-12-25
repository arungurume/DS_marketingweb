import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const HeyTeaLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('h-10 w-auto', props.className)}
      {...props}
      fill="currentColor"
    >
        <path d="M2.8 22.8V1.2h2.52v7.92h.56l6.92-7.92h3.24L8.2 11.28l8.4 11.52h-3.32l-6.84-9.36h-.56v9.36H2.8zm15.16 0V13.32h3.24v9.48h-3.24z" />
    </svg>
);
