import type { ContentSection as SectionType } from '@/data/content-schema';

/**
 * Render a content section. Body supports plain markdown-ish:
 * - Paragraphs split by double newlines
 * - **bold** → <strong>
 * - *italic* → <em>
 */
function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const m = match[0];
    if (m.startsWith('**')) {
      parts.push(<strong key={`b-${i++}`}>{m.slice(2, -2)}</strong>);
    } else {
      parts.push(<em key={`i-${i++}`}>{m.slice(1, -1)}</em>);
    }
    lastIndex = match.index + m.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function ContentSectionRender({ section, id }: { section: SectionType; id?: string }) {
  const paragraphs = section.body.split(/\n\n+/).filter((p) => p.trim().length > 0);
  return (
    <section id={id} className="mt-12 first:mt-0">
      <h2 className="fraunces-soft mb-4 text-balance text-2xl font-bold text-forest md:text-3xl">
        {section.heading}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-charcoal">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{renderInline(p)}</p>
        ))}
      </div>
    </section>
  );
}
