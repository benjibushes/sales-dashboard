"use client";

import React, { useState, useEffect } from 'react';

interface StickyBookButtonProps {
  text?: string;
  targetId?: string; // ID of the form to scroll to
}

export default function StickyBookButton({ 
  text = "Book a Call", 
  targetId = "application-form" 
}: StickyBookButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      onClick={scrollToForm}
      className={`
        fixed bottom-8 right-8 z-50
        px-6 py-4
        bg-midnight text-pure-white
        border-4 border-pure-white
        font-black uppercase text-xs tracking-widest
        hover:bg-pure-white hover:text-midnight
        transition-all duration-300
        shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]
        hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
        hover:translate-x-[-2px] hover:translate-y-[-2px]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}
      `}
      aria-label={text}
    >
      {text} →
    </button>
  );
}

