import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
  icon?: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  bullets,
  ctaText,
  ctaHref,
  icon,
  className = '',
}: FeatureCardProps) {
  return (
    <div className={`card-hover card-elite hover-border-glow ${className}`}>
      {icon && <div className="text-5xl mb-6 animate-scale-in">{icon}</div>}
      <h3 className="text-3xl font-black uppercase mb-6 leading-tight text-glow-hover">{title}</h3>
      <p className="text-ash mb-8 text-base font-medium leading-relaxed">{description}</p>
      
      {bullets && bullets.length > 0 && (
        <ul className="space-y-4 mb-8">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-pure-white font-black text-lg">—</span>
              <span className="text-ash text-sm font-medium">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      
      {ctaText && ctaHref && (
        <Link 
          href={ctaHref} 
          className="text-pure-white hover:text-smoke font-black uppercase text-xs tracking-widest inline-flex items-center group border-b-2 border-pure-white pb-1"
        >
          {ctaText}
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </div>
  );
}

