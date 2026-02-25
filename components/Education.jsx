'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { education } from '../lib/data';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="section-subtitle">Academic foundation across two continents.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="card p-6 sm:p-8 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5">
                    <Image
                      src={item.logo}
                      alt={item.institution}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                        {item.institution}
                      </h3>
                      <p className="text-violet-500 dark:text-violet-400 font-semibold text-sm mt-0.5">
                        {item.degree}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 block">
                        {item.duration}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* GPA */}
                  <div className="inline-flex items-center gap-1.5 mb-4">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      GPA:
                    </span>
                    <span className="text-xs font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                      {item.gpa}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
