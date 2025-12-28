'use client';

import type { MDXComponents } from 'mdx/types';
import Image, { type ImageProps } from 'next/image';
import { Callout } from '@/components/blog/Callout';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-headline">{children}</h1>,
    h2: ({ children }) => <h2 className="font-headline">{children}</h2>,
    h3: ({ children }) => <h3 className="font-headline">{children}</h3>,
    h4: ({ children }) => <h4 className="font-headline">{children}</h4>,
    h5: ({ children }) => <h5 className="font-headline">{children}</h5>,
    h6: ({ children }) => <h6 className="font-headline">{children}</h6>,
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        alt={props.alt || ''}
        className="rounded-lg shadow-md"
        width={800}
        height={600}
      />
    ),
    Callout,
    ...components,
  };
}
