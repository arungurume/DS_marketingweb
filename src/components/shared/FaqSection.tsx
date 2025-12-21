import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: FaqItem[];
  title?: string;
};

export function FaqSection({ faqs, title = 'Frequently Asked Questions' }: FaqSectionProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center">
          {title}
        </h2>
        <Accordion type="single" collapsible className="w-full mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
