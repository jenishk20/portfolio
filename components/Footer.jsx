'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { personalInfo } from '../lib/data';

const socials = [
  {
    icon: FaLinkedin,
    href: personalInfo.linkedin,
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-400',
  },
  {
    icon: FaGithub,
    href: personalInfo.github,
    label: 'GitHub',
    hoverColor: 'hover:text-slate-300',
  },
  {
    icon: SiCodeforces,
    href: personalInfo.codeforces,
    label: 'Codeforces',
    hoverColor: 'hover:text-cyan-400',
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#home" className="text-2xl font-extrabold">
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              JK
            </span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {socials.map(({ icon: Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-slate-500 dark:text-slate-500 ${hoverColor} transition-colors`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* Visitor counter badge */}
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600">
            <span>👁</span>
            {/*
              Replace YOUR_DEPLOYED_URL below with your actual site URL after deploying.
              Example: url=https%3A%2F%2Fjenishkothari.dev
            */}
            <img
              src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjenishkothari-portfolio.vercel.app&count_bg=%237c3aed&title_bg=%231e1b4b&icon=eye.svg&icon_color=%23ffffff&title=visitors&edge_flat=true"
              alt="Visitor count"
              className="h-5 rounded opacity-90"
            />
          </div>

          {/* Bottom line */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-400 dark:text-slate-600 text-center">
            <span>© {new Date().getFullYear()} Jenish Kothari. All rights reserved.</span>
            <span className="hidden sm:block">·</span>
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
