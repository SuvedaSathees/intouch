'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex flex-col justify-between h-full rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 text-left shadow-xs hover:shadow-xl hover:border-blue-400/90 transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label={`Read article: ${post.title}`}
      >
        {/* Top hover gradient bar matching existing website */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="space-y-4">
          {/* Featured Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Category & Reading Time */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200/60">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500">
              <Clock className="h-3 w-3 text-slate-400" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Card Footer: Read Article Link */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
          <span>Read Article</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.article>
  );
}
