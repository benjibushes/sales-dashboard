import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '/work', label: 'Work' },
    { href: '/fitness', label: 'Fitness' },
    { href: '/odds', label: 'Odds' },
    { href: '/about', label: 'About' },
    { href: '/journal', label: 'Journal' },
  ];

  return (
    <footer className="border-t-4 border-steel bg-true-black">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-black uppercase tracking-tighter hover:text-smoke transition-colors">
              BenBuildsBiz
            </Link>
            <p className="text-ash mt-4 font-medium text-sm">
              Building businesses, bodies, and brands that can handle pressure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-black uppercase text-xs tracking-widest mb-6">Navigate</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ash hover:text-pure-white transition-colors font-bold uppercase text-xs tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="font-black uppercase text-xs tracking-widest mb-6">Connect</h3>
            <p className="text-ash font-bold uppercase text-xs tracking-wider">Colorado, USA</p>
            <p className="text-smoke mt-3 text-sm">Building for the long haul.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-4 border-steel flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-smoke uppercase tracking-widest">
            © {currentYear} BenBuildsBiz
          </p>
          <div className="flex gap-8 text-xs">
            <Link href="/privacy" className="text-smoke hover:text-pure-white transition-colors uppercase tracking-wider font-bold">
              Privacy
            </Link>
            <Link href="/terms" className="text-smoke hover:text-pure-white transition-colors uppercase tracking-wider font-bold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

