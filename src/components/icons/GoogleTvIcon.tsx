import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const GoogleTvIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn('h-10 w-auto', props.className)}
        {...props}
    >
        <path fill="#4285F4" d="M14.4 12v-2.4h2.4v-1.2h-2.4V6h-1.2v2.4H9.6v1.2h2.4V12z" />
        <path fill="#EA4335" d="M10.8 15.6V12h-1.2v3.6c0 1.3.9 2.4 2.1 2.4h1.2v-1.2h-1.2c-.7 0-1.2-.5-1.2-1.2z" />
        <path fill="#F9BC05" d="M16.8 15.6c.7 0 1.2-.5 1.2-1.2V12h-1.2v2.4h-3.6v1.2z" />
        <path fill="#34A853" d="M21.6 4.8H2.4A2.4 2.4 0 0 0 0 7.2v9.6a2.4 2.4 0 0 0 2.4 2.4h19.2a2.4 2.4 0 0 0 2.4-2.4V7.2a2.4 2.4 0 0 0-2.4-2.4zm0 12H2.4V7.2h19.2v9.6z" />
    </svg>
);
