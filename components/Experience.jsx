'use client';

import { motion } from 'framer-motion';
import { workExperience } from '../lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            Work{' '}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="section-subtitle">
            From Fortune 500 companies to building my own products — here&apos;s what I&apos;ve shipped.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot / company icon */}
                <div
                  className="absolute left-0 top-0 hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-white text-xs font-bold shadow-lg flex-shrink-0 z-10"
                  style={{
                    backgroundColor: exp.iconColor,
                    boxShadow: `0 0 16px ${exp.iconColor}40`,
                  }}
                >
                  {exp.abbr}
                </div>

                {/* Experience card */}
                <div className="group card p-6 hover:border-violet-500/40 dark:hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <p
                        className="font-semibold mt-0.5"
                        style={{ color: exp.iconColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {exp.duration}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        <span className="text-violet-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
