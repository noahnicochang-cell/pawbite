import type { DataTable } from '@/data/content-schema';

export function ContentDataTable({ table }: { table: DataTable }) {
  return (
    <section className="my-10">
      {table.caption && (
        <h3 className="fraunces-soft mb-3 text-lg font-bold text-forest">{table.caption}</h3>
      )}
      <div className="overflow-x-auto rounded-2xl border border-forest/15 bg-offwhite">
        <table className="w-full text-left text-sm">
          <thead className="border-b-2 border-forest/15 bg-cream/50">
            <tr>
              {table.headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 ? 'bg-cream/30' : ''}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-charcoal">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
