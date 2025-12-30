"use client";

import React, { useState } from 'react';
import QuickBookForm from './QuickBookForm';
import Button from './Button';

interface QuickBookModalProps {
  formType: 'business' | 'fitness';
  calendlyUrl?: string;
  triggerText?: string;
}

export default function QuickBookModal({ 
  formType, 
  calendlyUrl,
  triggerText = "Quick Book →" 
}: QuickBookModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="primary"
      >
        {triggerText}
      </Button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-midnight bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-charcoal border-4 border-steel p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-black uppercase mb-2">Quick Book</h3>
                <p className="text-ash font-medium">3 fields. Then pick your time.</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-ash hover:text-pure-white text-3xl font-black leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            
            <QuickBookForm formType={formType} calendlyUrl={calendlyUrl} />
            
            <div className="mt-8 pt-8 border-t-4 border-steel">
              <p className="text-xs uppercase tracking-widest font-black mb-3 text-smoke text-center">
                PREFER MORE DETAIL?
              </p>
              <Button
                onClick={() => setIsOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Fill Out Full Application Instead
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


