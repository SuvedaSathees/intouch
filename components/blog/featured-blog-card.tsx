'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

export function FeaturedBlogCard({ post }: { post: BlogPost }) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="group relative block rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-8 lg:p-10 shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={`Read featured article: ${post.title}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Image Section */}
            <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 relative aspect-[16/10] sm:aspect-[16/9] w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/85 text-white backdrop-blur-md border border-white/20 shadow-md">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                  <span>Latest Guide</span>
                </span>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="lg:col-span-5 space-y-4 text-left">
              {/* Category & Metadata */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 border border-blue-200 text-blue-600">
                  {post.category.toUpperCase()}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-500">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span>{post.readingTime}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-500">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <span>{post.publishedDate}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {post.description}
              </p>

              {/* Action Link */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
