'use client';

import { motion } from 'framer-motion';
import { achievements } from '../lib/data';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            Achievements &{' '}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <p className="section-subtitle">
            Highlights from competitive programming, hackathons, and leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <ConditionalLink href={item.link}>
                <div className="group card p-5 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-0.5 transition-all duration-200 h-full">
                  {/* Icon + gradient bar */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} mb-4 text-2xl shadow-md`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">
                      {item.title}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.result}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                        {item.year}
                      </span>
                      {item.link && (
                        <span className="text-xs text-violet-500 dark:text-violet-400 font-semibold group-hover:underline">
                          View ↗
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ConditionalLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConditionalLink({ href, children }) {
  if (!href) return <div className="h-full">{children}</div>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {children}
    </a>
  );
}
