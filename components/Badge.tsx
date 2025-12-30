import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'solid';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-pure-white text-true-black border-4 border-pure-white',
    outline: 'bg-transparent text-pure-white border-4 border-pure-white',
    solid: 'bg-steel text-pure-white border-4 border-steel',
  };

  return (
    <span className={`inline-block px-4 py-2 font-black uppercase text-xs tracking-widest ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

