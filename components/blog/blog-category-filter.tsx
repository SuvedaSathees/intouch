'use client';

import React from 'react';
import { blogCategories, BlogCategory } from '@/data/blogPosts';

export function BlogCategoryFilter({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 sm:flex-wrap sm:justify-center">
        {blogCategories.map((cat) => {
          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
              aria-pressed={isSelected}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
