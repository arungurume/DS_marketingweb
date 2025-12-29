type Props = {
  children: React.ReactNode;
};

export function Callout({ children }: Props) {
  return (
    <div className="my-6 rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed">
      {children}
    </div>
  );
}
