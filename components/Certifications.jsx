'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { certifications } from '../lib/data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            AWS{' '}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="section-subtitle">
            3 active AWS certifications spanning cloud architecture, development, and fundamentals.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 text-center max-w-[140px] leading-snug">
                {cert.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
