import type { ContentByline as Byline } from '@/data/content-schema';

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return iso;
  }
}

export function ContentByline({ byline }: { byline: Byline }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-forest/15 py-3 text-xs text-charcoal/70">
      <span>
        By <span className="font-semibold text-forest">{byline.author}</span>
      </span>
      <span aria-hidden="true">·</span>
      <span>
        Reviewed by <span className="font-semibold text-forest">{byline.reviewedBy}</span>
      </span>
      <span aria-hidden="true">·</span>
      <span>Published {formatDate(byline.publishedDate)}</span>
      {byline.updatedDate !== byline.publishedDate && (
        <>
          <span aria-hidden="true">·</span>
          <span>Updated {formatDate(byline.updatedDate)}</span>
        </>
      )}
    </div>
  );
}
