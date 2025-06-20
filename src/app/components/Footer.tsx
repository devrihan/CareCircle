'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="relative mt-24">
      {/* Violet fade overlay */}
      <div className="absolute -top-10 inset-x-0 h-10 bg-gradient-to-t from-violet-500/10 via-violet-400/5 to-transparent pointer-events-none z-10" />

      <footer className="relative z-20 text-white bg-violet-500/10 backdrop-blur-md shadow-inner">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Left: Navigation Links */}
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-indigo-200 font-semibold tracking-wide uppercase">Quick Links</span>
            <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
            <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
            <Link href="/motive" className="hover:text-indigo-400 transition">Motive</Link>
          </div>

          {/* Center: Social & Logo */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg font-bold tracking-wide text-indigo-100">CareCircle</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rihandav2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/sk-rihan-akhtar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Right: Credits */}
          <div className="text-right text-sm text-indigo-200 flex flex-col gap-1">
            <span>Made with ❤️ in India</span>
            <span>by <strong>Rihan</strong></span>
            <span className="text-xs text-indigo-300/80">© {new Date().getFullYear()} CareCircle. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
