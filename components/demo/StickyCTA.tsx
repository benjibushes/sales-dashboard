"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <Link
      href="/demo/book"
      className={`
        fixed bottom-8 right-8 z-50
        px-6 py-3
        bg-gray-900 text-white
        rounded-lg
        font-medium text-sm
        shadow-lg hover:shadow-xl
        hover:bg-gray-800
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}
      `}
    >
      Book a Call →
    </Link>
  );
}


