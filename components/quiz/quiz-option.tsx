'use client';

import { cn } from '@/lib/utils';

interface QuizOptionProps {
  label: string;
  sublabel?: string;
  selected: boolean;
  onClick: () => void;
}

export function QuizOption({ label, sublabel, selected, onClick }: QuizOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full flex-col items-start gap-1 rounded-2xl border-2 p-5 text-left transition-all',
        selected
          ? 'border-terracotta bg-terracotta/10'
          : 'border-navy/15 bg-white hover:border-navy/40',
      )}
    >
      <span className="font-editorial text-lg font-extrabold text-navy">{label}</span>
      {sublabel && <span className="font-editorial text-sm text-navy/70">{sublabel}</span>}
    </button>
  );
}
