"use client";

import React, { useState } from 'react';
import Button from './Button';

interface QuickBookFormProps {
  formType: 'business' | 'fitness';
  calendlyUrl?: string;
}

export default function QuickBookForm({ formType, calendlyUrl = "https://calendly.com/benibeauchman/30min" }: QuickBookFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const formspreeEndpoints = {
    business: 'https://formspree.io/f/xykyklwq',
    fitness: 'https://formspree.io/f/xzdbdyrn',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(formspreeEndpoints[formType], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
          quickBook: true,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (status === 'success') {
    return (
      <div className="border-4 border-pure-white p-10 bg-midnight text-center">
        <div className="text-6xl mb-6">✓</div>
        <h4 className="text-2xl font-black uppercase mb-4">Perfect! Book Your Call Now</h4>
        <p className="text-ash font-medium mb-8">
          Your info is saved. Click below to pick a time that works for you.
        </p>
        
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-primary px-12 py-4 mb-6 text-lg"
        >
          Choose Your Time →
        </a>
        
        <div className="border-t-4 border-steel pt-6 mt-6">
          <p className="text-xs uppercase tracking-widest font-black mb-3 text-smoke">
            OR WAIT FOR MY EMAIL
          </p>
          <p className="text-ash text-sm">
            I'll also send you a calendar link via email within 24 hours. But spots fill fast—book now to secure your time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-widest font-black mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-widest font-black mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-black mb-2">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
          placeholder="(555) 123-4567"
        />
      </div>

      {status === 'error' && (
        <div className="border-4 border-smoke p-4">
          <p className="text-smoke font-bold uppercase text-xs tracking-widest">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full">
        {status === 'loading' ? 'Sending...' : 'Continue to Calendar →'}
      </Button>

      <p className="text-xs text-smoke uppercase tracking-widest font-black text-center">
        Takes 30 seconds. Book your call instantly.
      </p>
    </form>
  );
}

