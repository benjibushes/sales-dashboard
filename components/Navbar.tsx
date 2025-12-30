"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/fitness', label: 'Fitness' },
    { href: '/odds', label: 'Odds' },
    { href: '/about', label: 'About' },
    { href: '/journal', label: 'Journal' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-true-black border-b-4 border-steel">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Bold & Utilitarian */}
          <Link 
            href="/" 
            className="font-black text-2xl uppercase tracking-tighter hover:text-smoke transition-colors"
          >
            BenBuildsBiz
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-black uppercase tracking-widest transition-colors hover:text-pure-white link-underline ${
                  isActive(link.href) ? 'text-pure-white' : 'text-ash'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-6 flex flex-col justify-between">
              <span
                className={`w-full h-1 bg-pure-white transition-all ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span
                className={`w-full h-1 bg-pure-white transition-all ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-1 bg-pure-white transition-all ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-8 border-t-4 border-steel">
            <div className="flex flex-col space-y-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-black uppercase tracking-wider transition-colors hover:text-pure-white ${
                    isActive(link.href) ? 'text-pure-white' : 'text-ash'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

