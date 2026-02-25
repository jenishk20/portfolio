'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { personalInfo, stats } from '../lib/data';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timeout;
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, roleIndex]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/10 dark:bg-violet-600/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              {...fadeUp(0)}
              className="text-sm font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-3"
            >
              Hello, World 👋
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-slate-900 dark:text-white"
            >
              I&apos;m{' '}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                Jenish Kothari
              </span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div {...fadeUp(0.16)} className="h-10 mb-5">
              <p className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300">
                {displayText}
                <span className="animate-blink text-violet-500 ml-0.5">|</span>
              </p>
            </motion.div>

            <motion.p
              {...fadeUp(0.24)}
              className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base"
            >
              ex-Adobe & Dell SWE Intern · Harvard Hackathon Winner · ICPC Rank 94 ·{' '}
              <span className="text-slate-700 dark:text-slate-300 font-medium">Boston, MA</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.32)}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-12"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
              >
                <FaLinkedin size={15} />
                Connect
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                <FaGithub size={15} />
                GitHub
              </a>
              <a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                <SiCodeforces size={15} />
                Codeforces
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.4)}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center lg:text-left"
                >
                  <div className="text-xl font-extrabold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Outer gradient ring */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 shadow-2xl shadow-violet-500/30">
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                  {/*
                    Replace the div below with:
                    <img src="/images/profile.png" className="w-full h-full object-cover" alt="Jenish Kothari" />
                    once you have a photo ready.
                  */}
                  <span className="text-5xl sm:text-6xl font-black bg-gradient-to-br from-violet-500 to-cyan-500 bg-clip-text text-transparent select-none">
                    JK
                  </span>
                </div>
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 shadow-lg">
                📍 Boston, MA
              </div>

              {/* Floating achievement badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                Open to Work
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#experience"
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-violet-500 dark:hover:text-violet-400 transition-colors group"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <FaArrowDown
              size={14}
              className="animate-bounce group-hover:text-violet-500 transition-colors"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
