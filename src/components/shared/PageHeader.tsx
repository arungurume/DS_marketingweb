type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-16 sm:py-24 bg-primary/5">
      <div className="container text-center">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
