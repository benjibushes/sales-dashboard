import React from 'react';

interface Stat {
  number: string;
  label: string;
  sublabel?: string;
}

interface StatsGridProps {
  stats: Stat[];
  className?: string;
}

export default function StatsGrid({ stats, className = '' }: StatsGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-1 ${className}`}>
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="border-4 border-steel p-8 md:p-12 text-center hover:border-pure-white transition-all hover-lift"
        >
          <div className="text-5xl md:text-6xl font-black mb-3">{stat.number}</div>
          <div className="text-xs uppercase tracking-widest font-black mb-1">{stat.label}</div>
          {stat.sublabel && (
            <div className="text-xs text-smoke">{stat.sublabel}</div>
          )}
        </div>
      ))}
    </div>
  );
}

