import type { Thing, WithContext } from 'schema-dts';

type SeoProps<T extends Thing> = {
  schema: WithContext<T>;
};

export function Seo<T extends Thing>({ schema }: SeoProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
