'use client';

import React from 'react';
import { BlogPost } from '@/data/blogPosts';
import { BlogCard } from '@/components/blog/blog-card';

export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-200/80">
      <div className="space-y-8">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
            <span>CONTINUE READING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
            Related Industry Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <BlogCard key={post.slug} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
