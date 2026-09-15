'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export function BlogHero() {
  const scrollToArticles = () => {
    const el = document.getElementById('articles-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-slate-200/80 select-none">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Atmospheric Soft Light Blooms */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[350px] rounded-full bg-blue-400/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[350px] rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600"
        >
          <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
          <span>INSIGHTS / KNOWLEDGE HUB</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-balance text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]"
        >
          Ideas, Insights &{' '}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Technology That
          </span>{' '}
          Move Business Forward.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mx-auto max-w-2xl text-balance text-base text-slate-600 sm:text-lg leading-relaxed font-normal"
        >
          Explore practical insights on software development, business automation, ERP, CRM, AI, cloud technology, and digital transformation.
        </motion.p>

        {/* Buttons using existing MagneticButton */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <button
            onClick={scrollToArticles}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Compass className="h-4 w-4 text-blue-600" />
            <span>Explore Articles</span>
          </button>

          <MagneticButton
            href="/contact"
            variant="default"
            size="default"
            className="text-white font-bold text-sm px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 border border-blue-500"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
