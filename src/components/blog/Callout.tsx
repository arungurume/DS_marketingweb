import { Info } from 'lucide-react';

type CalloutProps = {
  children: React.ReactNode;
};

export function Callout({ children }: CalloutProps) {
  return (
    <div className="my-6 flex items-start rounded-md border border-l-4 border-primary/30 bg-primary/5 p-4">
      <Info className="mr-4 h-5 w-5 text-primary mt-1" />
      <div className="prose-p:my-0 prose-a:text-primary [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
