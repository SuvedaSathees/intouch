'use client';

import React, { useState, useMemo } from 'react';
import { BlogPost, blogPosts } from '@/data/blogPosts';
import { BlogCategoryFilter } from '@/components/blog/blog-category-filter';
import { BlogCard } from '@/components/blog/blog-card';
import { AnimatePresence, motion } from 'framer-motion';

export function BlogGrid({ initialPosts = blogPosts }: { initialPosts?: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All Articles') {
      return initialPosts;
    }
    return initialPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory, initialPosts]);

  return (
    <section id="articles-grid" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 scroll-mt-24">
      <div className="space-y-8">
        {/* Section Heading & Category Filter */}
        <div className="space-y-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
                <span>CURATED ARTICLES & GUIDES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
                Latest Publications
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-mono">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          {/* Categories */}
          <BlogCategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Blog Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
            >
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.slug} post={post} index={idx} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-slate-200 bg-white p-12 text-center"
            >
              <p className="text-sm font-semibold text-slate-700">
                No articles published under <span className="text-blue-600 font-bold">&quot;{selectedCategory}&quot;</span> yet.
              </p>
              <button
                onClick={() => setSelectedCategory('All Articles')}
                className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
              >
                View All Articles
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
