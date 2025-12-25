'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function AskAiSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ask our AI to create content for you
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Don't have any content? No problem. Just describe what you want to
            see and our AI will generate it for you.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-2">
            <Textarea placeholder="A restaurant menu with a modern design" className="max-h-24" />
            <Button type="submit">Generate Content</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
