import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import type { ContentFAQ } from '@/data/content-schema';

export function ContentFaqSection({ faqs }: { faqs: ContentFAQ[] }) {
  if (!faqs.length) return null;
  return (
    <section className="mt-12">
      <h2 className="fraunces-soft mb-6 text-2xl font-bold text-forest md:text-3xl">
        Frequently asked.
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-base md:text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
