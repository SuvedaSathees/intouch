'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Cpu, Cloud, CheckCircle2 } from 'lucide-react';

const insights = [
  {
    icon: ShieldCheck,
    tag: 'PRINCIPLE 01',
    title: '100% Client Code Ownership',
    desc: 'You maintain full ownership of all source code, database architectures, and software licenses with zero recurring per-user fees.',
    highlights: ['Full Git Repository Handover', 'Zero Vendor Lock-in', 'No Per-Seat Monthly Licensing'],
  },
  {
    icon: Layers,
    tag: 'PRINCIPLE 02',
    title: 'Bespoke Operational Logic',
    desc: 'Systems engineered around your exact multi-warehouse, manufacturing, and accounting workflows rather than rigid off-the-shelf templates.',
    highlights: ['Custom Bill of Materials (BOM)', 'GST & Financial Ledgers', 'Automated Reorder Thresholds'],
  },
  {
    icon: Cpu,
    tag: 'PRINCIPLE 03',
    title: 'Modern Architecture & Clean APIs',
    desc: 'Engineered with Next.js, React, Node.js, and PostgreSQL for maximum performance, data consistency, and hardware interoperability.',
    highlights: ['ACID-Compliant Transactions', 'Biometric & POS Hardware Sync', 'Modular Microservices Design'],
  },
  {
    icon: Cloud,
    tag: 'PRINCIPLE 04',
    title: 'Secure Cloud & DevOps Delivery',
    desc: 'Automated deployment pipelines, automated offsite database backups, and enterprise-grade encryption at rest and in transit.',
    highlights: ['Continuous Integration / CD', 'Automated Daily Backups', 'Role-Based Access Control (RBAC)'],
  },
];

export function TechInsights() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-24 border-t border-slate-200/80 select-none">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
              <span>CORE ARCHITECTURAL STANDARDS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              Engineering Principles That{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Power Real Growth.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Every article, system blueprint, and custom software solution we deliver adheres to rigorous enterprise engineering standards.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 text-left shadow-xs hover:shadow-xl hover:border-blue-400/90 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shadow-xs group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
