'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../lib/data';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="section-subtitle">
            Award-winning builds and products people actually use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group card flex flex-col overflow-hidden hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gradient header */}
              <div
                className={`h-28 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/40" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border-2 border-white/30" />
                </div>
                {/* Award badge */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.award}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {project.name}
                </h3>
                <p className="text-xs font-semibold text-violet-500 dark:text-violet-400 mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                    >
                      <FaGithub size={13} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={11} />
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
