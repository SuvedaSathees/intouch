'use client';

import React from 'react';
import { ListTree } from 'lucide-react';
import { getAnchorId } from '@/data/blogPosts';

type Props = {
  items: string[];
};

export function TableOfContents({ items }: Props) {
  if (!items || items.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 text-left shadow-2xs"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-100 pb-3">
        <ListTree className="h-4 w-4 text-blue-600 shrink-0" />
        <span>TABLE OF CONTENTS</span>
      </div>

      <ol className="flex flex-col divide-y divide-slate-100/80 text-sm font-medium">
        {items.map((item, idx) => {
          const anchorId = getAnchorId(item);
          const numStr = String(idx + 1).padStart(2, '0');

          return (
            <li key={idx}>
              <a
                href={`#${anchorId}`}
                onClick={(e) => handleClick(e, anchorId)}
                className="group flex items-baseline gap-3 py-2.5 px-3 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-colors duration-150 cursor-pointer"
              >
                <span className="w-8 shrink-0 font-mono font-bold text-xs text-blue-600 tabular-nums text-left group-hover:text-blue-700">
                  {numStr}.
                </span>
                <span className="flex-1 text-left leading-relaxed text-slate-700 group-hover:text-blue-600 transition-colors">
                  {item}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
